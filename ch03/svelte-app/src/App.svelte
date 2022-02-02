<!-- 예제 3-8 Select 컴포넌트를 불러와서 사용하는 src/App.svelte -->

<script>
	import Select from './Select.svelte';

	const options = [
		'',
		'Red',
		{label: 'Green'},
		{label: 'Blue', value: 'b'}
	];

	let selected;

	const handleSelect = event => selected = event.detail;
</script>

<Select options={options} on:select={handleSelect} />

{#if selected}
	<div>You selected {selected}.</div>
{/if}