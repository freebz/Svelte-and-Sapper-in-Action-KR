<!-- 예제 10-4 tweened를 이용한 색 변화 애니메이션 -->

<script>
	import {tweened} from 'svelte/motion';
	
	let colorIndex = 0;
	const colors = ['ff0000', '00ff00', '0000ff']; // 빨강, 초록, 파랑

	// 10진수 값을 두개의 문자로 이루어지는 16진수 값으로 수정합니다.
	const decimalToHex = decimal =>
		Math.round(decimal).toString(16).padStart(2, '0');

	// 색값 배열의 색인값을 순환합니다.
	const goToNextColor = () => colorIndex = (colorIndex + 1) % colors.length;

	// "rrggbb" 색깔값 문자열에서 두 개의 16진수 문자를 가져온 다음
	// 이에 해당하는 0에서 255 사이의 값을 반환합니다.
	const getColor = (hex, index) =>
		parseInt(hex.substring(index, index + 2), 16);

	// "rrggbb" 16진수 문자열에서 0에서 255 사이의 값을 가지는
	// 빨강, 초록, 파랑의 값 배열을 가져옵니다.
	const getRGBs = hex =>
		[getColor(hex, 0), getColor(hex, 2), getColor(hex, 4)];
	
	// t는 0에서 1 사이의 값이며, start와 start+delta 사이의 t% 지점에 해당하는 값을
	// 계산합니다.
	const scaledValue = (start, delta, t) => start + delta * t;

	// tweened 함수에서 사용하는 interpolate 함수입니다.
	function rgbInterpolate(fromColor, toColor) {
		const [fromRed, fromGreen, fromBlue] = getRGBs(fromColor);
		const [toRed, toGreen, toBlue] = getRGBs(toColor);
		const deltaRed = toRed - fromRed;
		const deltaGreen = toGreen - fromGreen;
		const deltaBlue = toBlue - fromBlue;

		return t => {
			const red = scaledValue(fromRed, deltaRed, t);
			const green = scaledValue(fromGreen, deltaGreen, t);
			const blue = scaledValue(fromBlue, deltaBlue, t);
			return decimalToHex(red) + decimalToHex(green) + decimalToHex(blue);
		};
	}

	// "rrggbb" 16진수 색값을 가지는 tweened 스토어를 만듭니다.
	const color = tweened(
		colors[colorIndex],
		{duration: 1000, interpolate: rgbInterpolate}
	);

	// 색깔값 색인이 바뀌면 변경되는 동안 중간 색을 그리게 합니다. 이러한 작업을
	// inbetweening 혹은 tweening이라고 합니다.
	$: color.set(colors[colorIndex]);
</script>

<button on:click={goToNextColor}>Next</button>
<span>color = {$color}</span>
<h1 style="color: #{$color}">Tweened Color</h1>