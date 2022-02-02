<!-- 예제 3-4 원기둥 부피 계산기 코드 -->

<script>
	let diameter = 1;
	let height = 1;

	$: volume = area * height;

	$: area = Math.PI * radius ** 2;

	$: radius = diameter / 2;
</script>

<h1>Cylinder Calculations</h1>
<label>
	diameter
	<input type="number" bind:value={diameter}>
</label>
<label>
	Height
	<input type="number" bind:value={height}>
</label>
<label>Radius: {radius}</label>
<label>Area: {area.toFixed(2)}</label>
<label>Volumn: {volume.toFixed(2)}</label>

<style>
	input {
		width: 50px;
	}
</style>