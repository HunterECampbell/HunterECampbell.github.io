<template>
  <f7-page name="bag">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Bag
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB />

    <!-- Scrollable page content-->
    <f7-block inner>
      <form>
        <label>Items</label>
        <textarea class="page-textarea" id="items" @keyup="saveItems"></textarea>
      </form>
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: 'Bag',
  components: {
    QuickViewFAB,
  },
  methods: {
    async load() {
      await setTimeout(function() {}, 1000);
      await document.getElementById("items").value;

      document.getElementById("items").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Items");
    },
    saveItems() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Items", document.getElementById("items").value);
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/bag/") {
      this.$router.push({ path: "/bag/" })
    }
  },
};
</script>
