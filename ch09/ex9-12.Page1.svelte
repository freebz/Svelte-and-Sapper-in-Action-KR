<!-- 예제 9-12 src/Page1.svelte 파일의 Page1 컴포넌트 -->

<script>
  import page from 'page';

  export let p1;  // 반드시 있어야 하는 값
  export let p2 = undefined;  // 없어도 되는 값
  export let q1;  // 반드시 있어야 하는 값
  export let q2 = undefined;  // 없어도 되는 값

  console.log('Page1 $$props =', $$props);
</script>

<h1>Page 1</h1>
<div>p1 = {p1}</div>
<div>p2 = {p2}</div>
<div>q1 = {q1}</div>
<div>q2 = {q2}</div>

<button on:click={() => page.show('/two')}>
  Go To Page Two
</button>

<style>
  button {
    margin-top: 1rem;
  }
</style>