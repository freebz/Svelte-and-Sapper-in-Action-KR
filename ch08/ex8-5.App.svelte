<!-- 예제 8-5 ColorCycle 컴포넌트를 불러와서 쓰는 앱-->

<script>
	import ColorCycle from './ColorCycle.svelte';
	let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
	<ColorCycle text="Someo Title" />
{/if}