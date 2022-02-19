<!-- 예제 14-3 src/Toast.svelte 파일의 Toast 컴포넌트 -->

<script>
  import {fly} from 'svelte/transition';
  let height = 0;
</script>

<div
  class="my-toast"
  bind:clientHeight={height}
  transition:fly={{duration: 1000, opacity: 1, y: -height}}
>
  <slot />
</div>

<style>
  .my-toast {
    display: inline-flex;
    align-items: center;

    background-color: linen;
    border: solid black 1px;
    border-top: none;
    box-sizing: border-box;
    padding: 1rem;
    position: absolute;
    top: 0;
  }
</style>