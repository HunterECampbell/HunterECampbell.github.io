<template>
  <f7-page name="blacksmithingLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/libraries/">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Blacksmithing Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <f7-checkbox id="can-forge" class="move-lower" @change="saveCanForge">
        <p class="checkbox-label">You own a forge or have permission to use a Forge Master's forge</p>
      </f7-checkbox>
      
      <div class="line move-lower" v-show="showLevel"></div>
        
      <p class="larger-text circle-label" id="level-label" v-show="showLevel">Blacksmithing Level</p>
        <div id="blacksmithing-level" v-show="showLevel">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="blacksmithingLevelUpPercentage"
          ></f7-gauge>
        </div>
  
      <div class="line move-lower" v-show="showLevel"></div>
      
      <f7-button class="colored-button move-lower" popup-open="#add-items-blacksmithed" v-show="showLevel">Add Items Blacksmithed</f7-button>
      <div class="move-lower" v-show="showLevel">
        <label>Items Blacksmithed</label>
        <input id="items-blacksmithed" type="number" @keyup="saveItemsBlacksmithed">
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 0 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 0 && currentColor === '--white' }">
        <h2>Level 0 — Investigation</h2>
        <p><b>Requirements</b> — Build your own forge or get permission from a forge master to use their forge.</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Leather Forging</b> — You can now forge leather items.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 1 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 1 && currentColor === '--white' }">
        <h2>Level 1 — Initiate</h2>
        <p><b>Requirements</b> — Forge 3 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Iron Forging</b> — You can now forge iron items.</p>
      </div>

      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 2 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 2 && currentColor === '--white' }">
        <h2>Level 2 — Apprentice</h2>
        <p><b>Requirements</b> — Forge 7 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Steel Forging</b> — You can now forge steel items.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 3 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 3 && currentColor === '--white' }">
        <h2>Level 3 — Craftsman</h2>
        <p><b>Requirements</b> — Forge 15 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Mithril Forging</b> — You can now forge mithril items.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 4 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 4 && currentColor === '--white' }">
        <h2>Level 4 — Precion</h2>
        <p><b>Requirements</b> — Forge 33 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Jewelry Forging</b> — You can now forge precious metals.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 5 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 5 && currentColor === '--white' }">
        <h2>Level 5 — Improver</h2>
        <p><b>Requirements</b> — Forge 68 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Upgraded Forging</b> — You can now upgrade previously forged items to a metal equal to what you can forge. The metal you are upgrading to must be one level above the item being upgraded.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 6 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 6 && currentColor === '--white' }">
        <h2>Level 6 — Adamant</h2>
        <p><b>Requirements</b> — Forge 112 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Adamantium Forging</b> — You can now forge adamantium items.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 7 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 7 && currentColor === '--white' }">
        <h2>Level 7 — Magi Blak</h2>
        <p><b>Requirements</b> — Forge 164 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Enchanted Forging</b> — You can now work with items that have an enchantement on them.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 8 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 8 && currentColor === '--white' }">
        <h2>Level 8 — Runi</h2>
        <p><b>Requirements</b> — Forge 222 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Runite Forging</b> — You can now forge runite items.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 9 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 9 && currentColor === '--white' }">
        <h2>Level 9 — Imbuer</h2>
        <p><b>Requirements</b> — Forge 279 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Embued Forging</b> — You can now work with items that have embuings on them.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': blacksmithingLevel >= 10 && currentColor !== '--white', 'colored-text-white': blacksmithingLevel >= 10 && currentColor === '--white' }">
        <h2>Level 10 — Forge Master</h2>
        <p><b>Requirements</b> — Forge 350 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Dragon Forging</b> — You can now forge dragon items.</p>
      </div>

      <f7-popup id="add-items-blacksmithed" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Items Blacksmithed">
          </f7-navbar>
          <f7-block>
            <h2>How many items have you blacksmithed?</h2>
            <input id="add-items-blacksmithed-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addItemsBlacksmithed" popup-close>Confirm</f7-button>
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
  name: "BlacksmithingLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      currentColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel"),
      popupOpened: false,
      showLevel: this.$store.state.canForge,
    };
  },
  computed: {
    blacksmithingLevel: function() {
      return this.$store.state.blacksmithingLevel;
    },
    blacksmithingLevelUpPercentage: function() {
      return this.$store.state.blacksmithingLevelUpPercentage;
    },
  },
  methods: {
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 350) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 279) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 350);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 222) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 164) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 112) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 68) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 33) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 15) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 7) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") >= 3) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed")));
      }

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
      this.$store.state.blacksmithingLevel = this.currentLevel;
      this.$store.state.blacksmithingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage");
    },
    resetText() {
      document.getElementById("add-items-blacksmithed-input").value = "";
    },
    addItemsBlacksmithed() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed", 0)
      }
      let addedBloodSucked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed")) + JSON.parse(document.getElementById("add-items-blacksmithed-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed", addedBloodSucked)
      document.getElementById("add-items-blacksmithed-input").value = "";
      document.getElementById("items-blacksmithed").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed");
      this.calculateLevelData();
    },
    saveCanForge() {
      if (document.getElementById("can-forge").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanForge", document.getElementById("can-forge").childNodes[1].checked);
        this.$store.state.canForge = document.getElementById("can-forge").childNodes[1].checked;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanForge", true);
        this.$store.state.canForge = true;
        this.showLevel = this.$store.state.canForge;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", 0)
        this.$store.state.blacksmithingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed", 0);
        document.getElementById("items-blacksmithed").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanForge", false);
        this.$store.state.canForge = false;
        this.showLevel = this.$store.state.canForge;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", -1)
        this.$store.state.blacksmithingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed", 0)
        document.getElementById("items-blacksmithed").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage", 0)
        this.$store.state.blacksmithingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage");
      }
    },
    saveItemsBlacksmithed() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed", document.getElementById("items-blacksmithed").value);
      this.calculateLevelData();
    },
    async load() {
      await document.getElementById("blacksmithing-level");
      await document.getElementById("items-blacksmithed");

      document.getElementById("can-forge").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanForge"));
      this.$store.state.canForge = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanForge"));
      document.getElementById("blacksmithing-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
      
      if (document.getElementById("can-forge").childNodes[0].checked === false) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed", -1)
        localStorage.setItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel", -1);
        this.$store.state.blacksmithingLevel = -1;
      } else {
        this.$store.state.blacksmithingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
        this.calculateLevelData();
      }
      
      
      document.getElementById("items-blacksmithed").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed");

      this.showLevel = this.$store.state.canForge;
    },
  },
  created() {
    this.load();

    if (this.$router.history.current.path !== "/blacksmithingLibrary/") {
      this.$router.push({ path: "/blacksmithingLibrary/" })
    }
  },
};
</script>

<style>
#blacksmithing-level {
  display: flex;
}
</style>
