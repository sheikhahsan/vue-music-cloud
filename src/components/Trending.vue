<template>
	<div class="ui inverted vertical segment">
		<div class="ui container">
<!-- 			<table class="ui inverted table">
			  <thead>
			    <tr>
			      <th>Song</th>
			      <th>Artist</th>
			      <th>Notes</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>John</td>
			      <td>Approved</td>
			      <td>None</td>
			    </tr>
			    <tr>
			      <td>Jamie</td>
			      <td>Approved</td>
			      <td>Requires call</td>
			    </tr>
			    <tr>
			      <td>Jill</td>
			      <td>Denied</td>
			      <td>None</td>
			    </tr>
			  </tbody>
			  <tfoot>
			    <tr><th>3 People</th>
			    <th>2 Approved</th>
			    <th></th>
			  </tr></tfoot>
			</table> -->

			<div class="ui five stackable cards">
			  <div v-for ="item in songsList"class="card" @mouseover="showHoverTransition(item.id)" @mouseout="hideHoverTransition">
			    <div class="blurring dimmable image">
			      <div :class="{'ui dimmer': true, 'transition visible active': item.id == hoverId}">
			        <div class="content">
			          <div class="center">
			            <div class="ui inverted labeled icon button"><i class="play icon"></i>Play</div>
			          </div>
			        </div>
			      </div>
			      <img :src="item.img">
			    </div>
				<div class="content">
					<a class="header" href="#">{{item.song}}</a>
					<div class="meta">
						by&nbsp<a>{{item.artist}}</a>
					</div>
				</div>
			  </div>
			</div>
		</div>
		<player id="player"></player>
	</div>
</template>

<script>
import Player from './Player'	
export default{
	name: 'Trending',
	components:{
		Player
	},
	data () {
		return{
			songsList: [],
			hoverId: -1
		}
	},
	methods:{
		showHoverTransition (id) {
			this.hoverId = id;
		},
		hideHoverTransition () {
			this.hoverId = -1;
		}
	},
	created () {
		this.songsList = [
			{
				id: 1,
				song: "Hardwell On Air 334",
				artist: "Hardwell",
				img: "/static/images/hardwell.jpg"
			},
			{
				id: 2,
				song: "Perugia Cruising",
				artist: "Claudio Iacono",
				img: "/static/images/perugia.jpg"
			},
			{
				id: 3,
				song: "JuicyLand #186",
				artist: "Juicy M",
				img: "/static/images/juicyland.jpg"
			},
			{
				id: 4,
				song: "Ape Shi!t",
				artist: "JD Boyz",
				img: "/static/images/jd.jpg"
			},
			{
				id: 5,
				song: "Stars In The Ceiling",
				artist: "Quavo",
				img: "/static/images/stars.jpg"
			},
			{
				id: 6,
				song: "Patience (NOLA Mix)",
				artist: "Pell",
				img: "/static/images/patience.jpg"
			},
			{
				id: 7,
				song: "On The Set",
				artist: "The Cool Kids",
				img: "/static/images/cool.jpg"
			},
			{
				id: 8,
				song: "Hello (OZZIE Remix)",
				artist: "adele",
				img: "/static/images/hello.jpg"
			},
			{
				id: 9,
				song: "GREATEST OF ALL TIME",
				artist: "EMINEM",
				img: "/static/images/eminem.jpg"
			},
			{
				id: 10,
				song: "Drowning (Water)",
				artist: "A-Boogie Wit Da Hoodie",
				img: "/static/images/drowning.jpg"
			}
		]
	}
}
</script>

<style scoped>

  .segment {
    min-height: 700px;
    padding: 1em 0em;
  }

  .card:hover{

  }

</style>