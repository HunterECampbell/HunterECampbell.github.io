<template>
  <f7-page name="notes">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Notes
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB />

    <!-- Scrollable page content-->
    <f7-block inner>
      <form>
        <label>Notes</label>
        <textarea class="page-textarea" id="notes" @keyup="saveNotes"></textarea>
      </form>
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: 'Notes',
  components: {
    QuickViewFAB,
  },
  methods: {
    async load() {
      await setTimeout(function() {}, 1000);
      await document.getElementById("notes").value;

      document.getElementById("notes").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Notes")
    },
    saveNotes() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Notes", document.getElementById("notes").value);
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/notes/") {
      this.$router.push({ path: "/notes/" })
    }
  },
};
</script>
