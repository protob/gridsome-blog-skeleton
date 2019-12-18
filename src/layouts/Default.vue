<template>
	<div>
		<div class="banner bg-blue-800 bg-banner-outer">
			<div class="container mx-auto bg-banner h-full flex flex-col justify-center">
				<div class="caption">
					<g-link :to="'/'">
						<h1 class="text-white text-6xl font-semibold uppercase">
							<span class="text-teal-500">En</span>
							<span>tangle</span>
						</h1>
					</g-link>
					<h3 class="text-white uppercase text-32xl">GRIDSOME + WORDPRESS BLOG</h3>
				</div>
			</div>
		</div>

		<div class="container mx-auto">
			<!-- Two columns -->
			<div class="flex mb-4">
				<div class="w-3/4 posts-wrap mr-8 -mx-3">
					<slot />
				</div>
				<div class="w-1/4">
					<site-sidebar />
				</div>
			</div>
		</div>

		<site-footer />
	</div>
</template>

<script>
import SiteSidebar from "~/components/SiteSidebar.vue";
import SiteFooter from "~/components/SiteFooter.vue";
export default {
	components: {
		SiteSidebar,
		SiteFooter
	}
};
</script>

<style>
.banner {
	height: 320px;
	padding: 40px 0;
}
.bg-banner-outer {
	background: #232459;
	background: -moz-linear-gradient(left, #232459 0%, #2b2b6a 100%);
	background: -webkit-linear-gradient(left, #232459 0%, #2b2b6a 100%);
	background: linear-gradient(to right, #232459 0%, #2b2b6a 100%);
}

.bg-banner {
	background-size: contain;
	background-position: top right;
	background-repeat: no-repeat;
	background-image: url("~@/assets/images/banner-image.png");
}
.fade-enter-active {
	transition: 0.5s;
}

.fade-enter {
	opacity: 0;
}
</style>
