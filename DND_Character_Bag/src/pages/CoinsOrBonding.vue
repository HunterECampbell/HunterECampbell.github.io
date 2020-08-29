<template>
  <f7-page name="coinsOrBonding">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        {{ coinsOrBonding }}
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>
      <f7-button class="colored-button" v-show="!isTamedCreature" popup-open="#convert-wealth">Convert Coins</f7-button>
      <f7-button class="colored-button" popup-open="#add-coins">{{ addCoinsOrAddBonding }}</f7-button>
      <f7-button class="colored-button" @click="updateBlankInputs" v-show="isTamedCreature" href="/bondingLibrary/">Travel To Bonding Library</f7-button>
      <f7-button class="colored-button" v-show="!isTamedCreature" popup-open="#remove-coins">Remove Coins</f7-button>
      <form class="move-lower">
          <label>{{ copperPiecesOrKindness }}</label>
          <input :disabled="isTamedCreature && kindnessLevel === 30 && (fearLevel > 30 || angerLevel > 30)"
          :class="isTamedCreature && kindnessLevel === 30 && (fearLevel > 30 || angerLevel > 30) ? 'disabled-input' : ''"
          id="copper-pieces"
          type="number"
          @keyup="saveCopperPieces"
          >
          
          <label>{{ silverPiecesOrFear }}</label>
          <input :disabled="isTamedCreature && fearLevel === 30 && (kindnessLevel > 30 || braveryLevel > 30)"
          :class="isTamedCreature && fearLevel === 30 && (kindnessLevel > 30 || braveryLevel > 30) ? 'disabled-input' : ''"
          id="silver-pieces"
          type="number"
          @keyup="saveSilverPieces"
          >
          
          <label>{{ electrumPiecesOrAnger }}</label>
          <input :disabled="isTamedCreature && angerLevel === 30 && (kindnessLevel > 30 || braveryLevel > 30)"
          :class="isTamedCreature && angerLevel === 30 && (kindnessLevel > 30 || braveryLevel > 30) ? 'disabled-input' : ''"
          id="electrum-pieces"
          type="number"
          @keyup="saveElectrumPieces"
          >
          
          <label>{{ goldPiecesOrBravery }}</label>
          <input :disabled="isTamedCreature && braveryLevel === 30 && (fearLevel > 30 || angerLevel > 30)"
          :class="isTamedCreature && braveryLevel === 30 && (fearLevel > 30 || angerLevel > 30) ? 'disabled-input' : ''"
          id="gold-pieces"
          type="number"
          @keyup="saveGoldPieces"
          >
          
          <label>{{ platinumPiecesOrTeamwork }}</label>
          <input id="platinum-pieces" type="number" @keyup="savePlatinumPieces">
      </form>
      
      <f7-popup id="convert-wealth" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Convert Coins">
          </f7-navbar>
          <f7-block>
            <h2>What coinage would you like to convert to?</h2>
            
            <f7-list class="selection-list" inline-labels>
              <f7-list-item
                radio
                radio-icon="start"
                title="(CP) Copper Pieces"
                name="demo-radio-start"
                @click="updateSelectedConversion('copper')"
                checked
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="(SP) Silver Pieces"
                name="demo-radio-start"
                @click="updateSelectedConversion('silver')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="(EP) Electrum Pieces"
                name="demo-radio-start"
                @click="updateSelectedConversion('electrum')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="(GP) Gold Pieces"
                name="demo-radio-start"
                @click="updateSelectedConversion('gold')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="(PP) Platinum Pieces"
                name="demo-radio-start"
                @click="updateSelectedConversion('platinum')"
              ></f7-list-item>
            </f7-list>

            <f7-button class="green-button" @click="load(); convert();" popup-close>Confirm</f7-button>
            <f7-button class="red-button" popup-close>Cancel</f7-button>
          </f7-block>
        </f7-page>
      </f7-popup>
      
      <f7-popup id="add-coins" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar :title="addCoinsOrAddBonding">
          </f7-navbar>
          <f7-block>
            <h2>{{ wealthMessageOrBondingMessage }}</h2>
        
              <label>{{ copperPiecesOrKindness }}</label>
              <input id="add-copper-pieces" type="number">
        
              <label>{{ silverPiecesOrFear }}</label>
              <input id="add-silver-pieces" type="number">
        
              <label>{{ electrumPiecesOrAnger }}</label>
              <input id="add-electrum-pieces" type="number">
        
              <label>{{ goldPiecesOrBravery }}</label>
              <input id="add-gold-pieces" type="number">
        
              <label>{{ platinumPiecesOrTeamwork }}</label>
              <input id="add-platinum-pieces" type="number">

              <label>Multiplier</label>
              <input id="multiplier" type="number" @keyup="saveMultiplier">

            <f7-button class="green-button" @click="load(); addCoins();" popup-close>Confirm</f7-button>
            <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
          </f7-block>
        </f7-page>
      </f7-popup>
      
      <f7-popup id="remove-coins" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar title="Remove Coins">
          </f7-navbar>
          <f7-block>
            <h2>How much wealth have you spent?</h2>
        
              <label>(CP) Copper Pieces</label>
              <input id="remove-copper-pieces" type="number">
        
              <label>(SP) Silver Pieces</label>
              <input id="remove-silver-pieces" type="number">
        
              <label>(EP) Electrum Pieces</label>
              <input id="remove-electrum-pieces" type="number">
        
              <label>(GP) Gold Pieces</label>
              <input id="remove-gold-pieces" type="number">
        
              <label>(PP) Platinum Pieces</label>
              <input id="remove-platinum-pieces" type="number">

            <f7-button class="green-button" @click="load(); removeCoins();" popup-close>Confirm</f7-button>
            <f7-button class="red-button" @click="resetText" popup-close>Cancel</f7-button>
          </f7-block>
        </f7-page>
      </f7-popup>
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: 'CoinsOrBonding',
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      coinsOrBonding: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Bonding" : "Coins",
      isTamedCreature: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")),
      addCoinsOrAddBonding: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Add Bonding" : "Add Coins",
      copperPiecesOrKindness: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Kindness" : "(CP) Copper Pieces",
      silverPiecesOrFear: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Fear" : "(SP) Silver Pieces",
      electrumPiecesOrAnger: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Anger" : "(EP) Electrum Pieces",
      goldPiecesOrBravery: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Bravery" : "(GP) Gold Pieces",
      platinumPiecesOrTeamwork: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Teamwork" : "(PP) Platinum Pieces",
      wealthMessageOrBondingMessage: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "In what way have you bonded?" : "How much wealth have you acquired?",
      popupOpened: false,
      selectedConversion: "copper",
      kindnessLevel: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")),
      fearLevel: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")),
      angerLevel: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")),
      braveryLevel: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")),
      teamworkLevel: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")),
    };
  },
  methods: {
    resetText() {
      document.getElementById("add-copper-pieces").value = "";
      document.getElementById("add-silver-pieces").value = "";
      document.getElementById("add-electrum-pieces").value = "";
      document.getElementById("add-gold-pieces").value = "";
      document.getElementById("add-platinum-pieces").value = "";
      document.getElementById("remove-copper-pieces").value = "";
      document.getElementById("remove-silver-pieces").value = "";
      document.getElementById("remove-electrum-pieces").value = "";
      document.getElementById("remove-gold-pieces").value = "";
      document.getElementById("remove-platinum-pieces").value = "";
    },
    updateSelectedConversion(text) {
      this.selectedConversion = text;
    },
    updateBlankInputs() {
      if (document.getElementById("copper-pieces").value === ""
      || document.getElementById("copper-pieces").value === null
      || document.getElementById("copper-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces", 0);
      }
      if (document.getElementById("silver-pieces").value === ""
      || document.getElementById("silver-pieces").value === null
      || document.getElementById("silver-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces", 0);
      }
      if (document.getElementById("electrum-pieces").value === ""
      || document.getElementById("electrum-pieces").value === null
      || document.getElementById("electrum-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces", 0);
      }
      if (document.getElementById("gold-pieces").value === ""
      || document.getElementById("gold-pieces").value === null
      || document.getElementById("gold-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces", 0);
      }
      if (document.getElementById("platinum-pieces").value === ""
      || document.getElementById("platinum-pieces").value === null
      || document.getElementById("platinum-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces", 0);
      }
    },
    convert() {
      if (localStorage.currentlySelectedCharacter !== "None") {
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces", 0);
        }
      }

      switch (this.selectedConversion) {
        case "copper":
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")) + 1000)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")) + 100)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")) + 50)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")) + 10)
          };
          break;
        case "silver":
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")) + 100)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")) + 10)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")) + 5)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") >= 10) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") - 10)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")) + 1)
          };
          break;
        case "electrum":
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")) + 20)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")) + 2)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") >= 5) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") - 5)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")) + 1)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") >= 50) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") - 50)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")) + 1)
          };
          break;
        case "gold":
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") > 0) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") - 1)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")) + 10)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") >= 2) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") - 2)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")) + 1)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") >= 10) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") - 10)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")) + 1)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") >= 100) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") - 100)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")) + 1)
          };
          break;
        case "platinum":
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") >= 10) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") - 10)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")) + 1)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") >= 2) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") - 2)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")) + 1)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") >= 100) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") - 100)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")) + 1)
          };
          while (localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") >= 1000) {
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces",
            localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") - 1000)
            localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces",
            JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")) + 1)
          };
          break;
        default:
          break;
      };
      this.load();
    },
    addCoins() {
      this.updateBlankInputs();

      let copper = 0;
      let silver = 0;
      let electrum = 0;
      let gold = 0;
      let platinum = 0;

      if (document.getElementById("add-copper-pieces").value !== "") {
        copper = Math.floor(JSON.parse(document.getElementById("add-copper-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")));
      }
      if (document.getElementById("add-silver-pieces").value !== "") {
        if (JSON.parse(document.getElementById("add-silver-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 > 0) {
          copper += Math.floor(JSON.parse(document.getElementById("add-silver-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 * 10);
          silver = Math.floor(JSON.parse(document.getElementById("add-silver-pieces").value));
        } else {
          silver = Math.floor(JSON.parse(document.getElementById("add-silver-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")));
        }
      }
      if (document.getElementById("add-electrum-pieces").value !== "") {
        if (JSON.parse(document.getElementById("add-electrum-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 > 0) {
          silver += JSON.parse(document.getElementById("add-electrum-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 * 5;
          electrum = Math.floor(JSON.parse(document.getElementById("add-electrum-pieces").value));
          if (silver % 1 > 0) {
            copper += Math.floor(silver % 1 * 10);
            silver = Math.floor(silver);
          }
        } else {
          electrum = Math.floor(JSON.parse(document.getElementById("add-electrum-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")));
        }
      }
      if (document.getElementById("add-gold-pieces").value !== "") {
        if (JSON.parse(document.getElementById("add-gold-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 > 0) {
          silver += Math.floor(JSON.parse(document.getElementById("add-gold-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 * 10);
          gold = Math.floor(JSON.parse(document.getElementById("add-gold-pieces").value));
        } else {
          gold = Math.floor(JSON.parse(document.getElementById("add-gold-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")));
        }
      }
      if (document.getElementById("add-platinum-pieces").value !== "") {
        if (JSON.parse(document.getElementById("add-platinum-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 > 0) {
          gold += Math.floor(JSON.parse(document.getElementById("add-platinum-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")) % 1 * 10);
          platinum = Math.floor(JSON.parse(document.getElementById("add-platinum-pieces").value));
        } else {
          platinum = Math.floor(JSON.parse(document.getElementById("add-platinum-pieces").value) * JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")));
        }
      }

      localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")) + copper);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")) + silver);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")) + electrum);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")) + gold);
      localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")) + platinum);

      document.getElementById("add-copper-pieces").value = "";
      document.getElementById("add-silver-pieces").value = "";
      document.getElementById("add-electrum-pieces").value = "";
      document.getElementById("add-gold-pieces").value = "";
      document.getElementById("add-platinum-pieces").value = "";
      document.getElementById("multiplier").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier");

      this.load();
    },
    removeCoins() {
      if (document.getElementById("remove-copper-pieces").value !== "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")) - JSON.parse(document.getElementById("remove-copper-pieces").value));
      }
      if (document.getElementById("remove-silver-pieces").value !== "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")) - JSON.parse(document.getElementById("remove-silver-pieces").value));
      }
      if (document.getElementById("remove-electrum-pieces").value !== "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")) - JSON.parse(document.getElementById("remove-electrum-pieces").value));
      }
      if (document.getElementById("remove-gold-pieces").value !== "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")) - JSON.parse(document.getElementById("remove-gold-pieces").value));
      }
      if (document.getElementById("remove-platinum-pieces").value !== "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")) - JSON.parse(document.getElementById("remove-platinum-pieces").value));
      }

      document.getElementById("remove-copper-pieces").value = "";
      document.getElementById("remove-silver-pieces").value = "";
      document.getElementById("remove-electrum-pieces").value = "";
      document.getElementById("remove-gold-pieces").value = "";
      document.getElementById("remove-platinum-pieces").value = "";

      this.load();
    },
    async load() {
      await setTimeout(function() {}, 1000);
      await document.getElementById("copper-pieces").value;
      await document.getElementById("silver-pieces").value;
      await document.getElementById("electrum-pieces").value;
      await document.getElementById("gold-pieces").value;
      await document.getElementById("platinum-pieces").value;
        
      if (localStorage.currentlySelectedCharacter !== "None") {
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces", 0);
        }
        if (localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier") === undefined
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier") === null
        || localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier") === "") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"Multiplier", 1)
          document.getElementById("multiplier").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")
        }
      }

      document.getElementById("copper-pieces").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces");
      document.getElementById("silver-pieces").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces");
      document.getElementById("electrum-pieces").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces");
      document.getElementById("gold-pieces").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces");
      document.getElementById("platinum-pieces").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces");
      document.getElementById("multiplier").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier");
    },
    saveCopperPieces() {
      if (document.getElementById("copper-pieces").value === ""
      || document.getElementById("copper-pieces").value === null
      || document.getElementById("copper-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces", 0);
        this.kindnessLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"CopperPieces", document.getElementById("copper-pieces").value);
        this.kindnessLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces");
      }
    },
    saveSilverPieces() {
      if (document.getElementById("silver-pieces").value === ""
      || document.getElementById("silver-pieces").value === null
      || document.getElementById("silver-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces", 0);
        this.fearLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"SilverPieces", document.getElementById("silver-pieces").value);
        this.fearLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces");
      }
    },
    saveElectrumPieces() {
      if (document.getElementById("electrum-pieces").value === ""
      || document.getElementById("electrum-pieces").value === null
      || document.getElementById("electrum-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces", 0);
        this.angerLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ElectrumPieces", document.getElementById("electrum-pieces").value);
        this.angerLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces");
      }
    },
    saveGoldPieces() {
      if (document.getElementById("gold-pieces").value === ""
      || document.getElementById("gold-pieces").value === null
      || document.getElementById("gold-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces", 0);
        this.braveryLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"GoldPieces", document.getElementById("gold-pieces").value);
        this.braveryLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces");
      }
    },
    savePlatinumPieces() {
      if (document.getElementById("platinum-pieces").value === ""
      || document.getElementById("platinum-pieces").value === null
      || document.getElementById("platinum-pieces").value === undefined) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces", 0);
        this.teamworkLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces");
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"PlatinumPieces", document.getElementById("platinum-pieces").value);
        this.teamworkLevel = localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces");
      }
    },
    saveMultiplier() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Multiplier", document.getElementById("multiplier").value);
      document.getElementById("multiplier").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier")
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier") === null
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"Multiplier") === "") {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Multiplier", 1)
      }
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/coinsOrBonding/") {
      this.$router.push({ path: "/coinsOrBonding/" })
    }
  },
};
</script>
