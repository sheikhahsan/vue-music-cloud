<template>
	<div class="card" @mouseover="showHoverTransition" @mouseout="hideHoverTransition">
		<div class="blurring dimmable image">
		  <div :class="{'ui dimmer': true, 'transition visible active': hover}">
		    <div class="content">
		      <div class="center">
		        <div class="ui inverted labeled icon button" @click="playSong(song)">
		        	<i class="play icon"></i>Play
	        	</div>
		      </div>
		    </div>
		  </div>
		  <img :src="song.img">
		</div>
		<div class="content">
			<a class="header" href="#">{{song.title}}</a>
			<div class="meta">
				by&nbsp<a>{{song.artist}}</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'MusicCard',
	data () {
		return{
			hover: false			
		}
	},
	props:{
		song: Object
	},
	methods:{
		showHoverTransition () {
			this.hover = true;
		},
		hideHoverTransition () {
			this.hover = false;
		},
		playSong (song) {
			this.$store.commit('play',song);
		}		
	}
}
</script>