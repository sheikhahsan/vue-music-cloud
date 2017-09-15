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
			  <div class="card">
			    <div class="image">
			      <img src="/static/images/elliot.jpg">
			    </div>
				<div class="content">
					<a class="header" href="#">Steve Jobes</a>
					<div class="meta">
						<a>by DJ Technics House</a>
					</div>
				</div>
			  </div>
			  <div class="card">
			    <div class="image">
			      <img src="/static/images/helen.jpg">
			    </div>
			  </div>
			  <div class="card">
			    <div class="image">
			      <img src="/static/images/jenny.jpg">
			    </div>
			  </div>
			  <div class="card">
			    <div class="image">
			      <img src="/static/images/veronika.jpg">
			    </div>
			  </div>
			  <div class="card">
			    <div class="image">
			      <img src="/static/images/stevie.jpg">
			    </div>
			  </div>
			  <div class="card">
			    <div class="image">
			      <img src="/static/images/steve.jpg">
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
	}
}
</script>

<style scoped>

  .segment {
    min-height: 700px;
    padding: 1em 0em;
  }

</style>