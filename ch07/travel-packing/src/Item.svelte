<!-- 예제 4-7 src/Item.svelte에 정의한 Item 컴포넌트 -->

<script>
  import {createEventDispatcher} from 'svelte';
  import {blurOnKey} from './util';

  const dispatch = createEventDispatcher();

  export let item;
  export let categoryId;
  export let dnd;

  let editing = false;
</script>

<li>
  <input type="checkbox" bind:checked={item.packed}>
  {#if editing}
    <input
      autofocus
      bind:value={item.name}
      on:blur={() => (editing = false)}
      on:keydown={blurOnKey}
      type="text" />
  {:else}
    <span class="packed-{item.packed}" on:click={() => (editing = true)}
      draggable="true"
      on:dragstart={event => dnd.drag(event, categoryId, item.id)}
    >
      {item.name}
    </span>
  {/if}
  <button class="icon" on:click={() => dispatch('delete')}>&#x1F5D1;</button>
</li>

<style>
  button {
    background-color: transparent;
    border: none;
  }

  input[type='checkbox'] {
    --size: 24px;
    height: var(--size);
    width: var(--size);
  }

  input[type='text'] {
    border: solid lightgray 1px;
  }

  li {
    display: flex;
    align-items: center;
  }

  .packed-true {
    color: gray;
    text-decoration: line-through;
  }

  span {
    margin: 0 10px;
  }
</style>