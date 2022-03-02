<!-- 예제 21-8 app/InputComponents.svelte 파일에 정의한 InputComponents 컴포넌트 -->

<script>
  import {Template} from 'svelte-native/components'

  import {
    backgroundColor,
    colors,
    favoriteColor,
    favoriteColorIndex,
    firstName
  } from './stores';

  const temperatures = ['Cold', 'Warm', 'Hot'];

  let birthday = new Date(1961, 3, 16);
  let likeRunning = false;
  let reason = '';
  let stars = 3;
  let temperatureIndex = 1;

  let quittingTime = new Date();
  quittingTime.setHours(17);
  quittingTime.setMinutes(0);
  quittingTime.setSeconds(0);

  function formatDate(date) {
    if (!date) return '';
    let month = date.toLocaleDateString('default', {month: 'long'});
    const index = month.indexOf(' ');
    if (index) month = month.substring(0, index);
    return `${month} ${date.getDate()}, ${date.getFullYear()}`;
  }

  function formatTime(date) {
    if (!date) return '';

    let hours = date.getHours();
    const amPm = hours < 12 ? 'AM' : 'PM';
    if (hours >= 12) hours -= 12;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    return `${hours}:${minutes} ${amPm}`;
  }

  function onFavoriteColor(event) {
    $favoriteColorIndex = event.value; // 이상하긴 하지만 이 값이 색인값입니다.
  }

  function onTapColor(event) {
    $favoriteColorIndex = event.index;
  }

  function starChange(event) {
    stars = Math.round(event.value);
  }
</script>

<scrollView>
  <stackLayout
    backgroundColor={$backgroundColor}
    class="p-20"
  >
    <!-- HTML <input type="text">와 비슷함 -->
    <label class="title" text="textField" />
    <wrapLayout>
      <label text="First Name" />
      <textField class="first-name" hint="first name" bind:text={$firstName} />
      <label class="plain" text="Your first name is {$firstName}." />
    </wrapLayout>

    <!-- HTML <textarea>와 비슷함 -->
    <label class="title" text="textView" />
    <wrapLayout>
      <label text="What would you say you do here?" />
      <textView class="reason" hint="reason for being" bind:text={reason} />
      <label class="plain" text="Your reason for being is {reason}." textWrap="true" />
    </wrapLayout>

    <!-- HTML <input type="checkbox">와 비슷함 -->
    <label class="title" text="switch" />
    <wrapLayout>
      <label text="Like Running?" />
      <switch bind:checked={likeRunning} />
      <label
        class="plain"
        text="You{likeRunning ? '' : ' do not'} like running."
      />
    </wrapLayout>

    <!-- HTML <input type="radio">와 비슷함 -->
    <label class="title" text="segmentedBar" />
    <segmentedBar
      bind:selectedIndex={temperatureIndex}
      selectedBackgroundColor="yellow"
    >
      <segmentedBarItem title="Cold" />
      <segmentedBarItem title="Warm" />
      <segmentedBarItem title="Hot" />
    </segmentedBar>
    <segmentedBar
      bind:selectedIndex={temperatureIndex}
      selectedBackgroundColor="yellow"
    >
      {#each temperatures as temp}
        <segmentedBarItem title={temp} />
      {/each}
    </segmentedBar>
    <label
      class="plain"
      text="You are feeling {temperatures[temperatureIndex]}."
    />

    <!-- HTML <input type="date">와 비슷함 -->
    <label class="title" text="datePicker" />
    <wrapLayout>
      <label text="Birthday" />
      <datePicker bind:date={birthday} />
      <label class="plain" text="You selected {formatDate(birthday)}." />
    </wrapLayout>

    <!-- HTML <input type="time">와 비슷함 -->
    <label class="title" text="timePicker" />
    <wrapLayout>
      <label text="Quitting Time" />
      <timePicker bind:time={quittingTime} />
      <label class="plain" text="You will quit at {formatTime(quittingTime)}." />
    </wrapLayout>

    <!-- HTML <ul>, <ol>, <select>와 비슷함 -->
    <label class="title" text="listView" />
    <wrapLayout>
      <listView items={colors} on:itemTap={onTapColor}>
        <Template let:item={color}>
          <label
            class="list"
            class:selected={color === $favoriteColor}
            text="One of the colors is {color}."
          />
        </Template>
      </listView>
    </wrapLayout>
    <label class="plain" text="You selected {$favoriteColor}." />

    <!-- HTML <select>와 비슷함 -->
    <label class="title" text="listPicker" />
    <wrapLayout>
      <label text="Favorite Color" />
      <listPicker
        items={colors}
        selectedIndex={$favoriteColorIndex}
        on:selectedIndexChange={onFavoriteColor}
      />
      <label class="plain" text="You selected {$favoriteColor}." />
    </wrapLayout>

    <!-- HTML <input type="range">와 비슷함 -->
    <label class="title" text="slider" />
    <wrapLayout>
      <label text="Stars" />
      <slider
        minValue={1}
        maxValue={5}
        value={stars}
        on:valueChange={starChange}
      />
      <label class="plain" text="You rated it {stars} stars" />
    </wrapLayout>
  </stackLayout>
</scrollView>

<style>
  .first-name {
    width: 100%;
  }

  .list {
    border-color: blue;
    border-width: 1;
    margin: 0;
  }

  .reason {
    width: 100%;
  }

  segmentedBar {
    color: red;
    margin-bottom: 10;
    margin-top: 10;
  }

  .selected {
    background-color: lightgreen;
  }
</style>
