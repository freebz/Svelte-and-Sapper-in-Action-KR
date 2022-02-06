<!-- 예제 6-26 src/App.svelte 파일에 정의한 앱에서 스토어 데이터를 영구 저장하기 -->

<script>
	import {numbers} from './stores';

	function append() {
		numbers.update(n => {
			n.push(n.length + 1);
			return n;
		});
	}

	function remove() {
		numbers.update(n => {
			n.pop();
			return n;
		});
	}

	function reset() {
		numbers.set([1, 2, 3]);
	}
</script>

<div>{$numbers}</div>
<button on:click={append}>+</button>
<button on:click={remove}>-</button>
<button on:click={reset}>Reset</button>