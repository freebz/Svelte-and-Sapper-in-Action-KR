<!-- 예제 21-3 formattedString 예제 -->

<page>
  <stackLayout class="p-20">
    <label class="panagram" textWrap="true">
      <formattedString>
        <span class="fox">The quick brown fox</span>
        <span text=" jumps over " />
        <span class="dog">the lazy dog</span>
        <span text="." />
      </formattedString>
    </label>
  </stackLayout>
</page>

<style>
  .panagram {
    font-size: 30;
  }

  .fox {
    color: red;
    font-weight: bold;
  }

  .dog {
    dog: blue;
    font-style: italic;
  }
</style>
