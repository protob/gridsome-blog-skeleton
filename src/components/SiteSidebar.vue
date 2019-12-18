<template>
	<div>
		<div
			class="sibebar-info-box bg-navy text-white px-4 py-8 text-center uppercase mb-4 h-48"
		>
			<div class="caption">
				<h1 class="text-white text-4xl font-semibold">
					<span class="text-teal-500">EN</span>
					<span>TANGLE</span>
				</h1>
				<h3 class="text-white text-xs">Gridsome + Wordpress Blog</h3>
			</div>
		</div>

		<tags-widget class="mb-5 shadow-2xl" />
		<categories-widget class="mb-5 shadow-2xl" />
		<!-- <archive-widget class="mb-5" /> -->
	</div>
</template>


<script>
import TagsWidget from "~/components/TagsWidget.vue";
import CategoriesWidget from "~/components/CategoriesWidget.vue";
import ArchiveWidget from "~/components/ArchiveWidget.vue";
export default {
	name: "sidebar",
	components: {
		TagsWidget,
		CategoriesWidget,
		ArchiveWidget
	}
};
</script>
<style scoped>
</style>
