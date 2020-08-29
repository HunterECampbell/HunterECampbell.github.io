/* eslint-disable no-unused-vars */
// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js';

// Import App Component
import App from './app';

// Set up some useful globals
window.isMaterial = !Framework7.device.ios;
window.isiOS = Framework7.device.ios;

// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
});

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // SHARED
    isLoading: false,
    loaderText: "",
    quickViewCount: localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount"),

    // STATS
    isTamedCreature: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")),
    levelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage"),

    // ALCHEMY LIBRARY
    canCreatePotions: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanCreatePotions")),
    alchemyLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel"),
    alchemyLevelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage"),

    // BLACKSMITHING LIBRARY
    canForge: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanForge")),
    blacksmithingLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel"),
    blacksmithingLevelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage"),

    // ENCHANTING LIBRARY
    canEnchant: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanEnchant")),
    enchantingLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel"),
    enchantingLevelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage"),

    // LOCKPICKING LIBRARY
    canLockpick: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanLockpick")),
    lockpickingLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel"),
    lockpickingLevelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevelUpPercentage"),

    // PICKPOCKETING LIBRARY
    canPickpocket: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanPickpocket")),
    pickpocketingLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel"),
    pickpocketingLevelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage"),

    // VAMPIRIC LIBRARY
    isInfectedVampiric: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric")),
    vampiricLevel: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel")),
    vampiricLevelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage"),

    // WERECREATURE LIBRARY
    isInfectedWerecreature: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature")),
    werecreatureLevel: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel")),
    werecreatureLevelUpPercentage: localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage"),

    // QUICK VIEW FAB
    showCharacterName: localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowCharacterName"),
    characterName: localStorage.getItem(localStorage.currentlySelectedCharacter+"Name"),
    showCharacterLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowCharacterLevel"),
    characterLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"Level"),
    showAddExperience: localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowAddExperience"),
  },
});

// Init App
const baseApp = new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  router,
  store,
});
