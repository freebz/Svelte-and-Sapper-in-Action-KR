<!-- 예제 14-4 rmv-svelte-component 라이브러리의 컴포넌트 불러와서 사용하기 -->

<script>
	import {LabeledInput, Select} from 'rmv-svelte-components';
	let color = '';
	let name = 'Mark';
	let options = ['', 'red', 'green', 'blue'];
</script>

<main>
	<LabeledInput label="Name" bind:value={name} />
	<p>Hello, {name}!</p>
	<Select {options} on:select={event => color = event.detail} />
	<p>You selected the color {color}.</p>
</main>