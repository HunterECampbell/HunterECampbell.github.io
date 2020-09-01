<template>
  <f7-page name="vampiricLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/libraries/">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Vampiric Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <f7-checkbox id="is-infected-vampiric" class="move-lower" :disabled="disabled" @change="saveIsInfectedVampiric">
        <p class="checkbox-label">Is Infected With Vampiric Virus</p>
      </f7-checkbox>
      
      <div class="line move-lower" v-show="showLevel"></div>
        
      <p class="larger-text circle-label" id="level-label" v-show="showLevel">Vampiric Level</p>
        <div id="vampiric-level" v-show="showLevel">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="vampiricLevelUpPercentage"
          ></f7-gauge>
        </div>
  
      <div class="line move-lower" v-show="showLevel"></div>
      
      <f7-button class="colored-button move-lower" popup-open="#add-blood-sucked" v-show="showLevel">Add Blood Sucked</f7-button>
      <div class="move-lower" v-show="showLevel">
        <label>Humanoids' Blood Sucked</label>
        <input id="humanoids-blood-sucked" type="number" @keyup="saveHumanoidsBloodSucked">
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 0 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 0 && currentColor === '--white' }">
        <h2>Level 0 — Infected</h2>
        <p><b>Requirements</b> — Become infected with the vampiric virus.</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Vampirism</b> — You're blood is now infused with the vampiric virus.  You now gain 1d4 health when bloodsucking.</p>
        <p><b>Immune to Disease</b> — Can no longer get infected by diseases.</p>
        <p><b>Immune to Poison</b> — Poison no longer affects you.</p>
        <p><b>Lesser Immunity to Ice</b> — Ice attacks cause 25% less damage.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Lesser Fire Weakness</b> — Fire now causes 25% more damage.</p>
        <p><b>Blocked Daylight Regeneration</b> — Cannot gain HP (unless bloodsucking) or magic slots during daytime.</p>
        <p><b>Immune to Werecreature Viruses</b> — Cannot become a werecreature while infected with the vampiric virus.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 1 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 1 && currentColor === '--white' }">
        <h2>Level 1 — Fledgling</h2>
        <p><b>Requirements</b> — Suck the blood of 3 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Accepted Into the Brotherhood</b> — The vampiric brotherhood accepts you as one of their own and will allow you to accept brotherhood quests.</p>
        <p><b>Lesser Blood Suck</b> — For every humanoid that you suck their blood, you gain 1d4 HP.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Health Loss</b> — Your total HP drops by 15 points.</p>
      </div>

      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 2 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 2 && currentColor === '--white' }">
        <h2>Level 2 — Vampire</h2>
        <p><b>Requirements</b> — Suck the blood of 7 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Reanimation</b> — Can reanimate creature up to level 2 for 1 day.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 3 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 3 && currentColor === '--white' }">
        <h2>Level 3 — Blooded</h2>
        <p><b>Requirements</b> — Suck the blood of 15 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Immunity to Ice</b> — Ice attacks cause 50% less damage.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Health Loss</b> — Your total HP drops by another 15 points.</p>
        <p><b>Minor Fire Weakness</b> — Fire now causes 50% more damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 4 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 4 && currentColor === '--white' }">
        <h2>Level 4 — Mistwalker</h2>
        <p><b>Requirements</b> — Suck the blood of 33 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Blood Suck</b> — For every humanoid that you suck their blood, you gain 1d8 HP.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 5 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 5 && currentColor === '--white' }">
        <h2>Level 5 — Nightstalker</h2>
        <p><b>Requirements</b> — Suck the blood of 68 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Bat Transformation</b> — You can now transform into a bat, at will, once per day.</p>
        <p><b>Lesser Reanimation</b> — Can reanimate creature up to level 4 for 1 day.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 6 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 6 && currentColor === '--white' }">
        <h2>Level 6 — Ancient</h2>
        <p><b>Requirements</b> — Suck the blood of 112 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Immunity to Ice</b> — Ice attacks cause 75% less damage.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Health Loss</b> — Your total HP drops by another 15 points.</p>
        <p><b>Fire Weakness</b> — Fire now causes 75% more damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 7 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 7 && currentColor === '--white' }">
        <h2>Level 7 — Volkihar</h2>
        <p><b>Requirements</b> — Suck the blood of 164 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Blood Suck</b> — For every humanoid that you suck their blood, you gain 1d12 HP.</p>
        <p><b>Reanimation</b> — Can reanimate creature up to level 7 for 1 day.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 8 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 8 && currentColor === '--white' }">
        <h2>Level 8 — Nightlord</h2>
        <p><b>Requirements</b> — Suck the blood of 222 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Embrace of The Shadows</b> — Can turn invisible for 3 turns once per encounter.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 9 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 9 && currentColor === '--white' }">
        <h2>Level 9 — Master</h2>
        <p><b>Requirements</b> — Suck the blood of 279 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Immune to Ice</b> — You are now completely immune to Ice attacks.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Health Loss</b> — Your total HP drops by another 15 points.</p>
        <p><b>Greater Fire Weakness</b> — Fire now causes 100% more damage.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': vampiricLevel >= 10 && currentColor !== '--white', 'colored-text-white': vampiricLevel >= 10 && currentColor === '--white' }">
        <h2>Level 10 — Nightmaster</h2>
        <p><b>Requirements</b> — Suck the blood of 350 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Bat Transformation Mastery</b> — You can now transform into a bat at anytime, at will.</p>
        <p><b>Greater Blood Suck</b> — For every humanoid that you suck their blood, you gain 1d20 HP.</p>
        <p><b>Greater Reanimation</b> — Can reanimate creature up to level 12 for 1 day.</p>
      </div>

      <f7-popup id="add-blood-sucked" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Blood Sucked">
          </f7-navbar>
          <f7-block>
            <h2>How many humanoids did you suck blood from?</h2>
            <input id="add-blood-sucked-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addBloodSucked" popup-close>Confirm</f7-button>
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
  name: "VampiricLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      currentColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
      disabled: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature")),
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel"),
      showLevel: this.$store.state.isInfectedVampiric,
      popupOpened: false,
    };
  },
  computed: {
    vampiricLevel: function() {
      return this.$store.state.vampiricLevel;
    },
    vampiricLevelUpPercentage: function() {
      return this.$store.state.vampiricLevelUpPercentage;
    },
  },
  methods: {
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 350) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 279) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 350);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 222) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 164) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 112) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 68) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 33) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 15) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 7) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") >= 3) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked")));
      }

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel");
      this.$store.state.vampiricLevel = this.currentLevel;
      this.$store.state.vampiricLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage");
    },
    resetText() {
      document.getElementById("add-blood-sucked-input").value = "";
    },
    addBloodSucked() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked", 0)
      }
      let addedBloodSucked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked")) + JSON.parse(document.getElementById("add-blood-sucked-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked", addedBloodSucked)
      document.getElementById("add-blood-sucked-input").value = "";
      document.getElementById("humanoids-blood-sucked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked");
      this.calculateLevelData();
    },
    saveIsInfectedVampiric() {
      if (document.getElementById("is-infected-vampiric").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric", document.getElementById("is-infected-vampiric").childNodes[1].checked);
        this.$store.state.isInfectedVampiric = document.getElementById("is-infected-vampiric").childNodes[1].checked;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric", true);
        this.$store.state.isInfectedVampiric = true;
        this.showLevel = this.$store.state.isInfectedVampiric;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", 0)
        this.$store.state.vampiricLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked", 0);
        document.getElementById("humanoids-blood-sucked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric", false);
        this.$store.state.isInfectedVampiric = false;
        this.showLevel = this.$store.state.isInfectedVampiric;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", -1)
        this.$store.state.vampiricLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked", 0)
        document.getElementById("humanoids-blood-sucked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage", 0)
        this.$store.state.vampiricLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage");
      }
    },
    saveHumanoidsBloodSucked() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked", document.getElementById("humanoids-blood-sucked").value);
      this.calculateLevelData();
    },
    async load() {
      await document.getElementById("vampiric-level");
      await document.getElementById("humanoids-blood-sucked");
      await document.getElementById("is-infected-vampiric").childNodes[0].checked;

      if (document.getElementById("is-infected-vampiric").childNodes[0].checked === undefined) {
        document.getElementById("is-infected-vampiric").childNodes[0].checked = false
      }
      
      document.getElementById("is-infected-vampiric").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric"));
      this.$store.state.isInfectedVampiric = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric"));
      document.getElementById("vampiric-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel");
      
      this.calculateLevelData();
      
      if (document.getElementById("is-infected-vampiric").childNodes[0].checked === false) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked", -1)
        localStorage.setItem(localStorage.currentlySelectedCharacter+"VampiricLevel", -1);
        this.$store.state.vampiricLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"VampiricLevel");
      }
      document.getElementById("humanoids-blood-sucked").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked");

      this.currentLevel = this.$store.state.vampiricLevel;
      this.showLevel = this.$store.state.isInfectedVampiric;
    },
  },
  created() {
    this.load();

    if (this.$router.history.current.path !== "/vampiricLibrary/") {
      this.$router.push({ path: "/vampiricLibrary/" })
    }
  },
};
</script>

<style>
#vampiric-level {
  display: flex;
}
</style>
