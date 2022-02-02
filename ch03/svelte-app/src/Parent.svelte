<!-- 예제 3-2 src/Parent.svelte에 정의한 부모 컴포넌트 -->

<script>
  import Child from "./Child.svelte";
</script>

<div class='override'>
  <Child />
</div>

<style>
  .override :global(h1) {
    color: blue;
  }
</style>