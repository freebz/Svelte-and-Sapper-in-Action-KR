<!-- 예제 8-3 onMount에서 데이터 불러오기 예제 -->

<script>
	import {onMount} from 'svelte';
	
	let employees = [];
	let message;

	onMount(async () => {
		const res = await fetch(
			'https://dummy.restapiexample.com/api/v1/employees');
		const json = await res.json();
		if (json.status === 'success') {
			employees = json.data.sort(
				(e1, e2) => e1.employee_name.localeCompare(e2.employee_name));
			message = '';
		} else {
			employees = [];
			message = json.status;
		}
	});
</script>

<table>
	<caption>Employees</caption>
	<tr><th>Name</th><th>Age</th></tr>
	{#each employees as employee}
		<tr>
			<td>{employee.employee_name}</td>
			<td>{employee.employee_age}</td>
		</tr>
	{/each}
</table>
{#if message}
	<div class="error">Failed to retrive employees: {message}</div>
{/if}

<style>
	caption {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.error {
		color: red;
	}
	table {
		border-collapse: collapse;
	}
	td, th {
		border: solid lightgray 1px;
		padding: 0.5rem;
	}
</style>