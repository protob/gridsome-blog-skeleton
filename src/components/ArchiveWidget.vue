<template>
	<aside>
		<h2
			class="sibebar-cats bg-navy text-white px-4 py-4 text-center uppercase"
		>Archive</h2>

		<div class="widget-content py-2 px-4 bg-white">
			<pre> {{archiveObj}}</pre>
			<ul>
				<li
					v-for="value in Object.keys(archiveObj)"
					:key="value"
				>
					<g-link :to="`/${value}`">{{value}}</g-link>
					<div
						v-for="val in Object.keys(archiveObj[value])"
						:key="val"
					>
						<g-link :to="`blog/${value}/${val}`">
							<!-- {{archiveObj[value][val]}} -->
							{{new Date(archiveObj[value][val][0].date).toLocaleString('en-GB', { month: 'long' })}}
						</g-link>
					</div>
				</li>
			</ul>
		</div>
	</aside>
</template>

<static-query>
query Home($page: Int) {
  allWordPressPost(page: $page) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
     date(format: "YYYY-MM-DD")
        id
        title
        path

      }
    }
  }
}
</static-query>

<script>
import _ from "lodash";
export default {
	data() {
		return {
			monthMap: {
				1: "January",
				2: "February",
				3: "March",
				4: "April",
				5: "May",
				6: "June",
				7: "July",
				8: "August",
				9: "September",
				10: "October",
				11: "November",
				12: "December"
			},
			archiveObj: {}
		};
	},
	methods: {
		guid() {
			// I generate the UID from two parts here
			// to ensure the random number provide enough bits.
			var firstPart = (Math.random() * 46656) | 0;
			var secondPart = (Math.random() * 46656) | 0;
			firstPart = ("000" + firstPart.toString(36)).slice(-3);
			secondPart = ("000" + secondPart.toString(36)).slice(-3);
			return firstPart + secondPart;
		}
	},
	mounted() {
		let obj = {};
		const items = this.$static.allWordPressPost.edges;
		const modified = items.map(el => ({
			date: el.node.date,

			...el
		}));
		let res = {};

		let fn = (year, month, o = res, array = modified) => {
			o[year][month] = array.filter(
				({ date: d }) => `${year}-${month}` === d.slice(0, 7)
			);
		};

		for (let { date } of modified) {
			let [year, month] = date.match(/\d+/g);
			if (!res[year]) res[year] = {};
			fn(year, month);
		}

		this.archiveObj = res;
	}
};
</script>

<style scoped>
.widget-content {
	min-height: 200px;
}
</style>
