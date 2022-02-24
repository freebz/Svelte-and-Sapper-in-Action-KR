<!-- 예제 16-6 src/routes/employees.svelte 파일에서 프리페칭 확인하기 -->

<script context="module">
  export async function preload(page, session) {
    console.log('employees.svelte preload: entered');
    try {
      const url = 'https://dummy.restapiexample.com/api/v1/employees';
      const res = await this.fetch(url);

      if (res.ok) {
        const result = await res.json();
        const employees = result.data;

        // 직원을 이름, 성 순으로 정렬합니다.
        employees.sort((emp1, emp2) => {
          const [first1, last1] = emp1.employee_name.split(' ');
          const [first2, last2] = emp2.employee_name.split(' ');
          const compare = last1.localeCompare(last2);
          return compare ? compare : first1.localeCompare(first2);
        });

        return {employees};
      } else {
        const msg = await res.text();
        this.error(res.statusCode, 'employees preload error: ' + msg);
      }
    } catch (e) {
      this.error(500, 'employees preload error: ' + e.message);
    }
  }
</script>

<script>
  export let employees;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
</script>

<svelte:head>
  <title>Employees</title>
</svelte:head>

<table>
  <caption>Employees</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Salary</th>
  </tr>
  {#each employees as employee}
    <tr>
      <td>{employee.employee_name}</td>
      <td class="right">{employee.employee_age}</td>
      <td class="right">{formatter.format(employee.employee_salary)}</td>
    </tr>
  {/each}
</table>

<style>
  caption {
    font-size: 2rem;
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
  }

  td, th {
    border: solid lightgray 1px;
    padding: 0.5rem;
  }

  .right {
    text-align: right;
  }
</style>