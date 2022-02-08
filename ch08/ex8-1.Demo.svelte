<!-- 예제 8-1 라이프사이클 함수를 쓰는 Demo 컴포넌트 -->

<script>
	import {onMount, beforeUpdate, afterUpdate, onDestroy} from 'svelte';

	let color = 'red';

	function toggleColor() {
		color = color === 'red' ? 'blue' : 'red';
	}

	onMount(() => console.log('mounted'));
	beforeUpdate(() => console.log('before update'));
	afterUpdate(() => console.log('after update'));
	onDestroy(() => console.log('destroy'));
</script>

<button on:click={toggleColor} style="color: {color}">
	Demo
</button>