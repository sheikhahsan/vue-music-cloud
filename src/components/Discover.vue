<template>
<div>

	<div class="ui inverted vertical segment">
		<div class="ui container">
			<div class="ui grid">
				<div class="four wide column">
					<div class="ui inverted vertical pointing menu">
						<a :class="{item: true, active: category==currentCategory}" v-for="category in categories"
						@click="currentCategory=category">
							{{category}}
						</a>
					</div>
				</div>
				<div class="twelve wide stretched column content">				
					<div class="ui large inverted header">
						{{currentCategory}}
					</div>
					<div class="ui four stackable cards">
						<music-card v-for="song in songsList" :song="song"></music-card>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
</template>

<script>
	import MusicCard from './MusicCard'
	import songsListJSON from './songs-list.json'
	export default{
		name: 'Discover',
		data () {
			return{
				songsList: [],
				currentCategory: "Featured",
				categories:[
					"Featured",
					"Country",
					"Dance",
					"Folk",
					"Hip Hop",
					"Metal",
					"Other",
					"Pop",
					"Soul",
					"Rock",
					"All"
				]
			}
		},
		components:{
			MusicCard
		},
		created () {
			this.songsList = songsListJSON;
		}
	}
</script>

<style scoped>
	.menu{
		/*margin-top: 50px;*/
	}

	.segment {
		min-height: 700px;
		padding: 1em 0em;
	}

	.vertical.menu{
		margin-top: 50px;
	}

	.content{
		margin-top: 20px;
	}
</style>