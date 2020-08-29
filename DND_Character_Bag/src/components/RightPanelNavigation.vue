<template>
  <f7-panel id="panel" right :reveal="isiOS" :effect="panelEffect">
    <f7-navbar title="Menu"></f7-navbar>
    <f7-page>
      <div id="spell-cover" @click="startLoading"></div>
      <f7-list>
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/stats/"
          title="Stats"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/featuresAndTraits/"
          title="Features & Traits"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/coinsOrBonding/"
          :title="updateCoinsOrBonding"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/bag/"
          title="Bag"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/weapons/"
          title="Weapons"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/armor/"
          title="Armor"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          id="spells"
          link="/spells/"
          title="Spells"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/monsterEncounters/"
          title="Monster Encounters"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/libraries/"
          title="Libraries"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/notes/"
          title="Notes"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          @click="updateWasAtLibraries"
          link="/characterSettings/"
          title="Character Settings"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-button id="delete-character" class="red-button" popup-open="#delete-popup" @click="getCurrentlySelectedCharacterName()">Delete Character</f7-button>
        
        <f7-popup id="delete-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
          <f7-page>
            <f7-navbar title="Are You Sure?">
            </f7-navbar>
            <f7-block>
              <h2>Are you sure you want to delete "{{ currentlySelectedCharacterName }}"?</h2>
              <h3>"{{ currentlySelectedCharacterName }}" will be lost forever once deleted.</h3>
              
              <f7-button class="red-button" href="/" id="confirm" @click="deleteCharacter();" popup-close panel-close>Confirm Delete</f7-button>
              <f7-button class="green-button" id="cancel" popup-close>Cancel</f7-button>
            </f7-block>
          </f7-page>
        </f7-popup>
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script>
export default {
  name: 'RightPanelNavigation',
  data() {
    return {
      currentlySelectedCharacterName: "UNNAMED CHARACTER",
      isMaterial: window.isMaterial,
      isiOS: window.isiOS,
      popupOpened: false,
    };
  },
  computed: {
    panelEffect() {
      return this.isiOS ? 'reveal' : 'cover';
    },
    updateCoinsOrBonding: function() {
      return this.$store.state.isTamedCreature ? "Bonding" : "Coins";
    },
  },
  methods: {
    updateWasAtLibraries() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"WasAtLibraries", false);
    },
    startLoading() {
      if (this.$route.path !== "/spells/") {
        if (this.$route.path === "/spellLibrary/") {
          this.$store.state.loaderText = "TRAVELLING BACK TO ADVENTURE";
        } else {
          this.$store.state.loaderText = "LOADING SPELLS"
        }
        this.$store.state.isLoading = true;
        setTimeout(function() {
          document.getElementsByClassName("panel-backdrop")[0].click();
        }, 100)
        setTimeout(function() {
          document.querySelector("#spells a").click();
        }, 500);
      } else {
        document.getElementsByClassName("panel-backdrop")[0].click();
      }
    },
    deleteCharacter() {
      // HOME
      localStorage.setItem(localStorage.currentlySelectedCharacter+"AppColor", "--green");
      document.documentElement.style.setProperty('--'+localStorage.currentlySelectedCharacter+'-button-color', "var(--light-dark-gray)");

      // STATS
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IsTamedCreature");
      this.$store.state.isTamedCreature = false;
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Name");
      this.$store.state.characterName = '';
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CurrentExperience");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedExperience");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Initiative");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Speed");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ArmorClass");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TotalHP");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CurrentHP");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DamageCaused");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StrengthLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DexterityLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConstitutionLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IntelligenceLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WisdomLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CharismaLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StrengthClassBonus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DexterityClassBonus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConstitutionClassBonus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IntelligenceClassBonus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WisdomClassBonus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CharismaClassBonus");

      // FEATURES & TRAITS
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Race");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RacialTraits");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Class");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ClassFeatures");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Vision");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"KnownLanguages");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Gender");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Age");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Hair");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Eyes");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Height");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Weight");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Size");

      // COINS
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CopperPieces");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SilverPieces");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ElectrumPieces");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GoldPieces");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PlatinumPieces");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Dragon");
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Multiplier", 1);

      // BAG
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Items");

      // WEAPONS
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount");

      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10MaterialType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10WeaponType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10AmmoCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount");

      // ARMOR
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NumberOfLeatherArmorPieces", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEmbuing1", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEmbuing2", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEmbuing3", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEmbuing4", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEmbuing5", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEmbuing6", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEnchantment1", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEnchantment2", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEnchantment3", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEnchantment4", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEnchantment5", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEnchantment6", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorAttachment1", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorAttachment2", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorAttachment3", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorAttachment4", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorAttachment5", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorAttachment6", "leather");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NumberOfIronArmorPieces", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEmbuing1", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEmbuing2", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEmbuing3", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEmbuing4", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEmbuing5", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEmbuing6", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEnchantment1", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEnchantment2", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEnchantment3", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEnchantment4", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEnchantment5", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEnchantment6", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorAttachment1", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorAttachment2", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorAttachment3", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorAttachment4", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorAttachment5", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorAttachment6", "iron");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NumberOfSteelArmorPieces", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEmbuing1", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEmbuing2", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEmbuing3", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEmbuing4", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEmbuing5", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEmbuing6", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEnchantment1", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEnchantment2", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEnchantment3", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEnchantment4", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEnchantment5", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEnchantment6", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorAttachment1", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorAttachment2", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorAttachment3", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorAttachment4", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorAttachment5", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorAttachment6", "steel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NumberOfMithrilArmorPieces", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEmbuing1", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEmbuing2", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEmbuing3", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEmbuing4", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEmbuing5", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEmbuing6", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEnchantment1", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEnchantment2", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEnchantment3", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEnchantment4", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEnchantment5", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEnchantment6", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorAttachment1", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorAttachment2", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorAttachment3", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorAttachment4", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorAttachment5", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorAttachment6", "mithril");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NumberOfAdamantiumArmorPieces", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEmbuing1", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEmbuing2", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEmbuing3", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEmbuing4", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEmbuing5", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEmbuing6", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEnchantment1", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEnchantment2", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEnchantment3", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEnchantment4", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEnchantment5", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEnchantment6", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorAttachment1", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorAttachment2", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorAttachment3", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorAttachment4", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorAttachment5", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorAttachment6", "adamantium");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NumberOfRuniteArmorPieces", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEmbuing1", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEmbuing2", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEmbuing3", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEmbuing4", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEmbuing5", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEmbuing6", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEnchantment1", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEnchantment2", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEnchantment3", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEnchantment4", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEnchantment5", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEnchantment6", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorAttachment1", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorAttachment2", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorAttachment3", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorAttachment4", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorAttachment5", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorAttachment6", "runite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NumberOfDragonArmorPieces", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEmbuing1", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEmbuing2", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEmbuing3", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEmbuing4", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEmbuing5", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEmbuing6", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEnchantment1", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEnchantment2", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEnchantment3", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEnchantment4", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEnchantment5", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEnchantment6", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorAttachment1", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorAttachment2", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorAttachment3", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorAttachment4", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorAttachment5", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorAttachment6", "dragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LeatherArmorEquipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronArmorEquipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteelArmorEquipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MithrilArmorEquipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdamantiumArmorEquipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RuniteArmorEquipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonArmorEquipped");

      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10AC");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Embuing1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Embuing2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Enchantment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Enchantment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Attachment1");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Attachment2");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Equipped");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Equipped");

      // SPELLS
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level1UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level2UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level3UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level4UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level5UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level6UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level7UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level8UsedSlots");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level9UsedSlots");
      
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CantripsCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level1Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level2Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level3Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level4Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level5Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level6Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level7Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level8Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Level9Count");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomCount");

      // SPELL LIBRARY
      // CANTRIPS
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AcidSplashLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ChillTouchLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ControlFlamesLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CreateBonfireLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DancingLightsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DruidcraftLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EldritchBlastLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FireBoltLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FrostbiteLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GuidanceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GustLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LightLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MageHandLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagicStoneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MendingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MessageLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MindSliverLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MinorIllusionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MoldEarthLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PoisonSprayLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PrestidigitationLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ProduceFlameLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RayOfFrostLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ResistanceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SacredFlameLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShapeWaterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShillelaghLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShockingGraspLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpareTheDyingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ThaumaturgyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ThunderclapLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TrueStrikeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ViciousMockeryLearned");

      // LEVEL 1
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AbsorbElementsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AcidStreamLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AlarmLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AnimalFriendshipLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BaneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BeastBondLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlessLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BurningHandsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CatapultLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CharmPersonLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ColorSprayLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CommandLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ComprehendLanguagesLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CreateOrDestroyWaterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CureWoundsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DetectEvilAndGoodLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DetectMagicLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DetectPoisonAndDiseaseLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DisguiseSelfLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DivineFavorLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EarthTremorLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EntangleLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ExpeditiousRetreatLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FaerieFireLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FalseLifeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FeatherFallLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FindFamiliarLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FloatingDiskLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FogCloudLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GoodberryLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GreaseLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GuidingBoltLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HealingWordLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HellishRebukeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HeroismLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HideousLaughterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HuntersMarkLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IceKnifeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IdentifyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IllusoryScriptLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InflictWoundsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"JumpLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LongstriderLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MageArmorLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagicMissileLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ProtectionFromEvilAndGoodLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PurifyFoodAndDrinkLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SanctuaryLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShieldLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShieldOfFaithLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SilentImageLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SleepLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpeakWithAnimalsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ThunderwaveLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"UnseenServantLearned");

      // LEVEL 2
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AcidArrowLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AganazzarsScorcherLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AidLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AlterSelfLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AnimalMessengerLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ArcaneLockLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ArcanistsMagicAuraLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AuguryLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BarkskinLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlindnessDeafnessLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlurLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BrandingSmiteLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalmEmotionsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ContinualFlameLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DarknessLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DarkvisionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DetectThoughtsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DustDevilLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EarthbindLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EnhanceAbilityLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EnlargeReduceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EnthrallLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FindSteedLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FindTrapsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FlameBladeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FlamingSphereLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GentleReposeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GustOfWindLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HeatMetalLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HoldPersonLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InvisibilityLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"KnockLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LesserRestorationLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LevitateLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LocateAnimalsOrPlantsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LocateObjectLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagicMouthLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagicWeaponLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MaximiliansEarthenGraspLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MindThrustLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MirrorImageLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MistyStepLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MoonbeamLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PassWithoutTraceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PrayerOfHealingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ProtectionFromPoisonLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PyrotechnicsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RayOfEnfeeblementLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RopeTrickLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ScorchingRayLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SeeInvisibilityLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShatterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SilenceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SkywriteLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SnillocsSnowballSwarmLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpiderClimbLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpikeGrowthLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpiritualWeaponLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SuggestionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonBestialSpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WardingBondLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WardingWindLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WebLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ZoneOfTruthLearned");

      // LEVEL 3
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AnimateDeadLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BeaconOfHopeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BestowCurseLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlinkLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CallLightningLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ClairvoyanceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConjureAnimalsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CounterspellLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CreateFoodAndWaterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DaylightLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DispelMagicLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EruptingEarthLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FearLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FireballLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FlameArrowsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FlyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GaseousFormLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GlyphOfWardingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HasteLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HypnoticPatternLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LightningBoltLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagicCircleLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MajorImageLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MassHealingWordLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeldIntoStoneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MelfsMinuteMeteorsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NondetectionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PhantomSteedLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PlantGrowthLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ProtectionFromEnergyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RemoveCurseLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RevivifyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SendingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SleetStormLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SlowLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpeakWithDeadLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpeakWithPlantsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpiritGuardiansLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpiritShroudLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StinkingCloudLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonFeySpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonShadowSpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonUndeadSpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TinyHutLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TonguesLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"VampiricTouchLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WallOfSandLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WallOfWaterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WaterBreathingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WaterWalkLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WindWallLearned");

      // LEVEL 4
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ArcaneEyeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BanishmentLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlackTentaclesLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlightLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CompulsionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConfusionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConjureMinorElementalsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConjureWoodlandBeingsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ControlWaterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DeathWardLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DimensionDoorLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DivinationLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DominateBeastLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ElementalBaneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FabricateLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FaithfulHoundLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FireShieldLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FreedomOfMovementLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantInsectLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GreaterInvisibilityLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GuardianOfFaithLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HallucinatoryTerrainLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IceStormLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IntellectFortressLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LocateCreatureLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PhantasmalKillerLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PolymorphLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PrivateSanctumLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ResilientSphereLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SecretChestLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StoneShapeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StoneskinLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StormSphereLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonAberrantSpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonElementalSpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"VitriolicSphereLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WallOfFireLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WaterySphereLearned");
      
      // LEVEL 5
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AnimateObjectsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AntilifeShellLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ArcaneHandLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AwakenLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CloudkillLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CommuneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CommuneWithNatureLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConeOfColdLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConjureElementalLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ContactOtherPlaneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ContagionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ControlWindsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CreationLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DispelEvilAndGoodLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DominatePersonLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DreamLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FlameStrikeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GeasLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GreaterRestorationLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HallowLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HoldMonsterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ImmolationLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InsectPlagueLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LegendLoreLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MaelstromLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MassCureWoundsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MisleadLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ModifyMemoryLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PasswallLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PlanarBindingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RaiseDeadLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ReincarnateLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ScryingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SeemingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonCelestialSpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TelekinesisLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TelepathicBondLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TeleportationCircleLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TransmuteRockLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TreeStrideLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WallOfForceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WallOfStoneLearned");

      // LEVEL 6
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BladeBarrierLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BonesOfTheEarthLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ChainLightningLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CircleOfDeathLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConjureFeyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ContingencyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CreateUndeadLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DisintegrateLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EyebiteLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FindThePathLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FleshToStoneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ForbiddanceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FreezingSphereLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GlobeOfInvulnerabilityLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GuardsAndWardsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HarmLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HealLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HeroesFeastLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InstantSummonsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InvestitureOfFlameLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InvestitureOfIceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InvestitureOfStoneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InvestitureOfWindLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagicJarLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MassSuggestionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MoveEarthLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"OtherworldlyFormLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"OttosIrresistibleDanceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PlanarAllyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PrimordialWardLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ProgrammedIllusionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SummonFiendishSpiritLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SunbeamLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TransportViaPlantsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TrueSeeingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WallOfIceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WallOfThornsLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WindWalkLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WordOfRecallLearned");

      // LEVEL 7
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConjureCelestialLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DelayedBlastFireballLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DivineWordLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EtherealnessLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FingerOfDeathLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FireStormLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ForcecageLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagnificentMansionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MirageArcaneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MordenkainensSwordLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PlaneShiftLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PrismaticSprayLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ProjectImageLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RegenerateLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ResurrectionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ReverseGravityLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SequesterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SimulacrumLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SymbolLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TeleportLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WhirlwindLearned");

      // LEVEL 8
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AbiDalzimsHorridWiltingLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AnimalShapesLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AntimagicFieldLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AntipathySympathyLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CloneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ControlWeatherLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DemiplaneLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DominateMonsterLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EarthquakeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FeeblemindLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GlibnessLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HolyAuraLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IncendiaryCloudLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MazeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MindBlankLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PowerWordStunLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SunburstLearned");

      // LEVEL 9
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AstralProjectionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ForesightLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GateLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ImprisonmentLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MassHealLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MeteorSwarmLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PowerWordKillLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PrismaticWallLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShapechangeLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StormOfVengeanceLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TimeStopLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TruePolymorphLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TrueResurrectionLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WeirdLearned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WishLearned");

      // CUSTOM SPELL
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50Learned");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell1Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell2Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell3Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell4Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell5Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell6Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell7Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell8Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell9Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell10Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell11Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell12Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell13Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell14Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell15Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell16Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell17Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell18Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell19Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell20Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell21Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell22Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell23Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell24Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell25Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell26Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell27Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell28Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell29Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell30Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell31Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell32Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell33Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell34Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell35Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell36Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell37Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell38Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell39Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell40Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell41Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell42Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell43Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell44Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell45Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell46Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell47Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell48Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell49Duration");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50Name");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50SpellLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50Description");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50Damage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50Healing");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50Range");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CustomSpell50Duration");

      // MONSTER ENCOUNTERS
      // LEVEL 0
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AwakenedShrub");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Baboon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Badger");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Bat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Cat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Commoner");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Crab");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Deer");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Eagle");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Frog");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantFireBeetle");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Goat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Hawk");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Homunculus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Hyena");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Jackal");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Lemure");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Lizard");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Octopus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Owl");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Quipper");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Rat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Raven");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Scorpion");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SeaHorse");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Shrieker");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Spider");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Vulture");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Weasel");
      
      // LEVEL 1/8
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Bandit");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BloodHawk");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Camel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Cultist");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FlyingSnake");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantCrab");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantRat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantWeasel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Guard");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Kobold");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Mastiff");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Merfolk");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Mule");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Noble");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PoisonousSnake");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Pony");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Stirge");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TribalWarrior");
      
      // LEVEL 1/4
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Acolyte");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AxeBeak");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlinkDog");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Boar");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ConstrictorSnake");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DraftHorse");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Dretch");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DrowElf");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Elk");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FlyingSword");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantBadger");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantBat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantCentipede");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantFrog");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantLizard");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantOwl");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantPoisonousSnake");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantWolfSpider");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Goblin");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Grimlock");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Panther");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Pseudodragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RidingHorse");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Skeleton");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Sprite");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SteamMephit");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SwarmOfBats");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SwarmOfRats");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SwarmOfRavens");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"VioletFungus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Wolf");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Zombie");
      
      // LEVEL 1/2
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ape");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlackBear");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Cockatrice");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Crocodile");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Darkmantle");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DeepGnome");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DustMephit");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantGoat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantSeaHorse");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantWasp");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Gnoll");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GrayOoze");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Hobgoblin");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IceMephit");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Lizardfolk");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MagmaMephit");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Magmin");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Orc");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ReefShark");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RustMonster");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Sahuagin");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Satyr");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Scout");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Shadow");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SwarmOfInsects");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Thug");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Warhorse");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WarhorseSkeleton");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Worg");

      // LEVEL 1
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AnimatedArmor");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BrassDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BrownBear");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Bugbear");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CopperDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DeathDog");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DireWolf");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Dryad");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Duergar");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ghoul");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantEagle");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantHyena");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantOctopus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantSpider");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantToad");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantVulture");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Harpy");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Hippogriff");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Imp");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Lion");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Quasit");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Specter");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Spy");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SwarmOfQuippers");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Tiger");

      // LEVEL 2
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ankheg");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AwakenedTree");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Azer");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BanditCaptain");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Berserker");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlackDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BronzeDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Centaur");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CultFanatic");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Druid");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ettercap");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Gargoyle");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GelatinousCube");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ghast");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantBoar");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantConstrictorSnake");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantElk");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GibberingMouther");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GreenDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Grick");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Griffon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HunterShark");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Merrow");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Mimic");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MinotaurSkeleton");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"OchreJelly");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ogre");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"OgreZombie");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Pegasus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Plesiosaurus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PolarBear");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Priest");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Rhinoceros");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RugOfSmothering");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SaberToothedTiger");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SeaHag");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SilverDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SwarmOfPoisonousSnakes");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Wererat");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WhiteDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WillOWisp");

      // LEVEL 3
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Basilisk");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BeardedDevil");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlueDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Doppelganger");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantScorpion");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GoldDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GreenHag");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HellHound");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"KillerWhale");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Knight");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Manticore");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Minotaur");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Mummy");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Nightmare");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Owlbear");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PhaseSpider");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Veteran");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Werewolf");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Wight");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WinterWolf");

      // LEVEL 4
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlackPudding");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Chuul");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Couatl");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Elephant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ettin");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Ghost");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Lamia");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"RedDragonWyrmling");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SuccubusIncubus");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Wereboar");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Weretiger");

      // LEVEL 5
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AirElemental");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BarbedDevil");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Bulette");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EarthElemental");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FireElemental");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FleshGolem");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantCrocodile");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantShark");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Gladiator");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Gorgon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HalfRedDragonVeteran");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HillGiant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NightHag");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Otyugh");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Roper");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Salamander");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShamblingMound");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Triceratops");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Troll");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Unicorn");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"VampireSpawn");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WaterElemental");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Werebear");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Wraith");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Xorn");

      // LEVEL 6
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Chimera");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Drider");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"InvisibleStalker");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Mage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Mammoth");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Medusa");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Vrock");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Wyvern");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungBrassDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungWhiteDragon");

      // LEVEL 7
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GiantApe");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Oni");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShieldGuardian");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StoneGiant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungBlackDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungCopperDragon");

      // LEVEL 8
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Assassin");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ChainDevil");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Cloaker");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FrostGiant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Hezrou");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Hydra");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"SpiritNaga");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"TyrannosaurusRex");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungBronzeDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungGreenDragon");

      // LEVEL 9
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BoneDevil");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ClayGolem");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CloudGiant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"FireGiant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Glabrezu");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Treant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungBlueDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungSilverDragon");

      // LEVEL 10
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Aboleth");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Deva");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"GuardianNaga");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StoneGolem");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungGoldDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"YoungRedDragon");

      // LEVEL 11
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Behir");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Djinni");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Efreeti");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Gynosphinx");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HornedDevil");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Remorhaz");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Roc");

      // LEVEL 12
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Archmage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Erinyes");

      // LEVEL 13
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultBrassDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultWhiteDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Nalfeshnee");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Rakshasa");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"StormGiant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Vampire");

      // LEVEL 14
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultBlackDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultCopperDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IceDevil");

      // LEVEL 15
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultBronzeDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultGreenDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MummyLord");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PurpleWorm");

      // LEVEL 16
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultBlueDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultSilverDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IronGolem");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Marilith");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Planetar");

      // LEVEL 17
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultGoldDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AdultRedDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Androsphinx");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"DragonTurtle");

      // LEVEL 19
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Balor");

      // LEVEL 20
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientBrassDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientWhiteDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PitFiend");

      // LEVEL 21
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientBlackDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientCopperDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Lich");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Solar");

      // LEVEL 22
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientBronzeDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientGreenDragon");

      // LEVEL 23
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientBlueDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientSilverDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Kraken");

      // LEVEL 24
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientGoldDragon");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AncientRedDragon");

      // LEVEL 30
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Tarrasque");

      // NOTES
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"Notes");

      // LIBRARIES
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WasAtLibraries");

      // ALCHEMY LIBRARY
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CanCreatePotions");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AlchemyLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"AlchemyLevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextAlchemyLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PotionsCreated");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedPotionsCreated");

      // BLACKSMITHING LIBRARY
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CanForge");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"BlacksmithingLevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextBlacksmithingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ItemsBlacksmithed");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedItemsBlacksmithed");

      // ENCHANTING LIBRARY
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CanEnchant");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EnchantingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"EnchantingLevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextEnchantingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ItemsEnchanted");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedItemsEnchanted");

      // LOCKPICKING LIBRARY
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CanLockpick");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LockpickingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LockpickingLevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextLockpickingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"LocksPicked");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedLocksPicked");

      // PICKPOCKETING LIBRARY
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CanPickpocket");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PickpocketingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PickpocketingLevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextPickpocketingLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"PocketsPicked");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedPocketsPicked");

      // VAMPIRIC LIBRARY
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IsInfectedVampiric");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"VampiricLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"VampiricLevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextVampiricLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"HumanoidsBloodSucked");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedHumanoidsBloodSucked");

      // WERECREATURE LIBRARY
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"IsInfectedWerecreature");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WerecreatureLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WerecreatureLevelUpPercentage");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"NextWerecreatureLevel");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"WerecreatureType");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"MaimedHumanoids");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"CalculatedMaimedHumanoids");

      // CHARACTER SETTINGS
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"QuickViewCount");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShowCharacterName");
      localStorage.removeItem(localStorage.currentlySelectedCharacter+"ShowCharacterLevel");

    },
    async getCurrentlySelectedCharacterName() {
      await setTimeout(function() {}, 1000);

      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"Name") !== undefined
      && localStorage.getItem(localStorage.currentlySelectedCharacter+"Name") !== null
      && localStorage.getItem(localStorage.currentlySelectedCharacter+"Name") !== "") {
        this.currentlySelectedCharacterName = localStorage.getItem(localStorage.currentlySelectedCharacter+"Name")
      } else {
        this.currentlySelectedCharacterName = "UNNAMED CHARACTER"
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 960px) {
  .panel.panel-right {
    border-left: 1px solid #b2b2b2;
  }
}

#spell-cover {
  width: 100%;
  height: 45px;
  margin-top: 263px;
  position: absolute;
  z-index: 10;
  cursor: pointer;
}

.panel-right .page {
  margin-top: 44px;
  padding-bottom: 44px;
}

.list {
  margin-top: -27px !important;
}
</style>
