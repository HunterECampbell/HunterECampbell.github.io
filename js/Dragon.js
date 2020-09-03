var main = function() {
	$("#dragon").click(function() {
    var fighting = true
    var yourHP = 15
    var yourDamage = 0
    var dragonHP = 16
    var dragonDamage = 0
    var attackStrings = [
      "You courageously attack the dragon!",
      "You yell bravely as you attack!",
      "You boldy swing your weapon at the dragon!",
      "Your fearless aura gives you strength as you attack!",
      '"This isn\'t a day of defeat, but a day of glory", you yell!',
      '"No more will I allow you to trample my people!  This day you will fall", you yell!',
      '"This amount of gold could create a city that would shine as the pinnacle of all good in the world", you say!'
    ]
    var defeatStrings = [
      "The heat from the dragons last attack burns you down as you feel your life go up in flames.",
      "Tis\' the end for you, brave warrior.",
      "Too bad for your people that your defeat will bring death and fire upon their city.",
      "Perhaps another warrior will take the glory you sought.",
      "Running under the dragon\'s belly to attack seemed like a good idea... until the dragon crushed you.",
      "The dragon smacks you into the air, instantly killing you.  Looked cool in the 3rd person as your body smashed against the wall, though.",
      "Your victory could have been recorded in songs, poems, statues, and books.  Unfortunately those thoughts went up in flames."
    ]
    var victoryStrings = [
      "You did it!  The dragon is dead!",
      '"Finally my people and I are free from your oppression, dragon," you say as the dragon topples to the ground — dead.',
      "The dragon\'s last breath was a fiery one, but it is no more.",
      "Your victory will be recorded in songs, poems, statues, and books!  This is a great day!",
      '"It\'s over.  Finally", you exhaustedly, but triumphantly, say.',
      "The gold is yours.  You earned it!",
      "You didn't leave unscathed from this battle, but you did leave alive and your foe dead."
    ]
    var tieStrings = [
      "This is unprecedented!  You have defeated the dragon, but the dragon has also defeated you!",
      "What a glorious battle!  The dragon is dead, but you are too.",
      "You are the first to defeat the dragon, but you are defeated too.",
      "Your victory will be recorded in songs, poems, statues, and books!  This is a great day!  But it would be a better day if you survived.",
      'I would say, "Another one bites the dust", but two bit the dust today.',
      "You have defeated the dragon and the dragon has defeated you.  Who will claim the gold?",
      "The battle ends... but no one leaves the lair."
    ]
    var giveUpStrings = [
      "Your cowardice will be recorded in songs, poems, statues, and books.  You have not only died, but become the laughing stock of the people.",
      "You really thought you could leave alive?",
      "Well, that wasn't what I was expecting.  I was hoping to watch a better fight.",
      "The dragon reigns supreme as he burns you to ashes in your panicked, failed escape.",
      "Perhaps another will fill the shoes the people so desperately need.",
      "If only it were as simple as walking away from the battle.  You have died.",
      "Many have fled, I don't blame you, but that doesn't dismiss the fact the you died while trying to flee."
    ]

    var userChoice = confirm("You see a dragon guarding some gold.  The poeple of you city have request you free them from this scourge.\n\nNow that you are here, though, do you want to fight the dragon?")

    if (userChoice === false) {
      confirm("You understand just how deadly dragons are, but the people won't forget your choice.\n\nYou leave and live to fight another day.")
    } else {
      while (fighting) {
        yourDamage = Math.floor(Math.random() * 5)
        dragonDamage = Math.floor(Math.random() * 5) + 1
        yourHP -= dragonDamage
        dragonHP -= yourDamage

        if (yourHP < 0) {
          yourHP = 0
        }
        if (dragonHP < 0) {
          dragonHP = 0
        }

        if (yourHP === 0 && dragonHP !== 0) { // DEFEAT
          alert(`
            ${defeatStrings[Math.floor(Math.random() * (defeatStrings.length - 1))]}

            Damage dealt: ${yourDamage}
            Damage received: ${dragonDamage}

            Your health: ${yourHP}
            Dragon health: ${dragonHP}
          `)

          fighting = false
        } else if (yourHP !== 0 && dragonHP === 0) { // VICTORY
          alert(`
            ${victoryStrings[Math.floor(Math.random() * (victoryStrings.length - 1))]}

            Damage dealt: ${yourDamage}
            Damage received: ${dragonDamage}

            Your health: ${yourHP}
            Dragon health: ${dragonHP}
          `)

          fighting = false
        } else if (yourHP === 0 && dragonHP === 0) {// TIE
          alert(`
            ${tieStrings[Math.floor(Math.random() * (tieStrings.length - 1))]}

            Damage dealt: ${yourDamage}
            Damage received: ${dragonDamage}

            Your health: ${yourHP}
            Dragon health: ${dragonHP}
          `)

          fighting = false
        } else { // FIGHT CONTINUES
          var continueFighting = confirm(`
            ${attackStrings[Math.floor(Math.random() * (attackStrings.length - 1))]}

            Damage dealt: ${yourDamage}
            Damage received: ${dragonDamage}

            Your health: ${yourHP}
            Dragon health: ${dragonHP}
            
            Would you like to stay and fight, or flee?
          `)

          if (!continueFighting) {
            alert(giveUpStrings[Math.floor(Math.random() * (giveUpStrings.length - 1))])
            fighting = false
          }
        }
      }
    }
	});
};

$(document).ready(main);