<template>
  <f7-page name="alchemyLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/libraries/">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Alchemy Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <f7-checkbox id="can-create-potions" class="move-lower" @change="saveCanCreatePotions">
        <p class="checkbox-label">You own an alchemy lab or have permission to use a Quinque's lab</p>
      </f7-checkbox>
      
      <div class="line move-lower" v-show="showLevel"></div>
        
      <p class="larger-text circle-label" id="level-label" v-show="showLevel">Alchemy Level</p>
        <div id="alchemy-level" v-show="showLevel">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="alchemyLevelUpPercentage"
          ></f7-gauge>
        </div>
  
      <div class="line move-lower" v-show="showLevel"></div>
      
      <f7-button class="colored-button move-lower" popup-open="#add-potions-created" v-show="showLevel">Add Potions Created</f7-button>
      <div class="move-lower" v-show="showLevel">
        <label>Potions Created</label>
        <input id="potions-created" type="number" @keyup="savePortionsCreated">
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 0 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 0 && currentColor === '--white' }">
        <h2>Level 0 — Investigation</h2>
        <p><b>Requirements</b> — Own an alchemy lab or have permission to use a Quinque's lab.</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Lesser Potions</b> — You can now create lesser potions.</p>
        <h2>Lesser Potion Examples</h2>
        <ul>
          <li><b>Lesser Healing</b> — Restores 5HP</li>
          <li><b>Lesser Cure Disease</b> — Cures simple diseases</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 1 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 1 && currentColor === '--white' }">
        <h2>Level 1 — Initiate</h2>
        <p><b>Requirements</b> — Create 3 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Lesser Resistance Potions</b> — You can now create lesser resistance potions.</p>
        <h2>Lesser Resistance Potion Examples</h2>
        <ul>
          <li><b>Lesser Fire Resistance</b> — 25% resistant to Fire damage</li>
          <li><b>Lesser Ice Resistance</b> — 25% resistant to Ice damage</li>
        </ul>
      </div>

      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 2 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 2 && currentColor === '--white' }">
        <h2>Level 2 — Apprentice</h2>
        <p><b>Requirements</b> — Create 7 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Common Potions</b> — You can now create common potions.</p>
        <h2>Common Potion Examples</h2>
        <ul>
          <li><b>Healing</b> — Restores 15HP</li>
          <li><b>Cure Disease</b> — Cures medium diseases</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 3 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 3 && currentColor === '--white' }">
        <h2>Level 3 — Craftsman</h2>
        <p><b>Requirements</b> — Create 15 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Common Resistance Potions</b> — You can now create common resistance potions.  Resistance potions last for 3 turns, no matter how powerful.</p>
        <h2>Common Resistance Potion Examples</h2>
        <ul>
          <li><b>Fire Resistance</b> — 50% resistant to Fire damage</li>
          <li><b>Ice Resistance</b> — 50% resistant to Ice damage</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 4 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 4 && currentColor === '--white' }">
        <h2>Level 4 — Efficacy</h2>
        <p><b>Requirements</b> — Create 33 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Utility Potions</b> — You can now create utility potions.</p>
        <h2>Utility Potion Examples</h2>
        <ul>
          <li><b>Waterbreathing</b> — Can breathe underwater for 3 turns.</li>
          <li><b>Invisibility</b> — Turn invisible for 1 turn.</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 5 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 5 && currentColor === '--white' }">
        <h2>Level 5 — Duo</h2>
        <p><b>Requirements</b> — Create 68 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Double Effect Potions</b> — You can create potions that have 2 effects equal to your alchemy level.  You cannot stack the same effect.</p>
        <h2>Double Effect Potion Examples</h2>
        <ul>
          <li><b>Healing, Fire Resistance</b> — Restore 15HP and have 50% resistance to Fire damage.</li>
          <li><b>Waterbreathing, Invisibility</b>  — Breathe underwater for 3 turns and turn invisible for 2 turns.</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 6 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 6 && currentColor === '--white' }">
        <h2>Level 6 — August</h2>
        <p><b>Requirements</b> — Create 112 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Potions</b> — You can now create greater potions.  You can also create greater resistance and greater utility potions.</p>
        <h2>Greater Potion Examples</h2>
        <ul>
          <li><b>Greater Healing</b> — Restores 25HP</li>
          <li><b>Greater Cure Disease</b> — Cures high diseases</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 7 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 7 && currentColor === '--white' }">
        <h2>Level 7 — Tres</h2>
        <p><b>Requirements</b> — Create 164 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Triple Effect Potions</b> — You can create potions that have 3 effects equal to your alchemy level.  You cannot stack the same effect.</p>
        <h2>Triple Effect Potion Examples</h2>
        <ul>
          <li><b>Healing, Fire Ice Resistance</b> — Restore 15HP, and have 50% resistance to Fire and Ice damage.</li>
          <li><b>Greater Healing, Waterbreathing, Invisibility</b>  — Restor 25HP, breathe underwater for 3 turns, and turn invisible for 2 turns.</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 8 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 8 && currentColor === '--white' }">
        <h2>Level 8 — Quattuor</h2>
        <p><b>Requirements</b> — Create 222 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Quadruple Effect Potions</b> — You can create potions that have 4 effects equal to your alchemy level.  You cannot stack the same effect.</p>
        <h2>Quadruple Effect Potion Examples</h2>
        <ul>
          <li><b>Healing, Waterwalking, Fire Ice Resistance</b> — Restore 15HP, walk on water for 3 turns, and have 50% resistance to Fire and Ice damage.</li>
          <li><b>Greater Healing, Waterbreathing, Invisibility, Dark Resistance</b>  — Restor 25HP, breathe underwater for 3 turns, turn invisible for 2 turns, and have 50% resistance to Dark damage.</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 9 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 9 && currentColor === '--white' }">
        <h2>Level 9 — Grand Master</h2>
        <p><b>Requirements</b> — Create 279 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Grand Potions</b> — You can create grand potions.  You can also create grand resistance and grand utility potions.</p>
        <h2>Grand Potion Examples</h2>
        <ul>
          <li><b>Grand Healing</b> — Restores 50HP</li>
          <li><b>Grand Fire Resistance</b> — 100% resistance to Fire damage.</li>
        </ul>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text':  alchemyLevel >= 10 && currentColor !== '--white', 'colored-text-white':  alchemyLevel >= 10 && currentColor === '--white' }">
        <h2>Level 10 — Quinque</h2>
        <p><b>Requirements</b> — Create 350 potions</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Quintuple Effect Potions</b> — You can create potions that have 5 effects equal to your alchemy level.  You cannot stack the same effect.</p>
        <h2>Quintuple Effect Potion Examples</h2>
        <ul>
          <li><b>Greater Healing, Waterwalking, Grand Invisibility, Fire Ice Resistance</b> — Restore 25HP, walk on water for 3 turns, turn invisible for 10 turns, and have 50% resistance to Fire and Ice damage.</li>
          <li><b>Grand Healing, Waterbreathing, Invisibility, Dark Light Resistance</b>  — Restor 50HP, breathe underwater for 3 turns, turn invisible for 2 turns, and have 50% resistance to Dark and Light damage.</li>
        </ul>
      </div>

      <f7-popup id="add-potions-created" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Potions Created">
          </f7-navbar>
          <f7-block>
            <h2>How many potions have you created?</h2>
            <input id="add-potions-created-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addPotionsCreated" popup-close>Confirm</f7-button>
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
  name: "AlchemyLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      currentColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel"),
      popupOpened: false,
      showLevel: this.$store.state.canCreatePotions,
    };
  },
  computed: {
     alchemyLevel: function() {
      return this.$store.state. alchemyLevel;
    },
    alchemyLevelUpPercentage: function() {
      return this.$store.state.alchemyLevelUpPercentage;
    },
  },
  methods: {
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 350) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 279) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 350);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 222) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 164) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 112) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 68) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 33) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 15) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 7) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") >= 3) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated")));
      }

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
      this.$store.state. alchemyLevel = this.currentLevel;
      this.$store.state.alchemyLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage");
    },
    resetText() {
      document.getElementById("add-potions-created-input").value = "";
    },
    addPotionsCreated() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PotionsCreated", 0)
      }
      let addedBloodSucked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated")) + JSON.parse(document.getElementById("add-potions-created-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"PotionsCreated", addedBloodSucked)
      document.getElementById("add-potions-created-input").value = "";
      document.getElementById("potions-created").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated");
      this.calculateLevelData();
    },
    saveCanCreatePotions() {
      if (document.getElementById("can-create-potions").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanCreatePotions", document.getElementById("can-create-potions").childNodes[1].checked);
        this.$store.state.canCreatePotions = document.getElementById("can-create-potions").childNodes[1].checked;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanCreatePotions", true);
        this.$store.state.canCreatePotions = true;
        this.showLevel = this.$store.state.canCreatePotions;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", 0)
        this.$store.state. alchemyLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PotionsCreated", 0);
        document.getElementById("potions-created").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanCreatePotions", false);
        this.$store.state.canCreatePotions = false;
        this.showLevel = this.$store.state.canCreatePotions;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", -1)
        this.$store.state. alchemyLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PotionsCreated", 0)
        document.getElementById("potions-created").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage", 0)
        this.$store.state.alchemyLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage");
      }
    },
    savePortionsCreated() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"PotionsCreated", document.getElementById("potions-created").value);
      this.calculateLevelData();
    },
    async load() {
      await document.getElementById("alchemy-level");
      await document.getElementById("potions-created");

      document.getElementById("can-create-potions").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanCreatePotions"));
      this.$store.state.canCreatePotions = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanCreatePotions"));
      document.getElementById("alchemy-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
      
      if (document.getElementById("can-create-potions").childNodes[0].checked === false) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PotionsCreated", -1)
        localStorage.setItem(localStorage.currentlySelectedCharacter+"AlchemyLevel", -1);
        this.$store.state. alchemyLevel = -1;
      } else {
        this.$store.state. alchemyLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
        this.calculateLevelData();
      }
      
      
      document.getElementById("potions-created").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PotionsCreated");

      this.showLevel = this.$store.state.canCreatePotions;
    },
  },
  created() {
    this.load();

    if (this.$router.history.current.path !== "/alchemyLibrary/") {
      this.$router.push({ path: "/alchemyLibrary/" })
    }
  },
};
</script>

<style>
#alchemy-level {
  display: flex;
}
</style>
