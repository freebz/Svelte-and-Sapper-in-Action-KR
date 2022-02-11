<!-- 예제 10-3 Pie 컴포넌트를 사용하는 앱 -->

<script>
	import {tweened} from 'svelte/motion';
	import Pie from './Pie.svelte';

	let percent = 0;
	const store = tweened(0, {duration: 1000});
	$: store.set(percent || 0);
</script>

<label>
	Percent
	<input type="number" min="0" max="100" bind:value={percent}>
</label>
<Pie size={200} percent={$store} />