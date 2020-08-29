<template>
  <f7-page name="libraries">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Libraries
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>
      <f7-list class="selection-list" inline-labels>
        <f7-list-item title="Alchemy Library" link="/alchemyLibrary/"></f7-list-item>
        <f7-list-item title="Blacksmithing Library" link="/blacksmithingLibrary/"></f7-list-item>
        <f7-list-item title="Bonding Library" link="/bondingLibrary/" @click="updateWasAtLibraries"></f7-list-item>
        <f7-list-item title="Enchanting Library" link="/enchantingLibrary/"></f7-list-item>
        <f7-list-item title="Lockpicking Library" link="/lockpickingLibrary/"></f7-list-item>
        <f7-list-item title="Pickpocketing Library" link="/pickpocketingLibrary/"></f7-list-item>
        <div id="spell-library-cover" @click="startLoading"></div>
        <f7-list-item id="spell-library" title="Spell Library" link="/spellLibrary/" @click="updateWasAtLibraries"></f7-list-item>
        <f7-list-item title="Vampiric Library" link="/vampiricLibrary/"></f7-list-item>
        <f7-list-item title="Werecreature Library" link="/werecreatureLibrary/"></f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: 'Libraries',
  components: {
    QuickViewFAB,
  },
  methods: {
    updateWasAtLibraries() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"WasAtLibraries", true);
    },
    startLoading() {
      this.$store.state.loaderText = "TRAVELLING TO SPELL LIBRARY"
      this.$store.state.isLoading = true;
      setTimeout(function() {
        document.querySelector("#spell-library a").click();
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WasAtLibraries", true);
      }, 100);
    },
  },
  async created() {
    if (this.$router.history.current.path !== "/libraries/") {
      this.$router.push({ path: "/libraries/" })
    }

    localStorage.setItem(localStorage.currentlySelectedCharacter+"WasAtLibraries", false);
    this.$store.state.isLoading = false;
  },
};
</script>

<style>
#spell-library-cover {
  width: 100%;
  height: 48px;
  position: absolute;
  z-index: 10;
  cursor: pointer;
}
</style>
