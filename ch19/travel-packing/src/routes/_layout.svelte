<!-- 예제 19-1 src/routes/_layout.svelte 파일 내용 -->

<script>
	let mainElement;
	let online = true;
	$: title = 'Travel Packing Checklist' + (online ? '' : ' Offline');

	$: if (mainElement) {
		mainElement.style.setProperty(
			'--main-bg-color',
			online ? '#3f6fde' : 'gray'
		);
	}
</script>

<svelte:window bind:online />

<main bind:this={mainElement}>
	<h1 class="hero">{title}</h1>
	<slot></slot>
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