<template>
  <div id="app">


	<div class="ui mini modal">
		<div class="header">
			Create an Account
		</div>
		<div class="content">
			<div class="fluid ui vertical buttons">
				<button class="ui facebook button">
					<i class="facebook icon"></i>
					Join with Facebook
				</button>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<button class="ui google plus fluid button">
					<i class="google icon"></i>
					Join with Google
				</button>
			</div>
			<div class="ui horizontal divider">
				Or
			</div>
			<div class="ui form">
				<div class="field">
					<input type="email" placeholder="Email">
				</div>
				<div class="field">
					<input type="password" placeholder="Password">
				</div>
			</div>
		</div>
		<div class="actions">
				<div class="ui secondary basic button">SIGN UP</div>
		</div>
	</div>

   	<!-- Sidebar Menu -->
  	<div :class="{'ui vertical inverted sidebar menu': true, visible: elementVisible.sidebar}">
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
      			<div class="right item">
					<a class="ui inverted button">Log in</a>
					<a class="ui inverted button" @click="openModal">Sign Up</a>
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
				'Trending': '/trending',
				'Discover': '/discover'
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
	    },
	    openModal () {
	    	$('.ui.modal')
			  .modal('show')
			;
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
