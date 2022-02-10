<!-- 예제 9-10 해시 라우팅을 적용한 쇼핑 앱 -->

<script>
	import {cartStore} from './stores';

	import Cart from './Cart.svelte';
	import NotFound from './NotFound.svelte';
	import Ship from './Ship.svelte';
	import Shop from './Shop.svelte';

	let component;

	const hashMap = {
		'#cart': Cart,
		'#ship': Ship,
		'#shop': Shop
	};

	function hashChange() {
		component = hashMap[location.hash] || NotFound;
	}
</script>

<svelte:window on:hashchange={hashChange} />

<nav>
	<a href="/#shop" class:active={component === Shop}>Shop</a>
	<a href="/#cart" class:active={component === Cart} class="icon">
		&#x1F6D2; {$cartStore.length}
	</a>
	<a href="/#ship" class:active={component === Ship}>Ship</a>
</nav>

<main>
	<svelte:component this={component} />
</main>

<style>
	:root {
		--space: 0.5rem;
	}

	a {
		background-color: white;
		border-radius: var(--space);
		margin-right: var(--space);
		padding: var(--space);
		text-decoration: none;
	}

	a.active {
		background-color: yellow;
	}

	.icon {
		padding-bottom: 6px;
		padding-top: 6px;
	}

	main {
		padding: var(--space);
	}

	nav {
		display: flex;
		align-items: center;
		background-color: cornflowerblue;
		padding: var(--space);
	}
</style>