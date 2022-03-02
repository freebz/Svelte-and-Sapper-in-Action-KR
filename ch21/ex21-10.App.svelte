<!-- 예제 21-10 app/App.svelte 파일 -->

<script>
  import {onMount} from 'svelte';
  import RadSideDrawerElement from
    'svelte-native-nativescript-ui/sidedrawer';
  import AboutPage from './AboutPage.svelte';
  import HelloPage from './HelloPage.svelte';
  import {goToPage, setDrawer} from './nav';

  RadSideDrawerElement.register();

  let drawer;

  onMount(() => setDrawer(drawer));
</script>

<page>
  <radSideDrawer bind:this={drawer} drawerContentSize="200">
    <radSideDrawer.drawerContent>
      <stackLayout>
        <label
          class="fas h2"
          text="&#xF00D;"
          padding="10"
          horizontalAlignment="right"
          on:tap={() => drawer.closeDrawer()}
        />
        <label text="About" on:tap={() => goToPage(AboutPage)} />
        <label text="Hello" on:tap={() => goToPage(HelloPage)} />
      </stackLayout>
    </radSideDrawer.drawerContent>
    <radSideDrawer.mainContent>
      <frame id="mainFrame" defaultPage={HelloPage} />
    </radSideDrawer.mainContent>
  </radSideDrawer>
</page>

<style>
  label {
    color: white;
    font-size: 30;
    padding-bottom: 30;
  }

  stackLayout {
    background-color: cornflowerblue;
    padding: 20;
  }
</style>
