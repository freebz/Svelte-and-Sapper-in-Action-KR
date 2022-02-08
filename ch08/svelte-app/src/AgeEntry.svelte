<!-- 예제 8-11 src/AgeEntry.svelte 파일의 AgeEntry 컴포넌트 -->

<script>
  import {onMountFocus, onMountLog} from './helper';
  export let age;
  onMountLog('AgeEntry');
  onMountFocus();
</script>

<label>
  Age
  <input type="number" min="0" bind:value={age}>
</label>