<template>
  <f7-page name="lockpickingLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/libraries/">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Lockpicking Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <f7-checkbox id="can-lockpick" class="move-lower" @change="saveCanLockpick">
        <p class="checkbox-label">You own a lockpicking set</p>
      </f7-checkbox>
      
      <div class="line move-lower" v-show="showLevel"></div>
        
      <p class="larger-text circle-label" id="level-label" v-show="showLevel">Lockpicking Level</p>
        <div id="lockpicking-level" v-show="showLevel">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="lockpickingLevelUpPercentage"
          ></f7-gauge>
        </div>
  
      <div class="line move-lower" v-show="showLevel"></div>
      
      <f7-button class="colored-button move-lower" popup-open="#add-locks-picked" v-show="showLevel">Add Locks Picked</f7-button>
      <div class="move-lower" v-show="showLevel">
        <label>Locks Picked</label>
        <input id="locks-picked" type="number" @keyup="saveLocksPicked">
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 0 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 0 && currentColor === '--white' }">
        <h2>Level 0 — Investigation</h2>
        <p><b>Requirements</b> — Own a lockpicking set.</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Lesser Lockpicks</b> — You can now pick locks if you roll a 20 on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 1 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 1 && currentColor === '--white' }">
        <h2>Level 1 — Initiate</h2>
        <p><b>Requirements</b> — Pick 3 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Lockpicks</b> — You can now pick locks if you roll 18+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>

      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 2 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 2 && currentColor === '--white' }">
        <h2>Level 2 — Apprentice</h2>
        <p><b>Requirements</b> — Pick 7 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Lockpicks</b> — You can now pick locks if you roll 16+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 3 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 3 && currentColor === '--white' }">
        <h2>Level 3 — Lockpick</h2>
        <p><b>Requirements</b> — Pick 15 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Lockpicks</b> — You can now pick locks if you roll 14+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 4 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 4 && currentColor === '--white' }">
        <h2>Level 4 — Grand Pick</h2>
        <p><b>Requirements</b> — Pick 33 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Grand Lockpicks</b> — You can now pick locks if you roll 12+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 5 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 5 && currentColor === '--white' }">
        <h2>Level 5 — Mith Pick</h2>
        <p><b>Requirements</b> — Pick 68 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Mithril Lockpicks</b> — You can now pick locks if you roll 10+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 6 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 6 && currentColor === '--white' }">
        <h2>Level 6 — Ad Pick</h2>
        <p><b>Requirements</b> — Pick 112 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Adamantium Lockpicks</b> — You can now pick locks if you roll 8+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 7 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 7 && currentColor === '--white' }">
        <h2>Level 7 — Runi Pick</h2>
        <p><b>Requirements</b> — Pick 164 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Runite Lockpicks</b> — You can now pick locks if you roll 6+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 8 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 8 && currentColor === '--white' }">
        <h2>Level 8 — Drago Pick</h2>
        <p><b>Requirements</b> — Pick 222 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Dragon Lockpicks</b> — You can now pick locks if you roll 4+ on 1d20.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Broken Lockpick</b> — Failed rolls break a lockpick.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 9 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 9 && currentColor === '--white' }">
        <h2>Level 9 — Durab</h2>
        <p><b>Requirements</b> — Pick 279 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Unbreakable Lockpicks</b> — Your lockpicks no longer break.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': lockpickingLevel >= 10 && currentColor !== '--white', 'colored-text-white': lockpickingLevel >= 10 && currentColor === '--white' }">
        <h2>Level 10 — Pick Master</h2>
        <p><b>Requirements</b> — Pick 350 locks</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Skeleton Keys</b> — You can now pick locks if you roll 2+ on 1d20.</p>
      </div>

      <f7-popup id="add-locks-picked" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Locks Picked">
          </f7-navbar>
          <f7-block>
            <h2>How many locks have you picked?</h2>
            <input id="add-locks-picked-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addLocksPicked" popup-close>Confirm</f7-button>
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
  name: "LockpickingLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      currentColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel"),
      popupOpened: false,
      showLevel: this.$store.state.canLockpick,
    };
  },
  computed: {
    lockpickingLevel: function() {
      return this.$store.state.lockpickingLevel;
    },
    lockpickingLevelUpPercentage: function() {
      return this.$store.state.lockpickingLevelUpPercentage;
    },
  },
  methods: {
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 350) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 279) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 350);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 222) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 164) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 112) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 68) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 33) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 15) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 7) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") >= 3) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked")));
      }

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
      this.$store.state.lockpickingLevel = this.currentLevel;
      this.$store.state.lockpickingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage");
    },
    resetText() {
      document.getElementById("add-locks-picked-input").value = "";
    },
    addLocksPicked() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LocksPicked", 0)
      }
      let addedBloodSucked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked")) + JSON.parse(document.getElementById("add-locks-picked-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"LocksPicked", addedBloodSucked)
      document.getElementById("add-locks-picked-input").value = "";
      document.getElementById("locks-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked");
      this.calculateLevelData();
    },
    saveCanLockpick() {
      if (document.getElementById("can-lockpick").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanLockpick", document.getElementById("can-lockpick").childNodes[1].checked);
        this.$store.state.canLockpick = document.getElementById("can-lockpick").childNodes[1].checked;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanLockpick", true);
        this.$store.state.canLockpick = true;
        this.showLevel = this.$store.state.canLockpick;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", 0)
        this.$store.state.lockpickingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LocksPicked", 0);
        document.getElementById("locks-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CanLockpick", false);
        this.$store.state.canLockpick = false;
        this.showLevel = this.$store.state.canLockpick;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", -1)
        this.$store.state.lockpickingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LocksPicked", 0)
        document.getElementById("locks-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage", 0)
        this.$store.state.lockpickingLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"lockpickingLevelUpPercentage");
      }
    },
    saveLocksPicked() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"LocksPicked", document.getElementById("locks-picked").value);
      this.calculateLevelData();
    },
    async load() {
      await document.getElementById("lockpicking-level");
      await document.getElementById("locks-picked");

      document.getElementById("can-lockpick").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanLockpick"));
      this.$store.state.canLockpick = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CanLockpick"));
      document.getElementById("lockpicking-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
      
      if (document.getElementById("can-lockpick").childNodes[0].checked === false) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LocksPicked", -1)
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LockpickingLevel", -1);
        this.$store.state.lockpickingLevel = -1;
      } else {
        this.$store.state.lockpickingLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
        this.calculateLevelData();
      }
      
      
      document.getElementById("locks-picked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"LocksPicked");

      this.showLevel = this.$store.state.canLockpick;
    },
  },
  created() {
    this.load();

    if (this.$router.history.current.path !== "/lockpickingLibrary/") {
      this.$router.push({ path: "/lockpickingLibrary/" })
    }
  },
};
</script>

<style>
#lockpicking-level {
  display: flex;
}
</style>
