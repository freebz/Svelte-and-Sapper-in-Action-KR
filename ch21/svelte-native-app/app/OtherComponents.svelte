<!-- 예제 21-9 app/OtherComponents.svelte 파일에 정의한 OtherComponents 컴포넌트 -->

<script>
  import {login} from 'tns-core-modules/ui/dialogs'
  import {
    authenticated,
    backgroundColor,
    colors,
    favoriteColor,
    favoriteColorIndex,
    firstName
  } from './stores';

  let busy = false;
  let query = '';

  // store.js에서 처리해야 할까요?
  $: $backgroundColor = $authenticated ? 'lightgreen' : 'pink';

  async function getFirstName() {
    const res = await prompt({
      title: 'First Name',
      message: 'Please tell me your first name.',
      okButtonText: 'Here it it',
      cancelButtonText: 'I will not share that'
    });
    if (res.result) $firstName = res.text;
  }

  function onSearchSubmit() {
    busy = true;
    setTimeout(async () => { // activityIndicator 컴포넌트의 동작을 보여줍니다.
      // 여기로 전달되는 event 객체는 검색이나
      // 그 외 쓸만한 속성값을 가지고 있지 않습니다.
      const q = query.toLowerCase();
      const matches = colors.filter(color => color.includes(q));
      busy = false;
      await alert({
        title: 'Color Matches',
        message: matches.length ? matches.join(', ') : 'no matches',
        okButtonText: 'Close'
      });
      query = ''; // 초기화
    }, 1000);
  }

  async function pickColor() {
    const NONE = 'No Thanks';
    const choice = await action('Pick a color', NONE, colors);
    if (choice !== NONE) {
      $favoriteColorIndex = colors.findIndex(c => c === choice);
    }
  }

  async function promptForLogin() {
    const res = await login({
      title: 'Please Sign In',
      message: 'This will unlock more features.',
      userNameHint: 'username',
      passwordHint: 'password',
      okButtonText: 'OK',
      cancelButtonText: 'Cancel',
    });
    if (res.result) {
      // 여기에서 사용자 인증을 처리
      $authenticated = res.userName === 'foo' && res.password === 'bar';
      if (!$authenticated) {
        alert({
          title: 'Login Failed',
          message: 'Your username or password was incorrect.',
          okButtonText: 'Bummer'
        });
      }
    }
  }
</script>

<scrollView>
  <stackLayout
    backgroundColor={$backgroundColor}
    class="p-20"
  >
    <label class="title" text="login" />
    <wrapLayout>
      {#if $authenticated}
        <button on:tap={() => $authenticated = false}>Logout</button>
      {:else}
        <button on:tap={promptForLogin}>Login ...</button>
      {/if}
    </wrapLayout>

    <label class="title" text="prompt" />
    <button on:tap={getFirstName}>Prompt for First Name</button>
    <label class="plain" text="Your first name is {$firstName}." />

    <label class="title" text="action" />
    <button on:tap={pickColor}>Pick a Color</button>
    <label class="plain" text="You selected ${favoriteColor}." />

    <label class="title" text="searchBar" />
    <!-- gridLayout을 사용해서 activityIndicator를 searchBar 위 쪽에 위치하도록
      만듭니다 -->
    <gridLayout rows="*">
      <searchBar
        hint="Enter part of a color name."
        bind:text={query}
        on:submit={onSearchSubmit}
        row="0"
      />
      <!-- activityIndicator의 height 및 width 속성값을 통해
        할당된 크기를 조절합니다. 하지만 spinner의 크기는 변경할 수 없으면
        색 값만 바꿀 수 있습ㄴ다. -->
      <activityIndicator busy={busy} row="0"/>
    </gridLayout>
  </stackLayout>
</scrollView>

<style>
  activityIndicator {
    color: blue;
  }

  searchBar {
    margin-bottom: 10;
  }
</style>
