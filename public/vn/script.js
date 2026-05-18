const story = [
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "I killed a man in winter." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Though I cannot say with certainty which winter it was." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "That is the first difficulty." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Not that I killed him." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Of that, I am as certain as a man can be of anything that happened long ago." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "It is the season that swallowed the year whole." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Winter repeats itself too faithfully." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Every snowfall resembles the last." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Every bare tree holds the same expression." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "An accusation." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Time, once touched by guilt, ceases to proceed in a straight line." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "It softens at the edges." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "It caves beneath recollection like old floorboards under the weight of someone walking above you in the dark." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Still..." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "I remember the cold." },

    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Not the abstract cold one speaks of indoors." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Not while wrapped in blankets." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Not with the floor heating beneath your feet and a kettle muttering on the stove." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I mean the kind that enters through the fingernails first." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "The kind that makes the joints of the hand ache before the skin has even begun to sting." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "The air that evening was so sharp it seemed to have corners." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Each breath cut my throat on the way down." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Snow had fallen earlier in the day." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Then stopped." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "The wooded hillside became unnaturally still." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "As if every sound had been packed under the white crust and buried there." },

    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "My boots sank into the road with a muffled crunch." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Too loud." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Though there was no one close enough to hear." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "The road was not much of a road." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Only a narrow strip of frozen dirt climbing through the trees above the villages outside Incheon." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Where the city thinned into farmland." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Where the sea wind came inland through bare branches." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "The sort of road that appears on no map unless your family has lived nearby for generations." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "I had walked it many times." },
    { bg: "images/bg-road.jpg", char: "me neutral.png", name: "Me", text: "Never with a knife in my coat pocket." },

    { bg: "images/bg-shop.jpg", char: "oldman neutral.png", name: "Old Man", text: "Need something?" },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "Just looking." },
    { bg: "images/bg-shop.jpg", char: "oldman neutral.png", name: "Old Man", text: "No one comes in here just to look." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "The owner wore spectacles so thick his eyes seemed detached from his face." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "As if they floated separately behind the lenses." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "The knife had a wooden handle." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "Slightly black." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "The blade was just under twelve centimeters." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "I remember the price." },
    { bg: "images/bg-shop.jpg", char: "oldman neutral.png", name: "Old Man", text: "12,000 won." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "Exactly 12,000 won." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "Because I had thought at the time it was too much for such a plain thing." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "There was a small notch near the hilt where the metal had not been polished properly." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "My thumb found that imperfection often." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "It was there beneath my glove as I walked." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "Rubbing the same notch again and again." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "As if confirming the knife was real." },
    { bg: "images/bg-shop.jpg", char: "me neutral.png", name: "Me", text: "And not merely an intention." },

    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I had not gone out with a plan." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Or so I told myself then." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "There had been no quarrel." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "No debt." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "No insult that demanded satisfaction." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I had spent the afternoon in my rented room." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Staring at wallpaper peeling near the stove." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Unable to read." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Unable to sleep." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Unable even to think in a coherent sequence." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "A pressure had been building in me for weeks." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Perhaps months." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "A sensation not unlike standing at the top of a staircase." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "And feeling, with dreadful fascination, how easy it would be to let yourself fall." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "There are impulses that arrive not from hatred." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "But from vacancy." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "One wants to see whether the world will change shape if something irreversible is done to it." },

    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "So I walked." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Dusk came early." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "It always does in winter." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "The light thinned between the trees until everything seemed submerged." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "As if the hillside had sunk to the bottom of a frozen sea." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Then I saw him." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "He stood at the side of the road." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Near a cedar whose branches had long since died." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Hardened into black claws against the sky." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "He was not doing anything remarkable." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "That is what horrifies me now." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "He was simply standing there." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Reading a letter." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "His hat was pushed back from his forehead." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "He held the page close to his face because the light was failing." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Once, he lifted his gloved hand and brushed snow from the paper." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Such a small gesture." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "So human." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "So entirely unprepared for what was already approaching him from behind." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "I stopped when I first saw him." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "The distance between us could not have been more than twenty paces." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Had he turned, he would have seen me plainly." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "But he did not." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "His attention belonged to the letter." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "I remember the exact sound of the paper rustling in the sea wind." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "I remember one of his boots half-buried in a drift." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "I remember thinking..." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Not in words." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "But with a blank certainty." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "If I keep walking..." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "Something will happen that can never be undone." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "I kept walking." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "My heartbeat did not quicken." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "That surprises me even now." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "One imagines murder as frenzy." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "A storm of blood and panic." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "But there was only stillness." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "As though I had stepped out of myself." },
    { bg: "images/bg-forest-dusk.jpg", char: "me neutral.png", name: "Me", text: "And was watching from somewhere behind my own eyes." },

    { bg: "images/bg-forest-dusk.jpg", char: "stranger back.png", name: "Stranger", text: "...?" },

    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "My right hand moved." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "The knife entered beneath his ribs." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "That is where I had imagined it would go." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Though I did not know until that instant that I had imagined anything at all." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "There was resistance first." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "The coat." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "The shirt beneath." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "After that..." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Nothing." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "The blade passed through him with an ease so obscene it offended me." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Flesh should resist." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Bone should intervene." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "But it was as though the body had already opened itself to receive the steel." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "He dropped the letter." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "It fell face-up into the snow." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "The black lines of writing stark against the white." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "He made a wet choking noise." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "We slipped together." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "My boots lost purchase." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "We both fell." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "The knife tore sideways as he went down." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Warmth burst over my hand." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "For a moment, I thought I had cut myself." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "But it was his blood." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Soaking through my glove." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Startling in its heat." },
    { bg: "images/black.jpg", char: "stranger hurt.png", name: "Me", text: "Steam rose where it struck the snow." },

    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "And then he looked at me." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "No hatred." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "No fear." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "Only confusion." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "A terrible, intimate bewilderment." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "As though he were trying to place me." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "As though my face belonged somewhere in his childhood." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Me", text: "Or in a dream." },
    { bg: "images/black.jpg", char: "stranger face.png", name: "Stranger", text: "...Me..." },

    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "I stood over him for some time." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "I do not know how long." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "The hillside had become completely silent." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Even the wind from the harbor seemed to have withdrawn." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "As though it wanted no part in what had happened." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "My breath smoked above us in pale clouds." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "My right hand still held the knife." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "I remember noticing that my wrist hurt." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Not from the stabbing." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "From how tightly I had been gripping the handle." },

    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Then practicality asserted itself." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "It came not as panic." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Not even regret." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Only a series of simple facts." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "The body was visible." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "The road was not empty forever." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Someone might come." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "And if someone came..." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Then all of this would become real." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "I dragged him by the ankles." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "He was heavier than I expected." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Dead weight." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "People say that phrase casually." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "They do not know how literal it feels." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "His coat kept catching on frozen roots beneath the snow." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "His head struck stones as we moved." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "A dull sound." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "Again." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "And again." },
    { bg: "images/bg-forest-night.jpg", char: "me hurt.png", name: "Me", text: "That sound still wakes me." },

    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "The cedar stood deeper in the trees." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Dead." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Split by lightning long ago." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "One side of its trunk had rotted away." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "The roots rose from the ground like ribs." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I chose it because the earth there looked softer." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "It was not." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "The frost had hardened the soil to the consistency of brick." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I had no shovel." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I used a branch first." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "It snapped." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Then the knife." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "The blade bent slightly." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Then my hands." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "The cold burned so intensely it stopped feeling like cold." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "It became merely pain." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Dirt packed under my nails." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "The skin across my knuckles split." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I could not feel my fingertips." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Several times, I stopped." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I thought I heard footsteps on the road." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "But it was only my own heartbeat." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "The hole was too shallow." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I knew that even as I lowered him into it." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "His knees would not straighten." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "One arm bent beneath his back." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I almost pulled him out to dig deeper." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "But then his face tilted toward me." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "His eyes were still open." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Snow had melted into them." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "And something in my chest seized." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I began shoveling dirt over him with both hands." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Too quickly." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Hardly caring whether he was covered." },

    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "At one point..." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "His hand emerged again." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Fingers pushing through the loose earth." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "As if reaching upward." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "As if asking for help." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "I struck it with the branch." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Once." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Twice." },
    { bg: "images/bg-cedar.jpg", char: "me hurt.png", name: "Me", text: "Until it disappeared." },

    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "When it was done..." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "I stood over the disturbed patch of snow." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "Panting." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "Covered in mud." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "Covered in blood." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "And then..." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "I began to laugh." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "Not because it was funny." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "Because the silence had become unbearable." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "Because if I had not laughed..." },
    { bg: "images/black.jpg", char: "me hurt.png", name: "Me", text: "I think I would have screamed so loudly the whole hillside would have answered." },

    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "I moved away the following spring." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "No one came for me." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "That was the strangest part." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "The world did not rearrange itself around the act." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "The woman who sold hotteok near the station still lit her cart every evening." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "The church loudspeaker still crackled on Sunday mornings." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "Children still kicked half-frozen soccer balls in schoolyards." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "No detective appeared." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "No notices were posted." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "No missing traveler." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "It was as though the man had not existed before I killed him." },
    { bg: "images/bg-train.jpg", char: "me neutral.png", name: "Me", text: "And therefore could not be missed afterward." },

    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "At first, I listened for every footstep outside my room." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Every knock at the door made my hands go numb." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I burned the coat I had worn that night." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I scrubbed the knife until the wooden handle cracked from hot water." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Then one evening..." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I realized I had gone an entire day without thinking of him." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "That frightened me more than the murder." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Because it meant the mind can digest anything." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Given enough time." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Years passed." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Or months." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I cannot say." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I lived in three districts." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Perhaps four." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Small rooms in buildings whose names I never learned." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I took whatever work required little speech." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "I avoided mirrors." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Dreams came often." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Snow beneath my boots." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "A letter in the road." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "A man turning too late." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "But waking was always a relief." },
    { bg: "images/bg-room.jpg", char: "me neutral.png", name: "Me", text: "Until last night." },

    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The room I occupy now is on the third floor of a boarding house." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The wallpaper is green." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Though smoke from the stove has darkened it into the color of old bruises." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The widow downstairs coughs in her sleep every night just after midnight." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The boards in the hallway swell when it rains." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "So the door sticks unless one lifts it while turning the handle." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "These details matter." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Because they prove this happened in a real place." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "And not merely in the theater of a fever." },

    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The knocking came." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Three times." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Soft." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Polite." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Not the pounding of a drunk." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Not the landlord." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Each knock separated by the exact same pause." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "As though performed by someone counting silently." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The widow's coughing stopped." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The fire gave a small crack." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Then the whole house seemed to hold its breath." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "I opened the door." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The corridor was empty." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The lamp at the far end flickered." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "No footsteps." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "No sound." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Then I looked down." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "An envelope lay on the floorboards." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Damp." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "A thin sheen of moisture covered the paper." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "As though it had been left in snow." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "There was no address." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "No seal." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Only a dark stain in one corner." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "I bent to pick it up." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "And recoiled." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The paper was warm." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Not room temperature." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Warm like skin." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Warm like something alive." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Inside was a single folded sheet." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "I recognized the handwriting at once." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Though I had never seen it before." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "That sentence is impossible." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Yet it is true." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Some patterns are known not by sight." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "But by dread." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "My stomach turned before I read the first line." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "Because I understood where I had seen those slanting lines." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "On the paper in the snow." },
    { bg: "images/bg-room-night.jpg", char: "me neutral.png", name: "Me", text: "The letter the man had been reading before I killed him." },

    // Letter parts - special display
    { bg: "images/bg-room-night.jpg", char: "letter.png", name: "", text: "If you are reading this...", isLetter: true },
    { bg: "images/bg-room-night.jpg", char: "letter.png", name: "", text: "Then I have already killed you.", isLetter: true },

    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "I screamed." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "I did not mean to." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "The sound escaped me." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "I stumbled backward." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Knocked the lamp over." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Oil spilled across the floor." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "By some mercy, it did not ignite." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "I could not look away from the doorway." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Certain someone would step through it." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Someone wet with snow." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Someone whose face I had covered with frozen earth." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "No one entered." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Minutes passed." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Perhaps longer." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Eventually..." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "Because terror becomes compulsion when prolonged..." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "I picked the letter up again." },
    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "And read the rest." },

    { bg: "images/black.jpg", char: "letter.png", name: "", text: "You do not know me, though you think you killed me.", isLetter: true },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "On the contrary, I selected you years ago.", isLetter: true },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "I knew what you would become.", isLetter: true },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "I knew the road you would walk.", isLetter: true },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "The stranger you would meet.", isLetter: true },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "The knife you would carry.", isLetter: true },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "I stood there because I had already written it.", isLetter: true },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "I have always written it.", isLetter: true },

    { bg: "images/black.jpg", char: "me shocked.png", name: "Me", text: "At the bottom was one final line." },
    { bg: "images/black.jpg", char: "letter.png", name: "", text: "Look beneath your floorboards.", isLetter: true },

    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "I should have fled." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Any sane man would have fled." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "But guilt is a kind of obedience." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "It trains the soul to answer accusation even when spoken by the dead." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "I took the iron poker." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "And struck the floor." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Once." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Twice." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "On the third blow..." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "The board split." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Beneath was a cavity." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Wrapped in a yellowing bedsheet..." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Lay a body." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Fresh." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "No smell of decay." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "No skeleton." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Only a man as though recently dead." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "His skin pale." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "A single narrow wound in the chest." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Mud packed beneath the fingernails." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Frozen there." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "It was me." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "My face." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "My mouth slightly open." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "My scar above the left eyebrow." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "The one from childhood." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "The one no stranger should know." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Myself." },

    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "As I write this..." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Someone is knocking again." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Three times." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Soft." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "Polite." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "And from the way the boards creak outside..." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "From the rhythm of the breathing beyond the threshold..." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "From the strange certainty that has entered me like a second heartbeat..." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "I know it is me." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "And when I open the door..." },
    { bg: "images/bg-room-night.jpg", char: "me shocked.png", name: "Me", text: "He will be holding a letter." },

    { bg: "images/black.jpg", char: "", name: "", text: "THE END" }
];

// ====================== ENGINE ======================
let currentIndex = 0;
let typing = false;
let fullText = '';
let charIndex = 0;
let interval;

const bgEl = document.getElementById('background');
const charEl = document.getElementById('character');
const nameEl = document.getElementById('namebox');
const textEl = document.getElementById('text');
const textboxEl = document.getElementById('textbox');
const letterBox = document.getElementById('letter-box');
const letterText = document.getElementById('letter-text');
const titleScreen = document.getElementById('title-screen');
const gameScreen = document.getElementById('game-screen');
const bgMusic = document.getElementById('bgMusic');
const sfxPlayer = document.getElementById('sfx');

bgMusic.loop = true;

function playSFX(name) {
    if (!name) return;
    sfxPlayer.src = `audios/${name}.ogg`;
    sfxPlayer.currentTime = 0;
    sfxPlayer.play().catch(() => {});
}

function typeText(text, isLetter = false) {
    clearInterval(interval);
    if (isLetter) {
        letterText.textContent = '';
    } else {
        textEl.textContent = '';
    }
    fullText = text;
    charIndex = 0;
    typing = true;
    interval = setInterval(() => {
        if (charIndex < fullText.length) {
            if (isLetter) {
                letterText.textContent += fullText.charAt(charIndex);
            } else {
                textEl.textContent += fullText.charAt(charIndex);
            }
            charIndex++;
        } else {
            clearInterval(interval);
            typing = false;
        }
    }, 32);
}

function showLine() {
    if (currentIndex >= story.length) return;
    const line = story[currentIndex];

    if (line.bg) bgEl.style.backgroundImage = `url('${line.bg}')`;

    // Character sprite
    if (line.char && charEl) {
        charEl.src = `images/${line.char}`;
        charEl.style.opacity = '1';
    } else if (charEl) {
        charEl.style.opacity = '0';
    }

    // Special handling for letter texts
    if (line.isLetter) {
        textboxEl.style.display = 'none';
        letterBox.style.display = 'block';
        nameEl.textContent = '';
        typeText(line.text, true);
    } else {
        textboxEl.style.display = 'block';
        letterBox.style.display = 'none';
        nameEl.textContent = line.name || '';
        if (!line.name) {
            textboxEl.classList.add('narration');
        } else {
            textboxEl.classList.remove('narration');
        }
        typeText(line.text, false);
    }

    playSFX(line.sfx);
}

function startGame() {
    titleScreen.style.opacity = '0';
    setTimeout(() => {
        titleScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        bgMusic.src = "audios/wind.ogg";
        bgMusic.play().catch(() => {});
        showLine();
    }, 1500);
}

textboxEl.addEventListener('click', () => {
    if (typing) {
        clearInterval(interval);
        textEl.textContent = fullText;
        typing = false;
        return;
    }
    currentIndex++;
    showLine();
});

letterBox.addEventListener('click', () => {
    if (typing) {
        clearInterval(interval);
        letterText.textContent = fullText;
        typing = false;
        return;
    }
    currentIndex++;
    showLine();
});

document.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (typing) {
            clearInterval(interval);
            if (letterBox.style.display === 'block') {
                letterText.textContent = fullText;
            } else {
                textEl.textContent = fullText;
            }
            typing = false;
        } else {
            currentIndex++;
            showLine();
        }
    }
});
