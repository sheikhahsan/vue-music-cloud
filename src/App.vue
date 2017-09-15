<template>
  <div id="app">

   	<!-- Sidebar Menu -->
  	<div :class="{'ui vertical nverted sidebar menu': true, visible: elementVisible.sidebar}">
		<a id="sidebar-icon" class="toc item"  @click="toggleSidebar">
			<i class="sidebar icon"></i>
		</a>
		<a class="active item">Home</a>
		<a class="item">Trending</a>
		<a class="item">Live</a>
		<a class="item">Login</a>
		<a class="item">Signup</a>
  	</div>

	<div class="ui inverted vertical masthead center aligned segment">
  		<div class="ui container">
    		  <div class="ui large secondary inverted pointing menu">
      			<a class="toc item" @click="toggleSidebar">
      				<i class="sidebar icon"></i>
      			</a>
      			<a class="item" v-for="(value, key) in pageRoutes" @click="goToRoute(value)">{{key}}</a>
      			<!-- <a class="active item">Home</a>
      			<a class="item">Trending</a> -->
      			<a class="item">Live</a>
      			<div class="right item">
					<a class="ui inverted button">Log in</a>
					<a class="ui inverted button">Sign Up</a>
      			</div>
		  	</div>
		</div>
	</div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'app',
	data () {
	  	return {
			elementVisible: {
				sidebar: false
			},
			pageRoutes: {
				'Home': '/',
				'Trending': '/trending'
			}
	  	}
	},
	methods: {
	    toggleSidebar () {
	    	this.elementVisible.sidebar = !this.elementVisible.sidebar
	    },
	    goToRoute (path) {
	    	this.$router.push(path);
	    }
	}
}
</script>

<style scoped>

	#sidebar-icon{
		padding-bottom: 30px;
	}
	.secondary.pointing.menu .toc.item {
		display: none;
	}

	.masthead .ui.menu .ui.button {
		margin-left: 0.5em;
	}

	@media only screen and (max-width: 700px) {
		.secondary.pointing.menu .toc.item {
			display: block;
		}
	}
</style>
