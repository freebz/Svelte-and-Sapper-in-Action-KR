<!-- 예제 14-2 스벨트스트랩을 사용한 스벨트 앱 -->

<script>
	import {Input, Spinner} from 'sveltestrap';
	import Toast from './Toast.svelte';

	let amount = 0;
	let like = false;
	let status = '';

	function buy() {
		status = 'buying';
		// 1초 후에 토스트를 보여줍니다.
		setTimeout(
			() => {
				status = 'bought';
				// 3초 후에 토스트를 숨깁니다.
				setTimeout(() => status = '', 3000);
			},
			1000);
	}
</script>

<main>
	<Input
		type="switch"
		id="like"
		label="Do you like ice cream?"
		bind:checked={like} />

	{#if like}
		<label>
			How much will you pay for it?
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">$</span>
				</div>
				<input type="number" class="form-control" min="0" bind:value={amount}>
				<div class="input-group-append">
					<span class="input-group-text">.00</span>
				</div>
			</div>
		</label>
		<div class="btn-row">
			<button class="btn btn-success" disabled={!amount} on:click={buy}>
				Buy
			</button>
			{#if status === 'buying'}
				<div class="spinner-container">
					<Spinner color="warning" />
				</div>
			{/if}
		</div>
	{/if}

	{#if status === 'bought'}
		<Toast>Your ice cream has been ordered!</Toast>
	{/if}
</main>

<style>
	.btn-row {
		display: flex;
		align-items: center;
	}

	button {
		border: none;
	}

	.input-group {
		width: 150px;
	}

	.row > div {
		outline: solid red 1px;
	}

	.spinner-container {
		display: inline-block;
		margin-left: 1rem;
	}
</style>