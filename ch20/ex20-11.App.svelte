<!-- 예제 20-11 add 함수를 불러와서 사용하는 src/App.svelte 파일 -->

<script lang="ts">
	import {add} from './math';

	const sum = add(1, '2');
</script>

<div>sum in ts = {sum}</div>
<div>sum in HTML = {add(1, '2')}</div>