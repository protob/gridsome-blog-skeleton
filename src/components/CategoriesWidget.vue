<template>
	<aside>
		<h2
			class="sibebar-cats bg-navy text-white px-4 py-4 text-center uppercase font-semibold"
		>Categories</h2>

		<div class="widget-content py-2 px-4 bg-white">
			<ul>
				<li
					v-for="{ node } in $static.allWordPressCategory.edges"
					:key="node.slug"
					class="mb-2"
				>
					<g-link
						class="text-sm font-semibold uppercase"
						:to="node.path"
					>{{ node.title }} ({{ node.count }})</g-link>
				</li>
			</ul>
		</div>
	</aside>
</template>

<static-query>
query {
  allWordPressCategory(sortBy: "count", limit: 100) {
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
