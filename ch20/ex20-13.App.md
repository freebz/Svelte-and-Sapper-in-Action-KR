<!-- 예제 20-13 src/App.md 파일에서 타입스크립트 사용하기 -->

<script lang="ts">
	type Dog = {
		name: string;
		gender: string;
		breed: string;
	};

	const dogs: Dog[] = [
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