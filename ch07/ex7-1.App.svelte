<!-- 예제 7-1 textarea 요소 내의 HTML 문자열을 화면에 그리는 앱 코드 -->

<script>
	let markup = '<h1 style="color: red">Hello!</h1>';
</script>

<textarea bind:value={markup} rows={5} />
{@html markup}

<style>
	textarea {
		width: 95vw;
	}
</style>