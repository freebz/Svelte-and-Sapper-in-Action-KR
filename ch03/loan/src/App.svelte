<!-- 예제 3-3 대출 상환금 계산기 -->

<script>
	const MONTHS_PER_YEAR = 12;
	let interestRate, loanAmount, years;

	function calculatePayment(loanAmount, interestRate, years) {
		if (!loanAmount || !years) return 0;
		const months = years * MONTHS_PER_YEAR;
		if (!interestRate) return loanAmount / months;
		const monthlyInterestRate = interestRate / 100 / MONTHS_PER_YEAR;
		const numerator = loanAmount * monthlyInterestRate;
		const denominator = 1 - (1 + monthlyInterestRate) ** -months;
		return numerator / denominator;
	}

	function reset() {
		interestRate = 3;
		loanAmount = 200000;
		years = 30;
	}

	reset();

	$: payment = calculatePayment(loanAmount, interestRate, years);
</script>

<label for="loan">Loan Amount</label>
<input id="loan" type="number" bind:value={loanAmount}>

<label for="interest">Interest Rate</label>
<input id="interest" type="number" bind:value={interestRate}>

<label for="years">Years</label>
<input id="years" type="number" bind:value={years}>

<div>
	Monthly Payment: ${payment.toFixed(2)}
</div>

<button on:click={reset}>Reset</button>