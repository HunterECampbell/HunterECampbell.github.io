<template>
  <f7-page name="pickpocketingLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/libraries/">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Pickpocketing Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <f7-checkbox id="can-pickpocket" class="move-lower" @change="saveCanPickpocket">
        <p class="checkbox-label">You own pickpocket gloves</p>
      </f7-checkbox>
      
      <div class="line move-lower" v-show="showLevel"></div>
        
      <p class="larger-text circle-label" id="level-label" v-show="showLevel">Pickpocketing Level</p>
        <div id="pickpocketing-level" v-show="showLevel">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="pickpocketingLevelUpPercentage"
          ></f7-gauge>
        </div>
  
      <div class="line move-lower" v-show="showLevel"></div>
      
      <f7-button class="colored-button move-lower" popup-open="#add-pockets-picked" v-show="showLevel">Add Pockets Picked</f7-button>
      <div class="move-lower" v-show="showLevel">
        <label>Pockets Picked</label>
        <input id="pockets-picked" type="number" @keyup="savePocketsPicked">
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 0 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 0 && currentColor === '--white' }">
        <h2>Level 0 — Investigation</h2>
        <p><b>Requirements</b> — Own pickpocket gloves.</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Lesser Pickpocketing</b> — You can now pick locks if you roll a 20 on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 1 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 1 && currentColor === '--white' }">
        <h2>Level 1 — Initiate</h2>
        <p><b>Requirements</b> — Forge 3 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Pickpocketing</b> — You can now pick locks if you roll a 18+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>

      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 2 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 2 && currentColor === '--white' }">
        <h2>Level 2 — Apprentice</h2>
        <p><b>Requirements</b> — Forge 7 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Pickpocketing</b> — You can now pick locks if you roll a 16+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 3 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 3 && currentColor === '--white' }">
        <h2>Level 3 — Greater Pocket</h2>
        <p><b>Requirements</b> — Forge 15 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Pickpocketing</b> — You can now pick locks if you roll a 14+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 4 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 4 && currentColor === '--white' }">
        <h2>Level 4 — Grand Pocket</h2>
        <p><b>Requirements</b> — Forge 33 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Grand Pickpocketing</b> — You can now pick locks if you roll a 12+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 5 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 5 && currentColor === '--white' }">
        <h2>Level 5 — Mith Pocket</h2>
        <p><b>Requirements</b> — Forge 68 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Mithril Pickpocketing</b> — You can now pick locks if you roll a 10+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 6 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 6 && currentColor === '--white' }">
        <h2>Level 6 — Ad Pocket</h2>
        <p><b>Requirements</b> — Forge 112 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Adamantium Pickpocketing</b> — You can now pick locks if you roll a 8+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 7 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 7 && currentColor === '--white' }">
        <h2>Level 7 — Runi Pocket</h2>
        <p><b>Requirements</b> — Forge 164 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Runite Pickpocketing</b> — You can now pick locks if you roll a 6+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 8 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 8 && currentColor === '--white' }">
        <h2>Level 8 — Drago Pocket</h2>
        <p><b>Requirements</b> — Forge 222 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Dragon Pickpocketing</b> — You can now pick locks if you roll a 4+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Caught</b> — If caught, you receive 1d4 slapping damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 9 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 9 && currentColor === '--white' }">
        <h2>Level 9 — Bell Master</h2>
        <p><b>Requirements</b> — Forge 279 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Bell Mastery</b> — You are so careful, that even when caught there isn't much thought about what you are doing, so you don't get slapped.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': pickpocketingLevel >= 10 && currentColor !== '--white', 'colored-text-white': pickpocketingLevel >= 10 && currentColor === '--white' }">
        <h2>Level 10 — Shadow Pocket</h2>
        <p><b>Requirements</b> — Forge 350 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Shadow Hands</b> — You can now pick locks if you roll a 2+ on 1d20.</p>
      </div>

      <f7-popup id="add-pockets-picked" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Pockets Picked">
          </f7-navbar>
          <f7-block>
            <h2>How many pockets have you picked?</h2>
            <input id="add-pockets-picked-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addPocketsPicked" popup-close>Confirm</f7-button>
              <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
            </div>
          </f7-block>
        </f7-page>
      </f7-popup>
      
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: "PickpocketingLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      currentColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel"),
      popupOpened: false,
      showLevel: this.$store.state.canPickpocket,
    };
  },
  computed: {
    pickpocketingLevel: function() {
      return this.$store.state.pickpocketingLevel;
    },
    pickpocketingLevelUpPercentage: function() {
      return this.$store.state.pickpocketingLevelUpPercentage;
    },
  },
  methods: {
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 350) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 279) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 350);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 222) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 164) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 112) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 68) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 33) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 15) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 7) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") >= 3) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked")));
      }

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
      this.$store.state.pickpocketingLevel = this.currentLevel;
      this.$store.state.pickpocketingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage");
    },
    resetText() {
      document.getElementById("add-pockets-picked-input").value = "";
    },
    addPocketsPicked() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PocketsPicked", 0)
      }
      let addedBloodSucked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked")) + JSON.parse(document.getElementById("add-pockets-picked-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"PocketsPicked", addedBloodSucked)
      document.getElementById("add-pockets-picked-input").value = "";
      document.getElementById("pockets-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked");
      this.calculateLevelData();
    },
    saveCanPickpocket() {
      if (document.getElementById("can-pickpocket").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanPickpocket", document.getElementById("can-pickpocket").childNodes[1].checked);
        this.$store.state.canPickpocket = document.getElementById("can-pickpocket").childNodes[1].checked;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanPickpocket", true);
        this.$store.state.canPickpocket = true;
        this.showLevel = this.$store.state.canPickpocket;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", 0)
        this.$store.state.pickpocketingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PocketsPicked", 0);
        document.getElementById("pockets-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanPickpocket", false);
        this.$store.state.canPickpocket = false;
        this.showLevel = this.$store.state.canPickpocket;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", -1)
        this.$store.state.pickpocketingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PocketsPicked", 0)
        document.getElementById("pockets-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage", 0)
        this.$store.state.pickpocketingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage");
      }
    },
    savePocketsPicked() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"PocketsPicked", document.getElementById("pockets-picked").value);
      this.calculateLevelData();
    },
    async load() {
      await document.getElementById("pickpocketing-level");
      await document.getElementById("pockets-picked");

      document.getElementById("can-pickpocket").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanPickpocket"));
      this.$store.state.canPickpocket = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanPickpocket"));
      document.getElementById("pickpocketing-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
      
      if (document.getElementById("can-pickpocket").childNodes[0].checked === false) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PocketsPicked", -1)
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel", -1);
        this.$store.state.pickpocketingLevel = -1;
      } else {
        this.$store.state.pickpocketingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
        this.calculateLevelData();
      }
      
      
      document.getElementById("pockets-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PocketsPicked");

      this.showLevel = this.$store.state.canPickpocket;
    },
  },
  created() {
    this.load();

    if (this.$router.history.current.path !== "/pickpocketingLibrary/") {
      this.$router.push({ path: "/pickpocketingLibrary/" })
    }
  },
};
</script>

<style>
#pickpocketing-level {
  display: flex;
}
</style>
