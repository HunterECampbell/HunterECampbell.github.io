<template>
  <f7-page name="weapons">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Weapons
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB location="right-bottom" openDirection="top" />

    <!-- Scrollable page content-->
    <f7-block inner>
      <ul v-show="meleeWeaponCount > 0"><h3 class="move-left">{{ equippedMelee }}</h3>
        <li class="move-slightly-higher" v-show="melee1Show">{{ melee1 }}</li>
        <li v-show="melee2Show">{{ melee2 }}</li>
        <li v-show="melee3Show">{{ melee3 }}</li>
        <li v-show="melee4Show">{{ melee4 }}</li>
        <li v-show="melee5Show">{{ melee5 }}</li>
        <li v-show="melee6Show">{{ melee6 }}</li>
        <li v-show="melee7Show">{{ melee7 }}</li>
        <li v-show="melee8Show">{{ melee8 }}</li>
        <li v-show="melee9Show">{{ melee9 }}</li>
        <li v-show="melee10Show">{{ melee10 }}</li>
      </ul>
      <ul v-show="rangedWeaponCount > 0"><h3 class="move-left">{{ equippedRanged }}</h3>
        <li class="move-slightly-higher" v-show="ranged1Show">{{ ranged1 }}</li>
        <li v-show="ranged2Show">{{ ranged2 }}</li>
        <li v-show="ranged3Show">{{ ranged3 }}</li>
        <li v-show="ranged4Show">{{ ranged4 }}</li>
        <li v-show="ranged5Show">{{ ranged5 }}</li>
        <li v-show="ranged6Show">{{ ranged6 }}</li>
        <li v-show="ranged7Show">{{ ranged7 }}</li>
        <li v-show="ranged8Show">{{ ranged8 }}</li>
        <li v-show="ranged9Show">{{ ranged9 }}</li>
        <li v-show="ranged10Show">{{ ranged10 }}</li>
      </ul>

      <f7-list accordion-list>

        <f7-list-item accordion-item title="Melee Weapons">
          <f7-list accordion-list>
            <f7-accordion-content>
              <f7-block>

                <h3 class="move-lower">Melee Weapon 1</h3>
                <f7-checkbox id="MeleeWeapon1Equipped" @change="saveEquipped('MeleeWeapon1Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon1MaterialType" type="text" @keyup="save('MeleeWeapon1MaterialType', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon1WeaponType" type="text" @keyup="save('MeleeWeapon1WeaponType', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon1Damage" type="text" @keyup="save('MeleeWeapon1Damage', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon1Embuing1" type="text" @keyup="save('MeleeWeapon1Embuing1', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon1Embuing2" type="text" @keyup="save('MeleeWeapon1Embuing2', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon1Enchantment1" type="text" @keyup="save('MeleeWeapon1Enchantment1', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon1Enchantment2" type="text" @keyup="save('MeleeWeapon1Enchantment2', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon1Attachment1" type="text" @keyup="save('MeleeWeapon1Attachment1', 'MeleeWeapon1', 'melee1', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon1Attachment2" type="text" @keyup="save('MeleeWeapon1Attachment2', 'MeleeWeapon1', 'melee1', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 2</h3>
                <f7-checkbox id="MeleeWeapon2Equipped" @change="saveEquipped('MeleeWeapon2Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon2MaterialType" type="text" @keyup="save('MeleeWeapon2MaterialType', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon2WeaponType" type="text" @keyup="save('MeleeWeapon2WeaponType', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon2Damage" type="text" @keyup="save('MeleeWeapon2Damage', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon2Embuing1" type="text" @keyup="save('MeleeWeapon2Embuing1', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon2Embuing2" type="text" @keyup="save('MeleeWeapon2Embuing2', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon2Enchantment1" type="text" @keyup="save('MeleeWeapon2Enchantment1', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon2Enchantment2" type="text" @keyup="save('MeleeWeapon2Enchantment2', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon2Attachment1" type="text" @keyup="save('MeleeWeapon2Attachment1', 'MeleeWeapon2', 'melee2', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon2Attachment2" type="text" @keyup="save('MeleeWeapon2Attachment2', 'MeleeWeapon2', 'melee2', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 3</h3>
                <f7-checkbox id="MeleeWeapon3Equipped" @change="saveEquipped('MeleeWeapon3Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon3MaterialType" type="text" @keyup="save('MeleeWeapon3MaterialType', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon3WeaponType" type="text" @keyup="save('MeleeWeapon3MaterialType', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon3Damage" type="text" @keyup="save('MeleeWeapon3MaterialType', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon3Embuing1" type="text" @keyup="save('MeleeWeapon3Embuing1', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon3Embuing2" type="text" @keyup="save('MeleeWeapon3Embuing2', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon3Enchantment1" type="text" @keyup="save('MeleeWeapon3Enchantment1', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon3Enchantment2" type="text" @keyup="save('MeleeWeapon3Enchantment2', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon3Attachment1" type="text" @keyup="save('MeleeWeapon3Attachment1', 'MeleeWeapon3', 'melee3', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon3Attachment2" type="text" @keyup="save('MeleeWeapon3Attachment2', 'MeleeWeapon3', 'melee3', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 4</h3>
                <f7-checkbox id="MeleeWeapon4Equipped" @change="saveEquipped('MeleeWeapon4Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon4MaterialType" type="text" @keyup="save('MeleeWeapon4MaterialType', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon4WeaponType" type="text" @keyup="save('MeleeWeapon4MaterialType', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon4Damage" type="text" @keyup="save('MeleeWeapon4MaterialType', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon4Embuing1" type="text" @keyup="save('MeleeWeapon4Embuing1', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon4Embuing2" type="text" @keyup="save('MeleeWeapon4Embuing2', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon4Enchantment1" type="text" @keyup="save('MeleeWeapon4Enchantment1', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon4Enchantment2" type="text" @keyup="save('MeleeWeapon4Enchantment2', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon4Attachment1" type="text" @keyup="save('MeleeWeapon4Attachment1', 'MeleeWeapon4', 'melee4', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon4Attachment2" type="text" @keyup="save('MeleeWeapon4Attachment2', 'MeleeWeapon4', 'melee4', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 5</h3>
                <f7-checkbox id="MeleeWeapon5Equipped" @change="saveEquipped('MeleeWeapon5Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon5MaterialType" type="text" @keyup="save('MeleeWeapon5MaterialType', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon5WeaponType" type="text" @keyup="save('MeleeWeapon5MaterialType', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon5Damage" type="text" @keyup="save('MeleeWeapon5MaterialType', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon5Embuing1" type="text" @keyup="save('MeleeWeapon5Embuing1', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon5Embuing2" type="text" @keyup="save('MeleeWeapon5Embuing2', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon5Enchantment1" type="text" @keyup="save('MeleeWeapon5Enchantment1', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon5Enchantment2" type="text" @keyup="save('MeleeWeapon5Enchantment2', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon5Attachment1" type="text" @keyup="save('MeleeWeapon5Attachment1', 'MeleeWeapon5', 'melee5', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon5Attachment2" type="text" @keyup="save('MeleeWeapon5Attachment2', 'MeleeWeapon5', 'melee5', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 6</h3>
                <f7-checkbox id="MeleeWeapon6Equipped" @change="saveEquipped('MeleeWeapon6Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon6MaterialType" type="text" @keyup="save('MeleeWeapon6MaterialType', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon6WeaponType" type="text" @keyup="save('MeleeWeapon6MaterialType', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon6Damage" type="text" @keyup="save('MeleeWeapon6MaterialType', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon6Embuing1" type="text" @keyup="save('MeleeWeapon6Embuing1', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon6Embuing2" type="text" @keyup="save('MeleeWeapon6Embuing2', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon6Enchantment1" type="text" @keyup="save('MeleeWeapon6Enchantment1', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon6Enchantment2" type="text" @keyup="save('MeleeWeapon6Enchantment2', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon6Attachment1" type="text" @keyup="save('MeleeWeapon6Attachment1', 'MeleeWeapon6', 'melee6', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon6Attachment2" type="text" @keyup="save('MeleeWeapon6Attachment2', 'MeleeWeapon6', 'melee6', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 7</h3>
                <f7-checkbox id="MeleeWeapon7Equipped" @change="saveEquipped('MeleeWeapon7Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon7MaterialType" type="text" @keyup="save('MeleeWeapon7MaterialType', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon7WeaponType" type="text" @keyup="save('MeleeWeapon7MaterialType', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon7Damage" type="text" @keyup="save('MeleeWeapon7MaterialType', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon7Embuing1" type="text" @keyup="save('MeleeWeapon7Embuing1', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon7Embuing2" type="text" @keyup="save('MeleeWeapon7Embuing2', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon7Enchantment1" type="text" @keyup="save('MeleeWeapon7Enchantment1', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon7Enchantment2" type="text" @keyup="save('MeleeWeapon7Enchantment2', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon7Attachment1" type="text" @keyup="save('MeleeWeapon7Attachment1', 'MeleeWeapon7', 'melee7', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon7Attachment2" type="text" @keyup="save('MeleeWeapon7Attachment2', 'MeleeWeapon7', 'melee7', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 8</h3>
                <f7-checkbox id="MeleeWeapon8Equipped" @change="saveEquipped('MeleeWeapon8Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon8MaterialType" type="text" @keyup="save('MeleeWeapon8MaterialType', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon8WeaponType" type="text" @keyup="save('MeleeWeapon8MaterialType', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon8Damage" type="text" @keyup="save('MeleeWeapon8MaterialType', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon8Embuing1" type="text" @keyup="save('MeleeWeapon8Embuing1', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon8Embuing2" type="text" @keyup="save('MeleeWeapon8Embuing2', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon8Enchantment1" type="text" @keyup="save('MeleeWeapon8Enchantment1', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon8Enchantment2" type="text" @keyup="save('MeleeWeapon8Enchantment2', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon8Attachment1" type="text" @keyup="save('MeleeWeapon8Attachment1', 'MeleeWeapon8', 'melee8', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon8Attachment2" type="text" @keyup="save('MeleeWeapon8Attachment2', 'MeleeWeapon8', 'melee8', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 9</h3>
                <f7-checkbox id="MeleeWeapon9Equipped" @change="saveEquipped('MeleeWeapon9Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon9MaterialType" type="text" @keyup="save('MeleeWeapon9MaterialType', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon9WeaponType" type="text" @keyup="save('MeleeWeapon9MaterialType', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon9Damage" type="text" @keyup="save('MeleeWeapon9MaterialType', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon9Embuing1" type="text" @keyup="save('MeleeWeapon9Embuing1', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon9Embuing2" type="text" @keyup="save('MeleeWeapon9Embuing2', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon9Enchantment1" type="text" @keyup="save('MeleeWeapon9Enchantment1', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon9Enchantment2" type="text" @keyup="save('MeleeWeapon9Enchantment2', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon9Attachment1" type="text" @keyup="save('MeleeWeapon9Attachment1', 'MeleeWeapon9', 'melee9', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon9Attachment2" type="text" @keyup="save('MeleeWeapon9Attachment2', 'MeleeWeapon9', 'melee9', 'melee')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Melee Weapon 10</h3>
                <f7-checkbox id="MeleeWeapon10Equipped" @change="saveEquipped('MeleeWeapon10Equipped', 'melee')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="MeleeWeapon10MaterialType" type="text" @keyup="save('MeleeWeapon10MaterialType', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="MeleeWeapon10WeaponType" type="text" @keyup="save('MeleeWeapon10MaterialType', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Damage</label>
                  <input class="dark-input" id="MeleeWeapon10Damage" type="text" @keyup="save('MeleeWeapon10MaterialType', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="MeleeWeapon10Embuing1" type="text" @keyup="save('MeleeWeapon10Embuing1', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="MeleeWeapon10Embuing2" type="text" @keyup="save('MeleeWeapon10Embuing2', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon10Enchantment1" type="text" @keyup="save('MeleeWeapon10Enchantment1', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="MeleeWeapon10Enchantment2" type="text" @keyup="save('MeleeWeapon10Enchantment2', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="MeleeWeapon10Attachment1" type="text" @keyup="save('MeleeWeapon10Attachment1', 'MeleeWeapon10', 'melee10', 'melee')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="MeleeWeapon10Attachment2" type="text" @keyup="save('MeleeWeapon10Attachment2', 'MeleeWeapon10', 'melee10', 'melee')">
                </div>

              </f7-block>
            </f7-accordion-content>
          </f7-list>
        </f7-list-item>
          
        <f7-list-item accordion-item title="Ranged Weapons">
          <f7-list accordion-list>
            <f7-accordion-content>
              <f7-block>

                <h3 class="move-lower">Ranged Weapon 1</h3>
                <f7-checkbox id="RangedWeapon1Equipped" @change="saveEquipped('RangedWeapon1Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon1MaterialType" type="text" @keyup="save('RangedWeapon1MaterialType', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon1WeaponType" type="text" @keyup="save('RangedWeapon1WeaponType', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon1Damage" type="text" @keyup="save('RangedWeapon1Damage', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon1Range" type="text" @keyup="save('RangedWeapon1Range', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon1AmmoCount" type="text" @keyup="save('RangedWeapon1AmmoCount', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon1Embuing1" type="text" @keyup="save('RangedWeapon1Embuing1', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon1Embuing2" type="text" @keyup="save('RangedWeapon1Embuing2', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon1Enchantment1" type="text" @keyup="save('RangedWeapon1Enchantment1', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon1Enchantment2" type="text" @keyup="save('RangedWeapon1Enchantment2', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon1Attachment1" type="text" @keyup="save('RangedWeapon1Attachment1', 'RangedWeapon1', 'ranged1', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon1Attachment2" type="text" @keyup="save('RangedWeapon1Attachment2', 'RangedWeapon1', 'ranged1', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 2</h3>
                <f7-checkbox id="RangedWeapon2Equipped" @change="saveEquipped('RangedWeapon2Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon2MaterialType" type="text" @keyup="save('RangedWeapon2MaterialType', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon2WeaponType" type="text" @keyup="save('RangedWeapon2WeaponType', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon2Damage" type="text" @keyup="save('RangedWeapon2Damage', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon2Range" type="text" @keyup="save('RangedWeapon2Range', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon2AmmoCount" type="text" @keyup="save('RangedWeapon2AmmoCount', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon2Embuing1" type="text" @keyup="save('RangedWeapon2Embuing1', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon2Embuing2" type="text" @keyup="save('RangedWeapon2Embuing2', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon2Enchantment1" type="text" @keyup="save('RangedWeapon2Enchantment1', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon2Enchantment2" type="text" @keyup="save('RangedWeapon2Enchantment2', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon2Attachment1" type="text" @keyup="save('RangedWeapon2Attachment1', 'RangedWeapon2', 'ranged2', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon2Attachment2" type="text" @keyup="save('RangedWeapon2Attachment2', 'RangedWeapon2', 'ranged2', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 3</h3>
                <f7-checkbox id="RangedWeapon3Equipped" @change="saveEquipped('RangedWeapon3Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon3MaterialType" type="text" @keyup="save('RangedWeapon3MaterialType', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon3WeaponType" type="text" @keyup="save('RangedWeapon3WeaponType', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon3Damage" type="text" @keyup="save('RangedWeapon3Damage', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon3Range" type="text" @keyup="save('RangedWeapon3Range', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon3AmmoCount" type="text" @keyup="save('RangedWeapon3AmmoCount', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon3Embuing1" type="text" @keyup="save('RangedWeapon3Embuing1', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon3Embuing2" type="text" @keyup="save('RangedWeapon3Embuing2', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon3Enchantment1" type="text" @keyup="save('RangedWeapon3Enchantment1', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon3Enchantment2" type="text" @keyup="save('RangedWeapon3Enchantment2', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon3Attachment1" type="text" @keyup="save('RangedWeapon3Attachment1', 'RangedWeapon3', 'ranged3', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon3Attachment2" type="text" @keyup="save('RangedWeapon3Attachment2', 'RangedWeapon3', 'ranged3', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 4</h3>
                <f7-checkbox id="RangedWeapon4Equipped" @change="saveEquipped('RangedWeapon4Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon4MaterialType" type="text" @keyup="save('RangedWeapon4MaterialType', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon4WeaponType" type="text" @keyup="save('RangedWeapon4WeaponType', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon4Damage" type="text" @keyup="save('RangedWeapon4Damage', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon4Range" type="text" @keyup="save('RangedWeapon4Range', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon4AmmoCount" type="text" @keyup="save('RangedWeapon4AmmoCount', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon4Embuing1" type="text" @keyup="save('RangedWeapon4Embuing1', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon4Embuing2" type="text" @keyup="save('RangedWeapon4Embuing2', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon4Enchantment1" type="text" @keyup="save('RangedWeapon4Enchantment1', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon4Enchantment2" type="text" @keyup="save('RangedWeapon4Enchantment2', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon4Attachment1" type="text" @keyup="save('RangedWeapon4Attachment1', 'RangedWeapon4', 'ranged4', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon4Attachment2" type="text" @keyup="save('RangedWeapon4Attachment2', 'RangedWeapon4', 'ranged4', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 5</h3>
                <f7-checkbox id="RangedWeapon5Equipped" @change="saveEquipped('RangedWeapon5Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon5MaterialType" type="text" @keyup="save('RangedWeapon5MaterialType', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon5WeaponType" type="text" @keyup="save('RangedWeapon5WeaponType', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon5Damage" type="text" @keyup="save('RangedWeapon5Damage', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon5Range" type="text" @keyup="save('RangedWeapon5Range', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon5AmmoCount" type="text" @keyup="save('RangedWeapon5AmmoCount', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon5Embuing1" type="text" @keyup="save('RangedWeapon5Embuing1', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon5Embuing2" type="text" @keyup="save('RangedWeapon5Embuing2', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon5Enchantment1" type="text" @keyup="save('RangedWeapon5Enchantment1', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon5Enchantment2" type="text" @keyup="save('RangedWeapon5Enchantment2', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon5Attachment1" type="text" @keyup="save('RangedWeapon5Attachment1', 'RangedWeapon5', 'ranged5', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon5Attachment2" type="text" @keyup="save('RangedWeapon5Attachment2', 'RangedWeapon5', 'ranged5', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 6</h3>
                <f7-checkbox id="RangedWeapon6Equipped" @change="saveEquipped('RangedWeapon6Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon6MaterialType" type="text" @keyup="save('RangedWeapon6MaterialType', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon6WeaponType" type="text" @keyup="save('RangedWeapon6WeaponType', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon6Damage" type="text" @keyup="save('RangedWeapon6Damage', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon6Range" type="text" @keyup="save('RangedWeapon6Range', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon6AmmoCount" type="text" @keyup="save('RangedWeapon6AmmoCount', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon6Embuing1" type="text" @keyup="save('RangedWeapon6Embuing1', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon6Embuing2" type="text" @keyup="save('RangedWeapon6Embuing2', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon6Enchantment1" type="text" @keyup="save('RangedWeapon6Enchantment1', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon6Enchantment2" type="text" @keyup="save('RangedWeapon6Enchantment2', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon6Attachment1" type="text" @keyup="save('RangedWeapon6Attachment1', 'RangedWeapon6', 'ranged6', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon6Attachment2" type="text" @keyup="save('RangedWeapon6Attachment2', 'RangedWeapon6', 'ranged6', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 7</h3>
                <f7-checkbox id="RangedWeapon7Equipped" @change="saveEquipped('RangedWeapon7Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon7MaterialType" type="text" @keyup="save('RangedWeapon7MaterialType', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon7WeaponType" type="text" @keyup="save('RangedWeapon7WeaponType', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon7Damage" type="text" @keyup="save('RangedWeapon7Damage', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon7Range" type="text" @keyup="save('RangedWeapon7Range', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon7AmmoCount" type="text" @keyup="save('RangedWeapon7AmmoCount', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon7Embuing1" type="text" @keyup="save('RangedWeapon7Embuing1', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon7Embuing2" type="text" @keyup="save('RangedWeapon7Embuing2', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon7Enchantment1" type="text" @keyup="save('RangedWeapon7Enchantment1', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon7Enchantment2" type="text" @keyup="save('RangedWeapon7Enchantment2', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon7Attachment1" type="text" @keyup="save('RangedWeapon7Attachment1', 'RangedWeapon7', 'ranged7', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon7Attachment2" type="text" @keyup="save('RangedWeapon7Attachment2', 'RangedWeapon7', 'ranged7', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 8</h3>
                <f7-checkbox id="RangedWeapon8Equipped" @change="saveEquipped('RangedWeapon8Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon8MaterialType" type="text" @keyup="save('RangedWeapon8MaterialType', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon8WeaponType" type="text" @keyup="save('RangedWeapon8WeaponType', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon8Damage" type="text" @keyup="save('RangedWeapon8Damage', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon8Range" type="text" @keyup="save('RangedWeapon8Range', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon8AmmoCount" type="text" @keyup="save('RangedWeapon8AmmoCount', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon8Embuing1" type="text" @keyup="save('RangedWeapon8Embuing1', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon8Embuing2" type="text" @keyup="save('RangedWeapon8Embuing2', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon8Enchantment1" type="text" @keyup="save('RangedWeapon8Enchantment1', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon8Enchantment2" type="text" @keyup="save('RangedWeapon8Enchantment2', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon8Attachment1" type="text" @keyup="save('RangedWeapon8Attachment1', 'RangedWeapon8', 'ranged8', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon8Attachment2" type="text" @keyup="save('RangedWeapon8Attachment2', 'RangedWeapon8', 'ranged8', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 9</h3>
                <f7-checkbox id="RangedWeapon9Equipped" @change="saveEquipped('RangedWeapon9Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon9MaterialType" type="text" @keyup="save('RangedWeapon9MaterialType', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon9WeaponType" type="text" @keyup="save('RangedWeapon9WeaponType', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon9Damage" type="text" @keyup="save('RangedWeapon9Damage', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon9Range" type="text" @keyup="save('RangedWeapon9Range', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon9AmmoCount" type="text" @keyup="save('RangedWeapon9AmmoCount', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon9Embuing1" type="text" @keyup="save('RangedWeapon9Embuing1', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon9Embuing2" type="text" @keyup="save('RangedWeapon9Embuing2', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon9Enchantment1" type="text" @keyup="save('RangedWeapon9Enchantment1', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon9Enchantment2" type="text" @keyup="save('RangedWeapon9Enchantment2', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon9Attachment1" type="text" @keyup="save('RangedWeapon9Attachment1', 'RangedWeapon9', 'ranged9', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon9Attachment2" type="text" @keyup="save('RangedWeapon9Attachment2', 'RangedWeapon9', 'ranged9', 'ranged')">
                </div>
        
                <div class="dark-line move-lower"></div>

                <h3 class="move-lower">Ranged Weapon 10</h3>
                <f7-checkbox id="RangedWeapon10Equipped" @change="saveEquipped('RangedWeapon10Equipped', 'ranged')">
                  <p class="checkbox-label">Equipped</p>
                </f7-checkbox>
                <div class="move-slightly-lower">
                  <label>Material Type</label>
                  <input class="dark-input" id="RangedWeapon10MaterialType" type="text" @keyup="save('RangedWeapon10MaterialType', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Weapon Type</label>
                  <input class="dark-input" id="RangedWeapon10WeaponType" type="text" @keyup="save('RangedWeapon10WeaponType', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Damage</label>
                  <input class="dark-input" id="RangedWeapon10Damage" type="text" @keyup="save('RangedWeapon10Damage', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Range</label>
                  <input class="dark-input" id="RangedWeapon10Range" type="text" @keyup="save('RangedWeapon10Range', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Ammo Count</label>
                  <input class="dark-input" id="RangedWeapon10AmmoCount" type="text" @keyup="save('RangedWeapon10AmmoCount', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Embuing 1</label>
                  <input class="dark-input" id="RangedWeapon10Embuing1" type="text" @keyup="save('RangedWeapon10Embuing1', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Embuing 2</label>
                  <input class="dark-input" id="RangedWeapon10Embuing2" type="text" @keyup="save('RangedWeapon10Embuing2', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon10Enchantment1" type="text" @keyup="save('RangedWeapon10Enchantment1', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Enchantment 1</label>
                  <input class="dark-input" id="RangedWeapon10Enchantment2" type="text" @keyup="save('RangedWeapon10Enchantment2', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Attachment 1</label>
                  <input class="dark-input" id="RangedWeapon10Attachment1" type="text" @keyup="save('RangedWeapon10Attachment1', 'RangedWeapon10', 'ranged10', 'ranged')">
                  <label>Attachment 2</label>
                  <input class="dark-input" id="RangedWeapon10Attachment2" type="text" @keyup="save('RangedWeapon10Attachment2', 'RangedWeapon10', 'ranged10', 'ranged')">
                </div>

              </f7-block>
            </f7-accordion-content>
          </f7-list>
        </f7-list-item>
        
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import QuickViewFAB from '../components/QuickViewFAB';

export default {
  name: 'Weapons',
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      meleeWeaponCount: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount"),
      equippedMelee: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount") > 1 ? "Equipped Melee Weapons" : "Equipped Melee Weapon",
      melee1: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Damage"),
      melee2: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Damage"),
      melee3: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Damage"),
      melee4: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Damage"),
      melee5: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Damage"),
      melee6: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Damage"),
      melee7: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Damage"),
      melee8: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Damage"),
      melee9: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Damage"),
      melee10: localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Damage"),
      melee1Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Equipped")),
      melee2Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Equipped")),
      melee3Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Equipped")),
      melee4Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Equipped")),
      melee5Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Equipped")),
      melee6Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Equipped")),
      melee7Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Equipped")),
      melee8Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Equipped")),
      melee9Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Equipped")),
      melee10Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Equipped")),

      rangedWeaponCount: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount"),
      equippedRanged: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount") > 1 ? "Equipped Ranged Weapons" : "Equipped Ranged Weapon",
      ranged1: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon1MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon1WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon1AmmoCount"),
      ranged2: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon2MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon2WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon2AmmoCount"),
      ranged3: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon3MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon3WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon3AmmoCount"),
      ranged4: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon4MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon4WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon4AmmoCount"),
      ranged5: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon5MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon5WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon5AmmoCount"),
      ranged6: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon6MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon6WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon6AmmoCount"),
      ranged7: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon7MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon7WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon7AmmoCount"),
      ranged8: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon8MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon8WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon8AmmoCount"),
      ranged9: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon9MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon9WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon9AmmoCount"),
      ranged10: localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon10MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon10WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon10AmmoCount"),
      ranged1Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Equipped")),
      ranged2Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Equipped")),
      ranged3Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Equipped")),
      ranged4Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Equipped")),
      ranged5Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Equipped")),
      ranged6Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Equipped")),
      ranged7Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Equipped")),
      ranged8Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Equipped")),
      ranged9Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Equipped")),
      ranged10Show: JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Equipped")),
    };
  },
  methods: {
    async loadEquippedDetails(weapon, meleeOrRanged) {
      await document.getElementById(weapon);
      document.getElementById(weapon).childNodes[0].checked = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+weapon));
      if (JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+weapon))) {
        if (meleeOrRanged === "melee") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount")) + 1)
        } else if (meleeOrRanged === "ranged") {
          localStorage.setItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount", JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount")) + 1)
        }
      }
    },
    async loadMeleeDetails(weaponAbbreviation) {
      await document.getElementById(weaponAbbreviation+"MaterialType").value;
      await document.getElementById(weaponAbbreviation+"WeaponType").value;
      await document.getElementById(weaponAbbreviation+"Damage").value;
      document.getElementById(weaponAbbreviation+"MaterialType").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"MaterialType")
      document.getElementById(weaponAbbreviation+"WeaponType").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"WeaponType")
      document.getElementById(weaponAbbreviation+"Damage").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Damage")
      document.getElementById(weaponAbbreviation+"Embuing1").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Embuing1")
      document.getElementById(weaponAbbreviation+"Embuing2").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Embuing2")
      document.getElementById(weaponAbbreviation+"Enchantment1").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Enchantment1")
      document.getElementById(weaponAbbreviation+"Enchantment2").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Enchantment2")
      document.getElementById(weaponAbbreviation+"Attachment1").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Attachment1")
      document.getElementById(weaponAbbreviation+"Attachment2").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Attachment2")
    },
    async loadRangedDetails(weaponAbbreviation) {
      await document.getElementById(weaponAbbreviation+"MaterialType").value;
      await document.getElementById(weaponAbbreviation+"WeaponType").value;
      await document.getElementById(weaponAbbreviation+"Damage").value;
      await document.getElementById(weaponAbbreviation+"Range").value;
      await document.getElementById(weaponAbbreviation+"AmmoCount").value;
      document.getElementById(weaponAbbreviation+"MaterialType").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"MaterialType")
      document.getElementById(weaponAbbreviation+"WeaponType").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"WeaponType")
      document.getElementById(weaponAbbreviation+"Damage").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Damage")
      document.getElementById(weaponAbbreviation+"Range").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Range")
      document.getElementById(weaponAbbreviation+"AmmoCount").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"AmmoCount")
      document.getElementById(weaponAbbreviation+"Embuing1").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Embuing1")
      document.getElementById(weaponAbbreviation+"Embuing2").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Embuing2")
      document.getElementById(weaponAbbreviation+"Enchantment1").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Enchantment1")
      document.getElementById(weaponAbbreviation+"Enchantment2").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Enchantment2")
      document.getElementById(weaponAbbreviation+"Attachment1").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Attachment1")
      document.getElementById(weaponAbbreviation+"Attachment2").value = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Attachment2")
    },
    async load() {
      await setTimeout(function() {}, 1000);

      localStorage.setItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount", 0)
      await this.loadEquippedDetails("MeleeWeapon1Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon2Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon3Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon4Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon5Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon6Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon7Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon8Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon9Equipped", "melee");
      await this.loadEquippedDetails("MeleeWeapon10Equipped", "melee");
      this.meleeWeaponCount = localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount")

      await this.loadMeleeDetails("MeleeWeapon1");
      await this.loadMeleeDetails("MeleeWeapon2");
      await this.loadMeleeDetails("MeleeWeapon3");
      await this.loadMeleeDetails("MeleeWeapon4");
      await this.loadMeleeDetails("MeleeWeapon5");
      await this.loadMeleeDetails("MeleeWeapon6");
      await this.loadMeleeDetails("MeleeWeapon7");
      await this.loadMeleeDetails("MeleeWeapon8");
      await this.loadMeleeDetails("MeleeWeapon9");
      await this.loadMeleeDetails("MeleeWeapon10");

      localStorage.setItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount", 0)
      await this.loadEquippedDetails("RangedWeapon1Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon2Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon3Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon4Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon5Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon6Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon7Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon8Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon9Equipped", "ranged");
      await this.loadEquippedDetails("RangedWeapon10Equipped", "ranged");
      this.rangedWeaponCount = localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount")

      await this.loadRangedDetails("RangedWeapon1");
      await this.loadRangedDetails("RangedWeapon2");
      await this.loadRangedDetails("RangedWeapon3");
      await this.loadRangedDetails("RangedWeapon4");
      await this.loadRangedDetails("RangedWeapon5");
      await this.loadRangedDetails("RangedWeapon6");
      await this.loadRangedDetails("RangedWeapon7");
      await this.loadRangedDetails("RangedWeapon8");
      await this.loadRangedDetails("RangedWeapon9");
      await this.loadRangedDetails("RangedWeapon10");
    },
    saveEquipped(weapon, meleeOrRanged) {
      document.getElementById(weapon).childNodes[1].checked === undefined
      ? localStorage.setItem(localStorage.currentlySelectedCharacter+weapon, false)
      : localStorage.setItem(localStorage.currentlySelectedCharacter+weapon, document.getElementById(weapon).childNodes[1].checked)
      if (meleeOrRanged === "melee") {
        document.getElementById(weapon).childNodes[1].checked ? this.meleeWeaponCount++ : this.meleeWeaponCount--;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount", this.meleeWeaponCount);
        this.equippedMelee = localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeaponCount") > 1 ? "Equipped Melee Weapons" : "Equipped Melee Weapon";
        this.melee1Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon1Equipped"));
        this.melee2Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon2Equipped"));
        this.melee3Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon3Equipped"));
        this.melee4Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon4Equipped"));
        this.melee5Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon5Equipped"));
        this.melee6Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon6Equipped"));
        this.melee7Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon7Equipped"));
        this.melee8Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon8Equipped"));
        this.melee9Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon9Equipped"));
        this.melee10Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"MeleeWeapon10Equipped"));
      } else if (meleeOrRanged === "ranged") {
        document.getElementById(weapon).childNodes[1].checked ? this.rangedWeaponCount++ : this.rangedWeaponCount--;
        localStorage.setItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount", this.rangedWeaponCount);
        this.equippedRanged = localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeaponCount") > 1 ? "Equipped Ranged Weapons" : "Equipped Ranged Weapon";
        this.ranged1Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon1Equipped"));
        this.ranged2Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon2Equipped"));
        this.ranged3Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon3Equipped"));
        this.ranged4Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon4Equipped"));
        this.ranged5Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon5Equipped"));
        this.ranged6Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon6Equipped"));
        this.ranged7Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon7Equipped"));
        this.ranged8Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon8Equipped"));
        this.ranged9Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon9Equipped"));
        this.ranged10Show = JSON.parse(localStorage.getItem(localStorage.currentlySelectedCharacter+"RangedWeapon10Equipped"));
      }
    },
    save(weapon, weaponAbbreviation, weaponNumber, meleeOrRanged) {
      localStorage.setItem(localStorage.currentlySelectedCharacter+weapon, document.getElementById(weapon).value);
      console.log(weaponAbbreviation)
      if (meleeOrRanged === "melee") {
        const text = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Damage")
        switch (weaponNumber) {
          case "melee1":
            this.melee1 = text;
            break;
          case "melee2":
            this.melee2 = text;
            break;
          case "melee3":
            this.melee3 = text;
            break;
          case "melee4":
            this.melee4 = text;
            break;
          case "melee5":
            this.melee5 = text;
            break;
          case "melee6":
            this.melee6 = text;
            break;
          case "melee7":
            this.melee7 = text;
            break;
          case "melee8":
            this.melee8 = text;
            break;
          case "melee9":
            this.melee9 = text;
            break;
          case "melee10":
            this.melee10 = text;
            break;
          default:
            break;
        }
      } else if (meleeOrRanged === "ranged") {
        const text = localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"MaterialType") + " " + localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"WeaponType") + " — " + localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Damage") + " — Range: " + localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"Range") + " — Ammo: " + localStorage.getItem(localStorage.currentlySelectedCharacter+weaponAbbreviation+"AmmoCount");
        switch (weaponNumber) {
          case "ranged1":
            this.ranged1 = text;
            break;
          case "ranged2":
            this.ranged2 = text;
            break;
          case "ranged3":
            this.ranged3 = text;
            break;
          case "ranged4":
            this.ranged4 = text;
            break;
          case "ranged5":
            this.ranged5 = text;
            break;
          case "ranged6":
            this.ranged6 = text;
            break;
          case "ranged7":
            this.ranged7 = text;
            break;
          case "ranged8":
            this.ranged8 = text;
            break;
          case "ranged9":
            this.ranged9 = text;
            break;
          case "ranged10":
            this.ranged10 = text;
            break;
          default:
            break;
        }
      }
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/weapons/") {
      this.$router.push({ path: "/weapons/" })
    }
  },
};
</script>
