<template>
<div id ="player">
	<hr>
	<div class="ui sixteen column grid">
		<!-- <div class="row"> -->
			<div class="one wide column">
	    		<img class="ui mini image" src="/static/images/song1.png">
			</div>
			<div class="two wide column">
				<div class="ui text">Quavo</div>
				<div class="ui sa-bold text">Stars In The Ceiling</div>
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
						0:07/3:39
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


<style scoped>
#player {
    bottom: 0;
    color: white;
    left: 0;
    position: fixed;
    height: 70px;   
    width: 100%; 
}

.ui.mini.image{
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