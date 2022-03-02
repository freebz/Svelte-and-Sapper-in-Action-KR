<!-- 예제 21-14 app/HelloPage.svelte 파일의 HelloPage 컴포넌트 -->

<script>
  import Header from './Header.svelte';

  let name = 'World';
</script>

<page>
  <Header title="Hello" />
  <stackLayout class="p-20">
    <flexboxLayout>
      <label text="Name" />
      <textField bind:text={name} />
    </flexboxLayout>

    <label class="greeting" text="Hello, {name}!" textWrap="true" />
  </stackLayout>
</page>

<style>
  .greeting {
    color: blue;
    font-size: 40;
  }

  label {
   font-size: 20;
   font-weight: bold;
  }

  textField {
    flex-grow: 1;
    font-size: 20;
  }
</style>
