<!-- 예제 5-14 src/Parent.svelte의 부모 컴포넌트 -->

<script>
  import Child from './Child.svelte';
  let pValue = 1;
  let triple;
</script>

<Child bind:cValue={pValue} bind:triple />
<div>pValue = {pValue}</div>
<div>triple = {triple}</div>