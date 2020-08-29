<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Right Panel / View -->
    <RightPanelNavigation />

    <!-- Main View -->
    <f7-view url="/" :main="true">
      <div v-show="isLoading" id="cover">
        <div id="loader-div">
          <h3 id="loader-text">{{ loaderText }}</h3>
          <div id="loader-section">
            <f7-preloader :id="/iPad|iPhone|iPod/.test(userAgent) ? 'loader-ios' : 'loader'"></f7-preloader>
          </div>
        </div>
      </div>
    </f7-view>


  </f7-app>
</template>

<script>
import routes from './routes';
import RightPanelNavigation from './components/RightPanelNavigation';

export default {
  name: 'App',
  components: {
    RightPanelNavigation,
  },
  data() {
    return {
      f7params: {
        theme: 'md',
        routes,
        id: 'io.framework7.testapp',
        pushStateNoAnimation: true,
        panel: {
          leftBreakpoint: 960
        },
      },
      loaderText: "",
      userAgent: navigator.userAgent || navigator.vendor || window.opera,
    };
  },
  computed: {
    isLoading() {
      this.loaderText = this.$store.state.loaderText;
      if (this.loaderText === "TRAVELLING BACK TO ADVENTURE") {
        document.getElementById("loader-text").style.paddingBottom = "3px";
      }
      return this.$store.state.isLoading;
    },
  },
  methods: {
    handleBackButton() {
      // NOTE: The back button will behave differently depending on circumstance
      // If the side panel is open, close it
      if (document.querySelector('.panel-right.panel-active')) {
        // This will do nothing when the split-view is open
        return this.$f7.panel.close();
      }
      // Close modals
      // @TODO How to handle modals we shouldn't close like a login-screen?
      if (document.querySelector('.modal-in')) {
        return this.$f7.popover.close();
      }
      // If we have a back button, we want it to go back
      if (this.$f7.views.main.router.history.length > 1) {
        return this.$f7.views.main.router.back();
      }
      // Default to closing the app
      return window.navigator.app.exitApp();
    },
  },
  created() {
    if (this.$router.history.current.path !== "/") {
      this.$router.push({ path: "/" })
    }
    document.addEventListener('backbutton', this.handleBackButton);
    
    if (localStorage.character1AppColor === undefined) {
      localStorage.character1AppColor = "--green";
    }
    if (localStorage.character2AppColor === undefined) {
      localStorage.character2AppColor = "--green";
    }
    if (localStorage.character3AppColor === undefined) {
      localStorage.character3AppColor = "--green";
    }
    if (localStorage.character4AppColor === undefined) {
      localStorage.character4AppColor = "--green";
    }
    if (localStorage.character5AppColor === undefined) {
      localStorage.character5AppColor = "--green";
    }
    if (localStorage.character6AppColor === undefined) {
      localStorage.character6AppColor = "--green";
    }
    if (localStorage.character7AppColor === undefined) {
      localStorage.character7AppColor = "--green";
    }
    if (localStorage.character8AppColor === undefined) {
      localStorage.character8AppColor = "--green";
    }
    if (localStorage.character9AppColor === undefined) {
      localStorage.character9AppColor = "--green";
    }
    if (localStorage.character10AppColor === undefined) {
      localStorage.character10AppColor = "--green";
    }

    let currentCharacterColor = localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor");
    document.documentElement.style.setProperty('--current-app-color', "var("+currentCharacterColor+")");
  }
};
</script>

<style>
:root {
  --dark-gray: #262626;
  --light-dark-gray: #323232;
  --pink: #df53d1;
  --red: #C24141;
  --orange: #e68a00;
  --yellow: #e6e600;
  --green: #41c241;
  --teal: #41c2c2;
  --blue: #005ce6;
  --purple: #ad33ff;
  --white: #e6e6e6;
  --brown: #996633;
  --current-app-color: var(--green);
  --character1-button-color: var(--light-dark-gray);
  --character2-button-color: var(--light-dark-gray);
  --character3-button-color: var(--light-dark-gray);
  --character4-button-color: var(--light-dark-gray);
  --character5-button-color: var(--light-dark-gray);
  --character6-button-color: var(--light-dark-gray);
  --character7-button-color: var(--light-dark-gray);
  --character8-button-color: var(--light-dark-gray);
  --character9-button-color: var(--light-dark-gray);
  --character10-button-color: var(--light-dark-gray);
}

* {
  color: white !important;
}

.page-content, .navbar {
  background-color: var(--dark-gray) !important;
  border-left: 7px solid var(--current-app-color);
}

.icon {
  color: var(--current-app-color) !important;
}
.larger-icon {
  font-size: 32px;
}

.button {
  background-color: var(--light-dark-gray) !important;
  width: 90%;
  border-radius: 15px;
  margin: 15px auto 0 auto;
}

input, textarea {
  background-color: var(--light-dark-gray) !important;
  width: 100% !important;
  margin-top: 7px !important;
  margin-bottom: 15px !important;
  padding: 7px !important;
  border-radius: 5px !important;
  border: solid 3px var(--light-dark-gray) !important;
}
.dark-input {
  background-color: var(--dark-gray) !important;
  border-radius: 5px !important;
}
.disabled-input {
  background-color: var(--dark-gray) !important;
  border-radius: 5px !important;
  border: solid 3px var(--light-dark-gray) !important;
}
input:focus, textarea:focus {
  border: solid 2px var(--current-app-color) !important;
}

textarea {
  height: 100px !important;
}
.shorter-textarea {
  height: 65px !important;
}
.larger-textarea {
  height: 200px !important;
}
.page-textarea {
  height: 500px !important;
}

.larger-text {
  font-size: 24px !important;
}

.display-div {
  padding: 7px 15px;
  margin-top: -7px;
  border-radius: 5px;
  border: solid 2px #323232;
}

.shared-space {
  display: flex !important;
}
.shared-space-inner {
  width: 50% !important;
  padding: 0 5px;
}

.move-higher {
  margin-top: -15px !important;
}
.move-slightly-higher {
  margin-top: -7px !important;
}
.move-lower {
  margin-top: 25px !important;
}
.move-slightly-lower {
  margin-top: 15px !important;
}
.move-left {
  margin-left: -40px !important;
}
.extend-bottom {
  padding-bottom: 25px !important;
}

.checkbox {
  width: 100% !important;
  display: flex !important;
}
.checkbox-label {
  margin: 0 !important;
  padding-left: 10px !important;
}
.icon-checkbox {
  border: solid 2px var(--current-app-color) !important;
}
.icon-checkbox::after {
  background-color: var(--current-app-color) !important;
}

.icon-radio {
  border: solid 2px var(--current-app-color) !important;
}
.icon-radio::after {
  background-color: var(--current-app-color) !important;
}

.selection-list {
  background-color: var(--light-dark-gray) !important;
}
option {
  background-color: var(--light-dark-gray) !important;
}
option:focus {
  color: red !important;
}

.accordion-item, .accordion-item-content {
  background-color: var(--light-dark-gray) !important;
}
.accordion-item-content {
  border-top: solid 2px var(--dark-gray) !important;
  border-bottom: solid 2px var(--dark-gray) !important;
}
.accordion-display-div, .accordion-input {
  background-color: var(--dark-gray) !important;
}
.accordion-display-div {
  padding: 5px !important;
  margin-bottom: 15px;
  border: solid 2px var(--light-dark-gray) !important;
}

.circle-label {
  text-align: center;
  margin: 0 !important;
}
.circle-div {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: solid 7px var(--current-app-color);
  display: flex;
  margin: 7px auto 15px auto;
  font-size: 32px !important;
}
.circle-div p {
  margin: 36px auto;
}

.cover-page {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10;
}

.throbber {
  margin: 0 auto;
  top: 50%;
  bottom: 50%;
  width: 75%;
  padding: 1.5px 0;
}

.nav-items {
  font-size: 18px !important;
  padding: 10px !important;
}
.nav-icon {
  float: right;
  font-size: 28px;
}

.close-buttons {
  padding-top: 15px;
}
.red-button {
  color: red !important;
  border: solid 3px red !important;
  padding-bottom: 35px !important;
}
.green-button {
  color: #41c241 !important;
  border: solid 3px #41c241 !important;
  padding-bottom: 35px !important;
}
.colored-button {
  color: var(--current-app-color) !important;
  border: solid 3px var(--current-app-color) !important;
  padding-bottom: 35px !important;
}

#character1 {
  border-left: solid 4px var(--character1-button-color);
}
#character2 {
  border-left: solid 4px var(--character2-button-color);
}
#character3 {
  border-left: solid 4px var(--character3-button-color);
}
#character4 {
  border-left: solid 4px var(--character4-button-color);
}
#character5 {
  border-left: solid 4px var(--character5-button-color);
}
#character6 {
  border-left: solid 4px var(--character6-button-color);
}
#character7 {
  border-left: solid 4px var(--character7-button-color);
}
#character8 {
  border-left: solid 4px var(--character8-button-color);
}
#character9 {
  border-left: solid 4px var(--character9-button-color);
}
#character10 {
  border-left: solid 4px var(--character10-button-color);
}

.line {
  border: solid 2px var(--light-dark-gray);
}
.dark-line {
  border: solid 2px var(--dark-gray);
}

#cover {
  margin-top: -25px;
  height: 110%;
  width: 100%;
  z-index: 100;
  position: relative;
  background-color: rgba(50, 50, 50, 0.5);
}
#loader-div {
  width: 270px;
  height: 150px;
  background-color: var(--dark-gray);
  z-index: 100;
  position: relative;
  margin: 0 auto;
  top: 25%;
  border-radius: 5px;
  border-left: 7px solid var(--current-app-color);
}
#loader-text {
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
}
#loader-section {
  width: 100%;
}
#loader {
  display: flex;
  margin: 0 auto;
}
#loader-ios {
  display: flex;
  margin: 0 auto;
  background-color: var(--current-app-color);
}
.md .preloader-inner .preloader-inner-half-circle {
  border: solid 4px var(--current-app-color) !important;
  border-bottom-color: transparent !important;
}
.md .preloader-inner .preloader-inner-right .preloader-inner-half-circle {
  border-left-color: transparent !important;
}

.panel-right .page[data-v-816ad8a8] {
  padding-bottom: 0 !important;
}

.ripple-wave {
  background-color: var(--current-app-color) !important;
}

.gauge-back-circle {
  stroke: var(--light-dark-gray);
}
.gauge-front-circle {
  stroke: var(--current-app-color);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

.red-text {
  color: red !important;
}
.colored-text, .colored-text * {
  color: var(--current-app-color) !important;
}
.colored-white-text, .colored-white-text * {
  color: var(--green) !important;
}

.search-div {
  padding: 0px;
  height: 40px;
}
.search-box {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border: solid 2px var(--current-app-color) !important;
  border-right: none !important;
  width: 95% !important;
  height: 100% !important;
  margin-top: 0 !important;
}
.search-box:focus {
  border-right: none !important;
}
.search-icon {
  height: 40px !important;
  width: 5% !important;
  background-color: var(--light-dark-gray) !important;
  color: var(--current-app-color) !important;
  border: solid 2px var(--current-app-color) !important;
  border-left: none !important;
  border-radius: 5px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  margin-top: 0 !important;
}


@media (min-width: 960px) {
  .fab {
    margin-right: 15px;
  }
}
.fab {
  position: fixed;
}
.fab > a, .fab-buttons > a {
  background-color: var(--current-app-color) !important;
  color: var(--dark-gray) !important;
  font-weight: bold !important;
}
.fab > a > i, .fab-label-button {
  color: var(--dark-gray) !important;
  font-weight: bold !important;
}
.fab-label {
  background-color: var(--dark-gray) !important;
  border: solid 2px var(--current-app-color);
  color: var(--current-app-color) !important;
}
.fab-button-overlay {
  background-color: rgba(255, 0, 0, 0) !important;
  margin-top: -5px !important;
  margin-right: -1.5px !important;
  height: 40px !important;
  width: 40px !important;
  color: var(--dark-gray) !important;
  font-size: 2em !important;
  box-shadow: none !important;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--light-dark-gray);
}
::-webkit-scrollbar-thumb {
  background: var(--current-app-color);
  border-radius: 5px;
}
</style>
