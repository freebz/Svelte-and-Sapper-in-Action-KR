<!-- 예제 4-9 src/Category.svelte의 Category 컴포넌트 -->

<script>
  import {createEventDispatcher} from 'svelte';
  import Item from './Item.svelte';
  import {getGuid, blurOnKey, sortOnName} from './util';

  const dispatch = createEventDispatcher();

  export let categories;
  export let category;
  export let show;

  let editing = false;
  let itemName = '';
  let items = [];
  let message = '';

  $: items = Object.values(category.items);
  $: remaining = items.filter(item => !item.packed).length;
  $: total = items.length;
  $: status = `${remaining} of ${total} remaining`;
  $: itemsToShow = sortOnName(items.filter(i => shouldShow(show, i)));

  function addItem() {
    const duplicate = Object.values(categories).some(cat =>
      Object.values(cat.items).some(item => item.name === itemName)
    );
    if (duplicate) {
      message = `The item "${itemName}" already exists.`;
      alert(message);
      return;
    }

    const {items} = category;
    const id = getGuid();
    items[id] = {id, name: itemName, packed: false};
    category.items = items;
    itemName = '';
    dispatch('persist');
  }

  function deleteItem(item) {
    delete category.items[item.id];
    category = category;
    dispatch('persist');
  }

  function shouldShow(show, item) {
    return (
      show === 'all' ||
      (show === 'packed' && item.packed) ||
      (show === 'unpacked' && ~item.packed)
    );
  }
</script>

<section>
  <h3>
    {#if editing}
      <input
        bind:value={category.name}
        on:blur={() => (editing = false)}
        on:keypress={blurOnKey} />
    {:else}
      <span on:click={() => (editing = true)}>{category.name}</span>
    {/if}
    <span class="status">{status}</span>
    <button class="icon" on:click={() => dispatch('delete')}>
      &#x1F5D1;
    </button>
  </h3>

  <form on:submit|preventDefault={addItem}>
    <label>
      New Item
      <input bind:value={itemName}>
    </label>
    <button disabled={!itemName}>Add Item</button>
  </form>

  <ul>
    {#each itemsToShow as item (item.id)}
      <!-- 아래 bind 구문을 통해 item의 packed 값이 변경되면
        category 객체 또한 업데이트되도록 만듭시다. -->
      <Item bind:item on:delete={() => deleteItem(item)} />
    {:else}
      <div>This category does not contain any items yet.</div>
    {/each}
  </ul>
</section>

<style>
  button,
  input {
    border: solid lightgray 1px;
  }

  button.icon {
    border: none;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0;
  }

  section {
    --padding: 10px;

    background-color: white;
    border: solid transparent 3px;
    color: black;
    display: inline-block;
    margin: var(--padding);
    padding-top: var(--padding);
    vertical-align: top;
  }

  .status {
    font-size: 18px;
    font-weight: normal;
    margin: 0 15px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
</style>