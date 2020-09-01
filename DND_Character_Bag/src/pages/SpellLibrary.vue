<template>
  <f7-page name="spellLibrary">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <div id="to-spells-cover" @click="startLoading"></div>
      <f7-link id="back-to-spells" :href="spellsOrLibraries">
        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Spell Library
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>

      <!-- <SearchBar /> -->

      <f7-list accordion-list>
        
        <f7-list-item accordion-item title="Cantrips Library">
          <f7-accordion-content>
            <f7-block>
              
              <f7-list>
                <f7-list-item link="#" popup-open="#AcidSplashLibrary" title="Acid Splash"></f7-list-item>
                <f7-list-item link="#" popup-open="#ChillTouchLibrary" title="Chill Touch"></f7-list-item>
                <f7-list-item link="#" popup-open="#ControlFlamesLibrary" title="Control Flames"></f7-list-item>
                <f7-list-item link="#" popup-open="#CreateBonfireLibrary" title="Create Bonfire"></f7-list-item>
                <f7-list-item link="#" popup-open="#DancingLightsLibrary" title="Dancing Lights"></f7-list-item>
                <f7-list-item link="#" popup-open="#DruidcraftLibrary" title="Druidcraft"></f7-list-item>
                <f7-list-item link="#" popup-open="#EldritchBlastLibrary" title="Eldritch Blast"></f7-list-item>
                <f7-list-item link="#" popup-open="#FireBoltLibrary" title="Fire Bolt"></f7-list-item>
                <f7-list-item link="#" popup-open="#FrostbiteLibrary" title="Frostbite"></f7-list-item>
                <f7-list-item link="#" popup-open="#GuidanceLibrary" title="Guidance"></f7-list-item>
                <f7-list-item link="#" popup-open="#GustLibrary" title="Gust"></f7-list-item>
                <f7-list-item link="#" popup-open="#LightLibrary" title="Light"></f7-list-item>
                <f7-list-item link="#" popup-open="#MageHandLibrary" title="Mage Hand"></f7-list-item>
                <f7-list-item link="#" popup-open="#MagicStoneLibrary" title="Magic Stone"></f7-list-item>
                <f7-list-item link="#" popup-open="#MendingLibrary" title="Mending"></f7-list-item>
                <f7-list-item link="#" popup-open="#MessageLibrary" title="Message"></f7-list-item>
                <f7-list-item link="#" popup-open="#MindSliverLibrary" title="Mind Sliver"></f7-list-item>
                <f7-list-item link="#" popup-open="#MinorIllusionLibrary" title="Minor Illusion"></f7-list-item>
                <f7-list-item link="#" popup-open="#MoldEarthLibrary" title="Mold Earth"></f7-list-item>
                <f7-list-item link="#" popup-open="#PoisonSprayLibrary" title="Poison Spray"></f7-list-item>
                <f7-list-item link="#" popup-open="#PrestidigitationLibrary" title="Prestidigitation"></f7-list-item>
                <f7-list-item link="#" popup-open="#ProduceFlameLibrary" title="Produce Flame"></f7-list-item>
                <f7-list-item link="#" popup-open="#RayOfFrostLibrary" title="Ray Of Frost"></f7-list-item>
                <f7-list-item link="#" popup-open="#ResistanceLibrary" title="Resistance"></f7-list-item>
                <f7-list-item link="#" popup-open="#SacredFlameLibrary" title="Sacred Flame"></f7-list-item>
                <f7-list-item link="#" popup-open="#ShapeWaterLibrary" title="Shape Water"></f7-list-item>
                <f7-list-item link="#" popup-open="#ShillelaghLibrary" title="Shillelagh"></f7-list-item>
                <f7-list-item link="#" popup-open="#ShockingGraspLibrary" title="Shocking Grasp"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpareTheDyingLibrary" title="Spare The Dying"></f7-list-item>
                <f7-list-item link="#" popup-open="#ThaumaturgyLibrary" title="Thaumaturgy"></f7-list-item>
                <f7-list-item link="#" popup-open="#ThunderclapLibrary" title="Thunderclap"></f7-list-item>
                <f7-list-item link="#" popup-open="#TrueStrikeLibrary" title="True Strike"></f7-list-item>
                <f7-list-item link="#" popup-open="#ViciousMockeryLibrary" title="Vicious Mockery"></f7-list-item>
              </f7-list>

              <f7-popup id="AcidSplashLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Acid Splash</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AcidSplash" class="move-lower" @change="save('AcidSplash', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You hurl a bubble of acid.</p>
                    <p>Choose one or two creatures you can see within range.</p>
                    <p>If you choose two, they must be within 1 Square of each other.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6 Acid</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d6 Acid</p>
                    <p>Level 11 - 3d6 Acid</p>
                    <p>Level 17 - 4d6 Acid</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ChillTouchLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Chill Touch</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ChillTouch" class="move-lower" @change="save('ChillTouch', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a ghostly, skeletal hand in the space of a creature within range.</p>
                    <p>On a hit, the target can't regain HP until the start of your next turn.</p>
                    <p>If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d8 Necrotic</p>
                    <p>Level 11 - 3d8 Necrotic</p>
                    <p>Level 17 - 4d8 Necrotic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ControlFlamesLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Control Flames</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ControlFlames" class="move-lower" @change="save('ControlFlames', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You choose nonmagical flame that you can see within range and that fits within a 1 Square Cube that you affect it in one of the following ways:</p>
                    <ul>
                      <li>You instantaneously expand the flame 1 Square in one direction, provided that wood or other fuel is present in the new location.</li>
                      <li>You instantaneously extinguish the flames within the cube.</li>
                      <li>You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.</li>
                      <li>You cause simple shapes — such as the vague form of a creature, an inanimate object, or a location — to appear within the flames and animate as you like for up to 1 hour.</li>
                    </ul>
                    <p>If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Cubic Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CreateBonfireLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Create Bonfire</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CreateBonfire" class="move-lower" @change="save('CreateBonfire', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a bonfire on ground that you can see within range.</p>
                    <p>Until the spell ends, the magic bonfire fills a 1 Square Cube.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d8 Fire</p>
                    <p>Level 11 - 3d8 Fire</p>
                    <p>Level 17 - 4d8 Fire</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Cubic Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DancingLightsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dancing Lights</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DancingLights" class="move-lower" @change="save('DancingLights', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration.</p>
                    <p>You can also combine the four lights into one glowing vaguely humanoid form of Medium size.</p>
                    <p>Whichever form you choose, each light sheds dim light in a 2 Square radius.</p>
                    <p>As a bonus action on your turn, you can move the lights up to 12 Squares to a new spot within range.</p>
                    <p>A light must be within 4 Squares of another light created by this spell, and a light winks out if it exceeds the spell's range.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DruidcraftLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Druidcraft</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Druidcraft" class="move-lower" @change="save('Druidcraft', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Whispering to the spirits of nature, you create one of the following effects within range:</p>
                    <ul>
                      <li>You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 1 Day.</li>
                      <li>You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.</li>
                      <li>You create an instantaneous, harmless sensory effect within 1 Square Cube, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk.</li>
                      <li>You instantly light or snuff out a candle, a torch, or a small campfire.</li>
                    </ul>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EldritchBlastLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Eldritch Blast</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="EldritchBlast" class="move-lower" @change="save('EldritchBlast', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A beam of crackling energy streaks toward a creature within range.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d10 Energy</p>
                    <h3>Higher Levels</h3>
                    <p>The spell creates more than one beam when you reach higher levels.</p>
                    <p>You can direct the beams at the same target or at different ones.</p>
                    <p>Level 5 - 2 Beams</p>
                    <p>Level 11 - 3 Beams</p>
                    <p>Level 17 - 4 Beams</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FireBoltLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fire Bolt</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FireBolt" class="move-lower" @change="save('FireBolt', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You hurl a mote of fire at a creature or object within range.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d10 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d10 Fire</p>
                    <p>Level 11 - 3d10 Fire</p>
                    <p>Level 17 - 4d10 Fire</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FrostbiteLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Frostbite</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Frostbite" class="move-lower" @change="save('Frostbite', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You cause numbing frost to form on one creature that you can see within range.</p>
                    <p>Those damaged by this spell have disadvantage on the next weapon attack roll they makes before the end of their next turn.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6 Ice</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d6 Ice</p>
                    <p>Level 11 - 3d6 Ice</p>
                    <p>Level 17 - 4d6 Ice</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GuidanceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Guidance</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Guidance" class="move-lower" @change="save('Guidance', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch one willing creature.</p>
                    <p>Once before the spell ends, the target can roll a 1d4 and add the number rolled to one ability check of its choice.</p>
                    <p>It can roll the die before or after making the ability check. The spell then ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GustLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Gust</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Gust" class="move-lower" @change="save('Gust', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You seize the air and compel it to create one of the following effects at a point you can see within range:</p>
                    <ul>
                      <li>One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 1 Square away from you.</li>
                      <li>You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 2 Squares away from you. It isn’t pushed with enough force to cause damage.</li>
                      <li>You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.</li>
                    </ul>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LightLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Light</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Light" class="move-lower" @change="save('Light', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch one object that is no larger than 2 Squares in any dimension.</p>
                    <p>Until the spell ends, the object sheds bright light in a 4 Square radius and dim light for an additional 4 Squares.</p>
                    <p>The light can be colored as you like.</p>
                    <p>Completely covering the object with something opaque blocks the light.</p>
                    <p>The spell ends if you cast it again or dismiss it as an action.</p>
                    <p>If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MageHandLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mage Hand</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MageHand" class="move-lower" @change="save('MageHand', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A spectral, floating hand appears at a point you choose within range.</p>
                    <p>The hand lasts for the duration or until you dismiss it as an action.</p>
                    <p>The hand vanishes if it is ever more than 6 Squares away from you or if you cast this spell again.</p>
                    <p>You can use your action to control the hand.</p>
                    <p>You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.</p>
                    <p>You can move the hand up to 6 Squares each time you use it.</p>
                    <p>The hand can't attack, activate magic items, or carry more than 10 pounds.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MagicStoneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Magic Stone</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MagicStone" class="move-lower" @change="save('MagicStone', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch one to three pebbles and imbue them with magic.</p>
                    <p>You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling.</p>
                    <p>If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker’s, to the attack roll.</p>
                    <p>Hit or miss, the spell then ends on the stone.</p>
                    <p>If you cast this spell again, the spell ends early on any pebbles still affected by it.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6 + Your Spellcasting Bonus</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch and then 12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MendingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mending</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Mending" class="move-lower" @change="save('Mending', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin.</p>
                    <p>As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.</p>
                    <p>This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MessageLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Message</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Message" class="move-lower" @change="save('Message', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You point your finger toward a creature within range and whisper a message.</p>
                    <p>The target (and only the target) hears the message and can reply in a whisper that only you can hear.</p>
                    <p>You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier.</p>
                    <p>Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell.</p>
                    <p>The spell doesn't have to follow a straight line and can travel freely around corners or through openings.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MindSliverLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mind Sliver</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MindSliver" class="move-lower" @change="save('MindSliver', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You drive a disorienting spike of psychic energy into the mind of one creature you can see within range.</p>
                    <p>Roll 1d4 and add the number rolled to your attack roll.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6 Psychic</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d6 Psychic</p>
                    <p>Level 11 - 3d6 Psychic</p>
                    <p>Level 17 - 4d6 Psychic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MinorIllusionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Minor Illusion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MinorIllusion" class="move-lower" @change="save('MinorIllusion', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a sound or an image of an object within range that lasts for the duration.</p>
                    <p>The illusion also ends if you dismiss it as an action or cast this spell again.</p>
                    <p>If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.</p>
                    <p>If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 1 Square Cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.</p>
                    <p>If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence check against your spellcasting level. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Cubic Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MoldEarthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mold Earth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MoldEarth" class="move-lower" @change="save('MoldEarth', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You choose a portion of dirt or stone that you can see within range and that fits within a 1 Square Cube. You manipulate it in one of the following ways:</p>
                    <ul>
                      <li>If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 1 Square away. This movement doesn’t have enough force to cause damage.</li>
                      <li>You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.</li>
                      <li>If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.</li>
                    </ul>
                    <p>If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Cubic Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PoisonSprayLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Poison Spray</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PoisonSpray" class="move-lower" @change="save('PoisonSpray', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d12 Poison</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d12 Poison</p>
                    <p>Level 11 - 3d12 Poison</p>
                    <p>Level 17 - 4d12 Poison</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PrestidigitationLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Prestidigitation</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Prestidigitation" class="move-lower" @change="save('Prestidigitation', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:</p>
                    <ul>
                      <li>You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.</li>
                      <li>You instantaneously light or snuff out a candle, a torch, or a small campfire.</li>
                      <li>You instantaneously clean or soil an object no larger than 1 cubic foot.</li>
                      <li>You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.</li>
                      <li>You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.</li>
                      <li>You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.</li>
                    </ul>
                    <p>If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d8 Necrotic</p>
                    <p>Level 11 - 3d8 Necrotic</p>
                    <p>Level 17 - 4d8 Necrotic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ProduceFlameLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Produce Flame</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ProduceFlame" class="move-lower" @change="save('ProduceFlame', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment.</p>
                    <p>The flame sheds bright light in a 2 Square radius and dim light for an additional 2 Squares. The spell ends if you dismiss it as an action or if you cast it again.</p>
                    <p>You can also attack with the flame, although doing so ends the spell.</p>
                    <p>The spell ends if you dismiss it as an action or if you cast it again.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d8 Fire</p>
                    <p>Level 11 - 3d8 Fire</p>
                    <p>Level 17 - 4d8 Fire</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self and/or 6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="RayOfFrostLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Ray Of Frost</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="RayOfFrost" class="move-lower" @change="save('RayOfFrost', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A frigid beam of blue-white light streaks toward a creature within range.</p>
                    <p>On a hit the targets speed is reduced by 2 Squares until the start of your next turn.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 Ice</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d8 Ice</p>
                    <p>Level 11 - 3d8 Ice</p>
                    <p>Level 17 - 4d8 Ice</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ResistanceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Resistance</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Resistance" class="move-lower" @change="save('Resistance', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch one willing creature.</p>
                    <p>Once before the spell ends, the target can roll 1d4 and add the number rolled to one saving throw of its choice.</p>
                    <p>It can roll the die before or after making the saving throw. The spell then ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SacredFlameLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sacred Flame</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SacredFlame" class="move-lower" @change="save('SacredFlame', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Flame-like radiance descends on a creature that you can see within range.</p>
                    <p>The target gains no benefit from cover for this attack.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 Light</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d8 Light</p>
                    <p>Level 11 - 3d8 Light</p>
                    <p>Level 17 - 4d8 Light</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ShapeWaterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Shape Water</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ShapeWater" class="move-lower" @change="save('ShapeWater', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You choose an area of water that you can see within range and that fits within a 1 Square Cube. You manipulate it in one of the following ways:</p>
                    <ul>
                      <li>You instantaneously move or otherwise change the flow of the water as you direct, up to 1 Square in any direction. This movement doesn’t have enough force to cause damage.</li>
                      <li>You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.</li>
                      <li>You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.</li>
                      <li>You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.</li>
                    </ul>
                    <p>If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Cubic Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ShillelaghLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Shillelagh</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Shillelagh" class="move-lower" @change="save('Shillelagh', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>The wood of a club or quarterstaff you are holding is imbued with nature's power.</p>
                    <p>For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon</p>
                    <p>The weapon's damage die becomes 1d8.</p>
                    <p>The weapon also becomes magical, if it isn't already.</p>
                    <p>The spell ends if you cast it again or if you let go of the weapon.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ShockingGraspLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Shocking Grasp</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ShockingGrasp" class="move-lower" @change="save('ShockingGrasp', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Lightning springs from your hand to deliver a shock to a creature you try to touch.</p>
                    <p>You have advantage on the attack roll if the target is wearing armor made of metal.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 Electric</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d8 Electric</p>
                    <p>Level 11 - 3d8 Electric</p>
                    <p>Level 17 - 4d8 Electric</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpareTheDyingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Spare The Dying</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpareTheDying" class="move-lower" @change="save('SpareTheDying', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a living creature that has 0 HP. The creature becomes stable.</p>
                    <p>This spell has no effect on undead or constructs.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ThaumaturgyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Thaumaturgy</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Thaumaturgy" class="move-lower" @change="save('Thaumaturgy', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:</p>
                    <ul>
                      <li>Your voice booms up to three times as loud as normal for 1 minute.</li>
                      <li>You cause flames to flicker, brighten, dim, or change color for 1 minute.</li>
                      <li>You cause harmless tremors in the ground for 1 minute.</li>
                      <li>You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.</li>
                      <li>You instantaneously cause an unlocked door or window to fly open or slam shut.</li>
                      <li>You alter the appearance of your eyes for 1 minute.</li>
                    </ul>
                    <p>If you cast this spell multiple times, you can have up to three of its 1 Minute effects active at a time, and you can dismiss such an effect as an action.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ThunderclapLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Thunderclap</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Thunderclap" class="move-lower" @change="save('Thunderclap', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a burst of thunderous sound that can be heard up to 20 Squares away.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6 Electric</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d6 Electric</p>
                    <p>Level 11 - 3d6 Electric</p>
                    <p>Level 17 - 4d6 Electric</p>

                    <h2 class="move-lower">Range</h2>
                    <p>1 Square</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TrueStrikeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>True Strike</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TrueStrike" class="move-lower" @change="save('TrueStrike', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You point a finger at a target in range.</p>
                    <p>Your magic grants you a brief insight into the target's defenses.</p>
                    <p>On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ViciousMockeryLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Vicious Mockery</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ViciousMockery" class="move-lower" @change="save('ViciousMockery', 'Cantrips')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You unleash a string of insults laced with subtle enchantments at a creature you can see within range.</p>
                    <p>This spell only works if the target can hear you.</p>
                    <p>Targets damaged by this spell have disadvantage on the next attack roll it makes before the end of its next turn.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d4 Psychic</p>
                    <h3>Higher Levels</h3>
                    <p>Level 5 - 2d4 Psychic</p>
                    <p>Level 11 - 3d4 Psychic</p>
                    <p>Level 17 - 4d4 Psychic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 1 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#AbsorbElementsLibrary" title="Absorb Elements"></f7-list-item>
                <f7-list-item link="#" popup-open="#AcidStreamLibrary" title="Acid Stream"></f7-list-item>
                <f7-list-item link="#" popup-open="#AlarmLibrary" title="Alarm"></f7-list-item>
                <f7-list-item link="#" popup-open="#AnimalFriendshipLibrary" title="Animal Friendship"></f7-list-item>
                <f7-list-item link="#" popup-open="#BaneLibrary" title="Bane"></f7-list-item>
                <f7-list-item link="#" popup-open="#BeastBondLibrary" title="Beast Bond"></f7-list-item>
                <f7-list-item link="#" popup-open="#BlessLibrary" title="Bless"></f7-list-item>
                <f7-list-item link="#" popup-open="#BurningHandsLibrary" title="Burning Hands"></f7-list-item>
                <f7-list-item link="#" popup-open="#CatapultLibrary" title="Catapult"></f7-list-item>
                <f7-list-item link="#" popup-open="#CharmPersonLibrary" title="Charm Person"></f7-list-item>
                <f7-list-item link="#" popup-open="#ColorSprayLibrary" title="Color Spray"></f7-list-item>
                <f7-list-item link="#" popup-open="#CommandLibrary" title="Command"></f7-list-item>
                <f7-list-item link="#" popup-open="#ComprehendLanguagesLibrary" title="Comprehend Languages"></f7-list-item>
                <f7-list-item link="#" popup-open="#CreateOrDestroyWaterLibrary" title="Create Or Destroy Water"></f7-list-item>
                <f7-list-item link="#" popup-open="#CureWoundsLibrary" title="Cure Wounds"></f7-list-item>
                <f7-list-item link="#" popup-open="#DetectEvilAndGoodLibrary" title="Detect Evil And Good"></f7-list-item>
                <f7-list-item link="#" popup-open="#DetectMagicLibrary" title="Detect Magic"></f7-list-item>
                <f7-list-item link="#" popup-open="#DetectPoisonAndDiseaseLibrary" title="Detect Poison And Disease"></f7-list-item>
                <f7-list-item link="#" popup-open="#DisguiseSelfLibrary" title="Disguise Self"></f7-list-item>
                <f7-list-item link="#" popup-open="#DivineFavorLibrary" title="Divine Favor"></f7-list-item>
                <f7-list-item link="#" popup-open="#EarthTremorLibrary" title="Earth Tremor"></f7-list-item>
                <f7-list-item link="#" popup-open="#EntangleLibrary" title="Entangle"></f7-list-item>
                <f7-list-item link="#" popup-open="#ExpeditiousRetreatLibrary" title="Expeditious Retreat"></f7-list-item>
                <f7-list-item link="#" popup-open="#FaerieFireLibrary" title="Faerie Fire"></f7-list-item>
                <f7-list-item link="#" popup-open="#FalseLifeLibrary" title="False Life"></f7-list-item>
                <f7-list-item link="#" popup-open="#FeatherFallLibrary" title="Feather Fall"></f7-list-item>
                <f7-list-item link="#" popup-open="#FindFamiliarLibrary" title="Find Familiar"></f7-list-item>
                <f7-list-item link="#" popup-open="#FloatingDiskLibrary" title="Floating Disk"></f7-list-item>
                <f7-list-item link="#" popup-open="#FogCloudLibrary" title="Fog Cloud"></f7-list-item>
                <f7-list-item link="#" popup-open="#GoodberryLibrary" title="Goodberry"></f7-list-item>
                <f7-list-item link="#" popup-open="#GreaseLibrary" title="Grease"></f7-list-item>
                <f7-list-item link="#" popup-open="#GuidingBoltLibrary" title="Guiding Bolt"></f7-list-item>
                <f7-list-item link="#" popup-open="#HealingWordLibrary" title="Healing Word"></f7-list-item>
                <f7-list-item link="#" popup-open="#HellishRebukeLibrary" title="Hellish Rebuke"></f7-list-item>
                <f7-list-item link="#" popup-open="#HeroismLibrary" title="Heroism"></f7-list-item>
                <f7-list-item link="#" popup-open="#HideousLaughterLibrary" title="Hideous Laughter"></f7-list-item>
                <f7-list-item link="#" popup-open="#HuntersMarkLibrary" title="Hunter's Mark"></f7-list-item>
                <f7-list-item link="#" popup-open="#IceKnifeLibrary" title="Ice Knife"></f7-list-item>
                <f7-list-item link="#" popup-open="#IdentifyLibrary" title="Identify"></f7-list-item>
                <f7-list-item link="#" popup-open="#IllusoryScriptLibrary" title="Illusory Script"></f7-list-item>
                <f7-list-item link="#" popup-open="#InflictWoundsLibrary" title="Inflict Wounds"></f7-list-item>
                <f7-list-item link="#" popup-open="#JumpLibrary" title="Jump"></f7-list-item>
                <f7-list-item link="#" popup-open="#LongstriderLibrary" title="Longstrider"></f7-list-item>
                <f7-list-item link="#" popup-open="#MageArmorLibrary" title="Mage Armor"></f7-list-item>
                <f7-list-item link="#" popup-open="#MagicMissileLibrary" title="Magic Missile"></f7-list-item>
                <f7-list-item link="#" popup-open="#ProtectionFromEvilAndGoodLibrary" title="Protection From Evil And Good"></f7-list-item>
                <f7-list-item link="#" popup-open="#PurifyFoodAndDrinkLibrary" title="Purify Food And Drink"></f7-list-item>
                <f7-list-item link="#" popup-open="#SanctuaryLibrary" title="Sanctuary"></f7-list-item>
                <f7-list-item link="#" popup-open="#ShieldLibrary" title="Shield"></f7-list-item>
                <f7-list-item link="#" popup-open="#ShieldOfFaithLibrary" title="Shield Of Faith"></f7-list-item>
                <f7-list-item link="#" popup-open="#SilentImageLibrary" title="Silent Image"></f7-list-item>
                <f7-list-item link="#" popup-open="#SleepLibrary" title="Sleep"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpeakWithAnimalsLibrary" title="Speak With Animals"></f7-list-item>
                <f7-list-item link="#" popup-open="#ThunderwaveLibrary" title="Thunderwave"></f7-list-item>
                <f7-list-item link="#" popup-open="#UnseenServantLibrary" title="Unseen Servant"></f7-list-item>
              </f7-list>

              <f7-popup id="AbsorbElementsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Absorb Elements</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AbsorbElements" class="move-lower" @change="save('AbsorbElements', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack.</p>
                    <p>You have resistance to the triggering damage type until the start of your next turn.</p>
                    <p>Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6 Type of Magic Absorbed</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Per Slot Level Above 1st</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AcidStreamLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Acid Stream</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AcidStream" class="move-lower" @change="save('AcidStream', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A stream of acid emanates from you in a line 6 Squares long and 1 Square wide in a direction you choose.</p>
                    <p>Each creature in the line gets covered in acid for the spell’s duration or until a creature uses its action to scrape or wash the acid off itself or another creature.</p>
                    <p>A creature covered in the acid takes damage at start of each of its turns.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>3d4 Acid</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d4 Per Slot Above 1st</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Lasts until washed away.</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AlarmLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Alarm</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Alarm" class="move-lower" @change="save('Alarm', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You set an alarm against unwanted intrusion.</p>
                    <p>Choose a door, a window, or an area within range that is no larger than a 4 Square Cube.</p>
                    <p>Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area.</p>
                    <p>When you cast the spell, you can designate creatures that won't set off the alarm.</p>
                    <p>You also choose whether the alarm is mental or audible.</p>
                    <p>A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.</p>
                    <p>An audible alarm produces the sound of a hand bell for 10 seconds within 12 Squares.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AnimalFriendshipLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Animal Friendship</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AnimalFriendship" class="move-lower" @change="save('AnimalFriendship', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell lets you convince a beast that you mean it no harm.</p>
                    <p>Choose a beast that you can see within range. It must see and hear you.</p>
                    <p>If the beast's Intelligence is 4 or higher you must roll for the spell's success.</p>
                    <p>If you or one of your companions harms the target, the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BaneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Bane</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Bane" class="move-lower" @change="save('Bane', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Up to three creatures of your choice that you can see within range are affected with this spell.</p>
                    <p>You must roll for success with each creature</p>
                    <p>Affected targets must roll 1d4 and subtract the number rolled from their next attack roll or saving throw.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BeastBondLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Beast Bond</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BeastBond" class="move-lower" @change="save('BeastBond', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You establish a telepathic link with one beast you touch that is friendly to you or charmed by you.</p>
                    <p>You must roll for success if the beast's Intelligence is 4 or higher.</p>
                    <p>Until the spell ends, the link is active while you and the beast are within line of sight of each other.</p>
                    <p>Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you.</p>
                    <p>While the link is active, the beast gains advantage on attack rolls against any creature within 1 Square of you that you can see.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BlessLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Bless</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Bless" class="move-lower" @change="save('Bless', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You bless up to three creatures of your choice within range.</p>
                    <p>Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll 1d4 and add the number rolled to the attack roll or saving throw.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BurningHandsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Burning Hands</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BurningHands" class="move-lower" @change="save('BurningHands', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>3d6 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Fire Per Slot Level Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>3 Square Cone</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CatapultLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Catapult</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Catapult" class="move-lower" @change="save('Catapult', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried.</p>
                    <p>The object flies in a straight line up to 18 Squares in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface.</p>
                    <p>On a successful attack, the object strikes the target and stops moving.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Per Slot Level Above 1st.</p>
                    <p>Plus 5 Pounds Per Slot Level Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CharmPersonLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Charm Person</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CharmPerson" class="move-lower" @change="save('CharmPerson', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to charm a humanoid you can see within range.</p>
                    <p>If you or your companions are fighting it you have advantage on your spell's success roll.</p>
                    <p>On success, the creature is charmed by you until the spell ends or until you or your companions do anything harmful to it.</p>
                    <p>The charmed creature regards you as a friendly acquaintance.</p>
                    <p>When the spell ends, the creature knows it was charmed by you.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</p>
                    <p>The creatures must be within 6 Squares of each other when you target them.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ColorSprayLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Color Spray</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ColorSpray" class="move-lower" @change="save('ColorSpray', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A dazzling array of flashing, colored light springs from your hand.</p>
                    <p>Roll 6d10; the total is how many HP of creatures this spell can affect.</p>
                    <p>Creatures in a 3 Square Cone originating from you are affected in ascending order of their current HP (ignoring unconscious creatures and creatures that can't see).</p>
                    <p>Starting with the creature that has the lowest current HP, each creature affected by this spell is blinded until the end of your next turn.</p>
                    <p>Subtract each creature's HP from the total before moving on to the creature with the next lowest HP.</p>
                    <p>A creature's HP must be equal to or less than the remaining total for that creature to be affected.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>6d10 Light</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 2d10 Light Per Slot Level Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>3 Square Cone</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CommandLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Command</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Command" class="move-lower" @change="save('Command', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You speak a one-word command to a creature you can see within range.</p>
                    <p>The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.</p>
                    <p>If the target can't follow your command, the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st.</p>
                    <p>The creatures must be within 6 Squares of each other when you target them.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ComprehendLanguagesLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Comprehend Languages</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ComprehendLanguages" class="move-lower" @change="save('ComprehendLanguages', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you understand the literal meaning of any spoken language that you hear.</p>
                    <p>You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.</p>
                    <p>This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CreateOrDestroyWaterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Create Or Destroy Water</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CreateOrDestroyWater" class="move-lower" @change="save('CreateOrDestroyWater', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You either create or destroy water.</p>
                    <p><b>Create Water</b> — You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 6 Square Cube within range, extinguishing exposed flames in the area.</p>
                    <p><b>Destroy Water</b> — You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 6 Square Cube within range.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 1 Square, for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares Cube</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CureWoundsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Cure Wounds</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CureWounds" class="move-lower" @change="save('CureWounds', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A creature you touch regains a number of HP equal to 1d8 + your spellcasting ability modifier.</p>
                    <p>This spell has no effect on undead or constructs.</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 2d8 Per Slot Level Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DetectEvilAndGoodLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Detect Evil And Good</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DetectEvilAndGood" class="move-lower" @change="save('DetectEvilAndGood', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 6 Squares of you, as well as where the creature is located.</p>
                    <p>Similarly, you know if there is a place or object within 6 Squares of you that has been magically consecrated or desecrated.</p>
                    <p>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Square Sphere</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DetectMagicLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Detect Magic</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DetectMagic" class="move-lower" @change="save('DetectMagic', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you sense the presence of magic within 6 Squares of you.</p>
                    <p>If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.</p>
                    <p>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Square Sphere</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DetectPoisonAndDiseaseLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Detect Poison And Disease</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DetectPoisonAndDisease" class="move-lower" @change="save('DetectPoisonAndDisease', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 6 Squares of you.</p>
                    <p>You also identify the kind of poison, poisonous creature, or disease in each case.</p>
                    <p>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Square Sphere</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DisguiseSelfLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Disguise Self</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DisguiseSelf" class="move-lower" @change="save('DisguiseSelf', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it.</p>
                    <p>You can seem 1 foot shorter or taller and can appear thin, fat, or in between.</p>
                    <p>You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.</p>
                    <p>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.</p>
                    <p>To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence check against your spellcasting level.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DivineFavorLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Divine Favor</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DivineFavor" class="move-lower" @change="save('DivineFavor', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Your prayer empowers you with divine radiance.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d4 Light Added to Weapon</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EarthTremorLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Earth Tremor</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="EarthTremor" class="move-lower" @change="save('EarthTremor', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You cause a tremor in the ground within range.</p>
                    <p>Each creature other than you in that area affected.</p>
                    <p>Affected creatures are knocked prone.</p>
                    <p>If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 1 Square Diameter portion requiring at least 1 minute to clear by hand.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d6</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EntangleLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Entangle</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Entangle" class="move-lower" @change="save('Entangle', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Grasping weeds and vines sprout from the ground in a 4 Square Area starting from a point within range.</p>
                    <p>For the duration, these plants turn the ground in the area into difficult terrain.</p>
                    <p>Creatures affected become restrained.</p>
                    <p>A creature restrained by the plants can use its action to make a Strength check against your spellcasting level. On a success, it frees itself.</p>
                    <p>When the spell ends, the conjured plants wilt away.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ExpeditiousRetreatLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Expeditious Retreat</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ExpeditiousRetreat" class="move-lower" @change="save('ExpeditiousRetreat', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell allows you to move at an incredible pace.</p>
                    <p>When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FaerieFireLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Faerie Fire</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FaerieFire" class="move-lower" @change="save('FaerieFire', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Each object in a 4 Square Cube within range is outlined in blue, green, or violet light (your choice).</p>
                    <p>Any creature in the area when the spell is cast is also outlined in light if you roll success.</p>
                    <p>For the duration, objects and affected creatures shed dim light in a 2 Square radius.</p>
                    <p>Any attack roll against an affected creature or object has advantage if the attacker can see it.</p>
                    <p>Affected creatures or objects can't benefit from being invisible.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FalseLifeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>False Life</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FalseLife" class="move-lower" @change="save('FalseLife', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary HP for the duration.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary HP for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FeatherFallLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Feather Fall</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FeatherFall" class="move-lower" @change="save('FeatherFall', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose up to five falling creatures within range.</p>
                    <p>A falling creature's rate of descent slows to 12 Squares per round until the spell ends.</p>
                    <p>If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>3 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FindFamiliarLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Find Familiar</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FindFamiliar" class="move-lower" @change="save('FindFamiliar', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel.</p>
                    <p>Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.</p>
                    <p>Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.</p>
                    <p>When the familiar drops to 0 HP, it disappears, leaving behind no physical form. It reappears after you cast this spell again.</p>
                    <p>While your familiar is within 20 Squares of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.</p>
                    <p>As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 6 Squares of you.</p>
                    <p>You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.</p>
                    <p>Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 20 Squares of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FloatingDiskLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Floating Disk</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FloatingDisk" class="move-lower" @change="save('FloatingDisk', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range.</p>
                    <p>The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.</p>
                    <p>The disk is immobile while you are within 4 Squares of it.</p>
                    <p>If you move more than 4 Squares away from it, the disk follows you so that it remains within 4 Squares of you.</p>
                    <p>It can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 2 Squares or more. For example, the disk can't move across a 2 Square deep pit, nor could it leave such a pit if it was created at the bottom.</p>
                    <p>If you move more than 20 Squares from the disk (typically because it can't move around an obstacle to follow you), the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FogCloudLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fog Cloud</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FogCloud" class="move-lower" @change="save('FogCloud', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a 4 Square Radius Sphere of fog centered on a point within range.</p>
                    <p>The sphere spreads around corners, and its area is heavily obscured.</p>
                    <p>It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 4 Square Radius Added Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GoodberryLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Goodberry</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Goodberry" class="move-lower" @change="save('Goodberry', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Up to ten berries appear in your hand and are infused with magic for the duration.</p>
                    <p>A creature can use its action to eat 1 berry.</p>
                    <p>Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.</p>
                    <p>The berries lose their potency if they have not been consumed within 1 Day of the casting of this spell.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GreaseLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Grease</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Grease" class="move-lower" @change="save('Grease', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Slick grease covers the ground in a 2 Squares Area centered on a point within range and turns it into difficult terrain for the duration.</p>
                    <p>When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone.</p>
                    <p>A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GuidingBoltLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Guiding Bolt</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GuidingBolt" class="move-lower" @change="save('GuidingBolt', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A flash of light streaks toward a creature of your choice within range.</p>
                    <p>The next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>4d6 Light</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Light Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HealingWordLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Healing Word</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HealingWord" class="move-lower" @change="save('HealingWord', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A creature of your choice that you can see within range regains HP equal to 1d4 + your spellcasting ability modifier.</p>
                    <p>This spell has no effect on undead or constructs.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HellishRebukeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hellish Rebuke</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HellishRebuke" class="move-lower" @change="save('HellishRebuke', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames.</p>
                    <p>Target takes half as much damage on a failed roll.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>2d10 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d10 Fire Per Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HeroismLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Heroism</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Heroism" class="move-lower" @change="save('Heroism', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A willing creature you touch is imbued with bravery.</p>
                    <p>Until the spell ends, the creature is immune to being frightened and gains temporary HP equal to your spellcasting ability modifier at the start of each of its turns.</p>
                    <p>When the spell ends, the target loses any remaining temporary HP from this spell.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HideousLaughterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hideous Laughter</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HideousLaughter" class="move-lower" @change="save('HideousLaughter', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it.</p>
                    <p>The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration.</p>
                    <p>A creature with an Intelligence score of 4 or less isn't affected.</p>
                    <p>At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw.</p>
                    <p>The target has advantage on the saving throw if it's triggered by damage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HuntersMarkLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hunter's Mark</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HuntersMark" class="move-lower" @change="save('HuntersMark', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You choose a creature you can see within range and mystically mark it as your quarry.</p>
                    <p>Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it.</p>
                    <p>If the target drops to 0 HP before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours.</p>
                    <p>When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 1 Day.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="IceKnifeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Ice Knife</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="IceKnife" class="move-lower" @change="save('IceKnife', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a shard of ice and fling it at one creature within range.</p>
                    <p>On a hit, the target takes 1d10 damage. Hit or miss, the shard then explodes. The target and each creature within 1 Square of it must succeed on a Dexterity saving throw or take 2d6 Ice damage.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d10 + 2d6 Ice</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="IdentifyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Identify</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Identify" class="move-lower" @change="save('Identify', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You choose one object that you must touch throughout the casting of the spell.</p>
                    <p>If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any.</p>
                    <p>ou learn whether any spells are affecting the item and what they are.</p>
                    <p>If the item was created by a spell, you learn which spell created it.</p>
                    <p>If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="IllusoryScriptLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Illusory Script</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="IllusoryScript" class="move-lower" @change="save('IllusoryScript', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.</p>
                    <p>To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text.</p>
                    <p>To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible.</p>
                    <p>Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.</p>
                    <p>Should the spell be dispelled, the original script and the illusion both disappear.</p>
                    <p>A creature with truesight can read the hidden message.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Days</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InflictWoundsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Inflict Wounds</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="InflictWounds" class="move-lower" @change="save('InflictWounds', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Make a melee spell attack against a creature you can reach.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>3d6 Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d10 Per Slot Level Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="JumpLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Jump</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Jump" class="move-lower" @change="save('Jump', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature. The creature's jump distance is tripled until the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LongstriderLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Longstrider</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Longstrider" class="move-lower" @change="save('Longstrider', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature. The target's speed increases by 2 Squares until the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MageArmorLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mage Armor</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MageArmor" class="move-lower" @change="save('MageArmor', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends.</p>
                    <p>The target's base AC becomes 13 + its Dexterity modifier.</p>
                    <p>The spell ends if the target dons armor or if you dismiss the spell as an action.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MagicMissileLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Magic Missile</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MagicMissile" class="move-lower" @change="save('MagicMissile', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range.</p>
                    <p>The darts all strike simultaneously, and you can direct them to hit one creature or several.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>1d4 + 1 Per Dart</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1 Dart Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ProtectionFromEvilAndGoodLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Protection From Evil And Good</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ProtectionFromEvilAndGood" class="move-lower" @change="save('ProtectionFromEvilAndGood', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.</p>
                    <p>The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PurifyFoodAndDrinkLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Purify Food And Drink</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PurifyFoodAndDrink" class="move-lower" @change="save('PurifyFoodAndDrink', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>All nonmagical food and drink within a 1 Square Sphere centered on a point of your choice within range is purified and rendered free of poison and disease.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SanctuaryLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sanctuary</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Sanctuary" class="move-lower" @change="save('Sanctuary', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You ward a creature within range against attack.</p>
                    <p>Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw.</p>
                    <p>On a failed save, the creature must choose a new target or lose the attack or spell.</p>
                    <p>This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.</p>
                    <p>If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ShieldLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Shield</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Shield" class="move-lower" @change="save('Shield', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>An invisible barrier of magical force appears and protects you.</p>
                    <p>Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ShieldOfFaithLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Shield Of Faith</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ShieldOfFaith" class="move-lower" @change="save('ShieldOfFaith', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SilentImageLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Silent Image</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SilentImage" class="move-lower" @change="save('SilentImage', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 3 Square Cube.</p>
                    <p>The image appears at a spot within range and lasts for the duration.</p>
                    <p>The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.</p>
                    <p>You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.</p>
                    <p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spellcasting level. If a creature discerns the illusion for what it is, the creature can see through the image.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SleepLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sleep</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Sleep" class="move-lower" @change="save('Sleep', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell sends creatures into a magical slumber.</p>
                    <p> Roll 5d8; the total is how many HP of creatures this spell can affect.</p>
                    <p>Creatures within 5 Squares of a point you choose within range are affected in ascending order of their current HP (ignoring unconscious creatures).</p>
                    <p>Starting with the creature that has the lowest current HP, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake.</p>
                    <p>Subtract each creature's HP from the total before moving on to the creature with the next lowest HP.</p>
                    <p>A creature's HP must be equal to or less than the remaining total for that creature to be affected.</p>
                    <p>Undead and creatures immune to being charmed aren't affected by this spell.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>5d8</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 2d8 Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpeakWithAnimalsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Speak With Animals</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpeakWithAnimals" class="move-lower" @change="save('SpeakWithAnimals', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You gain the ability to comprehend and verbally communicate with beasts for the duration.</p>
                    <p>The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day.</p>
                    <p>You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ThunderwaveLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Thunderwave</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Thunderwave" class="move-lower" @change="save('Thunderwave', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A wave of thunderous force sweeps out from you.</p>
                    <p>On a successful roll, a creature takes 2d8 Electric damage and is pushed 2 Squares away from you.</p>
                    <p>On a failed roll, the creature takes half as much damage and isn't pushed.</p>
                    <p>In addition, unsecured objects that are completely within the area of effect are automatically pushed 2 Squares away from you by the spell's effect, and the spell emits a thunderous boom audible out to 60 Squares.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>2d8 Electric</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Electric Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>3 Square Cube Originating From Self.</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="UnseenServantLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Unseen Servant</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="UnseenServant" class="move-lower" @change="save('UnseenServant', 'Level 1')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends.</p>
                    <p>The servant springs into existence in an unoccupied space on the ground within range.</p>
                    <p>It has 10 AC, 1 HP, and a Strength of 2, and it can't attack.</p>
                    <p> If it drops to 0 HP, the spell ends.</p>
                    <p>Once on each of your turns as a bonus action, you can mentally command the servant to move up to 3 Squares and interact with an object.</p>
                    <p>The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine.</p>
                    <p>Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.</p>
                    <p>If you command the servant to perform a task that would move it more than 12 Squares away from you, the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 2 Spells Library">
          <f7-accordion-content>
            <f7-block>
              
              <f7-list>
                <f7-list-item link="#" popup-open="#AcidArrowLibrary" title="Acid Arrow"></f7-list-item>
                <f7-list-item link="#" popup-open="#AganazzarsScorcherLibrary" title="Aganazzar's Scorcher"></f7-list-item>
                <f7-list-item link="#" popup-open="#AidLibrary" title="Aid"></f7-list-item>
                <f7-list-item link="#" popup-open="#AlterSelfLibrary" title="Alter Self"></f7-list-item>
                <f7-list-item link="#" popup-open="#AnimalMessengerLibrary" title="Animal Messenger"></f7-list-item>
                <f7-list-item link="#" popup-open="#ArcaneLockLibrary" title="Arcane Lock"></f7-list-item>
                <f7-list-item link="#" popup-open="#ArcanistsMagicAuraLibrary" title="Arcanist's Magic Aura"></f7-list-item>
                <f7-list-item link="#" popup-open="#AuguryLibrary" title="Augury"></f7-list-item>
                <f7-list-item link="#" popup-open="#BarkskinLibrary" title="Barkskin"></f7-list-item>
                <f7-list-item link="#" popup-open="#BlindnessDeafnessLibrary" title="Blindness/Deafness"></f7-list-item>
                <f7-list-item link="#" popup-open="#BlurLibrary" title="Blur"></f7-list-item>
                <f7-list-item link="#" popup-open="#BrandingSmiteLibrary" title="Branding Smite"></f7-list-item>
                <f7-list-item link="#" popup-open="#CalmEmotionsLibrary" title="Calm Emotions"></f7-list-item>
                <f7-list-item link="#" popup-open="#ContinualFlameLibrary" title="Continual Flame"></f7-list-item>
                <f7-list-item link="#" popup-open="#DarknessLibrary" title="Darkness"></f7-list-item>
                <f7-list-item link="#" popup-open="#DarkvisionLibrary" title="Darkvision"></f7-list-item>
                <f7-list-item link="#" popup-open="#DetectThoughtsLibrary" title="Detect Thoughts"></f7-list-item>
                <f7-list-item link="#" popup-open="#DustDevilLibrary" title="Dust Devil"></f7-list-item>
                <f7-list-item link="#" popup-open="#EarthbindLibrary" title="Earthbind"></f7-list-item>
                <f7-list-item link="#" popup-open="#EnhanceAbilityLibrary" title="Enhance Ability"></f7-list-item>
                <f7-list-item link="#" popup-open="#EnlargeReduceLibrary" title="Enlarge/Reduce"></f7-list-item>
                <f7-list-item link="#" popup-open="#EnthrallLibrary" title="Enthrall"></f7-list-item>
                <f7-list-item link="#" popup-open="#FindSteedLibrary" title="Find Steed"></f7-list-item>
                <f7-list-item link="#" popup-open="#FindTrapsLibrary" title="Find Traps"></f7-list-item>
                <f7-list-item link="#" popup-open="#FlameBladeLibrary" title="Flame Blade"></f7-list-item>
                <f7-list-item link="#" popup-open="#FlamingSphereLibrary" title="Flaming Sphere"></f7-list-item>
                <f7-list-item link="#" popup-open="#GentleReposeLibrary" title="Gentle Repose"></f7-list-item>
                <f7-list-item link="#" popup-open="#GustOfWindLibrary" title="Gust Of Wind"></f7-list-item>
                <f7-list-item link="#" popup-open="#HeatMetalLibrary" title="Heat Metal"></f7-list-item>
                <f7-list-item link="#" popup-open="#HoldPersonLibrary" title="Hold Person"></f7-list-item>
                <f7-list-item link="#" popup-open="#InvisibilityLibrary" title="Invisibility"></f7-list-item>
                <f7-list-item link="#" popup-open="#KnockLibrary" title="Knock"></f7-list-item>
                <f7-list-item link="#" popup-open="#LesserRestorationLibrary" title="Lesser Restoration"></f7-list-item>
                <f7-list-item link="#" popup-open="#LevitateLibrary" title="Levitate"></f7-list-item>
                <f7-list-item link="#" popup-open="#LocateAnimalsOrPlantsLibrary" title="Locate Animals Or Plants"></f7-list-item>
                <f7-list-item link="#" popup-open="#LocateObjectLibrary" title="Locate Object"></f7-list-item>
                <f7-list-item link="#" popup-open="#MagicMouthLibrary" title="Magic Mouth"></f7-list-item>
                <f7-list-item link="#" popup-open="#MagicWeaponLibrary" title="Magic Weapon"></f7-list-item>
                <f7-list-item link="#" popup-open="#MaximiliansEarthenGraspLibrary" title="Maximilian's Earthen Grasp"></f7-list-item>
                <f7-list-item link="#" popup-open="#MindThrustLibrary" title="Mind Thrust"></f7-list-item>
                <f7-list-item link="#" popup-open="#MirrorImageLibrary" title="Mirror Image"></f7-list-item>
                <f7-list-item link="#" popup-open="#MistyStepLibrary" title="Misty Step"></f7-list-item>
                <f7-list-item link="#" popup-open="#MoonbeamLibrary" title="Moonbeam"></f7-list-item>
                <f7-list-item link="#" popup-open="#PassWithoutTraceLibrary" title="Pass Without Trace"></f7-list-item>
                <f7-list-item link="#" popup-open="#PrayerOfHealingLibrary" title="Prayer Of Healing"></f7-list-item>
                <f7-list-item link="#" popup-open="#ProtectionFromPoisonLibrary" title="Protection From Poison"></f7-list-item>
                <f7-list-item link="#" popup-open="#PyrotechnicsLibrary" title="Pyrotechnics"></f7-list-item>
                <f7-list-item link="#" popup-open="#RayOfEnfeeblementLibrary" title="Ray Of Enfeeblement"></f7-list-item>
                <f7-list-item link="#" popup-open="#RopeTrickLibrary" title="Rope Trick"></f7-list-item>
                <f7-list-item link="#" popup-open="#ScorchingRayLibrary" title="Scorching Ray"></f7-list-item>
                <f7-list-item link="#" popup-open="#SeeInvisibilityLibrary" title="See Invisibility"></f7-list-item>
                <f7-list-item link="#" popup-open="#ShatterLibrary" title="Shatter"></f7-list-item>
                <f7-list-item link="#" popup-open="#SilenceLibrary" title="Silence"></f7-list-item>
                <f7-list-item link="#" popup-open="#SkywriteLibrary" title="Skywrite"></f7-list-item>
                <f7-list-item link="#" popup-open="#SnillocsSnowballSwarmLibrary" title="Snilloc's Snowball Swarm"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpiderClimbLibrary" title="Spider Climb"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpikeGrowthLibrary" title="Spike Growth"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpiritualWeaponLibrary" title="Spiritual Weapon"></f7-list-item>
                <f7-list-item link="#" popup-open="#SuggestionLibrary" title="Suggestion"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonBestialSpiritLibrary" title="Summon Bestial Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#WardingBondLibrary" title="Warding Bond"></f7-list-item>
                <f7-list-item link="#" popup-open="#WardingWindLibrary" title="Warding Wind"></f7-list-item>
                <f7-list-item link="#" popup-open="#WebLibrary" title="Web"></f7-list-item>
                <f7-list-item link="#" popup-open="#ZoneOfTruthLibrary" title="Zone Of Truth"></f7-list-item>
              </f7-list>

              <f7-popup id="AcidArrowLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Acid Arrow</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AcidArrow" class="move-lower" @change="save('AcidArrow', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A shimmering green arrow streaks toward a target within range and bursts in a spray of acid.</p>
                    <p>On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d4 Acid</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d4 Acid Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AganazzarsScorcherLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Aganazzar's Scorcher</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AganazzarsScorcher" class="move-lower" @change="save('AganazzarsScorcher', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A line of roaring flame 6 Squares long and 1 Square wide emanates from you in a direction you choose.</p>
                    <p>On a miss the creature takes half as much damage.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d8 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Fire Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AidLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Aid</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Aid" class="move-lower" @change="save('Aid', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Your spell bolsters your allies with toughness and resolve.</p>
                    <p>Choose up to three creatures within range.</p>
                    <p>Each target's hit point maximum and current HP increase by 5 for the duration.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd level or higher, a target's HP increase by an additional 5 for each slot level above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AlterSelfLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Alter Self</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AlterSelf" class="move-lower" @change="save('AlterSelf', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.</p>
                    <p><b>Aquatic Adaptation</b> — You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.</p>
                    <p><b>Change Appearance</b> — You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.</p>
                    <p><b>Natural Weapons</b> — You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AnimalMessengerLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Animal Messenger</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AnimalMessenger" class="move-lower" @change="save('AnimalMessenger', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>By means of this spell, you use an animal to deliver a message.</p>
                    <p>Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as "a man or woman dressed in the uniform of the town guard" or "a red-haired dwarf wearing a pointed hat."</p>
                    <p>You also speak a message of up to twenty-five words.</p>
                    <p>The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 1 Day for a flying messenger, or 25 miles for other animals.</p>
                    <p>When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice.</p>
                    <p>The messenger speaks only to a creature matching the description you gave.</p>
                    <p>If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell.</p>
                    <h3>Higher Levels</h3>
                    <p>f you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 2 Days for each slot level above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ArcaneLockLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Arcane Lock</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ArcaneLock" class="move-lower" @change="save('ArcaneLock', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration.</p>
                    <p>You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 1 Square of the object, suppresses this spell for 1 minute.</p>
                    <p>Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed.</p>
                    <p>Casting <i>knock</i> on the object suppresses arcane lock for 10 minutes.</p>
                    <p>While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ArcanistsMagicAuraLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Arcanist's Magic Aura</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ArcanistsMagicAura" class="move-lower" @change="save('ArcanistsMagicAura', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You place an illusion on a creature or an object you touch so that divination spells reveal false information about it.</p>
                    <p>The target can be a willing creature or an object that isn't being carried or worn by another creature.</p>
                    <p>When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.</p>
                    <p><b>False Aura</b> — You change the way the target appears to spells and magical effects, such as <i>detect magic</i>, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.</p>
                    <p><b>Mask</b> — You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a <i>symbol</i> spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AuguryLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Augury</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Augury" class="move-lower" @change="save('Augury', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes.</p>
                    <p>The DM chooses from the following possible omens:</p>
                    <ul>
                      <li><b>Weal</b> — for good results</li>
                      <li><b>Woe</b> — for bad results</li>
                      <li><b>Weal and Woe</b> — for both good and bad results</li>
                      <li><b>Nothing</b> — for results that aren't especially good or bad</li>
                    </ul>
                    <p>The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.</p>
                    <p>If you cast the spell two or more times before completing your next long rest, there is a cumulative 25% chance for each casting after the first that you get a random reading. The DM makes this roll in secret.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BarkskinLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Barkskin</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Barkskin" class="move-lower" @change="save('Barkskin', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BlindnessDeafnessLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Blindness/Deafness</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BlindnessDeafness" class="move-lower" @change="save('BlindnessDeafness', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You can blind or deafen a foe.</p>
                    <p>Choose one creature that you can see within range. On success, the target is either blinded or deafened (your choice) for the duration.</p>
                    <p>At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Creature Rolls Success.</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BlurLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Blur</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Blur" class="move-lower" @change="save('Blur', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Your body becomes blurred, shifting and wavering to all who can see you.</p>
                    <p>For the duration, any creature has disadvantage on attack rolls against you.</p>
                    <p>An attacker is immune to this effect if it doesn't rely on sight or can see through illusions.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BrandingSmiteLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Branding Smite</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BrandingSmite" class="move-lower" @change="save('BrandingSmite', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike.</p>
                    <p>Hit targets become visible if it is invisible, and the target sheds dim light in a 1 Square Radius and can’t become invisible until the spell ends.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>Additional 2d6 Light</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Light Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CalmEmotionsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Calm Emotions</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CalmEmotions" class="move-lower" @change="save('CalmEmotions', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to suppress strong emotions in a group of people.</p>
                    <p>Each humanoid in a 4 Square Sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes.</p>
                    <p>If a creature fails its saving throw, choose one of the following two effects:</p>
                    <p>You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.</p>
                    <p>Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ContinualFlameLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Continual Flame</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ContinualFlame" class="move-lower" @change="save('ContinualFlame', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A flame, equivalent in brightness to a torch, springs forth from an object that you touch.</p>
                    <p>The effect looks like a regular flame, but it creates no heat and doesn't use oxygen.</p>
                    <p>A continual flame can be covered or hidden but not smothered or quenched.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DarknessLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Darkness</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Darkness" class="move-lower" @change="save('Darkness', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Magical darkness spreads from a point you choose within range to fill a 3 Square Sphere for the duration.</p>
                    <p>The darkness spreads around corners.</p>
                    <p>A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.</p>
                    <p>If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it.</p>
                    <p>Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.</p>
                    <p>If any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DarkvisionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Darkvision</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Darkvision" class="move-lower" @change="save('Darkvision', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a willing creature to grant it the ability to see in the dark.</p>
                    <p>For the duration, that creature has darkvision out to a range of 12 Squares.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DetectThoughtsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Detect Thoughts</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DetectThoughts" class="move-lower" @change="save('DetectThoughts', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you can read the thoughts of certain creatures.</p>
                    <p>When you cast the spell, you can focus your mind on any one creature that you can see within 6 Squares of you.</p>
                    <p>If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.</p>
                    <p>You initially learn the surface thoughts of the creature—what is most on its mind in that moment.</p>
                    <p>As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.</p>
                    <p>Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.</p>
                    <p>You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 6 Squares of you.</p>
                    <p>The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you.</p>
                    <p>Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DustDevilLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dust Devil</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DustDevil" class="move-lower" @change="save('DustDevil', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose an unoccupied 1 Square Cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell’s duration.</p>
                    <p>Any creature that ends its turn within 1 Square of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 damage and is pushed 2 Squares away. On a successful save, the creature takes half as much damage and isn’t pushed.</p>
                    <p>As a bonus action, you can move the dust devil up to 6 Squares in any direction.</p>
                    <p>If the dust devil moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 2 Square cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>1d8</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Per Spell Slot Above 1st.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EarthbindLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Earthbind</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Earthbind" class="move-lower" @change="save('Earthbind', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose one creature you can see within range. Yellow strips of magical energy loop around the creature.</p>
                    <p>The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 Squares for the spell’s duration.</p>
                    <p>An airborne creature affected by this spell safely descends at the speed of 12 Squares until it reaches the ground or the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EnhanceAbilityLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Enhance Ability</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="EnhanceAbility" class="move-lower" @change="save('EnhanceAbility', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.</p>
                    <p><b>Bear's Endurance</b> — The target has advantage on Constitution checks. It also gains 2d6 temporary HP, which are lost when the spell ends.</p>
                    <p><b>Bull's Strength</b> — The target has advantage on Strength checks, and his or her carrying capacity doubles.</p>
                    <p><b>Cat's Grace</b> — The target has advantage on Dexterity checks. It also doesn't take damage from falling 4 Squares or less if it isn't incapacitated.</p>
                    <p><b>Eagle's Splendor</b> — The target has advantage on Charisma checks.</p>
                    <p><b>Fox's Cunning</b> — The target has advantage on Intelligence checks.</p>
                    <p><b>Owl's Wisdom</b> — The target has advantage on Wisdom checks.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EnlargeReduceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Enlarge/Reduce</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="EnlargeReduce" class="move-lower" @change="save('EnlargeReduce', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You cause a creature or an object you can see within range to grow larger or smaller for the duration.</p>
                    <p>Choose either a creature or an object that is neither worn nor carried.</p>
                    <p>If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.</p>
                    <p>If the target is a creature, everything it is wearing and carrying changes size with it.</p>
                    <p>Any item dropped by an affected creature returns to normal size at once.</p>
                    <p><b>Enlarge</b> — The target's size doubles in all dimensions, and its weight is multiplied by 8. This growth increases its size by one category— from Medium to Large, for example. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attacks with them deal 1d4 extra damage.</p>
                    <p><b>Reduce</b> — The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category—from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal 1d4 less damage (this can't reduce the damage below 1).</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EnthrallLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Enthrall</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Enthrall" class="move-lower" @change="save('Enthrall', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw.</p>
                    <p>Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save.</p>
                    <p>On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you.</p>
                    <p>The spell ends if you are incapacitated or can no longer speak.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FindSteedLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Find Steed</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FindSteed" class="move-lower" @change="save('FindSteed', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose: a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.)</p>
                    <p>The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type.</p>
                    <p>Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.</p>
                    <p>Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit.</p>
                    <p>While mounted on your steed, you can make any spell you cast that targets only you also target your steed.</p>
                    <p>When the steed drops to 0 HP, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.</p>
                    <p>While your steed is within 1 mile of you, you can communicate with each other telepathically.</p>
                    <p>You can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FindTrapsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Find Traps</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FindTraps" class="move-lower" @change="save('FindTraps', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You sense the presence of any trap within range that is within line of sight.</p>
                    <p>A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator.</p>
                    <p>Thus, the spell would sense an area affected by the <i>alarm</i> spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.</p>
                    <p>This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FlameBladeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Flame Blade</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FlameBlade" class="move-lower" @change="save('FlameBlade', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You evoke a fiery blade in your free hand.</p>
                    <p>The blade is similar in size and shape to a scimitar, and it lasts for the duration.</p>
                    <p>If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.</p>
                    <p>You can use your action to make a melee spell attack with the fiery blade.</p>
                    <p>The flaming blade sheds bright light in a 2 Square Sphere and dim light for an additional 2 Squares.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d6 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Fire Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FlamingSphereLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Flaming Sphere</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FlamingSphere" class="move-lower" @change="save('FlamingSphere', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A 2 Square Sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration.</p>
                    <p>Any creature that ends its turn within 2 Squares of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.</p>
                    <p>As a bonus action, you can move the sphere up to 6 Squares.</p>
                    <p>If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.</p>
                    <p>When you move the sphere, you can direct it over barriers up to 1 Square tall and jump it across pits up to 2 Squares wide.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d6 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Fire Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GentleReposeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Gentle Repose</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GentleRepose" class="move-lower" @change="save('GentleRepose', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead.</p>
                    <p>The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Days</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GustOfWindLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Gust Of Wind</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GustOfWind" class="move-lower" @change="save('GustOfWind', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A line of strong wind 12 Squares long and 2 Squares wide blasts from you in a direction you choose for the spell's duration.</p>
                    <p>Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 3 Squares away from you in a direction following the line.</p>
                    <p>Any creature in the line must spend 2 Squares of movement for every 1 Square it moves when moving closer to you.</p>
                    <p>The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50% chance to extinguish them.</p>
                    <p>As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HeatMetalLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Heat Metal</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HeatMetal" class="move-lower" @change="save('HeatMetal', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot.</p>
                    <p>Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell.</p>
                    <p>Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.</p>
                    <p>If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can.</p>
                    <p>If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d8 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Fire Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HoldPersonLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hold Person</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HoldPerson" class="move-lower" @change="save('HoldPerson', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose a humanoid that you can see within range.</p>
                    <p>The target must succeed on a Wisdom saving throw or be paralyzed for the duration.</p>
                    <p>At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd.</p>
                    <p>The humanoids must be within 6 Squares of each other when you target them.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InvisibilityLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Invisibility</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Invisibility" class="move-lower" @change="save('Invisibility', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.</p>
                    <p>The spell ends for a target that attacks or casts a spell.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="KnockLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Knock</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Knock" class="move-lower" @change="save('Knock', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.</p>
                    <p>A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred.</p>
                    <p>If the object has multiple locks, only one of them is unlocked.</p>
                    <p>If you choose a target that is held shut with <i>arcane lock</i>, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.</p>
                    <p>When you cast the spell, a loud knock, audible from as far away as 60 Squares, emanates from the target object.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LesserRestorationLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Lesser Restoration</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="LesserRestoration" class="move-lower" @change="save('LesserRestoration', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LevitateLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Levitate</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Levitate" class="move-lower" @change="save('Levitate', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>One creature or loose object of your choice that you can see within range rises vertically, up to 4 Squares, and remains suspended there for the duration.</p>
                    <p>The spell can levitate a target that weighs up to 500 pounds.</p>
                    <p>An unwilling creature that succeeds on a Constitution saving throw is unaffected.</p>
                    <p>The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing.</p>
                    <p>You can change the target's altitude by up to 4 Squares in either direction on your turn.</p>
                    <p>If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.</p>
                    <p>When the spell ends, the target floats gently to the ground if it is still aloft.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LocateAnimalsOrPlantsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Locate Animals Or Plants</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="LocateAnimalsOrPlants" class="move-lower" @change="save('LocateAnimalsOrPlants', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LocateObjectLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Locate Object</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="LocateObject" class="move-lower" @change="save('LocateObject', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Describe or name an object that is familiar to you.</p>
                    <p>You sense the direction to the object's location, as long as that object is within 200 Squares of you. If the object is in motion, you know the direction of its movement.</p>
                    <p>The spell can locate a specific object known to you, as long as you have seen it up close—within 6 Squares—at least once.</p>
                    <p>Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.</p>
                    <p>This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MagicMouthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Magic Mouth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MagicMouth" class="move-lower" @change="save('MagicMouth', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You implant a message within an object in range, a message that is uttered when a trigger condition is met.</p>
                    <p>Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes.</p>
                    <p>Finally, determine the circumstance that will trigger the spell to deliver your message.</p>
                    <p>When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke.</p>
                    <p>If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that the words appear to come from the object's mouth.</p>
                    <p>When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs.</p>
                    <p>The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 6 Squares of the object. For example, you could instruct the mouth to speak when any creature moves within 6 Squares of the object or when a silver bell rings within 6 Squares of it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MagicWeaponLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Magic Weapon</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MagicWeapon" class="move-lower" @change="save('MagicWeapon', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MaximiliansEarthenGraspLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Maximilian's Earthen Grasp</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MaximiliansEarthenGrasp" class="move-lower" @change="save('MaximiliansEarthenGrasp', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You choose a 1 Square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 1 Square of it.</p>
                    <p>On success, the target gets damaged and gets restrained for the spell's duration.</p>
                    <p>As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 damage on a failed save, or half as much damage on a successful one.</p>
                    <p>To break out, the restrained target can use its action to make a Strength check against your spellcasting level. On a success, the target escapes and is no longer restrained by the hand.</p>
                    <p>As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d6</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MindThrustLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mind Thrust</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MindThrust" class="move-lower" @change="save('MindThrust', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You thrust a lance of psychic disruption into the mind of one creature you can see within range.</p>
                    <p>On success the target can’t take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three.</p>
                    <p>On failure the target takes half as much damage and suffers none of the spell’s other effects. </p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d6 Psychic</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</p>
                    <p>The creatures must be within 6 Squares of each other when you target them.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MirrorImageLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mirror Image</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MirrorImage" class="move-lower" @change="save('MirrorImage', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Three illusory duplicates of yourself appear in your space.</p>
                    <p>Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real.</p>
                    <p>You can use your action to dismiss the illusory duplicates.</p>
                    <p>Each time a creature targets you with an attack during the spell's duration, roll 1d20 to determine whether the attack instead targets one of your duplicates.</p>
                    <p>If you have 3 duplicates, you must roll a 6 or higher to change the attack's target to a duplicate.</p>
                    <p>With 2 duplicates, you must roll an 8 or higher.</p>
                    <p>With 1 duplicate, you must roll an 11 or higher.</p>
                    <p>A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.</p>
                    <p>A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MistyStepLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Misty Step</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MistyStep" class="move-lower" @change="save('MistyStep', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Briefly surrounded by silvery mist, you teleport up to 6 Squares to an unoccupied space that you can see.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MoonbeamLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Moonbeam</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Moonbeam" class="move-lower" @change="save('Moonbeam', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A silvery beam of pale light shines down in a 1 Square Radius, 8 Square High Cylinder centered on a point within range.</p>
                    <p>Until the spell ends, dim light fills the cylinder.</p>
                    <p>When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain.</p>
                    <p>On a failed roll the target takes half as much damage on a successful one.</p>
                    <p>A shapechanger has disadvantage. If the roll succeeds, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.</p>
                    <p>On each of your turns after you cast this spell, you can use an action to move the beam up to 12 Squares in any direction.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d10 Light</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d10 Light Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PassWithoutTraceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Pass Without Trace</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PassWithoutTrace" class="move-lower" @change="save('PassWithoutTrace', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A veil of shadows and silence radiates from you, masking you and your companions from detection.</p>
                    <p>For the duration, each creature you choose within 6 Squares of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means.</p>
                    <p>A creature that receives this bonus leaves behind no tracks or other traces of its passage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PrayerOfHealingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Prayer Of Healing</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PrayerOfHealing" class="move-lower" @change="save('PrayerOfHealing', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Up to six creatures of your choice that you can see within range each regain HP equal to 2d8 + your spellcasting ability modifier.</p>
                    <p>This spell has no effect on undead or constructs.</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Healing Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ProtectionFromPoisonLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Protection From Poison</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ProtectionFromPoison" class="move-lower" @change="save('ProtectionFromPoison', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature. If it is poisoned, you neutralize the poison.</p>
                    <p>If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.</p>
                    <p>For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PyrotechnicsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Pyrotechnics</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Pyrotechnics" class="move-lower" @change="save('Pyrotechnics', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose an area of nonmagical flame that you can see and that fits within a 1 Square Cube within range.</p>
                    <p>You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.</p>
                    <p><b>Fireworks</b> — The target explodes with a dazzling display of colors. Each creature within 2 Squares of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.</p>
                    <p><b>Smoke</b> — Thick black smoke spreads out from the target in a 4 Square Radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="RayOfEnfeeblementLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Ray Of Enfeeblement</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="RayOfEnfeeblement" class="move-lower" @change="save('RayOfEnfeeblement', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A black beam of enervating energy springs from your finger toward a creature within range.</p>
                    <p>On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.</p>
                    <p>At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="RopeTrickLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Rope Trick</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="RopeTrick" class="move-lower" @change="save('RopeTrick', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a length of rope that is up to 12 Squares long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.</p>
                    <p>The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as 8 Medium or smaller creatures.</p>
                    <p>The rope can be pulled into the space, making the rope disappear from view outside the space.</p>
                    <p>Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.</p>
                    <p>Anything inside the extradimensional space drops out when the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ScorchingRayLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Scorching Ray</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ScorchingRay" class="move-lower" @change="save('ScorchingRay', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create three rays of fire and hurl them at targets within range.</p>
                    <p>You can hurl them at one target or several.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d6 Fire Per Ray</p>
                    <h3>Higher Levels</h3>
                    <p>Plus Ray Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SeeInvisibilityLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>See Invisibility</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SeeInvisibility" class="move-lower" @change="save('SeeInvisibility', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane.</p>
                    <p>Ethereal creatures and objects appear ghostly and translucent.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ShatterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Shatter</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Shatter" class="move-lower" @change="save('Shatter', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range.</p>
                    <p>Roll for each creature in a 2 Square Sphere.</p>
                    <p>On a failed roll, the target takes half as much damage on a successful one.</p>
                    <p>A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this roll.</p>
                    <p>A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d8 Electric</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Electric Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SilenceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Silence</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Silence" class="move-lower" @change="save('Silence', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, no sound can be created within or pass through a 4 Square Sphere centered on a point you choose within range.</p>
                    <p>Any creature or object entirely inside the sphere is immune to Electric damage, and creatures are deafened while entirely inside it.</p>
                    <p>Casting a spell that includes a verbal component is impossible there.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SkywriteLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Skywrite</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Skywrite" class="move-lower" @change="save('Skywrite', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You cause up to ten words to form in a part of the sky you can see.</p>
                    <p>The words appear to be made of cloud and remain in place for the spell’s duration.</p>
                    <p>The words dissipate when the spell ends.</p>
                    <p>A strong wind can disperse the clouds and end the spell early.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Sight</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SnillocsSnowballSwarmLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Snilloc's Snowball Swarm</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SnillocsSnowballSwarm" class="move-lower" @change="save('SnillocsSnowballSwarm', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A flurry of magic snowballs erupts from a point you choose within range.</p>
                    <p>Roll for each creature in a 1 Square Sphere centered on that point.</p>
                    <p>Failed rolls cause half as much damage on a successful one.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d8 Ice</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Ice Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpiderClimbLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Spider Climb</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpiderClimb" class="move-lower" @change="save('SpiderClimb', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free.</p>
                    <p>The target also gains a climbing speed equal to its walking speed.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpikeGrowthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Spike Growth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpikeGrowth" class="move-lower" @change="save('SpikeGrowth', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>The ground in a 4 Square Radius centered on a point within range twists and sprouts hard spikes and thorns.</p>
                    <p>The area becomes difficult terrain for the duration.</p>
                    <p>The transformation of the ground is camouflaged to look natural.</p>
                    <p>Any creature that can't see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save level to recognize the terrain as hazardous before entering it.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d4 For Every Square Travelled</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpiritualWeaponLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Spiritual Weapon</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpiritualWeapon" class="move-lower" @change="save('SpiritualWeapon', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again.</p>
                    <p>When you cast the spell, you can make a melee spell attack against a creature within 2 Square of the weapon.</p>
                    <p>As a bonus action on your turn, you can move the weapon up to 4 Squares and repeat the attack against a creature within 1 Square of it.</p>
                    <p>The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>1d8 + Spell Bonus</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Per Spell Slot Above 2nd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SuggestionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Suggestion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Suggestion" class="move-lower" @change="save('Suggestion', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you.</p>
                    <p>Creatures that can't be charmed are immune to this effect.</p>
                    <p>The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.</p>
                    <p>The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability.</p>
                    <p>The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.</p>
                    <p>You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.</p>
                    <p>If you or any of your companions damage the target, the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonBestialSpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Bestial Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonBestialSpirit" class="move-lower" @change="save('SummonBestialSpirit', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth the spirit of a beast. The spirit manifests physically in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Bestial Spirit stats below.</p>
                    <p>When you cast the spell, choose an environment: Air, Land, or Water. The creature physically resembles an animal of your choice that is native to the chosen environment, which also determines one of the movement modes in the creature’s stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 3rd level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block.</p>

                    <h2 class="move-lower">Beast Stats</h2>
                    <p><b>(AC) Armor Class</b>: 11 + the level of the spell</p>
                    <p><b>(HP) HP</b>: Equal the beast's Constitution bonus + your spellcasting bonus + ten times the spell's level</p>
                    <p><b>Speed</b>: 3 Ground, 30 Climbing (Land Only), 50 Flying (Air Only), 30 Swimming (Water Only)</p>
                    <p><b>Strength Bonus</b>: +4</p>
                    <p><b>Dexterity Bonus</b>: 0</p>
                    <p><b>Constitution Bonus</b>: +3</p>
                    <p><b>Intelligence Bonus</b>: -4</p>
                    <p><b>Wisdom Bonus</b>: +2</p>
                    <p><b>Charisma Bonus</b>: -3</p>

                    <h2 class="move-lower">Damage</h2>
                    <p><b>Multiattack</b> — The beast makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p>Add Strength Bonus and Spell Level when rolling for Attack Success.</p>
                    <p>1d8 + 4 + Spell's Level</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WardingBondLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Warding Bond</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WardingBond" class="move-lower" @change="save('WardingBond', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends.</p>
                    <p>While the target is within 12 Squares of you, it gains a +1 bonus to AC and saving throws.</p>
                    <p>Also, each time it takes damage, you take the same amount of damage.</p>
                    <p>The spell ends if you drop to 0 HP or if you and the target become separated by more than 12 Squares.</p>
                    <p>The spell also ends if the spell is cast again on either of the connected creatures.</p>
                    <p>You can also dismiss the spell as an action.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WardingWindLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Warding Wind</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WardingWind" class="move-lower" @change="save('WardingWind', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A strong wind (20 miles per hour) blows around you in a 2 Square Radius and moves with you, remaining centered on you.</p>
                    <p>The wind has the following effects:</p>
                    <ul>
                      <li>It deafens you and other creatures in its area.</li>
                      <li>It extinguishes unprotected flames in its area that are torch-sized or smaller.</li>
                      <li>It hedges out vapor, gas, and fog that can be dispersed by strong wind.</li>
                      <li>The area is difficult terrain for creatures other than you.</li>
                      <li>The attack rolls of ranged weapon attacks have disadvantage if the attacks pass in or out of the wind.</li>
                    </ul>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WebLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Web</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Web" class="move-lower" @change="save('Web', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 4 Square Cube from that point for the duration.</p>
                    <p>The webs are difficult terrain and lightly obscure their area.</p>
                    <p>If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn.</p>
                    <p>Webs layered over a flat surface have a depth of 1 Square.</p>
                    <p>Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.</p>
                    <p>A creature restrained by the webs can use its action to make a Strength check against your spell bonus. If it succeeds, it is no longer restrained.</p>
                    <p>The webs are flammable. Any 1 Square Cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ZoneOfTruthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Zone Of Truth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ZoneOfTruth" class="move-lower" @change="save('ZoneOfTruth', 'Level 2')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a magical zone that guards against deception in a 3 Square Sphere centered on a point of your choice within range.</p>
                    <p>Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius.</p>
                    <p>An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 3 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#AnimateDeadLibrary" title="Animate Dead"></f7-list-item>
                <f7-list-item link="#" popup-open="#BeaconOfHopeLibrary" title="Beacon Of Hope"></f7-list-item>
                <f7-list-item link="#" popup-open="#BestowCurseLibrary" title="Bestow Curse"></f7-list-item>
                <f7-list-item link="#" popup-open="#BlinkLibrary" title="Blink"></f7-list-item>
                <f7-list-item link="#" popup-open="#CallLightningLibrary" title="Call Lightning"></f7-list-item>
                <f7-list-item link="#" popup-open="#ClairvoyanceLibrary" title="Clairvoyance"></f7-list-item>
                <f7-list-item link="#" popup-open="#ConjureAnimalsLibrary" title="Conjure Animals"></f7-list-item>
                <f7-list-item link="#" popup-open="#CounterspellLibrary" title="Counterspell"></f7-list-item>
                <f7-list-item link="#" popup-open="#CreateFoodAndWaterLibrary" title="Create Food And Water"></f7-list-item>
                <f7-list-item link="#" popup-open="#DaylightLibrary" title="Daylight"></f7-list-item>
                <f7-list-item link="#" popup-open="#DispelMagicLibrary" title="Dispel Magic"></f7-list-item>
                <f7-list-item link="#" popup-open="#EruptingEarthLibrary" title="Erupting Earth"></f7-list-item>
                <f7-list-item link="#" popup-open="#FearLibrary" title="Fear"></f7-list-item>
                <f7-list-item link="#" popup-open="#FireballLibrary" title="Fireball"></f7-list-item>
                <f7-list-item link="#" popup-open="#FlameArrowsLibrary" title="Flame Arrows"></f7-list-item>
                <f7-list-item link="#" popup-open="#FlyLibrary" title="Fly"></f7-list-item>
                <f7-list-item link="#" popup-open="#GaseousFormLibrary" title="Gaseous Form"></f7-list-item>
                <f7-list-item link="#" popup-open="#GlyphOfWardingLibrary" title="Glyph Of Warding"></f7-list-item>
                <f7-list-item link="#" popup-open="#HasteLibrary" title="Haste"></f7-list-item>
                <f7-list-item link="#" popup-open="#HypnoticPatternLibrary" title="Hypnotic Pattern"></f7-list-item>
                <f7-list-item link="#" popup-open="#LightningBoltLibrary" title="Lightning Bolt"></f7-list-item>
                <f7-list-item link="#" popup-open="#MagicCircleLibrary" title="Magic Circle"></f7-list-item>
                <f7-list-item link="#" popup-open="#MajorImageLibrary" title="Major Image"></f7-list-item>
                <f7-list-item link="#" popup-open="#MassHealingWordLibrary" title="Mass Healing Word"></f7-list-item>
                <f7-list-item link="#" popup-open="#MeldIntoStoneLibrary" title="Meld Into Stone"></f7-list-item>
                <f7-list-item link="#" popup-open="#MelfsMinuteMeteorsLibrary" title="Melf's Minute Meteors"></f7-list-item>
                <f7-list-item link="#" popup-open="#NondetectionLibrary" title="Nondetection"></f7-list-item>
                <f7-list-item link="#" popup-open="#PhantomSteedLibrary" title="Phantom Steed"></f7-list-item>
                <f7-list-item link="#" popup-open="#PlantGrowthLibrary" title="Plant Growth"></f7-list-item>
                <f7-list-item link="#" popup-open="#ProtectionFromEnergyLibrary" title="Protection From Energy"></f7-list-item>
                <f7-list-item link="#" popup-open="#RemoveCurseLibrary" title="Remove Curse"></f7-list-item>
                <f7-list-item link="#" popup-open="#RevivifyLibrary" title="Revivify"></f7-list-item>
                <f7-list-item link="#" popup-open="#SendingLibrary" title="Sending"></f7-list-item>
                <f7-list-item link="#" popup-open="#SleetStormLibrary" title="Sleet Storm"></f7-list-item>
                <f7-list-item link="#" popup-open="#SlowLibrary" title="Slow"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpeakWithDeadLibrary" title="Speak With Dead"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpeakWithPlantsLibrary" title="Speak With Plants"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpiritGuardiansLibrary" title="Spirit Guardians"></f7-list-item>
                <f7-list-item link="#" popup-open="#SpiritShroudLibrary" title="Spirit Shroud"></f7-list-item>
                <f7-list-item link="#" popup-open="#StinkingCloudLibrary" title="Stinking Cloud"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonFeySpiritLibrary" title="Summon Fey Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonShadowSpiritLibrary" title="Summon Shadow Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonUndeadSpiritLibrary" title="Summon Undead Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#TinyHutLibrary" title="Tiny Hut"></f7-list-item>
                <f7-list-item link="#" popup-open="#TonguesLibrary" title="Tongues"></f7-list-item>
                <f7-list-item link="#" popup-open="#VampiricTouchLibrary" title="Vampiric Touch"></f7-list-item>
                <f7-list-item link="#" popup-open="#WallOfSandLibrary" title="Wall Of Sand"></f7-list-item>
                <f7-list-item link="#" popup-open="#WallOfWaterLibrary" title="Wall Of Water"></f7-list-item>
                <f7-list-item link="#" popup-open="#WaterBreathingLibrary" title="Water Breathing"></f7-list-item>
                <f7-list-item link="#" popup-open="#WaterWalkLibrary" title="Water Walk"></f7-list-item>
                <f7-list-item link="#" popup-open="#WindWallLibrary" title="Wind Wall"></f7-list-item>
              </f7-list>

              <f7-popup id="AnimateDeadLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Animate Dead</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AnimateDead" class="move-lower" @change="save('AnimateDead', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range.</p>
                    <p>Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).</p>
                    <p>On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 12 Squares of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor.</p>
                    <p>If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.</p>
                    <p>The creature is under your control for 1 Day, after which it stops obeying any command you've given it. To maintain control of the creature for another 1 Day, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd.</p>
                    <p>Each of the creatures must come from a different corpse or pile of bones.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BeaconOfHopeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Beacon Of Hope</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BeaconOfHope" class="move-lower" @change="save('BeaconOfHope', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell bestows hope and vitality.</p>
                    <p>Choose any number of creatures within range.</p>
                    <p>For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of HP possible from any healing.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BestowCurseLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Bestow Curse</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BestowCurse" class="move-lower" @change="save('BestowCurse', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell.</p>
                    <p>When you cast this spell, choose the nature of the curse from the following options:</p>
                    <ul>
                      <li>Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.</li>
                      <li>While cursed, the target has disadvantage on attack rolls against you.</li>
                      <li>While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.</li>
                      <li>While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.</li>
                    </ul>
                    <p>A <i>remove</i> curse spell ends this effect.</p>
                    <p>At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>
                    <h3>Higher Levels</h3>
                    <p>If you cast this spell using a spell slot of 4th level or higher, up to 10 minutes.</p>
                    <p>If you use a spell slot of 5th level or higher, the duration is 8 hours.</p>
                    <p>If you use a spell slot of 7th level or higher, the duration is 1 Day.</p>
                    <p>If you use a 9th level spell slot, the spell lasts until it is dispelled.</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BlinkLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Blink</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Blink" class="move-lower" @change="save('Blink', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For this spell roll 1d20.</p>
                    <p>On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane).</p>
                    <p>At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 2 Squares of the space you vanished from.</p>
                    <p>If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near).</p>
                    <p>While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 12 Squares away.</p>
                    <p>You can only affect and be affected by other creatures on the Ethereal Plane.</p>
                    <p>Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CallLightningLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Call Lightning</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CallLightning" class="move-lower" @change="save('CallLightning', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A storm cloud appears in the shape of a cylinder that is 2 Squares tall with a 12 Square Radius, centered on a point you can see within range directly above you.</p>
                    <p>The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).</p>
                    <p>When you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes down from the cloud to that point.</p>
                    <p>Roll for each creature within 1 Square of the lightning strike point.</p>
                    <p>Targets take half as much damage on a failed roll.</p>
                    <p>On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.</p>
                    <p>If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d10 Electric</p>
                    <p>Additional 1d10 Electric if already storym outside.</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d10 Electric Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ClairvoyanceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Clairvoyance</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Clairvoyance" class="move-lower" @change="save('Clairvoyance', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.</p>
                    <p>When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space.</p>
                    <p>As your action, you can switch between seeing and hearing.</p>
                    <p>A creature that can see the sensor (such as a creature benefiting from <i>see invisibility</i> or <i>truesight</i>) sees a luminous, intangible orb about the size of your fist.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>1 Mile</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ConjureAnimalsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Conjure Animals</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ConjureAnimals" class="move-lower" @change="save('ConjureAnimals', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range.</p>
                    <p>Choose one of the following options for what appears:</p>
                    <ul>
                      <li>1 Beast of Level 2 or Lower.</li>
                      <li>2 Beats of Level 1 or Lower.</li>
                      <li>4 Beats of Level 1/2 or Lower.</li>
                      <li>8 Beats of Level 1/4 or Lower.</li>
                    </ul>
                    <p>Each beast is also considered fey, and it disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The summoned creatures are friendly to you and your companions.</p>
                    <p>Roll initiative for the summoned creatures as a group, which has its own turns.</p>
                    <p>They obey any verbal commands that you issue to them.</p>
                    <p>If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</p>
                    <p>The DM has the creatures' statistics.</p>
                    <h3>Higher Levels</h3>
                    <p></p>
                    <p></p>
                    <p></p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CounterspellLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Counterspell</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Counterspell" class="move-lower" @change="save('Counterspell', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to interrupt a creature in the process of casting a spell.</p>
                    <p>If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect.</p>
                    <p>If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CreateFoodAndWaterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Create Food And Water</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CreateFoodAndWater" class="move-lower" @change="save('CreateFoodAndWater', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 1 Day.</p>
                    <p>The food is bland but nourishing.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day For Food.</p>
                    <p>None for Water.</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DaylightLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Daylight</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Daylight" class="move-lower" @change="save('Daylight', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A 12 Square Sphere of light spreads out from a point you choose within range.</p>
                    <p>The sphere is bright light and sheds dim light for an additional 12 Squares.</p>
                    <p>If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it.</p>
                    <p>Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.</p>
                    <p>If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DispelMagicLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dispel Magic</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DispelMagic" class="move-lower" @change="save('DispelMagic', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose one creature, object, or magical effect within range.</p>
                    <p>Any spell of 3rd level or lower on the target ends.</p>
                    <p>For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. A successfull roll must be greater than or equal to 10 + the spell's level. On a successful check, the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EruptingEarthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Erupting Earth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="EruptingEarth" class="move-lower" @change="save('EruptingEarth', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 4 Square Cube centered on that point.</p>
                    <p>Roll for each creature in that area.  A failed roll causes half as much damage as a successful roll.</p>
                    <p>Additionally, the ground in that area becomes difficult terrain until cleared.</p>
                    <p>Each Square portion of the area requires at least 1 turn to clear by hand.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d12</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d12 Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FearLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fear</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Fear" class="move-lower" @change="save('Fear', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You project a phantasmal image of a creature's worst fears.</p>
                    <p>Roll for each creature in the cone, successful rolls cause the creature to throw or drop whatever it is holding and become frightened for the duration.</p>
                    <p>While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move.</p>
                    <p>If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Square Cone</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FireballLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fireball</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Fireball" class="move-lower" @change="save('Fireball', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.</p>
                    <p>Roll for each creature in a 4 Square Sphere centered on that point.  Targets take half as much damage on a failed roll.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>8d6 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Fire Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FlameArrowsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Flame Arrows</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FlameArrows" class="move-lower" @change="save('FlameArrows', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage.</p>
                    <p>The spell’s magic ends on the piece of ammunition when it hits or misses, and the spell ends when 12 pieces of ammunition have been drawn from the quiver.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>Additional 1d6 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FlyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fly</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Fly" class="move-lower" @change="save('Fly', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a willing creature. The target gains a flying speed of 12 Squares for the duration.</p>
                    <p>When the spell ends, the target falls if it is still aloft, unless it can stop the fall.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GaseousFormLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Gaseous Form</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GaseousForm" class="move-lower" @change="save('GaseousForm', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration.</p>
                    <p>The spell ends if the creature drops to 0 HP.</p>
                    <p>An incorporeal creature isn't affected.</p>
                    <p>While in this form, the target's only method of movement is a flying speed of 2 Squares.</p>
                    <p>The target can enter and occupy the space of another creature.</p>
                    <p>The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws.</p>
                    <p>The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces.</p>
                    <p>The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated.</p>
                    <p>While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with.</p>
                    <p>The target can't attack or cast spells.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GlyphOfWardingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Glyph Of Warding</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GlyphOfWarding" class="move-lower" @change="save('GlyphOfWarding', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>When you cast this spell, you inscribe a glyph that later unleashes a magical effect.</p>
                    <p>You inscribe it either on a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph.</p>
                    <p>The glyph can cover an area no larger than 2 Squares.</p>
                    <p>If the surface or object is moved more than 2 Squares from where you cast this spell, the glyph is broken, and the spell ends without being triggered.</p>
                    <p>The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spellcasting level to be found.</p>
                    <p>You decide what triggers the glyph when you cast the spell.</p>
                    <p>For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed.</p>
                    <p>For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph.</p>
                    <p>Once a glyph is triggered, this spell ends.</p>
                    <p>You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment.</p>
                    <p>You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password.</p>
                    <p>When you inscribe the glyph, choose <i>explosive runes</i> or a <i>spell glyph</i>.</p>
                    <p><b>Explosive Runes</b> — When triggered, the glyph erupts with magical energy in a 4 Squares Sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 Acid, Ice, Fire, Electric damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one.</p>
                    <p><b>Spell Glyph</b> — You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the damage of an <i>explosive runes</i> glyph increases by 1d8 for each slot level above 3rd.</p>
                    <p>If you create a <i>spell glyph</i>, you can store any spell of up to the same level as the slot you use for the glyph of warding.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled Or Triggered.</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HasteLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Haste</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Haste" class="move-lower" @change="save('Haste', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose a willing creature that you can see within range.</p>
                    <p>Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns.</p>
                    <p>That bonus action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.</p>
                    <p>When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HypnoticPatternLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hypnotic Pattern</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HypnoticPattern" class="move-lower" @change="save('HypnoticPattern', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a twisting pattern of colors that weaves through the air inside a 6 Square Cube within range.</p>
                    <p>The pattern appears for a moment and vanishes.</p>
                    <p>Roll for each creature in the area who sees the pattern.</p>
                    <p>On a successful, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.</p>
                    <p>The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LightningBoltLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Lightning Bolt</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="LightningBolt" class="move-lower" @change="save('LightningBolt', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A stroke of lightning forming a line 20 Squares Long and 1 Square Wide blasts out from you in a direction you choose.</p>
                    <p>Roll for each creature in the line.  A failed roll causes half as much damage as a successful roll.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>8d6 Electric</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Electric Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>20 Square Line</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MagicCircleLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Magic Circle</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MagicCircle" class="move-lower" @change="save('MagicCircle', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a 2 Square Radius, 4 Square Tall Cylinder of magical energy centered on a point on the ground that you can see within range.</p>
                    <p>Glowing runes appear wherever the cylinder intersects with the floor or other surface.</p>
                    <p>Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:</p>
                    <ul>
                      <li>The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw.</li>
                      <li>The creature has disadvantage on attack rolls against targets within the cylinder.</li>
                      <li>Targets within the cylinder can't be charmed, frightened, or possessed by the creature.</li>
                    </ul>
                    <p>When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Square Cylinder</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MajorImageLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Major Image</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MajorImage" class="move-lower" @change="save('MajorImage', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 4 Square Cube. The image appears at a spot that you can see within range and lasts for the duration.</p>
                    <p>It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal Electric damage or deafen a creature, or a smell that might sicken a creature.</p>
                    <p>As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.</p>
                    <p>Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.</p>
                    <p>Physical interaction with the image reveals it to be an illusion, because things can pass through it.</p>
                    <p>A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spellcasting level.</p>
                    <p>If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MassHealingWordLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mass Healing Word</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MassHealingWord" class="move-lower" @change="save('MassHealingWord', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>As you call out words of restoration, up to six creatures of your choice that you can see within range regain HP equal to 1d4 + your spellcasting ability modifier.</p>
                    <p>This spell has no effect on undead or constructs.</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d4 Healing Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MeldIntoStoneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Meld Into Stone</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MeldIntoStone" class="move-lower" @change="save('MeldIntoStone', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration.</p>
                    <p>Using your movement, you step into the stone at a point you can touch.</p>
                    <p>Nothing of your presence remains visible or otherwise detectable by nonmagical senses.</p>
                    <p>While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage.</p>
                    <p>You remain aware of the passage of time and can cast spells on yourself while merged in the stone.</p>
                    <p>You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.</p>
                    <p>Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 damage to you.</p>
                    <p>The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 damage to you.</p>
                    <p>If expelled, you fall prone in an unoccupied space closest to where you first entered.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MelfsMinuteMeteorsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Melf's Minute Meteors</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MelfsMinuteMeteors" class="move-lower" @change="save('MelfsMinuteMeteors', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create six tiny meteors in your space. They float in the air and orbit you for the spell’s duration.</p>
                    <p>When you cast the spell — and as a bonus action on each of your turns thereafter — you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 24 Squares of you.</p>
                    <p>Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes.</p>
                    <p>Roll for each creature within 1 Square of the point where the meteor explodes.</p>
                    <p>Creates receive half as much damage on a failed roll.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d6 Fire Per Meteor</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="NondetectionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Nondetection</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Nondetection" class="move-lower" @change="save('Nondetection', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you hide a target that you touch from divination magic.</p>
                    <p>The target can be a willing creature or a place or an object no larger than 2 Squares in any dimension.</p>
                    <p>The target can't be targeted by any divination magic or perceived through magical scrying sensors.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PhantomSteedLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Phantom Steed</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PhantomSteed" class="move-lower" @change="save('PhantomSteed', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range.</p>
                    <p>You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle.</p>
                    <p>Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 2 Squares away from the steed.</p>
                    <p>For the duration, you or a creature you choose can ride the steed.</p>
                    <p>The creature uses the statistics for a riding horse, except it has a speed of 20 Squares and can travel 10 miles in an hour, or 13 miles at a fast pace.</p>
                    <p>When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount.</p>
                    <p>The spell ends if you use an action to dismiss it or if the steed takes any damage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PlantGrowthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Plant Growth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PlantGrowth" class="move-lower" @change="save('PlantGrowth', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell channels vitality into plants within a specific area.</p>
                    <p>There are two possible uses for the spell, granting either immediate or long-term benefits.</p>
                    <p>If you cast this spell using 1 action, choose a point within range. All normal plants in a 20 Square Radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 Squares of movement for every 1 Square it moves.</p>
                    <p>You can exclude one or more areas of any size within the spell's area from being affected.</p>
                    <p>If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ProtectionFromEnergyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Protection From Energy</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ProtectionFromEnergy" class="move-lower" @change="save('ProtectionFromEnergy', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, the willing creature you touch has resistance to one damage type of your choice: Acid, Ice, Fire, Electric.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="RemoveCurseLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Remove Curse</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="RemoveCurse" class="move-lower" @change="save('RemoveCurse', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>At your touch, all curses affecting one creature or object end.</p>
                    <p>If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="RevivifyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Revivify</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Revivify" class="move-lower" @change="save('Revivify', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature that has died within the last minute.</p>
                    <p>That creature returns to life with 1 hit point.</p>
                    <p>This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SendingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sending</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Sending" class="move-lower" @change="save('Sending', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately.</p>
                    <p>The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.</p>
                    <p>You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5% chance that the message doesn't arrive.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Unlimited</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SleetStormLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sleet Storm</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SleetStorm" class="move-lower" @change="save('SleetStorm', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, freezing rain and sleet fall in a 4 Square Tall Cylinder with a 8 Square Radius centered on a point you choose within range.</p>
                    <p>The area is heavily obscured, and exposed flames in the area are doused.</p>
                    <p>The ground in the area is covered with slick ice, making it difficult terrain.</p>
                    <p>When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone.</p>
                    <p>If a creature starts its turn in the spell's area and is concentrating on a spell, the creature must make a successful Constitution saving throw against your spellcasting level or lose concentration.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SlowLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Slow</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Slow" class="move-lower" @change="save('Slow', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You alter time around up to six creatures of your choice in a 8 Square Cube within range.</p>
                    <p>Roll for each target in the area.</p>
                    <p>An affected target's speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can't use reactions.</p>
                    <p>On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.</p>
                    <p>If the creature attempts to cast a spell with a casting time of 1 action, roll 1d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.</p>
                    <p>A creature affected by this spell makes another Wisdom saving throw at the end of each of its turns. On a successful save, the effect ends for it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpeakWithDeadLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Speak With Dead</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpeakWithDead" class="move-lower" @change="save('SpeakWithDead', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose.</p>
                    <p>The corpse must still have a mouth and can't be undead.</p>
                    <p>The spell fails if the corpse was the target of this spell within the last 10 days.</p>
                    <p>Until the spell ends, you can ask the corpse up to five questions.</p>
                    <p>The corpse knows only what it knew in life, including the languages it knew.</p>
                    <p>Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy.</p>
                    <p>This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpeakWithPlantsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Speak With Plants</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpeakWithPlants" class="move-lower" @change="save('SpeakWithPlants', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You imbue plants within 6 Squares of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands.</p>
                    <p>You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.</p>
                    <p>You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.</p>
                    <p>Plants might be able to perform other tasks on your behalf, at the DM's discretion.</p>
                    <p>The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.</p>
                    <p>If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.</p>
                    <p>This spell can cause the plants created by the <i>entangle</i> spell to release a restrained creature.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpiritGuardiansLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Spirit Guardians</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpiritGuardians" class="move-lower" @change="save('SpiritGuardians', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth spirits to protect you. They flit around you to a distance of 3 Squares for the duration.</p>
                    <p>If you are good or neutral, their spectral form appears angelic or fey (your choice).</p>
                    <p>If you are evil, they appear fiendish.</p>
                    <p>When you cast this spell, you can designate any number of creatures you can see to be unaffected by it.</p>
                    <p>An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 Light damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.</p>
                    
                    <h2 class="move-lower">Damage</h2>
                    <p>3d8 Light/Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Light/Necrotic Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SpiritShroudLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Spirit Shroud</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SpiritShroud" class="move-lower" @change="save('SpiritShroud', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth spirits of the dead, which flit around you for the spell’s duration.</p>
                    <p>The spirits are intangible and invulnerable, and they are good or evil (your choice).</p>
                    <p>Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 2 Squares of you.</p>
                    <p>This damage is Light if the spirits are good and necrotic if they are evil.</p>
                    <p>Any creature that takes this damage can’t regain HP until the start of your next turn.</p>
                    <p>In addition, any creature of your choice that you can see that starts its turn within 2 Squares of you has its speed reduced by 2 Squares until the start of your next turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>Additional 1d8 Light/Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Light/Necrotic Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="StinkingCloudLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Stinking Cloud</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="StinkingCloud" class="move-lower" @change="save('StinkingCloud', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a 4 Square Sphere of yellow, nauseating gas centered on a point within range.</p>
                    <p>The cloud spreads around corners, and its area is heavily obscured.</p>
                    <p>The cloud lingers in the air for the duration.</p>
                    <p>Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling.</p>
                    <p>Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.</p>
                    <p>A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds.</p>
                    <p>A strong wind (at least 20 miles per hour) disperses it after 1 round.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonFeySpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Fey Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonFeySpirit" class="move-lower" @change="save('SummonFeySpirit', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth a spirit from the Feywild. The spirit manifests physically in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Fey Spirit stats below.</p>
                    <p>When you cast the spell, choose a mood: Deceitful, Furious, or Joyful.</p>
                    <p>The creature physically resembles a satyr, a dryad, or an elf (your choice) marked by the chosen mood, which also determines one of the traits in its stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block.</p>

                    <h2>Summoned Creature Stats</h2>
                    <p><b>AC</b>: 11 + the level of the spell</p>
                    <p><b>HP</b>: 2 + spellcasting Bonus + 10 Times the Spell's Level</p>
                    <p><b>Speed</b>: 8 Squares</p>
                    <p><b>Strength Bonus</b>: +1</p>
                    <p><b>Dexterity Bonus</b>: +3</p>
                    <p><b>Constitution Bonus</b>: +2</p>
                    <p><b>Intelligence Bonus</b>: +2</p>
                    <p><b>Wisdom Bonus</b>: 0</p>
                    <p><b>Charisma Bonus</b>: +3</p>
                    <p><b>Conditional Immunities</b>: Charmed</p>
                    <p><b>Senses</b>: Darkvision 12 Squares</p>
                    <p><b>Lanugages</b>: Sylvan and Languages You Speak</p>
                    <p><b><i>Fey Step</i></b>: As a bonus action, the fey can magically teleport up to 6 Squares to an unoccupied space it can see.</p>
                    <p><b><i>Darkening Step (Deceitful Only)</i></b>: Immediately after using its Fey Step, the fey can fill a 1 Square Cube within 1 Square of it with magical darkness, which remains until the end of the fey’s next turn.</p>
                    <p><b><i>Ecstatic Step (Joyful Only)</i></b>: mmediately after using its Fey Step, the fey can choose a creature it can see within 2 Squares of it and force it to succeed on a Wisdom saving throw against your spellcasting level or be charmed by the fey for 1 minute. The charm ends if the fey or any of its companions deals any damage to the target.</p>
                    <p><b><i>Impassioned Step (Furious Only)</i></b>: Immediately after using its <i>Fey Step</i>, the fey has advantage on the next attack roll it makes before the end of its turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p><b>Multiattack</b>: The fey makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p><b><i>Shortsword</i></b>: +3 + the spell’s level to hit, reach 1 Square, one target. Hit: 1d6 + 3 + the spell’s level damage + 1d6 force damage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonShadowSpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Shadow Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonShadowSpirit" class="move-lower" @change="save('SummonShadowSpirit', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth a shadowy spirit from the Shadowfell. The spirit manifests physically in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Shadow Spirit stats below.</p>
                    <p>When you cast the spell, choose an emotion: Fury, Despair, or Fear.</p>
                    <p>The creature physically resembles a misshapen humanoid marked by the chosen emotion, which also determines some of the traits in its stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block.</p>

                    <h2>Summoned Creature Stats</h2>
                    <p><b>AC</b>: 11 + the level of the spell</p>
                    <p><b>HP</b>: 2 + Your spellcasting Level + 10 times the spell's level</p>
                    <p><b>Speed</b>: 8 Squares</p>
                    <p><b>Strength Bonus</b>: +1</p>
                    <p><b>Dexterity Bonus</b>: +3</p>
                    <p><b>Constitution Bonus</b>: +2</p>
                    <p><b>Intelligence Bonus</b>: -4</p>
                    <p><b>Wisdom Bonus</b>: 0</p>
                    <p><b>Charisma Bonus</b>: +3</p>
                    <p><b>Damage Immunities</b>: Necrotic</p>
                    <p><b>Conditional Immunities</b>: Frightened</p>
                    <p><b>Senses</b>: Darkvision 24 Squares</p>
                    <p><b>Languages</b>: Common and the Languages You Speak</p>
                    <p><b><i>Bloodthirsty Frenzy (Fury Only)</i></b>: The spirit has advantage on attack rolls against frightened creatures.</p>
                    <p><b><i>Shadow Stealth (Fear Only)</i></b>: While in dim light or darkness, the spirit can take the Hide action as a bonus action.</p>
                    <p><b><i>Weight of Ages (Despair Only)</i></b>: Any beast or humanoid, other than you, that starts its turn within 1 Square of the spirit has its speed reduced by 4 Squares until the start of that beast or humanoid’s next turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p><b><i>Multiattack</i></b>: The spirit makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p><b><i>Chilling Rend</i></b>: 3 + the spell’s level to hit, reach 1 Square, one target. Hit: 2d8 + 3 + the spell’s level Ice damage.</p>
                    <p><b><i>Dreadful Scream (1/Day)</i></b>: The spirit screams. Each creature within 6 Squares of it must succeed on a Wisdom saving throw against your spellcasting level or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonUndeadSpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Undead Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonUndeadSpirit" class="move-lower" @change="save('SummonUndeadSpirit', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth a restless spirit from beyond the grave. The spirit manifests physically in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Undead Spirit stats below.</p>
                    <p>When you cast the spell, choose the creature’s form: Ghostly, Putrid, or Skeletal.</p>
                    <p>The creature physically resembles a humanoid with the chosen form, which also determines some of the traits in its stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block.</p>

                    <h2>Summoned Creature Stats</h2>
                    <p><b>AC</b>: 11 + the level of the spell</p>
                    <p><b>HP</b>: 2 + Your spellcasting Level + 10 times the spell's level</p>
                    <p><b>Speed</b>: 6 Squares, or 8 Squares (Ghostly Only)</p>
                    <p><b>Strength Bonus</b>: +1</p>
                    <p><b>Dexterity Bonus</b>: +3</p>
                    <p><b>Constitution Bonus</b>: +2</p>
                    <p><b>Intelligence Bonus</b>: -4</p>
                    <p><b>Wisdom Bonus</b>: 0</p>
                    <p><b>Charisma Bonus</b>: -1</p>
                    <p><b>Damage Immunities</b>: Necrotic and Poison</p>
                    <p><b>Condition Immunities</b>: Exhaustion, Frightened, Paralyzed, and Poisoned</p>
                    <p><b>Senses</b>: Darkvision 12 Squares</p>
                    <p><b>Languages</b>: Common and the Languages You Speak</p>
                    <p><b><i>Incorporeal Movement (Ghostly Only)</i></b>: The undead can become incorporeal while moving and pass through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes 1d10 damage for every 1 Square traveled.</p>
                    <p><b><i>Festering Aura (Putrid Only)</i></b>: Any creature, other than you, that starts its turn within 1 Square of the undead must succeed on a Constitution saving throw against your spellcasting level or be poisoned until the start of its next turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p><b><i>Multiattack</i></b>: The spirit makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p><b><i>Deathly Touch (Ghostly Only)</i></b>: Melee Weapon Attack: +3 + the spell’s level to hit, reach 1 Square, one creature. Hit: 1d8 + 3 + the spell’s level necrotic damage, and the creature must succeed on a Wisdom saving throw against your spellcasting level or be frightened of the undead until the end of the target’s next turn.</p>
                    <p><b><i>Grave Bolt (Skeletal Only)</i></b>: Ranged Spell Attack: +3 + the spell’s level to hit, range 30 Squares, one target. Hit: 2d8 + 3 + the spell’s level necrotic damage.</p>
                    <p><b><i>Rotting Claw (Putrid Only)</i></b>: Melee Weapon Attack: +3 + the spell’s level to hit, reach 1 Square, one target. Hit: 1d6 + 3 + the spell’s level damage. If the target is poisoned, it must succeed on a Constitution saving throw against your spellcasting level or be paralyzed until the end of its next turn.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TidalWaveLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Tidal Wave</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TidalWave" class="move-lower" @change="save('TidalWave', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You conjure up a wave of water that crashes down on an area within range. The area can be up to 6 Squares Long, up to 1 Square Wide, and up to 1 Square Tall.</p>
                    <p>Roll for each creature in that area.</p>
                    <p>Success damages the creature and knocks them prone.</p>
                    <p>Failure causes half as much damage and doesn't know them prone.</p>
                    <p>The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 6 Squares of it, and then it vanishes.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d8</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TinyHutLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Tiny Hut</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TinyHut" class="move-lower" @change="save('TinyHut', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A 2 Square Radius immobile dome of force springs into existence around and above you and remains stationary for the duration.</p>
                    <p>The spell ends if you leave its area.</p>
                    <p>Nine creatures of Medium size or smaller can fit inside the dome with you.</p>
                    <p>The spell fails if its area includes a larger creature or more than nine creatures.</p>
                    <p>Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it.</p>
                    <p>Spells and other magical effects can't extend through the dome or be cast through it.</p>
                    <p>The atmosphere inside the space is comfortable and dry, regardless of the weather outside.</p>
                    <p>Until the spell ends, you can command the interior to become dimly lit or dark.</p>
                    <p>The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TonguesLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Tongues</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Tongues" class="move-lower" @change="save('Tongues', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell grants the creature you touch the ability to understand any spoken language it hears.</p>
                    <p>Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="VampiricTouchLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Vampiric Touch</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="VampiricTouch" class="move-lower" @change="save('VampiricTouch', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds.</p>
                    <p>Make a melee spell attack against a creature within your reach. On success you regain HP equal to half the amount of necrotic damage dealt.</p>
                    <p>Until the spell ends, you can make the attack again on each of your turns as an action.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d6 Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Necrotic Per Spell Slot Above 3rd.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WallOfSandLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wall Of Sand</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WallOfSand" class="move-lower" @change="save('WallOfSand', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You conjure up a wall of swirling sand on the ground at a point you can see within range.</p>
                    <p>You can make the wall up to 6 Squares Long, 2 Squares High, and 2 Square Thick, and it vanishes when the spell ends.</p>
                    <p>It blocks line of sight but not movement.</p>
                    <p>A creature is blinded while in the wall’s space and must spend 3 Squares of movement for every 1 Square it moves there.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WallOfWaterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wall Of Water</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WallOfWater" class="move-lower" @change="save('WallOfWater', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a wall of water on the ground at a point you can see within range.</p>
                    <p>You can make the wall up to 6 Squares Long, 2 Squares High, and 1 foot thick, or you can make a ringed wall up to 4 Squares in diameter, 4 Squares High, and 1 foot thick.</p>
                    <p>The wall vanishes when the spell ends.</p>
                    <p>The wall’s space is difficult terrain.</p>
                    <p>Any ranged weapon attack that enters the wall’s space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target.</p>
                    <p>Spells that deal Ice damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 1 Square section is frozen). Each 1 Square frozen section has 5 AC and 15 HP. Reducing a frozen section to 0 HP destroys it. When a section is destroyed, the wall’s water doesn’t fill it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WaterBreathingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Water Breathing</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WaterBreathing" class="move-lower" @change="save('WaterBreathing', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends.</p>
                    <p>Affected creatures also retain their normal mode of respiration.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WaterWalkLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Water Walk</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WaterWalk" class="move-lower" @change="save('WaterWalk', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat).</p>
                    <p>Up to 10 willing creatures you can see within range gain this ability for the duration.</p>
                    <p>If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 12 Squares per round.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WindWallLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wind Wall</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WindWall" class="move-lower" @change="save('WindWall', 'Level 3')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A wall of strong wind rises from the ground at a point you choose within range.</p>
                    <p>You can make the wall up to 10 Squares Long, 3 Squares High, and 1 foot thick.</p>
                    <p>You can shape the wall in any way you choose so long as it makes one continuous path along the ground.</p>
                    <p>Roll for each creature within the area.  Failed rolls cause half as much damage as a successful roll.</p>
                    <p>The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss.</p>
                    <p>Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.</p>
                    <p>Creatures in gaseous form can't pass through it.</p>

                    <h2>Damage</h2>
                    <p>3d8</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 4 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#ArcaneEyeLibrary" title="Arcane Eye"></f7-list-item>
                <f7-list-item link="#" popup-open="#BanishmentLibrary" title="Banishment"></f7-list-item>
                <f7-list-item link="#" popup-open="#BlackTentaclesLibrary" title="Black Tentacles"></f7-list-item>
                <f7-list-item link="#" popup-open="#BlightLibrary" title="Blight"></f7-list-item>
                <f7-list-item link="#" popup-open="#CompulsionLibrary" title="Compulsion"></f7-list-item>
                <f7-list-item link="#" popup-open="#ConfusionLibrary" title="Confusion"></f7-list-item>
                <f7-list-item link="#" popup-open="#ConjureMinorElementalsLibrary" title="Conjure Minor Elementals"></f7-list-item>
                <f7-list-item link="#" popup-open="#ConjureWoodlandBeingsLibrary" title="Conjure Woodland Beings"></f7-list-item>
                <f7-list-item link="#" popup-open="#ControlWaterLibrary" title="Conrol Water"></f7-list-item>
                <f7-list-item link="#" popup-open="#DeathWardLibrary" title="Death Ward"></f7-list-item>
                <f7-list-item link="#" popup-open="#DimensionDoorLibrary" title="Dimension Door"></f7-list-item>
                <f7-list-item link="#" popup-open="#DivinationLibrary" title="Divination"></f7-list-item>
                <f7-list-item link="#" popup-open="#DominateBeastLibrary" title="Dominate Beast"></f7-list-item>
                <f7-list-item link="#" popup-open="#ElementalBaneLibrary" title="Elemental Bane"></f7-list-item>
                <f7-list-item link="#" popup-open="#FabricateLibrary" title="Fabricate"></f7-list-item>
                <f7-list-item link="#" popup-open="#FaithfulHoundLibrary" title="Faithful Hound"></f7-list-item>
                <f7-list-item link="#" popup-open="#FireShieldLibrary" title="Fire Shield"></f7-list-item>
                <f7-list-item link="#" popup-open="#FreedomOfMovementLibrary" title="Freedom Of Movement"></f7-list-item>
                <f7-list-item link="#" popup-open="#GiantInsectLibrary" title="Giant Insect"></f7-list-item>
                <f7-list-item link="#" popup-open="#GreaterInvisibilityLibrary" title="Greater Invisibility"></f7-list-item>
                <f7-list-item link="#" popup-open="#GuardianOfFaithLibrary" title="Guardian Of Faith"></f7-list-item>
                <f7-list-item link="#" popup-open="#HallucinatoryTerrainLibrary" title="Hallucinatory Terrain"></f7-list-item>
                <f7-list-item link="#" popup-open="#IceStormLibrary" title="Ice Storm"></f7-list-item>
                <f7-list-item link="#" popup-open="#IntellectFortressLibrary" title="Intellect Fortress"></f7-list-item>
                <f7-list-item link="#" popup-open="#LocateCreatureLibrary" title="Locate Creature"></f7-list-item>
                <f7-list-item link="#" popup-open="#PhantasmalKillerLibrary" title="Phantasmal Killer"></f7-list-item>
                <f7-list-item link="#" popup-open="#PolymorphLibrary" title="Polymorph"></f7-list-item>
                <f7-list-item link="#" popup-open="#PrivateSanctumLibrary" title="Private Sanctum"></f7-list-item>
                <f7-list-item link="#" popup-open="#ResilientSphereLibrary" title="Resilient Sphere"></f7-list-item>
                <f7-list-item link="#" popup-open="#SecretChestLibrary" title="Secret Chest"></f7-list-item>
                <f7-list-item link="#" popup-open="#StoneShapeLibrary" title="Stone Shape"></f7-list-item>
                <f7-list-item link="#" popup-open="#StoneskinLibrary" title="Stoneskin"></f7-list-item>
                <f7-list-item link="#" popup-open="#StormSphereLibrary" title="Storm Sphere"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonAberrantSpiritLibrary" title="Summon Aberrant Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonElementalSpiritLibrary" title="Summon Elemental Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#VitriolicSphereLibrary" title="Vitriolic Sphere"></f7-list-item>
                <f7-list-item link="#" popup-open="#WallOfFireLibrary" title="Wall Of Fire"></f7-list-item>
                <f7-list-item link="#" popup-open="#WaterySphereLibrary" title="Watery Sphere"></f7-list-item>
              </f7-list>

              <f7-popup id="ArcaneEyeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Arcane Eye</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ArcaneEye" class="move-lower" @change="save('ArcaneEye', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create an invisible, magical eye within range that hovers in the air for the duration.</p>
                    <p>You mentally receive visual information from the eye, which has normal vision and darkvision out to 6 Squares.</p>
                    <p>The eye can look in every direction.</p>
                    <p>As an action, you can move the eye up to 6 Squares in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence.</p>
                    <p>A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BanishmentLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Banishment</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Banishment" class="move-lower" @change="save('Banishment', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to send one creature that you can see within range to another plane of existence.</p>
                    <p>If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated.</p>
                    <p>The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.</p>
                    <p>If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane.</p>
                    <p>If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BlackTentaclesLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Black Tentacles</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BlackTentacles" class="move-lower" @change="save('BlackTentacles', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Squirming, ebony tentacles fill a 4 Square-Square on ground that you can see within range.</p>
                    <p>For the duration, these tentacles turn the ground in the area into difficult terrain.</p>
                    <p>When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 damage and be restrained by the tentacles until the spell ends.</p>
                    <p>A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 damage.</p>
                    <p>A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spellcasting level. On a success, it frees itself.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d8</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BlightLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Blight</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Blight" class="move-lower" @change="save('Blight', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it.</p>
                    <p>On a failed roll targets take half as much damage on a successful one.</p>
                    <p>This spell has no effect on undead or constructs.</p>
                    <p>If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.</p>
                    <p>If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>8d8 Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Necrotic Per Spell Slot Above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CompulsionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Compulsion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Compulsion" class="move-lower" @change="save('Compulsion', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. On a failed save, a target is affected by this spell.</p>
                    <p>A target automatically succeeds on this saving throw if it can't be charmed.</p>
                    <p>Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you.</p>
                    <p>Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving throw to try to end the effect.</p>
                    <p>A target isn't compelled to move into an obviously deadly hazard, such as a fire or pit, but it will provoke opportunity attacks to move in the designated direction.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ConfusionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Confusion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Confusion" class="move-lower" @change="save('Confusion', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action.</p>
                    <p>Each creature in a 2 Square Sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.</p>
                    <p>An affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.</p>
                    <p>Roll 1d10 for the spell's effect:</p>
                    <ul>
                      <li><b>1</b>: The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn.</li>
                      <li><b>2-6</b>: The creature doesn't move or take actions this turn.</li>
                      <li><b>7-8</b>: The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn.</li>
                      <li><b>9-10</b>: The creature can act and move normally.</li>
                    </ul>
                    <p>At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 1 Square for each slot level above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ConjureMinorElementalsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Conjure Minor Elementals</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ConjureMinorElementals" class="move-lower" @change="save('ConjureMinorElementals', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:</p>
                    <ul>
                      <li>1 Elemental of Level 2 or lower.</li>
                      <li>2 Elemental of Level 1 or lower.</li>
                      <li>4 Elemental of Level 1/2 or lower.</li>
                      <li>8 Elemental of Level 1/4 or lower.</li>
                    </ul>
                    <p>An elemental summoned by this spell disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The summoned creatures are friendly to you and your companions.</p>
                    <p>They obey any verbal commands that you issue to them.</p>
                    <p>If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: 2 times as many with a 6th-level slot and 3 times as many with an 8th-level slot.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ConjureWoodlandBeingsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Conjure Woodland Beings</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ConjureWoodlandBeings" class="move-lower" @change="save('ConjureWoodlandBeings', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:</p>
                    <ul>
                      <li>1 Fey of Level 2 or lower.</li>
                      <li>2 Fey of Level 1 or lower.</li>
                      <li>4 Fey of Level 1/2 or lower.</li>
                      <li>8 Fey of Level 1/4 or lower.</li>
                    </ul>
                    <p>A fey summoned by this spell disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The summoned creatures are friendly to you and your companions.</p>
                    <p>They obey any verbal commands that you issue to them.</p>
                    <p>If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: 2 times as many with a 6th-level slot and 3 times as many with an 8th-level slot.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ControlWaterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Control Water</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ControlWater" class="move-lower" @change="save('ControlWater', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 20 Squares on a side.</p>
                    <p>You can choose from any of the following effects when you cast this spell.</p>
                    <p>As an action on your turn, you can repeat the same effect or choose a different one.</p>
                    <p><b>Flood</b> — You cause the water level of all standing water in the area to rise by as much as 4 Squares. If the area includes a shore, the flooding water spills over onto dry land.</p>
                    <p>If you choose an area in a large body of water, you instead create a 4 Square Tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25% chance of capsizing.</p>
                    <p>The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.</p>
                    <p><b>Part Water</b> — You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.</p>
                    <p><b>Redirect Flow</b> — You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.</p>
                    <p><b>Whirlpool</b> — This effect requires a body of water at least 10 Square Area and 5 Squares Deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 1 Square Wide at the base, up to 10 Squares Wide at the top, and 5 Squares Tall. Any creature or object in the water and within 5 Squares of the vortex is pulled 2 Squares toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spellcasting level.</p>
                    <p>When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.</p>
                    <p>The first time each turn that an object enters the vortex, the object takes 2d8 damage; this damage occurs each round it remains in the vortex.</p>

                    <h2>Damage</h2>
                    <p>Whirlpool — 2d8 Each Turn While in Whirlpool</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DeathWardLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Death Ward</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DeathWard" class="move-lower" @change="save('DeathWard', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature and grant it a measure of protection from death.</p>
                    <p>The first time the target would drop to 0 HP as a result of taking damage, the target instead drops to 1 hit point, and the spell ends.</p>
                    <p>If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DimensionDoorLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dimension Door</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DimensionDoor" class="move-lower" @change="save('DimensionDoor', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as "40 Squares straight downward" or "upward to the northwest at a 45- degree angle, 60 Squares."</p>
                    <p>You can bring along objects as long as their weight doesn't exceed what you can carry.</p>
                    <p>You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 1 Square of you when you cast this spell.</p>
                    <p>If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 damage, and the spell fails to teleport you.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>100 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DivinationLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Divination</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Divination" class="move-lower" @change="save('Divination', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.</p>
                    <p>The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.</p>
                    <p>If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25% chance for each casting after the first that you get a random reading.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DominateBeastLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dominate Beast</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DominateBeast" class="move-lower" @change="save('DominateBeast', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to beguile a beast that you can see within range.</p>
                    <p>It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.</p>
                    <p>While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.</p>
                    <p>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.</p>
                    <p>ach time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes.</p>
                    <p>When you use a 6th-level spell slot, the duration is concentration, up to 1 hour.</p>
                    <p>When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ElementalBaneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Elemental Bane</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ElementalBane" class="move-lower" @change="save('ElementalBane', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose one creature you can see within range, and choose one of the following damage types: Acid, Ice, Fire, Electric.</p>
                    <p>Damaged targets lose any resistance to that damage type until the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.</p>
                    <p>The creatures must be within 6 Squares of each other when you target them.</p>

                    <h2>Damage</h2>
                    <p>2d6 Of the Chosen Element Type</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FabricateLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fabricate</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Fabricate" class="move-lower" @change="save('Fabricate', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.</p>
                    <p>Choose raw materials that you can see within range.</p>
                    <p>You can fabricate a Large or smaller object (contained within a 2 Square Cube, or 8 connected 1 Square Cubes), given a sufficient quantity of raw material.</p>
                    <p>If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 1 Square Cube).</p>
                    <p>The quality of objects made by the spell is commensurate with the quality of the raw materials.</p>
                    <p>Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FaithfulHoundLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Faithful Hound</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FaithfulHound" class="move-lower" @change="save('FaithfulHound', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 20 Squares away from it.</p>
                    <p>The hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature comes within 6 Squares of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly.</p>
                    <p>The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions.</p>
                    <p>At the start of each of your turns, the hound attempts to bite one creature within 1 Square of it that is hostile to you.</p>
                    <p>The hound's attack bonus is equal to your spellcasting ability modifier + your proficiency bonus.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d8</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FireShieldLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fire Shield</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FireShield" class="move-lower" @change="save('FireShield', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Thin and wispy flames wreathe your body for the duration, shedding bright light in a 2 Square Radius and dim light for an additional 2 Squares.</p>
                    <p>You can end the spell early by using an action to dismiss it.</p>
                    <p>The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to Ice damage, and the chill shield grants you resistance to fire damage.</p>
                    <p>In addition, whenever a creature within 1 Square of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 Ice damage from a cold shield.</p>

                    <h2>Damage</h2>
                    <p>2d8 Fire or 2d8 Ice if Attacked.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FreedomOfMovementLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Freedom Of Movement</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FreedomOfMovement" class="move-lower" @change="save('FreedomOfMovement', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained.</p>
                    <p>The target can also spend 1 Square of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled.</p>
                    <p>Finally, being underwater imposes no penalties on the target's movement or attacks.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GiantInsectLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Giant Insect</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GiantInsect" class="move-lower" @change="save('GiantInsect', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You transform up to 10 centipedes, 3 spiders, 5 wasps, or 1 scorpion within range into giant versions of their natural forms for the duration.</p>
                    <p>A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.</p>
                    <p>Each creature obeys your verbal commands, and in combat, they act on your turn each round.</p>
                    <p>A creature remains in its giant size for the duration, until it drops to 0 HP, or until you use an action to dismiss the effect on it.</p>
                    <p>The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GreaterInvisibilityLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Greater Invisibility</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GreaterInvisibility" class="move-lower" @change="save('GreaterInvisibility', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GuardianOfFaithLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Guardian Of Faith</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GuardianOfFaith" class="move-lower" @change="save('GuardianOfFaith', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.</p>
                    <p>Any creature hostile to you that moves to a space within 2 Squares of the guardian for the first time on a turn must succeed on a Dexterity saving throw.</p>
                    <p>The creature takes 20 Light damage on a failed save, or half as much damage on a successful one.</p>
                    <p>The guardian vanishes when it has dealt a total of 60 damage.</p>

                    <h2>Damage</h2>
                    <p>20 Light</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HallucinatoryTerrainLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hallucinatory Terrain</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HallucinatoryTerrain" class="move-lower" @change="save('HallucinatoryTerrain', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You make natural terrain in a 20 Square Cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.</p>
                    <p>Manufactured structures, equipment, and creatures within the area aren't changed in appearance.</p>
                    <p>The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion.</p>
                    <p>If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spellcasting level to disbelieve it.</p>
                    <p>A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="IceStormLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Ice Storm</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="IceStorm" class="move-lower" @change="save('IceStorm', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A hail of rock-hard ice pounds to the ground in a 4 Square Radius, 8 Square High Cylinder centered on a point within range.</p>
                    <p>Roll for each creature in the area, on a failed roll, that creature takes half as much damage.</p>
                    <p>Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d8 Bludgeoning + 4d6 Ice</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Bludgeoning Per Spell Slot Above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="IntellectFortressLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Intellect Fortress</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="IntellectFortress" class="move-lower" @change="save('IntellectFortress', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.</p>
                    <p>The creatures must be within 6 Squares of each other when you target them.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LocateCreatureLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Locate Creature</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="LocateCreature" class="move-lower" @change="save('LocateCreature', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 200 Squares of you. If the creature is moving, you know the direction of its movement.</p>
                    <p>The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close—within 6 Squares—at least once.</p>
                    <p>If the creature you described or named is in a different form, such as being under the effects of a <i>polymorph</i> spell, this spell doesn't locate the creature.</p>
                    <p>This spell can't locate a creature if running water at least 2 Squares Wide blocks a direct path between you and the creature.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PhantasmalKillerLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Phantasmal Killer</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PhantasmalKiller" class="move-lower" @change="save('PhantasmalKiller', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature.</p>
                    <p>The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration.</p>
                    <p>At the end of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 Psychic damage. On a successful save, the spell ends.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d10 Psychic</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d10 Psychic Per Spell Slot Above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PolymorphLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Polymorph</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Polymorph" class="move-lower" @change="save('Polymorph', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell transforms a creature that you can see within range into a new form.</p>
                    <p>An unwilling creature must make a Wisdom saving throw to avoid the effect.</p>
                    <p>The spell has no effect on a shapechanger or a creature with 0 HP.</p>
                    <p>The transformation lasts for the duration, or until the target drops to 0 HP or dies.</p>
                    <p>The new form can be any beast whose level is equal to or less than the target's.</p>
                    <p>The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast.</p>
                    <p>It retains its alignment and personality.</p>
                    <p>When it reverts to its normal form, the creature returns to the number of HP it had before it transformed.</p>
                    <p>If it reverts as a result of dropping to 0 HP, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 HP, it isn't knocked unconscious.</p>
                    <p>The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech.</p>
                    <p>The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PrivateSanctumLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Private Sanctum</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PrivateSanctum" class="move-lower" @change="save('PrivateSanctum', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You make an area within range magically secure. The area is a cube that can be as small as 1 Square to as large as 20 Squares on each side.</p>
                    <p>The spell lasts for the duration or until you use an action to dismiss it.</p>
                    <p>When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:</p>
                    <ul>
                      <li>Sound can't pass through the barrier at the edge of the warded area.</li>
                      <li>The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it.</li>
                      <li>Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter.</li>
                      <li>Creatures in the area can't be targeted by divination spells.</li>
                      <li>Nothing can teleport into or out of the warded area.</li>
                      <li>Planar travel is blocked within the warded area.</li>
                    </ul>
                    <p>Casting this spell on the same spot every day for a year makes this effect permanent.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 20 Squares for each slot level beyond 4th. Thus you could protect a cube that can be up to 40 Squares on one side by using a spell slot of 5th level.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Square Cube</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ResilientSphereLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Resilient Sphere</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ResilientSphere" class="move-lower" @change="save('ResilientSphere', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A sphere of shimmering force encloses a creature or object of Large size or smaller within range.</p>
                    <p>An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.</p>
                    <p>Nothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.</p>
                    <p>The sphere is weightless and just large enough to contain the creature or object inside.</p>
                    <p>An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed.</p>
                    <p>Similarly, the globe can be picked up and moved by other creatures.</p>
                    <p>A <i>disintegrate</i> spell targeting the globe destroys it without harming anything inside it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Square Sphere</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SecretChestLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Secret Chest</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SecretChest" class="move-lower" @change="save('SecretChest', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell.</p>
                    <p>The chest can contain up to 3 Cubic Squares of nonliving material (3 feet by 2 feet by 2 feet).</p>
                    <p>While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 1 Square of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.</p>
                    <p>After 60 days, there is a cumulative 5% chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action.</p>
                    <p>If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="StoneShapeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Stone Shape</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="StoneShape" class="move-lower" @change="save('StoneShape', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a stone object of Medium size or smaller or a section of stone no more than 1 Square in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 1 Square thick. You could also shape a stone door or its frame to seal the door shut.</p>
                    <p>The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="StoneskinLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Stoneskin</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Stoneskin" class="move-lower" @change="save('Stoneskin', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="StormSphereLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Storm Sphere</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="StormSphere" class="move-lower" @change="save('StormSphere', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A 4 Square Sphere of whirling air springs into existence centered on a point you choose within range.</p>
                    <p>The sphere remains for the spell’s duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 Bludgeoning damage.</p>
                    <p>The sphere’s space is difficult terrain.</p>
                    <p>Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 12 Squares of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 Electric damage.</p>
                    <p>Creatures within 6 Squares of the sphere have disadvantage on Wisdom (Perception) checks made to listen.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d6 Bludgeoning and 4d6 Electric</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Electric Per Spell Slot Above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonAberrantSpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Aberrant Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonAberrantSpirit" class="move-lower" @change="save('SummonAberrantSpirit', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth a spirit from the Far Realm or another alien realm of madness. The spirit manifests physically in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Aberrant Spirit stats below.</p>
                    <p>When you cast the spell, choose Beholderkin, Slaadi, or Star Spawn. The creature physically resembles your choice, which also determines some of the traits in its stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 5th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block.</p>

                    <h2>Beast Stats</h2>
                    <p><b>AC</b>: 11 + the level of the spell</p>
                    <p><b>HP</b>: 2 + Your Spellcasting Bonus + 10 times the spell's level</p>
                    <p><b>Speed</b>: 6 Squares</p>
                    <p><b>Strength Bonus</b>: +3</p>
                    <p><b>Dexterity Bonus</b>: 0</p>
                    <p><b>Constitution Bonus</b>: +2</p>
                    <p><b>Intelligence Bonus</b>: +3</p>
                    <p><b>Wisdom Bonus</b>: 0</p>
                    <p><b>Charisma Bonus</b>: -2</p>
                    <p><b>Damage Immunities</b>: Psychic</p>
                    <p><b>Senses</b>: Darkvision 12 Squares</p>
                    <p><b>Languages</b>: Deep Speech and the Languages You Speak</p>
                    <p><b><i>Regeneration (Slaadi Only)</i></b>: The aberration regains 10 HP at the start of its turn if it has at least 1 HP.</p>
                    <p><b><i>Whispering Aura (Star Spawn Only)</i></b>: At the start of each of the aberration’s turns, each creature within 1 Square of it must succeed on a Wisdom saving throw against your spellcasting level or take 3d6 Psychic damage, provided that the aberration isn’t incapacitated.</p>

                    <h2>Damage</h2>
                    <p><b><i>Multiattack</i></b>: The aberration makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p><b><i>Eye Ray (Beholderkin Only)</i></b>: Ranged Spell Attack: +3 + the spell’s level to hit, range 6 Squares, one creature. Hit: 1d8 + 3 + the spell’s level Psychic damage.</p>
                    <p><b><i>Claws (Slaadi Only)</i></b>: Melee Weapon Attack: +3 + the spell’s level to hit, reach 1 Square, one target. Hit: 1d10 + 3 + the spell’s level damage. If the target is a creature, it can’t regain HP until the start of the aberration’s next turn.</p>
                    <p><b><i>Psychic Slam (Star Spawn Only)</i></b>: Melee Spell Attack: +3 + the spell’s level to hit, reach 1 Square, one creature. Hit: 1d6 + 3 + the spell’s level Psychic damage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonElementalSpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Elemental Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonElementalSpirit" class="move-lower" @change="save('SummonElementalSpirit', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth a spirit from the Elemental Planes. The spirit manifests physically in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Elemental Spirit stats below.</p>
                    <p>When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature physically resembles a vaguely humanoid form wreathed in the chosen element, which also determines some of the traits in its stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 5th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block.</p>

                    <h2>Beast Stats</h2>
                    <p><b>AC</b>: 11 + the level of the spell</p>
                    <p><b>HP</b>: 3 + Your Spellcasting Level + 10 times the spell's level</p>
                    <p><b>Speed</b>: 8 Squares</p>
                    <p><b>Strength Bonus</b>: +4</p>
                    <p><b>Dexterity Bonus</b>: +2</p>
                    <p><b>Constitution Bonus</b>: +3</p>
                    <p><b>Intelligence Bonus</b>: -4</p>
                    <p><b>Wisdom Bonus</b>: 0</p>
                    <p><b>Charisma Bonus</b>: +3</p>
                    <p><b>Damage Resistances</b>: Electric, Piercing, Slashing (Earth Only), and Acid (Water Only)</p>
                    <p><b>Damage Immunities</b>: Poison, Fire (Fire Only)</p>
                    <p><b>Conditional Immunities</b>: Exhaustion, Paralyzed, Petrified, Poisoned, and Unconscious</p>
                    <p><b>Senses</b>: Darkvision 12 Squares</p>
                    <p><b>Languages</b>: Primoridal and the Languages You Speak</p>
                    <p><b><i>Amorphous Form (Air, Fire, and Water Only</i></b>: The elemental can move through a space as narrow as 1 inch wide without squeezing.</p>

                    <h2>Damage</h2>
                    <p><b><i>Multiattack</i></b>: The elemental makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p><b><i>Slam</i></b>: Melee Weapon Attack: 4 + the spell’s level to hit, reach 1 Square, one target. Hit: 1d10 + 4 + the spell’s level damage (Air, Earth, and Water only) or Fire damage (Fire only).</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="VitriolicSphereLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Vitriolic Sphere</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="VitriolicSphere" class="move-lower" @change="save('VitriolicSphere', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 4 Square Sphere.</p>
                    <p>Roll for each creature in the explosion radius.</p>
                    <p>Failed rolls cause a creature to take half the initial damage and no damage at the end of its next turn.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d4 Acid and 5d4 Acid at the End of its next turn.</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 2d4 Acid Per Spell Slot Above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WallOfFireLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wall Of Fire</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WallOfFire" class="move-lower" @change="save('WallOfFire', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a wall of fire on a solid surface within range.</p>
                    <p>You can make the wall up to 12 Squares Long, 4 Squares High, and 1 foot thick, or a ringed wall up to 4 Squares in diameter, 4 Squares High, and 1 foot thick.</p>
                    <p>Roll for each creature that is 2 Squares away from the wall.</p>
                    <p>On a failed roll the creature takes half as much damage as a successful roll.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>5d8 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Fire Per Spell Slot Above 4th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WaterySphereLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Watery Sphere</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WaterySphere" class="move-lower" @change="save('WaterySphere', 'Level 4')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You conjure up a sphere of water with a 1 Square Radius at a point you can see within range.</p>
                    <p>The sphere can hover but no more than 2 Squares off the ground.</p>
                    <p>Any creature in the sphere’s space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature’s choice outside the sphere.</p>
                    <p>A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it.</p>
                    <p>On a failed save, a creature is restrained by the sphere and is engulfed by the water.</p>
                    <p>At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.</p>
                    <p>The sphere can restrain as many as 4 Medium or smaller creatures or 1 Large creature.</p>
                    <p>If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 1 Square of it.</p>
                    <p>As an action, you can move the sphere up to 6 Squares in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 2 Squares above the ground. Any creature restrained by the sphere moves with it.</p>
                    <p>You can ram the sphere into creatures, forcing them to make the saving throw.</p>
                    <p>When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 6 Squares of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 5 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#AnimateObjectsLibrary" title="Animate Objects"></f7-list-item>
                <f7-list-item link="#" popup-open="#AntilifeShellLibrary" title="Antilife Shell"></f7-list-item>
                <f7-list-item link="#" popup-open="#ArcaneHandLibrary" title="Arcane Hand"></f7-list-item>
                <f7-list-item link="#" popup-open="#AwakenLibrary" title="Awaken"></f7-list-item>
                <f7-list-item link="#" popup-open="#CloudkillLibrary" title="Cloudkill"></f7-list-item>
                <f7-list-item link="#" popup-open="#CommuneLibrary" title="Commune"></f7-list-item>
                <f7-list-item link="#" popup-open="#CommuneWithNatureLibrary" title="Commune With Nature"></f7-list-item>
                <f7-list-item link="#" popup-open="#ConeOfColdLibrary" title="Cone Of Cold"></f7-list-item>
                <f7-list-item link="#" popup-open="#ConjureElementalLibrary" title="Conjure Elemental"></f7-list-item>
                <f7-list-item link="#" popup-open="#ContactOtherPlaneLibrary" title="Contact Other Plane"></f7-list-item>
                <f7-list-item link="#" popup-open="#ContagionLibrary" title="Contagion"></f7-list-item>
                <f7-list-item link="#" popup-open="#ControlWindsLibrary" title="Control Winds"></f7-list-item>
                <f7-list-item link="#" popup-open="#CreationLibrary" title="Creation"></f7-list-item>
                <f7-list-item link="#" popup-open="#DispelEvilAndGoodLibrary" title="Dispel Evil And Good"></f7-list-item>
                <f7-list-item link="#" popup-open="#DominatePersonLibrary" title="Dominate Person"></f7-list-item>
                <f7-list-item link="#" popup-open="#DreamLibrary" title="Dream"></f7-list-item>
                <f7-list-item link="#" popup-open="#FlameStrikeLibrary" title="Flame Strike"></f7-list-item>
                <f7-list-item link="#" popup-open="#GeasLibrary" title="Geas"></f7-list-item>
                <f7-list-item link="#" popup-open="#GreaterRestorationLibrary" title="Greater Restoration"></f7-list-item>
                <f7-list-item link="#" popup-open="#HallowLibrary" title="Hallow"></f7-list-item>
                <f7-list-item link="#" popup-open="#HoldMonsterLibrary" title="Hold Monster"></f7-list-item>
                <f7-list-item link="#" popup-open="#ImmolationLibrary" title="Immolation"></f7-list-item>
                <f7-list-item link="#" popup-open="#InsectPlagueLibrary" title="Insect Plague"></f7-list-item>
                <f7-list-item link="#" popup-open="#LegendLoreLibrary" title="Legend Lore"></f7-list-item>
                <f7-list-item link="#" popup-open="#MaelstromLibrary" title="Maelstrom"></f7-list-item>
                <f7-list-item link="#" popup-open="#MassCureWoundsLibrary" title="Mass Cure Wounds"></f7-list-item>
                <f7-list-item link="#" popup-open="#MisleadLibrary" title="Mislead"></f7-list-item>
                <f7-list-item link="#" popup-open="#ModifyMemoryLibrary" title="Modify Memory"></f7-list-item>
                <f7-list-item link="#" popup-open="#PasswallLibrary" title="Passwall"></f7-list-item>
                <f7-list-item link="#" popup-open="#PlanarBindingLibrary" title="Planar Binding"></f7-list-item>
                <f7-list-item link="#" popup-open="#RaiseDeadLibrary" title="Raise Dead"></f7-list-item>
                <f7-list-item link="#" popup-open="#ReincarnateLibrary" title="Reincarnate"></f7-list-item>
                <f7-list-item link="#" popup-open="#ScryingLibrary" title="Scrying"></f7-list-item>
                <f7-list-item link="#" popup-open="#SeemingLibrary" title="Seeming"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonCelestialSpiritLibrary" title="Summon Celestial Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#TelekinesisLibrary" title="Telekinesis"></f7-list-item>
                <f7-list-item link="#" popup-open="#TelepathicBondLibrary" title="Telepathic Bond"></f7-list-item>
                <f7-list-item link="#" popup-open="#TeleportationCircleLibrary" title="Teleportation Circle"></f7-list-item>
                <f7-list-item link="#" popup-open="#TransmuteRockLibrary" title="Transmute Rock"></f7-list-item>
                <f7-list-item link="#" popup-open="#TreeStrideLibrary" title="Tree Stride"></f7-list-item>
                <f7-list-item link="#" popup-open="#WallOfForceLibrary" title="Wall Of Force"></f7-list-item>
                <f7-list-item link="#" popup-open="#WallOfStoneLibrary" title="Wall Of Stone"></f7-list-item>
              </f7-list>

              <f7-popup id="AnimateObjectsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Animate Objects</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AnimateObjects" class="move-lower" @change="save('AnimateObjects', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Objects come to life at your command.</p>
                    <p>Choose up to 10 nonmagical objects within range that are not being worn or carried.</p>
                    <p>Medium targets count as 2 objects.</p>
                    <p>Large targets count as 4 objects.</p>
                    <p>Huge targets count as 8 objects.</p>
                    <p>You can't animate any object larger than Huge.</p>
                    <p>Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 HP.</p>
                    <p>As a bonus action, you can mentally command any creature you made with this spell if the creature is within 100 Squares of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor.</p>
                    <p>If you issue no commands, the creature only defends itself against hostile creatures.</p>
                    <p>Once given an order, the creature continues to follow it until its task is complete.</p>
                    <p>Objects stuck or tied down to a surface have a Speed of 0.</p>
                    <h3>Higher Levels</h3>
                    <p>If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.</p>

                    <h2>Animated Object Stats</h2>
                    <h3>Tiny Objects</h3>
                    <p><b>AC</b>: 18</p>
                    <p><b>HP</b>: 20</p>
                    <p><b>Strength</b>: 4</p>
                    <p><b>Dexterity</b>: 18</p>
                    <p><b>Speed</b>: 6</p>
                    <p><b>Damage</b>: +8 To Attack Roll, 1d4 + 4</p>
                    <h3>Small Objects</h3>
                    <p><b>AC</b>: 16</p>
                    <p><b>HP</b>: 25</p>
                    <p><b>Strength</b>: 6</p>
                    <p><b>Dexterity</b>: 14</p>
                    <p><b>Speed</b>: 6</p>
                    <p><b>Damage</b>: +6 To Attack Roll, 1d8 + 2</p>
                    <h3>Medium Objects</h3>
                    <p><b>AC</b>: 13</p>
                    <p><b>HP</b>: 40</p>
                    <p><b>Strength</b>: 10</p>
                    <p><b>Dexterity</b>: 12</p>
                    <p><b>Speed</b>: 6</p>
                    <p><b>Damage</b>: +5 To Attack Roll, 2d6 + 1</p>
                    <h3>Large Objects</h3>
                    <p><b>AC</b>: 10</p>
                    <p><b>HP</b>: 50</p>
                    <p><b>Strength</b>: 14</p>
                    <p><b>Dexterity</b>: 10</p>
                    <p><b>Speed</b>: 6</p>
                    <p><b>Damage</b>: +6 To Attack Roll, 2d10 + 2</p>
                    <h3>Huge Objects</h3>
                    <p><b>AC</b>: 10</p>
                    <p><b>HP</b>: 80</p>
                    <p><b>Strength</b>: 18</p>
                    <p><b>Dexterity</b>: 6</p>
                    <p><b>Speed</b>: 6</p>
                    <p><b>Damage</b>: +8 To Attack Roll, 2d12 + 4</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AntilifeShellLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Antilife Shell</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AntilifeShell" class="move-lower" @change="save('AntilifeShell', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A shimmering barrier extends out from you in a 2 Square Radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs.</p>
                    <p>The barrier prevents an affected creature from passing or reaching through.</p>
                    <p>An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.</p>
                    <p>If you move so that an affected creature is forced to pass through the barrier, the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ArcaneHandLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Arcane Hand</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ArcaneHand" class="move-lower" @change="save('ArcaneHand', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range.</p>
                    <p>The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.</p>
                    <p>The hand is an object that has AC 20 and HP equal to your hit point maximum. If it drops to 0 HP, the spell ends.</p>
                    <p>It has a Strength of 26 (+8) and a Dexterity of 10 (+0).</p>
                    <p>The hand doesn't fill its space.</p>
                    <p>When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 12 Squares and then cause one of the following effects with it.</p>
                    <p><b>Clenched Fist</b> — The hand strikes one creature or object within 1 Square of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 damage.</p>
                    <p><b>Forceful Hand</b> — The hand attempts to push a creature within 1 Square of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 1 Square plus a number of Squares equal to 5 times your spellcasting bonus. The hand moves with the target to remain within 1 Square of it.</p>
                    <p><b>Grasping Hand</b> — The hand attempts to grapple a Huge or smaller creature within 1 Square of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes damage equal to 2d6 + your spellcasting bonus.</p>
                    <p><b>Interposing Hand</b> — The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d8 (Clenched Fist Only)</p>
                    <p>2d6 + Spellcasting Bonus (Grasping Hand Only)</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 2d8 Per Spell Slot Above 5th (Clenched Fist Only).</p>
                    <p>Plus 2d6 Per Spell Slot Above 5th (Grasping Hand Only).</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AwakenLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Awaken</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Awaken" class="move-lower" @change="save('Awaken', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant.</p>
                    <p>The target must have either no Intelligence score or an Intelligence of 3 or less.</p>
                    <p>The target gains an Intelligence of 10.</p>
                    <p>The target also gains the ability to speak one language you know.</p>
                    <p>If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's.</p>
                    <p>Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the <i>awakened shrub</i> or the <i>awakened tree</i>.</p>
                    <p>The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it.</p>
                    <p>When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CloudkillLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Cloudkill</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Cloudkill" class="move-lower" @change="save('Cloudkill', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a 4 Square Sphere of poisonous, yellow-green fog centered on a point you choose within range.</p>
                    <p>The fog spreads around corners.</p>
                    <p>It lasts for the duration or until strong wind disperses the fog, ending the spell.</p>
                    <p>Its area is heavily obscured.</p>
                    <p>When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 Poison damage on a failed save, or half as much damage on a successful one.</p>
                    <p>Creatures are affected even if they hold their breath or don't need to breathe.</p>
                    <p>The fog moves 2 Squares away from you at the start of each of your turns, rolling along the surface of the ground.</p>
                    <p>The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>5d8 Poison</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Poison Per Spell Slot Above 5th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CommuneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Commune</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Commune" class="move-lower" @change="save('Commune', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You contact your deity or a divine proxy and ask up to 3 questions that can be answered with a yes or no.</p>
                    <p>You must ask your questions before the spell ends.</p>
                    <p>You receive a correct answer for each question.</p>
                    <p>Divine beings aren't necessarily omniscient, so you might receive "unclear" as an answer if a question pertains to information that lies beyond the deity's knowledge.</p>
                    <p>In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead.</p>
                    <p>If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25% chance for each casting after the first that you get no answer.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CommuneWithNatureLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Commune With Nature</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CommuneWithNature" class="move-lower" @change="save('CommuneWithNature', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You briefly become one with nature and gain knowledge of the surrounding territory.</p>
                    <p>In the outdoors, the spell gives you knowledge of the land within 3 miles of you.</p>
                    <p>In caves and other natural underground settings, the radius is limited to 60 Squares.</p>
                    <p>The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.</p>
                    <p>You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:</p>
                    <ul>
                      <li>terrain and bodies of water</li>
                      <li>prevalent plants, minerals, animals, or peoples</li>
                      <li>powerful celestials, fey, fiends, elementals, or undead</li>
                      <li>influence from other planes of existence</li>
                      <li>buildings</li>
                    </ul>
                    <p>For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ConeOfColdLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Cone Of Cold</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ConeOfCold" class="move-lower" @change="save('ConeOfCold', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A blast of cold air erupts from your hands.</p>
                    <p>Failed rolls cause half as much damage.</p>
                    <p>A creature killed by this spell becomes a frozen statue until it thaws.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>8d8 Ice</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Ice Per Spell Slot Above 5th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Square Cone</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ConjureElementalLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Conjure Elemental</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ConjureElemental" class="move-lower" @change="save('ConjureElemental', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth an elemental servant.</p>
                    <p>Choose an area of air, earth, fire, or water that fills a 2 Square Cube within range.</p>
                    <p>An elemental of difficultly level 5 or lower appropriate to the area you chose appears in an unoccupied space within 2 Squares of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground.</p>
                    <p>The elemental disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The elemental is friendly to you and your companions for the duration.</p>
                    <p>It obeys any verbal commands that you issue to it.</p>
                    <p>If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.</p>
                    <p>If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 6th level or higher, the elemental difficulty level increases by 1 for each slot level above 5th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ContactOtherPlaneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Contact Other Plane</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ContactOtherPlane" class="move-lower" @change="save('ContactOtherPlane', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You mentally contact a demigod, the spirit of a long- dead sage, or some other mysterious entity from another plane.</p>
                    <p>Contacting this extraplanar intelligence can strain or even break your mind.</p>
                    <p>When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 Psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A <i>greater restoration</i> spell cast on you ends this effect.</p>
                    <p>On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as "yes," "no," "maybe," "never," "irrelevant," or "unclear" (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ContagionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Contagion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Contagion" class="move-lower" @change="save('Contagion', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Your touch inflicts disease.</p>
                    <p>Make a melee spell attack against a creature within your reach. On a hit, the target is poisoned.</p>
                    <p>At the end of each of the poisoned target's turns, the target must make a Constitution saving throw. If the target succeeds on three of these saves, it is no longer poisoned, and the spell ends.</p>
                    <p>If the target fails three of these saves, the target is no longer poisoned, but choose one of the diseases below. The target is subjected to the chosen disease for the spell's duration.</p>
                    <p>Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.</p>
                    <p><b>Blinding Sickness</b> — Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded.</p>
                    <p><b>Filth Fever</b> — A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength.</p>
                    <p><b>Flesh Rot</b> — The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.</p>
                    <p><b>Mindfire</b> — The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat.</p>
                    <p><b>Seizure</b> — The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity.</p>
                    <p><b>Slimy Doom</b> — The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Week</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ControlWindsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Control Winds</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ControlWinds" class="move-lower" @change="save('ControlWinds', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You take control of the air in a 20 Square Cube that you can see within range.</p>
                    <p>Choose one of the following effects when you cast the spell.</p>
                    <p>The effect lasts for the spell’s duration, unless you use your action on a later turn to switch to a different effect.</p>
                    <p>You can also use your action to temporarily halt the effect or to restart one you’ve halted.</p>
                    <p><b>Gusts</b> — A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.</p>
                    <p><b>Downdraft</b> — You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.</p>
                    <p><b>Updraft</b> — You cause a sustained updraft within the cube, rising upward from the cube’s bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 2 Squares Higher than normal.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CreationLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Creation</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Creation" class="move-lower" @change="save('Creation', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar.</p>
                    <p>You can also use this spell to create mineral objects such as stone, crystal, or metal.</p>
                    <p>The object created must be no larger than a 1 Square Cube, and the object must be of a form and material that you have seen before.</p>
                    <p>The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 6th level or higher, the cube increases by 1 Square for each slot level above 5th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Vegetable Matter — 1 Day</p>
                    <p>Stone or Crystal — 12 Hours</p>
                    <p>Precious Metals — 1 Hour</p>
                    <p>Gems — 10 Minutes</p>
                    <p>Adamantium or Mithril — 1 Minute</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DispelEvilAndGoodLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dispel Evil And Good</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DispelEvilAndGood" class="move-lower" @change="save('DispelEvilAndGood', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane.</p>
                    <p>For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you.</p>
                    <p>You can end the spell early by using either of the following special functions.</p>
                    <p><b>Break Enchantment</b> — As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures.</p>
                    <p><b>Dismissal</b> — As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren't on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DominatePersonLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dominate Person</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DominatePerson" class="move-lower" @change="save('DominatePerson', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to beguile a humanoid that you can see within range.</p>
                    <p>It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.</p>
                    <p>While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.</p>
                    <p>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.</p>
                    <p>Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 Turns.</p>
                    <p>When you use a 7th-level spell slot, the duration is concentration, up to 1 hour.</p>
                    <p>When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DreamLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dream</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Dream" class="move-lower" @change="save('Dream', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell shapes a creature's dreams.</p>
                    <p>Choose a creature known to you as the target of this spell.</p>
                    <p>The target must be on the same plane of existence as you.</p>
                    <p>Creatures that don't sleep, such as elves, can't be contacted by this spell.</p>
                    <p>You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can't take actions or move.</p>
                    <p>If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking.</p>
                    <p>If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams.</p>
                    <p>You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than 10 words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.</p>
                    <p>If you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d6 Psychic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FlameStrikeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Flame Strike</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FlameStrike" class="move-lower" @change="save('FlameStrike', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A vertical column of divine fire roars down from the heavens in a location you specify.</p>
                    <p>Each creature in a 2 Square Radius, 8 Square High Cylinder centered on a point within range must make a Dexterity saving throw.</p>
                    <p>A creature takes 4d6 fire damage and 4d6 Light damage on a failed save, or half as much damage on a successful one.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d6 Fire and 4d6 Light</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Fire or Light Per Spell Slot Above 5th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GeasLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Geas</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Geas" class="move-lower" @change="save('Geas', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide.</p>
                    <p>If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration.</p>
                    <p>While the creature is charmed by you, it takes 5d10 Psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day.</p>
                    <p>A creature that can't understand you is unaffected by the spell.</p>
                    <p>You can issue any command you choose, short of an activity that would result in certain death.</p>
                    <p>Should you issue a suicidal command, the spell ends.</p>
                    <p>You can end the spell early by using an action to dismiss it.</p>
                    <p>A <i>remove curse</i>, <i>greater restoration</i>, or <i>wish</i> spell also ends it.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year.</p>
                    <p>When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above.</p>

                    <h2>Damage</h2>
                    <p>5d10 Psychic If You Are Disobeyed</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>30 Days</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GreaterRestorationLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Greater Restoration</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GreaterRestoration" class="move-lower" @change="save('GreaterRestoration', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You imbue a creature you touch with positive energy to undo a debilitating effect.</p>
                    <p>You can reduce the target's exhaustion level by one, or end one of the following effects on the target:</p>
                    <ul>
                      <li>1 effect that charmed or petrified the target</li>
                      <li>1 curse, including the target's attunement to a cursed magic item</li>
                      <li>Any reduction to 1 of the target's ability scores</li>
                      <li>1 effect reducing the target's HP maximum</li>
                    </ul>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HallowLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hallow</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Hallow" class="move-lower" @change="save('Hallow', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a point and infuse an area around it with holy (or unholy) power.</p>
                    <p>The area can have a radius up to 12 Squares, and the spell fails if the radius includes an area already under the effect a <i>hallow</i> spell.</p>
                    <p>The affected area is subject to the following effects.</p>
                    <p>First, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect.</p>
                    <p>Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as orcs or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area.</p>
                    <p><b>Courage</b> — Affected creatures can't be frightened while in the area.</p>
                    <p><b>Darkness</b> — Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can't illuminate the area.</p>
                    <p><b>Daylight</b> — Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can't extinguish the light.</p>
                    <p><b>Energy Protection</b> — Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing.</p>
                    <p><b>Energy Vulnerability</b> — Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing.</p>
                    <p><b>Everlasting Rest</b> — Dead bodies interred in the area can't be turned into undead.</p>
                    <p><b>Extradimensional Interference</b> — Affected creatures can't move or travel using teleportation or by extradimensional or interplanar means.</p>
                    <p><b>Fear</b> — Affected creatures are frightened while in the area.</p>
                    <p><b>Silence</b> — No sound can emanate from within the area, and no sound can reach into it.</p>
                    <p><b>Tongues</b> — Affected creatures can communicate with any other creature in the area, even if they don't share a common language.</p>

                    <h2>Casting Time</h2>
                    <p>1 Day</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HoldMonsterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Hold Monster</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HoldMonster" class="move-lower" @change="save('HoldMonster', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose a creature that you can see within range.</p>
                    <p>The target must succeed on a Wisdom saving throw or be paralyzed for the duration.</p>
                    <p>This spell has no effect on undead.</p>
                    <p>At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th.</p>
                    <p>The creatures must be within 6 Squares of each other when you target them.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ImmolationLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Immolation</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Immolation" class="move-lower" @change="save('Immolation', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Flames wreathe one creature you can see within range.</p>
                    <p>The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell’s duration.</p>
                    <p>The burning target sheds bright light in a 6 Square Radius and dim light for an additional 6 Squares.</p>
                    <p>At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one.</p>
                    <p>These magical flames can’t be extinguished by nonmagical means.</p>
                    <p>If damage from this spell kills a target, the target is turned to ash.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>8d6 Fire, 4d6 Fire Each Turn Afterwards</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InsectPlagueLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Insect Plague</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="InsectPlague" class="move-lower" @change="save('InsectPlague', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Swarming, biting locusts fill a 4 Square Sphere centered on a point you choose within range.</p>
                    <p>The sphere spreads around corners.</p>
                    <p>The sphere remains for the duration, and its area is lightly obscured.</p>
                    <p>The sphere's area is difficult terrain.</p>
                    <p>Roll for each creature in the targeted area.</p>
                    <p>Creatures take half as much damage on a failed roll.</p>
                    <p>Roll whenever a creature enters the targeted area or ends its turn there.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d10</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d10 Per Spell Slot Above 5th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="LegendLoreLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Legend Lore</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="LegendLore" class="move-lower" @change="save('LegendLore', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known.</p>
                    <p>If the thing you named isn't of legendary importance, you gain no information.</p>
                    <p>The more information you already have about the thing, the more precise and detailed the information you receive is.</p>
                    <p>The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: “Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips."</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MaelstromLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Maelstrom</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Maelstrom" class="move-lower" @change="save('Maelstrom', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A swirling mass of 1 Square Deep water appears in a 6 Square Radius centered on a point you can see within range.</p>
                    <p>The point must be on the ground or in a body of water.</p>
                    <p>Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 damage and be pulled 2 Squares toward the center.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>6d6</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MassCureWoundsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mass Cure Wounds</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MassCureWounds" class="move-lower" @change="save('MassCureWounds', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A wave of healing energy washes out from a point of your choice within range.</p>
                    <p>Choose up to 6 creatures in a 6 Square Sphere centered on that point.</p>
                    <p>Each target regains HP equal to 3d8 + your spellcasting ability modifier.</p>
                    <p>This spell has no effect on undead or constructs.</p>

                    <h2 class="move-lower">Healing</h2>
                    <p>3d8 + Spellcasting Level</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Healing Per Spell Slot Above 5th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MisleadLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mislead</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Mislead" class="move-lower" @change="save('Mislead', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You become invisible at the same time that an illusory double of you appears where you are standing.</p>
                    <p>The double lasts for the duration, but the invisibility ends if you attack or cast a spell.</p>
                    <p>You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.</p>
                    <p>You can see through its eyes and hear through its ears as if you were located where it is.</p>
                    <p>On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ModifyMemoryLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Modify Memory</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ModifyMemory" class="move-lower" @change="save('ModifyMemory', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to reshape another creature's memories.</p>
                    <p>One creature that you can see must make a Wisdom saving throw.</p>
                    <p>If you are fighting the creature, it has advantage on the saving throw.</p>
                    <p>On a failed save, the target becomes charmed by you for the duration.</p>
                    <p>The charmed target is incapacitated and unaware of its surroundings, though it can still hear you.</p>
                    <p>If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.</p>
                    <p>While this charm lasts, you can affect the target's memory of an event that it experienced within the last Day and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.</p>
                    <p>You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.</p>
                    <p>A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner.</p>
                    <p>A <i>remove curse</i> or <i>greater restoration</i> spell cast on the target restores the creature's true memory.</p>
                    <h3>Higher Levels</h3>
                    <p>If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level).</p>
                    <p>30 days ago (7th level).</p>
                    <p>1 year ago (8th level).</p>
                    <p>Any time in the creature's past (9th level).</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PasswallLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Passwall</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Passwall" class="move-lower" @change="save('Passwall', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration.</p>
                    <p>You choose the opening's dimensions: up to 1 Square Wide, 2 Squares Tall, and 4 Squares Deep.</p>
                    <p>The passage creates no instability in a structure surrounding it.</p>
                    <p>When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PlanarBindingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Planar Binding</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PlanarBinding" class="move-lower" @change="save('PlanarBinding', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service.</p>
                    <p>The creature must be within range for the entire casting of the spell. Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.</p>
                    <p>If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.</p>
                    <p>A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives.</p>
                    <p>If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence.</p>
                    <p>If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>
                    <h3>Higher Levels</h3>
                    <p>10 days with a 6th-level slot.</p>
                    <p>30 days with a 7th- level slot.</p>
                    <p>180 days with an 8th-level slot</p>
                    <p>1 year and a day with a 9th-level spell slot</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="RaiseDeadLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Raise Dead</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="RaiseDead" class="move-lower" @change="save('RaiseDead', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 HP.</p>
                    <p>This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died.</p>
                    <p>This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life.</p>
                    <p>The spell can't return an undead creature to life.</p>
                    <p>This spell closes all mortal wounds, but it doesn't restore missing body parts.</p>
                    <p>If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.</p>
                    <p>Coming back from the dead is an ordeal. The target takes a −4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ReincarnateLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Reincarnate</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Reincarnate" class="move-lower" @change="save('Reincarnate', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails.</p>
                    <p>The magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change.</p>
                    <p>The DM rolls a 1d20 and consults the following list to determine what form the creature takes when restored to life, or the DM chooses a form.</p>
                    <p>The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly.</p>

                    <h2>Reincarnated Race</h2>
                    <p>1: Dragonborn</p>
                    <p>2-3: Hill Dwarf</p>
                    <p>4: Mountain Dwarf</p>
                    <p>5-6: Dark Elf</p>
                    <p>7: High Elf</p>
                    <p>8-9: Wood Elf</p>
                    <p>10: Forest Gnome</p>
                    <p>11-12: Rock Gnome</p>
                    <p>13: Half-Elf</p>
                    <p>14-15: Half-Orc</p>
                    <p>16: Lightfoot Halfling</p>
                    <p>17-18: Stout Halfling</p>
                    <p>19: Human</p>
                    <p>20: Tiefling</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ScryingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Scrying</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Scrying" class="move-lower" @change="save('Scrying', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You can see and hear a particular creature you choose that is on the same plane of existence as you.</p>
                    <p>The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it.</p>
                    <p>If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.</p>
                    <p>You have heard of the target: +5 Save Modifier</p>
                    <p>You have met the target: 0 Save Modifier</p>
                    <p>You know the target well: -5 Save Modifier</p>
                    <p>Likeness or picture connection: -2 Save Modifier</p>
                    <p>Possession or garmet connection: -4 Save Modifier</p>
                    <p>Boyd part, lock of hiar, bit of nail, or the like connection: -10 Save Modifier</p>
                    <p>On a successful save, the target isn't affected, and you can't use this spell against it again for 1 Day.</p>
                    <p>On a failed save, the spell creates an invisible sensor within 2 Squares of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 2 Squares of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.</p>
                    <p>Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SeemingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Seeming</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Seeming" class="move-lower" @change="save('Seeming', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell allows you to change the appearance of any number of creatures that you can see within range.</p>
                    <p>You give each target you choose a new, illusory appearance.</p>
                    <p>An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.</p>
                    <p>The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.</p>
                    <p>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.</p>
                    <p>A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spellcasting level. If it succeeds, it becomes aware that the target is disguised.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonCelestialSpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Celestial Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonCelestialSpirit" class="move-lower" @change="save('SummonCelestialSpirit', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth a spirit from the Upper Planes. The spirit manifests physically in an angelic form in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Celestial Spirit stats below.</p>
                    <p>When you cast the spell, choose Avenger or Defender. Your choice determines the creature’s attack in its stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 6th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stats.</p>

                    <h2 class="move-lower">Stats</h2>
                    <p><b>AC</b>: 11 + the level of the spell</p>
                    <p><b>HP</b>: 3 + Your Spellcasting Bonus + 10 Times the Spell's Level</p>
                    <p><b>Speed</b>: 8 Squares</p>
                    <p><b>Strength Bonus</b>: +3</p>
                    <p><b>Dexterity Bonus</b>: +2</p>
                    <p><b>Constitution Bonus</b>: +3</p>
                    <p><b>Intelligence Bonus</b>: 0</p>
                    <p><b>Wisdom Bonus</b>: +2</p>
                    <p><b>Charisma Bonus</b>: +3</p>
                    <p><b>Damage Resistances</b>: Light</p>
                    <p><b>Condition Immunities</b>: Charmed and Frightened</p>
                    <p><b>Senses</b>: Darkvision 12 Squares</p>
                    <p><b>Languages</b>: Celestial and the Languages You Speak</p>
                    <p><b><i>Multiattack</i></b>: The celestial makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p><b><i>Radiant Bow (Avenger Only)</i></b>: Ranged Weapon Attack: +2 + the spell’s level to hit, range 120 Squares, one target. Hit: 2d6 + 2 + the spell’s level Light damage.</p>
                    <p><b><i>Radiant Mace (Defender Only)</i></b>: Melee Weapon Attack: +3 + the spell’s level to hit, reach 1 Square, one target. Hit: 1d10 + 3 + the spell’s level Light damage, and the celestial can choose itself or another creature it can see within 2 Squares of the target. The chosen creature gains temporary HP equal to the damage dealt, provided it doesn’t already have temporary HP.</p>
                    <p><b><i>Healing Touch (1/Day)</i></b>: The celestial touches another creature. The target magically regains HP equal to 2d8 + the spell’s level.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TelekinesisLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Telekinesis</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Telekinesis" class="move-lower" @change="save('Telekinesis', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You gain the ability to move or manipulate creatures or objects by thought.</p>
                    <p>When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below.</p>
                    <p>You can affect the same target round after round, or choose a new one at any time.</p>
                    <p>If you switch targets, the prior target is no longer affected by the spell.</p>
                    <p><b>Creature</b> — You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 6 Squares in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.</p>
                    <p>On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.</p>
                    <p><b>Object</b> — You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 6 Squares in any direction, but not beyond the range of this spell.</p>
                    <p>If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 6 Squares in any direction but not beyond the range of this spell.</p>
                    <p>You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TelepathicBondLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Telepathic Bond</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TelepathicBond" class="move-lower" @change="save('TelepathicBond', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You forge a telepathic link among up to 8 willing creatures of your choice within range, psychically linking each creature to all the others for the duration.</p>
                    <p>Creatures with Intelligence scores of 2 or less aren't affected by this spell.</p>
                    <p>Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language.</p>
                    <p>The communication is possible over any distance, though it can't extend to other planes of existence.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TeleportationCircleLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Teleportation Circle</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TeleportationCircle" class="move-lower" @change="save('TeleportationCircle', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>As you cast the spell, you draw a 2 Square Circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 1 Square of the destination circle or in the nearest unoccupied space if that space is occupied.</p>
                    <p>Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence—a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.</p>
                    <p>You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TransmuteRockLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Transmute Rock</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TransmuteRock" class="move-lower" @change="save('TransmuteRock', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You choose an area of stone or mud that you can see that fits within a 8 Square Cube and is within range, and choose one of the following effects.</p>
                    <p><b>Transmute Rock to Mud</b> — Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell’s duration.</p>
                    <p>The ground in the spell’s area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 Squares of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.</p>
                    <p>If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 damage on a failed save, or half as much damage on a successful one.</p>
                    <p><b>Transmut Mud to Rock</b> — Nonmagical mud or quicksand in the area no more than 2 Squares Deep transforms into soft stone for the spell’s duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has 15 AC and 25 HP, and it is immune to poison and psychic damage.</p>

                    <h2>Damage</h2>
                    <p>4d8 (Rock to Mud Only — If transmuting rock above target)</p>
                    
                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TreeStrideLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Tree Stride</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TreeStride" class="move-lower" @change="save('TreeStride', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 100 Squares.</p>
                    <p>Both trees must be living and at least the same size as you.</p>
                    <p>You must use 1 Square of movement to enter a tree.</p>
                    <p>You instantly know the location of all other trees of the same kind within 100 Squares and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in.</p>
                    <p>You appear in a spot of your choice within 1 Square of the destination tree, using another 1 Square of movement.</p>
                    <p>If you have no movement left, you appear within 1 Square of the tree you entered.</p>
                    <p>You can use this transportation ability once per round for the duration.</p>
                    <p>You must end each turn outside a tree.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WallOfForceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wall Of Force</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WallOfForce" class="move-lower" @change="save('WallOfForce', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>An invisible wall of force springs into existence at a point you choose within range.</p>
                    <p>The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle.</p>
                    <p>It can be free floating or resting on a solid surface.</p>
                    <p>You can form it into a hemispherical dome or a sphere with a radius of up to 2 Squares, or you can shape a flat surface made up of ten 2-Square-by-2-Square panels.</p>
                    <p>Each panel must be contiguous with another panel.</p>
                    <p>In any form, the wall is 1/4 inch thick.</p>
                    <p>If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).</p>
                    <p>Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by <i>dispel magic</i>.</p>
                    <p>A <i>disintegrate</i> spell destroys the wall instantly, however.</p>
                    <p>The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WallOfStoneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wall Of Stone</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WallOfStone" class="move-lower" @change="save('WallOfStone', 'Level 5')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A nonmagical wall of solid stone springs into existence at a point you choose within range.</p>
                    <p>The wall is 6 inches thick and is composed of ten 2-Square-by-2-Square panels.</p>
                    <p>Each panel must be contiguous with at least one other panel.</p>
                    <p>Alternatively, you can create 2-Square-by-4-Square panels that are only 3 inches thick.</p>
                    <p>If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice).</p>
                    <p>If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.</p>
                    <p>The wall can have any shape you desire, though it can't occupy the same space as a creature or object.</p>
                    <p>The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.</p>
                    <p>If you create a span greater than 4 Squares in length, you must halve the size of each panel to create supports.</p>
                    <p>You can crudely shape the wall to create crenellations, battlements, and so on.</p>
                    <p>The wall is an object made of stone that can be damaged and thus breached. Each panel has 15 AC and 30 HP per inch of thickness. Reducing a panel to 0 HP destroys it and might cause connected panels to collapse at the DM's discretion.</p>
                    <p>If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 6 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#BladeBarrierLibrary" title="Blade Barrier"></f7-list-item>
                <f7-list-item link="#" popup-open="#BonesOfTheEarthLibrary" title="Bones Of The Earth"></f7-list-item>
                <f7-list-item link="#" popup-open="#ChainLightningLibrary" title="Chain Lightning"></f7-list-item>
                <f7-list-item link="#" popup-open="#CircleOfDeathLibrary" title="Circle Of Death"></f7-list-item>
                <f7-list-item link="#" popup-open="#ConjureFeyLibrary" title="Conjure Fey"></f7-list-item>
                <f7-list-item link="#" popup-open="#ContingencyLibrary" title="Contingency"></f7-list-item>
                <f7-list-item link="#" popup-open="#CreateUndeadLibrary" title="Create Undead"></f7-list-item>
                <f7-list-item link="#" popup-open="#DisintegrateLibrary" title="Disintegrate"></f7-list-item>
                <f7-list-item link="#" popup-open="#EyebiteLibrary" title="Eyebite"></f7-list-item>
                <f7-list-item link="#" popup-open="#FindThePathLibrary" title="Find The Path"></f7-list-item>
                <f7-list-item link="#" popup-open="#FleshToStoneLibrary" title="Flesh To Stone"></f7-list-item>
                <f7-list-item link="#" popup-open="#ForbiddanceLibrary" title="Forbiddance"></f7-list-item>
                <f7-list-item link="#" popup-open="#FreezingSphereLibrary" title="Freezing Sphere"></f7-list-item>
                <f7-list-item link="#" popup-open="#GlobeOfInvulnerabilityLibrary" title="Globe Of Invulnerability"></f7-list-item>
                <f7-list-item link="#" popup-open="#GuardsAndWardsLibrary" title="Guards And Wards"></f7-list-item>
                <f7-list-item link="#" popup-open="#HarmLibrary" title="Harm"></f7-list-item>
                <f7-list-item link="#" popup-open="#HealLibrary" title="Heal"></f7-list-item>
                <f7-list-item link="#" popup-open="#HeroesFeastLibrary" title="Heroes' Feast"></f7-list-item>
                <f7-list-item link="#" popup-open="#InstantSummonsLibrary" title="Instant Summons"></f7-list-item>
                <f7-list-item link="#" popup-open="#InvestitureOfFlameLibrary" title="Investiture Of Flame"></f7-list-item>
                <f7-list-item link="#" popup-open="#InvestitureOfIceLibrary" title="Investiture Of Ice"></f7-list-item>
                <f7-list-item link="#" popup-open="#InvestitureOfStoneLibrary" title="Investiture Of Stone"></f7-list-item>
                <f7-list-item link="#" popup-open="#InvestitureOfWindLibrary" title="Investiture Of Wind"></f7-list-item>
                <f7-list-item link="#" popup-open="#MagicJarLibrary" title="Magic Jar"></f7-list-item>
                <f7-list-item link="#" popup-open="#MassSuggestionLibrary" title="Mass Suggestion"></f7-list-item>
                <f7-list-item link="#" popup-open="#MoveEarthLibrary" title="Move Earth"></f7-list-item>
                <f7-list-item link="#" popup-open="#OtherworldlyFormLibrary" title="Otherworldly Form"></f7-list-item>
                <f7-list-item link="#" popup-open="#OttosIrresistibleDanceLibrary" title="Otto's Irresistible Dance"></f7-list-item>
                <f7-list-item link="#" popup-open="#PlanarAllyLibrary" title="Planar Ally"></f7-list-item>
                <f7-list-item link="#" popup-open="#PrimordialWardLibrary" title="Primordial Ward"></f7-list-item>
                <f7-list-item link="#" popup-open="#ProgrammedIllusionLibrary" title="Programmed Illusion"></f7-list-item>
                <f7-list-item link="#" popup-open="#SummonFiendishSpiritLibrary" title="Summon Fiendish Spirit"></f7-list-item>
                <f7-list-item link="#" popup-open="#SunbeamLibrary" title="Sunbeam"></f7-list-item>
                <f7-list-item link="#" popup-open="#TransportViaPlantsLibrary" title="Transport Via Plants"></f7-list-item>
                <f7-list-item link="#" popup-open="#TrueSeeingLibrary" title="True Seeing"></f7-list-item>
                <f7-list-item link="#" popup-open="#WallOfIceLibrary" title="Wall Of Ice"></f7-list-item>
                <f7-list-item link="#" popup-open="#WallOfThornsLibrary" title="Wall Of Thorns"></f7-list-item>
                <f7-list-item link="#" popup-open="#WindWalkLibrary" title="Wind Walk"></f7-list-item>
                <f7-list-item link="#" popup-open="#WordOfRecallLibrary" title="Word Of Recall"></f7-list-item>
              </f7-list>

              <f7-popup id="BladeBarrierLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Blade Barrier</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BladeBarrier" class="move-lower" @change="save('BladeBarrier', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a vertical wall of whirling, razor-sharp blades made of magical energy.</p>
                    <p>You can make a straight wall up to 20 Squares Long, 4 Squares High, and 1 Square Thick, or a ringed wall up to 12 Squares in diameter, 4 Squares High, and 1 Square Thick.</p>
                    <p>The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.</p>
                    <p>When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 damage. On a successful save, the creature takes half as much damage.</p>

                    <h2>Damage</h2>
                    <p>6d10</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="BonesOfTheEarthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Bones Of The Earth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="BonesOfTheEarth" class="move-lower" @change="save('BonesOfTheEarth', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You cause up to 6 pillars of stone to burst from places on the ground that you can see within range.</p>
                    <p>Each pillar is a cylinder that has a diameter of 1 Square and a height of up to 6 Squares. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller.</p>
                    <p>Each pillar has 5 AC and 30 HP.</p>
                    <p>When reduced to 0 HP, a pillar crumbles into rubble, which creates an area of difficult terrain with a 2 Square Radius that lasts until the rubble is cleared. Each 1 Square portion of the area requires at least 1 minute to clear by hand.</p>
                    <p>If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.</p>
                    <p>If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6  damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature’s choice) against your spellcasting level. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 7th level or higher, you can create 2 additional pillars for each slot level above 6th.</p>

                    <h2>Damage</h2>
                    <p>6d6 If Squashing Creature Against Ceiling</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ChainLightningLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Chain Lightning</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ChainLightning" class="move-lower" @change="save('ChainLightning', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a bolt of lightning that arcs toward a target of your choice that you can see within range.</p>
                    <p>3 bolts then leap from that target to as many as 3 other targets, each of which must be within 6 Squares of the first target.</p>
                    <p>A target can be a creature or an object and can be targeted by only 1 of the bolts.</p>
                    <p>Targets take half as much damage on a failed roll.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d8 Electric</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CircleOfDeathLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Circle Of Death</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CircleOfDeath" class="move-lower" @change="save('CircleOfDeath', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A sphere of negative energy ripples out in a 12 Square Sphere from a point within range.</p>
                    <p>Creatures take half as much damage on a failed roll.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>8d6 Necrotic</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 2d6 Necrotic Per Spell Slot Above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ConjureFeyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Conjure Fey</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ConjureFey" class="move-lower" @change="save('ConjureFey', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You summon a fey creature of difficulty level 6 or lower, or a fey spirit that takes the form of a beast of difficulty level 6 or lower. It appears in an unoccupied space that you can see within range.</p>
                    <p>The fey creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The fey creature is friendly to you and your companions for the duration.</p>
                    <p>It obeys any verbal commands that you issue to it, as long as they don't violate its alignment.</p>
                    <p>If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.</p>
                    <p>If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 7th level or higher, the difficulty level increases by 1 for each slot level above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ContingencyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Contingency</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Contingency" class="move-lower" @change="save('Contingency', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting <i>contingency</i>, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a <i>contingency</i> cast with <i>water breathing</i> might stipulate that <i>water breathing</i> comes into effect when you are engulfed in water or a similar liquid.</p>
                    <p>The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then <i>contingency</i> ends.</p>
                    <p>The contingent spell takes effect only on you, even if it can normally target others.</p>
                    <p>You can use only one <i>contingency</i> spell at a time.</p>
                    <p>If you cast this spell again, the effect of another <i>contingency</i> spell on you ends. Also, <i>contingency</i> ends on you if its material component is ever not on your person.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Days</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CreateUndeadLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Create Undead</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="CreateUndead" class="move-lower" @change="save('CreateUndead', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You can cast this spell only at night.</p>
                    <p>Choose up to 3 corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control.</p>
                    <p>As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 24 Squares of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor.</p>
                    <p>If you issue no commands, the creature only defends itself against hostile creatures.</p>
                    <p>Once given an order, the creature continues to follow it until its task is complete.</p>
                    <p>The creature is under your control for 1 Day, after which it stops obeying any command you have given it.</p>
                    <p>To maintain control of the creature for another 1 Day, you must cast this spell on the creature before the current 1 Day period ends. This use of the spell reasserts your control over up to 3 creatures you have animated with this spell, rather than animating new ones.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a 7th-level spell slot, you can animate or reassert control over 4 ghouls.</p>
                    <p>When you cast this spell using an 8th-level spell slot, you can animate or reassert control over 5 ghouls or 2 ghasts or wights.</p>
                    <p>When you cast this spell using a 9th-level spell slot, you can animate or reassert control over 6 ghouls, 3 ghasts or wights, or 2 mummies.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DisintegrateLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Disintegrate</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Disintegrate" class="move-lower" @change="save('Disintegrate', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by <i>wall of force</i>.</p>
                    <p>The target is disintegrated if this damage leaves it with 0 HP.</p>
                    <p>A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust.</p>
                    <p>The creature can be restored to life only by means of a <i>true resurrection</i> or a <i>wish</i> spell.</p>
                    <p>This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force.</p>
                    <p>If the target is a Huge or larger object or creation of force, this spell disintegrates a 2 Square Cube portion of it.</p>
                    <p>A magic item is unaffected by this spell.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d6 + 40</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 3d6 Per Spell Slot Above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EyebiteLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Eyebite</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Eyebite" class="move-lower" @change="save('Eyebite', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>For the spell's duration, your eyes become an inky void imbued with dread power.</p>
                    <p>1 creature of your choice within 12 Squares of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration.</p>
                    <p>On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of <i>eyebite</i>.</p>
                    <p><b>Asleep</b> — The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.</p>
                    <p><b>Panicked</b> — The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 12 Squares away from you where it can no longer see you, this effect ends.</p>
                    <p><b>Sickened</b> — The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FindThePathLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Find The Path</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FindThePath" class="move-lower" @change="save('FindThePath', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence.</p>
                    <p>If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as "a green dragon's lair"), the spell fails.</p>
                    <p>For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies.</p>
                    <p>While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FleshToStoneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Flesh To Stone</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FleshToStone" class="move-lower" @change="save('FleshToStone', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to turn one creature that you can see within range into stone.</p>
                    <p>If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected.</p>
                    <p>A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.</p>
                    <p>If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state.</p>
                    <p>If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ForbiddanceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Forbiddance</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Forbiddance" class="move-lower" @change="save('Forbiddance', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a ward against magical travel that protects up to 8,000&sup2; Squares of floor space to a height of 6 Squares above the floor.</p>
                    <p>For the duration, creatures can't teleport into the area or use portals, such as those created by the <i>gate</i> spell, to enter the area.</p>
                    <p>The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the <i>plane shift</i> spell.</p>
                    <p>In addition, the spell damages types of creatures that you choose when you cast it.</p>
                    <p>Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 Light or Necrotic damage (your choice when you cast this spell).</p>
                    <p>When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.</p>
                    <p>The spell's area can't overlap with the area of another <i>forbiddance</i> spell.</p>
                    <p>If you cast <i>forbiddance</i> every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting.</p>

                    <h2>Damage</h2>
                    <p>5d10 Light or Necrotic (Your Choice)</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FreezingSphereLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Freezing Sphere</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FreezingSphere" class="move-lower" @change="save('FreezingSphere', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 12 Square Sphere.</p>
                    <p>Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 Ice damage. On a successful save, it takes half as much damage.</p>
                    <p>If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 6 Square Diameter. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spellcasting level to break free.</p>
                    <p>You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 8 Squares) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d6 Ice</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Ice Per Spell Slot Above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GlobeOfInvulnerabilityLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Globe Of Invulnerability</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GlobeOfInvulnerability" class="move-lower" @change="save('GlobeOfInvulnerability', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>An immobile, faintly shimmering barrier springs into existence in a 2 Square Radius around you and remains for the duration.</p>
                    <p>Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them.</p>
                    <p>Similarly, the area within the barrier is excluded from the areas affected by such spells.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of 1 level higher for each slot level above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GuardsAndWardsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Guards And Wards</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="GuardsAndWards" class="move-lower" @change="save('GuardsAndWards', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a ward that protects up to 500&sup; Squares of floor space.</p>
                    <p>The warded area can be up to 4 Squares Tall, and shaped as you desire.</p>
                    <p>You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.</p>
                    <p>When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose.</p>
                    <p>You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.</p>
                    <p><i>Guards and Wards</i> creates the following effects within the warded area.</p>
                    <p><b>Corridors</b> — Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50% chance that a creature other than you will believe it is going in the opposite direction from the one it chooses.</p>
                    <p><b>Doors</b> — All doors in the warded area are magically locked, as if sealed by an <i>arcane lock</i> spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the <i>minor illusion</i> spell) to make them appear as plain sections of wall.</p>
                    <p><b>Stairs</b> — Webs fill all stairs in the warded area from top to bottom, as the <i>web</i> spell. These strands regrow in 10 minutes if they are burned or torn away while <i>guards and wards</i> lasts.</p>
                    <p><b>Other Spell Effect</b> — You can place your choice of one of the following magical effects within the warded area of the stronghold.</p>
                    <ul>
                      <li>Place <i>dancing lights</i> in 4 corridors. You can designate a simple program that the lights repeat as long as <i>guards and wards</i> lasts.</li>
                      <li>Place <i>magic mouth</i> in 2 locations.</li>
                      <li>Place <i>stinking cloud</i> in 2 locations. The vapors appear in the places you designate; they return within 10 minutes if dispersed by wind while <i>guards and wards</i> lasts.</li>
                      <li>Place a constant <i>gust of wind</i> in 1 corridor or room.</li>
                      <li>Place a <i>suggestion</i> in 1 location. You select an area of up to 1 Square, and any creature that enters or passes through the area receives the suggestion mentally.</li>
                    </ul>
                    <p>The whole warded area radiates magic.</p>
                    <p>A <i>dispel magic</i> cast on a specific effect, if successful, removes only that effect.</p>
                    <p>You can create a permanently guarded and warded structure by casting this spell there every day for 1 year.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HarmLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Harm</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Harm" class="move-lower" @change="save('Harm', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You unleash a virulent disease on a creature that you can see within range.</p>
                    <p>The target must make a Constitution saving throw. On a failed save, it takes 14d6 Necrotic damage, or half as much damage on a successful save.</p>
                    <p>The damage can't reduce the target's HP below 1.</p>
                    <p>If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the Necrotic damage it took.</p>
                    <p>Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>14d6 Necrotic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HealLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Heal</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Heal" class="move-lower" @change="save('Heal', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose a creature that you can see within range.</p>
                    <p>A surge of positive energy washes through the creature, causing it to regain 70 HP.</p>
                    <p>This spell also ends blindness, deafness, and any diseases affecting the target.</p>
                    <p>This spell has no effect on constructs or undead.</p>

                    <h2>Healing</h2>
                    <p>70 HP</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HeroesFeastLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Heroes' Feast</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HeroesFeast" class="move-lower" @change="save('HeroesFeast', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You bring forth a great feast, including magnificent food and drink.</p>
                    <p>The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over.</p>
                    <p>Up to 12 creatures can partake of the feast.</p>
                    <p>A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its HP maximum also increases by 2d10, and it gains the same number of HP.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InstantSummonsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Instant Summons</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="InstantSummons" class="move-lower" @change="save('InstantSummons', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface.</p>
                    <p>At any time thereafter, you can use your action to speak the item's name. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends.</p>
                    <p>If another creature is holding or carrying the item, casting the spell doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.</p>
                    <p><i>Dispel magic</i> or a similar effect successfully applied to the sapphire ends this spell's effect.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InvestitureOfFlameLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Investiture Of Flame</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="InvestitureOfFlame" class="move-lower" @change="save('InvestitureOfFlame', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Flames race across your body, shedding bright light in a 6 Square Radius and dim light for an additional 6 Squares for the spell’s duration.</p>
                    <p>The flames don’t harm you.</p>
                    <p>Until the spell ends, you gain the following benefits:</p>
                    <ul>
                      <li>You are immune to fire damage and have resistance to ice damage.</li>
                      <li>Any creature that moves within 1 Square of you for the first time on a turn or ends its turn there takes 1d10 Fire damage.</li>
                      <li>You can use your action to create a line of fire 3 Squares Long and 1 Square Wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 Fire damage on a failed save, or half as much damage on a successful one.</li>
                    </ul>

                    <h2 class="move-lower">Damage</h2>
                    <p>1d10 Fire (Fire Around Self) or 4d8 Fire (Fire On Ground)</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InvestitureOfIceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Investiture Of Ice</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="InvestitureOfIce" class="move-lower" @change="save('InvestitureOfIce', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, ice rimes your body, and you gain the following benefits:</p>
                    <ul>
                      <li>You are immune to Ice damage and have resistance to fire damage.</li>
                      <li>You can move across difficult terrain created by ice or snow without spending extra movement.</li>
                      <li>The ground in a 2 Square Radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.</li>
                      <li>You can use your action to create a 3 Square Cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 Ice damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.</li>
                    </ul>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d6 Ice (Cone Only)</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self or 3 Square Cone</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InvestitureOfStoneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Investiture Of Stone</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="InvestitureOfStone" class="move-lower" @change="save('InvestitureOfStone', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, bits of rock spread across your body, and you gain the following benefits:</p>
                    <ul>
                      <li>You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.</li>
                      <li>You can use your action to create a small earthquake on the ground in a 3 Square Radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone.</li>
                      <li>You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can’t end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.</li>
                    </ul>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="InvestitureOfWindLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Investiture Of Wind</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="InvestitureOfWind" class="move-lower" @change="save('InvestitureOfWind', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, wind whirls around you, and you gain the following benefits:</p>
                    <ul>
                      <li>Ranged weapon attacks made against you have disadvantage on the attack roll.</li>
                      <li>You gain a flying speed of 12 Squares. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.</li>
                      <li>You can use your action to create a 3 Square Cube of swirling wind centered on a point you can see within 12 Squares of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 2 Squares away from the center of the cube.</li>
                    </ul>

                    <h2 class="move-lower">Damage</h2>
                    <p>2d10 (Cube Only)</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self or 3 Square Cube</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MagicJarLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Magic Jar</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MagicJar" class="move-lower" @change="save('MagicJar', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 20 Squares out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body.</p>
                    <p>You can attempt to possess any humanoid within 20 Squares of you that you can see (creatures warded by a protection from evil and good or magic circle spell can't be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 1 Day.</p>
                    <p>Once you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can't use any of its class features.</p>
                    <p>Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all.</p>
                    <p>While possessing a body, you can use your action to return from the host body to the container if it is within 20 Squares of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting level. On a success, you return to the container if it is within 20 Squares of you. Otherwise, you die.</p>
                    <p>If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 20 Squares away from you or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 20 Squares. Otherwise, that creature dies.</p>
                    <p>When the spell ends, the container is destroyed.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MassSuggestionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mass Suggestion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MassSuggestion" class="move-lower" @change="save('MassSuggestion', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You suggest a course of activity (limited to a sentence or two) and magically influence up to 12 creatures of your choice that you can see within range and that can hear and understand you.</p>
                    <p>Creatures that can't be charmed are immune to this effect.</p>
                    <p>The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.</p>
                    <p>Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration.</p>
                    <p>If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.</p>
                    <p>You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet.</p>
                    <p>If the condition isn't met before the spell ends, the activity isn't performed.</p>
                    <p>If you or any of your companions damage a creature affected by this spell, the spell ends for that creature.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a 7th-level spell slot, the duration is 10 days.</p>
                    <p>When you use an 8th-level spell slot, the duration is 30 days.</p>
                    <p>When you use a 9th-level spell slot, the duration is a year and a day.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MoveEarthLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Move Earth</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MoveEarth" class="move-lower" @change="save('MoveEarth', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose an area of terrain no larger than 8 Squares on a side within range.</p>
                    <p>You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 8 Square Area, you can create a pillar up to 4 Squares High, raise or lower the square's elevation by up to 4 Squares, dig a trench up to 4 Squares Deep, and so on. It takes 10 minutes for these changes to complete.</p>
                    <p>At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.</p>
                    <p>Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.</p>
                    <p>This spell can't manipulate natural stone or stone construction.</p>
                    <p>Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.</p>
                    <p>Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>2 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="OtherworldlyFormLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Otherworldly Form</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="OtherworldlyForm" class="move-lower" @change="save('OtherworldlyForm', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself.</p>
                    <p>You gain the following benefits until the spell ends:</p>
                    <ul>
                      <li>You are immune to Fire and Poison damage (Lower Planes) or Light and Necrotic damage (Upper Planes).</li>
                      <li>You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes).</li>
                      <li>Spectral wings appear on your back, giving you a flying speed of 8 Squares.</li>
                      <li>You have a +2 bonus to AC.</li>
                      <li>All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls.</li>
                      <li>You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.</li>
                    </ul>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="OttosIrresistibleDanceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Otto's Irresistible Dance</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="OttosIrresistibleDance" class="move-lower" @change="save('OttosIrresistibleDance', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration.</p>
                    <p>Creatures that can't be charmed are immune to this spell.</p>
                    <p>A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls.</p>
                    <p>While the target is affected by this spell, other creatures have advantage on attack rolls against it.</p>
                    <p>As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PlanarAllyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Planar Ally</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PlanarAlly" class="move-lower" @change="save('PlanarAlly', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You beseech an otherworldly entity for aid.</p>
                    <p>The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range.</p>
                    <p>If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice).</p>
                    <p>When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.</p>
                    <p>Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.</p>
                    <p>As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.</p>
                    <p>After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.</p>
                    <p>A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PrimordialWardLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Primordial Ward</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PrimordialWard" class="move-lower" @change="save('PrimordialWard', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You have resistance to Acid, Ice, Fire, and Electric damage for the spell’s duration.</p>
                    <p>When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage.</p>
                    <p>If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ProgrammedIllusionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Programmed Illusion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ProgrammedIllusion" class="move-lower" @change="save('ProgrammedIllusion', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs.</p>
                    <p>The illusion is imperceptible until then. It must be no larger than a 6 Square Cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.</p>
                    <p>When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again.</p>
                    <p>The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 6 Squares of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase.</p>
                    <p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spellcasting level. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SummonFiendishSpiritLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Summon Fiendish Spirit</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="SummonFiendishSpirit" class="move-lower" @change="save('SummonFiendishSpirit', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You call forth a fiendish spirit from the Lower Planes. The spirit manifests physically in an unoccupied space that you can see within range.</p>
                    <p>This corporeal form uses the Fiendish Spirit stats below.</p>
                    <p>When you cast the spell, choose Demon, Devil, or Yugoloth. The creature physically resembles a fiend of the chosen type, which also determines some of the traits in its stats.</p>
                    <p>The creature disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>he creature is friendly to you and your companions for the spell’s duration.</p>
                    <p>It obeys verbal commands that you issue to it.</p>
                    <p>If you don’t issue any, it defends itself but otherwise takes no action.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a spell slot of 7th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block.</p>

                    <h2 class="move-lower">Stats</h2>
                    <p><b>AC</b>: 11 + the level of the spell</p>
                    <p><b>HP</b>: 2 + Your Spellcasting Bonus + 10 times the spell's level</p>
                    <p><b>Speed</b>: 8 Squares, 12 Squares (Devil Only)</p>
                    <p><b>Strength Bonus</b>: +1</p>
                    <p><b>Dexterity Bonus</b>: +3</p>
                    <p><b>Constitution Bonus</b>: +2</p>
                    <p><b>Intelligence Bonus</b>: 0</p>
                    <p><b>Wisdom Bonus</b>: 0</p>
                    <p><b>Charisma Bonus</b>: +3</p>
                    <p><b>Damage Resistances</b>: Fire</p>
                    <p><b>Damage Immunities</b>: Poison</p>
                    <p><b>Condition Immunities</b>: Poisoned</p>
                    <p><b>Senses</b>: Darkvision 12 Squares</p>
                    <p><b>Language</b>: Abyssal, Infernal, Telepaty 12 Squares</p>
                    <p><b><i>Magic Resistance</i></b>: The fiend has advantage on saving throws against spells and other magical effects.</p>
                    <p><b><i>Death Throes (Demon Only)</i></b>: When the fiend drops to 0 HP or the spell ends, the fiend explodes, and each creature within 2 Squares of it must make a Dexterity saving throw against your spellcasting level. A creature takes 2d10 + this spell’s level Fire damage on a failed save, or half as much damage on a successful one.</p>
                    <p><b><i>Devil's Sight (Devil Only)</i></b>: Magical darkness doesn’t impede the fiend’s darkvision.</p>
                    <p><b><i>Multiattack</i></b>: The fiend makes a number of attacks equal to half this spell’s level (rounded down).</p>
                    <p><b><i>Bite (Demon Only)</i></b>: Melee Weapon Attack: +3 + the spell’s level to hit, reach 1 Square, one target. Hit: 1d12 + 3 + the spell’s level Necrotic damage.</p>
                    <p><b><i>Claws (Yugoloth Only)</i></b>: Melee Weapon Attack: +3 + the spell’s level to hit, reach 1 Square, one target. Hit: 1d8 + 3 + the spell’s level damage. Immediately after the attack hits or misses, the fiend can magically teleport up to 6 Squares to an unoccupied space it can see.</p>
                    <p><b><i>Hurl Flame (Devil Only)</i></b>: Ranged Spell Attack: +3 + the spell’s level to hit, range 30 Squares, one target. Hit: 2d6 + 3 + the spell’s level Fire damage. If the target is a flammable object that isn’t being worn or carried, it also catches fire.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SunbeamLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sunbeam</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Sunbeam" class="move-lower" @change="save('Sunbeam', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A beam of brilliant light flashes out from your hand in a 1 Square Wide, 12 Squares Long line.</p>
                    <p>Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 Light damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell.</p>
                    <p>Undead and oozes have disadvantage on this saving throw.</p>
                    <p>You can create a new line of light as your action on any turn until the spell ends.</p>
                    <p>For the duration, a mote of brilliant light shines in your hand. It sheds bright light in a 6 Square Radius and dim light for an additional 6 Squares. This light is sunlight.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>6d8 Light</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TransportViaPlantsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Transport Via Plants</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TransportViaPlants" class="move-lower" @change="save('TransportViaPlants', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence.</p>
                    <p>You must have seen or touched the destination plant at least once before.</p>
                    <p>For the duration, any creature can step into the target plant and exit from the destination plant by using 1 Square of movement.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TrueSeeingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>True Seeing</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TrueSeeing" class="move-lower" @change="save('TrueSeeing', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell gives the willing creature you touch the ability to see things as they actually are.</p>
                    <p>For the duration, the creature has <i>truesight</i>, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 24 Squares.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WallOfIceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wall Of Ice</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WallOfIce" class="move-lower" @change="save('WallOfIce', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a wall of ice on a solid surface within range.</p>
                    <p>You can form it into a hemispherical dome or a sphere with a radius of up to 2 Squares, or you can shape a flat surface made up of 10 2 Square-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.</p>
                    <p>If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 Ice damage, or half as much damage on a successful save.</p>
                    <p>The wall is an object that can be damaged and thus breached. It has 12 AC and 30 HP per 2 Square section, and it is vulnerable to Fire damage. Reducing a 2 Square section of wall to 0 HP destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes 5d6 Ice damage on a failed save, or half as much damage on a successful one.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d6 Ice When It Appears</p>
                    <p>5d6 Ice Frigid Air</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 2d6 Ice When it Appears Per Spell Slot Above 6th.</p>
                    <p>Plus 1d6 Ice Frigid Air Spell Slot Above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WallOfThornsLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wall Of Thorns</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WallOfThorns" class="move-lower" @change="save('WallOfThorns', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns.</p>
                    <p>The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 12 Squares Long, 2 Squares High, and 1 Square Thick or a circle that has a 4 Square Diameter and is up to 4 Squares High and 1 Square Thick. The wall blocks line of sight.</p>
                    <p>When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 damage, or half as much damage on a successful save.</p>
                    <p>A creature can move through the wall, albeit slowly and painfully. For every 1 Square a creature moves through the wall, it must spend 4 Squares of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 damage on a failed save, or half as much damage on a successful one.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>7d8</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d8 Per Spell Slot Above 6th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WindWalkLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wind Walk</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WindWalk" class="move-lower" @change="save('WindWalk', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud.</p>
                    <p>While in this cloud form, a creature has a flying speed of 60 Squares and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.</p>
                    <p>If a creature is in cloud form and flying when the effect ends, the creature descends 12 Squares per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WordOfRecallLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Word Of Recall</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="WordOfRecall" class="move-lower" @change="save('WordOfRecall', 'Level 6')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You and up to five willing creatures within 1 Square of you instantly teleport to a previously designated sanctuary.</p>
                    <p>You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.</p>
                    <p>You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>1 Square</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 7 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#ConjureCelestialLibrary" title="Conjure Celestial"></f7-list-item>
                <f7-list-item link="#" popup-open="#DelayedBlastFireballLibrary" title="Delayed Blast Fireball"></f7-list-item>
                <f7-list-item link="#" popup-open="#DivineWordLibrary" title="Divine Word"></f7-list-item>
                <f7-list-item link="#" popup-open="#EtherealnessLibrary" title="Etherealness"></f7-list-item>
                <f7-list-item link="#" popup-open="#FingerOfDeathLibrary" title="Finger Of Death"></f7-list-item>
                <f7-list-item link="#" popup-open="#FireStormLibrary" title="Fire Storm"></f7-list-item>
                <f7-list-item link="#" popup-open="#ForcecageLibrary" title="Forcecage"></f7-list-item>
                <f7-list-item link="#" popup-open="#MagnificentMansionLibrary" title="Magnificent Mansion"></f7-list-item>
                <f7-list-item link="#" popup-open="#MirageArcaneLibrary" title="Mirage Arcane"></f7-list-item>
                <f7-list-item link="#" popup-open="#MordenkainensSwordLibrary" title="Mordenkainen's Sword"></f7-list-item>
                <f7-list-item link="#" popup-open="#PlaneShiftLibrary" title="Plane Shift"></f7-list-item>
                <f7-list-item link="#" popup-open="#PrismaticSprayLibrary" title="Prismatic Spray"></f7-list-item>
                <f7-list-item link="#" popup-open="#ProjectImageLibrary" title="Project Image"></f7-list-item>
                <f7-list-item link="#" popup-open="#RegenerateLibrary" title="Regenerate"></f7-list-item>
                <f7-list-item link="#" popup-open="#ResurrectionLibrary" title="Resurrection"></f7-list-item>
                <f7-list-item link="#" popup-open="#ReverseGravityLibrary" title="Reverse Gravity"></f7-list-item>
                <f7-list-item link="#" popup-open="#SequesterLibrary" title="Sequester"></f7-list-item>
                <f7-list-item link="#" popup-open="#SimulacrumLibrary" title="Simulacrum"></f7-list-item>
                <f7-list-item link="#" popup-open="#SymbolLibrary" title="Symbol"></f7-list-item>
                <f7-list-item link="#" popup-open="#TeleportLibrary" title="Teleport"></f7-list-item>
                <f7-list-item link="#" popup-open="#WhirlwindLibrary" title="Whirlwind"></f7-list-item>
              </f7-list>

              <f7-popup id="ConjureCelestialLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Conjure Celestial</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ConjureCelestial" class="move-lower" @change="save('ConjureCelestial', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You summon a celestial of difficulty level 4 or lower, which appears in an unoccupied space that you can see within range.</p>
                    <p>The celestial disappears when it drops to 0 HP or when the spell ends.</p>
                    <p>The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it, as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell using a 9th-level spell slot, you summon a celestial of difficulty level 5 or lower.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>18 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DelayedBlastFireballLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Delayed Blast Fireball</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DelayedBlastFireball" class="move-lower" @change="save('DelayedBlastFireball', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration.</p>
                    <p>When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 4 Square Sphere centered on that point must make a Dexterity saving throw. A creature takes Fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.</p>
                    <p>The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.</p>
                    <p>If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 8 Squares. When it strikes a creature or a solid object, the spell ends, and the bead explodes.</p>
                    <p>The fire damages objects in the area and ignites flammable objects that aren't being worn or carried.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>12d6 Fire</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d6 Fire Per Spell Slot Above 7th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DivineWordLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Divine Word</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DivineWord" class="move-lower" @change="save('DivineWord', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You utter a divine word, imbued with the power that shaped the world at the dawn of creation.</p>
                    <p>Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current HP:</p>
                    <ul>
                      <li>50 HP or fewer: deafened for 1 minute</li>
                      <li>40 HP or fewer: deafened and blinded for 10 minutes</li>
                      <li>30 HP or fewer: blinded, deafened, and stunned for 1 hour</li>
                      <li>20 HP or fewer: killed instantly</li>
                    </ul>
                    <p>Regardless of its current HP, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 1 Day by any means short of a <i>wish</i> spell.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EtherealnessLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Etherealness</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Etherealness" class="move-lower" @change="save('Etherealness', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane.</p>
                    <p>You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 12 Squares away.</p>
                    <p>While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so.</p>
                    <p>You ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.</p>
                    <p>When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of Squares you are moved.</p>
                    <p>This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.</p>
                    <h3>Higher Levels</h3>
                    <p></p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FingerOfDeathLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Finger Of Death</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FingerOfDeath" class="move-lower" @change="save('FingerOfDeath', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You send negative energy coursing through a creature that you can see within range, causing it searing pain.</p>
                    <p>he target must make a Constitution saving throw. It takes 7d8 + 30 Necrotic damage on a failed save, or half as much damage on a successful one.</p>
                    <p>A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>7d8 + 30 Necrotic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FireStormLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Fire Storm</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="FireStorm" class="move-lower" @change="save('FireStorm', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A storm made up of sheets of roaring flame appears in a location you choose within range.</p>
                    <p>The area of the storm consists of up to 10 2 Square Cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 Fire damage on a failed save, or half as much damage on a successful one.</p>
                    <p>The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>7d10 Fire</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ForcecageLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Forcecage</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Forcecage" class="move-lower" @change="save('Forcecage', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range.</p>
                    <p>The prison can be a cage or a solid box, as you choose.</p>
                    <p>A prison in the shape of a cage can be up to 4 Squares on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart.</p>
                    <p>A prison in the shape of a box can be up to 2 Squares on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.</p>
                    <p>When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area.</p>
                    <p>A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.</p>
                    <p>This spell can't be dispelled by <i>dispel magic</i>.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>20 Square Cube</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MagnificentMansionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Magnificent Mansion</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MagnificentMansion" class="move-lower" @change="save('MagnificentMansion', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You conjure an extradimensional dwelling in range that lasts for the duration.</p>
                    <p>You choose where its one entrance is located. The entrance shimmers faintly and is 1 Square Wide and 2 Squares Tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 6 Squares of it. While closed, the portal is invisible.</p>
                    <p>Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.</p>
                    <p>You can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 2 Squares on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine-course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Square Cube</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MirageArcaneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mirage Arcane</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MirageArcane" class="move-lower" @change="save('MirageArcane', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain.</p>
                    <p>The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.</p>
                    <p>Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures.</p>
                    <p>The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.</p>
                    <p>Creatures with <i>truesight</i> can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Sight</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Days</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MordenkainensSwordLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mordenkainen's Sword</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MordenkainensSword" class="move-lower" @change="save('MordenkainensSword', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a sword-shaped plane of force that hovers within range. It lasts for the duration.</p>
                    <p>When the sword appears, you make a melee spell attack against a target of your choice within 1 Square of the sword. On a hit, the target takes 3d10 damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 4 Squares to a spot you can see and repeat this attack against the same target or a different one.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>3d10 x 2</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PlaneShiftLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Plane Shift</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PlaneShift" class="move-lower" @change="save('PlaneShift', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You and up to 8 willing creatures who link hands in a circle are transported to a different plane of existence.</p>
                    <p>You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion.</p>
                    <p>Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.</p>
                    <p>You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PrismaticSprayLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Prismatic Spray</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PrismaticSpray" class="move-lower" @change="save('PrismaticSpray', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Eight multicolored rays of light flash from your hand.</p>
                    <p>Each ray is a different color and has a different power and purpose. Each creature in a 12 Square Cone must make a Dexterity saving throw. For each target, roll 1d8 to determine which color ray affects it.</p>
                    <ol>
                      <li><b>Red</b> — The target takes 10d6 Fire damage on a failed save, or half as much damage on a successful one.</li>
                      <li><b>Orange</b> — The target takes 10d6 Acid damage on a failed save, or half as much damage on a successful one.</li>
                      <li><b>Yellow</b> — The target takes 10d6 Electric damage on a failed save, or half as much damage on a successful one.</li>
                      <li><b>Green</b> — The target takes 10d6 Poison damage on a failed save, or half as much damage on a successful one.</li>
                      <li><b>Blue</b> — The target takes 10d6 Ice damage on a failed save, or half as much damage on a successful one.</li>
                      <li><b>Indigo</b> — On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.</li>
                      <li><b>Violet</b> — On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) </li>
                      <li><b>Special</b> — The target is struck by two rays. Roll twice more, rerolling any 8.</li>
                    </ol>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d6 of Rolled Color/Element</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Square Cone</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ProjectImageLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Project Image</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ProjectImage" class="move-lower" @change="save('ProjectImage', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create an illusory copy of yourself that lasts for the duration.</p>
                    <p>The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.</p>
                    <p>You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.</p>
                    <p>You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.</p>
                    <p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spellcasting level. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>500 Miles</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="RegenerateLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Regenerate</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Regenerate" class="move-lower" @change="save('Regenerate', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature and stimulate its natural healing ability.</p>
                    <p>The target regains 4d8 + 15 HP. For the duration of the spell, the target regains 1 HP at the start of each of its turns (10 HP each minute).</p>
                    <p>The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump.</p>

                    <h2 class="move-lower">Healing</h2>
                    <p>4d8 + 15</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ResurrectionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Resurrection</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Resurrection" class="move-lower" @change="save('Resurrection', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead.</p>
                    <p>If its soul is free and willing, the target returns to life with all its HP.</p>
                    <p>This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.</p>
                    <p>This spell closes all mortal wounds and restores any missing body parts.</p>
                    <p>Coming back from the dead is an ordeal. The target takes a −4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.</p>
                    <p>Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ReverseGravityLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Reverse Gravity</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ReverseGravity" class="move-lower" @change="save('ReverseGravity', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell reverses gravity in a 10 Square Radius, 20 Square High Cylinder centered on a point within range.</p>
                    <p>All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.</p>
                    <p>If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.</p>
                    <p>At the end of the duration, affected objects and creatures fall back down.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>20 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SequesterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sequester</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Sequester" class="move-lower" @change="save('Sequester', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration.</p>
                    <p>When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells.</p>
                    <p>If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.</p>
                    <p>You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include "after 1,000 years" or "when the tarrasque awakens." This spell also ends if the target takes any damage.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SimulacrumLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Simulacrum</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Simulacrum" class="move-lower" @change="save('Simulacrum', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell.</p>
                    <p>The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's HP maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates, except that it is a construct.</p>
                    <p>The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.</p>
                    <p>If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per HP it regains. The simulacrum lasts until it drops to 0 HP, at which point it reverts to snow and melts instantly.</p>
                    <p>If you cast this spell again, any duplicate you created with this spell is instantly destroyed.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SymbolLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Symbol</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Symbol" class="move-lower" @change="save('Symbol', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest).</p>
                    <p>If you choose a surface, the glyph can cover an area of the surface no larger than 2 Squares in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 2 Squares from where you cast this spell, the glyph is broken, and the spell ends without being triggered.</p>
                    <p>The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spellcasting level to find it.</p>
                    <p>You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.</p>
                    <p>You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.</p>
                    <p>When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 12 Square Sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.</p>
                    <p><b>Death</b> — Each target must make a Constitution saving throw, taking 10d10 Necrotic damage on a failed save, or half as much damage on a successful save.</p>
                    <p><b>Discord</b> — Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks.</p>
                    <p><b>Fear</b> — Each target must make a Wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 6 Squares away from the glyph on each of its turns, if able.</p>
                    <p><b>Hopelessness</b> — Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects.</p>
                    <p><b>Insanity</b> — Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic.</p>
                    <p><b>Pain</b> — Each target must make a Constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.</p>
                    <p><b>Sleep</b> — Each target must make a Wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.</p>
                    <p><b>Stunning</b> — Each target must make a Wisdom saving throw and becomes stunned for 1 minute on a failed save.</p>

                    <h2>Damage</h2>
                    <p>10d10 Necrotic (Death Only)</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled or Triggered</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TeleportLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Teleport</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Teleport" class="move-lower" @change="save('Teleport', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell instantly transports you and up to 8 willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select.</p>
                    <p>If you target an object, it must be able to fit entirely inside a 2 Square Cube, and it can't be held or carried by an unwilling creature.</p>
                    <p>The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WhirlwindLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Whirlwind</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Whirlwind" class="move-lower" @change="save('Whirlwind', 'Level 7')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A whirlwind howls down to a point that you can see on the ground within range.</p>
                    <p>The whirlwind is a 2 Square Radius, 6 Square High Cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 6 Squares in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren’t secured to anything and that aren’t worn or carried by anyone.</p>
                    <p>A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 1 Square Higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.</p>
                    <p>A restrained creature can use an action to make a Strength or Dexterity check against your spellcasting level. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 × 2 Squares away from it in a random direction.</p>

                    <h2>Damage</h2>
                    <p>10d6</p>

                    <h2 class="move-lower">Range</h2>
                    <p>60 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 8 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#AbiDalzimsHorridWiltingLibrary" title="Abi-Dalzim's Horrid Wilting"></f7-list-item>
                <f7-list-item link="#" popup-open="#AnimalShapesLibrary" title="Animal Shapes"></f7-list-item>
                <f7-list-item link="#" popup-open="#AntimagicFieldLibrary" title="Antimagic Field"></f7-list-item>
                <f7-list-item link="#" popup-open="#AntipathySympathyLibrary" title="Antipathy/Sympathy"></f7-list-item>
                <f7-list-item link="#" popup-open="#CloneLibrary" title="Clone"></f7-list-item>
                <f7-list-item link="#" popup-open="#ControlWeatherLibrary" title="Control Weather"></f7-list-item>
                <f7-list-item link="#" popup-open="#DemiplaneLibrary" title="Demiplane"></f7-list-item>
                <f7-list-item link="#" popup-open="#DominateMonsterLibrary" title="Dominate Monster"></f7-list-item>
                <f7-list-item link="#" popup-open="#EarthquakeLibrary" title="Earthquake"></f7-list-item>
                <f7-list-item link="#" popup-open="#FeeblemindLibrary" title="Feeblemind"></f7-list-item>
                <f7-list-item link="#" popup-open="#GlibnessLibrary" title="Glibness"></f7-list-item>
                <f7-list-item link="#" popup-open="#HolyAuraLibrary" title="Holy Aura"></f7-list-item>
                <f7-list-item link="#" popup-open="#IncendiaryCloudLibrary" title="Incendiary Cloud"></f7-list-item>
                <f7-list-item link="#" popup-open="#MazeLibrary" title="Maze"></f7-list-item>
                <f7-list-item link="#" popup-open="#MindBlankLibrary" title="Mind Blank"></f7-list-item>
                <f7-list-item link="#" popup-open="#PowerWordStunLibrary" title="Power Word Stun"></f7-list-item>
                <f7-list-item link="#" popup-open="#SunburstLibrary" title="Sunburst"></f7-list-item>
              </f7-list>

              <f7-popup id="AbiDalzimsHorridWiltingLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Abi-Dalzim's Horrid Wilting</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AbiDalzimsHorridWilting" class="move-lower" @change="save('AbiDalzimsHorridWilting', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You draw the moisture from every creature in a 6 Square Cube centered on a point you choose within range.</p>
                    <p>Each creature in that area must make a Constitution saving throw. Constructs and undead aren’t affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 Necrotic damage on a failed save, or half as much damage on a successful one.</p>
                    <p>Nonmagical plants in the area that aren’t creatures, such as trees and shrubs, wither and die instantly.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>12d8 Necrotic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AnimalShapesLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Animal Shapes</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AnimalShapes" class="move-lower" @change="save('AnimalShapes', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Your magic turns others into beasts.</p>
                    <p>Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a difficulty level of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.</p>
                    <p>The transformation lasts for the duration for each target, or until the target drops to 0 HP or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the HP of its new form, and when it reverts to its normal form, it returns to the number of HP it had before it transformed. If it reverts as a result of dropping to 0 HP, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 HP, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells.</p>
                    <p>The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AntimagicFieldLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Antimagic Field</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AntimagicField" class="move-lower" @change="save('AntimagicField', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A 2 Square Invisible Sphere of antimagic surrounds you.</p>
                    <p>This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.</p>
                    <p>Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.</p>
                    <p><b>Targeted Effects</b> — Spells and other magical effects, such as <i>magic missile</i> and <i>charm person</i>, that target a creature or an object in the sphere have no effect on that target.</p>
                    <p><b>Areas of Magic</b> — The area of another spell or magical effect, such as <i>fireball</i>, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a <i>wall of fire</i> are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.</p>
                    <p><b>Spells</b> — Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it.</p>
                    <p><b>Magic Items</b> — The properties and powers of magic items are suppressed in the sphere. For example, a longsword, +1 in the sphere functions as a nonmagical longsword.</p>
                    <p>A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.</p>
                    <p><b>Magic Travel</b> — Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the <i>rope trick</i> spell, temporarily closes while in the sphere.</p>
                    <p><b>Creatures and Objects</b> — A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere.</p>
                    <p><b>Dispel Magic</b> — Spells and magical effects such as <i>dispel magic</i> have no effect on the sphere. Likewise, the spheres created by different <i>antimagic field</i> spells don't nullify each other.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>4d4 Acid</p>
                    <h3>Higher Levels</h3>
                    <p>Plus 1d4 Acid Per Spell Slot Above 8th.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="AntipathySympathyLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Antipathy/Sympathy</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AntipathySympathy" class="move-lower" @change="save('AntipathySympathy', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell attracts or repels creatures of your choice.</p>
                    <p>You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 40 Square Cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.</p>
                    <p><b>Antipathy</b> — The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 12 Squares of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 12 Squares of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 12 Squares from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 12 Squares of it.</p>
                    <p><b>Sympathy</b> — The enchantment causes the specified creatures to feel an intense urge to approach the target while within 12 Squares of it or able to see it. When such a creature can see the target or comes within 12 Squares of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target.</p>
                    <p>If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below.</p>
                    <p><b>Ending the Effect</b> —  If an affected creature ends its turn while not within 12 Squares of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another Wisdom saving throw every 1 Day while the spell persists.</p>
                    <p>A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Days</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="CloneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Clone</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Clone" class="move-lower" @change="save('Clone', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>This spell grows an inert duplicate of a living, Medium creature as a safeguard against death.</p>
                    <p>This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.</p>
                    <p>At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ControlWeatherLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Control Weather</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="ControlWeather" class="move-lower" @change="save('ControlWeather', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You take control of the weather within 5 miles of you for the duration.</p>
                    <p>You must be outdoors to cast this spell. Moving to a place where you don’t have a clear path to the sky ends the spell early.</p>
                    <p>When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 × 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.</p>
                    <p>When you change the weather conditions, find a current condition on the following lists and change its stage by one, up or down. When changing the wind, you can change its direction.</p>

                    <h2>Temperature</h2>
                    <ol>
                      <li>Unbearable Heat</li>
                      <li>Hot</li>
                      <li>Warm</li>
                      <li>Cool</li>
                      <li>Cold</li>
                      <li>Arctic Cold</li>
                    </ol>

                    <h2>Wind</h2>
                    <ol>
                      <li>Calm</li>
                      <li>Moderate Wind</li>
                      <li>Strong Wind</li>
                      <li>Gale</li>
                      <li>Storm</li>
                    </ol>

                    <h2>Precipitation</h2>
                    <ol>
                      <li>Clear</li>
                      <li>Light Clouds</li>
                      <li>Overcast or Ground Fog</li>
                      <li>Rain, Hail, or Snow</li>
                      <li>Torrential Rain, Driving Hail, or Blizzard</li>
                    </ol>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DemiplaneLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Demiplane</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Demiplane" class="move-lower" @change="save('Demiplane', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a shadowy door on a flat solid surface that you can see within range.</p>
                    <p>The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 6 Squares in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.</p>
                    <p>Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="DominateMonsterLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Dominate Monster</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="DominateMonster" class="move-lower" @change="save('DominateMonster', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You attempt to beguile a creature that you can see within range.</p>
                    <p>It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.</p>
                    <p>While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.</p>
                    <p>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.</p>
                    <p>Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.</p>
                    <h3>Higher Levels</h3>
                    <p>When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="EarthquakeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Earthquake</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Earthquake" class="move-lower" @change="save('Earthquake', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a seismic disturbance at a point on the ground that you can see within range.</p>
                    <p>For the duration, an intense tremor rips through the ground in a 20 Square Circle centered on that point and shakes creatures and structures in contact with the ground in that area.</p>
                    <p>The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken.</p>
                    <p>When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.</p>
                    <p>This spell can have additional effects depending on the terrain in the area, as determined by the DM.</p>
                    <p><b>Fissures</b> — Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 × 2 Squares Deep, 2 Squares Wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.</p>
                    <p>A fissure that opens beneath a structure causes it to automatically collapse (see below).</p>
                    <p><b>Structures</b> — The tremor deals 50 damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 HP, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>5d6 If Rubble Falls on Creature</p>

                    <h2 class="move-lower">Range</h2>
                    <p>100 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="FeeblemindLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Feeblemind</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Feeblemind" class="move-lower" @change="save('Feeblemind', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality.</p>
                    <p>The target takes 4d6 Psychic damage and must make an Intelligence saving throw.</p>
                    <p>On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.</p>
                    <p>At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends.</p>
                    <p>The spell can also be ended by <i>greater restoration</i>, <i>heal</i>, or <i>wish</i>.</p>

                    <h2>Damage</h2>
                    <p>4d6 Psychic</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GlibnessLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Glibness</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Glibness" class="move-lower" @change="save('Glibness', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15.</p>
                    <p>Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="HolyAuraLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Holy Aura</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="HolyAura" class="move-lower" @change="save('HolyAura', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Divine light washes out from you and coalesces in a soft radiance in a 6 Square Radius around you.</p>
                    <p>Creatures of your choice in that radius when you cast this spell shed dim light in a 1 Square Radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="IncendiaryCloudLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Incendiary Cloud</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="IncendiaryCloud" class="move-lower" @change="save('IncendiaryCloud', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A swirling cloud of smoke shot through with white-hot embers appears in a 4 Square Sphere centered on a point within range.</p>
                    <p>The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.</p>
                    <p>When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 Fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.</p>
                    <p>The cloud moves 1 Square directly away from you in a direction that you choose at the start of each of your turns.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d8 Fire</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MazeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Maze</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Maze" class="move-lower" @change="save('Maze', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.</p>
                    <p>The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds).</p>
                    <p>When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MindBlankLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mind Blank</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MindBlank" class="move-lower" @change="save('MindBlank', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils <i>wish</i> spells and spells or effects of similar power used to affect the target's mind or to gain information about the target.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Day</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PowerWordStunLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Power Word Stun</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PowerWordStun" class="move-lower" @change="save('PowerWordStun', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded.</p>
                    <p>If the target has 150 HP or fewer, it is stunned. Otherwise, the spell has no effect.</p>
                    <p>The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="SunburstLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Sunburst</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Sunburst" class="move-lower" @change="save('Sunburst', 'Level 8')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Brilliant sunlight flashes in a 12 Square Radius centered on a point you choose within range.</p>
                    <p>Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 Light damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.</p>
                    <p>A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.</p>
                    <p>This spell dispels any darkness in its area that was created by a spell.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>12d6 Light</p>

                    <h2 class="move-lower">Range</h2>
                    <p>30 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 9 Spells Library">
          <f7-accordion-content>
            <f7-block>

              <f7-list>
                <f7-list-item link="#" popup-open="#AstralProjectionLibrary" title="Astral Projection"></f7-list-item>
                <f7-list-item link="#" popup-open="#ForesightLibrary" title="Foresight"></f7-list-item>
                <f7-list-item link="#" popup-open="#GateLibrary" title="Gate"></f7-list-item>
                <f7-list-item link="#" popup-open="#ImprisonmentLibrary" title="Imprisonment"></f7-list-item>
                <f7-list-item link="#" popup-open="#MassHealLibrary" title="Mass Heal"></f7-list-item>
                <f7-list-item link="#" popup-open="#MeteorSwarmLibrary" title="Meteor Swarm"></f7-list-item>
                <f7-list-item link="#" popup-open="#PowerWordKillLibrary" title="Power Word Kill"></f7-list-item>
                <f7-list-item link="#" popup-open="#PrismaticWallLibrary" title="Prismatic Wall"></f7-list-item>
                <f7-list-item link="#" popup-open="#ShapechangeLibrary" title="Shapechange"></f7-list-item>
                <f7-list-item link="#" popup-open="#StormOfVengeanceLibrary" title="Storm Of Vengeance"></f7-list-item>
                <f7-list-item link="#" popup-open="#TimeStopLibrary" title="Time Stop"></f7-list-item>
                <f7-list-item link="#" popup-open="#TruePolymorphLibrary" title="True Polymorph"></f7-list-item>
                <f7-list-item link="#" popup-open="#TrueResurrectionLibrary" title="True Resurrection"></f7-list-item>
                <f7-list-item link="#" popup-open="#WeirdLibrary" title="Weird"></f7-list-item>
                <f7-list-item link="#" popup-open="#WishLibrary" title="Wish"></f7-list-item>
              </f7-list>

              <f7-popup id="AstralProjectionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Astral Projection</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="AstralProjection" class="move-lower" @change="save('AstralProjection', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You and up to 8 willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane).</p>
                    <p>The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age.</p>
                    <p>Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut—something that can happen only when an effect specifically states that it does—your soul and body are separated, killing you instantly.</p>
                    <p>Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it.</p>
                    <p>The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.</p>
                    <p>The spell might also end early for you or one of your companions. A successful <i>dispel magic</i> spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 HP, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation.</p>
                    <p>If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 HP.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>2 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ForesightLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Foresight</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Foresight" class="move-lower" @change="save('Foresight', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a willing creature and bestow a limited ability to see into the immediate future.</p>
                    <p>For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.</p>
                    <p>This spell immediately ends if you cast it again before its duration ends.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>8 Hours</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="GateLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Gate</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Gate" class="move-lower" @change="save('Gate', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence.</p>
                    <p>The portal is a circular opening, which you can make 1-4 Squares in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.</p>
                    <p>The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.</p>
                    <p>Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.</p>
                    <p>When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ImprisonmentLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Imprisonment</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Imprisonment" class="move-lower" @change="save('Imprisonment', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You create a magical restraint to hold a creature that you can see within range.</p>
                    <p>The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target.</p>
                    <p>When you cast the spell, you choose one of the following forms of imprisonment.</p>
                    <p><b>Burial</b> — The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it.</p>
                    <p>The special component for this version of the spell is a small mithril orb.</p>
                    <p><b>Chaining</b> — Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can't move or be moved by any means until then.</p>
                    <p>The special component for this version of the spell is a fine chain of precious metal.</p>
                    <p><b>Hedged Prison</b> — The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice.</p>
                    <p>The special component for this version of the spell is a miniature representation of the prison made from jade.</p>
                    <p><b>Minimus Containment</b> — The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can't be cut or broken while the spell remains in effect.</p>
                    <p>The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby.</p>
                    <p><b>Slumber</b> — The target falls asleep and can't be awoken. The special component for this version of the spell consists of rare soporific herbs.</p>
                    <p><b>Ending the Spell</b> — During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or HP.</p>
                    <p>A <i>dispel magic</i> spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.</p>
                    <p>You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>Until Dispelled</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MassHealLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Mass Heal</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MassHeal" class="move-lower" @change="save('MassHeal', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A flood of healing energy flows from you into injured creatures around you.</p>
                    <p>You restore up to 700 HP, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs.</p>

                    <h2 class="move-lower">Healing</h2>
                    <p>700 HP Divided Between Creatures As You Choose</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="MeteorSwarmLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Meteor Swarm</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="MeteorSwarm" class="move-lower" @change="save('MeteorSwarm', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Blazing orbs of fire plummet to the ground at four different points you can see within range.</p>
                    <p>Each creature in a 8 Square Sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 Fire damage and 20d6 damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.</p>
                    <p>The spell damages objects in the area and ignites flammable objects that aren't being worn or carried.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p>20d6 Bludgeoning + 20d6 Fire</p>

                    <h2 class="move-lower">Range</h2>
                    <p>1 Mile</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PowerWordKillLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Power Word Kill</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PowerWordKill" class="move-lower" @change="save('PowerWordKill', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You utter a word of power that can compel one creature you can see within range to die instantly.</p>
                    <p>If the creature you choose has 100 HP or fewer, it dies. Otherwise, the spell has no effect.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="PrismaticWallLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Prismatic Wall</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="PrismaticWall" class="move-lower" @change="save('PrismaticWall', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A shimmering, multicolored plane of light forms a vertical opaque wall—up to 18 Squares Long, 6 Squares High, and 1 inch thick—centered on a point you can see within range.</p>
                    <p>Alternatively, you can shape the wall into a sphere up to 6 Squares in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.</p>
                    <p>The wall sheds bright light out to a range of 20 Squares and dim light for an additional 20 Squares. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 4 Squares of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute.</p>
                    <p>The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall's layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer's properties as described below.</p>
                    <p>The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. <i>Antimagic field</i> has no effect on the wall, and <i>dispel magic</i> can affect only the violet layer.</p>
                    <ol>
                      <li><b>Red</b> — The creature takes 10d6 Fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can't pass through the wall. The layer can be destroyed by dealing at least 25 Ice damage to it.</li>
                      <li><b>Orange</b> — The creature takes 10d6 Acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can't pass through the wall. The layer is destroyed by a strong wind.</li>
                      <li><b>Yellow</b> — The creature takes 10d6 Electric damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 damage to it.</li>
                      <li><b>Green</b> — The creature takes 10d6 Poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.</li>
                      <li><b>Blue</b> — The creature takes 10d6 Ice damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 Fire damage to it.</li>
                      <li><b>Indigo</b> — On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the creature collects three of a kind. While this layer is in place, spells can't be cast through the wall. The layer is destroyed by bright light shed by a <i>daylight</i> spell or a similar spell of equal or higher level.</li>
                      <li><b>Violet</b> — On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a <i>dispel magic</i> spell or a similar spell of equal or higher level that can end spells and magical effects.</li>
                    </ol>

                    <h2 class="move-lower">Damage</h2>
                    <p>10d6 Rolled Color/Element</p>

                    <h2 class="move-lower">Range</h2>
                    <p>12 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="ShapechangeLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Shapechange</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Shapechange" class="move-lower" @change="save('Shapechange', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You assume the form of a different creature for the duration.</p>
                    <p>The new form can be of any creature with a difficulty level equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.</p>
                    <p>You assume the HP and Hit Dice of the new form. When you revert to your normal form, you return to the number of HP you had before you transformed. If you revert as a result of dropping to 0 HP, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 HP, you aren't knocked unconscious.</p>
                    <p>You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.</p>
                    <p>When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.</p>
                    <p>During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more HP than your current one, your HP remain at their current value.</p>
                    
                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="StormOfVengeanceLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Storm Of Vengeance</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="StormOfVengeance" class="move-lower" @change="save('StormOfVengeance', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>A churning storm cloud forms, centered on a point you can see and spreading to a radius of 72 Squares.</p>
                    <p>Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 1,000 Squares beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 Electric damage and becomes deafened for 5 minutes.</p>
                    <p>Each round you maintain concentration on this spell, the storm produces different effects on your turn.</p>
                    <p><b>Round 2</b> — Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 Acid damage</p>
                    <p><b>Round 3</b> — You call 6 bolts of lightning from the cloud to strike 6 creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 Electric damage on a failed save, or half as much damage on a successful one.</p>
                    <p><b>Round 4</b> — Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 damage.</p>
                    <p><b>Round 5-10</b> — Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 Ice damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.</p>

                    <h2 class="move-lower">Damage</h2>
                    <p><b>Turn 1</b>: 2d6 Electric</p>
                    <p><b>Turn 2</b>: 1d6 Acid</p>
                    <p><b>Turn 3</b>: 10d6 Electric</p>
                    <p><b>Turn 4</b>: 2d6</p>
                    <p><b>Turn 5-10</b>: 1d6 Ice</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Sight</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>10 Turns</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TimeStopLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Time Stop</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TimeStop" class="move-lower" @change="save('TimeStop', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You briefly stop the flow of time for everyone but yourself.</p>
                    <p>No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.</p>
                    <p>This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 200 Squares from the location where you cast it.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TruePolymorphLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>True Polymorph</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TruePolymorph" class="move-lower" @change="save('TruePolymorph', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Choose 1 creature or nonmagical object that you can see within range.</p>
                    <p>You transform the creature into a different creature, the creature into a nonmagical object, or the object into a creature (the object must be neither worn nor carried by another creature). The spell lasts for the duration, or until the target drops to 0 HP or dies. If you concentrate on this spell for the full duration, the spell lasts until it is dispelled.</p>
                    <p>This spell has no effect on a shapechanger or a creature with 0 HP. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell.</p>
                    <p><b>Creature Into Creature</b> — If you turn a creature into another kind of creature, the new form can be any kind you choose whose difficulty level is equal to or less than the target's (or its level, if the target doesn't have a difficulty level). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality.</p>
                    <p>The target assumes the HP of its new form, and when it reverts to its normal form, the creature returns to the number of HP it had before it transformed. If it reverts as a result of dropping to 0 HP, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 HP, it isn't knocked unconscious.</p>
                    <p>The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech, unless its new form is capable of such actions.</p>
                    <p>The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.</p>
                    <p><b>Object Into Creature</b> — You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's difficulty level is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement.</p>
                    <p>If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.</p>
                    <p><b>Creature Into Object</b> — If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object's size is no larger than the creature's size. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>6 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Hour</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="TrueResurrectionLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>True Resurrection</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="TrueResurrection" class="move-lower" @change="save('TrueResurrection', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age.</p>
                    <p>If the creature's soul is free and willing, the creature is restored to life with all its HP.</p>
                    <p>This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. If the creature was undead, it is restored to its non-undead form.</p>
                    <p>The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 2 Squares of you.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Touch</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WeirdLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Weird</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Weird" class="move-lower" @change="save('Weird', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p>Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them.</p>
                    <p>Each creature in a 6 Square Sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the frightened creature's turns, it must succeed on a Wisdom saving throw or take 4d10 Psychic damage. On a successful save, the spell ends for that creature.</p>

                    <h2>Damage</h2>
                    <p>4d10 Psychic Each Turn Until the Creature Rolls Success</p>

                    <h2 class="move-lower">Range</h2>
                    <p>24 Squares</p>

                    <h2 class="move-lower">Duration</h2>
                    <p>1 Turn</p>

                  </f7-block>
                </f7-page>
              </f7-popup>

              <f7-popup id="WishLibrary" :opened="popupOpened" @popup:closed="popupOpened = false">
                <f7-page>
                  <f7-navbar>
                    <f7-nav-left>
                      <f7-link popup-close>
                        <f7-icon material="keyboard_arrow_left" class="larger-icon"></f7-icon>
                      </f7-link>
                    </f7-nav-left>
                    <f7-nav-title>Wish</f7-nav-title>
                  </f7-navbar>
                  <f7-block>
                    <f7-checkbox id="Wish" class="move-lower" @change="save('Wish', 'Level 9')">
                      <p class="checkbox-label">Learned</p>
                    </f7-checkbox>
                    
                    <h2 class="move-lower">Description</h2>
                    <p><i>Wish</i> is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.</p>
                    <p>The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect.</p>
                    <p>Alternatively, you can create one of the following effects of your choice:</p>
                    <ul>
                      <li>You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 60 Squares in any dimension, and it appears in an unoccupied space you can see on the ground.</li>
                      <li>You allow up to 20 creatures that you can see to regain all HP, and you end all effects on them described in the <i>greater restoration</i> spell.</li>
                      <li>You grant up to 10 creatures that you can see resistance to a damage type you choose.</li>
                      <li>You grant up to 10 creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack.</li>
                      <li>You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a <i>wish</i> spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.</li>
                    </ul>
                    <p>You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner.</p>
                    <p>The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 Necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33% chance that you are unable to cast wish ever again if you suffer this stress.</p>

                    <h2 class="move-lower">Range</h2>
                    <p>Self</p>

                  </f7-block>
                </f7-page>
              </f7-popup>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Custom Spells">
          <f7-accordion-content>
            <f7-block>

              <h3 class="move-lower">Custom Spell 1</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell1" class="move-lower extend-bottom" @change="save('CustomSpell1', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell1Name" type="text" @keyup="saveInputs('CustomSpell1Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell1SpellLevel" type="text" @keyup="saveInputs('CustomSpell1SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell1Description" @keyup="saveInputs('CustomSpell1Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell1Damage" type="text" @keyup="saveInputs('CustomSpell1Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell1Healing" type="text" @keyup="saveInputs('CustomSpell1Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell1Range" type="text" @keyup="saveInputs('CustomSpell1Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell1Duration" type="text" @keyup="saveInputs('CustomSpell1Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 2</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell2" class="move-lower extend-bottom" @change="save('CustomSpell2', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell2Name" type="text" @keyup="saveInputs('CustomSpell2Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell2SpellLevel" type="text" @keyup="saveInputs('CustomSpell2SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell2Description" @keyup="saveInputs('CustomSpell2Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell2Damage" type="text" @keyup="saveInputs('CustomSpell2Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell2Healing" type="text" @keyup="saveInputs('CustomSpell2Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell2Range" type="text" @keyup="saveInputs('CustomSpell2Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell2Duration" type="text" @keyup="saveInputs('CustomSpell2Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 3</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell3" class="move-lower extend-bottom" @change="save('CustomSpell3', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell3Name" type="text" @keyup="saveInputs('CustomSpell3Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell3SpellLevel" type="text" @keyup="saveInputs('CustomSpell3SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell3Description" @keyup="saveInputs('CustomSpell3Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell3Damage" type="text" @keyup="saveInputs('CustomSpell3Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell3Healing" type="text" @keyup="saveInputs('CustomSpell3Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell3Range" type="text" @keyup="saveInputs('CustomSpell3Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell3Duration" type="text" @keyup="saveInputs('CustomSpell3Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 4</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell4" class="move-lower extend-bottom" @change="save('CustomSpell4', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell4Name" type="text" @keyup="saveInputs('CustomSpell4Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell4SpellLevel" type="text" @keyup="saveInputs('CustomSpell4SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell4Description" @keyup="saveInputs('CustomSpell4Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell4Damage" type="text" @keyup="saveInputs('CustomSpell4Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell4Healing" type="text" @keyup="saveInputs('CustomSpell4Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell4Range" type="text" @keyup="saveInputs('CustomSpell4Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell4Duration" type="text" @keyup="saveInputs('CustomSpell4Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 5</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell5" class="move-lower extend-bottom" @change="save('CustomSpell5', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell5Name" type="text" @keyup="saveInputs('CustomSpell5Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell5SpellLevel" type="text" @keyup="saveInputs('CustomSpell5SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell5Description" @keyup="saveInputs('CustomSpell5Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell5Damage" type="text" @keyup="saveInputs('CustomSpell5Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell5Healing" type="text" @keyup="saveInputs('CustomSpell5Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell5Range" type="text" @keyup="saveInputs('CustomSpell5Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell5Duration" type="text" @keyup="saveInputs('CustomSpell5Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 6</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell6" class="move-lower extend-bottom" @change="save('CustomSpell6', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell6Name" type="text" @keyup="saveInputs('CustomSpell6Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell6SpellLevel" type="text" @keyup="saveInputs('CustomSpell6SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell6Description" @keyup="saveInputs('CustomSpell6Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell6Damage" type="text" @keyup="saveInputs('CustomSpell6Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell6Healing" type="text" @keyup="saveInputs('CustomSpell6Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell6Range" type="text" @keyup="saveInputs('CustomSpell6Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell6Duration" type="text" @keyup="saveInputs('CustomSpell6Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 7</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell7" class="move-lower extend-bottom" @change="save('CustomSpell7', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell7Name" type="text" @keyup="saveInputs('CustomSpell7Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell7SpellLevel" type="text" @keyup="saveInputs('CustomSpell7SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell7Description" @keyup="saveInputs('CustomSpell7Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell7Damage" type="text" @keyup="saveInputs('CustomSpell7Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell7Healing" type="text" @keyup="saveInputs('CustomSpell7Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell7Range" type="text" @keyup="saveInputs('CustomSpell7Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell7Duration" type="text" @keyup="saveInputs('CustomSpell7Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 8</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell8" class="move-lower extend-bottom" @change="save('CustomSpell8', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell8Name" type="text" @keyup="saveInputs('CustomSpell8Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell8SpellLevel" type="text" @keyup="saveInputs('CustomSpell8SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell8Description" @keyup="saveInputs('CustomSpell8Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell8Damage" type="text" @keyup="saveInputs('CustomSpell8Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell8Healing" type="text" @keyup="saveInputs('CustomSpell8Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell8Range" type="text" @keyup="saveInputs('CustomSpell8Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell8Duration" type="text" @keyup="saveInputs('CustomSpell8Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 9</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell9" class="move-lower extend-bottom" @change="save('CustomSpell9', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell9Name" type="text" @keyup="saveInputs('CustomSpell9Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell9SpellLevel" type="text" @keyup="saveInputs('CustomSpell9SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell9Description" @keyup="saveInputs('CustomSpell9Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell9Damage" type="text" @keyup="saveInputs('CustomSpell9Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell9Healing" type="text" @keyup="saveInputs('CustomSpell9Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell9Range" type="text" @keyup="saveInputs('CustomSpell9Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell9Duration" type="text" @keyup="saveInputs('CustomSpell9Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 10</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell10" class="move-lower extend-bottom" @change="save('CustomSpell10', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell10Name" type="text" @keyup="saveInputs('CustomSpell10Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell10SpellLevel" type="text" @keyup="saveInputs('CustomSpell10SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell10Description" @keyup="saveInputs('CustomSpell10Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell10Damage" type="text" @keyup="saveInputs('CustomSpell10Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell10Healing" type="text" @keyup="saveInputs('CustomSpell10Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell10Range" type="text" @keyup="saveInputs('CustomSpell10Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell10Duration" type="text" @keyup="saveInputs('CustomSpell10Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 11</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell11" class="move-lower extend-bottom" @change="save('CustomSpell11', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell11Name" type="text" @keyup="saveInputs('CustomSpell11Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell11SpellLevel" type="text" @keyup="saveInputs('CustomSpell11SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell11Description" @keyup="saveInputs('CustomSpell11Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell11Damage" type="text" @keyup="saveInputs('CustomSpell11Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell11Healing" type="text" @keyup="saveInputs('CustomSpell11Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell11Range" type="text" @keyup="saveInputs('CustomSpell11Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell11Duration" type="text" @keyup="saveInputs('CustomSpell11Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 12</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell12" class="move-lower extend-bottom" @change="save('CustomSpell12', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell12Name" type="text" @keyup="saveInputs('CustomSpell12Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell12SpellLevel" type="text" @keyup="saveInputs('CustomSpell12SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell12Description" @keyup="saveInputs('CustomSpell12Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell12Damage" type="text" @keyup="saveInputs('CustomSpell12Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell12Healing" type="text" @keyup="saveInputs('CustomSpell12Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell12Range" type="text" @keyup="saveInputs('CustomSpell12Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell12Duration" type="text" @keyup="saveInputs('CustomSpell12Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 13</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell13" class="move-lower extend-bottom" @change="save('CustomSpell13', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell13Name" type="text" @keyup="saveInputs('CustomSpell13Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell13SpellLevel" type="text" @keyup="saveInputs('CustomSpell13SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell13Description" @keyup="saveInputs('CustomSpell13Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell13Damage" type="text" @keyup="saveInputs('CustomSpell13Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell13Healing" type="text" @keyup="saveInputs('CustomSpell13Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell13Range" type="text" @keyup="saveInputs('CustomSpell13Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell13Duration" type="text" @keyup="saveInputs('CustomSpell13Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 14</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell14" class="move-lower extend-bottom" @change="save('CustomSpell14', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell14Name" type="text" @keyup="saveInputs('CustomSpell14Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell14SpellLevel" type="text" @keyup="saveInputs('CustomSpell14SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell14Description" @keyup="saveInputs('CustomSpell14Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell14Damage" type="text" @keyup="saveInputs('CustomSpell14Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell14Healing" type="text" @keyup="saveInputs('CustomSpell14Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell14Range" type="text" @keyup="saveInputs('CustomSpell14Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell14Duration" type="text" @keyup="saveInputs('CustomSpell14Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 15</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell15" class="move-lower extend-bottom" @change="save('CustomSpell15', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell15Name" type="text" @keyup="saveInputs('CustomSpell15Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell15SpellLevel" type="text" @keyup="saveInputs('CustomSpell15SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell15Description" @keyup="saveInputs('CustomSpell15Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell15Damage" type="text" @keyup="saveInputs('CustomSpell15Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell15Healing" type="text" @keyup="saveInputs('CustomSpell15Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell15Range" type="text" @keyup="saveInputs('CustomSpell15Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell15Duration" type="text" @keyup="saveInputs('CustomSpell15Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 16</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell16" class="move-lower extend-bottom" @change="save('CustomSpell16', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell16Name" type="text" @keyup="saveInputs('CustomSpell16Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell16SpellLevel" type="text" @keyup="saveInputs('CustomSpell16SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell16Description" @keyup="saveInputs('CustomSpell16Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell16Damage" type="text" @keyup="saveInputs('CustomSpell16Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell16Healing" type="text" @keyup="saveInputs('CustomSpell16Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell16Range" type="text" @keyup="saveInputs('CustomSpell16Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell16Duration" type="text" @keyup="saveInputs('CustomSpell16Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 17</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell17" class="move-lower extend-bottom" @change="save('CustomSpell17', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell17Name" type="text" @keyup="saveInputs('CustomSpell17Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell17SpellLevel" type="text" @keyup="saveInputs('CustomSpell17SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell17Description" @keyup="saveInputs('CustomSpell17Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell17Damage" type="text" @keyup="saveInputs('CustomSpell17Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell17Healing" type="text" @keyup="saveInputs('CustomSpell17Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell17Range" type="text" @keyup="saveInputs('CustomSpell17Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell17Duration" type="text" @keyup="saveInputs('CustomSpell17Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 18</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell18" class="move-lower extend-bottom" @change="save('CustomSpell18', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell18Name" type="text" @keyup="saveInputs('CustomSpell18Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell18SpellLevel" type="text" @keyup="saveInputs('CustomSpell18SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell18Description" @keyup="saveInputs('CustomSpell18Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell18Damage" type="text" @keyup="saveInputs('CustomSpell18Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell18Healing" type="text" @keyup="saveInputs('CustomSpell18Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell18Range" type="text" @keyup="saveInputs('CustomSpell18Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell18Duration" type="text" @keyup="saveInputs('CustomSpell18Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 19</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell19" class="move-lower extend-bottom" @change="save('CustomSpell19', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell19Name" type="text" @keyup="saveInputs('CustomSpell19Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell19SpellLevel" type="text" @keyup="saveInputs('CustomSpell19SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell19Description" @keyup="saveInputs('CustomSpell19Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell19Damage" type="text" @keyup="saveInputs('CustomSpell19Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell19Healing" type="text" @keyup="saveInputs('CustomSpell19Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell19Range" type="text" @keyup="saveInputs('CustomSpell19Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell19Duration" type="text" @keyup="saveInputs('CustomSpell19Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 20</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell20" class="move-lower extend-bottom" @change="save('CustomSpell20', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell20Name" type="text" @keyup="saveInputs('CustomSpell20Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell20SpellLevel" type="text" @keyup="saveInputs('CustomSpell20SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell20Description" @keyup="saveInputs('CustomSpell20Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell20Damage" type="text" @keyup="saveInputs('CustomSpell20Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell20Healing" type="text" @keyup="saveInputs('CustomSpell20Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell20Range" type="text" @keyup="saveInputs('CustomSpell20Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell20Duration" type="text" @keyup="saveInputs('CustomSpell20Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 21</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell21" class="move-lower extend-bottom" @change="save('CustomSpell21', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell21Name" type="text" @keyup="saveInputs('CustomSpell21Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell21SpellLevel" type="text" @keyup="saveInputs('CustomSpell21SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell21Description" @keyup="saveInputs('CustomSpell21Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell21Damage" type="text" @keyup="saveInputs('CustomSpell21Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell21Healing" type="text" @keyup="saveInputs('CustomSpell21Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell21Range" type="text" @keyup="saveInputs('CustomSpell21Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell21Duration" type="text" @keyup="saveInputs('CustomSpell21Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 22</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell22" class="move-lower extend-bottom" @change="save('CustomSpell22', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell22Name" type="text" @keyup="saveInputs('CustomSpell22Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell22SpellLevel" type="text" @keyup="saveInputs('CustomSpell22SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell22Description" @keyup="saveInputs('CustomSpell22Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell22Damage" type="text" @keyup="saveInputs('CustomSpell22Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell22Healing" type="text" @keyup="saveInputs('CustomSpell22Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell22Range" type="text" @keyup="saveInputs('CustomSpell22Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell22Duration" type="text" @keyup="saveInputs('CustomSpell22Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 23</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell23" class="move-lower extend-bottom" @change="save('CustomSpell23', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell23Name" type="text" @keyup="saveInputs('CustomSpell23Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell23SpellLevel" type="text" @keyup="saveInputs('CustomSpell23SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell23Description" @keyup="saveInputs('CustomSpell23Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell23Damage" type="text" @keyup="saveInputs('CustomSpell23Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell23Healing" type="text" @keyup="saveInputs('CustomSpell23Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell23Range" type="text" @keyup="saveInputs('CustomSpell23Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell23Duration" type="text" @keyup="saveInputs('CustomSpell23Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 24</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell24" class="move-lower extend-bottom" @change="save('CustomSpell24', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell24Name" type="text" @keyup="saveInputs('CustomSpell24Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell24SpellLevel" type="text" @keyup="saveInputs('CustomSpell24SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell24Description" @keyup="saveInputs('CustomSpell24Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell24Damage" type="text" @keyup="saveInputs('CustomSpell24Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell24Healing" type="text" @keyup="saveInputs('CustomSpell24Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell24Range" type="text" @keyup="saveInputs('CustomSpell24Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell24Duration" type="text" @keyup="saveInputs('CustomSpell24Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 25</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell25" class="move-lower extend-bottom" @change="save('CustomSpell25', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell25Name" type="text" @keyup="saveInputs('CustomSpell25Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell25SpellLevel" type="text" @keyup="saveInputs('CustomSpell25SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell25Description" @keyup="saveInputs('CustomSpell25Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell25Damage" type="text" @keyup="saveInputs('CustomSpell25Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell25Healing" type="text" @keyup="saveInputs('CustomSpell25Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell25Range" type="text" @keyup="saveInputs('CustomSpell25Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell25Duration" type="text" @keyup="saveInputs('CustomSpell25Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 26</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell26" class="move-lower extend-bottom" @change="save('CustomSpell26', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell26Name" type="text" @keyup="saveInputs('CustomSpell26Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell26SpellLevel" type="text" @keyup="saveInputs('CustomSpell26SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell26Description" @keyup="saveInputs('CustomSpell26Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell26Damage" type="text" @keyup="saveInputs('CustomSpell26Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell26Healing" type="text" @keyup="saveInputs('CustomSpell26Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell26Range" type="text" @keyup="saveInputs('CustomSpell26Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell26Duration" type="text" @keyup="saveInputs('CustomSpell26Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 27</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell27" class="move-lower extend-bottom" @change="save('CustomSpell27', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell27Name" type="text" @keyup="saveInputs('CustomSpell27Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell27SpellLevel" type="text" @keyup="saveInputs('CustomSpell27SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell27Description" @keyup="saveInputs('CustomSpell27Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell27Damage" type="text" @keyup="saveInputs('CustomSpell27Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell27Healing" type="text" @keyup="saveInputs('CustomSpell27Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell27Range" type="text" @keyup="saveInputs('CustomSpell27Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell27Duration" type="text" @keyup="saveInputs('CustomSpell27Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 28</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell28" class="move-lower extend-bottom" @change="save('CustomSpell28', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell28Name" type="text" @keyup="saveInputs('CustomSpell28Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell28SpellLevel" type="text" @keyup="saveInputs('CustomSpell28SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell28Description" @keyup="saveInputs('CustomSpell28Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell28Damage" type="text" @keyup="saveInputs('CustomSpell28Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell28Healing" type="text" @keyup="saveInputs('CustomSpell28Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell28Range" type="text" @keyup="saveInputs('CustomSpell28Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell28Duration" type="text" @keyup="saveInputs('CustomSpell28Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 29</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell29" class="move-lower extend-bottom" @change="save('CustomSpell29', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell29Name" type="text" @keyup="saveInputs('CustomSpell29Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell29SpellLevel" type="text" @keyup="saveInputs('CustomSpell29SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell29Description" @keyup="saveInputs('CustomSpell29Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell29Damage" type="text" @keyup="saveInputs('CustomSpell29Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell29Healing" type="text" @keyup="saveInputs('CustomSpell29Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell29Range" type="text" @keyup="saveInputs('CustomSpell29Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell29Duration" type="text" @keyup="saveInputs('CustomSpell29Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 30</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell30" class="move-lower extend-bottom" @change="save('CustomSpell30', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell30Name" type="text" @keyup="saveInputs('CustomSpell30Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell30SpellLevel" type="text" @keyup="saveInputs('CustomSpell30SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell30Description" @keyup="saveInputs('CustomSpell30Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell30Damage" type="text" @keyup="saveInputs('CustomSpell30Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell30Healing" type="text" @keyup="saveInputs('CustomSpell30Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell30Range" type="text" @keyup="saveInputs('CustomSpell30Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell30Duration" type="text" @keyup="saveInputs('CustomSpell30Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 31</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell31" class="move-lower extend-bottom" @change="save('CustomSpell31', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell31Name" type="text" @keyup="saveInputs('CustomSpell31Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell31SpellLevel" type="text" @keyup="saveInputs('CustomSpell31SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell31Description" @keyup="saveInputs('CustomSpell31Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell31Damage" type="text" @keyup="saveInputs('CustomSpell31Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell31Healing" type="text" @keyup="saveInputs('CustomSpell31Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell31Range" type="text" @keyup="saveInputs('CustomSpell31Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell31Duration" type="text" @keyup="saveInputs('CustomSpell31Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 32</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell32" class="move-lower extend-bottom" @change="save('CustomSpell32', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell32Name" type="text" @keyup="saveInputs('CustomSpell32Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell32SpellLevel" type="text" @keyup="saveInputs('CustomSpell32SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell32Description" @keyup="saveInputs('CustomSpell32Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell32Damage" type="text" @keyup="saveInputs('CustomSpell32Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell32Healing" type="text" @keyup="saveInputs('CustomSpell32Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell32Range" type="text" @keyup="saveInputs('CustomSpell32Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell32Duration" type="text" @keyup="saveInputs('CustomSpell32Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 33</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell33" class="move-lower extend-bottom" @change="save('CustomSpell33', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell33Name" type="text" @keyup="saveInputs('CustomSpell33Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell33SpellLevel" type="text" @keyup="saveInputs('CustomSpell33SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell33Description" @keyup="saveInputs('CustomSpell33Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell33Damage" type="text" @keyup="saveInputs('CustomSpell33Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell33Healing" type="text" @keyup="saveInputs('CustomSpell33Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell33Range" type="text" @keyup="saveInputs('CustomSpell33Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell33Duration" type="text" @keyup="saveInputs('CustomSpell33Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 34</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell34" class="move-lower extend-bottom" @change="save('CustomSpell34', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell34Name" type="text" @keyup="saveInputs('CustomSpell34Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell34SpellLevel" type="text" @keyup="saveInputs('CustomSpell34SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell34Description" @keyup="saveInputs('CustomSpell34Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell34Damage" type="text" @keyup="saveInputs('CustomSpell34Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell34Healing" type="text" @keyup="saveInputs('CustomSpell34Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell34Range" type="text" @keyup="saveInputs('CustomSpell34Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell34Duration" type="text" @keyup="saveInputs('CustomSpell34Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 35</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell35" class="move-lower extend-bottom" @change="save('CustomSpell35', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell35Name" type="text" @keyup="saveInputs('CustomSpell35Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell35SpellLevel" type="text" @keyup="saveInputs('CustomSpell35SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell35Description" @keyup="saveInputs('CustomSpell35Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell35Damage" type="text" @keyup="saveInputs('CustomSpell35Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell35Healing" type="text" @keyup="saveInputs('CustomSpell35Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell35Range" type="text" @keyup="saveInputs('CustomSpell35Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell35Duration" type="text" @keyup="saveInputs('CustomSpell35Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 36</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell36" class="move-lower extend-bottom" @change="save('CustomSpell36', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell36Name" type="text" @keyup="saveInputs('CustomSpell36Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell36SpellLevel" type="text" @keyup="saveInputs('CustomSpell36SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell36Description" @keyup="saveInputs('CustomSpell36Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell36Damage" type="text" @keyup="saveInputs('CustomSpell36Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell36Healing" type="text" @keyup="saveInputs('CustomSpell36Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell36Range" type="text" @keyup="saveInputs('CustomSpell36Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell36Duration" type="text" @keyup="saveInputs('CustomSpell36Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 37</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell37" class="move-lower extend-bottom" @change="save('CustomSpell37', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell37Name" type="text" @keyup="saveInputs('CustomSpell37Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell37SpellLevel" type="text" @keyup="saveInputs('CustomSpell37SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell37Description" @keyup="saveInputs('CustomSpell37Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell37Damage" type="text" @keyup="saveInputs('CustomSpell37Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell37Healing" type="text" @keyup="saveInputs('CustomSpell37Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell37Range" type="text" @keyup="saveInputs('CustomSpell37Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell37Duration" type="text" @keyup="saveInputs('CustomSpell37Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 38</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell38" class="move-lower extend-bottom" @change="save('CustomSpell38', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell38Name" type="text" @keyup="saveInputs('CustomSpell38Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell38SpellLevel" type="text" @keyup="saveInputs('CustomSpell38SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell38Description" @keyup="saveInputs('CustomSpell38Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell38Damage" type="text" @keyup="saveInputs('CustomSpell38Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell38Healing" type="text" @keyup="saveInputs('CustomSpell38Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell38Range" type="text" @keyup="saveInputs('CustomSpell38Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell38Duration" type="text" @keyup="saveInputs('CustomSpell38Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 39</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell39" class="move-lower extend-bottom" @change="save('CustomSpell39', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell39Name" type="text" @keyup="saveInputs('CustomSpell39Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell39SpellLevel" type="text" @keyup="saveInputs('CustomSpell39SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell39Description" @keyup="saveInputs('CustomSpell39Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell39Damage" type="text" @keyup="saveInputs('CustomSpell39Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell39Healing" type="text" @keyup="saveInputs('CustomSpell39Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell39Range" type="text" @keyup="saveInputs('CustomSpell39Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell39Duration" type="text" @keyup="saveInputs('CustomSpell39Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 40</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell40" class="move-lower extend-bottom" @change="save('CustomSpell40', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell40Name" type="text" @keyup="saveInputs('CustomSpell40Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell40SpellLevel" type="text" @keyup="saveInputs('CustomSpell40SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell40Description" @keyup="saveInputs('CustomSpell40Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell40Damage" type="text" @keyup="saveInputs('CustomSpell40Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell40Healing" type="text" @keyup="saveInputs('CustomSpell40Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell40Range" type="text" @keyup="saveInputs('CustomSpell40Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell40Duration" type="text" @keyup="saveInputs('CustomSpell40Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 41</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell41" class="move-lower extend-bottom" @change="save('CustomSpell41', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell41Name" type="text" @keyup="saveInputs('CustomSpell41Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell41SpellLevel" type="text" @keyup="saveInputs('CustomSpell41SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell41Description" @keyup="saveInputs('CustomSpell41Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell41Damage" type="text" @keyup="saveInputs('CustomSpell41Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell41Healing" type="text" @keyup="saveInputs('CustomSpell41Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell41Range" type="text" @keyup="saveInputs('CustomSpell41Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell41Duration" type="text" @keyup="saveInputs('CustomSpell41Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 42</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell42" class="move-lower extend-bottom" @change="save('CustomSpell42', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell42Name" type="text" @keyup="saveInputs('CustomSpell42Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell42SpellLevel" type="text" @keyup="saveInputs('CustomSpell42SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell42Description" @keyup="saveInputs('CustomSpell42Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell42Damage" type="text" @keyup="saveInputs('CustomSpell42Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell42Healing" type="text" @keyup="saveInputs('CustomSpell42Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell42Range" type="text" @keyup="saveInputs('CustomSpell42Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell42Duration" type="text" @keyup="saveInputs('CustomSpell42Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 43</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell43" class="move-lower extend-bottom" @change="save('CustomSpell43', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell43Name" type="text" @keyup="saveInputs('CustomSpell43Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell43SpellLevel" type="text" @keyup="saveInputs('CustomSpell43SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell43Description" @keyup="saveInputs('CustomSpell43Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell43Damage" type="text" @keyup="saveInputs('CustomSpell43Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell43Healing" type="text" @keyup="saveInputs('CustomSpell43Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell43Range" type="text" @keyup="saveInputs('CustomSpell43Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell43Duration" type="text" @keyup="saveInputs('CustomSpell43Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 44</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell44" class="move-lower extend-bottom" @change="save('CustomSpell44', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell44Name" type="text" @keyup="saveInputs('CustomSpell44Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell44SpellLevel" type="text" @keyup="saveInputs('CustomSpell44SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell44Description" @keyup="saveInputs('CustomSpell44Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell44Damage" type="text" @keyup="saveInputs('CustomSpell44Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell44Healing" type="text" @keyup="saveInputs('CustomSpell44Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell44Range" type="text" @keyup="saveInputs('CustomSpell44Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell44Duration" type="text" @keyup="saveInputs('CustomSpell44Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 45</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell45" class="move-lower extend-bottom" @change="save('CustomSpell45', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell45Name" type="text" @keyup="saveInputs('CustomSpell45Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell45SpellLevel" type="text" @keyup="saveInputs('CustomSpell45SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell45Description" @keyup="saveInputs('CustomSpell45Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell45Damage" type="text" @keyup="saveInputs('CustomSpell45Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell45Healing" type="text" @keyup="saveInputs('CustomSpell45Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell45Range" type="text" @keyup="saveInputs('CustomSpell45Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell45Duration" type="text" @keyup="saveInputs('CustomSpell45Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 46</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell46" class="move-lower extend-bottom" @change="save('CustomSpell46', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell46Name" type="text" @keyup="saveInputs('CustomSpell46Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell46SpellLevel" type="text" @keyup="saveInputs('CustomSpell46SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell46Description" @keyup="saveInputs('CustomSpell46Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell46Damage" type="text" @keyup="saveInputs('CustomSpell46Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell46Healing" type="text" @keyup="saveInputs('CustomSpell46Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell46Range" type="text" @keyup="saveInputs('CustomSpell46Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell46Duration" type="text" @keyup="saveInputs('CustomSpell46Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 47</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell47" class="move-lower extend-bottom" @change="save('CustomSpell47', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell47Name" type="text" @keyup="saveInputs('CustomSpell47Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell47SpellLevel" type="text" @keyup="saveInputs('CustomSpell47SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell47Description" @keyup="saveInputs('CustomSpell47Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell47Damage" type="text" @keyup="saveInputs('CustomSpell47Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell47Healing" type="text" @keyup="saveInputs('CustomSpell47Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell47Range" type="text" @keyup="saveInputs('CustomSpell47Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell47Duration" type="text" @keyup="saveInputs('CustomSpell47Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 48</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell48" class="move-lower extend-bottom" @change="save('CustomSpell48', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell48Name" type="text" @keyup="saveInputs('CustomSpell48Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell48SpellLevel" type="text" @keyup="saveInputs('CustomSpell48SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell48Description" @keyup="saveInputs('CustomSpell48Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell48Damage" type="text" @keyup="saveInputs('CustomSpell48Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell48Healing" type="text" @keyup="saveInputs('CustomSpell48Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell48Range" type="text" @keyup="saveInputs('CustomSpell48Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell48Duration" type="text" @keyup="saveInputs('CustomSpell48Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 49</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell49" class="move-lower extend-bottom" @change="save('CustomSpell49', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell49Name" type="text" @keyup="saveInputs('CustomSpell49Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell49SpellLevel" type="text" @keyup="saveInputs('CustomSpell49SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell49Description" @keyup="saveInputs('CustomSpell49Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell49Damage" type="text" @keyup="saveInputs('CustomSpell49Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell49Healing" type="text" @keyup="saveInputs('CustomSpell49Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell49Range" type="text" @keyup="saveInputs('CustomSpell49Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell49Duration" type="text" @keyup="saveInputs('CustomSpell49Duration')">
              </div>
        
              <div class="dark-line move-lower"></div>

              <h3 class="move-lower">Custom Spell 50</h3>
              <div class="move-slightly-lower">
                <f7-checkbox id="CustomSpell50" class="move-lower extend-bottom" @change="save('CustomSpell50', 'Custom')">
                  <p class="checkbox-label">Learned</p>
                </f7-checkbox>
                <label>Name</label>
                <input class="dark-input" id="CustomSpell50Name" type="text" @keyup="saveInputs('CustomSpell50Name')">
                <label>Spell Level</label>
                <input class="dark-input" id="CustomSpell50SpellLevel" type="text" @keyup="saveInputs('CustomSpell50SpellLevel')">
                <label>Description</label>
                <textarea class="larger-textarea  dark-input" id="CustomSpell50Description" @keyup="saveInputs('CustomSpell50Description')"></textarea>
                <label>Damage</label>
                <input class="dark-input" id="CustomSpell50Damage" type="text" @keyup="saveInputs('CustomSpell50Damage')">
                <label>Healing</label>
                <input class="dark-input" id="CustomSpell50Healing" type="text" @keyup="saveInputs('CustomSpell50Healing')">
                <label>Range</label>
                <input class="dark-input" id="CustomSpell50Range" type="text" @keyup="saveInputs('CustomSpell50Range')">
                <label>Duration</label>
                <input class="dark-input" id="CustomSpell50Duration" type="text" @keyup="saveInputs('CustomSpell50Duration')">
              </div>
              
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>

      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';
import SearchBar from '../components/SearchBar';

export default {
  name: 'SpellLibrary',
  components: {
    QuickViewFAB,
    SearchBar,
  },
  data() {
    return {
      popupOpened: false,
      spellsOrLibraries: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"WasAtLibraries")) === true ? "/libraries/" : "/spells/",
    }
  },
  methods: {
    startLoading() {
      this.$store.state.loaderText = "TRAVELLING BACK TO ADVENTURE"
      this.$store.state.isLoading = true;
      setTimeout(function() {
        document.getElementById("back-to-spells").click();
      }, 100);
    },
    save(spell, spellTypeToCount="") {
      document.getElementById(spell).childNodes[1].checked === undefined
      ? localStorage.setItem(localStorage.currentlySelectedCharacter+spell+"Learned", false)
      : localStorage.setItem(localStorage.currentlySelectedCharacter+spell+"Learned", document.getElementById(spell).childNodes[1].checked)

      if (document.getElementById(spell).childNodes[1].checked) {
        switch (spellTypeToCount) {
          case "Cantrips":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CantripsCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CantripsCount")) + 1);
            break;
          case "Level 1":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level1Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level1Count")) + 1);
            break;
          case "Level 2":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level2Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level2Count")) + 1);
            break;
          case "Level 3":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level3Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level3Count")) + 1);
            break;
          case "Level 4":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level4Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level4Count")) + 1);
            break;
          case "Level 5":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level5Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level5Count")) + 1);
            break;
          case "Level 6":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level6Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level6Count")) + 1);
            break;
          case "Level 7":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level7Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level7Count")) + 1);
            break;
          case "Level 8":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level8Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level8Count")) + 1);
            break;
          case "Level 9":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"Level9Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level9Count")) + 1);
            break;
          case "Custom":
            localStorage.setItem(localStorage.currentlySelectedCharacter+"CustomCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CustomCount")) + 1);
            break;
          default:
            break;
        }
      } else {
        switch (spellTypeToCount) {
          case "Cantrips":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CantripsCount")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"CantripsCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CantripsCount")) - 1);
            }
            break;
          case "Level 1":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level1Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level1Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level1Count")) - 1);
            }
            break;
          case "Level 2":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level2Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level2Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level2Count")) - 1);
            }
            break;
          case "Level 3":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level3Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level3Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level3Count")) - 1);
            }
            break;
          case "Level 4":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level4Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level4Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level4Count")) - 1);
            }
            break;
          case "Level 5":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level5Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level5Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level5Count")) - 1);
            }
            break;
          case "Level 6":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level6Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level6Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level6Count")) - 1);
            }
            break;
          case "Level 7":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level7Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level7Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level7Count")) - 1);
            }
            break;
          case "Level 8":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level8Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level8Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level8Count")) - 1);
            }
            break;
          case "Level 9":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level9Count")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level9Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level9Count")) - 1);
            }
            break;
          case "Custom":
            if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CustomCount")) > 0) {
              localStorage.setItem(localStorage.currentlySelectedCharacter+"CustomCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CustomCount")) - 1);
            }
            break;
          default:
            break;
        }
      }
    },
    saveInputs(spell) {
      localStorage.setItem(localStorage.currentlySelectedCharacter+spell, document.getElementById(spell).value);
    },
    loadDetails(spell, spellTypeToCount) {
      setTimeout(function() {
        if (document.getElementById(spell) !== null) {
          document.getElementById(spell).firstChild.checked
          document.getElementById(spell).firstChild.checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+spell+"Learned"));
        }
        if (document.getElementById(spell).firstChild.checked) {
          switch (spellTypeToCount) {
            case "Cantrips":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"CantripsCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CantripsCount")) + 1);
              break;
            case "Level 1":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level1Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level1Count")) + 1);
              break;
            case "Level 2":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level2Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level2Count")) + 1);
              break;
            case "Level 3":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level3Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level3Count")) + 1);
              break;
            case "Level 4":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level4Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level4Count")) + 1);
              break;
            case "Level 5":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level5Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level5Count")) + 1);
              break;
            case "Level 6":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level6Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level6Count")) + 1);
              break;
            case "Level 7":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level7Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level7Count")) + 1);
              break;
            case "Level 8":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level8Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level8Count")) + 1);
              break;
            case "Level 9":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"Level9Count", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"Level9Count")) + 1);
              break;
            case "Custom":
              localStorage.setItem(localStorage.currentlySelectedCharacter+"CustomCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"CustomCount")) + 1);
              break;
            default:
              break;
          }
        }
      }, 1000);
    },
    async loadInputs(spell) {
      await document.getElementById(spell);
      if (document.getElementById(spell) !== null) {
        document.getElementById(spell).value = localStorage.getItem(localStorage.currentlySelectedCharacter+spell)
      }
    },
    async load() {
      localStorage.setItem(localStorage.currentlySelectedCharacter+"CantripsCount", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level1Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level2Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level3Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level4Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level5Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level6Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level7Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level8Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"Level9Count", 0)
      localStorage.setItem(localStorage.currentlySelectedCharacter+"LCustomCount", 0)

      // CANTRIPS
      await this.loadDetails("AcidSplash", "Cantrips");
      await this.loadDetails("ChillTouch", "Cantrips");
      await this.loadDetails("ControlFlames", "Cantrips");
      await this.loadDetails("CreateBonfire", "Cantrips");
      await this.loadDetails("DancingLights", "Cantrips");
      await this.loadDetails("Druidcraft", "Cantrips");
      await this.loadDetails("EldritchBlast", "Cantrips");
      await this.loadDetails("FireBolt", "Cantrips");
      await this.loadDetails("Frostbite", "Cantrips");
      await this.loadDetails("Guidance", "Cantrips");
      await this.loadDetails("Gust", "Cantrips");
      await this.loadDetails("Light", "Cantrips");
      await this.loadDetails("MageHand", "Cantrips");
      await this.loadDetails("MagicStone", "Cantrips");
      await this.loadDetails("Mending", "Cantrips");
      await this.loadDetails("Message", "Cantrips");
      await this.loadDetails("MindSliver", "Cantrips");
      await this.loadDetails("MinorIllusion", "Cantrips");
      await this.loadDetails("MoldEarth", "Cantrips");
      await this.loadDetails("PoisonSpray", "Cantrips");
      await this.loadDetails("Prestidigitation", "Cantrips");
      await this.loadDetails("ProduceFlame", "Cantrips");
      await this.loadDetails("RayOfFrost", "Cantrips");
      await this.loadDetails("Resistance", "Cantrips");
      await this.loadDetails("SacredFlame", "Cantrips");
      await this.loadDetails("ShapeWater", "Cantrips");
      await this.loadDetails("Shillelagh", "Cantrips");
      await this.loadDetails("ShockingGrasp", "Cantrips");
      await this.loadDetails("SpareTheDying", "Cantrips");
      await this.loadDetails("Thaumaturgy", "Cantrips");
      await this.loadDetails("Thunderclap", "Cantrips");
      await this.loadDetails("TrueStrike", "Cantrips");
      await this.loadDetails("ViciousMockery", "Cantrips");

      // LEVEL 1
      await this.loadDetails("AbsorbElements", "Level 1");
      await this.loadDetails("AcidStream", "Level 1");
      await this.loadDetails("Alarm", "Level 1");
      await this.loadDetails("AnimalFriendship", "Level 1");
      await this.loadDetails("Bane", "Level 1");
      await this.loadDetails("BeastBond", "Level 1");
      await this.loadDetails("Bless", "Level 1");
      await this.loadDetails("BurningHands", "Level 1");
      await this.loadDetails("Catapult", "Level 1");
      await this.loadDetails("CharmPerson", "Level 1");
      await this.loadDetails("ColorSpray", "Level 1");
      await this.loadDetails("Command", "Level 1");
      await this.loadDetails("ComprehendLanguages", "Level 1");
      await this.loadDetails("CreateOrDestroyWater", "Level 1");
      await this.loadDetails("CureWounds", "Level 1");
      await this.loadDetails("DetectEvilAndGood", "Level 1");
      await this.loadDetails("DetectMagic", "Level 1");
      await this.loadDetails("DetectPoisonAndDisease", "Level 1");
      await this.loadDetails("DisguiseSelf", "Level 1");
      await this.loadDetails("DivineFavor", "Level 1");
      await this.loadDetails("EarthTremor", "Level 1");
      await this.loadDetails("Entangle", "Level 1");
      await this.loadDetails("ExpeditiousRetreat", "Level 1");
      await this.loadDetails("FaerieFire", "Level 1");
      await this.loadDetails("FalseLife", "Level 1");
      await this.loadDetails("FeatherFall", "Level 1");
      await this.loadDetails("FindFamiliar", "Level 1");
      await this.loadDetails("FloatingDisk", "Level 1");
      await this.loadDetails("FogCloud", "Level 1");
      await this.loadDetails("Goodberry", "Level 1");
      await this.loadDetails("Grease", "Level 1");
      await this.loadDetails("GuidingBolt", "Level 1");
      await this.loadDetails("HealingWord", "Level 1");
      await this.loadDetails("HellishRebuke", "Level 1");
      await this.loadDetails("Heroism", "Level 1");
      await this.loadDetails("HideousLaughter", "Level 1");
      await this.loadDetails("HuntersMark", "Level 1");
      await this.loadDetails("IceKnife", "Level 1");
      await this.loadDetails("Identify", "Level 1");
      await this.loadDetails("IllusoryScript", "Level 1");
      await this.loadDetails("InflictWounds", "Level 1");
      await this.loadDetails("Jump", "Level 1");
      await this.loadDetails("Longstrider", "Level 1");
      await this.loadDetails("MageArmor", "Level 1");
      await this.loadDetails("MagicMissile", "Level 1");
      await this.loadDetails("ProtectionFromEvilAndGood", "Level 1");
      await this.loadDetails("PurifyFoodAndDrink", "Level 1");
      await this.loadDetails("Sanctuary", "Level 1");
      await this.loadDetails("Shield", "Level 1");
      await this.loadDetails("ShieldOfFaith", "Level 1");
      await this.loadDetails("SilentImage", "Level 1");
      await this.loadDetails("Sleep", "Level 1");
      await this.loadDetails("SpeakWithAnimals", "Level 1");
      await this.loadDetails("Thunderwave", "Level 1");
      await this.loadDetails("UnseenServant", "Level 1");

      // LEVEL 2
      await this.loadDetails("AcidArrow", "Level 2");
      await this.loadDetails("AganazzarsScorcher", "Level 2");
      await this.loadDetails("Aid", "Level 2");
      await this.loadDetails("AlterSelf", "Level 2");
      await this.loadDetails("AnimalMessenger", "Level 2");
      await this.loadDetails("ArcaneLock", "Level 2");
      await this.loadDetails("ArcanistsMagicAura", "Level 2");
      await this.loadDetails("Augury", "Level 2");
      await this.loadDetails("Barkskin", "Level 2");
      await this.loadDetails("BlindnessDeafness", "Level 2");
      await this.loadDetails("Blur", "Level 2");
      await this.loadDetails("BrandingSmite", "Level 2");
      await this.loadDetails("CalmEmotions", "Level 2");
      await this.loadDetails("ContinualFlame", "Level 2");
      await this.loadDetails("Darkness", "Level 2");
      await this.loadDetails("Darkvision", "Level 2");
      await this.loadDetails("DetectThoughts", "Level 2");
      await this.loadDetails("DustDevil", "Level 2");
      await this.loadDetails("Earthbind", "Level 2");
      await this.loadDetails("EnhanceAbility", "Level 2");
      await this.loadDetails("EnlargeReduce", "Level 2");
      await this.loadDetails("Enthrall", "Level 2");
      await this.loadDetails("FindSteed", "Level 2");
      await this.loadDetails("FindTraps", "Level 2");
      await this.loadDetails("FlameBlade", "Level 2");
      await this.loadDetails("FlamingSphere", "Level 2");
      await this.loadDetails("GentleRepose", "Level 2");
      await this.loadDetails("GustOfWind", "Level 2");
      await this.loadDetails("HeatMetal", "Level 2");
      await this.loadDetails("HoldPerson", "Level 2");
      await this.loadDetails("Invisibility", "Level 2");
      await this.loadDetails("Knock", "Level 2");
      await this.loadDetails("LesserRestoration", "Level 2");
      await this.loadDetails("Levitate", "Level 2");
      await this.loadDetails("LocateAnimalsOrPlants", "Level 2");
      await this.loadDetails("LocateObject", "Level 2");
      await this.loadDetails("MagicMouth", "Level 2");
      await this.loadDetails("MagicWeapon", "Level 2");
      await this.loadDetails("MaximiliansEarthenGrasp", "Level 2");
      await this.loadDetails("MindThrust", "Level 2");
      await this.loadDetails("MirrorImage", "Level 2");
      await this.loadDetails("MistyStep", "Level 2");
      await this.loadDetails("Moonbeam", "Level 2");
      await this.loadDetails("PassWithoutTrace", "Level 2");
      await this.loadDetails("PrayerOfHealing", "Level 2");
      await this.loadDetails("ProtectionFromPoison", "Level 2");
      await this.loadDetails("Pyrotechnics", "Level 2");
      await this.loadDetails("RayOfEnfeeblement", "Level 2");
      await this.loadDetails("RopeTrick", "Level 2");
      await this.loadDetails("ScorchingRay", "Level 2");
      await this.loadDetails("SeeInvisibility", "Level 2");
      await this.loadDetails("Shatter", "Level 2");
      await this.loadDetails("Silence", "Level 2");
      await this.loadDetails("Skywrite", "Level 2");
      await this.loadDetails("SnillocsSnowballSwarm", "Level 2");
      await this.loadDetails("SpiderClimb", "Level 2");
      await this.loadDetails("SpikeGrowth", "Level 2");
      await this.loadDetails("SpiritualWeapon", "Level 2");
      await this.loadDetails("Suggestion", "Level 2");
      await this.loadDetails("SummonBestialSpirit", "Level 2");
      await this.loadDetails("WardingBond", "Level 2");
      await this.loadDetails("WardingWind", "Level 2");
      await this.loadDetails("Web", "Level 2");
      await this.loadDetails("ZoneOfTruth", "Level 2");

      // LEVEL 3
      await this.loadDetails("AnimateDead", "Level 3");
      await this.loadDetails("BeaconOfHope", "Level 3");
      await this.loadDetails("BestowCurse", "Level 3");
      await this.loadDetails("Blink", "Level 3");
      await this.loadDetails("CallLightning", "Level 3");
      await this.loadDetails("Clairvoyance", "Level 3");
      await this.loadDetails("ConjureAnimals", "Level 3");
      await this.loadDetails("Counterspell", "Level 3");
      await this.loadDetails("CreateFoodAndWater", "Level 3");
      await this.loadDetails("Daylight", "Level 3");
      await this.loadDetails("DispelMagic", "Level 3");
      await this.loadDetails("EruptingEarth", "Level 3");
      await this.loadDetails("Fear", "Level 3");
      await this.loadDetails("Fireball", "Level 3");
      await this.loadDetails("FlameArrows", "Level 3");
      await this.loadDetails("Fly", "Level 3");
      await this.loadDetails("GaseousForm", "Level 3");
      await this.loadDetails("GlyphOfWarding", "Level 3");
      await this.loadDetails("Haste", "Level 3");
      await this.loadDetails("HypnoticPattern", "Level 3");
      await this.loadDetails("LightningBolt", "Level 3");
      await this.loadDetails("MagicCircle", "Level 3");
      await this.loadDetails("MajorImage", "Level 3");
      await this.loadDetails("MassHealingWord", "Level 3");
      await this.loadDetails("MeldIntoStone", "Level 3");
      await this.loadDetails("MelfsMinuteMeteors", "Level 3");
      await this.loadDetails("Nondetection", "Level 3");
      await this.loadDetails("PhantomSteed", "Level 3");
      await this.loadDetails("PlantGrowth", "Level 3");
      await this.loadDetails("ProtectionFromEnergy", "Level 3");
      await this.loadDetails("RemoveCurse", "Level 3");
      await this.loadDetails("Revivify", "Level 3");
      await this.loadDetails("Sending", "Level 3");
      await this.loadDetails("SleetStorm", "Level 3");
      await this.loadDetails("Slow", "Level 3");
      await this.loadDetails("SpeakWithDead", "Level 3");
      await this.loadDetails("SpeakWithPlants", "Level 3");
      await this.loadDetails("SpiritGuardians", "Level 3");
      await this.loadDetails("SpiritShroud", "Level 3");
      await this.loadDetails("StinkingCloud", "Level 3");
      await this.loadDetails("SummonFeySpirit", "Level 3");
      await this.loadDetails("SummonShadowSpirit", "Level 3");
      await this.loadDetails("SummonUndeadSpirit", "Level 3");
      await this.loadDetails("TinyHut", "Level 3");
      await this.loadDetails("Tongues", "Level 3");
      await this.loadDetails("VampiricTouch", "Level 3");
      await this.loadDetails("WallOfSand", "Level 3");
      await this.loadDetails("WallOfWater", "Level 3");
      await this.loadDetails("WaterBreathing", "Level 3");
      await this.loadDetails("WaterWalk", "Level 3");
      await this.loadDetails("WindWall", "Level 3");

      // LEVEL 4
      await this.loadDetails("ArcaneEye", "Level 4");
      await this.loadDetails("Banishment", "Level 4");
      await this.loadDetails("BlackTentacles", "Level 4");
      await this.loadDetails("Blight", "Level 4");
      await this.loadDetails("Compulsion", "Level 4");
      await this.loadDetails("Confusion", "Level 4");
      await this.loadDetails("ConjureMinorElementals", "Level 4");
      await this.loadDetails("ConjureWoodlandBeings", "Level 4");
      await this.loadDetails("ControlWater", "Level 4");
      await this.loadDetails("DeathWard", "Level 4");
      await this.loadDetails("DimensionDoor", "Level 4");
      await this.loadDetails("Divination", "Level 4");
      await this.loadDetails("DominateBeast", "Level 4");
      await this.loadDetails("ElementalBane", "Level 4");
      await this.loadDetails("Fabricate", "Level 4");
      await this.loadDetails("FaithfulHound", "Level 4");
      await this.loadDetails("FireShield", "Level 4");
      await this.loadDetails("FreedomOfMovement", "Level 4");
      await this.loadDetails("GiantInsect", "Level 4");
      await this.loadDetails("GreaterInvisibility", "Level 4");
      await this.loadDetails("GuardianOfFaith", "Level 4");
      await this.loadDetails("HallucinatoryTerrain", "Level 4");
      await this.loadDetails("IceStorm", "Level 4");
      await this.loadDetails("IntellectFortress", "Level 4");
      await this.loadDetails("LocateCreature", "Level 4");
      await this.loadDetails("PhantasmalKiller", "Level 4");
      await this.loadDetails("Polymorph", "Level 4");
      await this.loadDetails("PrivateSanctum", "Level 4");
      await this.loadDetails("ResilientSphere", "Level 4");
      await this.loadDetails("SecretChest", "Level 4");
      await this.loadDetails("StoneShape", "Level 4");
      await this.loadDetails("Stoneskin", "Level 4");
      await this.loadDetails("StormSphere", "Level 4");
      await this.loadDetails("SummonAberrantSpirit", "Level 4");
      await this.loadDetails("SummonElementalSpirit", "Level 4");
      await this.loadDetails("VitriolicSphere", "Level 4");
      await this.loadDetails("WallOfFire", "Level 4");
      await this.loadDetails("WaterySphere", "Level 4");
      
      // LEVEL 5
      await this.loadDetails("AnimateObjects", "Level 5");
      await this.loadDetails("AntilifeShell", "Level 5");
      await this.loadDetails("ArcaneHand", "Level 5");
      await this.loadDetails("Awaken", "Level 5");
      await this.loadDetails("Cloudkill", "Level 5");
      await this.loadDetails("Commune", "Level 5");
      await this.loadDetails("CommuneWithNature", "Level 5");
      await this.loadDetails("ConeOfCold", "Level 5");
      await this.loadDetails("ConjureElemental", "Level 5");
      await this.loadDetails("ContactOtherPlane", "Level 5");
      await this.loadDetails("Contagion", "Level 5");
      await this.loadDetails("ControlWinds", "Level 5");
      await this.loadDetails("Creation", "Level 5");
      await this.loadDetails("DispelEvilAndGood", "Level 5");
      await this.loadDetails("DominatePerson", "Level 5");
      await this.loadDetails("Dream", "Level 5");
      await this.loadDetails("FlameStrike", "Level 5");
      await this.loadDetails("Geas", "Level 5");
      await this.loadDetails("GreaterRestoration", "Level 5");
      await this.loadDetails("Hallow", "Level 5");
      await this.loadDetails("HoldMonster", "Level 5");
      await this.loadDetails("Immolation", "Level 5");
      await this.loadDetails("InsectPlague", "Level 5");
      await this.loadDetails("LegendLore", "Level 5");
      await this.loadDetails("Maelstrom", "Level 5");
      await this.loadDetails("MassCureWounds", "Level 5");
      await this.loadDetails("Mislead", "Level 5");
      await this.loadDetails("ModifyMemory", "Level 5");
      await this.loadDetails("Passwall", "Level 5");
      await this.loadDetails("PlanarBinding", "Level 5");
      await this.loadDetails("RaiseDead", "Level 5");
      await this.loadDetails("Reincarnate", "Level 5");
      await this.loadDetails("Scrying", "Level 5");
      await this.loadDetails("Seeming", "Level 5");
      await this.loadDetails("SummonCelestialSpirit", "Level 5");
      await this.loadDetails("Telekinesis", "Level 5");
      await this.loadDetails("TelepathicBond", "Level 5");
      await this.loadDetails("TeleportationCircle", "Level 5");
      await this.loadDetails("TransmuteRock", "Level 5");
      await this.loadDetails("TreeStride", "Level 5");
      await this.loadDetails("WallOfForce", "Level 5");
      await this.loadDetails("WallOfStone", "Level 5");

      // LEVEL 6
      await this.loadDetails("BladeBarrier", "Level 6");
      await this.loadDetails("BonesOfTheEarth", "Level 6");
      await this.loadDetails("ChainLightning", "Level 6");
      await this.loadDetails("CircleOfDeath", "Level 6");
      await this.loadDetails("ConjureFey", "Level 6");
      await this.loadDetails("Contingency", "Level 6");
      await this.loadDetails("CreateUndead", "Level 6");
      await this.loadDetails("Disintegrate", "Level 6");
      await this.loadDetails("Eyebite", "Level 6");
      await this.loadDetails("FindThePath", "Level 6");
      await this.loadDetails("FleshToStone", "Level 6");
      await this.loadDetails("Forbiddance", "Level 6");
      await this.loadDetails("FreezingSphere", "Level 6");
      await this.loadDetails("GlobeOfInvulnerability", "Level 6");
      await this.loadDetails("GuardsAndWards", "Level 6");
      await this.loadDetails("Harm", "Level 6");
      await this.loadDetails("Heal", "Level 6");
      await this.loadDetails("HeroesFeast", "Level 6");
      await this.loadDetails("InstantSummons", "Level 6");
      await this.loadDetails("InvestitureOfFlame", "Level 6");
      await this.loadDetails("InvestitureOfIce", "Level 6");
      await this.loadDetails("InvestitureOfStone", "Level 6");
      await this.loadDetails("InvestitureOfWind", "Level 6");
      await this.loadDetails("MagicJar", "Level 6");
      await this.loadDetails("MassSuggestion", "Level 6");
      await this.loadDetails("MoveEarth", "Level 6");
      await this.loadDetails("OtherworldlyForm", "Level 6");
      await this.loadDetails("OttosIrresistibleDance", "Level 6");
      await this.loadDetails("PlanarAlly", "Level 6");
      await this.loadDetails("PrimordialWard", "Level 6");
      await this.loadDetails("ProgrammedIllusion", "Level 6");
      await this.loadDetails("SummonFiendishSpirit", "Level 6");
      await this.loadDetails("Sunbeam", "Level 6");
      await this.loadDetails("TransportViaPlants", "Level 6");
      await this.loadDetails("TrueSeeing", "Level 6");
      await this.loadDetails("WallOfIce", "Level 6");
      await this.loadDetails("WallOfThorns", "Level 6");
      await this.loadDetails("WindWalk", "Level 6");
      await this.loadDetails("WordOfRecall", "Level 6");

      // LEVEL 7
      await this.loadDetails("ConjureCelestial", "Level 7");
      await this.loadDetails("DelayedBlastFireball", "Level 7");
      await this.loadDetails("DivineWord", "Level 7");
      await this.loadDetails("Etherealness", "Level 7");
      await this.loadDetails("FingerOfDeath", "Level 7");
      await this.loadDetails("FireStorm", "Level 7");
      await this.loadDetails("Forcecage", "Level 7");
      await this.loadDetails("MagnificentMansion", "Level 7");
      await this.loadDetails("MirageArcane", "Level 7");
      await this.loadDetails("MordenkainensSword", "Level 7");
      await this.loadDetails("PlaneShift", "Level 7");
      await this.loadDetails("PrismaticSpray", "Level 7");
      await this.loadDetails("ProjectImage", "Level 7");
      await this.loadDetails("Regenerate", "Level 7");
      await this.loadDetails("Resurrection", "Level 7");
      await this.loadDetails("ReverseGravity", "Level 7");
      await this.loadDetails("Sequester", "Level 7");
      await this.loadDetails("Simulacrum", "Level 7");
      await this.loadDetails("Symbol", "Level 7");
      await this.loadDetails("Teleport", "Level 7");
      await this.loadDetails("Whirlwind", "Level 7");

      // LEVEL 8
      await this.loadDetails("AbiDalzimsHorridWilting", "Level 8");
      await this.loadDetails("AnimalShapes", "Level 8");
      await this.loadDetails("AntimagicField", "Level 8");
      await this.loadDetails("AntipathySympathy", "Level 8");
      await this.loadDetails("Clone", "Level 8");
      await this.loadDetails("ControlWeather", "Level 8");
      await this.loadDetails("Demiplane", "Level 8");
      await this.loadDetails("DominateMonster", "Level 8");
      await this.loadDetails("Earthquake", "Level 8");
      await this.loadDetails("Feeblemind", "Level 8");
      await this.loadDetails("Glibness", "Level 8");
      await this.loadDetails("HolyAura", "Level 8");
      await this.loadDetails("IncendiaryCloud", "Level 8");
      await this.loadDetails("Maze", "Level 8");
      await this.loadDetails("MindBlank", "Level 8");
      await this.loadDetails("PowerWordStun", "Level 8");
      await this.loadDetails("Sunburst", "Level 8");

      // LEVEL 9
      await this.loadDetails("AstralProjection", "Level 9");
      await this.loadDetails("Foresight", "Level 9");
      await this.loadDetails("Gate", "Level 9");
      await this.loadDetails("Imprisonment", "Level 9");
      await this.loadDetails("MassHeal", "Level 9");
      await this.loadDetails("MeteorSwarm", "Level 9");
      await this.loadDetails("PowerWordKill", "Level 9");
      await this.loadDetails("PrismaticWall", "Level 9");
      await this.loadDetails("Shapechange", "Level 9");
      await this.loadDetails("StormOfVengeance", "Level 9");
      await this.loadDetails("TimeStop", "Level 9");
      await this.loadDetails("TruePolymorph", "Level 9");
      await this.loadDetails("TrueResurrection", "Level 9");
      await this.loadDetails("Weird", "Level 9");
      await this.loadDetails("Wish", "Level 9");

      // CUSTOM
      await this.loadDetails("CustomSpell1", "Custom");
      await this.loadDetails("CustomSpell2", "Custom");
      await this.loadDetails("CustomSpell3", "Custom");
      await this.loadDetails("CustomSpell4", "Custom");
      await this.loadDetails("CustomSpell5", "Custom");
      await this.loadDetails("CustomSpell6", "Custom");
      await this.loadDetails("CustomSpell7", "Custom");
      await this.loadDetails("CustomSpell8", "Custom");
      await this.loadDetails("CustomSpell9", "Custom");
      await this.loadDetails("CustomSpell10", "Custom");
      await this.loadDetails("CustomSpell11", "Custom");
      await this.loadDetails("CustomSpell12", "Custom");
      await this.loadDetails("CustomSpell13", "Custom");
      await this.loadDetails("CustomSpell14", "Custom");
      await this.loadDetails("CustomSpell15", "Custom");
      await this.loadDetails("CustomSpell16", "Custom");
      await this.loadDetails("CustomSpell17", "Custom");
      await this.loadDetails("CustomSpell18", "Custom");
      await this.loadDetails("CustomSpell19", "Custom");
      await this.loadDetails("CustomSpell20", "Custom");
      await this.loadDetails("CustomSpell21", "Custom");
      await this.loadDetails("CustomSpell22", "Custom");
      await this.loadDetails("CustomSpell23", "Custom");
      await this.loadDetails("CustomSpell24", "Custom");
      await this.loadDetails("CustomSpell25", "Custom");
      await this.loadDetails("CustomSpell26", "Custom");
      await this.loadDetails("CustomSpell27", "Custom");
      await this.loadDetails("CustomSpell28", "Custom");
      await this.loadDetails("CustomSpell29", "Custom");
      await this.loadDetails("CustomSpell30", "Custom");
      await this.loadDetails("CustomSpell31", "Custom");
      await this.loadDetails("CustomSpell32", "Custom");
      await this.loadDetails("CustomSpell33", "Custom");
      await this.loadDetails("CustomSpell34", "Custom");
      await this.loadDetails("CustomSpell35", "Custom");
      await this.loadDetails("CustomSpell36", "Custom");
      await this.loadDetails("CustomSpell37", "Custom");
      await this.loadDetails("CustomSpell38", "Custom");
      await this.loadDetails("CustomSpell39", "Custom");
      await this.loadDetails("CustomSpell40", "Custom");
      await this.loadDetails("CustomSpell41", "Custom");
      await this.loadDetails("CustomSpell42", "Custom");
      await this.loadDetails("CustomSpell43", "Custom");
      await this.loadDetails("CustomSpell44", "Custom");
      await this.loadDetails("CustomSpell45", "Custom");
      await this.loadDetails("CustomSpell46", "Custom");
      await this.loadDetails("CustomSpell47", "Custom");
      await this.loadDetails("CustomSpell48", "Custom");
      await this.loadDetails("CustomSpell49", "Custom");
      await this.loadDetails("CustomSpell50", "Custom");
      await this.loadInputs("CustomSpell1Name");
      await this.loadInputs("CustomSpell1SpellLevel");
      await this.loadInputs("CustomSpell1Description");
      await this.loadInputs("CustomSpell1Damage");
      await this.loadInputs("CustomSpell1Healing");
      await this.loadInputs("CustomSpell1Range");
      await this.loadInputs("CustomSpell1Duration");
      await this.loadInputs("CustomSpell2Name");
      await this.loadInputs("CustomSpell2SpellLevel");
      await this.loadInputs("CustomSpell2Description");
      await this.loadInputs("CustomSpell2Damage");
      await this.loadInputs("CustomSpell2Healing");
      await this.loadInputs("CustomSpell2Range");
      await this.loadInputs("CustomSpell2Duration");
      await this.loadInputs("CustomSpell3Name");
      await this.loadInputs("CustomSpell3SpellLevel");
      await this.loadInputs("CustomSpell3Description");
      await this.loadInputs("CustomSpell3Damage");
      await this.loadInputs("CustomSpell3Healing");
      await this.loadInputs("CustomSpell3Range");
      await this.loadInputs("CustomSpell3Duration");
      await this.loadInputs("CustomSpell4Name");
      await this.loadInputs("CustomSpell4SpellLevel");
      await this.loadInputs("CustomSpell4Description");
      await this.loadInputs("CustomSpell4Damage");
      await this.loadInputs("CustomSpell4Healing");
      await this.loadInputs("CustomSpell4Range");
      await this.loadInputs("CustomSpell4Duration");
      await this.loadInputs("CustomSpell5Name");
      await this.loadInputs("CustomSpell5SpellLevel");
      await this.loadInputs("CustomSpell5Description");
      await this.loadInputs("CustomSpell5Damage");
      await this.loadInputs("CustomSpell5Healing");
      await this.loadInputs("CustomSpell5Range");
      await this.loadInputs("CustomSpell5Duration");
      await this.loadInputs("CustomSpell6Name");
      await this.loadInputs("CustomSpell6SpellLevel");
      await this.loadInputs("CustomSpell6Description");
      await this.loadInputs("CustomSpell6Damage");
      await this.loadInputs("CustomSpell6Healing");
      await this.loadInputs("CustomSpell6Range");
      await this.loadInputs("CustomSpell6Duration");
      await this.loadInputs("CustomSpell7Name");
      await this.loadInputs("CustomSpell7SpellLevel");
      await this.loadInputs("CustomSpell7Description");
      await this.loadInputs("CustomSpell7Damage");
      await this.loadInputs("CustomSpell7Healing");
      await this.loadInputs("CustomSpell7Range");
      await this.loadInputs("CustomSpell7Duration");
      await this.loadInputs("CustomSpell8Name");
      await this.loadInputs("CustomSpell8SpellLevel");
      await this.loadInputs("CustomSpell8Description");
      await this.loadInputs("CustomSpell8Damage");
      await this.loadInputs("CustomSpell8Healing");
      await this.loadInputs("CustomSpell8Range");
      await this.loadInputs("CustomSpell8Duration");
      await this.loadInputs("CustomSpell9Name");
      await this.loadInputs("CustomSpell9SpellLevel");
      await this.loadInputs("CustomSpell9Description");
      await this.loadInputs("CustomSpell9Damage");
      await this.loadInputs("CustomSpell9Healing");
      await this.loadInputs("CustomSpell9Range");
      await this.loadInputs("CustomSpell9Duration");
      await this.loadInputs("CustomSpell10Name");
      await this.loadInputs("CustomSpell10SpellLevel");
      await this.loadInputs("CustomSpell10Description");
      await this.loadInputs("CustomSpell10Damage");
      await this.loadInputs("CustomSpell10Healing");
      await this.loadInputs("CustomSpell10Range");
      await this.loadInputs("CustomSpell10Duration");
      await this.loadInputs("CustomSpell11Name");
      await this.loadInputs("CustomSpell11SpellLevel");
      await this.loadInputs("CustomSpell11Description");
      await this.loadInputs("CustomSpell11Damage");
      await this.loadInputs("CustomSpell11Healing");
      await this.loadInputs("CustomSpell11Range");
      await this.loadInputs("CustomSpell11Duration");
      await this.loadInputs("CustomSpell12Name");
      await this.loadInputs("CustomSpell12SpellLevel");
      await this.loadInputs("CustomSpell12Description");
      await this.loadInputs("CustomSpell12Damage");
      await this.loadInputs("CustomSpell12Healing");
      await this.loadInputs("CustomSpell12Range");
      await this.loadInputs("CustomSpell12Duration");
      await this.loadInputs("CustomSpell13Name");
      await this.loadInputs("CustomSpell13SpellLevel");
      await this.loadInputs("CustomSpell13Description");
      await this.loadInputs("CustomSpell13Damage");
      await this.loadInputs("CustomSpell13Healing");
      await this.loadInputs("CustomSpell13Range");
      await this.loadInputs("CustomSpell13Duration");
      await this.loadInputs("CustomSpell14Name");
      await this.loadInputs("CustomSpell14SpellLevel");
      await this.loadInputs("CustomSpell14Description");
      await this.loadInputs("CustomSpell14Damage");
      await this.loadInputs("CustomSpell14Healing");
      await this.loadInputs("CustomSpell14Range");
      await this.loadInputs("CustomSpell14Duration");
      await this.loadInputs("CustomSpell15Name");
      await this.loadInputs("CustomSpell15SpellLevel");
      await this.loadInputs("CustomSpell15Description");
      await this.loadInputs("CustomSpell15Damage");
      await this.loadInputs("CustomSpell15Healing");
      await this.loadInputs("CustomSpell15Range");
      await this.loadInputs("CustomSpell15Duration");
      await this.loadInputs("CustomSpell16Name");
      await this.loadInputs("CustomSpell16SpellLevel");
      await this.loadInputs("CustomSpell16Description");
      await this.loadInputs("CustomSpell16Damage");
      await this.loadInputs("CustomSpell16Healing");
      await this.loadInputs("CustomSpell16Range");
      await this.loadInputs("CustomSpell16Duration");
      await this.loadInputs("CustomSpell17Name");
      await this.loadInputs("CustomSpell17SpellLevel");
      await this.loadInputs("CustomSpell17Description");
      await this.loadInputs("CustomSpell17Damage");
      await this.loadInputs("CustomSpell17Healing");
      await this.loadInputs("CustomSpell17Range");
      await this.loadInputs("CustomSpell17Duration");
      await this.loadInputs("CustomSpell18Name");
      await this.loadInputs("CustomSpell18SpellLevel");
      await this.loadInputs("CustomSpell18Description");
      await this.loadInputs("CustomSpell18Damage");
      await this.loadInputs("CustomSpell18Healing");
      await this.loadInputs("CustomSpell18Range");
      await this.loadInputs("CustomSpell18Duration");
      await this.loadInputs("CustomSpell19Name");
      await this.loadInputs("CustomSpell19SpellLevel");
      await this.loadInputs("CustomSpell19Description");
      await this.loadInputs("CustomSpell19Damage");
      await this.loadInputs("CustomSpell19Healing");
      await this.loadInputs("CustomSpell19Range");
      await this.loadInputs("CustomSpell19Duration");
      await this.loadInputs("CustomSpell20Name");
      await this.loadInputs("CustomSpell20SpellLevel");
      await this.loadInputs("CustomSpell20Description");
      await this.loadInputs("CustomSpell20Damage");
      await this.loadInputs("CustomSpell20Healing");
      await this.loadInputs("CustomSpell20Range");
      await this.loadInputs("CustomSpell20Duration");
      await this.loadInputs("CustomSpell21Name");
      await this.loadInputs("CustomSpell21SpellLevel");
      await this.loadInputs("CustomSpell21Description");
      await this.loadInputs("CustomSpell21Damage");
      await this.loadInputs("CustomSpell21Healing");
      await this.loadInputs("CustomSpell21Range");
      await this.loadInputs("CustomSpell21Duration");
      await this.loadInputs("CustomSpell22Name");
      await this.loadInputs("CustomSpell22SpellLevel");
      await this.loadInputs("CustomSpell22Description");
      await this.loadInputs("CustomSpell22Damage");
      await this.loadInputs("CustomSpell22Healing");
      await this.loadInputs("CustomSpell22Range");
      await this.loadInputs("CustomSpell22Duration");
      await this.loadInputs("CustomSpell23Name");
      await this.loadInputs("CustomSpell23SpellLevel");
      await this.loadInputs("CustomSpell23Description");
      await this.loadInputs("CustomSpell23Damage");
      await this.loadInputs("CustomSpell23Healing");
      await this.loadInputs("CustomSpell23Range");
      await this.loadInputs("CustomSpell23Duration");
      await this.loadInputs("CustomSpell24Name");
      await this.loadInputs("CustomSpell24SpellLevel");
      await this.loadInputs("CustomSpell24Description");
      await this.loadInputs("CustomSpell24Damage");
      await this.loadInputs("CustomSpell24Healing");
      await this.loadInputs("CustomSpell24Range");
      await this.loadInputs("CustomSpell24Duration");
      await this.loadInputs("CustomSpell25Name");
      await this.loadInputs("CustomSpell25SpellLevel");
      await this.loadInputs("CustomSpell25Description");
      await this.loadInputs("CustomSpell25Damage");
      await this.loadInputs("CustomSpell25Healing");
      await this.loadInputs("CustomSpell25Range");
      await this.loadInputs("CustomSpell25Duration");
      await this.loadInputs("CustomSpell26Name");
      await this.loadInputs("CustomSpell26SpellLevel");
      await this.loadInputs("CustomSpell26Description");
      await this.loadInputs("CustomSpell26Damage");
      await this.loadInputs("CustomSpell26Healing");
      await this.loadInputs("CustomSpell26Range");
      await this.loadInputs("CustomSpell26Duration");
      await this.loadInputs("CustomSpell27Name");
      await this.loadInputs("CustomSpell27SpellLevel");
      await this.loadInputs("CustomSpell27Description");
      await this.loadInputs("CustomSpell27Damage");
      await this.loadInputs("CustomSpell27Healing");
      await this.loadInputs("CustomSpell27Range");
      await this.loadInputs("CustomSpell27Duration");
      await this.loadInputs("CustomSpell28Name");
      await this.loadInputs("CustomSpell28SpellLevel");
      await this.loadInputs("CustomSpell28Description");
      await this.loadInputs("CustomSpell28Damage");
      await this.loadInputs("CustomSpell28Healing");
      await this.loadInputs("CustomSpell28Range");
      await this.loadInputs("CustomSpell28Duration");
      await this.loadInputs("CustomSpell29Name");
      await this.loadInputs("CustomSpell29SpellLevel");
      await this.loadInputs("CustomSpell29Description");
      await this.loadInputs("CustomSpell29Damage");
      await this.loadInputs("CustomSpell29Healing");
      await this.loadInputs("CustomSpell29Range");
      await this.loadInputs("CustomSpell29Duration");
      await this.loadInputs("CustomSpell30Name");
      await this.loadInputs("CustomSpell30SpellLevel");
      await this.loadInputs("CustomSpell30Description");
      await this.loadInputs("CustomSpell30Damage");
      await this.loadInputs("CustomSpell30Healing");
      await this.loadInputs("CustomSpell30Range");
      await this.loadInputs("CustomSpell30Duration");
      await this.loadInputs("CustomSpell31Name");
      await this.loadInputs("CustomSpell31SpellLevel");
      await this.loadInputs("CustomSpell31Description");
      await this.loadInputs("CustomSpell31Damage");
      await this.loadInputs("CustomSpell31Healing");
      await this.loadInputs("CustomSpell31Range");
      await this.loadInputs("CustomSpell31Duration");
      await this.loadInputs("CustomSpell32Name");
      await this.loadInputs("CustomSpell32SpellLevel");
      await this.loadInputs("CustomSpell32Description");
      await this.loadInputs("CustomSpell32Damage");
      await this.loadInputs("CustomSpell32Healing");
      await this.loadInputs("CustomSpell32Range");
      await this.loadInputs("CustomSpell32Duration");
      await this.loadInputs("CustomSpell33Name");
      await this.loadInputs("CustomSpell33SpellLevel");
      await this.loadInputs("CustomSpell33Description");
      await this.loadInputs("CustomSpell33Damage");
      await this.loadInputs("CustomSpell33Healing");
      await this.loadInputs("CustomSpell33Range");
      await this.loadInputs("CustomSpell33Duration");
      await this.loadInputs("CustomSpell34Name");
      await this.loadInputs("CustomSpell34SpellLevel");
      await this.loadInputs("CustomSpell34Description");
      await this.loadInputs("CustomSpell34Damage");
      await this.loadInputs("CustomSpell34Healing");
      await this.loadInputs("CustomSpell34Range");
      await this.loadInputs("CustomSpell34Duration");
      await this.loadInputs("CustomSpell35Name");
      await this.loadInputs("CustomSpell35SpellLevel");
      await this.loadInputs("CustomSpell35Description");
      await this.loadInputs("CustomSpell35Damage");
      await this.loadInputs("CustomSpell35Healing");
      await this.loadInputs("CustomSpell35Range");
      await this.loadInputs("CustomSpell35Duration");
      await this.loadInputs("CustomSpell36Name");
      await this.loadInputs("CustomSpell36SpellLevel");
      await this.loadInputs("CustomSpell36Description");
      await this.loadInputs("CustomSpell36Damage");
      await this.loadInputs("CustomSpell36Healing");
      await this.loadInputs("CustomSpell36Range");
      await this.loadInputs("CustomSpell36Duration");
      await this.loadInputs("CustomSpell37Name");
      await this.loadInputs("CustomSpell37SpellLevel");
      await this.loadInputs("CustomSpell37Description");
      await this.loadInputs("CustomSpell37Damage");
      await this.loadInputs("CustomSpell37Healing");
      await this.loadInputs("CustomSpell37Range");
      await this.loadInputs("CustomSpell37Duration");
      await this.loadInputs("CustomSpell38Name");
      await this.loadInputs("CustomSpell38SpellLevel");
      await this.loadInputs("CustomSpell38Description");
      await this.loadInputs("CustomSpell38Damage");
      await this.loadInputs("CustomSpell38Healing");
      await this.loadInputs("CustomSpell38Range");
      await this.loadInputs("CustomSpell38Duration");
      await this.loadInputs("CustomSpell39Name");
      await this.loadInputs("CustomSpell39SpellLevel");
      await this.loadInputs("CustomSpell39Description");
      await this.loadInputs("CustomSpell39Damage");
      await this.loadInputs("CustomSpell39Healing");
      await this.loadInputs("CustomSpell39Range");
      await this.loadInputs("CustomSpell39Duration");
      await this.loadInputs("CustomSpell40Name");
      await this.loadInputs("CustomSpell40SpellLevel");
      await this.loadInputs("CustomSpell40Description");
      await this.loadInputs("CustomSpell40Damage");
      await this.loadInputs("CustomSpell40Healing");
      await this.loadInputs("CustomSpell40Range");
      await this.loadInputs("CustomSpell40Duration");
      await this.loadInputs("CustomSpell41Name");
      await this.loadInputs("CustomSpell41SpellLevel");
      await this.loadInputs("CustomSpell41Description");
      await this.loadInputs("CustomSpell41Damage");
      await this.loadInputs("CustomSpell41Healing");
      await this.loadInputs("CustomSpell41Range");
      await this.loadInputs("CustomSpell41Duration");
      await this.loadInputs("CustomSpell42Name");
      await this.loadInputs("CustomSpell42SpellLevel");
      await this.loadInputs("CustomSpell42Description");
      await this.loadInputs("CustomSpell42Damage");
      await this.loadInputs("CustomSpell42Healing");
      await this.loadInputs("CustomSpell42Range");
      await this.loadInputs("CustomSpell42Duration");
      await this.loadInputs("CustomSpell43Name");
      await this.loadInputs("CustomSpell43SpellLevel");
      await this.loadInputs("CustomSpell43Description");
      await this.loadInputs("CustomSpell43Damage");
      await this.loadInputs("CustomSpell43Healing");
      await this.loadInputs("CustomSpell43Range");
      await this.loadInputs("CustomSpell43Duration");
      await this.loadInputs("CustomSpell44Name");
      await this.loadInputs("CustomSpell44SpellLevel");
      await this.loadInputs("CustomSpell44Description");
      await this.loadInputs("CustomSpell44Damage");
      await this.loadInputs("CustomSpell44Healing");
      await this.loadInputs("CustomSpell44Range");
      await this.loadInputs("CustomSpell44Duration");
      await this.loadInputs("CustomSpell45Name");
      await this.loadInputs("CustomSpell45SpellLevel");
      await this.loadInputs("CustomSpell45Description");
      await this.loadInputs("CustomSpell45Damage");
      await this.loadInputs("CustomSpell45Healing");
      await this.loadInputs("CustomSpell45Range");
      await this.loadInputs("CustomSpell45Duration");
      await this.loadInputs("CustomSpell46Name");
      await this.loadInputs("CustomSpell46SpellLevel");
      await this.loadInputs("CustomSpell46Description");
      await this.loadInputs("CustomSpell46Damage");
      await this.loadInputs("CustomSpell46Healing");
      await this.loadInputs("CustomSpell46Range");
      await this.loadInputs("CustomSpell46Duration");
      await this.loadInputs("CustomSpell47Name");
      await this.loadInputs("CustomSpell47SpellLevel");
      await this.loadInputs("CustomSpell47Description");
      await this.loadInputs("CustomSpell47Damage");
      await this.loadInputs("CustomSpell47Healing");
      await this.loadInputs("CustomSpell47Range");
      await this.loadInputs("CustomSpell47Duration");
      await this.loadInputs("CustomSpell48Name");
      await this.loadInputs("CustomSpell48SpellLevel");
      await this.loadInputs("CustomSpell48Description");
      await this.loadInputs("CustomSpell48Damage");
      await this.loadInputs("CustomSpell48Healing");
      await this.loadInputs("CustomSpell48Range");
      await this.loadInputs("CustomSpell48Duration");
      await this.loadInputs("CustomSpell49Name");
      await this.loadInputs("CustomSpell49SpellLevel");
      await this.loadInputs("CustomSpell49Description");
      await this.loadInputs("CustomSpell49Damage");
      await this.loadInputs("CustomSpell49Healing");
      await this.loadInputs("CustomSpell49Range");
      await this.loadInputs("CustomSpell49Duration");
      await this.loadInputs("CustomSpell50Name");
      await this.loadInputs("CustomSpell50SpellLevel");
      await this.loadInputs("CustomSpell50Description");
      await this.loadInputs("CustomSpell50Damage");
      await this.loadInputs("CustomSpell50Healing");
      await this.loadInputs("CustomSpell50Range");
      await this.loadInputs("CustomSpell50Duration");

      this.$store.state.isLoading = false;
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/spellLibrary/") {
      this.$router.push({ path: "/spellLibrary/" })
    }
  },
};
</script>

<style scoped>
p:not(.checkbox-label) {
  margin-top: -7px !important;
}

#to-spells-cover {
  width: 100px;
  height: 57px;
  margin-left: -25px;
  position: absolute;
  z-index: 10;
  cursor: pointer;
}
</style>
