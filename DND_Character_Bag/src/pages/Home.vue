<template>
  <f7-page>
    <f7-navbar sliding>
      <f7-nav-title>
        Character Bag
      </f7-nav-title>
    </f7-navbar>
    <f7-block-title id="select-character">{{ title }}</f7-block-title>
    <f7-block id="characters-list" inner>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character1')" id="character1" class="character-button">{{ character1Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character2')" id="character2" class="character-button">{{ character2Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character3')" id="character3" class="character-button">{{ character3Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character4')" id="character4" class="character-button">{{ character4Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character5')" id="character5" class="character-button">{{ character5Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character6')" id="character6" class="character-button">{{ character6Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character7')" id="character7" class="character-button">{{ character7Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character8')" id="character8" class="character-button">{{ character8Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character9')" id="character9" class="character-button">{{ character9Name }}</f7-button>
      <f7-button href="/stats/" @click="setCurrentlySelectedCharacter('character10')" id="character10" class="character-button">{{ character10Name }}</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import router from "../routes.js";

export default {
  name: 'Home',
  data() {
    return {
      title: this.setTitle(),
      character1Name: localStorage.character1Name !== undefined && localStorage.character1Name !== "" ? localStorage.character1Name : "Unnamed Character",
      character2Name: localStorage.character2Name !== undefined && localStorage.character2Name !== "" ? localStorage.character2Name : "Unnamed Character",
      character3Name: localStorage.character3Name !== undefined && localStorage.character3Name !== "" ? localStorage.character3Name : "Unnamed Character",
      character4Name: localStorage.character4Name !== undefined && localStorage.character4Name !== "" ? localStorage.character4Name : "Unnamed Character",
      character5Name: localStorage.character5Name !== undefined && localStorage.character5Name !== "" ? localStorage.character5Name : "Unnamed Character",
      character6Name: localStorage.character6Name !== undefined && localStorage.character6Name !== "" ? localStorage.character6Name : "Unnamed Character",
      character7Name: localStorage.character7Name !== undefined && localStorage.character7Name !== "" ? localStorage.character7Name : "Unnamed Character",
      character8Name: localStorage.character8Name !== undefined && localStorage.character8Name !== "" ? localStorage.character8Name : "Unnamed Character",
      character9Name: localStorage.character9Name !== undefined && localStorage.character9Name !== "" ? localStorage.character9Name : "Unnamed Character",
      character10Name: localStorage.character10Name !== undefined && localStorage.character10Name !== "" ? localStorage.character10Name : "Unnamed Character",
    };
  },
  methods: {
    setTitle() {
      if ((localStorage.character1Name === undefined || localStorage.character1Name === "")
      && (localStorage.character2Name === undefined || localStorage.character2Name === "")
      && (localStorage.character3Name === undefined || localStorage.character3Name === "")
      && (localStorage.character4Name === undefined || localStorage.character4Name === "")
      && (localStorage.character5Name === undefined || localStorage.character5Name === "")
      && (localStorage.character6Name === undefined || localStorage.character6Name === "")
      && (localStorage.character7Name === undefined || localStorage.character7Name === "")
      && (localStorage.character8Name === undefined || localStorage.character8Name === "")
      && (localStorage.character9Name === undefined || localStorage.character9Name === "")
      && (localStorage.character10Name === undefined || localStorage.character10Name === "")) {
        return "Create A Character";
      } else {
        return "Select A Character";
      }
    },
    setCurrentlySelectedCharacter(theId) {
      localStorage.currentlySelectedCharacter = theId;
      let currentCharacterColor = localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor");
      document.documentElement.style.setProperty('--current-app-color', "var("+currentCharacterColor+")");
      this.$router.push({ path: "/stats/" });
    },
  },
  async created() {
    document.documentElement.style.setProperty('--current-app-color', "var(--green)");

    await (document.getElementById("character1"))
    await (document.getElementById("character2"))
    await (document.getElementById("character3"))
    await (document.getElementById("character4"))
    await (document.getElementById("character5"))
    await (document.getElementById("character6"))
    await (document.getElementById("character7"))
    await (document.getElementById("character8"))
    await (document.getElementById("character9"))
    await (document.getElementById("character10"))

    if (document.getElementById("character1").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character1-button-color', "var("+localStorage.character1AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character1-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character2").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character2-button-color', "var("+localStorage.character2AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character2-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character3").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character3-button-color', "var("+localStorage.character3AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character3-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character4").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character4-button-color', "var("+localStorage.character4AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character4-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character5").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character5-button-color', "var("+localStorage.character5AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character5-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character6").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character6-button-color', "var("+localStorage.character6AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character6-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character7").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character7-button-color', "var("+localStorage.character7AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character7-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character8").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character8-button-color', "var("+localStorage.character8AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character8-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character9").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character9-button-color', "var("+localStorage.character9AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character9-button-color', "var(--dark-light-gray)");
    }
    if (document.getElementById("character10").innerText !== "UNNAMED CHARACTER") {
      document.documentElement.style.setProperty('--character10-button-color', "var("+localStorage.character10AppColor+")");
    } else {
      document.documentElement.style.setProperty('--character10-button-color', "var(--dark-light-gray)");
    }

    if (this.$router.history.current.path !== "/") {
      this.$router.push({ path: "/" })
    }
  },
};
</script>

<style>
.character-button {
  margin: 12px auto !important;
}

#select-character {
  font-size: 16px !important;
}
</style>
