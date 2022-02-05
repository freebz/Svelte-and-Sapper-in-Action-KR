<!-- 예제 5-5 StopLight 컴포넌트로 신호 표시하기 -->

<script>
  import StopLight from './StopLight.svelte';
  let go = false;
</script>

<StopLight />
<StopLight on />
<StopLight on={go} />
<button on:click={() => go = !go}>Toggle</button>