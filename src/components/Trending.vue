<template>
	<div class="ui inverted vertical segment">
		<div class="ui container">
			<div class="ui five stackable cards">
				<music-card v-for="song in songsList" :song="song"></music-card>
			</div>
		</div>
	</div>
</template>

<script>	
import MusicCard from './MusicCard'
import songsListJSON from './songs-list.json'
export default{
	name: 'Trending',
	data () {
		return{
			songsList: []
		}
	},
	components:{
		MusicCard
	},
	methods:{
	},
	created () {
		this.songsList = songsListJSON;
	}
}
</script>

<style scoped>

  .segment {
    min-height: 700px;
    padding: 1em 0em;
  }

</style>