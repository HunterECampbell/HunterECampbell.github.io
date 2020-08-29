<template>
  <f7-page name="characterSettings">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Character Settings
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block>
      <f7-list class="selection-list" inline-labels>
        <f7-list-item popup-open="#CharacterColors" title="Character Colors" link="#"></f7-list-item>
        <!-- <f7-list-item popup-open="#QuickViewMenu" title="Quick View Menu" link="#"></f7-list-item> -->
      </f7-list>
    </f7-block>

    <f7-popup id="CharacterColors" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link popup-close>
              <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
            </f7-link>
          </f7-nav-left>
          <f7-nav-title>Character Colors</f7-nav-title>
        </f7-navbar>
        <h2>Choose a Color for Your Character</h2>
        <f7-block class="colors-div" inner>
          <div class="colors-section">
            <f7-button @click="setAppColor('--pink')" class="circle-buttons" id="pink"></f7-button>
            <f7-button @click="setAppColor('--red')" class="circle-buttons" id="red"></f7-button>
          </div>
          <div class="colors-section">
            <f7-button @click="setAppColor('--orange')" class="circle-buttons" id="orange"></f7-button>
            <f7-button @click="setAppColor('--yellow')" class="circle-buttons" id="yellow"></f7-button>
          </div>
          <div class="colors-section">
            <f7-button @click="setAppColor('--green')" class="circle-buttons" id="green"></f7-button>
            <f7-button @click="setAppColor('--teal')" class="circle-buttons" id="teal"></f7-button>
          </div>
          <div class="colors-section">
            <f7-button @click="setAppColor('--blue')" class="circle-buttons" id="blue"></f7-button>
            <f7-button @click="setAppColor('--purple')" class="circle-buttons" id="purple"></f7-button>
          </div>
          <div class="colors-section">
            <f7-button @click="setAppColor('--brown')" class="circle-buttons" id="brown"></f7-button>
            <f7-button @click="setAppColor('--white')" class="circle-buttons" id="white"></f7-button>
          </div>
        </f7-block>
      </f7-page>
    </f7-popup>

    <f7-popup id="QuickViewMenu" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link popup-close>
              <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
            </f7-link>
          </f7-nav-left>
          <f7-nav-title>Quick View Menu</f7-nav-title>
        </f7-navbar>
        
        <QuickViewFAB location="right-bottom" openDirection="top" />

        <div id="popup">
          <h1>Under Construction</h1>
          <!-- <h3 v-show="quickViewCount !== 10">Choose {{ 10-quickViewCount }} more {{ quickViewCount === 9 ? "point" : "points" }} to add to the Quick View Menu</h3>
          
          <div class="line move-slightly-lower" v-show="quickViewCount !== 10"></div>

          <h2 class="higher-h2">Stats Page Items</h2>
          <f7-checkbox id="ShowCharacterName" class="move-lower" :disabled="quickViewCount === 10 && !this.$store.state.showCharacterName" @change="save('ShowCharacterName', 9)">
            <p class="checkbox-label">Display Character Name (1 Point)</p>
          </f7-checkbox>
          <f7-checkbox id="ShowCharacterLevel" class="move-lower" :disabled="quickViewCount === 10 && !this.$store.state.showCharacterLevel" @change="save('ShowCharacterLevel', 1)">
            <p class="checkbox-label">Display Level (1 Point)</p>
          </f7-checkbox>
          <f7-checkbox id="ShowAddExperience" class="move-lower" :disabled="quickViewCount === 10 && !this.$store.state.showAddExperience" @change="save('ShowAddExperience', 1)">
            <p class="checkbox-label">Display Add Experience Button (1 Point)</p>
          </f7-checkbox> -->

        </div>

      </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: 'CharacterSettings',
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      popupOpened: false,
    };
  },
  methods: {
    setAppColor(color) {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"AppColor", color);
      let currentCharacterColor = localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor");
      document.documentElement.style.setProperty('--current-app-color', "var("+currentCharacterColor+")");

      if (localStorage.currentlySelectedCharacter === "character1") {
        document.documentElement.style.setProperty('--character1-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character2") {
        document.documentElement.style.setProperty('--character2-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character3") {
        document.documentElement.style.setProperty('--character3-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character4") {
        document.documentElement.style.setProperty('--character4-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character5") {
        document.documentElement.style.setProperty('--character5-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character6") {
        document.documentElement.style.setProperty('--character1-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character6") {
        document.documentElement.style.setProperty('--character1-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character7") {
        document.documentElement.style.setProperty('--character7-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character8") {
        document.documentElement.style.setProperty('--character8-button-color', "var("+currentCharacterColor+")");
      }
      if (localStorage.currentlySelectedCharacter === "character9") {
        document.documentElement.style.setProperty('--character9-button-color', "var("+currentCharacterColor+")");
      }
    },
    save(name, amount) {
      document.getElementById(name).childNodes[1].checked === undefined
      ? localStorage.setItem(localStorage.currentlySelectedCharacter+name, !JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+name)))
      : localStorage.setItem(localStorage.currentlySelectedCharacter+name, document.getElementById(name).childNodes[1].checked)

      if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+name))) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"QuickViewCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount")) + amount);
        this.$store.state.quickViewCount = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount"));
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"QuickViewCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount")) - amount);
        this.$store.state.quickViewCount = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount"));
      }

      // STATS
      this.$store.state.showCharacterName = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowCharacterName"));
      this.$store.state.showCharacterLevel = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowCharacterLevel"));
      this.$store.state.showAddExperience = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ShowAddExperience"));
    },
    async loadDetails(name) {
      setTimeout(function() {
        if (document.getElementById(name) !== null) {
          document.getElementById(name).childNodes[0].checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+name));
        }
      }, 100);
    },
    async load() {
      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"QuickViewCount") === null) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"QuickViewCount", 0);
      }

      // STATS
      await this.loadDetails("ShowCharacterName");
      await this.loadDetails("ShowCharacterLevel");
      await this.loadDetails("ShowAddExperience");
    },
  },
  computed: {
    quickViewCount: function() {
      return this.$store.state.quickViewCount;
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/characterSettings/") {
      this.$router.push({ path: "/characterSettings/" })
    }
  },
};
</script>

<style scoped>
#popup {
  padding: 0 15px;
}

h2 {
  padding-top: 15px;
  padding-left: 25px;
}

.higher-h2 {
  margin-top: -5px;
}

.circle-buttons.button {
  border-radius: 50% !important;
  width: 125px !important;
  height: 125px !important;
  padding-top: 45px;
}

.colors-div {
  display: flex;
  flex-wrap: wrap;
}

.colors-section {
  display: flex;
  flex-direction: row;
  width: 100%;
}
@media only screen and (min-width: 700px) {
  h2 {
    padding-top: 25px;
  }

  .colors-section {
    padding-top: 15px;
  }
}

#pink {
  background-color: var(--pink) !important;
}

#red {
  background-color: var(--red) !important;
}

#orange {
  background-color: var(--orange) !important;
}

#yellow {
  background-color: var(--yellow) !important;
}

#green {
  background-color: var(--green) !important;
}

#teal {
  background-color: var(--teal) !important;
}

#blue {
  background-color: var(--blue) !important;
}

#purple {
  background-color: var(--purple) !important;
}

#white {
  background-color: var(--white) !important;
}

#brown {
  background-color: var(--brown) !important;
}
</style>
