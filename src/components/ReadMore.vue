<template>
	<div>
		<g-link
			class="read-more bg-custom-navy text-white inline-block text-grey-dark font-semibold py-1 px-2 border border-grey rounded mr-2 text-sm"
			:to="post.path"
		>
			<span>
				<b class="text-uppercase">Read More</b>
			</span>
		</g-link>
		<span v-html="readingTime" />
	</div>
</template>

<script>
import FormatedDate from "~/components/FormatedDate.vue";

export default {
	components: {
		FormatedDate
	},
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	computed: {
		readingTime() {
			const wordsCountApprox = this.post.content
				.split(" ")
				.filter(e => e.length > 2).length;
			const timeInMins = Math.round(wordsCountApprox / 200);
			return ` &asymp;${Math.max(1, timeInMins)}min`;
		}
	}
};
</script>


<style>
.bg-custom-navy {
	background-color: #24255a;
}
</style>
