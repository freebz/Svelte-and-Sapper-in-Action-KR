<!-- 예제 2-1 색 입력 기능까지 추가한 REPL 앱 코드 -->

<script>
  let color = 'red';
  let name = 'world';
</script>

<label for="name">Name</label>
<input id="name" bind:value={name}>

<label for="color">Color</label>
<input id="color" type="color" bind:value={color}>
<div style="background-color: {color}" class="swatch" />

<h1 style="color: {color}">Hello {name}!</h1>

<style>
  .swatch {
    display: inline-block;
    height: 20px;
    width: 20px;
  }
</style>
