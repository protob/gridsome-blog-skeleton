<template>
	<aside class="mb-5">
		<h2
			class="sibebar-cats bg-navy text-white px-4 py-4 text-center uppercase font-semibold"
		>Tags</h2>
		<div class="widget-content bg-white px-4 py-2">
			<ul>
				<li
					class="inline-block"
					v-for="{ node } in $static.allWordPressPostTag.edges"
					:key="node.slug"
				>
					<g-link
						class="text-dark inline-block text-grey-dark font-semibold py-1 px-2 border border-grey rounded mr-2 mb-2 text-sm"
						:to="node.path"
					>{{ node.title }} ({{ node.count }})</g-link>
				</li>
			</ul>
		</div>
	</aside>
</template>

<static-query>
query {
  allWordPressPostTag(sortBy: "slug", limit: 100, order: ASC) {
    edges {
      node {
        title
        slug
        count
        path
      }
    }
  }
}
</static-query>

<style scoped>
.widget-content {
	min-height: 200px;
}
</style>
