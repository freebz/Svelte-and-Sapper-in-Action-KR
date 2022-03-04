<!-- 예제 G-1 src/App.svelte 파일에서 DateDisplay 컴포넌트 사용하기 -->

<script>
  import _ from 'lodash';
  import DateDisplay from './DateDisplay';

  let name = 'Snowpack';
</script>

<h1>Hello, {_.startCase(name)}!</h1>

<label>
  Name
  <input bind:value={name}>
</label>

<DateDisplay />

<style>
  h1 {
    color: red;
  }
</style>