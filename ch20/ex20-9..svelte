<!-- 예제 20-9 .svelte 파일 안에서 Sass 사용하기 -->

<style lang="scss">
  $color: green;
  $space: 0.7rem;

  form {
    // 중첩 CSS 규칙
    input {
      $padding: 4px;
      border-radius: $padding;
      color: $color;
      padding: $padding;
    }

    // 또 다른 중첩 CSS 규칙
    label {
      color: $color;
      margin-right: $space;
    }
  }
</style>