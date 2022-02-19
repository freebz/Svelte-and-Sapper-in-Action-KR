<!-- 예제 14-1 폼 검사를 구현한 스벨트 앱 -->

<script>
	const canadaRegExp = '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]';
	const usRegExp = '[0-9]{5}(-[0-9]{4})?';
	const countries = ['Canada', 'United States'];

	let age = 18;
	let email = '';
	let homePage = '';
	let name = '';
	let postalCode = '';
	let postalCodeType = countries[1];

	$: isCanada = postalCodeType === countries[0];
	$: postalCodeExample = isCanada ? 'A1A 1A1' : '99999 or 99999-9999';
	$: postalCodeRegExp = isCanada ? canadaRegExp : usRegExp;

	function submit() {
		alert(`You submitted
			name = ${name}
			age = ${age}
			email = ${email}
			home page = ${homePage}
			postal code = ${postalCode}
		`);
	}
</script>

<form on:submit|preventDefault={submit}>
	<fieldset>
		<legend>Country</legend>
		<div>
			{#each countries as country}
				<label>
					<input
						type="radio"
						name="postalCodeType"
						value={country}
						bind:group={postalCodeType}
					/>
					{country}
				</label>
			{/each}
		</div>
	</fieldset>
	<label>
		Name
		<input
			required
			minlength={2}
			maxlength={40}
			placeholder=" "
			bind:value={name}
		/>
	</label>
	<label>
		Age
		<input required type="number" min={18} max={105} bind:value={age} />
	</label>
	<label>
		Email
		<input required placeholder=" " type="email" bind:value={email} />
	</label>
	<label>
		Home Page
		<input
			required
			placeholder="http(s)://something"
			type="url"
			bind:value={homePage}
		/>
	</label>
	<label>
		Postal Code
		<input
			required
			pattern={postalCodeRegExp}
			placeholder={postalCodeExample}
			title={postalCodeExample}
			bind:value={postalCode}
		/>
	</label>
	<button>Submit</button>
</form>

<style>
	fieldset {
		display: inline-block;
		margin-bottom: 1rem;
	}

	input {
		border-color: lightgray;
		border-radius: 4px;
		padding: 4px;
	}

	input:not(:placeholder-shown) {
		border-color: red;
	}

	input:valid {
		border-color: lightgray;
	}

	label {
		font-weight: bold;
	}
</style>