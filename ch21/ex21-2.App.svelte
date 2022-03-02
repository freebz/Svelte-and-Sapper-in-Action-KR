<!-- 예제 21-2 'Hello World' 스벨트 네이티브 앱 -->

<script>
  let name = 'World';
</script>

<page>
  <actionBar title="Hello World Demo" />
  <stackLayout class="p-20">
    <flexboxLayout>
      <label class="name-label" text="Name:" />
      <textField class="name-input" bind:text={name} />
    </flexboxLayout>
    <label class="message" text="Hello, {name}!" />
  </stackLayout>
</page>

<style>
  .message {
    color: red;
    font-size: 50;
  }

  .name-input {
    font-size: 30;
    flex-grow: 1;
  }

  .name-label {
    font-size: 30;
    margin-right: 10;
  }
</style>
