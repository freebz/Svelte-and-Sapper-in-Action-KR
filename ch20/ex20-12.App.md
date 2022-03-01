<!-- 예제 20-12 src/App.md의 마크다운 -->

<script>
	const dogs = [
		{name: 'Dasher', gender: 'male', breed: 'Whippet'},
		{name: 'Maisey', gender: 'female', breed: 'Treeing Walker Coonhound'},
		{name: 'Ramsay', gender: 'male', breed: 'Native American Indian Dog'},
		{name: 'Oscar ', gender: 'male', breed: 'German Shorthaired Pointer'}
	];
</script>

# dogs

| Name | Gender | Breed |
| ---- | :----: | ----- |
{#each dogs as {name, gender, breed}}
	| {name} | {gender} | {breed} |
{/each}

<style>
	h1 {
		color: blue;
		margin-top: 0;
		text-transform: uppercase;
	}

	table {
		border-collapse: collapse;
	}

	td, th {
		border: solid lightgray 3px;
		padding: 0.5rem;
	}

	th {
		background-color: pink;
	}
</style>