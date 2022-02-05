<!-- 예제 5-18 bind로 요소의 크기 알아내기 -->

<script>
  let clientH, clientW, offsetH, offsetW;
</script>

<div
  bind:clientHeight={clientH}
  bind:clientWidth={clientW}
  bind:offsetHeight={offsetH}
  bind:offsetWidth={offsetW}
>
  How big am i?
</div>