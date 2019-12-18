<template>
	<Layout>
		<h1
			class="text-xl uppercase font-semibold pt-8"
		>Category: {{ $page.category.title }}</h1>
		<masonry
			class="pt-8"
			:cols="3"
			:gutter="30"
		>
			<Post
				:post="node"
				v-for="{ node } in $page.category.belongsTo.edges"
				:key="node.id"
				v-if="$page"
			/>
		</masonry>
		<Pagination :info="$page.category.belongsTo.pageInfo" />
	</Layout>
</template>

<page-query>
query Category($path: String, $page: Int) {
  category: wordPressCategory(path: $path) {
    title
    belongsTo(page: $page, perPage: 9) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
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
	metaInfo() {
		return {
			title: this.$page.category.title
		};
	}
};
</script>
