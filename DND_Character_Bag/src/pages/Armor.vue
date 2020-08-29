<template>
  <f7-page name="armor">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Armor
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB />

    <!-- Scrollable page content-->
    <f7-block inner>
      <p class="larger-text circle-label" id="armor-class-label">(AC) Armor Class</p>
      <div class="circle-div" id="armor-class"><p>{{ armorClass }}</p></div>

      <h3 v-show="currentlyEquipped !== ''">Currently Equipped:<br>{{ currentlyEquipped }}</h3>

      <f7-list accordion-list>
        <f7-list-item accordion-item title="Leather Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Required Dexterity Level: 10</h3>
              <h3>AC Bonus: +1</h3>

              <p>Need 3 Leather Armor Pieces to be able to equip for the AC bonus.</p>
              <f7-checkbox id="LeatherArmorEquipped" :disabled="!canEquipLeatherArmor" @change="saveCheckbox('LeatherArmorEquipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Number of Leather Armor Pieces</label>
                <input class="dark-input" id="NumberOfLeatherArmorPieces" type="number" @keyup="saveInput('NumberOfLeatherArmorPieces', 'leather')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 1 — Embuing 1</label>
                  <input class="dark-input" id="LeatherArmorEmbuing1" type="text" @keyup="saveInput('LeatherArmorEmbuing1', 'leather')">
                  <label>Armor Piece 1 — Embuing 2</label>
                  <input class="dark-input" id="LeatherArmorEmbuing2" type="text" @keyup="saveInput('LeatherArmorEmbuing2', 'leather')">
                  <label>Armor Piece 1 — Enchantment 1</label>
                  <input class="dark-input" id="LeatherArmorEnchantment1" type="text" @keyup="saveInput('LeatherArmorEnchantment1', 'leather')">
                  <label>Armor Piece 1 — Enchantment 2</label>
                  <input class="dark-input" id="LeatherArmorEnchantment2" type="text" @keyup="saveInput('LeatherArmorEnchantment2', 'leather')">
                  <label>Armor Piece 1 — Attachment 1</label>
                  <input class="dark-input" id="LeatherArmorAttachment1" type="text" @keyup="saveInput('LeatherArmorAttachment1', 'leather')">
                  <label>Armor Piece 1 — Attachment 2</label>
                  <input class="dark-input" id="LeatherArmorAttachment2" type="text" @keyup="saveInput('LeatherArmorAttachment2', 'leather')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 2 — Embuing 1</label>
                  <input class="dark-input" id="LeatherArmorEmbuing3" type="text" @keyup="saveInput('LeatherArmorEmbuing3', 'leather')">
                  <label>Armor Piece 2 — Embuing 2</label>
                  <input class="dark-input" id="LeatherArmorEmbuing4" type="text" @keyup="saveInput('LeatherArmorEmbuing4', 'leather')">
                  <label>Armor Piece 2 — Enchantment 1</label>
                  <input class="dark-input" id="LeatherArmorEnchantment3" type="text" @keyup="saveInput('LeatherArmorEnchantment3', 'leather')">
                  <label>Armor Piece 2 — Enchantment 2</label>
                  <input class="dark-input" id="LeatherArmorEnchantment4" type="text" @keyup="saveInput('LeatherArmorEnchantment4', 'leather')">
                  <label>Armor Piece 2 — Attachment 1</label>
                  <input class="dark-input" id="LeatherArmorAttachment3" type="text" @keyup="saveInput('LeatherArmorAttachment3', 'leather')">
                  <label>Armor Piece 2 — Attachment 2</label>
                  <input class="dark-input" id="LeatherArmorAttachment4" type="text" @keyup="saveInput('LeatherArmorAttachment4', 'leather')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 3 — Embuing 1</label>
                  <input class="dark-input" id="LeatherArmorEmbuing5" type="text" @keyup="saveInput('LeatherArmorEmbuing5', 'leather')">
                  <label>Armor Piece 3 — Embuing 2</label>
                  <input class="dark-input" id="LeatherArmorEmbuing6" type="text" @keyup="saveInput('LeatherArmorEmbuing6', 'leather')">
                  <label>Armor Piece 3 — Enchantment 1</label>
                  <input class="dark-input" id="LeatherArmorEnchantment5" type="text" @keyup="saveInput('LeatherArmorEnchantment5', 'leather')">
                  <label>Armor Piece 3 — Enchantment 2</label>
                  <input class="dark-input" id="LeatherArmorEnchantment6" type="text" @keyup="saveInput('LeatherArmorEnchantment6', 'leather')">
                  <label>Armor Piece 3 — Attachment 1</label>
                  <input class="dark-input" id="LeatherArmorAttachment5" type="text" @keyup="saveInput('LeatherArmorAttachment5', 'leather')">
                  <label>Armor Piece 3 — Attachment 2</label>
                  <input class="dark-input" id="LeatherArmorAttachment6" type="text" @keyup="saveInput('LeatherArmorAttachment6', 'leather')">
                </div>
              </div>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Iron Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Required Dexterity Level: 14</h3>
              <h3>AC Bonus: +2</h3>

              <p>Need 3 Iron Armor Pieces to be able to equip for the AC bonus.</p>
              <f7-checkbox id="IronArmorEquipped" :disabled="!canEquipIronArmor" @change="saveCheckbox('IronArmorEquipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Number of Iron Armor Pieces</label>
                <input class="dark-input" id="NumberOfIronArmorPieces" type="number" @keyup="saveInput('NumberOfIronArmorPieces', 'iron')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 1 — Embuing 1</label>
                  <input class="dark-input" id="IronArmorEmbuing1" type="text" @keyup="saveInput('IronArmorEmbuing1', 'iron')">
                  <label>Armor Piece 1 — Embuing 2</label>
                  <input class="dark-input" id="IronArmorEmbuing2" type="text" @keyup="saveInput('IronArmorEmbuing2', 'iron')">
                  <label>Armor Piece 1 — Enchantment 1</label>
                  <input class="dark-input" id="IronArmorEnchantment1" type="text" @keyup="saveInput('IronArmorEnchantment1', 'iron')">
                  <label>Armor Piece 1 — Enchantment 2</label>
                  <input class="dark-input" id="IronArmorEnchantment2" type="text" @keyup="saveInput('IronArmorEnchantment2', 'iron')">
                  <label>Armor Piece 1 — Attachment 1</label>
                  <input class="dark-input" id="IronArmorAttachment1" type="text" @keyup="saveInput('IronArmorAttachment1', 'iron')">
                  <label>Armor Piece 1 — Attachment 2</label>
                  <input class="dark-input" id="IronArmorAttachment2" type="text" @keyup="saveInput('IronArmorAttachment2', 'iron')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 2 — Embuing 1</label>
                  <input class="dark-input" id="IronArmorEmbuing3" type="text" @keyup="saveInput('IronArmorEmbuing3', 'iron')">
                  <label>Armor Piece 2 — Embuing 2</label>
                  <input class="dark-input" id="IronArmorEmbuing4" type="text" @keyup="saveInput('IronArmorEmbuing4', 'iron')">
                  <label>Armor Piece 2 — Enchantment 1</label>
                  <input class="dark-input" id="IronArmorEnchantment3" type="text" @keyup="saveInput('IronArmorEnchantment3', 'iron')">
                  <label>Armor Piece 2 — Enchantment 2</label>
                  <input class="dark-input" id="IronArmorEnchantment4" type="text" @keyup="saveInput('IronArmorEnchantment4', 'iron')">
                  <label>Armor Piece 2 — Attachment 1</label>
                  <input class="dark-input" id="IronArmorAttachment3" type="text" @keyup="saveInput('IronArmorAttachment3', 'iron')">
                  <label>Armor Piece 2 — Attachment 2</label>
                  <input class="dark-input" id="IronArmorAttachment4" type="text" @keyup="saveInput('IronArmorAttachment4', 'iron')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 3 — Embuing 1</label>
                  <input class="dark-input" id="IronArmorEmbuing5" type="text" @keyup="saveInput('IronArmorEmbuing5', 'iron')">
                  <label>Armor Piece 3 — Embuing 2</label>
                  <input class="dark-input" id="IronArmorEmbuing6" type="text" @keyup="saveInput('IronArmorEmbuing6', 'iron')">
                  <label>Armor Piece 3 — Enchantment 1</label>
                  <input class="dark-input" id="IronArmorEnchantment5" type="text" @keyup="saveInput('IronArmorEnchantment5', 'iron')">
                  <label>Armor Piece 3 — Enchantment 2</label>
                  <input class="dark-input" id="IronArmorEnchantment6" type="text" @keyup="saveInput('IronArmorEnchantment6', 'iron')">
                  <label>Armor Piece 3 — Attachment 1</label>
                  <input class="dark-input" id="IronArmorAttachment5" type="text" @keyup="saveInput('IronArmorAttachment5', 'iron')">
                  <label>Armor Piece 3 — Attachment 2</label>
                  <input class="dark-input" id="IronArmorAttachment6" type="text" @keyup="saveInput('IronArmorAttachment6', 'iron')">
                </div>
              </div>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Steel Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Required Dexterity Level: 18</h3>
              <h3>AC Bonus: +3</h3>

              <p>Need 3 Steel Armor Pieces to be able to equip for the AC bonus.</p>
              <f7-checkbox id="SteelArmorEquipped" :disabled="!canEquipSteelArmor" @change="saveCheckbox('SteelArmorEquipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Number of Steel Armor Pieces</label>
                <input class="dark-input" id="NumberOfSteelArmorPieces" type="number" @keyup="saveInput('NumberOfSteelArmorPieces', 'steel')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 1 — Embuing 1</label>
                  <input class="dark-input" id="SteelArmorEmbuing1" type="text" @keyup="saveInput('SteelArmorEmbuing1', 'steel')">
                  <label>Armor Piece 1 — Embuing 2</label>
                  <input class="dark-input" id="SteelArmorEmbuing2" type="text" @keyup="saveInput('SteelArmorEmbuing2', 'steel')">
                  <label>Armor Piece 1 — Enchantment 1</label>
                  <input class="dark-input" id="SteelArmorEnchantment1" type="text" @keyup="saveInput('SteelArmorEnchantment1', 'steel')">
                  <label>Armor Piece 1 — Enchantment 2</label>
                  <input class="dark-input" id="SteelArmorEnchantment2" type="text" @keyup="saveInput('SteelArmorEnchantment2', 'steel')">
                  <label>Armor Piece 1 — Attachment 1</label>
                  <input class="dark-input" id="SteelArmorAttachment1" type="text" @keyup="saveInput('SteelArmorAttachment1', 'steel')">
                  <label>Armor Piece 1 — Attachment 2</label>
                  <input class="dark-input" id="SteelArmorAttachment2" type="text" @keyup="saveInput('SteelArmorAttachment2', 'steel')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 2 — Embuing 1</label>
                  <input class="dark-input" id="SteelArmorEmbuing3" type="text" @keyup="saveInput('SteelArmorEmbuing3', 'steel')">
                  <label>Armor Piece 2 — Embuing 2</label>
                  <input class="dark-input" id="SteelArmorEmbuing4" type="text" @keyup="saveInput('SteelArmorEmbuing4', 'steel')">
                  <label>Armor Piece 2 — Enchantment 1</label>
                  <input class="dark-input" id="SteelArmorEnchantment3" type="text" @keyup="saveInput('SteelArmorEnchantment3', 'steel')">
                  <label>Armor Piece 2 — Enchantment 2</label>
                  <input class="dark-input" id="SteelArmorEnchantment4" type="text" @keyup="saveInput('SteelArmorEnchantment4', 'steel')">
                  <label>Armor Piece 2 — Attachment 1</label>
                  <input class="dark-input" id="SteelArmorAttachment3" type="text" @keyup="saveInput('SteelArmorAttachment3', 'steel')">
                  <label>Armor Piece 2 — Attachment 2</label>
                  <input class="dark-input" id="SteelArmorAttachment4" type="text" @keyup="saveInput('SteelArmorAttachment4', 'steel')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 3 — Embuing 1</label>
                  <input class="dark-input" id="SteelArmorEmbuing5" type="text" @keyup="saveInput('SteelArmorEmbuing5', 'steel')">
                  <label>Armor Piece 3 — Embuing 2</label>
                  <input class="dark-input" id="SteelArmorEmbuing6" type="text" @keyup="saveInput('SteelArmorEmbuing6', 'steel')">
                  <label>Armor Piece 3 — Enchantment 1</label>
                  <input class="dark-input" id="SteelArmorEnchantment5" type="text" @keyup="saveInput('SteelArmorEnchantment5', 'steel')">
                  <label>Armor Piece 3 — Enchantment 2</label>
                  <input class="dark-input" id="SteelArmorEnchantment6" type="text" @keyup="saveInput('SteelArmorEnchantment6', 'steel')">
                  <label>Armor Piece 3 — Attachment 1</label>
                  <input class="dark-input" id="SteelArmorAttachment5" type="text" @keyup="saveInput('SteelArmorAttachment5', 'steel')">
                  <label>Armor Piece 3 — Attachment 2</label>
                  <input class="dark-input" id="SteelArmorAttachment6" type="text" @keyup="saveInput('SteelArmorAttachment6', 'steel')">
                </div>
              </div>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Mithril Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Required Dexterity Level: 22</h3>
              <h3>AC Bonus: +4</h3>

              <p>Need 3 Mithril Armor Pieces to be able to equip for the AC bonus.</p>
              <f7-checkbox id="MithrilArmorEquipped" :disabled="!canEquipMithrilArmor" @change="saveCheckbox('MithrilArmorEquipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Number of Mithril Armor Pieces</label>
                <input class="dark-input" id="NumberOfMithrilArmorPieces" type="number" @keyup="saveInput('NumberOfMithrilArmorPieces', 'mithril')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 1 — Embuing 1</label>
                  <input class="dark-input" id="MithrilArmorEmbuing1" type="text" @keyup="saveInput('MithrilArmorEmbuing1', 'mithril')">
                  <label>Armor Piece 1 — Embuing 2</label>
                  <input class="dark-input" id="MithrilArmorEmbuing2" type="text" @keyup="saveInput('MithrilArmorEmbuing2', 'mithril')">
                  <label>Armor Piece 1 — Enchantment 1</label>
                  <input class="dark-input" id="MithrilArmorEnchantment1" type="text" @keyup="saveInput('MithrilArmorEnchantment1', 'mithril')">
                  <label>Armor Piece 1 — Enchantment 2</label>
                  <input class="dark-input" id="MithrilArmorEnchantment2" type="text" @keyup="saveInput('MithrilArmorEnchantment2', 'mithril')">
                  <label>Armor Piece 1 — Attachment 1</label>
                  <input class="dark-input" id="MithrilArmorAttachment1" type="text" @keyup="saveInput('MithrilArmorAttachment1', 'mithril')">
                  <label>Armor Piece 1 — Attachment 2</label>
                  <input class="dark-input" id="MithrilArmorAttachment2" type="text" @keyup="saveInput('MithrilArmorAttachment2', 'mithril')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 2 — Embuing 1</label>
                  <input class="dark-input" id="MithrilArmorEmbuing3" type="text" @keyup="saveInput('MithrilArmorEmbuing3', 'mithril')">
                  <label>Armor Piece 2 — Embuing 2</label>
                  <input class="dark-input" id="MithrilArmorEmbuing4" type="text" @keyup="saveInput('MithrilArmorEmbuing4', 'mithril')">
                  <label>Armor Piece 2 — Enchantment 1</label>
                  <input class="dark-input" id="MithrilArmorEnchantment3" type="text" @keyup="saveInput('MithrilArmorEnchantment3', 'mithril')">
                  <label>Armor Piece 2 — Enchantment 2</label>
                  <input class="dark-input" id="MithrilArmorEnchantment4" type="text" @keyup="saveInput('MithrilArmorEnchantment4', 'mithril')">
                  <label>Armor Piece 2 — Attachment 1</label>
                  <input class="dark-input" id="MithrilArmorAttachment3" type="text" @keyup="saveInput('MithrilArmorAttachment3', 'mithril')">
                  <label>Armor Piece 2 — Attachment 2</label>
                  <input class="dark-input" id="MithrilArmorAttachment4" type="text" @keyup="saveInput('MithrilArmorAttachment4', 'mithril')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 3 — Embuing 1</label>
                  <input class="dark-input" id="MithrilArmorEmbuing5" type="text" @keyup="saveInput('MithrilArmorEmbuing5', 'mithril')">
                  <label>Armor Piece 3 — Embuing 2</label>
                  <input class="dark-input" id="MithrilArmorEmbuing6" type="text" @keyup="saveInput('MithrilArmorEmbuing6', 'mithril')">
                  <label>Armor Piece 3 — Enchantment 1</label>
                  <input class="dark-input" id="MithrilArmorEnchantment5" type="text" @keyup="saveInput('MithrilArmorEnchantment5', 'mithril')">
                  <label>Armor Piece 3 — Enchantment 2</label>
                  <input class="dark-input" id="MithrilArmorEnchantment6" type="text" @keyup="saveInput('MithrilArmorEnchantment6', 'mithril')">
                  <label>Armor Piece 3 — Attachment 1</label>
                  <input class="dark-input" id="MithrilArmorAttachment5" type="text" @keyup="saveInput('MithrilArmorAttachment5', 'mithril')">
                  <label>Armor Piece 3 — Attachment 2</label>
                  <input class="dark-input" id="MithrilArmorAttachment6" type="text" @keyup="saveInput('MithrilArmorAttachment6', 'mithril')">
                </div>
              </div>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Adamantium Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Required Dexterity Level: 26</h3>
              <h3>AC Bonus: +6</h3>

              <p>Need 3 Adamantium Armor Pieces to be able to equip for the AC bonus.</p>
              <f7-checkbox id="AdamantiumArmorEquipped" :disabled="!canEquipAdamantiumArmor" @change="saveCheckbox('AdamantiumArmorEquipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Number of Adamantium Armor Pieces</label>
                <input class="dark-input" id="NumberOfAdamantiumArmorPieces" type="number" @keyup="saveInput('NumberOfAdamantiumArmorPieces', 'adamantium')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 1 — Embuing 1</label>
                  <input class="dark-input" id="AdamantiumArmorEmbuing1" type="text" @keyup="saveInput('AdamantiumArmorEmbuing1', 'adamantium')">
                  <label>Armor Piece 1 — Embuing 2</label>
                  <input class="dark-input" id="AdamantiumArmorEmbuing2" type="text" @keyup="saveInput('AdamantiumArmorEmbuing2', 'adamantium')">
                  <label>Armor Piece 1 — Enchantment 1</label>
                  <input class="dark-input" id="AdamantiumArmorEnchantment1" type="text" @keyup="saveInput('AdamantiumArmorEnchantment1', 'adamantium')">
                  <label>Armor Piece 1 — Enchantment 2</label>
                  <input class="dark-input" id="AdamantiumArmorEnchantment2" type="text" @keyup="saveInput('AdamantiumArmorEnchantment2', 'adamantium')">
                  <label>Armor Piece 1 — Attachment 1</label>
                  <input class="dark-input" id="AdamantiumArmorAttachment1" type="text" @keyup="saveInput('AdamantiumArmorAttachment1', 'adamantium')">
                  <label>Armor Piece 1 — Attachment 2</label>
                  <input class="dark-input" id="AdamantiumArmorAttachment2" type="text" @keyup="saveInput('AdamantiumArmorAttachment2', 'adamantium')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 2 — Embuing 1</label>
                  <input class="dark-input" id="AdamantiumArmorEmbuing3" type="text" @keyup="saveInput('AdamantiumArmorEmbuing3', 'adamantium')">
                  <label>Armor Piece 2 — Embuing 2</label>
                  <input class="dark-input" id="AdamantiumArmorEmbuing4" type="text" @keyup="saveInput('AdamantiumArmorEmbuing4', 'adamantium')">
                  <label>Armor Piece 2 — Enchantment 1</label>
                  <input class="dark-input" id="AdamantiumArmorEnchantment3" type="text" @keyup="saveInput('AdamantiumArmorEnchantment3', 'adamantium')">
                  <label>Armor Piece 2 — Enchantment 2</label>
                  <input class="dark-input" id="AdamantiumArmorEnchantment4" type="text" @keyup="saveInput('AdamantiumArmorEnchantment4', 'adamantium')">
                  <label>Armor Piece 2 — Attachment 1</label>
                  <input class="dark-input" id="AdamantiumArmorAttachment3" type="text" @keyup="saveInput('AdamantiumArmorAttachment3', 'adamantium')">
                  <label>Armor Piece 2 — Attachment 2</label>
                  <input class="dark-input" id="AdamantiumArmorAttachment4" type="text" @keyup="saveInput('AdamantiumArmorAttachment4', 'adamantium')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 3 — Embuing 1</label>
                  <input class="dark-input" id="AdamantiumArmorEmbuing5" type="text" @keyup="saveInput('AdamantiumArmorEmbuing5', 'adamantium')">
                  <label>Armor Piece 3 — Embuing 2</label>
                  <input class="dark-input" id="AdamantiumArmorEmbuing6" type="text" @keyup="saveInput('AdamantiumArmorEmbuing6', 'adamantium')">
                  <label>Armor Piece 3 — Enchantment 1</label>
                  <input class="dark-input" id="AdamantiumArmorEnchantment5" type="text" @keyup="saveInput('AdamantiumArmorEnchantment5', 'adamantium')">
                  <label>Armor Piece 3 — Enchantment 2</label>
                  <input class="dark-input" id="AdamantiumArmorEnchantment6" type="text" @keyup="saveInput('AdamantiumArmorEnchantment6', 'adamantium')">
                  <label>Armor Piece 3 — Attachment 1</label>
                  <input class="dark-input" id="AdamantiumArmorAttachment5" type="text" @keyup="saveInput('AdamantiumArmorAttachment5', 'adamantium')">
                  <label>Armor Piece 3 — Attachment 2</label>
                  <input class="dark-input" id="AdamantiumArmorAttachment6" type="text" @keyup="saveInput('AdamantiumArmorAttachment6', 'adamantium')">
                </div>
              </div>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Runite Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Required Dexterity Level: 30</h3>
              <h3>AC Bonus: +8</h3>

              <p>Need 3 Runite Armor Pieces to be able to equip for the AC bonus.</p>
              <f7-checkbox id="RuniteArmorEquipped" :disabled="!canEquipRuniteArmor" @change="saveCheckbox('RuniteArmorEquipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Number of Runite Armor Pieces</label>
                <input class="dark-input" id="NumberOfRuniteArmorPieces" type="number" @keyup="saveInput('NumberOfRuniteArmorPieces', 'runite')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 1 — Embuing 1</label>
                  <input class="dark-input" id="RuniteArmorEmbuing1" type="text" @keyup="saveInput('RuniteArmorEmbuing1', 'runite')">
                  <label>Armor Piece 1 — Embuing 2</label>
                  <input class="dark-input" id="RuniteArmorEmbuing2" type="text" @keyup="saveInput('RuniteArmorEmbuing2', 'runite')">
                  <label>Armor Piece 1 — Enchantment 1</label>
                  <input class="dark-input" id="RuniteArmorEnchantment1" type="text" @keyup="saveInput('RuniteArmorEnchantment1', 'runite')">
                  <label>Armor Piece 1 — Enchantment 2</label>
                  <input class="dark-input" id="RuniteArmorEnchantment2" type="text" @keyup="saveInput('RuniteArmorEnchantment2', 'runite')">
                  <label>Armor Piece 1 — Attachment 1</label>
                  <input class="dark-input" id="RuniteArmorAttachment1" type="text" @keyup="saveInput('RuniteArmorAttachment1', 'runite')">
                  <label>Armor Piece 1 — Attachment 2</label>
                  <input class="dark-input" id="RuniteArmorAttachment2" type="text" @keyup="saveInput('RuniteArmorAttachment2', 'runite')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 2 — Embuing 1</label>
                  <input class="dark-input" id="RuniteArmorEmbuing3" type="text" @keyup="saveInput('RuniteArmorEmbuing3', 'runite')">
                  <label>Armor Piece 2 — Embuing 2</label>
                  <input class="dark-input" id="RuniteArmorEmbuing4" type="text" @keyup="saveInput('RuniteArmorEmbuing4', 'runite')">
                  <label>Armor Piece 2 — Enchantment 1</label>
                  <input class="dark-input" id="RuniteArmorEnchantment3" type="text" @keyup="saveInput('RuniteArmorEnchantment3', 'runite')">
                  <label>Armor Piece 2 — Enchantment 2</label>
                  <input class="dark-input" id="RuniteArmorEnchantment4" type="text" @keyup="saveInput('RuniteArmorEnchantment4', 'runite')">
                  <label>Armor Piece 2 — Attachment 1</label>
                  <input class="dark-input" id="RuniteArmorAttachment3" type="text" @keyup="saveInput('RuniteArmorAttachment3', 'runite')">
                  <label>Armor Piece 2 — Attachment 2</label>
                  <input class="dark-input" id="RuniteArmorAttachment4" type="text" @keyup="saveInput('RuniteArmorAttachment4', 'runite')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 3 — Embuing 1</label>
                  <input class="dark-input" id="RuniteArmorEmbuing5" type="text" @keyup="saveInput('RuniteArmorEmbuing5', 'runite')">
                  <label>Armor Piece 3 — Embuing 2</label>
                  <input class="dark-input" id="RuniteArmorEmbuing6" type="text" @keyup="saveInput('RuniteArmorEmbuing6', 'runite')">
                  <label>Armor Piece 3 — Enchantment 1</label>
                  <input class="dark-input" id="RuniteArmorEnchantment5" type="text" @keyup="saveInput('RuniteArmorEnchantment5', 'runite')">
                  <label>Armor Piece 3 — Enchantment 2</label>
                  <input class="dark-input" id="RuniteArmorEnchantment6" type="text" @keyup="saveInput('RuniteArmorEnchantment6', 'runite')">
                  <label>Armor Piece 3 — Attachment 1</label>
                  <input class="dark-input" id="RuniteArmorAttachment5" type="text" @keyup="saveInput('RuniteArmorAttachment5', 'runite')">
                  <label>Armor Piece 3 — Attachment 2</label>
                  <input class="dark-input" id="RuniteArmorAttachment6" type="text" @keyup="saveInput('RuniteArmorAttachment6', 'runite')">
                </div>
              </div>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Dragon Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Required Dexterity Level: 34</h3>
              <h3>AC Bonus: +10</h3>

              <p>Need 3 Dragon Armor Pieces to be able to equip for the AC bonus.</p>
              <f7-checkbox id="DragonArmorEquipped" :disabled="!canEquipDragonArmor" @change="saveCheckbox('DragonArmorEquipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Number of Dragon Armor Pieces</label>
                <input class="dark-input" id="NumberOfDragonArmorPieces" type="number" @keyup="saveInput('NumberOfDragonArmorPieces', 'dragon')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 1 — Embuing 1</label>
                  <input class="dark-input" id="DragonArmorEmbuing1" type="text" @keyup="saveInput('DragonArmorEmbuing1', 'dragon')">
                  <label>Armor Piece 1 — Embuing 2</label>
                  <input class="dark-input" id="DragonArmorEmbuing2" type="text" @keyup="saveInput('DragonArmorEmbuing2', 'dragon')">
                  <label>Armor Piece 1 — Enchantment 1</label>
                  <input class="dark-input" id="DragonArmorEnchantment1" type="text" @keyup="saveInput('DragonArmorEnchantment1', 'dragon')">
                  <label>Armor Piece 1 — Enchantment 2</label>
                  <input class="dark-input" id="DragonArmorEnchantment2" type="text" @keyup="saveInput('DragonArmorEnchantment2', 'dragon')">
                  <label>Armor Piece 1 — Attachment 1</label>
                  <input class="dark-input" id="DragonArmorAttachment1" type="text" @keyup="saveInput('DragonArmorAttachment1', 'dragon')">
                  <label>Armor Piece 1 — Attachment 2</label>
                  <input class="dark-input" id="DragonArmorAttachment2" type="text" @keyup="saveInput('DragonArmorAttachment2', 'dragon')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 2 — Embuing 1</label>
                  <input class="dark-input" id="DragonArmorEmbuing3" type="text" @keyup="saveInput('DragonArmorEmbuing3', 'dragon')">
                  <label>Armor Piece 2 — Embuing 2</label>
                  <input class="dark-input" id="DragonArmorEmbuing4" type="text" @keyup="saveInput('DragonArmorEmbuing4', 'dragon')">
                  <label>Armor Piece 2 — Enchantment 1</label>
                  <input class="dark-input" id="DragonArmorEnchantment3" type="text" @keyup="saveInput('DragonArmorEnchantment3', 'dragon')">
                  <label>Armor Piece 2 — Enchantment 2</label>
                  <input class="dark-input" id="DragonArmorEnchantment4" type="text" @keyup="saveInput('DragonArmorEnchantment4', 'dragon')">
                  <label>Armor Piece 2 — Attachment 1</label>
                  <input class="dark-input" id="DragonArmorAttachment3" type="text" @keyup="saveInput('DragonArmorAttachment3', 'dragon')">
                  <label>Armor Piece 2 — Attachment 2</label>
                  <input class="dark-input" id="DragonArmorAttachment4" type="text" @keyup="saveInput('DragonArmorAttachment4', 'dragon')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Armor Piece 3 — Embuing 1</label>
                  <input class="dark-input" id="DragonArmorEmbuing5" type="text" @keyup="saveInput('DragonArmorEmbuing5', 'dragon')">
                  <label>Armor Piece 3 — Embuing 2</label>
                  <input class="dark-input" id="DragonArmorEmbuing6" type="text" @keyup="saveInput('DragonArmorEmbuing6', 'dragon')">
                  <label>Armor Piece 3 — Enchantment 1</label>
                  <input class="dark-input" id="DragonArmorEnchantment5" type="text" @keyup="saveInput('DragonArmorEnchantment5', 'dragon')">
                  <label>Armor Piece 3 — Enchantment 2</label>
                  <input class="dark-input" id="DragonArmorEnchantment6" type="text" @keyup="saveInput('DragonArmorEnchantment6', 'dragon')">
                  <label>Armor Piece 3 — Attachment 1</label>
                  <input class="dark-input" id="DragonArmorAttachment5" type="text" @keyup="saveInput('DragonArmorAttachment5', 'dragon')">
                  <label>Armor Piece 3 — Attachment 2</label>
                  <input class="dark-input" id="DragonArmorAttachment6" type="text" @keyup="saveInput('DragonArmorAttachment6', 'dragon')">
                </div>
              </div>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Custom Armor">
          <f7-accordion-content>
            <f7-block>
              <h3>Custom Armor 1</h3>
              <f7-checkbox id="SpecialtyArmor1Equipped" @change="saveCheckbox('SpecialtyArmor1Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor1AC" type="number" @keyup="saveInput('SpecialtyArmor1AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor1Description" type="text" @keyup="saveInput('SpecialtyArmor1Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor1Embuing1" type="text" @keyup="saveInput('SpecialtyArmor1Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor1Embuing2" type="text" @keyup="saveInput('SpecialtyArmor1Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor1Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor1Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor1Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor1Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor1Attachment1" type="text" @keyup="saveInput('SpecialtyArmor1Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor1Attachment2" type="text" @keyup="saveInput('SpecialtyArmor1Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 2</h3>
              <f7-checkbox id="SpecialtyArmor2Equipped" @change="saveCheckbox('SpecialtyArmor2Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor2AC" type="number" @keyup="saveInput('SpecialtyArmor2AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor2Description" type="text" @keyup="saveInput('SpecialtyArmor2Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor2Embuing1" type="text" @keyup="saveInput('SpecialtyArmor2Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor2Embuing2" type="text" @keyup="saveInput('SpecialtyArmor2Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor2Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor2Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor2Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor2Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor2Attachment1" type="text" @keyup="saveInput('SpecialtyArmor2Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor2Attachment2" type="text" @keyup="saveInput('SpecialtyArmor2Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 3</h3>
              <f7-checkbox id="SpecialtyArmor3Equipped" @change="saveCheckbox('SpecialtyArmor3Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor3AC" type="number" @keyup="saveInput('SpecialtyArmor3AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor3Description" type="text" @keyup="saveInput('SpecialtyArmor3Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor3Embuing1" type="text" @keyup="saveInput('SpecialtyArmor3Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor3Embuing2" type="text" @keyup="saveInput('SpecialtyArmor3Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor3Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor3Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor3Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor3Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor3Attachment1" type="text" @keyup="saveInput('SpecialtyArmor3Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor3Attachment2" type="text" @keyup="saveInput('SpecialtyArmor3Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 4</h3>
              <f7-checkbox id="SpecialtyArmor4Equipped" @change="saveCheckbox('SpecialtyArmor4Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor4AC" type="number" @keyup="saveInput('SpecialtyArmor4AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor4Description" type="text" @keyup="saveInput('SpecialtyArmor4Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor4Embuing1" type="text" @keyup="saveInput('SpecialtyArmor4Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor4Embuing2" type="text" @keyup="saveInput('SpecialtyArmor4Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor4Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor4Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor4Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor4Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor4Attachment1" type="text" @keyup="saveInput('SpecialtyArmor4Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor4Attachment2" type="text" @keyup="saveInput('SpecialtyArmor4Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 5</h3>
              <f7-checkbox id="SpecialtyArmor5Equipped" @change="saveCheckbox('SpecialtyArmor5Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor5AC" type="number" @keyup="saveInput('SpecialtyArmor5AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor5Description" type="text" @keyup="saveInput('SpecialtyArmor5Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor5Embuing1" type="text" @keyup="saveInput('SpecialtyArmor5Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor5Embuing2" type="text" @keyup="saveInput('SpecialtyArmor5Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor5Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor5Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor5Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor5Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor5Attachment1" type="text" @keyup="saveInput('SpecialtyArmor5Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor5Attachment2" type="text" @keyup="saveInput('SpecialtyArmor5Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 6</h3>
              <f7-checkbox id="SpecialtyArmor6Equipped" @change="saveCheckbox('SpecialtyArmor6Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor6AC" type="number" @keyup="saveInput('SpecialtyArmor6AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor6Description" type="text" @keyup="saveInput('SpecialtyArmor6Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor6Embuing1" type="text" @keyup="saveInput('SpecialtyArmor6Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor6Embuing2" type="text" @keyup="saveInput('SpecialtyArmor6Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor6Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor6Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor6Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor6Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor6Attachment1" type="text" @keyup="saveInput('SpecialtyArmor6Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor6Attachment2" type="text" @keyup="saveInput('SpecialtyArmor6Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 7</h3>
              <f7-checkbox id="SpecialtyArmor7Equipped" @change="saveCheckbox('SpecialtyArmor7Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor7AC" type="number" @keyup="saveInput('SpecialtyArmor7AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor7Description" type="text" @keyup="saveInput('SpecialtyArmor7Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor7Embuing1" type="text" @keyup="saveInput('SpecialtyArmor7Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor7Embuing2" type="text" @keyup="saveInput('SpecialtyArmor7Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor7Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor7Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor7Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor7Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor7Attachment1" type="text" @keyup="saveInput('SpecialtyArmor7Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor7Attachment2" type="text" @keyup="saveInput('SpecialtyArmor7Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 8</h3>
              <f7-checkbox id="SpecialtyArmor8Equipped" @change="saveCheckbox('SpecialtyArmor8Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor8AC" type="number" @keyup="saveInput('SpecialtyArmor8AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor8Description" type="text" @keyup="saveInput('SpecialtyArmor8Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor8Embuing1" type="text" @keyup="saveInput('SpecialtyArmor8Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor8Embuing2" type="text" @keyup="saveInput('SpecialtyArmor8Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor8Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor8Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor8Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor8Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor8Attachment1" type="text" @keyup="saveInput('SpecialtyArmor8Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor8Attachment2" type="text" @keyup="saveInput('SpecialtyArmor8Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 9</h3>
              <f7-checkbox id="SpecialtyArmor9Equipped" @change="saveCheckbox('SpecialtyArmor9Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor9AC" type="number" @keyup="saveInput('SpecialtyArmor9AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor9Description" type="text" @keyup="saveInput('SpecialtyArmor9Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor9Embuing1" type="text" @keyup="saveInput('SpecialtyArmor9Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor9Embuing2" type="text" @keyup="saveInput('SpecialtyArmor9Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor9Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor9Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor9Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor9Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor9Attachment1" type="text" @keyup="saveInput('SpecialtyArmor9Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor9Attachment2" type="text" @keyup="saveInput('SpecialtyArmor9Attachment2', '')">
                </div>
              </div>
        
              <div class="dark-line move-lower"></div>
              
              <h3 class="move-lower">Custom Armor 10</h3>
              <f7-checkbox id="SpecialtyArmor10Equipped" @change="saveCheckbox('SpecialtyArmor10Equipped')">
                <p class="checkbox-label">Equipped</p>
              </f7-checkbox>

              <div class="move-lower">
                <label>Custom Armor AC Bonus</label>
                <input class="dark-input" id="SpecialtyArmor10AC" type="number" @keyup="saveInput('SpecialtyArmor10AC', '')">
                
                <label>Custom Armor Description</label>
                <input class="dark-input" id="SpecialtyArmor10Description" type="text" @keyup="saveInput('SpecialtyArmor10Description', '')">
        
                <div class="dark-line move-lower"></div>

                <div class="move-lower">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="SpecialtyArmor10Embuing1" type="text" @keyup="saveInput('SpecialtyArmor10Embuing1', '')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="SpecialtyArmor10Embuing2" type="text" @keyup="saveInput('SpecialtyArmor10Embuing2', '')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="SpecialtyArmor10Enchantment1" type="text" @keyup="saveInput('SpecialtyArmor10Enchantment1', '')">
                  <label>Enchantment 2</label>
                  <input class="dark-input" id="SpecialtyArmor10Enchantment2" type="text" @keyup="saveInput('SpecialtyArmor10Enchantment2', '')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="SpecialtyArmor10Attachment1" type="text" @keyup="saveInput('SpecialtyArmor10Attachment1', '')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="SpecialtyArmor10Attachment2" type="text" @keyup="saveInput('SpecialtyArmor10Attachment2', '')">
                </div>
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

export default {
  name: 'Armor',
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      armorClass: localStorage.getItem(localStorage.currentlySelectedCharacter+"ArmorClass"),
      canEquipLeatherArmor: false,
      canEquipIronArmor: false,
      canEquipSteelArmor: false,
      canEquipMithrilArmor: false,
      canEquipAdamantiumArmor: false,
      canEquipRuniteArmor: false,
      canEquipDragonArmor: false,
      currentlyEquipped: "",
    };
  },
  methods: {
    checkCharacterCanEquipArmorType(armorType) {
      switch (armorType) {
        case "leather":
          if (localStorage.getItem(localStorage.currentlySelectedCharacter+"NumberOfLeatherArmorPieces") >= 3) {
            this.canEquipLeatherArmor = true;
          } else {
            this.canEquipLeatherArmor = false;
          }
          break;
        case "iron":
          if (localStorage.getItem(localStorage.currentlySelectedCharacter+"NumberOfIronArmorPieces") >= 3) {
            this.canEquipIronArmor = true;
          } else {
            this.canEquipIronArmor = false;
          }
          break;
        case "steel":
          if (localStorage.getItem(localStorage.currentlySelectedCharacter+"NumberOfSteelArmorPieces") >= 3) {
            this.canEquipSteelArmor = true;
          } else {
            this.canEquipSteelArmor = false;
          }
          break;
        case "mithril":
          if (localStorage.getItem(localStorage.currentlySelectedCharacter+"NumberOfMithrilArmorPieces") >= 3) {
            this.canEquipMithrilArmor = true;
          } else {
            this.canEquipMithrilArmor = false;
          }
          break;
        case "adamantium":
          if (localStorage.getItem(localStorage.currentlySelectedCharacter+"NumberOfAdamantiumArmorPieces") >= 3) {
            this.canEquipAdamantiumArmor = true;
          } else {
            this.canEquipAdamantiumArmor = false;
          }
          break;
        case "runite":
          if (localStorage.getItem(localStorage.currentlySelectedCharacter+"NumberOfRuniteArmorPieces") >= 3) {
            this.canEquipRuniteArmor = true;
          } else {
            this.canEquipRuniteArmor = false;
          }
          break;
        case "dragon":
          if (localStorage.getItem(localStorage.currentlySelectedCharacter+"NumberOfDragonArmorPieces") >= 3) {
            this.canEquipDragonArmor = true;
          } else {
            this.canEquipDragonArmor = false;
          }
          break;
        default:
          break;
      }
    },
    async loadCheckbox(armorType) {
      await document.getElementById(armorType);
      if (document.getElementById(armorType).childNodes[0].checked !== null
      && localStorage.getItem(localStorage.currentlySelectedCharacter+armorType) !== undefined) {
        document.getElementById(armorType).childNodes[0].checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+armorType))
      }
      this.updateArmorClass(0);
    },
    async loadInput(numberOfArmorType, armorType) {
      await document.getElementById(numberOfArmorType);
      if (document.getElementById(numberOfArmorType).value !== null
      && localStorage.getItem(localStorage.currentlySelectedCharacter+numberOfArmorType) !== undefined) {
        document.getElementById(numberOfArmorType).value = localStorage.getItem(localStorage.currentlySelectedCharacter+numberOfArmorType)
        this.checkCharacterCanEquipArmorType(armorType)
      }
    },
    async load() {
      this.loadInput("NumberOfLeatherArmorPieces", "leather");
      this.loadInput("LeatherArmorEmbuing1", "leather");
      this.loadInput("LeatherArmorEmbuing2", "leather");
      this.loadInput("LeatherArmorEmbuing3", "leather");
      this.loadInput("LeatherArmorEmbuing4", "leather");
      this.loadInput("LeatherArmorEmbuing5", "leather");
      this.loadInput("LeatherArmorEmbuing6", "leather");
      this.loadInput("LeatherArmorEnchantment1", "leather");
      this.loadInput("LeatherArmorEnchantment2", "leather");
      this.loadInput("LeatherArmorEnchantment3", "leather");
      this.loadInput("LeatherArmorEnchantment4", "leather");
      this.loadInput("LeatherArmorEnchantment5", "leather");
      this.loadInput("LeatherArmorEnchantment6", "leather");
      this.loadInput("LeatherArmorAttachment1", "leather");
      this.loadInput("LeatherArmorAttachment2", "leather");
      this.loadInput("LeatherArmorAttachment3", "leather");
      this.loadInput("LeatherArmorAttachment4", "leather");
      this.loadInput("LeatherArmorAttachment5", "leather");
      this.loadInput("LeatherArmorAttachment6", "leather");
      this.loadInput("NumberOfIronArmorPieces", "iron");
      this.loadInput("IronArmorEmbuing1", "iron");
      this.loadInput("IronArmorEmbuing2", "iron");
      this.loadInput("IronArmorEmbuing3", "iron");
      this.loadInput("IronArmorEmbuing4", "iron");
      this.loadInput("IronArmorEmbuing5", "iron");
      this.loadInput("IronArmorEmbuing6", "iron");
      this.loadInput("IronArmorEnchantment1", "iron");
      this.loadInput("IronArmorEnchantment2", "iron");
      this.loadInput("IronArmorEnchantment3", "iron");
      this.loadInput("IronArmorEnchantment4", "iron");
      this.loadInput("IronArmorEnchantment5", "iron");
      this.loadInput("IronArmorEnchantment6", "iron");
      this.loadInput("IronArmorAttachment1", "iron");
      this.loadInput("IronArmorAttachment2", "iron");
      this.loadInput("IronArmorAttachment3", "iron");
      this.loadInput("IronArmorAttachment4", "iron");
      this.loadInput("IronArmorAttachment5", "iron");
      this.loadInput("IronArmorAttachment6", "iron");
      this.loadInput("NumberOfSteelArmorPieces", "steel");
      this.loadInput("SteelArmorEmbuing1", "steel");
      this.loadInput("SteelArmorEmbuing2", "steel");
      this.loadInput("SteelArmorEmbuing3", "steel");
      this.loadInput("SteelArmorEmbuing4", "steel");
      this.loadInput("SteelArmorEmbuing5", "steel");
      this.loadInput("SteelArmorEmbuing6", "steel");
      this.loadInput("SteelArmorEnchantment1", "steel");
      this.loadInput("SteelArmorEnchantment2", "steel");
      this.loadInput("SteelArmorEnchantment3", "steel");
      this.loadInput("SteelArmorEnchantment4", "steel");
      this.loadInput("SteelArmorEnchantment5", "steel");
      this.loadInput("SteelArmorEnchantment6", "steel");
      this.loadInput("SteelArmorAttachment1", "steel");
      this.loadInput("SteelArmorAttachment2", "steel");
      this.loadInput("SteelArmorAttachment3", "steel");
      this.loadInput("SteelArmorAttachment4", "steel");
      this.loadInput("SteelArmorAttachment5", "steel");
      this.loadInput("SteelArmorAttachment6", "steel");
      this.loadInput("NumberOfMithrilArmorPieces", "mithril");
      this.loadInput("MithrilArmorEmbuing1", "mithril");
      this.loadInput("MithrilArmorEmbuing2", "mithril");
      this.loadInput("MithrilArmorEmbuing3", "mithril");
      this.loadInput("MithrilArmorEmbuing4", "mithril");
      this.loadInput("MithrilArmorEmbuing5", "mithril");
      this.loadInput("MithrilArmorEmbuing6", "mithril");
      this.loadInput("MithrilArmorEnchantment1", "mithril");
      this.loadInput("MithrilArmorEnchantment2", "mithril");
      this.loadInput("MithrilArmorEnchantment3", "mithril");
      this.loadInput("MithrilArmorEnchantment4", "mithril");
      this.loadInput("MithrilArmorEnchantment5", "mithril");
      this.loadInput("MithrilArmorEnchantment6", "mithril");
      this.loadInput("MithrilArmorAttachment1", "mithril");
      this.loadInput("MithrilArmorAttachment2", "mithril");
      this.loadInput("MithrilArmorAttachment3", "mithril");
      this.loadInput("MithrilArmorAttachment4", "mithril");
      this.loadInput("MithrilArmorAttachment5", "mithril");
      this.loadInput("MithrilArmorAttachment6", "mithril");
      this.loadInput("NumberOfAdamantiumArmorPieces", "adamantium");
      this.loadInput("AdamantiumArmorEmbuing1", "adamantium");
      this.loadInput("AdamantiumArmorEmbuing2", "adamantium");
      this.loadInput("AdamantiumArmorEmbuing3", "adamantium");
      this.loadInput("AdamantiumArmorEmbuing4", "adamantium");
      this.loadInput("AdamantiumArmorEmbuing5", "adamantium");
      this.loadInput("AdamantiumArmorEmbuing6", "adamantium");
      this.loadInput("AdamantiumArmorEnchantment1", "adamantium");
      this.loadInput("AdamantiumArmorEnchantment2", "adamantium");
      this.loadInput("AdamantiumArmorEnchantment3", "adamantium");
      this.loadInput("AdamantiumArmorEnchantment4", "adamantium");
      this.loadInput("AdamantiumArmorEnchantment5", "adamantium");
      this.loadInput("AdamantiumArmorEnchantment6", "adamantium");
      this.loadInput("AdamantiumArmorAttachment1", "adamantium");
      this.loadInput("AdamantiumArmorAttachment2", "adamantium");
      this.loadInput("AdamantiumArmorAttachment3", "adamantium");
      this.loadInput("AdamantiumArmorAttachment4", "adamantium");
      this.loadInput("AdamantiumArmorAttachment5", "adamantium");
      this.loadInput("AdamantiumArmorAttachment6", "adamantium");
      this.loadInput("NumberOfRuniteArmorPieces", "runite");
      this.loadInput("RuniteArmorEmbuing1", "runite");
      this.loadInput("RuniteArmorEmbuing2", "runite");
      this.loadInput("RuniteArmorEmbuing3", "runite");
      this.loadInput("RuniteArmorEmbuing4", "runite");
      this.loadInput("RuniteArmorEmbuing5", "runite");
      this.loadInput("RuniteArmorEmbuing6", "runite");
      this.loadInput("RuniteArmorEnchantment1", "runite");
      this.loadInput("RuniteArmorEnchantment2", "runite");
      this.loadInput("RuniteArmorEnchantment3", "runite");
      this.loadInput("RuniteArmorEnchantment4", "runite");
      this.loadInput("RuniteArmorEnchantment5", "runite");
      this.loadInput("RuniteArmorEnchantment6", "runite");
      this.loadInput("RuniteArmorAttachment1", "runite");
      this.loadInput("RuniteArmorAttachment2", "runite");
      this.loadInput("RuniteArmorAttachment3", "runite");
      this.loadInput("RuniteArmorAttachment4", "runite");
      this.loadInput("RuniteArmorAttachment5", "runite");
      this.loadInput("RuniteArmorAttachment6", "runite");
      this.loadInput("NumberOfDragonArmorPieces", "dragon");
      this.loadInput("DragonArmorEmbuing1", "dragon");
      this.loadInput("DragonArmorEmbuing2", "dragon");
      this.loadInput("DragonArmorEmbuing3", "dragon");
      this.loadInput("DragonArmorEmbuing4", "dragon");
      this.loadInput("DragonArmorEmbuing5", "dragon");
      this.loadInput("DragonArmorEmbuing6", "dragon");
      this.loadInput("DragonArmorEnchantment1", "dragon");
      this.loadInput("DragonArmorEnchantment2", "dragon");
      this.loadInput("DragonArmorEnchantment3", "dragon");
      this.loadInput("DragonArmorEnchantment4", "dragon");
      this.loadInput("DragonArmorEnchantment5", "dragon");
      this.loadInput("DragonArmorEnchantment6", "dragon");
      this.loadInput("DragonArmorAttachment1", "dragon");
      this.loadInput("DragonArmorAttachment2", "dragon");
      this.loadInput("DragonArmorAttachment3", "dragon");
      this.loadInput("DragonArmorAttachment4", "dragon");
      this.loadInput("DragonArmorAttachment5", "dragon");
      this.loadInput("DragonArmorAttachment6", "dragon");
      this.loadCheckbox("LeatherArmorEquipped");
      this.loadCheckbox("IronArmorEquipped");
      this.loadCheckbox("SteelArmorEquipped");
      this.loadCheckbox("MithrilArmorEquipped");
      this.loadCheckbox("AdamantiumArmorEquipped");
      this.loadCheckbox("RuniteArmorEquipped");
      this.loadCheckbox("DragonArmorEquipped");

      this.loadInput("SpecialtyArmor1AC", "");
      this.loadInput("SpecialtyArmor1Description", "");
      this.loadInput("SpecialtyArmor1Embuing1", "");
      this.loadInput("SpecialtyArmor1Embuing2", "");
      this.loadInput("SpecialtyArmor1Enchantment1", "");
      this.loadInput("SpecialtyArmor1Enchantment2", "");
      this.loadInput("SpecialtyArmor1Attachment1", "");
      this.loadInput("SpecialtyArmor1Attachment2", "");
      this.loadInput("SpecialtyArmor2AC", "");
      this.loadInput("SpecialtyArmor2Description", "");
      this.loadInput("SpecialtyArmor2Embuing1", "");
      this.loadInput("SpecialtyArmor2Embuing2", "");
      this.loadInput("SpecialtyArmor2Enchantment1", "");
      this.loadInput("SpecialtyArmor2Enchantment2", "");
      this.loadInput("SpecialtyArmor2Attachment1", "");
      this.loadInput("SpecialtyArmor2Attachment2", "");
      this.loadInput("SpecialtyArmor3AC", "");
      this.loadInput("SpecialtyArmor3Description", "");
      this.loadInput("SpecialtyArmor3Embuing1", "");
      this.loadInput("SpecialtyArmor3Embuing2", "");
      this.loadInput("SpecialtyArmor3Enchantment1", "");
      this.loadInput("SpecialtyArmor3Enchantment2", "");
      this.loadInput("SpecialtyArmor3Attachment1", "");
      this.loadInput("SpecialtyArmor3Attachment2", "");
      this.loadInput("SpecialtyArmor4AC", "");
      this.loadInput("SpecialtyArmor4Description", "");
      this.loadInput("SpecialtyArmor4Embuing1", "");
      this.loadInput("SpecialtyArmor4Embuing2", "");
      this.loadInput("SpecialtyArmor4Enchantment1", "");
      this.loadInput("SpecialtyArmor4Enchantment2", "");
      this.loadInput("SpecialtyArmor4Attachment1", "");
      this.loadInput("SpecialtyArmor4Attachment2", "");
      this.loadInput("SpecialtyArmor5AC", "");
      this.loadInput("SpecialtyArmor5Description", "");
      this.loadInput("SpecialtyArmor5Embuing1", "");
      this.loadInput("SpecialtyArmor5Embuing2", "");
      this.loadInput("SpecialtyArmor5Enchantment1", "");
      this.loadInput("SpecialtyArmor5Enchantment2", "");
      this.loadInput("SpecialtyArmor5Attachment1", "");
      this.loadInput("SpecialtyArmor5Attachment2", "");
      this.loadInput("SpecialtyArmor6AC", "");
      this.loadInput("SpecialtyArmor6Description", "");
      this.loadInput("SpecialtyArmor6Embuing1", "");
      this.loadInput("SpecialtyArmor6Embuing2", "");
      this.loadInput("SpecialtyArmor6Enchantment1", "");
      this.loadInput("SpecialtyArmor6Enchantment2", "");
      this.loadInput("SpecialtyArmor6Attachment1", "");
      this.loadInput("SpecialtyArmor6Attachment2", "");
      this.loadInput("SpecialtyArmor7AC", "");
      this.loadInput("SpecialtyArmor7Description", "");
      this.loadInput("SpecialtyArmor7Embuing1", "");
      this.loadInput("SpecialtyArmor7Embuing2", "");
      this.loadInput("SpecialtyArmor7Enchantment1", "");
      this.loadInput("SpecialtyArmor7Enchantment2", "");
      this.loadInput("SpecialtyArmor7Attachment1", "");
      this.loadInput("SpecialtyArmor7Attachment2", "");
      this.loadInput("SpecialtyArmor8AC", "");
      this.loadInput("SpecialtyArmor8Description", "");
      this.loadInput("SpecialtyArmor8Embuing1", "");
      this.loadInput("SpecialtyArmor8Embuing2", "");
      this.loadInput("SpecialtyArmor8Enchantment1", "");
      this.loadInput("SpecialtyArmor8Enchantment2", "");
      this.loadInput("SpecialtyArmor8Attachment1", "");
      this.loadInput("SpecialtyArmor8Attachment2", "");
      this.loadInput("SpecialtyArmor9AC", "");
      this.loadInput("SpecialtyArmor9Description", "");
      this.loadInput("SpecialtyArmor9Embuing1", "");
      this.loadInput("SpecialtyArmor9Embuing2", "");
      this.loadInput("SpecialtyArmor9Enchantment1", "");
      this.loadInput("SpecialtyArmor9Enchantment2", "");
      this.loadInput("SpecialtyArmor9Attachment1", "");
      this.loadInput("SpecialtyArmor9Attachment2", "");
      this.loadInput("SpecialtyArmor10AC", "");
      this.loadInput("SpecialtyArmor10Description", "");
      this.loadInput("SpecialtyArmor10Embuing1", "");
      this.loadInput("SpecialtyArmor10Embuing2", "");
      this.loadInput("SpecialtyArmor10Enchantment1", "");
      this.loadInput("SpecialtyArmor10Enchantment2", "");
      this.loadInput("SpecialtyArmor10Attachment1", "");
      this.loadInput("SpecialtyArmor10Attachment2", "");
      this.loadCheckbox("SpecialtyArmor1Equipped");
      this.loadCheckbox("SpecialtyArmor2Equipped");
      this.loadCheckbox("SpecialtyArmor3Equipped");
      this.loadCheckbox("SpecialtyArmor4Equipped");
      this.loadCheckbox("SpecialtyArmor5Equipped");
      this.loadCheckbox("SpecialtyArmor6Equipped");
      this.loadCheckbox("SpecialtyArmor7Equipped");
      this.loadCheckbox("SpecialtyArmor8Equipped");
      this.loadCheckbox("SpecialtyArmor9Equipped");
      this.loadCheckbox("SpecialtyArmor10Equipped");
    },
    saveCheckbox(armor) {
      document.getElementById(armor).childNodes[1].checked === undefined
      ? localStorage.setItem(localStorage.currentlySelectedCharacter+armor, false)
      : localStorage.setItem(localStorage.currentlySelectedCharacter+armor, document.getElementById(armor).childNodes[1].checked)
      document.getElementById(armor).childNodes[1].checked ? this.updateArmorClass(1) : this.updateArmorClass(0);
    },
    saveInput(numberOfArmorType, armorType) {
      localStorage.setItem(localStorage.currentlySelectedCharacter+numberOfArmorType, document.getElementById(numberOfArmorType).value);
      this.checkCharacterCanEquipArmorType(armorType);
    },
    updateArmorClass(index) {
      if (document.getElementById("SpecialtyArmor1Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor1Description")
      } else if (document.getElementById("SpecialtyArmor2Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor2Description")
      } else if (document.getElementById("SpecialtyArmor3Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor3Description")
      } else if (document.getElementById("SpecialtyArmor4Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor4Description")
      } else if (document.getElementById("SpecialtyArmor5Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor5Description")
      } else if (document.getElementById("SpecialtyArmor6Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor6Description")
      } else if (document.getElementById("SpecialtyArmor7Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor7Description")
      } else if (document.getElementById("SpecialtyArmor8Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor8Description")
      } else if (document.getElementById("SpecialtyArmor9Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor9Description")
      } else if (document.getElementById("SpecialtyArmor10Equipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10 + JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10AC")))
        this.currentlyEquipped = "Custom: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"SpecialtyArmor10Description")
      } else if (document.getElementById("DragonArmorEquipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 20)
        this.currentlyEquipped = "Dragon Armor"
      } else if (document.getElementById("RuniteArmorEquipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 18)
        this.currentlyEquipped = "Runite Armor"
      } else if (document.getElementById("AdamantiumArmorEquipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 16)
        this.currentlyEquipped = "Adamantium Armor"
      } else if (document.getElementById("MithrilArmorEquipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 14)
        this.currentlyEquipped = "Mithril Armor"
      } else if (document.getElementById("SteelArmorEquipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 13)
        this.currentlyEquipped = "Steel Armor"
      } else if (document.getElementById("IronArmorEquipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 12)
        this.currentlyEquipped = "Iron Armor"
      } else if (document.getElementById("LeatherArmorEquipped").childNodes[index].checked) {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 11)
        this.currentlyEquipped = "Leather Armor"
      } else {
        localStorage.setItem(localStorage.currentlySelectedCharacter+"ArmorClass", 10)
        this.currentlyEquipped = ""
      }
      this.armorClass = localStorage.getItem(localStorage.currentlySelectedCharacter+"ArmorClass")
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/armor/") {
      this.$router.push({ path: "/armor/" })
    }
  },
};
</script>
