<!-- 예제 20-7 src/App.svelte 파일의 앱 -->

<script>;
	import Dog from './Dog.svelte';

	const dogs = [
		{name: 'Dasher', gender: 'male', breed: 'Whippet'},
		{name: 'Maisey', gender: 'female', breed: 'Treeing Walker Coonhound'},
		{name: 'Ramsay', gender: 'male', breed: 'Native American Indian Dog'},
		{name: 'Oscar ', gender: 'male', breed: 'German Shorthaired Pointer'}
	];
</script>

{#each dogs as {name, breed, gender}}
	<Dog {name} {breed} {gender} />
{/each}