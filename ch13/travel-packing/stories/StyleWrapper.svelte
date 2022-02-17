<!-- 예제 12-18 stories/StyleWrapper.svelte 파일에 정의한 StyleWrapper 컴포넌트 -->

<script>
  export let component;
  export let style;
</script>

<div style={style}>
  <svelte:component this={component} on:login on:logout />
</div>