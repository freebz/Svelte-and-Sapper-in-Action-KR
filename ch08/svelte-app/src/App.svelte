<!-- 예제 8-12 AgeEntry와 NameEntry 컴포넌트를 불러와서 화면에 그리는 앱 -->

<script>
	import {onMountLog} from './helper';
	import AgeEntry from './AgeEntry.svelte';
	import NameEntry from './NameEntry.svelte';

	let age = 0;
	let enterAge = false;
	let name = '';
	onMountLog('App');
</script>

{#if enterAge}
	<AgeEntry bind:age />
{:else}
	<NameEntry bind:name />
{/if}

<label>
	Enter Age?
	<input type="checkbox" bind:checked={enterAge}>
</label>

<div>{name} is {age} years old.</div>