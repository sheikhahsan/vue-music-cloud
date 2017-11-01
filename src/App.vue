<template>
  <div id="app">

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
      			<a class="item logo">
      				<router-link to="/"><i class="mixcloud large icon"></i>MusicCloud</router-link>
  				</a>
  				<a class="item" v-for="(value, key) in pageRoutes" 
      			:class='{active: isActive(value)}'>
      				<router-link :to="value">{{key}}</router-link>
      			</a>
      			<div class="right item">
					<a class="ui inverted button" @click="openLoginModal">Log in</a>
					<a class="ui inverted button" @click="openSignupModal">Sign Up</a>
      			</div>
		  	</div>
		</div>
	</div>

    <router-view></router-view>

	<div class="ui inverted vertical footer segment">
  		<div class="ui container">
  		  <div class="ui stackable inverted divided equal height stackable grid">
  			<div class="three wide column">
  			  <h4 class="ui inverted header">Get in touch</h4>
  			  <div class="ui inverted link list">
  				<a href="#" class="item">Contact Us</a>
  				<a href="#" class="item">Blog</a>
  			  </div>
  			</div>
  			<div class="three wide column">
  			  <h4 class="ui inverted header">Services</h4>
  			  <div class="ui inverted link list">
  				<a href="#" class="item">Shop</a>
  				<a href="#" class="item">Stream</a>
  				<a href="#" class="item">API</a>
  				<a href="#" class="item">Hire Us</a>

  			  </div>
  			</div>
  			<div class="seven wide column">
  			  <h4 class="ui inverted header">About M Cloud</h4>
  			  <p>As the world’s largest music and audio platform, MusicCloud lets people discover and enjoy the greatest
            selection of music from the most diverse creator community on earth. Since launching in 2008, the platform
            has become renowned for its unique content and features, including the ability to share music and connect
            directly with artists, as well as unearth breakthrough tracks, raw demos, podcasts and more. </p>
  			</div>
  		  </div>
  		</div>
  	  </div>

	<player id="player"></player>
	<signup id="signup"></signup>
	<login id="login"></login>

  </div>
</template>

<script>
import Player from './components/Player'
import Signup from './components/Signup'
import Login from './components/Login'
export default {
	name: 'app',
	data () {
	  	return {
			elementVisible: {
				sidebar: false
			},
			pageRoutes: {
				'Home': '/',
				'Trending': '/trending',
				'Discover': '/discover'
			}
	  	}
	},
	components:{
		Player,
		Signup,
		Login
	},
	methods: {
	    toggleSidebar () {
	    	this.elementVisible.sidebar = !this.elementVisible.sidebar
	    },
	    openSignupModal () {
	    	$('#signup').modal('show');
	    },
	    openLoginModal() {
	    	$('#login').modal('show');
	    },
	    isActive(path){
	    	return path === this.$route.path
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

	.footer.segment {
    	padding: 5em 0em;
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
