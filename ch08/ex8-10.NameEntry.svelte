<!-- 예제 8-10 src/NameEntry.svelte 파일의 NameEntry 컴포넌트 -->

<script>
  import {onMountFocus, onMountLog} from './helper';
  export let name;
  onMountLog('NameEntry');
  onMountFocus();
</script>

<label>
  Name
  <input bind:value={name}>
</label>