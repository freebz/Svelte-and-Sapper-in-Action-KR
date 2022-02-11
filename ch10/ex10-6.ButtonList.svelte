<!-- 예제 10-6 src/ButtonList.svelte 파일의 ButtonList 컴포넌트 -->

<script>
  import {flip} from 'svelte/animate';
  import {fade} from 'svelte/transition';

  export let list;
  export let moveFn;

  const options = {duration: 1000};
</script>

<div class="list">
  {#each list as item (item)}
    <button
      class="item"
      on:click={moveFn}
      animate:flip={options}
      transition:fade={options}>
      {item}
    </button>
  {/each}
</div>

<style>
  .item {
    display: block;
    margin-bottom: 10px;
    padding: 5px;
  }

  .list {
    display: inline-block;
    vertical-align: top;
    width: 100px;
  }
</style>