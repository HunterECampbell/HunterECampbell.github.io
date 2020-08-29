<template>
  <f7-page name="featuresAndTraits">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Features And Traits
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB />

    <!-- Scrollable page content-->
    <f7-block inner>
      <form>
        <label>{{ raceOrSpecies }}</label>
        <input id="race" type="text" @keyup="saveRace">

        <label>{{ racialTraitsOrSpeciesTraits }}</label>
        <textarea id="racial-traits" @keyup="saveRacialTraits"></textarea>
        
        <div class="line move-lower"></div>

        <div class="move-slightly-lower">
          <label>{{ classOrPersonality }}</label>
          <input id="class" type="text" @keyup="saveClass">
        </div>

        <label>{{ classFeaturesOrPersonalityFeatures }}</label>
        <textarea id="class-features" @keyup="saveClassFeatures"></textarea>
        
        <div class="line move-lower"></div>

        <div class="move-slightly-lower">
          <label>Vision</label>
          <input id="vision" type="text" @keyup="saveVision">
        </div>

        <label>Known Languages</label>
        <textarea class="shorter-textarea" id="known-languages" @keyup="saveKnownLanguages"></textarea>
        
        <div class="line move-lower"></div>

        <div class="move-slightly-lower">
          <label>Gender</label>
          <input id="gender" type="text" @keyup="saveGender">
        </div>

        <label>Age</label>
        <input id="age" type="text" @keyup="saveAge">

        <label>{{ hairOrHeadDecoration }}</label>
        <input id="hair" type="text" @keyup="saveHair">

        <label>Eyes</label>
        <input id="eyes" type="text" @keyup="saveEyes">

        <label>Height</label>
        <input id="height" type="text" @keyup="saveHeight">

        <label>Weight</label>
        <input id="weight" type="text" @keyup="saveWeight">

        <label>Size</label>
        <input id="size" type="text" @keyup="saveSize">
      </form>
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: 'FeaturesAndTraits',
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      raceOrSpecies: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Species" : "Race",
      racialTraitsOrSpeciesTraits: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Species Traits" : "Racial Traits",
      classOrPersonality: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Personality" : "Class",
      classFeaturesOrPersonalityFeatures: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Personality Features" : "Class Features",
      hairOrHeadDecoration: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"IsTamedCreature")) ? "Head Decoration" : "Hair",
    };
  },
  methods: {
    async load() {
      await setTimeout(function() {}, 1000);
      await document.getElementById("race").value;
      await document.getElementById("racial-traits").value;
      await document.getElementById("class").value;
      await document.getElementById("class-features").value;
      await document.getElementById("vision").value;
      await document.getElementById("known-languages").value;
      await document.getElementById("gender").value;
      await document.getElementById("age").value;
      await document.getElementById("hair").value;
      await document.getElementById("eyes").value;
      await document.getElementById("height").value;
      await document.getElementById("weight").value;
      await document.getElementById("size").value;

      document.getElementById("race").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Race");
      document.getElementById("racial-traits").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"RacialTraits");
      document.getElementById("class").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Class");
      document.getElementById("class-features").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"ClassFeatures");
      document.getElementById("vision").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Vision");
      document.getElementById("known-languages").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"KnownLanguages");
      document.getElementById("gender").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Gender");
      document.getElementById("age").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Age");
      document.getElementById("hair").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Hair");
      document.getElementById("eyes").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Eyes");
      document.getElementById("height").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Height");
      document.getElementById("weight").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Weight");
      document.getElementById("size").value = localStorage.getItem(localStorage.currentlySelectedCharacter+"Size");
    },
    saveClass() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Class", document.getElementById("class").value);
    },
    saveClassFeatures() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"ClassFeatures", document.getElementById("class-features").value);
    },
    saveKnownLanguages() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"KnownLanguages", document.getElementById("known-languages").value);
    },
    saveRace() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Race", document.getElementById("race").value);
    },
    saveRacialTraits() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"RacialTraits", document.getElementById("racial-traits").value);
    },
    saveVision() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Vision", document.getElementById("vision").value);
    },
    saveGender() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Gender", document.getElementById("gender").value);
    },
    saveAge() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Age", document.getElementById("age").value);
    },
    saveHair() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Hair", document.getElementById("hair").value);
    },
    saveEyes() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Eyes", document.getElementById("eyes").value);
    },
    saveHeight() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Height", document.getElementById("height").value);
    },
    saveWeight() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Weight", document.getElementById("weight").value);
    },
    saveSize() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Size", document.getElementById("size").value);
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/featuresAndTraits/") {
      this.$router.push({ path: "/featuresAndTraits/" })
    }
  },
};
</script>
