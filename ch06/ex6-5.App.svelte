<!-- 예제 6-5 스토어의 subscribe 예제 -->

<script>
	import {onDestroy} from 'svelte';
	import {dogStore} from './stores';
	let dogs;
	const unsubscribe = dogStore.subscribe(value => (dogs = value));
	onDestroy(unsubscribe);
</script>