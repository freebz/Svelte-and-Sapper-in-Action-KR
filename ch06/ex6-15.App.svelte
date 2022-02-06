<!-- 예제 6-15 상속 스토어를 쓰는 src/App.svelte 코드 -->

<script>
	import {itemsWithTaxStore, taxStore} from './stores';
</script>

<label>
	Tax
	<input type="number" bind:value={$taxStore}>
</label>

{#each $itemsWithTaxStore as item}
	<div>
		{item.name} - cost ${item.cost.toFixed(2)} - total ${item.total.toFixed(2)}
	</div>
{/each}