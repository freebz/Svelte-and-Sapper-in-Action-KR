<!-- 예제 6-17 count 스토어를 활용한 src/App.svelte의 앱 -->

<script>
	import {count} from './count-store';
</script>

<div>count = {$count}</div>
<button on:click={() => count.increment()}>+</button>
<button on:click={() => count.decrement()}>-</button>
<button on:click={() => count.reset()}>Reset</button>