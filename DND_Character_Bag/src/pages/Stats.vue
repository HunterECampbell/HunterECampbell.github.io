<template>
  <f7-page name="stats">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Stats
      </f7-nav-title>
    </f7-navbar>

    <!-- <QuickViewFAB /> -->

    <!-- Scrollable page content-->
    <f7-block inner>

      <form>
        <label class="larger-text">Character Name</label>
        <input id="character-name" type="text" @keyup="saveCharacterName">

        <f7-checkbox id="is-tamed-creature" class="move-lower" @change="saveIsTamedCreature">
          <p class="checkbox-label">Is A Tamed Creature</p>
        </f7-checkbox>
        
        <div class="line move-lower"></div>

        <p class="larger-text circle-label" id="level-label">Level</p>
        <div id="level">
          <f7-gauge
            value-text-color="white"
            :size="135"
            :border-width="7"
            :value-text="currentLevel"
            :value-font-size="32"
            :value="levelUpPercentage"
          ></f7-gauge>
        </div>

        <f7-button class="move-lower colored-button" popup-open="#add-experience">Add Experience</f7-button>
        <div class="shared-space move-lower">
          <div class="shared-space-inner">
            <label>Current Experience</label>
            <input id="current-experience" type="number" @keyup="saveCurrentExperience">
          </div>
          <div class="shared-space-inner move-higher">
            <p>Next Level</p>
            <div class="display-div">{{ nextLevel }}</div>
          </div>
        </div>
        
        <div class="line move-slightly-lower"></div>

        <div  class="move-slightly-lower">
          <label>Initiative</label>
          <input id="initiative" type="number" @keyup="saveInitiative">
        </div>
        
        <label>Speed</label>
        <input id="speed" type="number" @keyup="saveSpeed">
        
        <p>(AC) Armor Class</p>
        <div id="armor-class" class="display-div">{{ armorClass }}</div>
        
        <div class="line move-lower"></div>

        <f7-button class="move-lower colored-button" popup-open="#reset-hp-and-spells">Reset HP And Spell Slots</f7-button>
        <f7-button class="colored-button" popup-open="#add-hp">Add HP</f7-button>
        <f7-button class="colored-button" popup-open="#remove-hp">Remove HP</f7-button>
        <div class="shared-space move-lower">
          <div class="shared-space-inner">
            <label>Total HP</label>
            <input id="total-hp" type="number" @keyup="saveTotalHP">
          </div>
          <div class="shared-space-inner">
            <label>Current HP</label>
            <input id="current-hp" type="number" @keyup="saveCurrentHP">
          </div>
        </div>
        
        <div class="line move-slightly-lower"></div>
        
        <f7-button class="colored-button move-lower" popup-open="#reset-damage-caused">Reset Damage Caused</f7-button>
        <f7-button class="colored-button" popup-open="#add-damage">Add Damage</f7-button>
        <div class="move-lower">
          <label>Damage Caused</label>
          <input id="damage-caused" type="number" @keyup="saveDamageCaused">
        </div>
        
        <div class="line move-lower"></div>

        <div class="shared-space move-lower">
          <div class="shared-space-inner">
            <label>{{ strengthText }}</label>
            <input id="strength-level" type="number" @keyup="saveStrengthLevel">
          </div>
          <div class="shared-space-inner">
            <label>Extra Bonus</label>
            <input id="strength-class-bonus" type="number" @keyup="saveStrengthClassBonus">
          </div>
          <div class="shared-space-inner move-higher">
            <p>Total Bonus</p>
            <div class="display-div">{{ strengthBonus }}</div>
          </div>
        </div>

        <div class="shared-space">
          <div class="shared-space-inner">
            <label>{{ dexterityText }}</label>
            <input id="dexterity-level" type="number" @keyup="saveDexterityLevel">
          </div>
          <div class="shared-space-inner">
            <label>Extra Bonus</label>
            <input id="dexterity-class-bonus" type="number" @keyup="saveDexterityClassBonus">
          </div>
          <div class="shared-space-inner move-higher">
            <p>Total Bonus</p>
            <div class="display-div">{{ dexterityBonus }}</div>
          </div>
        </div>

        <div class="shared-space">
          <div class="shared-space-inner">
            <label>{{ constitutionText }}</label>
            <input id="constitution-level" type="number" @keyup="saveConstitutionLevel">
          </div>
          <div class="shared-space-inner">
            <label>Extra Bonus</label>
            <input id="constitution-class-bonus" type="number" @keyup="saveConstitutionClassBonus">
          </div>
          <div class="shared-space-inner move-higher">
            <p>Total Bonus</p>
            <div class="display-div">{{ constitutionBonus }}</div>
          </div>
        </div>

        <div class="shared-space">
          <div class="shared-space-inner">
            <label>{{ intelligenceText }}</label>
            <input id="intelligence-level" type="number" @keyup="saveIntelligenceLevel">
          </div>
          <div class="shared-space-inner">
            <label>Extra Bonus</label>
            <input id="intelligence-class-bonus" type="number" @keyup="saveIntelligenceClassBonus">
          </div>
          <div class="shared-space-inner move-higher">
            <p>Total Bonus</p>
            <div class="display-div">{{ intelligenceBonus }}</div>
          </div>
        </div>

        <div class="shared-space">
          <div class="shared-space-inner">
            <label>{{ wisdomText }}</label>
            <input id="wisdom-level" type="number" @keyup="saveWisdomLevel">
          </div>
          <div class="shared-space-inner">
            <label>Extra Bonus</label>
            <input id="wisdom-class-bonus" type="number" @keyup="saveWisdomClassBonus">
          </div>
          <div class="shared-space-inner move-higher">
            <p>Total Bonus</p>
            <div class="display-div">{{ wisdomBonus }}</div>
          </div>
        </div>

        <div class="shared-space">
          <div class="shared-space-inner">
            <label>{{ charismaText }}</label>
            <input id="charisma-level" type="number" @keyup="saveCharismaLevel">
          </div>
          <div class="shared-space-inner">
            <label>Extra Bonus</label>
            <input id="charisma-class-bonus" type="number" @keyup="saveCharismaClassBonus">
          </div>
          <div class="shared-space-inner move-higher">
            <p>Total Bonus</p>
            <div class="display-div">{{ charismaBonus }}</div>
          </div>
        </div>
      </form>

      <f7-popup id="add-experience" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Experience">
          </f7-navbar>
          <f7-block>
            <h2>How much experience are you adding?</h2>
            <input id="add-experience-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="updateExperience" popup-close>Confirm</f7-button>
              <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
            </div>
          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="add-hp" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add HP">
          </f7-navbar>
          <f7-block>
            <h2>How much health did you regain?</h2>
            <input id="add-hp-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addHP" popup-close>Confirm</f7-button>
              <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
            </div>
          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="remove-hp" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Remove HP">
          </f7-navbar>
          <f7-block>
            <h2>How much damage did you receive?</h2>
            <input id="remove-hp-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="removeHP" popup-close>Confirm</f7-button>
              <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
            </div>
          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="add-damage" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Add Damage">
          </f7-navbar>
          <f7-block>
            <h2>How much damage did you cause?</h2>
            <input id="damage-caused-input" type="number">

            <div class="close-buttons">
              <f7-button class="green-button" @click="addDamage(); resetText();" popup-close>Confirm</f7-button>
              <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
            </div>
          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="reset-hp-and-spells" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Are You Sure?">
          </f7-navbar>
          <f7-block>
            <h2>This will reset your HP back to {{ totalHP }} and your Used Spell Slots back to 0.</h2>

            <div class="close-buttons">
              <f7-button class="green-button" @click="resetHPAndSpellSlots" popup-close>Confirm</f7-button>
              <f7-button class="red-button" popup-close>Cancel</f7-button>
            </div>
          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="reset-damage-caused" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Are You Sure?">
          </f7-navbar>
          <f7-block>
            <h2>This will reset your Damage Caused back to 0.</h2>

            <div class="close-buttons">
              <f7-button class="green-button" @click="resetDamageCaused" popup-close>Confirm</f7-button>
              <f7-button class="red-button" popup-close>Cancel</f7-button>
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
  name: 'Stats',
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      characterName: localStorage.getItem(localStorage.currentlySelectedCharacter+"Name"),
      currentLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"Level"),
      nextLevel: localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel"),
      calculatedExperience: localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience"),
      armorClass: localStorage.getItem(localStorage.currentlySelectedCharacter+"ArmorClass"),
      totalHP: localStorage.getItem(localStorage.currentlySelectedCharacter+"TotalHP"),
      charismaBonus: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus")),
      constitutionBonus: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus")),
      dexterityBonus: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus")),
      intelligenceBonus: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus")),
      strengthBonus: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus")),
      wisdomBonus: Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus")),
      strengthText: screen.width < 425 ? "Strength" : "(STR) Strength",
      dexterityText: screen.width < 425 ? "Dexterity" : "(DEX) Dexterity",
      constitutionText: screen.width < 425 ? "Constitution" : "(CON) Constitution",
      intelligenceText: screen.width < 425 ? "Intelligence" : "(INT) Intelligence",
      wisdomText: screen.width < 425 ? "Wisdom" : "(WIS) Wisdom",
      charismaText: screen.width < 425 ? "Charisma" : "(CHA) Charisma",
      popupOpened: false,
    };
  },
  computed: {
    levelUpPercentage: function() {
      return this.$store.state.levelUpPercentage;
    },
  },
  methods: {
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
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CalculatedExperience", 0);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      }
    },
    addDamage() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"DamageCaused") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DamageCaused") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DamageCaused") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DamageCaused", 0 + JSON.parse(document.getElementById("damage-caused-input").value));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DamageCaused", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"DamageCaused")) + JSON.parse(document.getElementById("damage-caused-input").value));
      }

      document.getElementById("damage-caused-input").value = "";
      document.getElementById("damage-caused").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"DamageCaused");
    },
    resetDamageCaused() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"DamageCaused", 0);
      document.getElementById("damage-caused").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"DamageCaused");
    },
    resetHPAndSpellSlots() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"TotalHP")));
      document.getElementById("current-hp").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP");
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level1UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level2UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level3UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level4UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level5UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level6UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level7UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level8UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level9UsedSlots", 0);
    },
    resetText() {
      document.getElementById("add-hp-input").value = "";
      document.getElementById("remove-hp-input").value = "";
      document.getElementById("add-experience-input").value = "";
      document.getElementById("damage-caused-input").value = "";
    },
    addHP() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", 0)
      }
      let addedHP = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP")) + JSON.parse(document.getElementById("add-hp-input").value);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", addedHP)
      if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP")) > JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"TotalHP"))) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", localStorage.getItem(localStorage.currentlySelectedCharacter+"TotalHP"))
      }
      document.getElementById("add-hp-input").value = "";
      document.getElementById("current-hp").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP");
    },
    removeHP() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", 0)
      }
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP")) - document.getElementById("remove-hp-input").value)
      if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP")) < 0) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", 0)
      }
      document.getElementById("remove-hp-input").value = "";
      document.getElementById("current-hp").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP");
    },
    updateExperience() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentExperience", 0 + JSON.parse(document.getElementById("add-experience-input").value));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentExperience", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience")) + JSON.parse(document.getElementById("add-experience-input").value));
      }

      document.getElementById("add-experience-input").value = "";
      document.getElementById("current-experience").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience");
      this.load();
      this.calculateLevelData();
      localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      this.$store.state.levelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage");
    },
    async load() {
      await document.getElementById("is-tamed-creature").childNodes[1].checked;
      await document.getElementById("character-name").value;
      await document.getElementById("current-experience").value;
      await document.getElementById("initiative").value;
      await document.getElementById("speed").value;
      await document.getElementById("armor-class").value;
      await document.getElementById("total-hp").value;
      await document.getElementById("current-hp").value;
      await document.getElementById("damage-caused").value;
      await document.getElementById("strength-level").value;
      await document.getElementById("dexterity-level").value;
      await document.getElementById("constitution-level").value;
      await document.getElementById("intelligence-level").value;
      await document.getElementById("wisdom-level").value;
      await document.getElementById("charisma-level").value;
      await document.getElementById("strength-class-bonus").value;
      await document.getElementById("dexterity-class-bonus").value;
      await document.getElementById("constitution-class-bonus").value;
      await document.getElementById("intelligence-class-bonus").value;
      await document.getElementById("wisdom-class-bonus").value;
      await document.getElementById("charisma-class-bonus").value;

      document.getElementById("is-tamed-creature").firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature"));
      this.$store.state.isTamedCreature = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature"));
      document.getElementById("character-name").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Name");
      this.$store.state.characterName = localStorage.getItem(localStorage.currentlySelectedCharacter+"Name");
      document.getElementById("current-experience").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience");
      document.getElementById("initiative").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Initiative");
      document.getElementById("speed").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Speed");
      document.getElementById("armor-class").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ArmorClass");
      document.getElementById("total-hp").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"TotalHP");
      document.getElementById("current-hp").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP");
      document.getElementById("damage-caused").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"DamageCaused");
      document.getElementById("strength-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel");
      document.getElementById("dexterity-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel");
      document.getElementById("constitution-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel");
      document.getElementById("intelligence-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel");
      document.getElementById("wisdom-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel");
      document.getElementById("charisma-level").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel");
      document.getElementById("strength-class-bonus").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus");
      document.getElementById("dexterity-class-bonus").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus");
      document.getElementById("constitution-class-bonus").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus");
      document.getElementById("intelligence-class-bonus").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus");
      document.getElementById("wisdom-class-bonus").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus");
      document.getElementById("charisma-class-bonus").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus");
      
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"Level") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"Level") === null) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Level", 1);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"NextLevel", 300);
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") === "") {
        this.calculatedExperience = 0;
        this.$store.state.levelUpPercentage = 0;
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaLevel", 0);
      }
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus", 0);
      };

      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"Level");
      this.nextLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel");
      this.armorClass = localStorage.getItem(localStorage.currentlySelectedCharacter+"ArmorClass");

      this.calculateLevelData();
      localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      this.$store.state.levelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage");

      this.$store.state.quickViewCount = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount"));
      this.$store.state.characterName = localStorage.getItem(localStorage.currentlySelectedCharacter+"Name");
      this.$store.state.showCharacterName = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowCharacterName"));
      this.$store.state.characterLevel = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level"));
      this.$store.state.showCharacterLevel = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowCharacterLevel"));
    },
    saveIsTamedCreature() {
      if (document.getElementById("is-tamed-creature").childNodes[1].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsTamedCreature", document.getElementById("is-tamed-creature").childNodes[1].checked);
        this.$store.state.isTamedCreature = document.getElementById("is-tamed-creature").childNodes[1].checked;
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IsTamedCreature", false);
        this.$store.state.isTamedCreature = false;
      }
    },
    saveCharacterName() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Name", document.getElementById("character-name").value);
      this.$store.state.characterName = document.getElementById("character-name").value;
      let currentCharacter = localStorage.currentlySelectedCharacter+"Name";
      let currentCharacterColor = localStorage.currentlySelectedCharacter+"AppColor";
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"Name") !== ""
      && typeof localStorage.getItem(localStorage.currentlySelectedCharacter+"Name") === "string") {
        document.documentElement.style.setProperty('--'+currentCharacter+'-button-color', "var("+currentCharacterColor+")");
      } else {
        document.documentElement.style.setProperty('--'+currentCharacter+'-button-color', "var(--dark-light-gray)");
      }
    },
    saveCharismaLevel() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaLevel", document.getElementById("charisma-level").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus", 0);
      };
      this.charismaBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus"));
    },
    saveCharismaClassBonus() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus", document.getElementById("charisma-class-bonus").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CharismaLevel", 0);
      };
      this.charismaBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus"));
    },
    saveCurrentExperience() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentExperience", document.getElementById("current-experience").value);
      this.calculateLevelData();
      this.currentLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"Level");
      this.$store.state.characterLevel = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level"));
      this.nextLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel");
      localStorage.setItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage", (localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentExperience") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")) / (localStorage.getItem(localStorage.currentlySelectedCharacter+"NextLevel") - localStorage.getItem(localStorage.currentlySelectedCharacter+"CalculatedExperience")));
      this.$store.state.levelUpPercentage = localStorage.getItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage");
    },
    saveConstitutionLevel() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel", document.getElementById("constitution-level").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus", 0);
      };
      this.constitutionBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus"));
    },
    saveConstitutionClassBonus() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus", document.getElementById("constitution-class-bonus").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel", 0);
      };
      this.constitutionBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus"));
    },
    saveCurrentHP() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", document.getElementById("current-hp").value);
    },
    saveDamageCaused() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"DamageCaused", document.getElementById("damage-caused").value);
    },
    saveDexterityLevel() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityLevel", document.getElementById("dexterity-level").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus", 0);
      };
      this.dexterityBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus"));
    },
    saveDexterityClassBonus() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus", document.getElementById("dexterity-class-bonus").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"DexterityLevel", 0);
      };
      this.dexterityBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus"));
    },
    saveInitiative() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Initiative", document.getElementById("initiative").value);
    },
    saveIntelligenceLevel() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel", document.getElementById("intelligence-level").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus", 0);
      };
      this.intelligenceBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus"));
    },
    saveIntelligenceClassBonus() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus", document.getElementById("intelligence-class-bonus").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel", 0);
      };
      this.intelligenceBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel") - 10)) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus"));
    },
    saveSpeed() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Speed", document.getElementById("speed").value);
    },
    saveStrengthLevel() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthLevel", document.getElementById("strength-level").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus", 0);
      };
      this.strengthBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus"));
    },
    saveStrengthClassBonus() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus", document.getElementById("strength-class-bonus").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"StrengthLevel", 0);
      };
      this.strengthBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus"));
    },
    saveTotalHP() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"TotalHP", document.getElementById("total-hp").value);
      this.totalHP = localStorage.getItem(localStorage.currentlySelectedCharacter+"TotalHP")
    },
    saveWisdomLevel() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomLevel", document.getElementById("wisdom-level").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomLevel", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus", 0);
      };
      this.wisdomBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus"));
    },
    saveWisdomClassBonus() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus", document.getElementById("wisdom-class-bonus").value);
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus", 0);
      };
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"WisdomLevel", 0);
      };
      this.wisdomBonus = Math.floor((localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomLevel") - 10) / 2) + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus"));
    },
  },
  watch: {
    currentLevel: function() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CurrentHP", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"TotalHP")));
      document.getElementById("current-hp").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CurrentHP");
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level1UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level2UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level3UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level4UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level5UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level6UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level7UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level8UsedSlots", 0);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level9UsedSlots", 0);
    },
  },
  created() {
    setTimeout(this.load, 100);
    if (this.$router.history.current.path !== "/stats/") {
      this.$router.push({ path: "/stats/" })
    }
  },
};
</script>

<style>
#character-name {
  font-size: 24px !important;
}

#level-label {
  padding: 15px 0;
}
#level {
  display: flex;
}
</style>
