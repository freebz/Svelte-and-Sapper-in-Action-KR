<!-- 예제 8-2 Demo 컴포넌트를 쓰는 앱 -->

<script>
	import Demo from './Demo.svelte';
	let show = false;
</script>

<label>
	<input type="checkbox" bind:checked={show}>
	Show
</label>
{#if show}
	<Demo />
{/if}