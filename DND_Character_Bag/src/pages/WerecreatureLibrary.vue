<template>
  <f7-page name="werecreatureLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/libraries/">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Werecreature Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <f7-checkbox id="is-infected-werecreature" class="move-lower" :disabled="disabled" @change="saveIsInfectedWerecreature">
        <p class="checkbox-label">Is Infected With A Werecreature Virus</p>
      </f7-checkbox>
      
      <div class="line move-lower" v-show="showLevel"></div>
        
      <p class="larger-text circle-label" id="level-label" v-show="showLevel">Werecreature Level</p>
        <div id="werecreature-level" v-show="showLevel">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="werecreatureLevelUpPercentage"
          ></f7-gauge>
        </div>

      <div class="move-lower" v-show="showLevel">
        <label>Werecreature Type</label>
        <input id="werecreature-type" type="text" @keyup="saveWerecreatureType">
      </div>
  
      <div class="line move-lower" v-show="showLevel"></div>
        
      <f7-button class="colored-button move-lower" popup-open="#add-maimed-humanoids" v-show="showLevel">Add Maimed Humanoids</f7-button>
      <div class="move-lower" v-show="showLevel">
        <label>Maimed Humanoids</label>
        <input id="maimed-humanoids" type="text" @keyup="saveMaimedHumanoids">
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 0 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 0 && currentColor === '--white' }">
        <h2>Level 0 — Infected</h2>
        <p><b>Requirements</b> — Become infected with a werecreature virus.</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Werecreature</b> — You're blood is now infused with a werecreature virus.</p>
        <p><b>Immune to Disease</b> — Can no longer get infected by diseases.</p>
        <p><b>Creature Alliance</b> — Creatures of the same type as your werecreature treat you as an ally.</p>
        <p><b>Lesser Temporary HP</b> — Your HP is increased by 15 points while in werecreature form.</p>
        <p><b>Lesser Increased Strength</b> — Strengh Bonus increased by 5 points.</p>
        <p><b>Lesser Increased Speed</b> — Your speed is 50% greater while in werecreature form.</p>
        <p><b>Lesser Transformation</b> — Can transform into your werecreature once per encounter for 3 turns.</p>
        <h2 class="move-lower">Disadvantages</h2>
        <p><b>Tensile Hands</b> — Cannot pick up items, including weapons, while in werecreature form.</p>
        <p><b>Natural AC</b> — Your armor does nothing while in werecreature form.  Instead you have a natural AC of 10.</p>
        <p><b>Loss of Speach</b> — You cannot talk while in werecreature form.</p>
        <p><b>Magical Block</b> — You cannot cast spells while in werecreature form.</p>
        <p><b>Lack of Rest</b> — Your HP and spell slots do not renew themselves if you take a long rest while not in your werecreature form.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 1 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 1 && currentColor === '--white' }">
        <h2>Level 1 — Pup</h2>
        <p><b>Requirements</b> — Maim 3 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Accepted Into the Pack</b> — The werecreature pack accepts you as one of their own and will allow you to accept pack quests.</p>
        <p><b>Lesser Creature Summoning</b> — Summon 1 creature of the same type as your werecreature.  Lasts until the end of the encounter or their HP drops to 0.</p>
        <h2 class="move-lower">Disadvantages</h2>
      </div>

      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 2 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 2 && currentColor === '--white' }">
        <h2>Level 2 — Guardian</h2>
        <p><b>Requirements</b> — Maim 7 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Natural AC</b> — Your natural AC increases to 12.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 3 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 3 && currentColor === '--white' }">
        <h2>Level 3 — Scout</h2>
        <p><b>Requirements</b> — Maim 15 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Temporary HP</b> — Your HP is increased by 30 points while in werecreature form.</p>
        <p><b>Minor Increased Strength</b> — Strengh Bonus increased by 8 points.</p>
        <p><b>Minor Increased Speed</b> — Your speed is 100% greater while in werecreature form.</p>
        <p><b>Minor Transformation</b> — Can transform into your werecreature once per encounter for 6 turns.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 4 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 4 && currentColor === '--white' }">
        <h2>Level 4 — Hunter</h2>
        <p><b>Requirements</b> — Maim 33 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Minor Creature Summoning</b> — Summon 2 creatures of the same type as your werecreature.  Lasts until the end of the encounter or their HP drops to 0.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 5 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 5 && currentColor === '--white' }">
        <h2>Level 5 — Elder</h2>
        <p><b>Requirements</b> — Maim 68 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Fear</b> — Creatures must roll 14+ DEX or be frozen with fear for 1 turn.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 6 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 6 && currentColor === '--white' }">
        <h2>Level 6 — Sentinel</h2>
        <p><b>Requirements</b> — Maim 112 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Temporary HP</b> — Your HP is increased by 45 points while in werecreature form.</p>
        <p><b>Increased Strength</b> — Strengh Bonus increased by 12 points.</p>
        <p><b>Increased Speed</b> — Your speed is 150% greater while in werecreature form.</p>
        <p><b>Transformation</b> — Can transform into your werecreature for an entire encounter.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 7 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 7 && currentColor === '--white' }">
        <h2>Level 7 — Salutary</h2>
        <p><b>Requirements</b> — Maim 164 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Creature Summoning</b> — Summon 3 creatures of the same type as your werecreature.  Lasts until the end of the encounter or their HP drops to 0.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 8 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 8 && currentColor === '--white' }">
        <h2>Level 8 — Delta</h2>
        <p><b>Requirements</b> — Maim 222 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Fear</b> — Creatures must roll 17+ DEX or be frozen with fear for 3 turns.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 9 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 9 && currentColor === '--white' }">
        <h2>Level 9 — Beta</h2>
        <p><b>Requirements</b> — Maim 279 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Temporary HP</b> — Your HP is increased by 60 points while in werecreature form.</p>
        <p><b>Greater Increased Strength</b> — Strengh Bonus increased by 16 points.</p>
        <p><b>Greater Increased Speed</b> — Your speed is 200% greater while in werecreature form.</p>
        <p><b>Greater Transformation</b> — Can transform into your werecreature for an day.</p>
      </div>
  
      <div class="line move-lower"></div>

      <div :class="{ 'colored-text': werecreatureLevel >= 10 && currentColor !== '--white', 'colored-text-white': werecreatureLevel >= 10 && currentColor === '--white' }">
        <h2>Level 10 — Alpha</h2>
        <p><b>Requirements</b> — Maim 350 humanoids</p>
        <h2 class="move-lower">Advantages</h2>
        <p><b>Greater Creature Summoning</b> — Summon 5 creatures of the same type as your werecreature.  Lasts until the end of the encounter or their HP drops to 0.</p>
      </div>

      <f7-popup id="add-maimed-humanoids" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Maimed Humanoids">
          </f7-navbar>
          <f7-block>
            <h2>How many humanoids did you maim?</h2>
            <input id="add-maimed-humanoids-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addMaimedHumanoids" popup-close>Confirm</f7-button>
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
  name: "WerecreatureLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      currentColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
      disabled: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric")),
      showLevel: this.$store.state.isInfectedWerecreature,
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel"),
      popupOpened: false,
    };
  },
  computed: {
    werecreatureLevel: function() {
      return this.$store.state.werecreatureLevel;
    },
    werecreatureLevelUpPercentage: function() {
      return this.$store.state.werecreatureLevelUpPercentage;
    },
  },
  methods: {
    calculateLevelData() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 350) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 10);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", 1);
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 279) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 350);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 9);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 222) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 279);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 8);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 164) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 222);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 112) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 164);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 6);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 68) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 112);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 5);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 33) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 68);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 4);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 15) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 33);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 7) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 15);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 2);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") >= 3) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 7);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel", 3);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids")));
      }

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
      this.$store.state.werecreatureLevel = this.currentLevel;
      this.$store.state.werecreatureLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage");
    },
    resetText() {
      document.getElementById("add-maimed-humanoids-input").value = "";
    },
    addMaimedHumanoids() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids", 0)
      }
      let addedMaimedHumanoids = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids")) + JSON.parse(document.getElementById("add-maimed-humanoids-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids", addedMaimedHumanoids)
      document.getElementById("add-maimed-humanoids-input").value = "";
      document.getElementById("maimed-humanoids").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids");
      this.calculateLevelData();
    },
    saveIsInfectedWerecreature() {
      if (document.getElementById("is-infected-werecreature").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature", document.getElementById("is-infected-werecreature").childNodes[1].checked);
        this.$store.state.isInfectedWerecreature = document.getElementById("is-infected-werecreature").childNodes[1].checked;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature", true);
        this.$store.state.isInfectedWerecreature = true;
        this.showLevel = this.$store.state.isInfectedWerecreature;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", 0)
        this.$store.state.werecreatureLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
        this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids", 0);
        document.getElementById("maimed-humanoids").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature", false);
        this.$store.state.isInfectedWerecreature = false;
        this.showLevel = this.$store.state.isInfectedWerecreature;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", -1)
        this.$store.state.werecreatureLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids", 0)
        document.getElementById("maimed-humanoids").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids");
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage", 0)
        this.$store.state.werecreatureLevelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage");
      }
    },
    saveWerecreatureType() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureType", document.getElementById("werecreature-type").value);
    },
    saveMaimedHumanoids() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids", document.getElementById("maimed-humanoids").value);
      this.calculateLevelData();
    },
    async load() {
      await document.getElementById("werecreature-level");
      await document.getElementById("werecreature-type");
      await document.getElementById("maimed-humanoids");
      await document.getElementById("is-infected-werecreature").childNodes[1].checked;

      if (document.getElementById("is-infected-werecreature").childNodes[1].checked === undefined) {
        document.getElementById("is-infected-werecreature").childNodes[1].checked = false
      }
      
      document.getElementById("is-infected-werecreature").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature"));
      this.$store.state.isInfectedWerecreature = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature"));
      document.getElementById("werecreature-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
      document.getElementById("werecreature-type").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureType");
      
      this.calculateLevelData();
      
      if (document.getElementById("is-infected-werecreature").childNodes[1].checked === false) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids", -1)
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel", -1);
        this.$store.state.werecreatureLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
      }
      document.getElementById("maimed-humanoids").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids");

      this.$store.state.werecreatureLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
      this.showLevel = this.$store.state.isInfectedWerecreature;
    },
  },
  created() {
    this.load();

    if (this.$router.history.current.path !== "/werecreatureLibrary/") {
      this.$router.push({ path: "/werecreatureLibrary/" })
    }
  },
};
</script>

<style>
#werecreature-level {
  display: flex;
}
</style>
