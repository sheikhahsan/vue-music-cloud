<template>
<div id ="player" v-if="song.id">
  	<audio
  		id="audio"
		:src="song.src"
		@timeupdate = "updateCurrentTime"
		@durationchange = "setDuration"
		autoplay
		:loop="loop"
		>
		Your browser does not support the <code>audio</code> element.
	</audio>

	<p></p>
	<div class="ui sixteen column grid">
		<div class="one wide column">
    		<img class="ui mini image" :src="song.img">
		</div>
		<div class="two wide column">
			<div class="ui text">{{song.artist}}</div>
			<div class="ui sa-bold text">{{song.title}}</div>
		</div>
		<div class="column">
			<a href="" @click.prevent><i class="large step backward inverted icon"></i></a>
		</div>
		<div class="column" v-show="paused">
			<a href="" @click.prevent><i class="large play inverted icon" @click="play"></i></a>
		</div>
		<div class="column" v-show="played">
			<a href="" @click.prevent><i class="large pause inverted icon" @click="pause"></i></a>
		</div>
		<div class="column">
			<a href="" @click.prevent><i class="large step forward inverted icon"></i></a>
		</div>
		<div class="five wide column">
		</div>
		<div class="five wide right floated column">
			<div class="ui twelve column grid">
				<div class="five wide column">
					<div class="ui sa-bod text icon">
						{{ durationPlayed.min + ':' + durationPlayed.sec + '/' + duration.min + ':' + duration.sec }}
					</div>
				</div>
				<div class="two wide column">
					<a :href="song.src" download>
						<i class="large arrow circle down inverted icon"></i>
					</a>
				</div>
				<div class="two wide column">
					<a href="" @click.prevent><i :class="{'large retweet inverted icon': true, 'teal': loop}" @click="loop=!loop"></i></a>
				</div>
				<div class="two wide column">
					<i class="large empty star icon"></i>
				</div>
				<div class="two wide column">
					<i class="big volume up icon"></i>
				</div>
			</div>
		</div>
    </div>
</div>
</template>

<script>
export default{
	name: 'Player',
	data() {
		return{	
			played: true,
			paused: false,
			loop: false,
			duration: {
				min: '00',
				sec: '00'
			},
			durationPlayed: {
				min: '00',
				sec: '00'
			},
			audio: $('#audio')[0],
		}
	},
	computed: {
		song () {
			this.played = true;
			this.paused = false;
			console.log('song computed')
			return this.$store.state.song;
		}
	},
	methods: {
		play() {
			audio.play();
			this.played = true;
			this.paused = false;
		},
		pause() {
			audio.pause();
			this.paused = true;
			this.played = false;
		},
		test() {
			audio.download();
		},
		updateCurrentTime() {		
			const time = audio.currentTime;
			const minutes = Math.floor(time / 60);
			const seconds = Math.floor(time - minutes * 60);
			this.durationPlayed.min = minutes < 10 ? '0' + minutes : minutes; 
			this.durationPlayed.sec = seconds < 10 ? '0' + seconds : seconds;
		},
		setDuration() {
			const time = audio.duration;
			const minutes = Math.floor(time / 60);
			const seconds = Math.floor(time - minutes * 60);
			this.duration.min = minutes < 10 ? '0' + minutes : minutes; 
			this.duration.sec = seconds < 10 ? '0' + seconds : seconds;			
		}
	},
    created() {
    	console.log('created');
    }
}
</script>

<style scoped>
#player {
    bottom: 0;
    color: white;
    left: 0;
    position: fixed;
    height: 70px;   
    width: 100%; 
	background-color: #151515;
}

.ui.mini.image{
	min-height: 50px;
	min-width: 50px;
	width: 50px;
	height: 50px;
	margin-left: 10px;
}

.large.icon{
	margin-top: 14px;
}

.big.icon{
	margin-top: 10px;
}

.icon.text{
	margin-top: 15px;
	font-weight: bold;
	font-size: 15px;
}

.sa-bold{
	font-weight: bold;
}

</style>