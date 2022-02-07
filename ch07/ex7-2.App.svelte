<!-- 예제 7-2 @html과 sanitizeHtml로 HTML을 화면에 그리기 -->

<script>
	import sanitizeHtml from  'sanitize-html';

	const SAFE = true;
	const SANITIZE_OPTIONS = {
		allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
		allowedAttributes: {img: ['alt', 'src']}
	};

	function buildScript(content) {
		const s = 'script';
		return `<${s}>${content}</${s}>`;
	}

	function sanitize(markup) {
		return SAFE ? sanitizeHtml(markup, SANITIZE_OPTIONS) : markup;
	}

	const markup1 = buildScript('console.log("pwned by script")');

	const markup2 = '<img alt="star" src="star.png" ' +
		'onload="console.log(\'pwned by onload\')" />';
	
	const markup3 = '<img alt="star" src="star.png" ' +
		'onerror="console.log(\'pwned by onerror\')" />';

	const markup4 = '<img alt="missing" src="missing.png" ' +
		'onerror="console.log(\'pwned by onerror\')" />';

	const markups = [markup1, markup2, markup3, markup4];
</script>

<h1>Check the console.</h1>
{#each markups as markup}
	{@html sanitize(markup)}
{/each}