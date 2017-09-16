<template>
  <div id="app">

   	<!-- Sidebar Menu -->
  	<div :class="{'ui vertical nverted sidebar menu': true, visible: elementVisible.sidebar}">
		<a id="sidebar-icon" class="toc item"  @click="toggleSidebar">
			<i class="sidebar icon"></i>
		</a>
		<a class="active item">Home</a>
		<a class="item">Trending</a>
		<a class="item">Discover</a>
		<a class="item">Login</a>
		<a class="item">Signup</a>
  	</div>

	<div class="ui inverted vertical masthead center aligned segment">
  		<div class="ui container">
    		  <div class="ui large secondary inverted pointing menu">
      			<a class="toc item" @click="toggleSidebar">
      				<i class="sidebar icon"></i>
      			</a>
      			<a class="item logo" @click="goToRoute('Home','/')">
      				<i class="mixcloud large icon"></i>MusicCloud
  				</a>
      			<a class="item" v-for="(value, key) in pageRoutes" @click="goToRoute(key,value)"
      			:class='{active: currentPage==key}'>{{key}}</a>
      			<!-- <a class="active item">Home</a>
      			<a class="item">Trending</a> -->
      			<a class="item">Discover</a>
      			<div class="right item">
					<a class="ui inverted button">Log in</a>
					<a class="ui inverted button">Sign Up</a>
      			</div>
		  	</div>
		</div>
	</div>

    <router-view></router-view>
	<player id="player"></player>
  </div>
</template>

<script>
import Player from './components/Player'
export default {
	name: 'app',
	data () {
	  	return {
			elementVisible: {
				sidebar: false
			},
			currentPage: 'Home',
			pageRoutes: {
				'Home': '/',
				'Trending': '/trending'
			}
	  	}
	},
	components:{
		Player
	},
	methods: {
	    toggleSidebar () {
	    	this.elementVisible.sidebar = !this.elementVisible.sidebar
	    },
	    goToRoute (name,path) {
	    	this.currentPage = name;
	    	this.$router.push(path);
	    }
	}
}
</script>

<style scoped>

	.logo{
		font-family: "Trebuchet MS";
		font-style: italic;
		font-weight: bold;
		margin-bottom: 0px;
		max-height: 40px;
	}

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
		.secondary.pointing.menu .item{
			display: none;
		}
	}
</style>
