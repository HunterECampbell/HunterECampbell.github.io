<template>
  <f7-page name="enchantingLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/libraries/">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Enchanting Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <f7-checkbox id="can-enchant" class="move-lower" @change="saveCanEnchant">
        <p class="checkbox-label">You own an enchanting table or have permission to use an Ench's enchanting table</p>
      </f7-checkbox>
      
      <div class="line move-lower" v-show="showLevel"></div>
        
      <p class="larger-text circle-label" id="level-label" v-show="showLevel">Enchanting Level</p>
        <div id="enchanting-level" v-show="showLevel">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="enchantingLevelUpPercentage"
          ></f7-gauge>
        </div>
  
      <div class="line move-lower" v-show="showLevel"></div>
      
      <f7-button class="colored-button move-lower" popup-open="#add-items-enchanted" v-show="showLevel">Add Items Enchanted</f7-button>
      <div class="move-lower" v-show="showLevel">
        <label>Items Enchanted</label>
        <input id="items-enchanted" type="number" @keyup="saveItemsEnchanted">
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 0 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 0 && currentColor === '--white' }">
        <h2>Level 0 — Investigation</h2>
        <p><b>Requirements</b> — Own an enchanting table or have permission to use an Ench's enchanting table.</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Lesser Weapon Enchanting</b> — You can now enchant weapons with lesser enchantments.</p>
        <h2>Lesser Weapon Enchantment Examples</h2>
        <ul>
          <li><b>Lesser Fire Damage</b> — Causes an additional 1d4 Fire damage</li>
          <li><b>Lesser Sharpness</b> — Causes an additional 1d4 damage</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 1 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 1 && currentColor === '--white' }">
        <h2>Level 1 — Initiate</h2>
        <p><b>Requirements</b> — Enchant 3 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Lesser Armor Enchanting</b> — You can now enchant armor with lesser enchantments.</p>
        <h2>Lesser Armor Enchantment Examples</h2>
        <ul>
          <li><b>Lesser Fire Resistance</b> — 10% Fire resistant</li>
          <li><b>Lesser Darkvision</b> — Can see 3 squares in the dark</li>
        </ul>
      </div>

      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 2 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 2 && currentColor === '--white' }">
        <h2>Level 2 — Apprentice</h2>
        <p><b>Requirements</b> — Enchant 7 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Weapon Enchanting</b> — You can now enchant weapons with minor enchantments.</p>
        <h2>Minor Weapon Enchantment Examples</h2>
        <ul>
          <li><b>Minor Fire Damage</b> — Causes an additional 1d6 Fire damage</li>
          <li><b>Minor Sharpness</b> — Causes an additional 1d6 damage</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 3 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 3 && currentColor === '--white' }">
        <h2>Level 3 — Craftsman</h2>
        <p><b>Requirements</b> — Enchant 15 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Armor Enchanting</b> — You can now enchant armor with minor enchantments.</p>
        <h2>Minor Armor Enchantment Examples</h2>
        <ul>
          <li><b>Minor Fire Resistance</b> — 25% Fire resistant</li>
          <li><b>Minor Darkvision</b> — Can see 6 squares in the dark</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 4 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 4 && currentColor === '--white' }">
        <h2>Level 4 — Illus</h2>
        <p><b>Requirements</b> — Enchant 33 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Weapon Enchanting</b> — You can now enchant weapons with common enchantments.</p>
        <h2>Weapon Enchantment Examples</h2>
        <ul>
          <li><b>Fire Damage</b> — Causes an additional 1d8 Fire damage</li>
          <li><b>Sharpness</b> — Causes an additional 1d8 damage</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 5 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 5 && currentColor === '--white' }">
        <h2>Level 5 — Uiler</h2>
        <p><b>Requirements</b> — Enchant 68 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Armor Enchanting</b> — You can now enchant armor with common enchantments.</p>
        <h2>Armor Enchantment Examples</h2>
        <ul>
          <li><b>Fire Resistance</b> — 50% Fire resistant</li>
          <li><b>Darkvision</b> — Can see 12 squares in the dark</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 6 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 6 && currentColor === '--white' }">
        <h2>Level 6 — Phant</h2>
        <p><b>Requirements</b> — Enchant 112 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Enchanting</b> — You can now enchant weapons with greater enchantments.</p>
        <h2>Greater Weapon Enchantment Examples</h2>
        <ul>
          <li><b>Greater Fire Damage</b> — Causes an additional 1d12 Fire damage</li>
          <li><b>Greater Sharpness</b> — Causes an additional 1d12 damage</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 7 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 7 && currentColor === '--white' }">
        <h2>Level 7 — Coer</h2>
        <p><b>Requirements</b> — Enchant 164 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Armor Enchanting</b> — You can now enchant armor with greater enchantments.</p>
        <h2>Greater Armor Enchantment Examples</h2>
        <ul>
          <li><b>Greater Fire Resistance</b> — 75% Fire resistant</li>
          <li><b>Greater Darkvision</b> — Can see 25 squares in the dark</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 8 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 8 && currentColor === '--white' }">
        <h2>Level 8 — Beda</h2>
        <p><b>Requirements</b> — Enchant 222 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Grand Enchanting</b> — You can now enchant weapons with grand enchantments.</p>
        <h2>Grand Weapon Enchantment Examples</h2>
        <ul>
          <li><b>Grand Fire Damage</b> — Causes an additional 1d20 Fire damage</li>
          <li><b>Grand Sharpness</b> — Causes an additional 1d20 damage</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 9 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 9 && currentColor === '--white' }">
        <h2>Level 9 — Rancer</h2>
        <p><b>Requirements</b> — Enchant 279 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Grand Armor Enchanting</b> — You can now enchant armor with grand enchantments.</p>
        <h2>Grand Armor Enchantment Examples</h2>
        <ul>
          <li><b>Grand Fire Resistance</b> — 100% Fire resistant</li>
          <li><b>Grand Darkvision</b> — Can see infinitely in the dark</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': enchantingLevel >= 10 && currentColor !== '--white', 'colored-text-white': enchantingLevel >= 10 && currentColor === '--white' }">
        <h2>Level 10 — Ench</h2>
        <p><b>Requirements</b> — Enchant 350 items</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Double Enchantments</b> — You can now enchant an item 2 times.  This works on armor and weapon enchantments.  You cannot stack the same effect.</p>
        <h2>Double Enchantment Examples</h2>
        <ul>
          <li><b>Greater Fire, Grand Ice Damage</b> — Causes an additional 1d12 Fire damage and an additional 1d20 Ice damage</li>
          <li><b>Grand Darkvision, Light Resistance</b> — Can see infinitely in the dark and are 50% resistant to Light damage</li>
        </ul>
      </div>

      <f7-popup id="add-items-enchanted" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Items Enchanted">
          </f7-navbar>
          <f7-block>
            <h2>How many items have you enchanted?</h2>
            <input id="add-items-enchanted-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addItemsEnchanted" popup-close>Confirm</f7-button>
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
  name: "EnchantingLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      currentColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel"),
      popupOpened: false,
      showLevel: this.$store.state.canEnchant,
    };
  },
  computed: {
    enchantingLevel: function() {
      return this.$store.state.enchantingLevel;
    },
    enchantingLevelUpPercentage: function() {
      return this.$store.state.enchantingLevelUpPercentage;
    },
  },
  methods: {
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 350) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 279) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 350);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 222) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 164) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 112) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 68) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 33) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 15) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 7) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") >= 3) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted")));
      }

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
      this.$store.state.enchantingLevel = this.currentLevel;
      this.$store.state.enchantingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage");
    },
    resetText() {
      document.getElementById("add-items-enchanted-input").value = "";
    },
    addItemsEnchanted() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted", 0)
      }
      let addedBloodSucked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted")) + JSON.parse(document.getElementById("add-items-enchanted-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted", addedBloodSucked)
      document.getElementById("add-items-enchanted-input").value = "";
      document.getElementById("items-enchanted").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted");
      this.calculateLevelData();
    },
    saveCanEnchant() {
      if (document.getElementById("can-enchant").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanEnchant", document.getElementById("can-enchant").childNodes[1].checked);
        this.$store.state.canEnchant = document.getElementById("can-enchant").childNodes[1].checked;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanEnchant", true);
        this.$store.state.canEnchant = true;
        this.showLevel = this.$store.state.canEnchant;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", 0)
        this.$store.state.enchantingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted", 0);
        document.getElementById("items-enchanted").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanEnchant", false);
        this.$store.state.canEnchant = false;
        this.showLevel = this.$store.state.canEnchant;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", -1)
        this.$store.state.enchantingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted", 0)
        document.getElementById("items-enchanted").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage", 0)
        this.$store.state.enchantingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage");
      }
    },
    saveItemsEnchanted() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted", document.getElementById("items-enchanted").value);
      this.calculateLevelData();
    },
    async load() {
      await document.getElementById("enchanting-level");
      await document.getElementById("items-enchanted");

      document.getElementById("can-enchant").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanEnchant"));
      this.$store.state.canEnchant = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanEnchant"));
      document.getElementById("enchanting-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
      
      if (document.getElementById("can-enchant").childNodes[0].checked === false) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted", -1)
        localStorage.setItem(localStorage.currentlySelectedCharacter+"EnchantingLevel", -1);
        this.$store.state.enchantingLevel = -1;
      } else {
        this.$store.state.enchantingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
        this.calculateLevelData();
      }
      
      
      document.getElementById("items-enchanted").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted");

      this.showLevel = this.$store.state.canEnchant;
    },
  },
  created() {
    this.load();

    if (this.$router.history.current.path !== "/enchantingLibrary/") {
      this.$router.push({ path: "/enchantingLibrary/" })
    }
  },
};
</script>

<style>
#enchanting-level {
  display: flex;
}
</style>
