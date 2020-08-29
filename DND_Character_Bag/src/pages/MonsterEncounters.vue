<template>
  <f7-page name="monsterEncounters">
    <f7-navbar sliding>
      <f7-nav-right>
        <f7-link icon-f7="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-link href="/">
        <f7-icon material="home"></f7-icon>
      </f7-link>
      <f7-nav-title>
        Monster Encounters
      </f7-nav-title>
    </f7-navbar>

    <QuickViewFAB />

    <!-- Scrollable page content-->
    <f7-block inner>
      <h3>Most Common Encounters</h3>
      <ol>
        <li>{{ showTopEncounter(0) }}</li>
        <li>{{ showTopEncounter(1) }}</li>
        <li>{{ showTopEncounter(2) }}</li>
        <li>{{ showTopEncounter(3) }}</li>
        <li>{{ showTopEncounter(4) }}</li>
        <li>{{ showTopEncounter(5) }}</li>
        <li>{{ showTopEncounter(6) }}</li>
        <li>{{ showTopEncounter(7) }}</li>
        <li>{{ showTopEncounter(8) }}</li>
        <li>{{ showTopEncounter(9) }}</li>
      </ol>

      <f7-list accordion-list>

        <f7-list-item accordion-item title="Level 0 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Awakened Shrub</label>
                <input class="dark-input" id="AwakenedShrub" type="number" @keyup="save('AwakenedShrub', 'Awakened Shrub')">
              </div>
        
              <div class="move-lower">
                <label>Baboon</label>
                <input class="dark-input" id="Baboon" type="number" @keyup="save('Baboon', 'Baboon')">
              </div>
        
              <div class="move-lower">
                <label>Badger</label>
                <input class="dark-input" id="Badger" type="number" @keyup="save('Badger', 'Badger')">
              </div>
        
              <div class="move-lower">
                <label>Bat</label>
                <input class="dark-input" id="Bat" type="number" @keyup="save('Bat', 'Bat')">
              </div>
        
              <div class="move-lower">
                <label>Cat</label>
                <input class="dark-input" id="Cat" type="number" @keyup="save('Cat', 'Cat')">
              </div>
        
              <div class="move-lower">
                <label>Commoner</label>
                <input class="dark-input" id="Commoner" type="number" @keyup="save('Commoner', 'Commoner')">
              </div>
        
              <div class="move-lower">
                <label>Crab</label>
                <input class="dark-input" id="Crab" type="number" @keyup="save('Crab', 'Crab')">
              </div>
        
              <div class="move-lower">
                <label>Deer</label>
                <input class="dark-input" id="Deer" type="number" @keyup="save('Deer', 'Deer')">
              </div>
        
              <div class="move-lower">
                <label>Eagle</label>
                <input class="dark-input" id="Eagle" type="number" @keyup="save('Eagle', 'Eagle')">
              </div>
        
              <div class="move-lower">
                <label>Frog</label>
                <input class="dark-input" id="Frog" type="number" @keyup="save('Frog', 'Frog')">
              </div>
        
              <div class="move-lower">
                <label>Giant Fire Beetle</label>
                <input class="dark-input" id="GiantFireBeetle" type="number" @keyup="save('GiantFireBeetle', 'Giant Fire Beetle')">
              </div>
        
              <div class="move-lower">
                <label>Goat</label>
                <input class="dark-input" id="Goat" type="number" @keyup="save('Goat', 'Goat')">
              </div>
        
              <div class="move-lower">
                <label>Hawk</label>
                <input class="dark-input" id="Hawk" type="number" @keyup="save('Hawk', 'Hawk')">
              </div>
        
              <div class="move-lower">
                <label>Homunculus</label>
                <input class="dark-input" id="Homunculus" type="number" @keyup="save('Homunculus', 'Homunculus')">
              </div>
        
              <div class="move-lower">
                <label>Hyena</label>
                <input class="dark-input" id="Hyena" type="number" @keyup="save('Hyena', 'Hyena')">
              </div>
        
              <div class="move-lower">
                <label>Jackal</label>
                <input class="dark-input" id="Jackal" type="number" @keyup="save('Jackal', 'Jackal')">
              </div>
        
              <div class="move-lower">
                <label>Lemure</label>
                <input class="dark-input" id="Lemure" type="number" @keyup="save('Lemure', 'Lemure')">
              </div>
        
              <div class="move-lower">
                <label>Lizard</label>
                <input class="dark-input" id="Lizard" type="number" @keyup="save('Lizard', 'Lizard')">
              </div>
        
              <div class="move-lower">
                <label>Octopus</label>
                <input class="dark-input" id="Octopus" type="number" @keyup="save('Octopus', 'Octopus')">
              </div>
        
              <div class="move-lower">
                <label>Owl</label>
                <input class="dark-input" id="Owl" type="number" @keyup="save('Owl', 'Owl')">
              </div>
        
              <div class="move-lower">
                <label>Quipper</label>
                <input class="dark-input" id="Quipper" type="number" @keyup="save('Quipper', 'Quipper')">
              </div>
        
              <div class="move-lower">
                <label>Rat</label>
                <input class="dark-input" id="Rat" type="number" @keyup="save('Rat', 'Rat')">
              </div>
        
              <div class="move-lower">
                <label>Raven</label>
                <input class="dark-input" id="Raven" type="number" @keyup="save('Raven', 'Raven')">
              </div>
        
              <div class="move-lower">
                <label>Scorpion</label>
                <input class="dark-input" id="Scorpion" type="number" @keyup="save('Scorpion', 'Scorpion')">
              </div>
        
              <div class="move-lower">
                <label>Sea Horse</label>
                <input class="dark-input" id="SeaHorse" type="number" @keyup="save('SeaHorse', 'Sea Horse')">
              </div>
        
              <div class="move-lower">
                <label>Shrieker</label>
                <input class="dark-input" id="Shrieker" type="number" @keyup="save('Shrieker', 'Shrieker')">
              </div>
        
              <div class="move-lower">
                <label>Spider</label>
                <input class="dark-input" id="Spider" type="number" @keyup="save('Spider', 'Spider')">
              </div>
        
              <div class="move-lower">
                <label>Vulture</label>
                <input class="dark-input" id="Vulture" type="number" @keyup="save('Vulture', 'Vulture')">
              </div>
        
              <div class="move-lower">
                <label>Weasel</label>
                <input class="dark-input" id="Weasel" type="number" @keyup="save('Weasel', 'Weasel')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 1/8 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Bandit</label>
                <input class="dark-input" id="Bandit" type="number" @keyup="save('Bandit', 'Bandit')">
              </div>
        
              <div class="move-lower">
                <label>Blood Hawk</label>
                <input class="dark-input" id="BloodHawk" type="number" @keyup="save('BloodHawk', 'Blood Hawk')">
              </div>
        
              <div class="move-lower">
                <label>Camel</label>
                <input class="dark-input" id="Camel" type="number" @keyup="save('Camel', 'Camel')">
              </div>
        
              <div class="move-lower">
                <label>Cultist</label>
                <input class="dark-input" id="Cultist" type="number" @keyup="save('Cultist', 'Cultist')">
              </div>
        
              <div class="move-lower">
                <label>Flying Snake</label>
                <input class="dark-input" id="FlyingSnake" type="number" @keyup="save('FlyingSnake', 'Flying Snake')">
              </div>
        
              <div class="move-lower">
                <label>Giant Crab</label>
                <input class="dark-input" id="GiantCrab" type="number" @keyup="save('GiantCrab', 'Giant Crab')">
              </div>
        
              <div class="move-lower">
                <label>Giant Rat</label>
                <input class="dark-input" id="GiantRat" type="number" @keyup="save('GiantRat', 'Giant Rat')">
              </div>
        
              <div class="move-lower">
                <label>Giant Weasel</label>
                <input class="dark-input" id="GiantWeasel" type="number" @keyup="save('GiantWeasel', 'Giant Weasel')">
              </div>
        
              <div class="move-lower">
                <label>Guard</label>
                <input class="dark-input" id="Guard" type="number" @keyup="save('Guard', 'Guard')">
              </div>
        
              <div class="move-lower">
                <label>Kobold</label>
                <input class="dark-input" id="Kobold" type="number" @keyup="save('Kobold', 'Kobold')">
              </div>
        
              <div class="move-lower">
                <label>Mastiff</label>
                <input class="dark-input" id="Mastiff" type="number" @keyup="save('Mastiff', 'Mastiff')">
              </div>
        
              <div class="move-lower">
                <label>Merfolk</label>
                <input class="dark-input" id="Merfolk" type="number" @keyup="save('Merfolk', 'Merfolk')">
              </div>
        
              <div class="move-lower">
                <label>Mule</label>
                <input class="dark-input" id="Mule" type="number" @keyup="save('Mule', 'Mule')">
              </div>
        
              <div class="move-lower">
                <label>Noble</label>
                <input class="dark-input" id="Noble" type="number" @keyup="save('Noble', 'Noble')">
              </div>
        
              <div class="move-lower">
                <label>Poisonous Snake</label>
                <input class="dark-input" id="PoisonousSnake" type="number" @keyup="save('PoisonousSnake', 'Poisonous Snake')">
              </div>
        
              <div class="move-lower">
                <label>Pony</label>
                <input class="dark-input" id="Pony" type="number" @keyup="save('Pony', 'Pony')">
              </div>
        
              <div class="move-lower">
                <label>Stirge</label>
                <input class="dark-input" id="Stirge" type="number" @keyup="save('Stirge', 'Stirge')">
              </div>
        
              <div class="move-lower">
                <label>Tribal Warrior</label>
                <input class="dark-input" id="TribalWarrior" type="number" @keyup="save('TribalWarrior', 'Tribal Warrior')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 1/4 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Acolyte</label>
                <input class="dark-input" id="Acolyte" type="number" @keyup="save('Acolyte', 'Acolyte')">
              </div>
        
              <div class="move-lower">
                <label>Axe Beak</label>
                <input class="dark-input" id="AxeBeak" type="number" @keyup="save('AxeBeak', 'Axe Beak')">
              </div>
        
              <div class="move-lower">
                <label>Blink Dog</label>
                <input class="dark-input" id="BlinkDog" type="number" @keyup="save('BlinkDog', 'Blink Dog')">
              </div>
        
              <div class="move-lower">
                <label>Boar</label>
                <input class="dark-input" id="Boar" type="number" @keyup="save('Boar', 'Boar')">
              </div>
        
              <div class="move-lower">
                <label>Constrictor Snake</label>
                <input class="dark-input" id="ConstrictorSnake" type="number" @keyup="save('ConstrictorSnake', 'Constrictor Snake')">
              </div>
        
              <div class="move-lower">
                <label>Draft Horse</label>
                <input class="dark-input" id="DraftHorse" type="number" @keyup="save('DraftHorse', 'Draft Horse')">
              </div>
        
              <div class="move-lower">
                <label>Dretch</label>
                <input class="dark-input" id="Dretch" type="number" @keyup="save('Dretch', 'Dretch')">
              </div>
        
              <div class="move-lower">
                <label>Drow Elf</label>
                <input class="dark-input" id="DrowElf" type="number" @keyup="save('DrowElf', 'Drow Elf')">
              </div>
        
              <div class="move-lower">
                <label>Elk</label>
                <input class="dark-input" id="Elk" type="number" @keyup="save('Elk', 'Elk')">
              </div>
        
              <div class="move-lower">
                <label>Flying Sword</label>
                <input class="dark-input" id="FlyingSword" type="number" @keyup="save('FlyingSword', 'Flying Sword')">
              </div>
        
              <div class="move-lower">
                <label>Giant Badger</label>
                <input class="dark-input" id="GiantBadger" type="number" @keyup="save('GiantBadger', 'Giant Badger')">
              </div>
        
              <div class="move-lower">
                <label>Giant Bat</label>
                <input class="dark-input" id="GiantBat" type="number" @keyup="save('GiantBat', 'Giant Bat')">
              </div>
        
              <div class="move-lower">
                <label>Giant Centipede</label>
                <input class="dark-input" id="GiantCentipede" type="number" @keyup="save('GiantCentipede', 'Giant Centipede')">
              </div>
        
              <div class="move-lower">
                <label>Giant Frog</label>
                <input class="dark-input" id="GiantFrog" type="number" @keyup="save('GiantFrog', 'Giant Frog')">
              </div>
        
              <div class="move-lower">
                <label>Giant Lizard</label>
                <input class="dark-input" id="GiantLizard" type="number" @keyup="save('GiantLizard', 'Giant Lizard')">
              </div>
        
              <div class="move-lower">
                <label>Giant Owl</label>
                <input class="dark-input" id="GiantOwl" type="number" @keyup="save('GiantOwl', 'Giant Owl')">
              </div>
        
              <div class="move-lower">
                <label>Giant Poisonous Snake</label>
                <input class="dark-input" id="GiantPoisonousSnake" type="number" @keyup="save('GiantPoisonousSnake', 'Giant Poisonous Snake')">
              </div>
        
              <div class="move-lower">
                <label>Giant Wolf Spider</label>
                <input class="dark-input" id="GiantWolfSpider" type="number" @keyup="save('GiantWolfSpider', 'Giant Wolf Spider')">
              </div>
        
              <div class="move-lower">
                <label>Goblin</label>
                <input class="dark-input" id="Goblin" type="number" @keyup="save('Goblin', 'Goblin')">
              </div>
        
              <div class="move-lower">
                <label>Grimlock</label>
                <input class="dark-input" id="Grimlock" type="number" @keyup="save('Grimlock', 'Grimlock')">
              </div>
        
              <div class="move-lower">
                <label>Panther</label>
                <input class="dark-input" id="Panther" type="number" @keyup="save('Panther', 'Panther')">
              </div>
        
              <div class="move-lower">
                <label>Pseudodragon</label>
                <input class="dark-input" id="Pseudodragon" type="number" @keyup="save('Pseudodragon', 'Pseudodragon')">
              </div>
        
              <div class="move-lower">
                <label>Riding Horse</label>
                <input class="dark-input" id="RidingHorse" type="number" @keyup="save('RidingHorse', 'Riding Horse')">
              </div>
        
              <div class="move-lower">
                <label>Skeleton</label>
                <input class="dark-input" id="Skeleton" type="number" @keyup="save('Skeleton', 'Skeleton')">
              </div>
        
              <div class="move-lower">
                <label>Sprite</label>
                <input class="dark-input" id="Sprite" type="number" @keyup="save('Sprite', 'Sprite')">
              </div>
        
              <div class="move-lower">
                <label>Steam Mephit</label>
                <input class="dark-input" id="SteamMephit" type="number" @keyup="save('SteamMephit', 'Steam Mephit')">
              </div>
        
              <div class="move-lower">
                <label>Swarm Of Bats</label>
                <input class="dark-input" id="SwarmOfBats" type="number" @keyup="save('SwarmOfBats', 'Swarm Of Bats')">
              </div>
        
              <div class="move-lower">
                <label>Swarm Of Rats</label>
                <input class="dark-input" id="SwarmOfRats" type="number" @keyup="save('SwarmOfRats', 'Swarm Of Rats')">
              </div>
        
              <div class="move-lower">
                <label>Swarm Of Ravens</label>
                <input class="dark-input" id="SwarmOfRavens" type="number" @keyup="save('SwarmOfRavens', 'Swarm Of Ravens')">
              </div>
        
              <div class="move-lower">
                <label>Violet Fungus</label>
                <input class="dark-input" id="VioletFungus" type="number" @keyup="save('VioletFungus', 'Violet Fungus')">
              </div>
        
              <div class="move-lower">
                <label>Wolf</label>
                <input class="dark-input" id="Wolf" type="number" @keyup="save('Wolf', 'Wolf')">
              </div>
        
              <div class="move-lower">
                <label>Zombie</label>
                <input class="dark-input" id="Zombie" type="number" @keyup="save('Zombie', 'Zombie')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 1/2 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Ape</label>
                <input class="dark-input" id="Ape" type="number" @keyup="save('Ape', 'Ape')">
              </div>
        
              <div class="move-lower">
                <label>Black Bear</label>
                <input class="dark-input" id="BlackBear" type="number" @keyup="save('BlackBear', 'Black Bear')">
              </div>
        
              <div class="move-lower">
                <label>Cockatrice</label>
                <input class="dark-input" id="Cockatrice" type="number" @keyup="save('Cockatrice', 'Cockatrice')">
              </div>
        
              <div class="move-lower">
                <label>Crocodile</label>
                <input class="dark-input" id="Crocodile" type="number" @keyup="save('Crocodile', 'Crocodile')">
              </div>
        
              <div class="move-lower">
                <label>Darkmantle</label>
                <input class="dark-input" id="Darkmantle" type="number" @keyup="save('Darkmantle', 'Darkmantle')">
              </div>
        
              <div class="move-lower">
                <label>Deep Gnome</label>
                <input class="dark-input" id="DeepGnome" type="number" @keyup="save('DeepGnome', 'Deep Gnome')">
              </div>
        
              <div class="move-lower">
                <label>Dust Mephit</label>
                <input class="dark-input" id="DustMephit" type="number" @keyup="save('DustMephit', 'Dust Mephit')">
              </div>
        
              <div class="move-lower">
                <label>Giant Goat</label>
                <input class="dark-input" id="GiantGoat" type="number" @keyup="save('GiantGoat', 'Giant Goat')">
              </div>
        
              <div class="move-lower">
                <label>Giant Sea Horse</label>
                <input class="dark-input" id="GiantSeaHorse" type="number" @keyup="save('GiantSeaHorse', 'Giant Sea Horse')">
              </div>
        
              <div class="move-lower">
                <label>Giant Wasp</label>
                <input class="dark-input" id="GiantWasp" type="number" @keyup="save('GiantWasp', 'Giant Wasp')">
              </div>
        
              <div class="move-lower">
                <label>Gnoll</label>
                <input class="dark-input" id="Gnoll" type="number" @keyup="save('Gnoll', 'Gnoll')">
              </div>
        
              <div class="move-lower">
                <label>Gray Ooze</label>
                <input class="dark-input" id="GrayOoze" type="number" @keyup="save('GrayOoze', 'Gray Ooze')">
              </div>
        
              <div class="move-lower">
                <label>Hobgolbin</label>
                <input class="dark-input" id="Hobgoblin" type="number" @keyup="save('Hobgoblin', 'Hobgoblin')">
              </div>
        
              <div class="move-lower">
                <label>Ice Mephit</label>
                <input class="dark-input" id="IceMephit" type="number" @keyup="save('IceMephit', 'Ice Mephit')">
              </div>
        
              <div class="move-lower">
                <label>Lizardfolk</label>
                <input class="dark-input" id="Lizardfolk" type="number" @keyup="save('Lizardfolk', 'Lizardfolk')">
              </div>
        
              <div class="move-lower">
                <label>Magma Mephit</label>
                <input class="dark-input" id="MagmaMephit" type="number" @keyup="save('MagmaMephit', 'Magma Mephit')">
              </div>
        
              <div class="move-lower">
                <label>Magmin</label>
                <input class="dark-input" id="Magmin" type="number" @keyup="save('Magmin', 'Magmin')">
              </div>
        
              <div class="move-lower">
                <label>Orc</label>
                <input class="dark-input" id="Orc" type="number" @keyup="save('Orc', 'Orc')">
              </div>
        
              <div class="move-lower">
                <label>Reef Shark</label>
                <input class="dark-input" id="ReefShark" type="number" @keyup="save('ReefShark', 'Reef Shark')">
              </div>
        
              <div class="move-lower">
                <label>Rust Monster</label>
                <input class="dark-input" id="RustMonster" type="number" @keyup="save('RustMonster', 'Rust Monster')">
              </div>
        
              <div class="move-lower">
                <label>Sahuagin</label>
                <input class="dark-input" id="Sahuagin" type="number" @keyup="save('Sahuagin', 'Sahuagin')">
              </div>
        
              <div class="move-lower">
                <label>Satyr</label>
                <input class="dark-input" id="Satyr" type="number" @keyup="save('Satyr', 'Satyr')">
              </div>
        
              <div class="move-lower">
                <label>Scout</label>
                <input class="dark-input" id="Scout" type="number" @keyup="save('Scout', 'Scout')">
              </div>
        
              <div class="move-lower">
                <label>Shadow</label>
                <input class="dark-input" id="Shadow" type="number" @keyup="save('Shadow', 'Shadow')">
              </div>
        
              <div class="move-lower">
                <label>Swarm Of Insects</label>
                <input class="dark-input" id="SwarmOfInsects" type="number" @keyup="save('SwarmOfInsects', 'Swarm Of Insects')">
              </div>
        
              <div class="move-lower">
                <label>Thug</label>
                <input class="dark-input" id="Thug" type="number" @keyup="save('Thug', 'Thug')">
              </div>
        
              <div class="move-lower">
                <label>Warhorse</label>
                <input class="dark-input" id="Warhorse" type="number" @keyup="save('Warhorse', 'Warhorse')">
              </div>
        
              <div class="move-lower">
                <label>Warhorse Skeleton</label>
                <input class="dark-input" id="WarhorseSkeleton" type="number" @keyup="save('WarhorseSkeleton', 'Warhorse Skeleton')">
              </div>
        
              <div class="move-lower">
                <label>Worg</label>
                <input class="dark-input" id="Worg" type="number" @keyup="save('Worg', 'Worg')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 1 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Animated Armor</label>
                <input class="dark-input" id="AnimatedArmor" type="number" @keyup="save('AnimatedArmor', 'Animated Armor')">
              </div>
        
              <div class="move-lower">
                <label>Brass Dragon Wyrmling</label>
                <input class="dark-input" id="BrassDragonWyrmling" type="number" @keyup="save('BrassDragonWyrmling', 'Brass Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Brown Bear</label>
                <input class="dark-input" id="BrownBear" type="number" @keyup="save('BrownBear', 'Brown Bear')">
              </div>
        
              <div class="move-lower">
                <label>Bugbear</label>
                <input class="dark-input" id="Bugbear" type="number" @keyup="save('Bugbear', 'Bugbear')">
              </div>
        
              <div class="move-lower">
                <label>Copper Dragon Wyrmling</label>
                <input class="dark-input" id="CopperDragonWyrmling" type="number" @keyup="save('CopperDragonWyrmling', 'Copper Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Death Dog</label>
                <input class="dark-input" id="DeathDog" type="number" @keyup="save('DeathDog', 'Death Dog')">
              </div>
        
              <div class="move-lower">
                <label>Dire Wolf</label>
                <input class="dark-input" id="DireWolf" type="number" @keyup="save('DireWolf', 'Dire Wolf')">
              </div>
        
              <div class="move-lower">
                <label>Dryad</label>
                <input class="dark-input" id="Dryad" type="number" @keyup="save('Dryad', 'Dryad')">
              </div>
        
              <div class="move-lower">
                <label>Duergar</label>
                <input class="dark-input" id="Duergar" type="number" @keyup="save('Duergar', 'Duergar')">
              </div>
        
              <div class="move-lower">
                <label>Ghoul</label>
                <input class="dark-input" id="Ghoul" type="number" @keyup="save('Ghoul', 'Ghoul')">
              </div>
        
              <div class="move-lower">
                <label>Giant Eagle</label>
                <input class="dark-input" id="GiantEagle" type="number" @keyup="save('GiantEagle', 'Giant Eagle')">
              </div>
        
              <div class="move-lower">
                <label>Giant Hyena</label>
                <input class="dark-input" id="GiantHyena" type="number" @keyup="save('GiantHyena', 'Giant Hyena')">
              </div>
        
              <div class="move-lower">
                <label>Giant Octopus</label>
                <input class="dark-input" id="GiantOctopus" type="number" @keyup="save('GiantOctopus', 'Giant Octopus')">
              </div>
        
              <div class="move-lower">
                <label>Giant Spider</label>
                <input class="dark-input" id="GiantSpider" type="number" @keyup="save('GiantSpider', 'Giant Spider')">
              </div>
        
              <div class="move-lower">
                <label>Giant Toad</label>
                <input class="dark-input" id="GiantToad" type="number" @keyup="save('GiantToad', 'Giant Toad')">
              </div>
        
              <div class="move-lower">
                <label>Giant Vulture</label>
                <input class="dark-input" id="GiantVulture" type="number" @keyup="save('GiantVulture', 'Giant Vulture')">
              </div>
        
              <div class="move-lower">
                <label>Harpy</label>
                <input class="dark-input" id="Harpy" type="number" @keyup="save('Harpy', 'Harpy')">
              </div>
        
              <div class="move-lower">
                <label>Hippogriff</label>
                <input class="dark-input" id="Hippogriff" type="number" @keyup="save('Hippogriff', 'Hippogriff')">
              </div>
        
              <div class="move-lower">
                <label>Imp</label>
                <input class="dark-input" id="Imp" type="number" @keyup="save('Imp', 'Imp')">
              </div>
        
              <div class="move-lower">
                <label>Lion</label>
                <input class="dark-input" id="Lion" type="number" @keyup="save('Lion', 'Lion')">
              </div>
        
              <div class="move-lower">
                <label>Quasit</label>
                <input class="dark-input" id="Quasit" type="number" @keyup="save('Quasit', 'Quasit')">
              </div>
        
              <div class="move-lower">
                <label>Specter</label>
                <input class="dark-input" id="Specter" type="number" @keyup="save('Specter', 'Specter')">
              </div>
        
              <div class="move-lower">
                <label>Spy</label>
                <input class="dark-input" id="Spy" type="number" @keyup="save('Spy', 'Spy')">
              </div>
        
              <div class="move-lower">
                <label>Swarm Of Quippers</label>
                <input class="dark-input" id="SwarmOfQuippers" type="number" @keyup="save('SwarmOfQuippers', 'Swarm Of Quippers')">
              </div>
        
              <div class="move-lower">
                <label>Tiger</label>
                <input class="dark-input" id="Tiger" type="number" @keyup="save('Tiger', 'Tiger')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 2 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Ankheg</label>
                <input class="dark-input" id="Ankheg" type="number" @keyup="save('Ankheg', 'Ankheg')">
              </div>
        
              <div class="move-lower">
                <label>Awakened Tree</label>
                <input class="dark-input" id="AwakenedTree" type="number" @keyup="save('AwakenedTree', 'Awakened Tree')">
              </div>
        
              <div class="move-lower">
                <label>Azer</label>
                <input class="dark-input" id="Azer" type="number" @keyup="save('Azer', 'Azer')">
              </div>
        
              <div class="move-lower">
                <label>Bandit Captain</label>
                <input class="dark-input" id="BanditCaptain" type="number" @keyup="save('BanditCaptain', 'Bandit Captain')">
              </div>
        
              <div class="move-lower">
                <label>Berserker</label>
                <input class="dark-input" id="Berserker" type="number" @keyup="save('Berserker', 'Berserker')">
              </div>
        
              <div class="move-lower">
                <label>Black Dragon Wyrmling</label>
                <input class="dark-input" id="BlackDragonWyrmling" type="number" @keyup="save('BlackDragonWyrmling', 'Black Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Bronze Dragon Wyrmling</label>
                <input class="dark-input" id="BronzeDragonWyrmling" type="number" @keyup="save('BronzeDragonWyrmling', 'Bronze Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Centaur</label>
                <input class="dark-input" id="Centaur" type="number" @keyup="save('Centaur', 'Centaur')">
              </div>
        
              <div class="move-lower">
                <label>Cult Fanatic</label>
                <input class="dark-input" id="CultFanatic" type="number" @keyup="save('CultFanatic', 'Cult Fanatic')">
              </div>
        
              <div class="move-lower">
                <label>Druid</label>
                <input class="dark-input" id="Druid" type="number" @keyup="save('Druid', 'Druid')">
              </div>
        
              <div class="move-lower">
                <label>Ettercap</label>
                <input class="dark-input" id="Ettercap" type="number" @keyup="save('Ettercap', 'Ettercap')">
              </div>
        
              <div class="move-lower">
                <label>Gargoyle</label>
                <input class="dark-input" id="Gargoyle" type="number" @keyup="save('Gargoyle', 'Gargoyle')">
              </div>
        
              <div class="move-lower">
                <label>Gelatinous Cube</label>
                <input class="dark-input" id="GelatinousCube" type="number" @keyup="save('GelatinousCube', 'Gelatinous Cube')">
              </div>
        
              <div class="move-lower">
                <label>Ghast</label>
                <input class="dark-input" id="Ghast" type="number" @keyup="save('Ghast', 'Ghast')">
              </div>
        
              <div class="move-lower">
                <label>Giant Boar</label>
                <input class="dark-input" id="GiantBoar" type="number" @keyup="save('GiantBoar', 'Giant Boar')">
              </div>
        
              <div class="move-lower">
                <label>Giant Constrictor Snake</label>
                <input class="dark-input" id="GiantConstrictorSnake" type="number" @keyup="save('GiantConstrictorSnake', 'Giant Constrictor Snake')">
              </div>
        
              <div class="move-lower">
                <label>Giant Elk</label>
                <input class="dark-input" id="GiantElk" type="number" @keyup="save('GiantElk', 'Giant Elk')">
              </div>
        
              <div class="move-lower">
                <label>Gibbering Mouther</label>
                <input class="dark-input" id="GibberingMouther" type="number" @keyup="save('GibberingMouther', 'Gibbering Mouther')">
              </div>
        
              <div class="move-lower">
                <label>Green Dragon Wyrmling</label>
                <input class="dark-input" id="GreenDragonWyrmling" type="number" @keyup="save('GreenDragonWyrmling', 'Green Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Grick</label>
                <input class="dark-input" id="Grick" type="number" @keyup="save('Grick', 'Grick')">
              </div>
        
              <div class="move-lower">
                <label>Griffon</label>
                <input class="dark-input" id="Griffon" type="number" @keyup="save('Griffon', 'Griffon')">
              </div>
        
              <div class="move-lower">
                <label>Hunter Shark</label>
                <input class="dark-input" id="HunterShark" type="number" @keyup="save('HunterShark', 'Hunter Shark')">
              </div>
        
              <div class="move-lower">
                <label>Merrow</label>
                <input class="dark-input" id="Merrow" type="number" @keyup="save('Merrow', 'Merrow')">
              </div>
        
              <div class="move-lower">
                <label>Mimic</label>
                <input class="dark-input" id="Mimic" type="number" @keyup="save('Mimic', 'Mimic')">
              </div>
        
              <div class="move-lower">
                <label>Minotaur Skeleton</label>
                <input class="dark-input" id="MinotaurSkeleton" type="number" @keyup="save('MinotaurSkeleton', 'Minotaur Skeleton')">
              </div>
        
              <div class="move-lower">
                <label>Ochre Jelly</label>
                <input class="dark-input" id="OchreJelly" type="number" @keyup="save('OchreJelly', 'Ochre Jelly')">
              </div>
        
              <div class="move-lower">
                <label>Ogre</label>
                <input class="dark-input" id="Ogre" type="number" @keyup="save('Ogre', 'Ogre')">
              </div>
        
              <div class="move-lower">
                <label>Ogre Zombie</label>
                <input class="dark-input" id="OgreZombie" type="number" @keyup="save('OgreZombie', 'Ogre Zombie')">
              </div>
        
              <div class="move-lower">
                <label>Pegasus</label>
                <input class="dark-input" id="Pegasus" type="number" @keyup="save('Pegasus', 'Pegasus')">
              </div>
        
              <div class="move-lower">
                <label>Plesiosaurus</label>
                <input class="dark-input" id="Plesiosaurus" type="number" @keyup="save('Plesiosaurus', 'Plesiosaurus')">
              </div>
        
              <div class="move-lower">
                <label>Polar Bear</label>
                <input class="dark-input" id="PolarBear" type="number" @keyup="save('PolarBear', 'Polar Bear')">
              </div>
        
              <div class="move-lower">
                <label>Priest</label>
                <input class="dark-input" id="Priest" type="number" @keyup="save('Priest', 'Priest')">
              </div>
        
              <div class="move-lower">
                <label>Rhinoceros</label>
                <input class="dark-input" id="Rhinoceros" type="number" @keyup="save('Rhinoceros', 'Rhinoceros')">
              </div>
        
              <div class="move-lower">
                <label>Rug Of Smothering</label>
                <input class="dark-input" id="RugOfSmothering" type="number" @keyup="save('RugOfSmothering', 'Rug Of Smothering')">
              </div>
        
              <div class="move-lower">
                <label>Saber-Toothed Tiger</label>
                <input class="dark-input" id="SaberToothedTiger" type="number" @keyup="save('SaberToothedTiger', 'Saber-Toothed Tiger')">
              </div>
        
              <div class="move-lower">
                <label>Sea Hag</label>
                <input class="dark-input" id="SeaHag" type="number" @keyup="save('SeaHag', 'Sea Hag')">
              </div>
        
              <div class="move-lower">
                <label>Silver Dragon Wyrmling</label>
                <input class="dark-input" id="SilverDragonWyrmling" type="number" @keyup="save('SilverDragonWyrmling', 'Silver Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Swarm Of Poisonous Snakes</label>
                <input class="dark-input" id="SwarmOfPoisonousSnakes" type="number" @keyup="save('SwarmOfPoisonousSnakes', 'Swarm Of Poisonous Snakes')">
              </div>
        
              <div class="move-lower">
                <label>Wererat</label>
                <input class="dark-input" id="Wererat" type="number" @keyup="save('Wererat', 'Wererat')">
              </div>
        
              <div class="move-lower">
                <label>White Dragon Wyrmling</label>
                <input class="dark-input" id="WhiteDragonWyrmling" type="number" @keyup="save('WhiteDragonWyrmling', 'White Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Will-o-Wisp</label>
                <input class="dark-input" id="WillOWisp" type="number" @keyup="save('WillOWisp', 'Will-o-Wisp')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 3 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Basilisk</label>
                <input class="dark-input" id="Basilisk" type="number" @keyup="save('Basilisk', 'Basilisk')">
              </div>
        
              <div class="move-lower">
                <label>Bearded Devil</label>
                <input class="dark-input" id="BeardedDevil" type="number" @keyup="save('BeardedDevil', 'Bearded Devil')">
              </div>
        
              <div class="move-lower">
                <label>Blue Dragon Wyrmling</label>
                <input class="dark-input" id="BlueDragonWyrmling" type="number" @keyup="save('BlueDragonWyrmling', 'Blue Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Doppelganger</label>
                <input class="dark-input" id="Doppelganger" type="number" @keyup="save('Doppelganger', 'Doppelganger')">
              </div>
        
              <div class="move-lower">
                <label>Giant Scorpion</label>
                <input class="dark-input" id="GiantScorpion" type="number" @keyup="save('GiantScorpion', 'Giant Scorpion')">
              </div>
        
              <div class="move-lower">
                <label>Gold Dragon Wyrmling</label>
                <input class="dark-input" id="GoldDragonWyrmling" type="number" @keyup="save('GoldDragonWyrmling', 'Gold Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Green Hag</label>
                <input class="dark-input" id="GreenHag" type="number" @keyup="save('GreenHag', 'Green Hag')">
              </div>
        
              <div class="move-lower">
                <label>Hell Hound</label>
                <input class="dark-input" id="HellHound" type="number" @keyup="save('HellHound', 'Hell Hound')">
              </div>
        
              <div class="move-lower">
                <label>Killer Whale</label>
                <input class="dark-input" id="KillerWhale" type="number" @keyup="save('KillerWhale', 'Killer Whale')">
              </div>
        
              <div class="move-lower">
                <label>Knight</label>
                <input class="dark-input" id="Knight" type="number" @keyup="save('Knight', 'Knight')">
              </div>
        
              <div class="move-lower">
                <label>Manticore</label>
                <input class="dark-input" id="Manticore" type="number" @keyup="save('Manticore', 'Manticore')">
              </div>
        
              <div class="move-lower">
                <label>Minotaur</label>
                <input class="dark-input" id="Minotaur" type="number" @keyup="save('Minotaur', 'Minotaur')">
              </div>
        
              <div class="move-lower">
                <label>Mummy</label>
                <input class="dark-input" id="Mummy" type="number" @keyup="save('Mummy', 'Mummy')">
              </div>
        
              <div class="move-lower">
                <label>Nightmare</label>
                <input class="dark-input" id="Nightmare" type="number" @keyup="save('Nightmare', 'Nightmare')">
              </div>
        
              <div class="move-lower">
                <label>Owlbear</label>
                <input class="dark-input" id="Owlbear" type="number" @keyup="save('Owlbear', 'Owlbear')">
              </div>
        
              <div class="move-lower">
                <label>Phase Spider</label>
                <input class="dark-input" id="PhaseSpider" type="number" @keyup="save('PhaseSpider', 'Phase Spider')">
              </div>
        
              <div class="move-lower">
                <label>Veteran</label>
                <input class="dark-input" id="Veteran" type="number" @keyup="save('Veteran', 'Veteran')">
              </div>
        
              <div class="move-lower">
                <label>Werewolf</label>
                <input class="dark-input" id="Werewolf" type="number" @keyup="save('Werewolf', 'Werewolf')">
              </div>
        
              <div class="move-lower">
                <label>Wight</label>
                <input class="dark-input" id="Wight" type="number" @keyup="save('Wight', 'Wight')">
              </div>
        
              <div class="move-lower">
                <label>Winter Wolf</label>
                <input class="dark-input" id="WinterWolf" type="number" @keyup="save('WinterWolf', 'Winter Wolf')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 4 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Black Pudding</label>
                <input class="dark-input" id="BlackPudding" type="number" @keyup="save('BlackPudding', 'Black Pudding')">
              </div>
        
              <div class="move-lower">
                <label>Chuul</label>
                <input class="dark-input" id="Chuul" type="number" @keyup="save('Chuul', 'Chuul')">
              </div>
        
              <div class="move-lower">
                <label>Couatl</label>
                <input class="dark-input" id="Couatl" type="number" @keyup="save('Couatl', 'Couatl')">
              </div>
        
              <div class="move-lower">
                <label>Elephant</label>
                <input class="dark-input" id="Elephant" type="number" @keyup="save('Elephant', 'Elephant')">
              </div>
        
              <div class="move-lower">
                <label>Ettin</label>
                <input class="dark-input" id="Ettin" type="number" @keyup="save('Ettin', 'Ettin')">
              </div>
        
              <div class="move-lower">
                <label>Ghost</label>
                <input class="dark-input" id="Ghost" type="number" @keyup="save('Ghost', 'Ghost')">
              </div>
        
              <div class="move-lower">
                <label>Lamia</label>
                <input class="dark-input" id="Lamia" type="number" @keyup="save('Lamia', 'Lamia')">
              </div>
        
              <div class="move-lower">
                <label>Red Dragon Wyrmling</label>
                <input class="dark-input" id="RedDragonWyrmling" type="number" @keyup="save('RedDragonWyrmling', 'Red Dragon Wyrmling')">
              </div>
        
              <div class="move-lower">
                <label>Succubus/Incubus</label>
                <input class="dark-input" id="SuccubusIncubus" type="number" @keyup="save('SuccubusIncubus', 'Succubus/Incubus')">
              </div>
        
              <div class="move-lower">
                <label>Wereboar</label>
                <input class="dark-input" id="Wereboar" type="number" @keyup="save('Wereboar', 'Wereboar')">
              </div>
        
              <div class="move-lower">
                <label>Weretiger</label>
                <input class="dark-input" id="Weretiger" type="number" @keyup="save('Weretiger', 'Weretiger')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 5 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Air Elemental</label>
                <input class="dark-input" id="AirElemental" type="number" @keyup="save('AirElemental', 'Air Elemental')">
              </div>
        
              <div class="move-lower">
                <label>Barbed Devil</label>
                <input class="dark-input" id="BarbedDevil" type="number" @keyup="save('BarbedDevil', 'Barbed Devil')">
              </div>
        
              <div class="move-lower">
                <label>Bulette</label>
                <input class="dark-input" id="Bulette" type="number" @keyup="save('Bulette', 'Bulette')">
              </div>
        
              <div class="move-lower">
                <label>Earth Elemental</label>
                <input class="dark-input" id="EarthElemental" type="number" @keyup="save('EarthElemental', 'Earth Elemental')">
              </div>
        
              <div class="move-lower">
                <label>Fire Elemental</label>
                <input class="dark-input" id="FireElemental" type="number" @keyup="save('FireElemental', 'Fire Elemental')">
              </div>
        
              <div class="move-lower">
                <label>Flesh Golem</label>
                <input class="dark-input" id="FleshGolem" type="number" @keyup="save('FleshGolem', 'Flesh Golem')">
              </div>
        
              <div class="move-lower">
                <label>Giant Crocodile</label>
                <input class="dark-input" id="GiantCrocodile" type="number" @keyup="save('GiantCrocodile', 'Giant Crocodile')">
              </div>
        
              <div class="move-lower">
                <label>Giant Shark</label>
                <input class="dark-input" id="GiantShark" type="number" @keyup="save('GiantShark', 'Giant Shark')">
              </div>
        
              <div class="move-lower">
                <label>Gladiator</label>
                <input class="dark-input" id="Gladiator" type="number" @keyup="save('Gladiator', 'Gladiator')">
              </div>
        
              <div class="move-lower">
                <label>Gorgon</label>
                <input class="dark-input" id="Gorgon" type="number" @keyup="save('Gorgon', 'Gorgon')">
              </div>
        
              <div class="move-lower">
                <label>Half-Red Dragon Veteran</label>
                <input class="dark-input" id="HalfRedDragonVeteran" type="number" @keyup="save('HalfRedDragonVeteran', 'Half-Red Dragon Veteran')">
              </div>
        
              <div class="move-lower">
                <label>Hill Giant</label>
                <input class="dark-input" id="HillGiant" type="number" @keyup="save('HillGiant', 'Hill Giant')">
              </div>
        
              <div class="move-lower">
                <label>Night Hag</label>
                <input class="dark-input" id="NightHag" type="number" @keyup="save('NightHag', 'Night Hag')">
              </div>
        
              <div class="move-lower">
                <label>Otyugh</label>
                <input class="dark-input" id="Otyugh" type="number" @keyup="save('Otyugh', 'Otyugh')">
              </div>
        
              <div class="move-lower">
                <label>Roper</label>
                <input class="dark-input" id="Roper" type="number" @keyup="save('Roper', 'Roper')">
              </div>
        
              <div class="move-lower">
                <label>Salamander</label>
                <input class="dark-input" id="Salamander" type="number" @keyup="save('Salamander', 'Salamander')">
              </div>
        
              <div class="move-lower">
                <label>Shambling Mound</label>
                <input class="dark-input" id="ShamblingMound" type="number" @keyup="save('ShamblingMound', 'Shambling Mound')">
              </div>
        
              <div class="move-lower">
                <label>Triceratops</label>
                <input class="dark-input" id="Triceratops" type="number" @keyup="save('Triceratops', 'Triceratops')">
              </div>
        
              <div class="move-lower">
                <label>Troll</label>
                <input class="dark-input" id="Troll" type="number" @keyup="save('Troll', 'Troll')">
              </div>
        
              <div class="move-lower">
                <label>Unicorn</label>
                <input class="dark-input" id="Unicorn" type="number" @keyup="save('Unicorn', 'Unicorn')">
              </div>
        
              <div class="move-lower">
                <label>Vampire Spawn</label>
                <input class="dark-input" id="VampireSpawn" type="number" @keyup="save('VampireSpawn', 'Vampire Spawn')">
              </div>
        
              <div class="move-lower">
                <label>Water Elemental</label>
                <input class="dark-input" id="WaterElemental" type="number" @keyup="save('WaterElemental', 'Water Elemental')">
              </div>
        
              <div class="move-lower">
                <label>Werebear</label>
                <input class="dark-input" id="Werebear" type="number" @keyup="save('Werebear', 'Werebear')">
              </div>
        
              <div class="move-lower">
                <label>Wraith</label>
                <input class="dark-input" id="Wraith" type="number" @keyup="save('Wraith', 'Wraith')">
              </div>
        
              <div class="move-lower">
                <label>Xorn</label>
                <input class="dark-input" id="Xorn" type="number" @keyup="save('Xorn', 'Xorn')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 6 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Chimera</label>
                <input class="dark-input" id="Chimera" type="number" @keyup="save('Chimera', 'Chimera')">
              </div>
        
              <div class="move-lower">
                <label>Drider</label>
                <input class="dark-input" id="Drider" type="number" @keyup="save('Drider', 'Drider')">
              </div>
        
              <div class="move-lower">
                <label>Invisible Stalker</label>
                <input class="dark-input" id="InvisibleStalker" type="number" @keyup="save('InvisibleStalker', 'Invisible Stalker')">
              </div>
        
              <div class="move-lower">
                <label>Mage</label>
                <input class="dark-input" id="Mage" type="number" @keyup="save('Mage', 'Mage')">
              </div>
        
              <div class="move-lower">
                <label>Mammoth</label>
                <input class="dark-input" id="Mammoth" type="number" @keyup="save('Mammoth', 'Mammoth')">
              </div>
        
              <div class="move-lower">
                <label>Medusa</label>
                <input class="dark-input" id="Medusa" type="number" @keyup="save('Medusa', 'Medusa')">
              </div>
        
              <div class="move-lower">
                <label>Vrock</label>
                <input class="dark-input" id="Vrock" type="number" @keyup="save('Vrock', 'Vrock')">
              </div>
        
              <div class="move-lower">
                <label>Wyvern</label>
                <input class="dark-input" id="Wyvern" type="number" @keyup="save('Wyvern', 'Wyvern')">
              </div>
        
              <div class="move-lower">
                <label>Young Brass Dragon</label>
                <input class="dark-input" id="YoungBrassDragon" type="number" @keyup="save('YoungBrassDragon', 'Young Brass Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Young White Dragon</label>
                <input class="dark-input" id="YoungWhiteDragon" type="number" @keyup="save('YoungWhiteDragon', 'Young White Dragon')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 7 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Giant Ape</label>
                <input class="dark-input" id="GiantApe" type="number" @keyup="save('GiantApe', 'Giant Ape')">
              </div>
        
              <div class="move-lower">
                <label>Oni</label>
                <input class="dark-input" id="Oni" type="number" @keyup="save('Oni', 'Oni')">
              </div>
        
              <div class="move-lower">
                <label>Shield Guardian</label>
                <input class="dark-input" id="ShieldGuardian" type="number" @keyup="save('ShieldGuardian', 'Shield Guardian')">
              </div>
        
              <div class="move-lower">
                <label>Stone Giant</label>
                <input class="dark-input" id="StoneGiant" type="number" @keyup="save('StoneGiant', 'Stone Giant')">
              </div>
        
              <div class="move-lower">
                <label>Young Black Dragon</label>
                <input class="dark-input" id="YoungBlackDragon" type="number" @keyup="save('YoungBlackDragon', 'Young Black Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Young Copper Dragon</label>
                <input class="dark-input" id="YoungCopperDragon" type="number" @keyup="save('YoungCopperDragon', 'Young Copper Dragon')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 8 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Assassin</label>
                <input class="dark-input" id="Assassin" type="number" @keyup="save('Assassin', 'Assassin')">
              </div>
        
              <div class="move-lower">
                <label>Chain Devil</label>
                <input class="dark-input" id="ChainDevil" type="number" @keyup="save('ChainDevil', 'Chain Devil')">
              </div>
        
              <div class="move-lower">
                <label>Cloaker</label>
                <input class="dark-input" id="Cloaker" type="number" @keyup="save('Cloaker', 'Cloaker')">
              </div>
        
              <div class="move-lower">
                <label>FrostGiant</label>
                <input class="dark-input" id="FrostGiant" type="number" @keyup="save('FrostGiant', 'Frost Giant')">
              </div>
        
              <div class="move-lower">
                <label>Hezrou</label>
                <input class="dark-input" id="Hezrou" type="number" @keyup="save('Hezrou', 'Hezrou')">
              </div>
        
              <div class="move-lower">
                <label>Hydra</label>
                <input class="dark-input" id="Hydra" type="number" @keyup="save('Hydra', 'Hydra')">
              </div>
        
              <div class="move-lower">
                <label>SpiritNaga</label>
                <input class="dark-input" id="SpiritNaga" type="number" @keyup="save('SpiritNaga', 'Spirit Naga')">
              </div>
        
              <div class="move-lower">
                <label>TyrannosaurusRex</label>
                <input class="dark-input" id="TyrannosaurusRex" type="number" @keyup="save('TyrannosaurusRex', 'Tyrannosaurus Rex')">
              </div>
        
              <div class="move-lower">
                <label>YoungBronzeDragon</label>
                <input class="dark-input" id="YoungBronzeDragon" type="number" @keyup="save('YoungBronzeDragon', 'Young Bronze Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Young Green Dragon</label>
                <input class="dark-input" id="YoungGreenDragon" type="number" @keyup="save('YoungGreenDragon', 'Young Green Dragon')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 9 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Bone Devil</label>
                <input class="dark-input" id="BoneDevil" type="number" @keyup="save('BoneDevil', 'Bone Devil')">
              </div>
        
              <div class="move-lower">
                <label>Clay Golem</label>
                <input class="dark-input" id="ClayGolem" type="number" @keyup="save('ClayGolem', 'Clay Golem')">
              </div>
        
              <div class="move-lower">
                <label>Cloud Giant</label>
                <input class="dark-input" id="CloudGiant" type="number" @keyup="save('CloudGiant', 'Cloud Giant')">
              </div>
        
              <div class="move-lower">
                <label>Fire Giant</label>
                <input class="dark-input" id="FireGiant" type="number" @keyup="save('FireGiant', 'Fire Giant')">
              </div>
        
              <div class="move-lower">
                <label>Glabrezu</label>
                <input class="dark-input" id="Glabrezu" type="number" @keyup="save('Glabrezu', 'Glabrezu')">
              </div>
        
              <div class="move-lower">
                <label>Treant</label>
                <input class="dark-input" id="Treant" type="number" @keyup="save('Treant', 'Treant')">
              </div>
        
              <div class="move-lower">
                <label>Young Blue Dragon</label>
                <input class="dark-input" id="YoungBlueDragon" type="number" @keyup="save('YoungBlueDragon', 'Young Blue Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Young Silver Dragon</label>
                <input class="dark-input" id="YoungSilverDragon" type="number" @keyup="save('YoungSilverDragon', 'Young Silver Dragon')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 10 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Aboleth</label>
                <input class="dark-input" id="Aboleth" type="number" @keyup="save('Aboleth', 'Aboleth')">
              </div>
        
              <div class="move-lower">
                <label>Deva</label>
                <input class="dark-input" id="Deva" type="number" @keyup="save('Deva', 'Deva')">
              </div>
        
              <div class="move-lower">
                <label>Guardian Naga</label>
                <input class="dark-input" id="GuardianNaga" type="number" @keyup="save('GuardianNaga', 'Guardian Naga')">
              </div>
        
              <div class="move-lower">
                <label>StoneGolem</label>
                <input class="dark-input" id="StoneGolem" type="number" @keyup="save('StoneGolem', 'Stone Golem')">
              </div>
        
              <div class="move-lower">
                <label>Young Gold Dragon</label>
                <input class="dark-input" id="YoungGoldDragon" type="number" @keyup="save('YoungGoldDragon', 'Young Gold Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Young Red Dragon</label>
                <input class="dark-input" id="YoungRedDragon" type="number" @keyup="save('YoungRedDragon', 'Young Red Dragon')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
      
        <f7-list-item accordion-item title="Level 11 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Behir</label>
                <input class="dark-input" id="Behir" type="number" @keyup="save('Behir', 'Behir')">
              </div>
        
              <div class="move-lower">
                <label>Djinni</label>
                <input class="dark-input" id="Djinni" type="number" @keyup="save('Djinni', 'Djinni')">
              </div>
        
              <div class="move-lower">
                <label>Efreeti</label>
                <input class="dark-input" id="Efreeti" type="number" @keyup="save('Efreeti', 'Efreeti')">
              </div>
        
              <div class="move-lower">
                <label>Gynosphinx</label>
                <input class="dark-input" id="Gynosphinx" type="number" @keyup="save('Gynosphinx', 'Gynosphinx')">
              </div>
        
              <div class="move-lower">
                <label>HornedDevil</label>
                <input class="dark-input" id="HornedDevil" type="number" @keyup="save('HornedDevil', 'Horned Devil')">
              </div>
        
              <div class="move-lower">
                <label>Remorhaz</label>
                <input class="dark-input" id="Remorhaz" type="number" @keyup="save('Remorhaz', 'Remorhaz')">
              </div>
        
              <div class="move-lower">
                <label>Roc</label>
                <input class="dark-input" id="Roc" type="number" @keyup="save('Roc', 'Roc')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 12 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Archmage</label>
                <input class="dark-input" id="Archmage" type="number" @keyup="save('Archmage', 'Archmage')">
              </div>
        
              <div class="move-lower">
                <label>Erinyes</label>
                <input class="dark-input" id="Erinyes" type="number" @keyup="save('Erinyes', 'Erinyes')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 13 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Adult Brass Dragon</label>
                <input class="dark-input" id="AdultBrassDragon" type="number" @keyup="save('AdultBrassDragon', 'Adult Brass Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Adult White Dragon</label>
                <input class="dark-input" id="AdultWhiteDragon" type="number" @keyup="save('AdultWhiteDragon', 'Adult White Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Nalfeshnee</label>
                <input class="dark-input" id="Nalfeshnee" type="number" @keyup="save('Nalfeshnee', 'Nalfeshnee')">
              </div>
        
              <div class="move-lower">
                <label>Rakshasa</label>
                <input class="dark-input" id="Rakshasa" type="number" @keyup="save('Rakshasa', 'Rakshasa')">
              </div>
        
              <div class="move-lower">
                <label>StormGiant</label>
                <input class="dark-input" id="StormGiant" type="number" @keyup="save('StormGiant', 'Storm Giant')">
              </div>
        
              <div class="move-lower">
                <label>Vampire</label>
                <input class="dark-input" id="Vampire" type="number" @keyup="save('Vampire', 'Vampire')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 14 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Adult Black Dragon</label>
                <input class="dark-input" id="AdultBlackDragon" type="number" @keyup="save('AdultBlackDragon', 'Adult Black Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Adult Copper Dragon</label>
                <input class="dark-input" id="AdultCopperDragon" type="number" @keyup="save('AdultCopperDragon', 'Adult Copper Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Ice Devil</label>
                <input class="dark-input" id="IceDevil" type="number" @keyup="save('IceDevil', 'Ice Devil')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 15 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Adult Bronze Dragon</label>
                <input class="dark-input" id="AdultBronzeDragon" type="number" @keyup="save('AdultBronzeDragon', 'Adult Bronze Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Adult Green Dragon</label>
                <input class="dark-input" id="AdultGreenDragon" type="number" @keyup="save('AdultGreenDragon', 'Adult Green Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Mummy Lord</label>
                <input class="dark-input" id="MummyLord" type="number" @keyup="save('MummyLord', 'Mummy Lord')">
              </div>
        
              <div class="move-lower">
                <label>Purple Worm</label>
                <input class="dark-input" id="PurpleWorm" type="number" @keyup="save('PurpleWorm', 'Purple Worm')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 16 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Adult Blue Dragon</label>
                <input class="dark-input" id="AdultBlueDragon" type="number" @keyup="save('AdultBlueDragon', 'Adult Blue Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Adult Silver Dragon</label>
                <input class="dark-input" id="AdultSilverDragon" type="number" @keyup="save('AdultSilverDragon', 'Adult Silver Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Iron Golem</label>
                <input class="dark-input" id="IronGolem" type="number" @keyup="save('IronGolem', 'Iron Golem')">
              </div>
        
              <div class="move-lower">
                <label>Marilith</label>
                <input class="dark-input" id="Marilith" type="number" @keyup="save('Marilith', 'Marilith')">
              </div>
        
              <div class="move-lower">
                <label>Planetar</label>
                <input class="dark-input" id="Planetar" type="number" @keyup="save('Planetar', 'Planetar')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 17 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Adult Gold Dragon</label>
                <input class="dark-input" id="AdultGoldDragon" type="number" @keyup="save('AdultGoldDragon', 'Adult Gold Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Adult Red Dragon</label>
                <input class="dark-input" id="AdultRedDragon" type="number" @keyup="save('AdultRedDragon', 'Adult Red Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Androsphinx</label>
                <input class="dark-input" id="Androsphinx" type="number" @keyup="save('Androsphinx', 'Androsphinx')">
              </div>
        
              <div class="move-lower">
                <label>Dragon Turtle</label>
                <input class="dark-input" id="DragonTurtle" type="number" @keyup="save('DragonTurtle', 'Dragon Turtle')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 19 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Balor</label>
                <input class="dark-input" id="Balor" type="number" @keyup="save('Balor', 'Balor')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 20 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Ancient Brass Dragon</label>
                <input class="dark-input" id="AncientBrassDragon" type="number" @keyup="save('AncientBrassDragon', 'Ancient Brass Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Ancient White Dragon</label>
                <input class="dark-input" id="AncientWhiteDragon" type="number" @keyup="save('AncientWhiteDragon', 'Ancient White Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Pit Fiend</label>
                <input class="dark-input" id="PitFiend" type="number" @keyup="save('PitFiend', 'Pit Fiend')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 21 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Ancient Black Dragon</label>
                <input class="dark-input" id="AncientBlackDragon" type="number" @keyup="save('AncientBlackDragon', 'Ancient Black Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Ancient Copper Dragon</label>
                <input class="dark-input" id="AncientCopperDragon" type="number" @keyup="save('AncientCopperDragon', 'Ancient Copper Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Lich</label>
                <input class="dark-input" id="Lich" type="number" @keyup="save('Lich', 'Lich')">
              </div>
        
              <div class="move-lower">
                <label>Solar</label>
                <input class="dark-input" id="Solar" type="number" @keyup="save('Solar', 'Solar')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 22 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Ancient Bronze Dragon</label>
                <input class="dark-input" id="AncientBronzeDragon" type="number" @keyup="save('AncientBronzeDragon', 'Ancient Bronze Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Ancient Green Dragon</label>
                <input class="dark-input" id="AncientGreenDragon" type="number" @keyup="save('AncientGreenDragon', 'Ancient Green Dragon')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 23 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Ancient Blue Dragon</label>
                <input class="dark-input" id="AncientBlueDragon" type="number" @keyup="save('AncientBlueDragon', 'Ancient Blue Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Ancient Silver Dragon</label>
                <input class="dark-input" id="AncientSilverDragon" type="number" @keyup="save('AncientSilverDragon', 'Ancient Silver Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Kraken</label>
                <input class="dark-input" id="Kraken" type="number" @keyup="save('Kraken', 'Kraken')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 24 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Ancient Gold Dragon</label>
                <input class="dark-input" id="AncientGoldDragon" type="number" @keyup="save('AncientGoldDragon', 'Ancient Gold Dragon')">
              </div>
        
              <div class="move-lower">
                <label>Ancient Red Dragon</label>
                <input class="dark-input" id="AncientRedDragon" type="number" @keyup="save('AncientRedDragon', 'Ancient Red Dragon')">
              </div>

            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        
        <f7-list-item accordion-item title="Level 30 Monster Encounters">
          <f7-accordion-content>
            <f7-block>
        
              <div class="move-lower">
                <label>Tarrasque</label>
                <input class="dark-input" id="Tarrasque" type="number" @keyup="save('Tarrasque', 'Tarrasque')">
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
  name: 'MonsterEncounters',
  components: {
    QuickViewFAB,
  },
  data() {
    return {
      topEncounters: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      monsters: {
        // LEVEL 0
        "Awakened Shrub": localStorage.getItem(localStorage.currentlySelectedCharacter+"AwakenedShrub"),
        "Baboon": localStorage.getItem(localStorage.currentlySelectedCharacter+"Baboon"),
        "Badger": localStorage.getItem(localStorage.currentlySelectedCharacter+"Badger"),
        "Bat": localStorage.getItem(localStorage.currentlySelectedCharacter+"Bat"),
        "Cat": localStorage.getItem(localStorage.currentlySelectedCharacter+"Cat"),
        "Commoner": localStorage.getItem(localStorage.currentlySelectedCharacter+"Commoner"),
        "Crab": localStorage.getItem(localStorage.currentlySelectedCharacter+"Crab"),
        "Deer": localStorage.getItem(localStorage.currentlySelectedCharacter+"Deer"),
        "Eagle": localStorage.getItem(localStorage.currentlySelectedCharacter+"Eagle"),
        "Frog": localStorage.getItem(localStorage.currentlySelectedCharacter+"Frog"),
        "Giant Fire Beetle": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantFireBeetle"),
        "Goat": localStorage.getItem(localStorage.currentlySelectedCharacter+"Goat"),
        "Hawk": localStorage.getItem(localStorage.currentlySelectedCharacter+"Hawk"),
        "Homunculus": localStorage.getItem(localStorage.currentlySelectedCharacter+"Homunculus"),
        "Hyena": localStorage.getItem(localStorage.currentlySelectedCharacter+"Hyena"),
        "Jackal": localStorage.getItem(localStorage.currentlySelectedCharacter+"Jackal"),
        "Lemure": localStorage.getItem(localStorage.currentlySelectedCharacter+"Lemure"),
        "Lizard": localStorage.getItem(localStorage.currentlySelectedCharacter+"Lizard"),
        "Octopus": localStorage.getItem(localStorage.currentlySelectedCharacter+"Octopus"),
        "Owl": localStorage.getItem(localStorage.currentlySelectedCharacter+"Owl"),
        "Quipper": localStorage.getItem(localStorage.currentlySelectedCharacter+"Quipper"),
        "Rat": localStorage.getItem(localStorage.currentlySelectedCharacter+"Rat"),
        "Raven": localStorage.getItem(localStorage.currentlySelectedCharacter+"Raven"),
        "Scorpion": localStorage.getItem(localStorage.currentlySelectedCharacter+"Scorpion"),
        "Sea Horse": localStorage.getItem(localStorage.currentlySelectedCharacter+"SeaHorse"),
        "Shrieker": localStorage.getItem(localStorage.currentlySelectedCharacter+"Shrieker"),
        "Spider": localStorage.getItem(localStorage.currentlySelectedCharacter+"Spider"),
        "Vulture": localStorage.getItem(localStorage.currentlySelectedCharacter+"Vulture"),
        "Weasel": localStorage.getItem(localStorage.currentlySelectedCharacter+"Weasel"),

        // LEVEL 1/8
        "Bandit": localStorage.getItem(localStorage.currentlySelectedCharacter+"Bandit"),
        "Blood Hawk": localStorage.getItem(localStorage.currentlySelectedCharacter+"BloodHawk"),
        "Camel": localStorage.getItem(localStorage.currentlySelectedCharacter+"Camel"),
        "Cultist": localStorage.getItem(localStorage.currentlySelectedCharacter+"Cultist"),
        "Flying Snake": localStorage.getItem(localStorage.currentlySelectedCharacter+"FlyingSnake"),
        "Giant Crab": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantCrab"),
        "Giant Rat": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantRat"),
        "Giant Weasel": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantWeasel"),
        "Guard": localStorage.getItem(localStorage.currentlySelectedCharacter+"Guard"),
        "Kobold": localStorage.getItem(localStorage.currentlySelectedCharacter+"Kobold"),
        "Mastiff": localStorage.getItem(localStorage.currentlySelectedCharacter+"Mastiff"),
        "Merfolk": localStorage.getItem(localStorage.currentlySelectedCharacter+"Merfolk"),
        "Mule": localStorage.getItem(localStorage.currentlySelectedCharacter+"Mule"),
        "Noble": localStorage.getItem(localStorage.currentlySelectedCharacter+"Noble"),
        "Poisonous Snake": localStorage.getItem(localStorage.currentlySelectedCharacter+"PoisonousSnake"),
        "Pony": localStorage.getItem(localStorage.currentlySelectedCharacter+"Pony"),
        "Stirge": localStorage.getItem(localStorage.currentlySelectedCharacter+"Stirge"),
        "Tribal Warrior": localStorage.getItem(localStorage.currentlySelectedCharacter+"TribalWarrior"),

        // LEVEL 1/4
        "Acolyte": localStorage.getItem(localStorage.currentlySelectedCharacter+"Acolyte"),
        "Axe Beak": localStorage.getItem(localStorage.currentlySelectedCharacter+"AxeBeak"),
        "Blink Dog": localStorage.getItem(localStorage.currentlySelectedCharacter+"BlinkDog"),
        "Boar": localStorage.getItem(localStorage.currentlySelectedCharacter+"Boar"),
        "Constrictor Snake": localStorage.getItem(localStorage.currentlySelectedCharacter+"ConstrictorSnake"),
        "Draft Horse": localStorage.getItem(localStorage.currentlySelectedCharacter+"DraftHorse"),
        "Dretch": localStorage.getItem(localStorage.currentlySelectedCharacter+"Dretch"),
        "Drow Elf": localStorage.getItem(localStorage.currentlySelectedCharacter+"DrowElf"),
        "Elk": localStorage.getItem(localStorage.currentlySelectedCharacter+"Elk"),
        "Flying Sword": localStorage.getItem(localStorage.currentlySelectedCharacter+"FlyingSword"),
        "Giant Badger": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantBadger"),
        "Giant Bat": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantBat"),
        "Giant Centipede": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantCentipede"),
        "Giant Frog": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantFrog"),
        "Giant Lizard": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantLizard"),
        "Giant Owl": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantOwl"),
        "Giant Poisonous Snake": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantPoisonousSnake"),
        "Giant Wolf Spider": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantWolfSpider"),
        "Goblin": localStorage.getItem(localStorage.currentlySelectedCharacter+"Goblin"),
        "Grimlock": localStorage.getItem(localStorage.currentlySelectedCharacter+"Grimlock"),
        "Panther": localStorage.getItem(localStorage.currentlySelectedCharacter+"Panther"),
        "Pseudodragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"Pseudodragon"),
        "Riding Horse": localStorage.getItem(localStorage.currentlySelectedCharacter+"RidingHorse"),
        "Skeleton": localStorage.getItem(localStorage.currentlySelectedCharacter+"Skeleton"),
        "Sprite": localStorage.getItem(localStorage.currentlySelectedCharacter+"Sprite"),
        "Steam Mephit": localStorage.getItem(localStorage.currentlySelectedCharacter+"SteamMephit"),
        "Swarm Of Bats": localStorage.getItem(localStorage.currentlySelectedCharacter+"SwarmOfBats"),
        "Swarm Of Rats": localStorage.getItem(localStorage.currentlySelectedCharacter+"SwarmOfRats"),
        "Swarm Of Ravens": localStorage.getItem(localStorage.currentlySelectedCharacter+"SwarmOfRavens"),
        "Violet Fungus": localStorage.getItem(localStorage.currentlySelectedCharacter+"VioletFungus"),
        "Wolf": localStorage.getItem(localStorage.currentlySelectedCharacter+"Wolf"),
        "Zombie": localStorage.getItem(localStorage.currentlySelectedCharacter+"Zombie"),

        // LEVEL 1/2
        "Ape": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ape"),
        "Black Bear": localStorage.getItem(localStorage.currentlySelectedCharacter+"BlackBear"),
        "Cockatrice": localStorage.getItem(localStorage.currentlySelectedCharacter+"Cockatrice"),
        "Crocodile": localStorage.getItem(localStorage.currentlySelectedCharacter+"Crocodile"),
        "Darkmantle": localStorage.getItem(localStorage.currentlySelectedCharacter+"Darkmantle"),
        "Deep Gnome": localStorage.getItem(localStorage.currentlySelectedCharacter+"DeepGnome"),
        "Dust Mephit": localStorage.getItem(localStorage.currentlySelectedCharacter+"DustMephit"),
        "Giant Goat": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantGoat"),
        "Giant Sea Horse": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantSeaHorse"),
        "Giant Wasp": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantWasp"),
        "Gnoll": localStorage.getItem(localStorage.currentlySelectedCharacter+"Gnoll"),
        "Gray Ooze": localStorage.getItem(localStorage.currentlySelectedCharacter+"GrayOoze"),
        "Hobgoblin": localStorage.getItem(localStorage.currentlySelectedCharacter+"Hobgoblin"),
        "Ice Mephit": localStorage.getItem(localStorage.currentlySelectedCharacter+"IceMephit"),
        "Lizardfolk": localStorage.getItem(localStorage.currentlySelectedCharacter+"Lizardfolk"),
        "Magma Mephit": localStorage.getItem(localStorage.currentlySelectedCharacter+"MagmaMephit"),
        "Magmin": localStorage.getItem(localStorage.currentlySelectedCharacter+"Magmin"),
        "Orc": localStorage.getItem(localStorage.currentlySelectedCharacter+"Orc"),
        "Reef Shark": localStorage.getItem(localStorage.currentlySelectedCharacter+"ReefShark"),
        "Rust Monster": localStorage.getItem(localStorage.currentlySelectedCharacter+"RustMonster"),
        "Sahuagin": localStorage.getItem(localStorage.currentlySelectedCharacter+"Sahuagin"),
        "Satyr": localStorage.getItem(localStorage.currentlySelectedCharacter+"Satyr"),
        "Scout": localStorage.getItem(localStorage.currentlySelectedCharacter+"Scout"),
        "Shadow": localStorage.getItem(localStorage.currentlySelectedCharacter+"Shadow"),
        "Swarm Of Insects": localStorage.getItem(localStorage.currentlySelectedCharacter+"SwarmOfInsects"),
        "Thug": localStorage.getItem(localStorage.currentlySelectedCharacter+"Thug"),
        "Warhorse": localStorage.getItem(localStorage.currentlySelectedCharacter+"Warhorse"),
        "Warhorse Skeleton": localStorage.getItem(localStorage.currentlySelectedCharacter+"WarhorseSkeleton"),
        "Worg": localStorage.getItem(localStorage.currentlySelectedCharacter+"Worg"),

        // LEVEL 1
        "Animated Armor": localStorage.getItem(localStorage.currentlySelectedCharacter+"AnimatedArmor"),
        "Brass Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"BrassDragonWyrmling"),
        "Brown Bear": localStorage.getItem(localStorage.currentlySelectedCharacter+"BrownBear"),
        "Bugbear": localStorage.getItem(localStorage.currentlySelectedCharacter+"Bugbear"),
        "Copper Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"CopperDragonWyrmling"),
        "Death Dog": localStorage.getItem(localStorage.currentlySelectedCharacter+"DeathDog"),
        "Dire Wolf": localStorage.getItem(localStorage.currentlySelectedCharacter+"DireWolf"),
        "Dryad": localStorage.getItem(localStorage.currentlySelectedCharacter+"Dryad"),
        "Duergar": localStorage.getItem(localStorage.currentlySelectedCharacter+"Duergar"),
        "Ghoul": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ghoul"),
        "Giant Eagle": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantEagle"),
        "Giant Hyena": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantHyena"),
        "Giant Octopus": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantOctopus"),
        "Giant Spider": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantSpider"),
        "Giant Toad": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantToad"),
        "Giant Vulture": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantVulture"),
        "Harpy": localStorage.getItem(localStorage.currentlySelectedCharacter+"Harpy"),
        "Hippogriff": localStorage.getItem(localStorage.currentlySelectedCharacter+"Hippogriff"),
        "Imp": localStorage.getItem(localStorage.currentlySelectedCharacter+"Imp"),
        "Lion": localStorage.getItem(localStorage.currentlySelectedCharacter+"Lion"),
        "Quasit": localStorage.getItem(localStorage.currentlySelectedCharacter+"Quasit"),
        "Specter": localStorage.getItem(localStorage.currentlySelectedCharacter+"Specter"),
        "Spy": localStorage.getItem(localStorage.currentlySelectedCharacter+"Spy"),
        "Swarm Of Quippers": localStorage.getItem(localStorage.currentlySelectedCharacter+"SwarmOfQuippers"),
        "Tiger": localStorage.getItem(localStorage.currentlySelectedCharacter+"Tiger"),

        // LEVEL 2
        "Ankheg": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ankheg"),
        "Awakened Tree": localStorage.getItem(localStorage.currentlySelectedCharacter+"AwakenedTree"),
        "Azer": localStorage.getItem(localStorage.currentlySelectedCharacter+"Azer"),
        "Bandit Captain": localStorage.getItem(localStorage.currentlySelectedCharacter+"BanditCaptain"),
        "Berserker": localStorage.getItem(localStorage.currentlySelectedCharacter+"Berserker"),
        "Black Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"BlackDragonWyrmling"),
        "Bronze Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"BronzeDragonWyrmling"),
        "Centaur": localStorage.getItem(localStorage.currentlySelectedCharacter+"Centaur"),
        "Cult Fanatic": localStorage.getItem(localStorage.currentlySelectedCharacter+"CultFanatic"),
        "Druid": localStorage.getItem(localStorage.currentlySelectedCharacter+"Druid"),
        "Ettercap": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ettercap"),
        "Gargoyle": localStorage.getItem(localStorage.currentlySelectedCharacter+"Gargoyle"),
        "Gelatinous Cube": localStorage.getItem(localStorage.currentlySelectedCharacter+"GelatinousCube"),
        "Ghast": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ghast"),
        "Giant Boar": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantBoar"),
        "Giant Constrictor Snake": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantConstrictorSnake"),
        "Giant Elk": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantElk"),
        "Gibbering Mouther": localStorage.getItem(localStorage.currentlySelectedCharacter+"GibberingMouther"),
        "Green Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"GreenDragonWyrmling"),
        "Grick": localStorage.getItem(localStorage.currentlySelectedCharacter+"Grick"),
        "Griffon": localStorage.getItem(localStorage.currentlySelectedCharacter+"Griffon"),
        "Hunter Shark": localStorage.getItem(localStorage.currentlySelectedCharacter+"HunterShark"),
        "Merrow": localStorage.getItem(localStorage.currentlySelectedCharacter+"Merrow"),
        "Mimic": localStorage.getItem(localStorage.currentlySelectedCharacter+"Mimic"),
        "Minotaur Skeleton": localStorage.getItem(localStorage.currentlySelectedCharacter+"MinotaurSkeleton"),
        "Ochre Jelly": localStorage.getItem(localStorage.currentlySelectedCharacter+"OchreJelly"),
        "Ogre": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ogre"),
        "Ogre Zombie": localStorage.getItem(localStorage.currentlySelectedCharacter+"OgreZombie"),
        "Pegasus": localStorage.getItem(localStorage.currentlySelectedCharacter+"Pegasus"),
        "Plesiosaurus": localStorage.getItem(localStorage.currentlySelectedCharacter+"Plesiosaurus"),
        "Polar Bear": localStorage.getItem(localStorage.currentlySelectedCharacter+"PolarBear"),
        "Priest": localStorage.getItem(localStorage.currentlySelectedCharacter+"Priest"),
        "Rhinoceros": localStorage.getItem(localStorage.currentlySelectedCharacter+"Rhinoceros"),
        "Rug Of Smothering": localStorage.getItem(localStorage.currentlySelectedCharacter+"RugOfSmothering"),
        "Saber-Toothed Tiger": localStorage.getItem(localStorage.currentlySelectedCharacter+"SaberToothedTiger"),
        "Sea Hag": localStorage.getItem(localStorage.currentlySelectedCharacter+"SeaHag"),
        "Silver Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"SilverDragonWyrmling"),
        "Swarm Of Poisonous Snakes": localStorage.getItem(localStorage.currentlySelectedCharacter+"SwarmOfPoisonousSnakes"),
        "Wererat": localStorage.getItem(localStorage.currentlySelectedCharacter+"Wererat"),
        "White Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"WhiteDragonWyrmling"),
        "Will-O-Wisp": localStorage.getItem(localStorage.currentlySelectedCharacter+"WillOWisp"),

        // LEVEL 3
        "Basilisk": localStorage.getItem(localStorage.currentlySelectedCharacter+"Basilisk"),
        "Bearded Devil": localStorage.getItem(localStorage.currentlySelectedCharacter+"BeardedDevil"),
        "Blue Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"BlueDragonWyrmling"),
        "Doppelganger": localStorage.getItem(localStorage.currentlySelectedCharacter+"Doppelganger"),
        "Giant Scorpion": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantScorpion"),
        "Gold Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"GoldDragonWyrmling"),
        "Green Hag": localStorage.getItem(localStorage.currentlySelectedCharacter+"GreenHag"),
        "Hell Hound": localStorage.getItem(localStorage.currentlySelectedCharacter+"HellHound"),
        "Killer Whale": localStorage.getItem(localStorage.currentlySelectedCharacter+"KillerWhale"),
        "Knight": localStorage.getItem(localStorage.currentlySelectedCharacter+"Knight"),
        "Manticore": localStorage.getItem(localStorage.currentlySelectedCharacter+"Manticore"),
        "Minotaur": localStorage.getItem(localStorage.currentlySelectedCharacter+"Minotaur"),
        "Mummy": localStorage.getItem(localStorage.currentlySelectedCharacter+"Mummy"),
        "Nightmare": localStorage.getItem(localStorage.currentlySelectedCharacter+"Nightmare"),
        "Owlbear": localStorage.getItem(localStorage.currentlySelectedCharacter+"Owlbear"),
        "Phase Spider": localStorage.getItem(localStorage.currentlySelectedCharacter+"PhaseSpider"),
        "Veteran": localStorage.getItem(localStorage.currentlySelectedCharacter+"Veteran"),
        "Werewolf": localStorage.getItem(localStorage.currentlySelectedCharacter+"Werewolf"),
        "Wight": localStorage.getItem(localStorage.currentlySelectedCharacter+"Wight"),
        "Winter Wolf": localStorage.getItem(localStorage.currentlySelectedCharacter+"WinterWolf"),

        // LEVEL 4
        "Black Pudding": localStorage.getItem(localStorage.currentlySelectedCharacter+"BlackPudding"),
        "Chuul": localStorage.getItem(localStorage.currentlySelectedCharacter+"Chuul"),
        "Couatl": localStorage.getItem(localStorage.currentlySelectedCharacter+"Couatl"),
        "Elephant": localStorage.getItem(localStorage.currentlySelectedCharacter+"Elephant"),
        "Ettin": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ettin"),
        "Ghost": localStorage.getItem(localStorage.currentlySelectedCharacter+"Ghost"),
        "Lamia": localStorage.getItem(localStorage.currentlySelectedCharacter+"Lamia"),
        "Red Dragon Wyrmling": localStorage.getItem(localStorage.currentlySelectedCharacter+"RedDragonWyrmling"),
        "Succubus/Incubus": localStorage.getItem(localStorage.currentlySelectedCharacter+"SuccubusIncubus"),
        "Wereboar": localStorage.getItem(localStorage.currentlySelectedCharacter+"Wereboar"),
        "Weretiger": localStorage.getItem(localStorage.currentlySelectedCharacter+"Weretiger"),

        // LEVEL 5
        "Air Elemental": localStorage.getItem(localStorage.currentlySelectedCharacter+"AirElemental"),
        "Barbed Devil": localStorage.getItem(localStorage.currentlySelectedCharacter+"BarbedDevil"),
        "Bulette": localStorage.getItem(localStorage.currentlySelectedCharacter+"Bulette"),
        "Earth Elemental": localStorage.getItem(localStorage.currentlySelectedCharacter+"EarthElemental"),
        "Fire Elemental": localStorage.getItem(localStorage.currentlySelectedCharacter+"FireElemental"),
        "Flesh Golem": localStorage.getItem(localStorage.currentlySelectedCharacter+"FleshGolem"),
        "Giant Crocodile": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantCrocodile"),
        "Giant Shark": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantShark"),
        "Gladiator": localStorage.getItem(localStorage.currentlySelectedCharacter+"Gladiator"),
        "Gorgon": localStorage.getItem(localStorage.currentlySelectedCharacter+"Gorgon"),
        "Half-Red Dragon Veteran": localStorage.getItem(localStorage.currentlySelectedCharacter+"HalfRedDragonVeteran"),
        "Hill Giant": localStorage.getItem(localStorage.currentlySelectedCharacter+"HillGiant"),
        "Night Hag": localStorage.getItem(localStorage.currentlySelectedCharacter+"NightHag"),
        "Otyugh": localStorage.getItem(localStorage.currentlySelectedCharacter+"Otyugh"),
        "Roper": localStorage.getItem(localStorage.currentlySelectedCharacter+"Roper"),
        "Salamander": localStorage.getItem(localStorage.currentlySelectedCharacter+"Salamander"),
        "Shambling Mound": localStorage.getItem(localStorage.currentlySelectedCharacter+"ShamblingMound"),
        "Triceratops": localStorage.getItem(localStorage.currentlySelectedCharacter+"Triceratops"),
        "Troll": localStorage.getItem(localStorage.currentlySelectedCharacter+"Troll"),
        "Unicorn": localStorage.getItem(localStorage.currentlySelectedCharacter+"Unicorn"),
        "Vampire Spawn": localStorage.getItem(localStorage.currentlySelectedCharacter+"VampireSpawn"),
        "Water Elemental": localStorage.getItem(localStorage.currentlySelectedCharacter+"WaterElemental"),
        "Werebear": localStorage.getItem(localStorage.currentlySelectedCharacter+"Werebear"),
        "Wraith": localStorage.getItem(localStorage.currentlySelectedCharacter+"Wraith"),
        "Xorn": localStorage.getItem(localStorage.currentlySelectedCharacter+"Xorn"),

        // LEVEL 6
        "Chimera": localStorage.getItem(localStorage.currentlySelectedCharacter+"Chimera"),
        "Drider": localStorage.getItem(localStorage.currentlySelectedCharacter+"Drider"),
        "Invisible Stalker": localStorage.getItem(localStorage.currentlySelectedCharacter+"InvisibleStalker"),
        "Mage": localStorage.getItem(localStorage.currentlySelectedCharacter+"Mage"),
        "Mammoth": localStorage.getItem(localStorage.currentlySelectedCharacter+"Mammoth"),
        "Medusa": localStorage.getItem(localStorage.currentlySelectedCharacter+"Medusa"),
        "Vrock": localStorage.getItem(localStorage.currentlySelectedCharacter+"Vrock"),
        "Wyvern": localStorage.getItem(localStorage.currentlySelectedCharacter+"Wyvern"),
        "Young Brass Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungBrassDragon"),
        "Young White Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungWhiteDragon"),

        // LEVEL 7
        "Giant Ape": localStorage.getItem(localStorage.currentlySelectedCharacter+"GiantApe"),
        "Oni": localStorage.getItem(localStorage.currentlySelectedCharacter+"Oni"),
        "Shield Guardian": localStorage.getItem(localStorage.currentlySelectedCharacter+"ShieldGuardian"),
        "Stone Giant": localStorage.getItem(localStorage.currentlySelectedCharacter+"StoneGiant"),
        "Young Black Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungBlackDragon"),
        "Young Copper Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungCopperDragon"),

        // LEVEL 8
        "Assassin": localStorage.getItem(localStorage.currentlySelectedCharacter+"Assassin"),
        "Chain Devil": localStorage.getItem(localStorage.currentlySelectedCharacter+"ChainDevil"),
        "Cloaker": localStorage.getItem(localStorage.currentlySelectedCharacter+"Cloaker"),
        "Frost Giant": localStorage.getItem(localStorage.currentlySelectedCharacter+"FrostGiant"),
        "Hezrou": localStorage.getItem(localStorage.currentlySelectedCharacter+"Hezrou"),
        "Hydra": localStorage.getItem(localStorage.currentlySelectedCharacter+"Hydra"),
        "Spirit Naga": localStorage.getItem(localStorage.currentlySelectedCharacter+"SpiritNaga"),
        "Tyrannosaurus Rex": localStorage.getItem(localStorage.currentlySelectedCharacter+"TyrannosaurusRex"),
        "Young Bronze Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungBronzeDragon"),
        "Young Green Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungGreenDragon"),

        // LEVEL 9
        "Bone Devil": localStorage.getItem(localStorage.currentlySelectedCharacter+"BoneDevil"),
        "Clay Golem": localStorage.getItem(localStorage.currentlySelectedCharacter+"ClayGolem"),
        "Cloud Giant": localStorage.getItem(localStorage.currentlySelectedCharacter+"CloudGiant"),
        "Fire Giant": localStorage.getItem(localStorage.currentlySelectedCharacter+"FireGiant"),
        "Glabrezu": localStorage.getItem(localStorage.currentlySelectedCharacter+"Glabrezu"),
        "Treant": localStorage.getItem(localStorage.currentlySelectedCharacter+"Treant"),
        "Young Blue Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungBlueDragon"),
        "Young ilver Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungSilverDragon"),
        },

        // LEVEL 10
        "Aboleth": localStorage.getItem(localStorage.currentlySelectedCharacter+"Aboleth"),
        "Deva": localStorage.getItem(localStorage.currentlySelectedCharacter+"Deva"),
        "Guardian Naga": localStorage.getItem(localStorage.currentlySelectedCharacter+"GuardianNaga"),
        "Stone Golem": localStorage.getItem(localStorage.currentlySelectedCharacter+"StoneGolem"),
        "Young Gold Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungGoldDragon"),
        "Young Red Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"YoungRedDragon"),

        // LEVEL 11
        "Behir": localStorage.getItem(localStorage.currentlySelectedCharacter+"Behir"),
        "Djinni": localStorage.getItem(localStorage.currentlySelectedCharacter+"Djinni"),
        "Efreeti": localStorage.getItem(localStorage.currentlySelectedCharacter+"Efreeti"),
        "Gynosphinx": localStorage.getItem(localStorage.currentlySelectedCharacter+"Gynosphinx"),
        "Horned Devil": localStorage.getItem(localStorage.currentlySelectedCharacter+"HornedDevil"),
        "Remorhaz": localStorage.getItem(localStorage.currentlySelectedCharacter+"Remorhaz"),
        "Roc": localStorage.getItem(localStorage.currentlySelectedCharacter+"Roc"),

        // LEVEL 12
        "Archmage": localStorage.getItem(localStorage.currentlySelectedCharacter+"Archmage"),
        "Erinyes": localStorage.getItem(localStorage.currentlySelectedCharacter+"Erinyes"),

        // LEVEL 13
        "Adult Brass Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultBrassDragon"),
        "Adult White Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultWhiteDragon"),
        "Nalfeshnee": localStorage.getItem(localStorage.currentlySelectedCharacter+"Nalfeshnee"),
        "Rakshasa": localStorage.getItem(localStorage.currentlySelectedCharacter+"Rakshasa"),
        "Storm Giant": localStorage.getItem(localStorage.currentlySelectedCharacter+"StormGiant"),
        "Vampire": localStorage.getItem(localStorage.currentlySelectedCharacter+"Vampire"),

        // LEVEL 14
        "Adult Black Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultBlackDragon"),
        "Adult Copper Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultCopperDragon"),
        "Ice Devil": localStorage.getItem(localStorage.currentlySelectedCharacter+"IceDevil"),

        // LEVEL 15
        "Adult Bronze Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultBronzeDragon"),
        "Adult Green Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultGreenDragon"),
        "Mummy Lord": localStorage.getItem(localStorage.currentlySelectedCharacter+"MummyLord"),
        "Purple Worm": localStorage.getItem(localStorage.currentlySelectedCharacter+"PurpleWorm"),

        // LEVEL 16
        "Adult Blue Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultBlueDragon"),
        "Adult Silver Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultSilverDragon"),
        "Iron Golem": localStorage.getItem(localStorage.currentlySelectedCharacter+"IronGolem"),
        "Marilith": localStorage.getItem(localStorage.currentlySelectedCharacter+"Marilith"),
        "Planetar": localStorage.getItem(localStorage.currentlySelectedCharacter+"Planetar"),

        // LEVEL 17
        "Adult Gold Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultGoldDragon"),
        "Adult Red Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AdultRedDragon"),
        "Androsphinx": localStorage.getItem(localStorage.currentlySelectedCharacter+"Androsphinx"),
        "Dragon Turtle": localStorage.getItem(localStorage.currentlySelectedCharacter+"DragonTurtle"),

        // LEVEL 19
        "Balor": localStorage.getItem(localStorage.currentlySelectedCharacter+"Balor"),

        // LEVEL 20
        "Ancient Brass Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientBrassDragon"),
        "Ancient White Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientWhiteDragon"),
        "Pit Fiend": localStorage.getItem(localStorage.currentlySelectedCharacter+"PitFiend"),

        // LEVEL 21
        "Ancient Black Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientBlackDragon"),
        "Ancient Copper Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientCopperDragon"),
        "Lich": localStorage.getItem(localStorage.currentlySelectedCharacter+"Lich"),
        "Solar": localStorage.getItem(localStorage.currentlySelectedCharacter+"Solar"),

        // LEVEL 22
        "Ancient Bronze Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientBronzeDragon"),
        "Ancient Green Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientGreenDragon"),

        // LEVEL 23
        "Ancient Blue Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientBlueDragon"),
        "Ancient Silver Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientSilverDragon"),
        "Kraken": localStorage.getItem(localStorage.currentlySelectedCharacter+"Kraken"),

        // LEVEL 24
        "Ancient Gold Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientGoldDragon"),
        "Ancient Red Dragon": localStorage.getItem(localStorage.currentlySelectedCharacter+"AncientRedDragon"),

        // LEVEL 30
        "Tarrasque": localStorage.getItem(localStorage.currentlySelectedCharacter+"Tarrasque"),
    };
  },
  methods: {
    calculateTopEncounters() {
      let sortableList = [];
      for (let monster in this.monsters) {
        sortableList.push([monster, this.monsters[monster]]);
      };
      sortableList = sortableList.sort(function(a, b) {
        return b[1] - a[1];
      });
      this.topEncounters = sortableList;
    },
    showTopEncounter(arrayNum) {
      if (this.topEncounters[arrayNum][1] > 0) {
        return this.topEncounters[arrayNum][0] + " - " + this.topEncounters[arrayNum][1];
      };
    },
    async loadDetails(text) {
      await document.getElementById(text).value;
      document.getElementById(text).value = localStorage.getItem(localStorage.currentlySelectedCharacter+text)
    },
    save(text, displayText) {
      localStorage.setItem(localStorage.currentlySelectedCharacter+text, document.getElementById(text).value);
      this.monsters[displayText] = localStorage.getItem(localStorage.currentlySelectedCharacter+text)
      this.calculateTopEncounters();
    },
    async load() {
      await setTimeout(function() {}, 1000);

      // LEVEL 0
      await this.loadDetails("AwakenedShrub");
      await this.loadDetails("Baboon");
      await this.loadDetails("Badger");
      await this.loadDetails("Bat");
      await this.loadDetails("Cat");
      await this.loadDetails("Commoner");
      await this.loadDetails("Crab");
      await this.loadDetails("Deer");
      await this.loadDetails("Eagle");
      await this.loadDetails("Frog");
      await this.loadDetails("GiantFireBeetle");
      await this.loadDetails("Goat");
      await this.loadDetails("Hawk");
      await this.loadDetails("Homunculus");
      await this.loadDetails("Hyena");
      await this.loadDetails("Jackal");
      await this.loadDetails("Lemure");
      await this.loadDetails("Lizard");
      await this.loadDetails("Octopus");
      await this.loadDetails("Owl");
      await this.loadDetails("Quipper");
      await this.loadDetails("Rat");
      await this.loadDetails("Raven");
      await this.loadDetails("Scorpion");
      await this.loadDetails("SeaHorse");
      await this.loadDetails("Shrieker");
      await this.loadDetails("Spider");
      await this.loadDetails("Vulture");
      await this.loadDetails("Weasel");

      // LEVEL 1/8
      await this.loadDetails("Bandit");
      await this.loadDetails("BloodHawk");
      await this.loadDetails("Camel");
      await this.loadDetails("Cultist");
      await this.loadDetails("FlyingSnake");
      await this.loadDetails("GiantCrab");
      await this.loadDetails("GiantRat");
      await this.loadDetails("GiantWeasel");
      await this.loadDetails("Guard");
      await this.loadDetails("Kobold");
      await this.loadDetails("Mastiff");
      await this.loadDetails("Merfolk");
      await this.loadDetails("Mule");
      await this.loadDetails("Noble");
      await this.loadDetails("PoisonousSnake");
      await this.loadDetails("Pony");
      await this.loadDetails("Stirge");
      await this.loadDetails("TribalWarrior");

      // LEVEL 1/4
      await this.loadDetails("Acolyte");
      await this.loadDetails("AxeBeak");
      await this.loadDetails("BlinkDog");
      await this.loadDetails("Boar");
      await this.loadDetails("ConstrictorSnake");
      await this.loadDetails("DraftHorse");
      await this.loadDetails("Dretch");
      await this.loadDetails("DrowElf");
      await this.loadDetails("Elk");
      await this.loadDetails("FlyingSword");
      await this.loadDetails("GiantBadger");
      await this.loadDetails("GiantBat");
      await this.loadDetails("GiantCentipede");
      await this.loadDetails("GiantFrog");
      await this.loadDetails("GiantLizard");
      await this.loadDetails("GiantOwl");
      await this.loadDetails("GiantPoisonousSnake");
      await this.loadDetails("GiantWolfSpider");
      await this.loadDetails("Goblin");
      await this.loadDetails("Grimlock");
      await this.loadDetails("Panther");
      await this.loadDetails("Pseudodragon");
      await this.loadDetails("RidingHorse");
      await this.loadDetails("Skeleton");
      await this.loadDetails("Sprite");
      await this.loadDetails("SteamMephit");
      await this.loadDetails("SwarmOfBats");
      await this.loadDetails("SwarmOfRats");
      await this.loadDetails("SwarmOfRavens");
      await this.loadDetails("VioletFungus");
      await this.loadDetails("Wolf");
      await this.loadDetails("Zombie");

      // LEVEL 1/2
      await this.loadDetails("Ape").value;
      await this.loadDetails("BlackBear").value;
      await this.loadDetails("Cockatrice").value;
      await this.loadDetails("Crocodile").value;
      await this.loadDetails("Darkmantle").value;
      await this.loadDetails("DeepGnome").value;
      await this.loadDetails("DustMephit").value;
      await this.loadDetails("GiantGoat").value;
      await this.loadDetails("GiantSeaHorse").value;
      await this.loadDetails("GiantWasp").value;
      await this.loadDetails("Gnoll").value;
      await this.loadDetails("GrayOoze").value;
      await this.loadDetails("Hobgoblin").value;
      await this.loadDetails("IceMephit").value;
      await this.loadDetails("Lizardfolk").value;
      await this.loadDetails("MagmaMephit").value;
      await this.loadDetails("Magmin").value;
      await this.loadDetails("Orc").value;
      await this.loadDetails("ReefShark").value;
      await this.loadDetails("RustMonster").value;
      await this.loadDetails("Sahuagin").value;
      await this.loadDetails("Satyr").value;
      await this.loadDetails("Scout").value;
      await this.loadDetails("Shadow").value;
      await this.loadDetails("SwarmOfInsects").value;
      await this.loadDetails("Thug").value;
      await this.loadDetails("Warhorse").value;
      await this.loadDetails("WarhorseSkeleton").value;
      await this.loadDetails("Worg").value;

      // LEVEL 1
      await this.loadDetails("AnimatedArmor").value;
      await this.loadDetails("BrassDragonWyrmling").value;
      await this.loadDetails("BrownBear").value;
      await this.loadDetails("Bugbear").value;
      await this.loadDetails("CopperDragonWyrmling").value;
      await this.loadDetails("DeathDog").value;
      await this.loadDetails("DireWolf").value;
      await this.loadDetails("Dryad").value;
      await this.loadDetails("Duergar").value;
      await this.loadDetails("Ghoul").value;
      await this.loadDetails("GiantEagle").value;
      await this.loadDetails("GiantHyena").value;
      await this.loadDetails("GiantOctopus").value;
      await this.loadDetails("GiantSpider").value;
      await this.loadDetails("GiantToad").value;
      await this.loadDetails("GiantVulture").value;
      await this.loadDetails("Harpy").value;
      await this.loadDetails("Hippogriff").value;
      await this.loadDetails("Imp").value;
      await this.loadDetails("Lion").value;
      await this.loadDetails("Quasit").value;
      await this.loadDetails("Specter").value;
      await this.loadDetails("Spy").value;
      await this.loadDetails("SwarmOfQuippers").value;
      await this.loadDetails("Tiger").value;

        // LEVEL 2
      await this.loadDetails("Ankheg");
      await this.loadDetails("AwakenedTree");
      await this.loadDetails("Azer");
      await this.loadDetails("BanditCaptain");
      await this.loadDetails("Berserker");
      await this.loadDetails("BlackDragonWyrmling");
      await this.loadDetails("BronzeDragonWyrmling");
      await this.loadDetails("Centaur");
      await this.loadDetails("CultFanatic");
      await this.loadDetails("Druid");
      await this.loadDetails("Ettercap");
      await this.loadDetails("Gargoyle");
      await this.loadDetails("GelatinousCube");
      await this.loadDetails("Ghast");
      await this.loadDetails("GiantBoar");
      await this.loadDetails("GiantConstrictorSnake");
      await this.loadDetails("GiantElk");
      await this.loadDetails("GibberingMouther");
      await this.loadDetails("GreenDragonWyrmling");
      await this.loadDetails("Grick");
      await this.loadDetails("Griffon");
      await this.loadDetails("HunterShark");
      await this.loadDetails("Merrow");
      await this.loadDetails("Mimic");
      await this.loadDetails("MinotaurSkeleton");
      await this.loadDetails("OchreJelly");
      await this.loadDetails("Ogre");
      await this.loadDetails("OgreZombie");
      await this.loadDetails("Pegasus");
      await this.loadDetails("Plesiosaurus");
      await this.loadDetails("PolarBear");
      await this.loadDetails("Priest");
      await this.loadDetails("Rhinoceros");
      await this.loadDetails("RugOfSmothering");
      await this.loadDetails("SaberToothedTiger");
      await this.loadDetails("SeaHag");
      await this.loadDetails("SilverDragonWyrmling");
      await this.loadDetails("SwarmOfPoisonousSnakes");
      await this.loadDetails("Wererat");
      await this.loadDetails("WhiteDragonWyrmling");
      await this.loadDetails("WillOWisp");

      // LEVEL 3
      await this.loadDetails("Basilisk");
      await this.loadDetails("BeardedDevil");
      await this.loadDetails("BlueDragonWyrmling");
      await this.loadDetails("Doppelganger");
      await this.loadDetails("GiantScorpion");
      await this.loadDetails("GoldDragonWyrmling");
      await this.loadDetails("GreenHag");
      await this.loadDetails("HellHound");
      await this.loadDetails("KillerWhale");
      await this.loadDetails("Knight");
      await this.loadDetails("Manticore");
      await this.loadDetails("Minotaur");
      await this.loadDetails("Mummy");
      await this.loadDetails("Nightmare");
      await this.loadDetails("Owlbear");
      await this.loadDetails("PhaseSpider");
      await this.loadDetails("Veteran");
      await this.loadDetails("Werewolf");
      await this.loadDetails("Wight");
      await this.loadDetails("WinterWolf");

      // LEVEL 4
      await this.loadDetails("BlackPudding");
      await this.loadDetails("Chuul");
      await this.loadDetails("Couatl");
      await this.loadDetails("Elephant");
      await this.loadDetails("Ettin");
      await this.loadDetails("Ghost");
      await this.loadDetails("Lamia");
      await this.loadDetails("RedDragonWyrmling");
      await this.loadDetails("SuccubusIncubus");
      await this.loadDetails("Wereboar");
      await this.loadDetails("Weretiger");

      // LEVEL 5
      await this.loadDetails("AirElemental");
      await this.loadDetails("BarbedDevil");
      await this.loadDetails("Bulette");
      await this.loadDetails("EarthElemental");
      await this.loadDetails("FireElemental");
      await this.loadDetails("FleshGolem");
      await this.loadDetails("GiantCrocodile");
      await this.loadDetails("GiantShark");
      await this.loadDetails("Gladiator");
      await this.loadDetails("Gorgon");
      await this.loadDetails("HalfRedDragonVeteran");
      await this.loadDetails("HillGiant");
      await this.loadDetails("NightHag");
      await this.loadDetails("Otyugh");
      await this.loadDetails("Roper");
      await this.loadDetails("Salamander");
      await this.loadDetails("ShamblingMound");
      await this.loadDetails("Triceratops");
      await this.loadDetails("Troll");
      await this.loadDetails("Unicorn");
      await this.loadDetails("VampireSpawn");
      await this.loadDetails("WaterElemental");
      await this.loadDetails("Werebear");
      await this.loadDetails("Wraith");
      await this.loadDetails("Xorn");

      // LEVEL 6
      await this.loadDetails("Chimera");
      await this.loadDetails("Drider");
      await this.loadDetails("InvisibleStalker");
      await this.loadDetails("Mage");
      await this.loadDetails("Mammoth");
      await this.loadDetails("Medusa");
      await this.loadDetails("Vrock");
      await this.loadDetails("Wyvern");
      await this.loadDetails("YoungBrassDragon");
      await this.loadDetails("YoungWhiteDragon");

      // LEVEL 7
      await this.loadDetails("GiantApe");
      await this.loadDetails("Oni");
      await this.loadDetails("ShieldGuardian");
      await this.loadDetails("StoneGiant");
      await this.loadDetails("YoungBlackDragon");
      await this.loadDetails("YoungCopperDragon");

      // LEVEL 8
      await this.loadDetails("Assassin");
      await this.loadDetails("ChainDevil");
      await this.loadDetails("Cloaker");
      await this.loadDetails("FrostGiant");
      await this.loadDetails("Hezrou");
      await this.loadDetails("Hydra");
      await this.loadDetails("SpiritNaga");
      await this.loadDetails("TyrannosaurusRex");
      await this.loadDetails("YoungBronzeDragon");
      await this.loadDetails("YoungGreenDragon");

      // LEVEL 9
      await this.loadDetails("BoneDevil");
      await this.loadDetails("ClayGolem");
      await this.loadDetails("CloudGiant");
      await this.loadDetails("FireGiant");
      await this.loadDetails("Glabrezu");
      await this.loadDetails("Treant");
      await this.loadDetails("YoungBlueDragon");
      await this.loadDetails("YoungSilverDragon");

      // LEVEL 10
      await this.loadDetails("Aboleth");
      await this.loadDetails("Deva");
      await this.loadDetails("GuardianNaga");
      await this.loadDetails("StoneGolem");
      await this.loadDetails("YoungGoldDragon");
      await this.loadDetails("YoungRedDragon");

      // LEVEL 11
      await this.loadDetails("Behir");
      await this.loadDetails("Djinni");
      await this.loadDetails("Efreeti");
      await this.loadDetails("Gynosphinx");
      await this.loadDetails("HornedDevil");
      await this.loadDetails("Remorhaz");
      await this.loadDetails("Roc");

      // LEVEL 12
      await this.loadDetails("Archmage");
      await this.loadDetails("Erinyes");

      // LEVEL 13
      await this.loadDetails("AdultBrassDragon");
      await this.loadDetails("AdultWhiteDragon");
      await this.loadDetails("Nalfeshnee");
      await this.loadDetails("Rakshasa");
      await this.loadDetails("StormGiant");
      await this.loadDetails("Vampire");

      // LEVEL 14
      await this.loadDetails("AdultBlackDragon");
      await this.loadDetails("AdultCopperDragon");
      await this.loadDetails("IceDevil");

      // LEVEL 15
      await this.loadDetails("AdultBronzeDragon");
      await this.loadDetails("AdultGreenDragon");
      await this.loadDetails("MummyLord");
      await this.loadDetails("PurpleWorm");

      // LEVEL 16
      await this.loadDetails("AdultBlueDragon");
      await this.loadDetails("AdultSilverDragon");
      await this.loadDetails("IronGolem");
      await this.loadDetails("Marilith");
      await this.loadDetails("Planetar");

      // LEVEL 17
      await this.loadDetails("AdultGoldDragon");
      await this.loadDetails("AdultRedDragon");
      await this.loadDetails("Androsphinx");
      await this.loadDetails("DragonTurtle");

      // LEVEL 19
      await this.loadDetails("Balor");

      // LEVEL 20
      await this.loadDetails("AncientBrassDragon");
      await this.loadDetails("AncientWhiteDragon");
      await this.loadDetails("PitFiend");

      // LEVEL 21
      await this.loadDetails("AncientBlackDragon");
      await this.loadDetails("AncientCopperDragon");
      await this.loadDetails("Lich");
      await this.loadDetails("Solar");

      // LEVEL 22
      await this.loadDetails("AncientBronzeDragon");
      await this.loadDetails("AncientGreenDragon");

      // LEVEL 23
      await this.loadDetails("AncientBlueDragon");
      await this.loadDetails("AncientSilverDragon");
      await this.loadDetails("Kraken");

      // LEVEL 24
      await this.loadDetails("AncientGoldDragon");
      await this.loadDetails("AncientRedDragon");

      // LEVEL 30
      await this.loadDetails("Tarrasque");
      
      this.calculateTopEncounters();
    },
  },
  created() {
    this.load();
    if (this.$router.history.current.path !== "/monsterEncounters/") {
      this.$router.push({ path: "/monsterEncounters/" })
    }
  },
};
</script>
