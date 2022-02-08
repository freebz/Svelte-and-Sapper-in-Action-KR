<!-- 예제 8-6 onMount 함수에서 함수를 반환하는 ColorCycle 컴포넌트 -->

<script>
  import {onDestroy, onMount} from 'svelte';
  export let text;

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  let colorIndex = 0;
  
  onMount(() => {
    const token = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
    }, 500);
    return () => clearInterval(token);
  });
</script>

<h1 style="color: {colors[colorIndex]}">{text}</h1>