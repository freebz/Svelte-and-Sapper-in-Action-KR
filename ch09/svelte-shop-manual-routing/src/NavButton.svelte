<!-- 예제 9-3 src/NavButton.svelte 파일에 정의한 NavButton 컴포넌트 -->

<script>
  export let name;
  export let pageName;
</script>

<button
  class:active={pageName === name}
  on:click={() => pageName = name}
>
  <slot />
</button>

<style>
  button {
    --space: 0.5rem;
    background-color: white;
    border-radius: var(--space);
    height: 38px;
    margin-right: var(--space);
    padding: var(--space);
  }

  .active {
    background-color: yellow;
  }
</style>