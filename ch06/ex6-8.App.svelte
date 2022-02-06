<!-- 예제 6-8 DogForm과 DogList를 불러와서 쓰는 앱-->

<script>
	import DogForm from './DogForm.svelte';
	import DogList from './DogList.svelte';

	let dog = {};
	let mode = 'list';

	function changeMode(event) {
		mode = event.detail;
		if (mode === 'create') dog = {};
	}

	const selectDog = event => (dog = event.detail);
</script>

<h1>Dogs</h1>
{#if mode === 'list'}
	<DogList on:mode={changeMode} on:select={selectDog} />
{:else}
	<DogForm {dog} {mode} on:mode={changeMode} />
{/if}