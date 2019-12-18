<template>
	<Layout>
		<masonry
			class="pt-8"
			:cols="3"
			:gutter="30"
		>
			<Post
				:post="node"
				v-for="{ node } in $page.allWordPressPost.edges"
				:key="node.id"
				v-if="$page"
			/>
		</masonry>

		<Pagination
			class="pt-2 pb-2"
			:info="$page.allWordPressPost.pageInfo"
		/>
	</Layout>
</template>

<page-query>
query Home($page: Int) {
  allWordPressPost(page: $page, perPage: 9) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
       featuredMedia{

       mediaDetails{
          sizes{
            medium{
              sourceUrl
            }
          }
        }

        id
        sourceUrl
      }
            date(format: "YYYY-MM-DD")
        id
        title
        path
        content
        excerpt
        tags{
          id
          title
          path
        }
        categories {
          id
          title
          path
        }
        author {
          name
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Post from "~/components/Post.vue";
import Pagination from "~/components/Pagination.vue";

export default {
	components: {
		Post,
		Pagination
	},
	mounted() {},

	methods: {},
	metaInfo: {
		title: "Latest Stories"
	}
};
</script>


<style scoped>
</style>
