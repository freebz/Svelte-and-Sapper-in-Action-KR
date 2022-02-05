<!-- 예제 5-7 Sum 컴포넌트로 앱 만들기 -->

<script>
  import Sum from './Sum.svelte';
  let size = 3;
  $: numbers = Array(size).fill().map((_, i) => i + 1);
</script>

<label>
  Size
  <input type="number" bind:value={size}>
</label>

<Sum numbers={numbers} />