<!-- 예제 5-21 src/Buttons.svelte의 Buttons 컴포넌트 -->

<script>
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  export let labels;
  export let value;
</script>

{#each labels as label}
  <button
    class:selected={label === value}
    on:click={() => dispatch('select', label)}
  >
    {label}
  </button>
{/each}

<style>
  .selected {
    background-color: darkgray;
    color: white;
  }
</style>