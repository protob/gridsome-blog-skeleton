<template>
	<div>
		{{$page}}
		<h1 class="mb-5">{{$page.page.title}}</h1>
		<div
			class="page-content"
			v-html="$page.page.content"
		/>
	</div>
</template>

<page-query>
query WordPressPost ($path: String!) {
page:  wordPressPage(path: $path) {
    title
    content
    slug
    metaBox
    {
     details{
      title
      desc
     item{
        title
        desc
        image
      }

    }
    }
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }

  }
}

</page-query>

<script>
import Post from "~/components/Post.vue";

export default {
	metaInfo() {
		return {
			title: this.$page.page.title
		};
	}
};
</script>
