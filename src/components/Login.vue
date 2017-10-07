<template>
	<div class="ui mini modal">
		<div class="header">
			Login to MusicCloud
		</div>
		<div class="content">
			<div class="fluid ui vertical buttons">
				<button class="ui facebook button">
					<i class="facebook icon"></i>
					Login with Facebook
				</button>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<button class="ui google plus fluid button">
					<i class="google icon"></i>
					Login with Google
				</button>
			</div>
			<div class="ui horizontal divider">
				Or
			</div>
			<div class="ui form">
				<div class="field">
					<input type="email" placeholder="Email">
				</div>
				<div class="field">
					<input type="password" placeholder="Password">
				</div>
			</div>
		</div>
		<div class="actions">
			<div class="ui secondary basic button">Login</div>	
		</div>
	</div>	
</template>

<script>
	export default{
		name: "Login",
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	
</style>