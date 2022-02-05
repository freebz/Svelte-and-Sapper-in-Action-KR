<!-- 예제 5-9 bind 지시자 예제 -->

<script>
  const colors =
    ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const flavors = ['vanilla', 'chocolate', 'strawberry'];
  const seasons = ['Spring', 'Summer', 'Fail', 'Winter'];
  let favoriteColor = '';
  let favoriteFlavors = [];
  let favoriteSeason = '';
  let happy = true;
  let name = '';
  let story = '';
</script>

<div class="form">
  <div>
    <label>Name</label>
    <input type="text" bind:value={name}>
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={happy}>
      Happy?
    </label>
  </div>
  <div>
    <label>Favorite Flavors</label>
    {#each flavors as flavor}
    <label class="indent">
      <input type="checkbox" value={flavor} bind:group={favoriteFlavors}>
      {flavor}
    </label>
    {/each}
  </div>
  <div>
    <label>Favorite Season</label>
    {#each seasons as season}
    <label class="indent">
      <input type="radio" value={season} bind:group={favoriteSeason}>
      {season}
    </label>
    {/each}
  </div>
  <div>
    <label>
      Favorite Color
      <select bind:value={favoriteColor}>
        <option />
        {#each colors as color}
        <option>{color}</option>
        {/each}
      </select>
    </label>
  </div>
  <div>
    <label>
      Life Story
      <textarea bind:value={story} />
    </label>
  </div>

  {#if name}
    <div>
      {name} likes {favoriteColor}, {favoriteSeason},
      and is {happy ? 'happy' : 'unhappy'}.
    </div>
    <div>{name}'s favorite flavors and {favoriteFlavors}.</div>
    <div>Story: {story}</div>
  {/if}
</div>

<style>
  div {
    margin-bottom: 10px;
  }

  .indent {
    margin-left: 10px;
  }

  input,
  select,
  textarea {
    border: solid lightgray 1px;
    border-radius: 4px;
    margin: 0;
    padding: 4px;
  }

  input[type='checkbox'],
  input[type='radio'] {
    margin: 0 5px 0 0;
  }

  label {
    display: inline-flex;
    align-items: center;
  }

  select,
  textarea {
    margin-left: 5px;
  }
</style>