<template>
<div id ="player" v-if="song.id">
  	<audio
  		id="audio"
		src="https://goo.gl/Kj3fUL"
		@timeupdate="updateTime"
		>
		Your browser does not support the <code>audio</code> element.
	</audio>

	<p></p>
	<div class="ui sixteen column grid">
		<!-- <div class="row"> -->
			<div class="one wide column">
	    		<img class="ui mini image" :src="song.img">
			</div>
			<div class="two wide column">
				<div class="ui text">{{song.artist}}</div>
				<div class="ui sa-bold text">{{song.title}}</div>
			</div>
			<div class="column">
				<i class="large step backward icon"></i>
			</div>
			<div class="column" v-show="paused">
				<i class="large play icon" @click="play"></i>
			</div>
			<div class="column" v-show="played">
				<i class="large pause icon" @click="pause"></i>
			</div>
			<div class="column">
				<i class="large step forward icon"></i>
			</div>
			<div class="six wide column">
			</div>
			<div class="four wide right floated column">
				<div class="ui twelve column grid">
					<div class="five wide column">
						<div class="ui sa-bod text icon">
						{{durationPlayed.min+':'+durationPlayed.sec+'/'+song.duration}}
						</div>
					</div>
					<div class="two wide column">
						<i class="large random icon"></i>
					</div>
					<div class="two wide column">
						<i class="large retweet icon"></i>
					</div>
					<div class="two wide column">
						<i class="large empty star icon"></i>
					</div>
					<div class="two wide column">
						<i class="big volume up icon" @click="test"></i>
					</div>
				</div>
			</div>

		<!-- </div> -->
    </div>
</div>
</template>

<script>
export default{
	name: 'Player',
	data() {
		return{	
			played: false,
			paused: true,
			durationPlayed: {
				min: '00',
				sec: '00'
			}
		}
	},
	computed: {
		song () {
			return this.$store.state.song;
		}//,
		// minPlayed() {

		// 	return minutes;
		// },
		// secPlayed() {
		// 	const time = this.currentTime;
		// 	const minutes = Math.floor(time / 60);
		// 	const seconds = time - minutes * 60;
		// 	return seconds;				
		// }
	},
	methods: {
		play() {
			$('#audio')[0].play();
			this.played = true;
			this.paused = false;
		},
		pause() {
			$('#audio')[0].pause();
			this.paused = true;
			this.played = false;
		},
		test() {
		},
		updateTime() {		
			const time = $('#audio')[0].currentTime;
			const minutes = Math.floor(time / 60);
			const seconds = Math.floor(time - minutes * 60);
			this.durationPlayed.min = minutes < 10 ? '0' + minutes : minutes; 
			this.durationPlayed.sec = seconds < 10 ? '0' + seconds : seconds;
		}
	},
    created() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
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