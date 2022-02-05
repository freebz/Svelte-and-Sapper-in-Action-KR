<!-- 예제 5-6 src/Sum.svelte의 Sum 컴포넌트 -->

<script>
  export let numbers;
  //const sum = numbers.reduce((acc, n) => acc + n);
  $: sum = numbers.reduce((acc, n) => acc + n);
</script>

<div>numbers are {numbers.join(', ')}</div><div>sum is {sum}</div>