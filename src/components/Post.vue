<template>
	<div class="post-item shadow-2xl bg-white">
		<div class="item-inner border border-gray-400 pb-3">
			<div class="thumb">
				<g-link
					:to="post.path"
					class="text-dark"
				>
					<g-image
						v-if="post.featuredMedia.mediaDetails.sizes"
						:src="post.featuredMedia.mediaDetails.sizes.medium.sourceUrl"
						width="300"
					/>
					<img
						v-else
						src="~@/assets/images/thumb.png"
					/>
				</g-link>
			</div>

			<div class="content px-3 bg-white">
				<div class="top-bar flex content-between pt-3 mb-2">
					<div
						class="cats overflow-hidden w-1/2"
						v-if="post.categories"
					>
						<g-link
							:to="cat.path"
							:key="cat.title"
							class="text-dark inline-block text-grey-dark font-semibold py-1 px-2 border border-grey rounded mr-2"
							v-for="cat in post.categories"
						>
							<h2
								class="post-title text-break text-xs"
								v-html="cat.title"
							/>
						</g-link>
					</div>

					<div class="date inline-block w-1/2 text-right text-xs pt-1">{{post.date}}</div>
				</div>

				<!-- <div class="author" v-if="post.author">{{ post.author.name }}</div> -->

				<div class="title">
					<g-link
						:to="post.path"
						class="text-dark"
					>
						<h2
							class="h1 post-title text-break mb-2 text-xl uppercase"
							v-html="post.title"
						/>
					</g-link>
				</div>
				<div
					class="tags overflow-hidden mb-2"
					v-if="post.tags"
				>
					<g-link
						:to="postTag.path"
						:key="postTag.title"
						class="bg-gray-300 text-dark inline-block text-grey-dark font-semibold py-1 px-2 border border-grey rounded mr-2"
						v-for="postTag in post.tags"
					>
						<h4
							class="h1 post-title text-break text-xs"
							v-html="postTag.title"
						/>
					</g-link>
				</div>

				<div
					class="post-excerpt text-break mb-4"
					v-html="customExcerpt"
				/>
				<read-more :post="post" />
			</div>
		</div>
	</div>
</template>

<script>
import CategoriesList from "~/components/CategoriesList.vue";
import FormatedDate from "~/components/FormatedDate.vue";
import ReadMore from "~/components/ReadMore.vue";
const excerpts = require("excerpts");
export default {
	components: {
		CategoriesList,
		FormatedDate,
		ReadMore
	},
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	computed: {
		customExcerpt() {
			if (this.post.excerpt) {
				return excerpts(this.post.excerpt, { words: 10 });
			}
		}
	}
};
</script>
<style scoped>
.post-item {
	max-width: 294.984px;
	margin-bottom: 2rem;
}

.thumb {
	max-height: 200px;

	overflow: hidden;
}
</style>
