<template>
  <div>
    <f7-fab :position="location" slot="fixed"> <!-- REMOVED v-show="quickViewCount > 0" -->
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
      <f7-fab-buttons :position="openDirection">
        <!-- <f7-fab-button v-show="showCharacterName" :label="updateCharacterNameValue">CN</f7-fab-button>
        <f7-fab-button v-show="showCharacterLevel" label="Level">{{ updateCharacterLevelValue }}</f7-fab-button>
        <f7-fab-button v-show="showAddExperience" label="Add Experience">
          <f7-button class="fab-button-overlay" popup-open="#add-experience-fab" popup-close>+</f7-button>
        </f7-fab-button> -->
        <f7-fab-button label="AC">{{ ACValue }}</f7-fab-button>
        <f7-fab-button label="HP">{{ HPValue }}</f7-fab-button>
        <f7-fab-button label="STR">{{ STRValue }}</f7-fab-button>
        <f7-fab-button label="DEX">{{ DEXValue }}</f7-fab-button>
        <f7-fab-button label="CON">{{ CONValue }}</f7-fab-button>
        <f7-fab-button label="INT">{{ INTValue }}</f7-fab-button>
        <f7-fab-button label="WIS">{{ WISValue }}</f7-fab-button>
        <f7-fab-button label="CHA">{{ CHAValue }}</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
    
    <f7-popup id="add-experience-fab" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar title="Add Experience">
        </f7-navbar>
        <f7-block>
          <h2>How much experience are you adding?</h2>
          <input id="add-experience-input-fab" type="number">

          <div class="close-buttons">
            <f7-button class="green-button" @click="updateExperience" popup-close>Confirm</f7-button>
            <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
          </div>
        </f7-block>
      </f7-page>
    </f7-popup>
  </div>
</template>

<script>
export default {
  name: 'QuickViewFAB',
  props: {
    location: {
      type: String,
      required: false,
      default: "right-top",
    },
    openDirection: {
      type: String,
      required: false,
      default: "bottom",
    },
  },
  data() {
    return {
      popupOpened: false,
      ACValue: localStorage.getItem(localStorage.currentlySelectedCharacter+"ArmorClass"),
      HPValue: localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP"),
      STRValue: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus")),
      DEXValue: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus")),
      CONValue: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus")),
      INTValue: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus")),
      WISValue: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus")),
      CHAValue: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus")),
    };
  },
  computed: {
    quickViewCount: function() {
      return this.$store.state.quickViewCount;
    },
    showCharacterName: function() {
      return this.$store.state.showCharacterName;
    },
    updateCharacterNameValue: function() {
      return this.$store.state.characterName;
    },
    showCharacterLevel: function() {
      return this.$store.state.showCharacterLevel;
    },
    updateCharacterLevelValue: function() {
      return this.$store.state.characterLevel;
    },
    showAddExperience: function() {
      return this.$store.state.showAddExperience;
    },
  },
  methods: {
    resetText() {
      document.getElementsByClassName("red-button").click;
      document.getElementById("add-experience-input-fab").value = "";
    },
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 355000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", "MAX");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 20);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 305000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 355000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 19);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 305000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 265000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 305000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 18);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 265000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 225000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 265000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 17);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 225000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 195000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 225000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 16);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 195000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 165000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 195000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 165000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 140000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 165000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 14);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 140000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 120000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 140000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 13);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 120000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 100000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 120000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 12);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 100000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 85000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 100000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 11);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 85000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 64000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 85000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 64000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 48000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 64000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 48000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 34000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 48000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 34000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 23000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 34000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 23000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 14000) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 23000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 14000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 6500) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 14000);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 6500);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 2700) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 6500);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 2700);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 900) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 2700);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 900);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") >= 300) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 900);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 300);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 300);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 1);
      }
    },
    updateExperience() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentExperience", 0 + JSON.parse(document.getElementById("add-experience-input-fab").value));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentExperience", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience")) + JSON.parse(document.getElementById("add-experience-input-fab").value));
      }

      document.getElementById("add-experience-input-fab").value = "";
      if (document.getElementById("current-experience")) {
        document.getElementById("current-experience").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience");
      }
      this.calculateLevelData();
      localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      this.$store.state.levelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage");
    },
  },
};
</script>
