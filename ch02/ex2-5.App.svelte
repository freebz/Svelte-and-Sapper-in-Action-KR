<!-- 예제 2-5 대출 상환 금액 계산 애플리케이션의 src/App.svelte 파일 -->

<script>
	let interestRate = 3;
	let loanAmount = 200000;
	let years = 30;
	const MONTHS_PER_YEAR = 12;

	$: months = years * MONTHS_PER_YEAR;
	$: monthlyInterestRate = interestRate / 100 / MONTHS_PER_YEAR;
	$: numerator = loanAmount * monthlyInterestRate;
	$: denominator = 1 - (1 + monthlyInterestRate) ** -months;
	$: payment =
		!loanAmount || !years ? 0 :
		interestRate ? numerator / denominator :
		loanAmount / months;
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
