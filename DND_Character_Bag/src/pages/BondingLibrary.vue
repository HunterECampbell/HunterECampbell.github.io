<template>
  <f7-page name="bondingLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link :href="coinsBondingOrLibraries" @click="updateWasAtLibraries">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Bonding Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>
      <h2 v-show="isTamedCreature">{{ ownedDragon }}</h2>
      <h2 v-show="!isTamedCreature">{{ researchDragon }}</h2>

      <f7-list accordion-list>
        <f7-list-item accordion-item title="Dragons">
          <f7-accordion-content>
            <f7-list class="selection-list" inline-labels>
              <f7-list-item
                radio
                radio-icon="start"
                title="Dark Dragon"
                name="demo-radio-start"
                id="dark"
                @click="updateSelectedDragon('dark')"
                @change="save('dark')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="Death Dragon"
                name="demo-radio-start"
                id="death"
                @click="updateSelectedDragon('death')"
                @change="save('death')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="Fire Dragon"
                name="demo-radio-start"
                id="fire"
                @click="updateSelectedDragon('fire')"
                @change="save('fire')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="Gold Dragon"
                name="demo-radio-start"
                id="gold"
                @click="updateSelectedDragon('gold')"
                @change="save('gold')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="Ground Dragon"
                name="demo-radio-start"
                id="ground"
                @click="updateSelectedDragon('ground')"
                @change="save('ground')"
              ></f7-list-item>
              <f7-list-item
                radio
                radio-icon="start"
                title="Red Hot Iron Dragon"
                name="demo-radio-start"
                id="red-hot-iron"
                @click="updateSelectedDragon('red-hot-iron')"
                @change="save('red-hot-iron')"
              ></f7-list-item>
            </f7-list>
          </f7-accordion-content>
        </f7-list-item>
      </f7-list>

      <f7-list v-show="selectedDragon !== 'none' && selectedDragon !== null && selectedDragon !== undefined">
        <f7-list-item link="#" popup-open="#Kindness" :title="kindness"></f7-list-item>
        <f7-list-item link="#" popup-open="#Fear" :title="fear"></f7-list-item>
        <f7-list-item link="#" popup-open="#Anger" :title="anger"></f7-list-item>
        <f7-list-item link="#" popup-open="#Bravery" :title="bravery"></f7-list-item>
        <f7-list-item link="#" popup-open="#Teamwork" :title="teamwork"></f7-list-item>
      </f7-list>

      <f7-popup id="Kindness" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar>
            <f7-nav-left>
              <f7-link popup-close>
                <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
              </f7-link>
            </f7-nav-left>
            <f7-nav-title>{{ kindness }}</f7-nav-title>
          </f7-navbar>
          <f7-block>
            <p><b :class="fearLevel >= 30 || angerLevel >= 30 ? 'red-text' : ''">If Fear and/or Anger level is greater than 30, then Kindness cannot progress past level 30.  Only a proper sacrifice to show the dragon kindness can overcome this and will set Fear and/or Anger back to level 30.</b></p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 10, 'colored-white-text': kindnessLevel >= 10 && currentCharacterColor === '--white' }">Level 10</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 10, 'colored-white-text': kindnessLevel >= 10 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 10, 'colored-white-text': kindnessLevel >= 10 && currentCharacterColor === '--white' }">Lesser Gift</b> — Will bring you a random, iron level gift once per day.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 20, 'colored-white-text': kindnessLevel >= 20 && currentCharacterColor === '--white' }">Level 20</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 20, 'colored-white-text': kindnessLevel >= 20 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 20, 'colored-white-text': kindnessLevel >= 20 && currentCharacterColor === '--white' }">Lesser Healing</b> — Will heal you 7HP once per battle on command.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 30, 'colored-white-text': kindnessLevel >= 30 && currentCharacterColor === '--white' }">Level 30</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 30, 'colored-white-text': kindnessLevel >= 30 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 30, 'colored-white-text': kindnessLevel >= 30 && currentCharacterColor === '--white' }">Bartering</b> — Will look cute enough to help you barter for 100GP cheaper once per shop per day.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 40, 'colored-white-text': kindnessLevel >= 40 && currentCharacterColor === '--white' }">Level 40</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 40, 'colored-white-text': kindnessLevel >= 40 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 40, 'colored-white-text': kindnessLevel >= 40 && currentCharacterColor === '--white' }">Gift</b> — Will now bring you a random, mithril level gift once per day instead of an iron level gift.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 50, 'colored-white-text': kindnessLevel >= 50 && currentCharacterColor === '--white' }">Level 50</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 50, 'colored-white-text': kindnessLevel >= 50 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 50, 'colored-white-text': kindnessLevel >= 50 && currentCharacterColor === '--white' }">Healing</b> — Will heal you 15HP once per encounter on command.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 60, 'colored-white-text': kindnessLevel >= 60 && currentCharacterColor === '--white' }">Level 60</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 60, 'colored-white-text': kindnessLevel >= 60 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 60, 'colored-white-text': kindnessLevel >= 60 && currentCharacterColor === '--white' }">Constitutional Gain</b> — Dragons total HP increases by 25HP.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 70, 'colored-white-text': kindnessLevel >= 70 && currentCharacterColor === '--white' }">Level 70</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 70, 'colored-white-text': kindnessLevel >= 70 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 70, 'colored-white-text': kindnessLevel >= 70 && currentCharacterColor === '--white' }">Greater Gift</b> — Will now bring you a random, adamantium level gift once per day.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 80, 'colored-white-text': kindnessLevel >= 80 && currentCharacterColor === '--white' }">Level 80</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 80, 'colored-white-text': kindnessLevel >= 80 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 80, 'colored-white-text': kindnessLevel >= 80 && currentCharacterColor === '--white' }">Greater Bartering</b> — Will look cute enough to help you barter for 1,000GP cheaper once per shop per day.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 90, 'colored-white-text': kindnessLevel >= 90 && currentCharacterColor === '--white' }">Level 90</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 90, 'colored-white-text': kindnessLevel >= 90 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 90, 'colored-white-text': kindnessLevel >= 90 && currentCharacterColor === '--white' }">Armor Builder</b> — Will shed 1 dragon scale once per day. Can be sold or used in crafting dragon weapons and armor</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': kindnessLevel >= 100, 'colored-white-text': kindnessLevel >= 100 && currentCharacterColor === '--white' }">Level 100</h3>
            <p class="move-higher" :class="{ 'colored-text': kindnessLevel >= 100, 'colored-white-text': kindnessLevel >= 100 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': kindnessLevel >= 100, 'colored-white-text': kindnessLevel >= 100 && currentCharacterColor === '--white' }">Greater Healing</b> — Will heal you 40HP once per encounter on command.</p>

          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="Fear" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar>
            <f7-nav-left>
              <f7-link popup-close>
                <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
              </f7-link>
            </f7-nav-left>
            <f7-nav-title>{{ fear }}</f7-nav-title>
          </f7-navbar>
          <f7-block>
            <p><b :class="kindnessLevel >= 30 || braveryLevel >= 30 ? 'red-text' : ''">If Kindness and/or Bravery level is greater than 30, then Fear cannot progress past level 30.  Only a proper sacrifice to show the dragon true fear can overcome this and will set Kindness and/or Bravery back to level 30.</b></p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 10, 'colored-white-text': fearLevel >= 10 && currentCharacterColor === '--white' }">Level 10</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 10, 'colored-white-text': fearLevel >= 10 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 10, 'colored-white-text': fearLevel >= 10 && currentCharacterColor === '--white' }">Lesser Dodge</b> — Can dodge 1 attack once per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 20, 'colored-white-text': fearLevel >= 20 && currentCharacterColor === '--white' }">Level 20</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 20, 'colored-white-text': fearLevel >= 20 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 20, 'colored-white-text': fearLevel >= 20 && currentCharacterColor === '--white' }">Lesser Self Healing</b> — Will heal itself 10HP once per battle on command.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 30, 'colored-white-text': fearLevel >= 30 && currentCharacterColor === '--white' }">Level 30</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 30, 'colored-white-text': fearLevel >= 30 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 30, 'colored-white-text': fearLevel >= 30 && currentCharacterColor === '--white' }">Abused Bartering</b> — Will look scared enough to help you barter for 100GP cheaper once per shop per day.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 40, 'colored-white-text': fearLevel >= 40 && currentCharacterColor === '--white' }">Level 40</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 40, 'colored-white-text': fearLevel >= 40 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 40, 'colored-white-text': fearLevel >= 40 && currentCharacterColor === '--white' }">Dodge</b> — Can dodge 3 attacks per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 50, 'colored-white-text': fearLevel >= 50 && currentCharacterColor === '--white' }">Level 50</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 50, 'colored-white-text': fearLevel >= 50 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 50, 'colored-white-text': fearLevel >= 50 && currentCharacterColor === '--white' }">Self Healing</b> — Will heal itself 25HP once per encounter on command.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 60, 'colored-white-text': fearLevel >= 60 && currentCharacterColor === '--white' }">Level 60</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 60, 'colored-white-text': fearLevel >= 60 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 60, 'colored-white-text': fearLevel >= 60 && currentCharacterColor === '--white' }">Greater Constitutional Gain</b> — Dragons health increases by 50HP.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 70, 'colored-white-text': fearLevel >= 70 && currentCharacterColor === '--white' }">Level 70</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 70, 'colored-white-text': fearLevel >= 70 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 70, 'colored-white-text': fearLevel >= 70 && currentCharacterColor === '--white' }">Greater Dodge</b> — Can dodge 5 attacks per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 80, 'colored-white-text': fearLevel >= 80 && currentCharacterColor === '--white' }">Level 80</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 80, 'colored-white-text': fearLevel >= 80 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 80, 'colored-white-text': fearLevel >= 80 && currentCharacterColor === '--white' }">Greater Abused Bartering</b> — Will look scared enough to help you barter for 1,000GP cheaper once per shop per day.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 90, 'colored-white-text': fearLevel >= 90 && currentCharacterColor === '--white' }">Level 90</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 90, 'colored-white-text': fearLevel >= 90 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 90, 'colored-white-text': fearLevel >= 90 && currentCharacterColor === '--white' }">Greater Armor Builder</b> — Will shed 3 dragon scale onces per day. Can be sold or used in crafting dragon weapons and armor</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': fearLevel >= 100, 'colored-white-text': fearLevel >= 100 && currentCharacterColor === '--white' }">Level 100</h3>
            <p class="move-higher" :class="{ 'colored-text': fearLevel >= 100, 'colored-white-text': fearLevel >= 100 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': fearLevel >= 100, 'colored-white-text': fearLevel >= 100 && currentCharacterColor === '--white' }">Greater Self Healing</b> — Will heal itself 75HP once per encounter on command.</p>

          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="Anger" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar>
            <f7-nav-left>
              <f7-link popup-close>
                <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
              </f7-link>
            </f7-nav-left>
            <f7-nav-title>{{ anger }}</f7-nav-title>
          </f7-navbar>
          <f7-block>
            <p><b :class="kindnessLevel >= 30 || braveryLevel >= 30 ? 'red-text' : ''">If Kindness and/or Bravery level is greater than 30, then Anger cannot progress past level 30.  Only a proper sacrifice to show the dragon true fury can overcome this and will set Kindness and/or Bravery back to level 30.</b></p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 10, 'colored-white-text': angerLevel >= 10 && currentCharacterColor === '--white' }">Level 10</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 10, 'colored-white-text': angerLevel >= 10 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 10, 'colored-white-text': angerLevel >= 10 && currentCharacterColor === '--white' }">Worthless Gift</b> — Every day the dragon will bring a random, worthless gift to its owner.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 20, 'colored-white-text': angerLevel >= 20 && currentCharacterColor === '--white' }">Level 20</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 20, 'colored-white-text': angerLevel >= 20 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 20, 'colored-white-text': angerLevel >= 20 && currentCharacterColor === '--white' }">{{ selectedDragonAnger20 }}</b> — Permanently adds +2 to your attack roll.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 30, 'colored-white-text': angerLevel >= 30 && currentCharacterColor === '--white' }">Level 30</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 30, 'colored-white-text': angerLevel >= 30 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 30, 'colored-white-text': angerLevel >= 30 && currentCharacterColor === '--white' }">Reject Command</b> — Every 3 turns the DM will roll 1d20, if the roll is 14+ the dragon refuses to take a turn.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 40, 'colored-white-text': angerLevel >= 40 && currentCharacterColor === '--white' }">Level 40</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 40, 'colored-white-text': angerLevel >= 40 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 40, 'colored-white-text': angerLevel >= 40 && currentCharacterColor === '--white' }">Tantrum — AOE Physical Attack</b> — All enemies touching the block your dragon is standing on receive 2d8 damage.  Can be used 3 times per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 50, 'colored-white-text': angerLevel >= 50 && currentCharacterColor === '--white' }">Level 50</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 50, 'colored-white-text': angerLevel >= 50 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 50, 'colored-white-text': angerLevel >= 50 && currentCharacterColor === '--white' }">{{ selectedDragonAnger50b }}</b> — {{selectedDragonAnger50p}}  Can be used 2 times per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 60, 'colored-white-text': angerLevel >= 60 && currentCharacterColor === '--white' }">Level 60</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 60, 'colored-white-text': angerLevel >= 60 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 60, 'colored-white-text': angerLevel >= 60 && currentCharacterColor === '--white' }">{{ selectedDragonAnger60 }}</b> — Permanently adds +5 to your attack roll.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 70, 'colored-white-text': angerLevel >= 70 && currentCharacterColor === '--white' }">Level 70</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 70, 'colored-white-text': angerLevel >= 70 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 70, 'colored-white-text': angerLevel >= 70 && currentCharacterColor === '--white' }">Charge — Physical Attack</b> — Dragon charges until it hits a wall, causing all enemies within its path 2d20 damage and causing itself 1d10 damage.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 80, 'colored-white-text': angerLevel >= 80 && currentCharacterColor === '--white' }">Level 80</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 80, 'colored-white-text': angerLevel >= 80 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 80, 'colored-white-text': angerLevel >= 80 && currentCharacterColor === '--white' }">Greater Tantrum — AOE Physical Attack</b> — All enemies touching the block your dragon is standing on receive 2d12 damage.  Can be used 3 times per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 90, 'colored-white-text': angerLevel >= 90 && currentCharacterColor === '--white' }">Level 90</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 90, 'colored-white-text': angerLevel >= 90 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 90, 'colored-white-text': angerLevel >= 90 && currentCharacterColor === '--white' }">Attack Owner</b> — Will randomly swat at owner causing 1d10 damage (Every other turn the DM will roll 1d20, 14+ the owner gets swatted).</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': angerLevel >= 100, 'colored-white-text': angerLevel >= 100 && currentCharacterColor === '--white' }">Level 100</h3>
            <p class="move-higher" :class="{ 'colored-text': angerLevel >= 100, 'colored-white-text': angerLevel >= 100 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': angerLevel >= 100, 'colored-white-text': angerLevel >= 100 && currentCharacterColor === '--white' }">{{ selectedDragonAnger100b }}</b> — {{ selectedDragonAnger100p }}  Can be used 2 times per encounter.</p>

          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="Bravery" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar>
            <f7-nav-left>
              <f7-link popup-close>
                <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
              </f7-link>
            </f7-nav-left>
            <f7-nav-title>{{ bravery }}</f7-nav-title>
          </f7-navbar>
          <f7-block>
            <p><b :class="fearLevel >= 30 || angerLevel >= 30 ? 'red-text' : ''">If Fear and/or Anger level is greater than 30, then Bravery cannot progress past level 30.  Only a proper sacrifice to show the dragon true courage can overcome this and will set Fear and/or Anger back to level 30.</b></p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 10, 'colored-white-text': braveryLevel  >= 10 && currentCharacterColor === '--white' }">Level 10</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 10, 'colored-white-text': braveryLevel  >= 10 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 10, 'colored-white-text': braveryLevel  >= 10 && currentCharacterColor === '--white' }">Minor Push</b> — Pushes one enemy back by 1 square.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 20, 'colored-white-text': braveryLevel  >= 20 && currentCharacterColor === '--white' }">Level 20</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 20, 'colored-white-text': braveryLevel  >= 20 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 20, 'colored-white-text': braveryLevel  >= 20 && currentCharacterColor === '--white' }">Minor Deflection</b> — Permanently deflects 2 damage when attacked.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 30, 'colored-white-text': braveryLevel  >= 30 && currentCharacterColor === '--white' }">Level 30</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 30, 'colored-white-text': braveryLevel  >= 30 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 30, 'colored-white-text': braveryLevel  >= 30 && currentCharacterColor === '--white' }">Minor Defence</b> — AC is improved to 15.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 40, 'colored-white-text': braveryLevel  >= 40 && currentCharacterColor === '--white' }">Level 40</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 40, 'colored-white-text': braveryLevel  >= 40 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 40, 'colored-white-text': braveryLevel  >= 40 && currentCharacterColor === '--white' }">Sacrifice</b> — Will jump in the way of danger, taking half the damage.  Can do this 2 times per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 50, 'colored-white-text': braveryLevel  >= 50 && currentCharacterColor === '--white' }">Level 50</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 50, 'colored-white-text': braveryLevel  >= 50 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 50, 'colored-white-text': braveryLevel  >= 50 && currentCharacterColor === '--white' }">Deflection</b> — Permanently deflects 5 damage when attacked.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 60, 'colored-white-text': braveryLevel  >= 60 && currentCharacterColor === '--white' }">Level 60</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 60, 'colored-white-text': braveryLevel  >= 60 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 60, 'colored-white-text': braveryLevel  >= 60 && currentCharacterColor === '--white' }">Defence</b> — AC is improved to 20.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 70, 'colored-white-text': braveryLevel  >= 70 && currentCharacterColor === '--white' }">Level 70</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 70, 'colored-white-text': braveryLevel  >= 70 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 70, 'colored-white-text': braveryLevel  >= 70 && currentCharacterColor === '--white' }">Shove</b> — Pushes 3 enemies back by 3 squares.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 80, 'colored-white-text': braveryLevel  >= 80 && currentCharacterColor === '--white' }">Level 80</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 80, 'colored-white-text': braveryLevel  >= 80 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 80, 'colored-white-text': braveryLevel  >= 80 && currentCharacterColor === '--white' }">True Sacrifice</b> — Will jump in the way of danger, preventing its owner all damage and receiving the damage instead.  Can do this 2 times per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 90, 'colored-white-text': braveryLevel  >= 90 && currentCharacterColor === '--white' }">Level 90</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 90, 'colored-white-text': braveryLevel  >= 90 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 90, 'colored-white-text': braveryLevel  >= 90 && currentCharacterColor === '--white' }">Ricochet</b> — Permanently deflects 10 damage when attacked.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': braveryLevel >= 100, 'colored-white-text': braveryLevel  >= 100 && currentCharacterColor === '--white' }">Level 100</h3>
            <p class="move-higher" :class="{ 'colored-text': braveryLevel >= 100, 'colored-white-text': braveryLevel  >= 100 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': braveryLevel >= 100, 'colored-white-text': braveryLevel  >= 100 && currentCharacterColor === '--white' }">Impenetrable</b> — AC is improved to 25.</p>

          </f7-block>
        </f7-page>
      </f7-popup>

      <f7-popup id="Teamwork" :opened="popupOpened" @popup:closed="popupOpened = false">
        <f7-page>
          <f7-navbar>
            <f7-nav-left>
              <f7-link popup-close>
                <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
              </f7-link>
            </f7-nav-left>
            <f7-nav-title>{{ teamwork }}</f7-nav-title>
          </f7-navbar>
          <f7-block>
            <h3 :class="{ 'colored-text': teamworkLevel >= 10, 'colored-white-text': teamworkLevel   >= 10 && currentCharacterColor === '--white' }">Level 10</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 10, 'colored-white-text': teamworkLevel   >= 10 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 10, 'colored-white-text': teamworkLevel   >= 10 && currentCharacterColor === '--white' }">Flight</b> — Once dragon is level 3, it can carry its owner on its back and even fly with them.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 20, 'colored-white-text': teamworkLevel   >= 20 && currentCharacterColor === '--white' }">Level 20</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 20, 'colored-white-text': teamworkLevel   >= 20 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 20, 'colored-white-text': teamworkLevel   >= 20 && currentCharacterColor === '--white' }">Increased Dragon Speed</b> — Dragon’s movement speed is increased by 3 squares..</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 30, 'colored-white-text': teamworkLevel   >= 30 && currentCharacterColor === '--white' }">Level 30</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 30, 'colored-white-text': teamworkLevel   >= 30 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 30, 'colored-white-text': teamworkLevel   >= 30 && currentCharacterColor === '--white' }">{{ selectedDragonTeamwork30b }}</b> — {{ selectedDragonTeamwork30p }}</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 40, 'colored-white-text': teamworkLevel   >= 40 && currentCharacterColor === '--white' }">Level 40</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 40, 'colored-white-text': teamworkLevel   >= 40 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 40, 'colored-white-text': teamworkLevel   >= 40 && currentCharacterColor === '--white' }">{{ selectedDragonTeamwork40b }}</b> — {{ selectedDragonTeamwork40p }}  Can be used 1 time per encounter.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 50, 'colored-white-text': teamworkLevel   >= 50 && currentCharacterColor === '--white' }">Level 50</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 50, 'colored-white-text': teamworkLevel   >= 50 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 50, 'colored-white-text': teamworkLevel   >= 50 && currentCharacterColor === '--white' }">Superior Flight</b> — Flying speed increased by 6 squares.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 60, 'colored-white-text': teamworkLevel   >= 60 && currentCharacterColor === '--white' }">Level 60</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 60, 'colored-white-text': teamworkLevel   >= 60 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 60, 'colored-white-text': teamworkLevel   >= 60 && currentCharacterColor === '--white' }">Increased Owner Speed</b> — Your movement speed is increased by 3 squares.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 70, 'colored-white-text': teamworkLevel   >= 70 && currentCharacterColor === '--white' }">Level 70</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 70, 'colored-white-text': teamworkLevel   >= 70 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 70, 'colored-white-text': teamworkLevel   >= 70 && currentCharacterColor === '--white' }">{{ selectedDragonTeamwork70b }}</b> — {{ selectedDragonTeamwork70p }}</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 80, 'colored-white-text': teamworkLevel   >= 80 && currentCharacterColor === '--white' }">Level 80</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 80, 'colored-white-text': teamworkLevel   >= 80 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 80, 'colored-white-text': teamworkLevel   >= 80 && currentCharacterColor === '--white' }">Additional Species Feature</b> — Roll 1d20 for an additional species feature for your dragon.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 90, 'colored-white-text': teamworkLevel   >= 90 && currentCharacterColor === '--white' }">Level 90</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 90, 'colored-white-text': teamworkLevel   >= 90 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 90, 'colored-white-text': teamworkLevel   >= 90 && currentCharacterColor === '--white' }">Minor Magic Immunity</b> — Choose a magic immunity for yourself and your dragon.</p>
        
            <div class="line move-lower"></div>

            <h3 :class="{ 'colored-text': teamworkLevel >= 100, 'colored-white-text': teamworkLevel   >= 100 && currentCharacterColor === '--white' }">Level 100</h3>
            <p class="move-higher" :class="{ 'colored-text': teamworkLevel >= 100, 'colored-white-text': teamworkLevel   >= 100 && currentCharacterColor === '--white' }"><b :class="{ 'colored-text': teamworkLevel >= 100, 'colored-white-text': teamworkLevel   >= 100 && currentCharacterColor === '--white' }">{{ selectedDragonTeamwork100b }}</b> — {{ selectedDragonTeamwork100p }}</p>

          </f7-block>
        </f7-page>
      </f7-popup>
      
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: "BondingLibrary",
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      coinsBondingOrLibraries: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"WasAtLibraries")) === true ? "/libraries/" : "/coinsOrBonding/",
      isTamedCreature: this.$store.state.isTamedCreature,
      ownedDragon: "What dragon do you have?",
      researchDragon: "What dragon do you want to research?",
      kindness: !this.$store.state.isTamedCreature ? "Kindness" : "Kindness: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces"),
      fear: !this.$store.state.isTamedCreature ? "Fear" : "Fear: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces"),
      anger: !this.$store.state.isTamedCreature ? "Anger" : "Anger: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces"),
      bravery: !this.$store.state.isTamedCreature ? "Bravery" : "Bravery: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces"),
      teamwork: !this.$store.state.isTamedCreature ? "Teamwork" : "Teamwork: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces"),
      kindnessLevel: !this.$store.state.isTamedCreature ? 0 : JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperPieces")),
      fearLevel: !this.$store.state.isTamedCreature ? 0 : JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverPieces")),
      angerLevel: !this.$store.state.isTamedCreature ? 0 : JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"ElectrumPieces")),
      braveryLevel: !this.$store.state.isTamedCreature ? 0 : JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldPieces")),
      teamworkLevel: !this.$store.state.isTamedCreature ? 0 : JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"PlatinumPieces")),
      selectedDragon: localStorage.getItem(localStorage.currentlySelectedCharacter+"Dragon"),
      dragonName: "",
      selectedDragonAnger20: "",
      selectedDragonAnger50b: "",
      selectedDragonAnger50p: "",
      selectedDragonAnger60: "",
      selectedDragonAnger100b: "",
      selectedDragonAnger100p: "",
      selectedDragonTeamwork30b: "",
      selectedDragonTeamwork30p: "",
      selectedDragonTeamwork40b: "",
      selectedDragonTeamwork40p: "",
      selectedDragonTeamwork70b: "",
      selectedDragonTeamwork70p: "",
      selectedDragonTeamwork100b: "",
      selectedDragonTeamwork100p: "",
      popupOpened: false,
      currentCharacterColor: localStorage.getItem(localStorage.currentlySelectedCharacter+"AppColor"),
    };
  },
  methods: {
    updateWasAtLibraries() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"WasAtLibraries", false);
    },
    updateSelectedDragon(text) {
      this.selectedDragon = text;
    },
    save(dragon) {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Dragon", dragon);
      this.selectedDragon = dragon;
      this.load();
    },
    async load() {
      await document.getElementById("dark");
      await document.getElementById("death");
      await document.getElementById("fire");
      await document.getElementById("gold");
      await document.getElementById("ground");
      await document.getElementById("red-hot-iron");

      if (localStorage.getItem(localStorage.currentlySelectedCharacter+"Dragon") === undefined
      || localStorage.getItem(localStorage.currentlySelectedCharacter+"Dragon") === null) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"Dragon", "none")
      }

      let dragon = localStorage.getItem(localStorage.currentlySelectedCharacter+"Dragon");
      if (dragon !== "none") {
        document.querySelector("#"+dragon+" input").checked = true;
      }
      switch (dragon) {
        case "dark":
          this.dragonName = "Dark Dragon";
          this.ownedDragon = this.dragonName;
          this.researchDragon = "Researching: " + this.dragonName;
          this.selectedDragonAnger20 = "Spinning Darkness";
          this.selectedDragonAnger50b = "Explosive Shadow — AOE Dark Attack";
          this.selectedDragonAnger50p = "All enemies touching the block your dragon is standing on receive 2d8 Dark damage.";
          this.selectedDragonAnger60 = "Vortexed Spinning Darkness";
          this.selectedDragonAnger100b = "Extreme Dream — AOE Dark Attack";
          this.selectedDragonAnger100p = "Darkness explodes upon impact causing an additional 25 Dark damage to all enemies within a 3 square radius.";
          this.selectedDragonTeamwork30b = "Blackout";
          this.selectedDragonTeamwork30p = "Dark attacks are permanently stronger.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d4 Dark damage.";
          this.selectedDragonTeamwork40b = "Silhouette";
          this.selectedDragonTeamwork40p = "The shadows coming off your dragon will cause an enemy to miss their attack.";
          this.selectedDragonTeamwork70b = "Tangible Darkness";
          this.selectedDragonTeamwork70p = "Dark attacks are now disorienting.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d8 Dark damage and the enemy gets encompassed by darkness preventing any movement for 1 turn.";
          this.selectedDragonTeamwork100b = "Impenetrable Darkness";
          this.selectedDragonTeamwork100p = "Darkness is said to originate from the center of black holes.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d12 Dark damage.  If an enemy is hit by this darkness (which seems like an endless void) the enemy receives an additional 1d6 Dark damage per turn and can no longer move until they die or use sufficiently high magic to escape the darkness.";
          break;
        case "death":
          this.dragonName = "Death Dragon";
          this.ownedDragon = this.dragonName;
          this.researchDragon = "Researching: " + this.dragonName;
          this.selectedDragonAnger20 = "Spinning Purple Flames";
          this.selectedDragonAnger50b = "Explosive Flames of Death — AOE Death/Fire Attack";
          this.selectedDragonAnger50p = "Purple fire explodes upon impact causing an additional Death/Fire 10 damage to all enemies within a 3 square radius.";
          this.selectedDragonAnger60 = "Vortexed Spinning Purple Flames";
          this.selectedDragonAnger100b = "Disastrous Flames — AOE Death/Fire Attack";
          this.selectedDragonAnger100p = "Purple flames explode upon impact causing an additional Death/Fire 25 damage to all enemies within a 3 square radius.";
          this.selectedDragonTeamwork30b = "Crying Flames of Death";
          this.selectedDragonTeamwork30p = "Death/Fire attacks are permanently stronger.  Flames also now have a black core.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d4 Death/Fire damage.";
          this.selectedDragonTeamwork40b = "Dread";
          this.selectedDragonTeamwork40p = "The killing intent from your dragon will cause an enemy to fear death in such a way that it causes them to miss their attack.";
          this.selectedDragonTeamwork70b = "Flames of the Plague";
          this.selectedDragonTeamwork70p = "Your death penalty now only lasts 2 turns.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d8 Death/Fire damage.";
          this.selectedDragonTeamwork100b = "Reaper Flames";
          this.selectedDragonTeamwork100p = "The purple and black flames from your dragon seem to come from the call of death from the grim reaper.  Your death penalty now only lasts 1 turn.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d12 Death/Fire damage.";
          break;
        case "fire":
          this.dragonName = "Fire Dragon";
          this.ownedDragon = this.dragonName;
          this.researchDragon = "Researching: " + this.dragonName;
          this.selectedDragonAnger20 = "Spinning Fire";
          this.selectedDragonAnger50b = "Explosive Fire — AOE Fire Attack";
          this.selectedDragonAnger50p = "Fire explodes upon impact causing an additional Fire 10 damage to all enemies within a 3 square radius.";
          this.selectedDragonAnger60 = "Vortexed Spinning Fire";
          this.selectedDragonAnger100b = "Extremely Explosive Fire — AOE Fire Attack";
          this.selectedDragonAnger100p = "Fire explodes upon impact causing an additional Fire 25 damage to all enemies within a 3 square radius.";
          this.selectedDragonTeamwork30b = "Blue Flames";
          this.selectedDragonTeamwork30p = "Flames are now permanently blue.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d4 Fire damage.";
          this.selectedDragonTeamwork40b = "Mirage";
          this.selectedDragonTeamwork40p = "The heat from your dragon will cause an enemy to miss their attack.";
          this.selectedDragonTeamwork70b = "White Flames";
          this.selectedDragonTeamwork70p = "Flames are now permanently white.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d8 Fire damage.";
          this.selectedDragonTeamwork100b = "Black Flames";
          this.selectedDragonTeamwork100p = "Flames are now permanently black.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d12 Fire damage.  If an enemy is hit by these black flames (which never burn out) the enemy receives an additional 1d6 Fire damage per turn until they die or use sufficiently high magic to put it out.";
          break;
        case "gold":
          this.dragonName = "Gold Dragon";
          this.ownedDragon = this.dragonName;
          this.researchDragon = "Researching: " + this.dragonName;
          this.selectedDragonAnger20 = "Spinning Fire";
          this.selectedDragonAnger50b = "Explosive Fire — AOE Fire Attack";
          this.selectedDragonAnger50p = "Fire explodes upon impact causing an additional 10 Fire damage to all enemies within a 3 square radius.";
          this.selectedDragonAnger60 = "Vortexed Spinning Fire";
          this.selectedDragonAnger100b = "Extremely Explosive Fire — AOE Fire Attack";
          this.selectedDragonAnger100p = "Fire explodes upon impact causing an additional 25 Fire damage to all enemies within a 3 square radius.";
          this.selectedDragonTeamwork30b = "Expanded Treasury";
          this.selectedDragonTeamwork30p = "You now receive 3x gold loot.";
          this.selectedDragonTeamwork40b = "Mirage";
          this.selectedDragonTeamwork40p = "The heat from your dragon will cause an enemy to miss their attack.";
          this.selectedDragonTeamwork70b = "Blue Flames";
          this.selectedDragonTeamwork70p = "Flames are now permanently blue.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d4 Fire damage.";
          this.selectedDragonTeamwork100b = "Dragon's Pride And Joy";
          this.selectedDragonTeamwork100p = "You now receive 5x gold loot.";
          break;
        case "ground":
          this.dragonName = "Ground Dragon";
          this.ownedDragon = this.dragonName;
          this.researchDragon = "Researching: " + this.dragonName;
          this.selectedDragonAnger20 = "Spinning Rocks";
          this.selectedDragonAnger50b = "Meteor — AOE Ground Attack";
          this.selectedDragonAnger50p = "Shoots a rock which explodes upon impact causing an additional Ground 10 damage to all enemies within a 3 square radius.";
          this.selectedDragonAnger60 = "Spinning Boulders";
          this.selectedDragonAnger100b = "Extinction Meteor — AOE Ground Attack";
          this.selectedDragonAnger100p = "Giant rock explodes upon impact causing an additional 25 Ground damage to all enemies within a 3 square radius.";
          this.selectedDragonTeamwork30b = "Larger Quakes";
          this.selectedDragonTeamwork30p = "Ground permanently splits even wider.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d4 Ground damage.";
          this.selectedDragonTeamwork40b = "Dirt Cloud";
          this.selectedDragonTeamwork40p = "Your dragon releases a dirt cloud which causes an enemy to miss their attack.";
          this.selectedDragonTeamwork70b = "Earthquake";
          this.selectedDragonTeamwork70p = "Ground now splits quite wide. Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d8 Ground damage and gets stuck in the ground for 1 turn.";
          this.selectedDragonTeamwork100b = "Terrible Fissure";
          this.selectedDragonTeamwork100p = "The ground now fissures extremely wide.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d12 Ground damage.  If an enemy is hit by this attack (which permanently traps them in the ground) the enemy receives an additional 1d6 Ground damage per turn until they die or use sufficiently high magic to escape the fissure.";
          break;
        case "red-hot-iron":
          this.dragonName = "Red Hot Iron Dragon";
          this.ownedDragon = this.dragonName;
          this.researchDragon = "Researching: " + this.dragonName;
          this.selectedDragonAnger20 = "Spinning Red Hot Iron";
          this.selectedDragonAnger50b = "Explosive Molten Iron — AOE Iron/Fire Attack";
          this.selectedDragonAnger50p = "Molten iron explodes upon impact causing an additional 10 Iron/Fire damage to all enemies within a 3 square radius.";
          this.selectedDragonAnger60 = "Vortexed Red Hot Iron";
          this.selectedDragonAnger100b = "Molten Disaster — AOE Iron/Fire Attack";
          this.selectedDragonAnger100p = "Molten iron explodes upon impact causing an additional 25 Iron/Fire damage to all enemies within a 3 square radius.";
          this.selectedDragonTeamwork30b = "White Heat";
          this.selectedDragonTeamwork30p = "Iron/Fire attacks are permanently stronger.  Any enemy within a 1 Square radius receives 1d4 Iron/Fire Damage.  Also, on each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d4 Iron/Fire damage.";
          this.selectedDragonTeamwork40b = "Mirage";
          this.selectedDragonTeamwork40p = "The heat from your dragon will cause an enemy to miss their attack.";
          this.selectedDragonTeamwork70b = "Blinding Heat";
          this.selectedDragonTeamwork70p = "Iron/Fire attacks are now disorienting.  Any enemy within a 3 Square radius receives 1d8 Iron/Fire Damage.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d8 Iron/Fire damage and the enemy gets mild heat stroke, preventing any movement for 1 turn.";
          this.selectedDragonTeamwork100b = "Fierce Furnace";
          this.selectedDragonTeamwork100p = "The heat from your dragon is now similar to the core of the earth.  Any enemy within a 5 Square radius receives 1d12 Iron/Fire Damage.  Each attack, roll 1d4, if roll is 3+ then the enemy receives an additional 1d12 Iron/Fire damage.  If an enemy is hit by this attack (which seems like a crushing heat) the enemy receives an additional 1d6 Iron/Fire damage per turn and can no longer move until they die or use sufficiently high magic to escape the crushing heat.";
          break;
        default:
          break;
      };
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/bondingLibrary/") {
      this.$router.push({ path: "/bondingLibrary/" })
    }
  },
};
</script>
