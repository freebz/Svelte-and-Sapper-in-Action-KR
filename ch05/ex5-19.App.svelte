<!-- 예제 5-19 ShippingLabel 컴포넌트에 명명된 슬롯 전달하기 -->

<script>
  import ShippingLabel from './ShippingLabel.svelte';
</script>

<ShippingLabel>
  <div slot="address">
    123 Some Street,<br />
    Somewhere, Some State 12345
  </div>
  <div slot="name">Mark Volkmann</div>
</ShippingLabel>