<!-- 예제 5-12 src/Parent.svelte의 부모 컴포넌트 -->

<script>
  import Child from './Child.svelte';
  let pValue = 1;
</script>

<Child bind:cValue={pValue} />
<div>pValue = {pValue}</div>