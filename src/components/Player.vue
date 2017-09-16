<template>
<div id ="player" v-if="song.id">
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
			<div class="column">
				<i class="large play icon"></i>
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
						0:00/{{song.duration}}
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
						<i class="big volume up icon"></i>
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
	computed:{
		song () {
			return this.$store.state.song;
		}
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