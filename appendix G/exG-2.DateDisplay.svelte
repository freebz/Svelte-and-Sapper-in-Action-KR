<!-- 예제 G-2 src/DateDisplay.svelte 파일의 DateDisplay 컴포넌트 -->

<script>
  import {format} from 'date-fns';
</script>

<div>
  Today is {format(new Date(), 'MMM dd, yyyy')}.
</div>