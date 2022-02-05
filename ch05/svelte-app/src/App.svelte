<!-- 예제 5-22 Buttons 컴포넌트를 불러와서 쓰기 -->

<script>
  import Buttons from './Buttons.svelte';
  let colors = ['Red', 'Green', 'Blue'];
  let color = '';
  const handleSelect = event => color = event.detail;
</script>

<Buttons labels={colors} value={color} on:select={handleSelect} />
{#if color}
  <div>You clicked {color}.</div>
{/if}