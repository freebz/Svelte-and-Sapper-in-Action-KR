<!-- 예제 5-13 src/Child.svelte의 자식 컴포넌트 -->

<script>
  export let cValue;
  const double = () => (cValue *= 2);

  export let triple;
  $: triple = cValue * 3;
</script>

<button on:click={double}>Double</button>
<div>cValue = {cValue}</div>