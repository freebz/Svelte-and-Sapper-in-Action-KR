<!-- 예제 3-10 App.svelte 파일의 style 요소 -->

<script>
	import Login from './Login.svelte';
	import Checklist from './Checklist.svelte';
	import NotFound from './NotFound.svelte';

	const hashMap = {
		'#login': Login,
		'#checklist': Checklist
	};

	let component = Login;

	const hashChange = () => (component = hashMap[location.hash] || NotFound);
</script>

<svelte:window on:hashchange={hashChange} />

<main>
	<h1 class="hero">Travel Packing Checklist</h1>
	<svelte:component
		this={component}
		on:login={() => (location.href = '/#checklist')}
		on:logout={() => (location.href = '/#login')}
	/>
</main>

<style>
	:global(body) {
		background-color: cornflowerblue;
	}

	.hero {
		--height: 7rem;

		background-color: orange;
		color: white;
		font-size: 4rem;
		height: var(--height);
		line-height: var(--height);
		margin: 0 0 3rem 0;
		text-align: center;
		vertical-align: middle;
		width: 100vw;
	}

	main {
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>