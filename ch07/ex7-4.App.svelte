<!-- 예제 7-4 MaskedInput 컴포넌트를 불러와서 쓰는 앱 -->

<script>
	import MaskedInput from './MaskedInput.svelte';
	let phone = '';
</script>

<label>
	Phone
	<MaskedInput
		mask="(999)999-9999"
		bind:value={phone}
	/>
</label>
<div>
	phone = {phone}
</div>