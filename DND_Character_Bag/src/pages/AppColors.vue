<template>
  <f7-page name="appColors">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Character Colors
      </f7-nav-title>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>Choose a Color for Your Character</f7-block-title>
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
</template>

<script>
export default {
  name: 'AppColors',
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
  },
  created() {
    if (this.$router.history.current.path !== "/appColors/") {
      this.$router.push({ path: "/appColors/" })
    }
  },
};
</script>

<style>
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
  .colors-section {
    width: 20%;
    display: flex;
    flex-direction: column;
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
