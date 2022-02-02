<!-- 예제 3-5 src/Demo.svelte에서 모듈 콘텍스트 사용하기 -->

<script context="module">
  export function add(n1, n2) {
    return n1 + n2;
  }
</script>

<script>
  // 컴포넌트의 자바스크립트 코드를 여기에 작성합니다.
</script>

<!-- 컴포넌트의 HTML을 여기에 작성합니다. -->

<style>
  /* 컴포넌트의 CSS를 여기에 작성합니다. */
</style>