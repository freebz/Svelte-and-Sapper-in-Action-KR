<!-- 예제 3-6 내보낸 함수 불러와서 사용하기 -->

<script>
  import {onMount} from 'svelte';
  import {add} from './Demo.svelte';

  onMount(() => {
    const sum = add(1, 3);
    console.log('sum = ', sum);
  });
</script>