<template>
	<div class="ui mini modal">
		<div class="header">
			Create an Account
		</div>
		<div class="content">
			<div class="fluid ui vertical buttons">
				<button class="ui facebook button">
					<i class="facebook icon"></i>
					Join with Facebook
				</button>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<div class="ui fitted hidden divider"></div>
				<button class="ui google plus fluid button">
					<i class="google icon"></i>
					Join with Google
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
			<div class="ui secondary basic button">SIGN UP</div>	
		</div>
	</div>	
</template>

<script>
	export default{
		name: "Signup",
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	
</style>