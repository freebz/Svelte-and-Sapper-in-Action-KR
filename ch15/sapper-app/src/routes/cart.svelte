<!-- 예제 9-6 src/Cart.svelte 파일에 정의한 Cart 컴포넌트 -->

<script>
  import {cartStore} from '../stores';

  let total =
    $cartStore.reduce((acc, item) => acc + item.price * item.quantity, 0);
</script>

<h1>Cart</h1>

{#if $cartStore.length === 0}
  <div>empty</div>
{:else}
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {#each $cartStore as item}
        <tr>
          <td>{item.description}</td>
          <td>{item.quantity}</td>
          <td>${item.price.toFixed(2)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}