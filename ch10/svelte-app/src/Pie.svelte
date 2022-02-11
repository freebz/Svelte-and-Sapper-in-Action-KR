<!-- 예제 10-2 src/Pie.svelte 파일의 Pie 컴포넌트 -->

<script>
  export let size = 200;
  export let percent = 0;
  export let bgColor = 'cornflowerblue';
  export let fgColor = 'orange';

  $: viewBox = `0 0 ${size} ${size}`;

  $: radius = size / 2;
  $: halfCircumference = Math.PI * radius;
  $: pieSize = halfCircumference * (percent / 100);
  $: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
</script>

<svg width={size} height={size} {viewBox}>
  <circle r={radius} cx={radius} cy={radius} fill={bgColor} />
  <circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill={bgColor}
    stroke={fgColor}
    stroke-width={radius}
    stroke-dasharray={dashArray}
  />
</svg>