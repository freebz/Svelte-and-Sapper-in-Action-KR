<!-- 예제 5-20 src/ShippingLabel.svelte 파일의 ShippingLabel 컴포넌트 -->

<div>
  <label>Ship To:</label>
  <slot name="name">unknown</slot>
  <slot name="address" />
</div>

<style>
  label {
    display: block;
    font-weight: bold;
  }
</style>