<template>
	<div>
		<!-- This is an example component -->

		<div
			class="banner bg-blue-800 bg-banner-outer shadow-2xl"
			:style="{ backgroundImage: `url('${featuredMedia.sourceUrl}')` }"
		>
			<div class="container mx-auto h-full flex flex-col justify-center">
				<div class="caption">
					<g-link :to="'/'">
						<h1
							class="caption-text bg-navy text-white text-3xl font-semibold float-left py-2 px-8 shadow-2xl"
							v-html="$page.post.title"
						/>
					</g-link>
				</div>
			</div>
		</div>

		<div class="container mx-auto">
			<!-- Two columns -->
			<div class="flex mb-4">
				<div class="w-3/4 posts-wrap mr-12 segment-text bg-white px-12 py-12">
					<div
						class="post-content text-break"
						v-html="$page.post.content"
					/>

					<template v-if="$page.post.tags.length">
						<h4>Tags:</h4>
						<ul class="tags-list">
							<li
								v-for="tag in $page.post.tags"
								class="inline-block"
								:key="tag.id"
							>
								<g-link
									class="mb-2 tag text-dark inline-block text-grey-dark font-semibold py-1 px-2 border border-grey rounded mr-2 mb-2 text-sm"
									:to="tag.path"
								>{{ tag.title }} ({{ tag.count }})</g-link>
							</li>
						</ul>
					</template>
				</div>
				<div class="w-1/4">
					<site-sidebar />
				</div>
			</div>
		</div>

		<site-footer />
	</div>
</template>




<page-query>
query Post($path: String!) {
  post: wordPressPost(path: $path) {
    title
    date
    content
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
      count
    }
    author {
      name
      path
    }
  }
}
</page-query>

<script>
import Post from "~/components/Post.vue";
import SiteSidebar from "~/components/SiteSidebar.vue";
export default {
	components: {
		Post,
		SiteSidebar
	},
	computed: {
		featuredMedia() {
			return this.$page.post.featuredMedia;
		}
	},
	metaInfo() {
		return {
			title: this.$page.post.title
		};
	}
};
</script>


<style scoped>
.tag {
	color: black;
	font-size: 0.875rem;
}

.bg-banner-outer {
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
}
.tags-list {
	margin-left: 0;
	margin-right: 0;
}
</style>
