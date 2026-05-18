const story = [
    { bg: "images/black.jpg", name: "Me", text: "I killed a man in winter." },
    { bg: "images/black.jpg", name: "Me", text: "Though I cannot say with certainty which winter it was." },
    { bg: "images/black.jpg", name: "Me", text: "That is the first difficulty." },
    { bg: "images/black.jpg", name: "Me", text: "Not that I killed him." },
    { bg: "images/black.jpg", name: "Me", text: "Of that, I am as certain as a man can be of anything that happened long ago." },
    { bg: "images/black.jpg", name: "Me", text: "It is the season that swallowed the year whole." },
    { bg: "images/black.jpg", name: "Me", text: "Winter repeats itself too faithfully." },
    { bg: "images/black.jpg", name: "Me", text: "Every snowfall resembles the last." },
    { bg: "images/black.jpg", name: "Me", text: "Every bare tree holds the same expression." },
    { bg: "images/black.jpg", name: "Me", text: "An accusation." },
    { bg: "images/black.jpg", name: "Me", text: "Time, once touched by guilt, ceases to proceed in a straight line." },
    { bg: "images/black.jpg", name: "Me", text: "It softens at the edges." },
    { bg: "images/black.jpg", name: "Me", text: "It caves beneath recollection like old floorboards under the weight of someone walking above you in the dark." },
    { bg: "images/black.jpg", name: "Me", text: "Still..." },
    { bg: "images/black.jpg", name: "Me", text: "I remember the cold." },

    { bg: "images/room.jpg", name: "Me", text: "Not the abstract cold one speaks of indoors." },
    { bg: "images/room.jpg", name: "Me", text: "Not while wrapped in blankets." },
    { bg: "images/room.jpg", name: "Me", text: "Not with the floor heating beneath your feet and a kettle muttering on the stove." },
    { bg: "images/room.jpg", name: "Me", text: "I mean the kind that enters through the fingernails first." },
    { bg: "images/room.jpg", name: "Me", text: "The kind that makes the joints of the hand ache before the skin has even begun to sting." },
    { bg: "images/room.jpg", name: "Me", text: "The air that evening was so sharp it seemed to have corners." },
    { bg: "images/room.jpg", name: "Me", text: "Each breath cut my throat on the way down." },
    { bg: "images/room.jpg", name: "Me", text: "Snow had fallen earlier in the day." },
    { bg: "images/room.jpg", name: "Me", text: "Then stopped." },
    { bg: "images/room.jpg", name: "Me", text: "The wooded hillside became unnaturally still." },
    { bg: "images/room.jpg", name: "Me", text: "As if every sound had been packed under the white crust and buried there." },

    { bg: "images/road.jpg", name: "Me", text: "My boots sank into the road with a muffled crunch." },
    { bg: "images/road.jpg", name: "Me", text: "Too loud." },
    { bg: "images/road.jpg", name: "Me", text: "Though there was no one close enough to hear." },
    { bg: "images/road.jpg", name: "Me", text: "The road was not much of a road." },
    { bg: "images/road.jpg", name: "Me", text: "Only a narrow strip of frozen dirt climbing through the trees above the villages outside Incheon." },
    { bg: "images/road.jpg", name: "Me", text: "Where the city thinned into farmland." },
    { bg: "images/road.jpg", name: "Me", text: "Where the sea wind came inland through bare branches." },
    { bg: "images/road.jpg", name: "Me", text: "The sort of road that appears on no map unless your family has lived nearby for generations." },
    { bg: "images/road.jpg", name: "Me", text: "I had walked it many times." },
    { bg: "images/road.jpg", name: "Me", text: "Never with a knife in my coat pocket." },

    { bg: "images/shop.jpg", name: "Me", text: "It was an ordinary knife." },
    { bg: "images/shop.jpg", name: "Me", text: "That detail matters." },
    { bg: "images/shop.jpg", name: "Me", text: "I had bought it two months earlier." },
    { bg: "images/shop.jpg", name: "Me", text: "From a hardware shop near the old bus terminal." },
    { bg: "images/shop.jpg", name: "Old Man", text: "Need something?" },
    { bg: "images/shop.jpg", name: "Me", text: "Just looking." },
    { bg: "images/shop.jpg", name: "Old Man", text: "No one comes in here just to look." },
    { bg: "images/shop.jpg", name: "Me", text: "The owner wore spectacles so thick his eyes seemed detached from his face." },
    { bg: "images/shop.jpg", name: "Me", text: "As if they floated separately behind the lenses." },
    { bg: "images/shop.jpg", name: "Me", text: "The knife had a wooden handle." },
    { bg: "images/shop.jpg", name: "Me", text: "Slightly black." },
    { bg: "images/shop.jpg", name: "Me", text: "The blade was just under twelve centimeters." },
    { bg: "images/shop.jpg", name: "Me", text: "I remember the price." },
    { bg: "images/shop.jpg", name: "Old Man", text: "12,000 won." },
    { bg: "images/shop.jpg", name: "Me", text: "Exactly 12,000 won." },
    { bg: "images/shop.jpg", name: "Me", text: "Because I had thought at the time it was too much for such a plain thing." },
    { bg: "images/shop.jpg", name: "Me", text: "There was a small notch near the hilt where the metal had not been polished properly." },
    { bg: "images/shop.jpg", name: "Me", text: "My thumb found that imperfection often." },
    { bg: "images/shop.jpg", name: "Me", text: "It was there beneath my glove as I walked." },
    { bg: "images/shop.jpg", name: "Me", text: "Rubbing the same notch again and again." },
    { bg: "images/shop.jpg", name: "Me", text: "As if confirming the knife was real." },
    { bg: "images/shop.jpg", name: "Me", text: "And not merely an intention." },

    { bg: "images/room.jpg", name: "Me", text: "I had not gone out with a plan." },
    { bg: "images/room.jpg", name: "Me", text: "Or so I told myself then." },
    { bg: "images/room.jpg", name: "Me", text: "There had been no quarrel." },
    { bg: "images/room.jpg", name: "Me", text: "No debt." },
    { bg: "images/room.jpg", name: "Me", text: "No insult that demanded satisfaction." },
    { bg: "images/room.jpg", name: "Me", text: "I had spent the afternoon in my rented room." },
    { bg: "images/room.jpg", name: "Me", text: "Staring at wallpaper peeling near the stove." },
    { bg: "images/room.jpg", name: "Me", text: "Unable to read." },
    { bg: "images/room.jpg", name: "Me", text: "Unable to sleep." },
    { bg: "images/room.jpg", name: "Me", text: "Unable even to think in a coherent sequence." },
    { bg: "images/room.jpg", name: "Me", text: "A pressure had been building in me for weeks." },
    { bg: "images/room.jpg", name: "Me", text: "Perhaps months." },
    { bg: "images/room.jpg", name: "Me", text: "A sensation not unlike standing at the top of a staircase." },
    { bg: "images/room.jpg", name: "Me", text: "And feeling, with dreadful fascination, how easy it would be to let yourself fall." },
    { bg: "images/room.jpg", name: "Me", text: "There are impulses that arrive not from hatred." },
    { bg: "images/room.jpg", name: "Me", text: "But from vacancy." },
    { bg: "images/room.jpg", name: "Me", text: "One wants to see whether the world will change shape if something irreversible is done to it." },

    { bg: "images/forest.jpg", name: "Me", text: "So I walked." },
    { bg: "images/forest.jpg", name: "Me", text: "Dusk came early." },
    { bg: "images/forest.jpg", name: "Me", text: "It always does in winter." },
    { bg: "images/forest.jpg", name: "Me", text: "The light thinned between the trees until everything seemed submerged." },
    { bg: "images/forest.jpg", name: "Me", text: "As if the hillside had sunk to the bottom of a frozen sea." },
    { bg: "images/forest.jpg", name: "Me", text: "Then I saw him." },
    { bg: "images/forest.jpg", name: "Me", text: "He stood at the side of the road." },
    { bg: "images/forest.jpg", name: "Me", text: "Near a cedar whose branches had long since died." },
    { bg: "images/forest.jpg", name: "Me", text: "Hardened into black claws against the sky." },
    { bg: "images/forest.jpg", name: "Me", text: "He was not doing anything remarkable." },
    { bg: "images/forest.jpg", name: "Me", text: "That is what horrifies me now." },
    { bg: "images/forest.jpg", name: "Me", text: "He was simply standing there." },
    { bg: "images/forest.jpg", name: "Me", text: "Reading a letter." },
    { bg: "images/forest.jpg", name: "Me", text: "His hat was pushed back from his forehead." },
    { bg: "images/forest.jpg", name: "Me", text: "He held the page close to his face because the light was failing." },
    { bg: "images/forest.jpg", name: "Me", text: "Once, he lifted his gloved hand and brushed snow from the paper." },
    { bg: "images/forest.jpg", name: "Me", text: "Such a small gesture." },
    { bg: "images/forest.jpg", name: "Me", text: "So human." },
    { bg: "images/forest.jpg", name: "Me", text: "So entirely unprepared for what was already approaching him from behind." },
    { bg: "images/forest.jpg", name: "Me", text: "I stopped when I first saw him." },
    { bg: "images/forest.jpg", name: "Me", text: "The distance between us could not have been more than twenty paces." },
    { bg: "images/forest.jpg", name: "Me", text: "Had he turned, he would have seen me plainly." },
    { bg: "images/forest.jpg", name: "Me", text: "But he did not." },
    { bg: "images/forest.jpg", name: "Me", text: "His attention belonged to the letter." },
    { bg: "images/forest.jpg", name: "Me", text: "I remember the exact sound of the paper rustling in the sea wind." },
    { bg: "images/forest.jpg", name: "Me", text: "I remember one of his boots half-buried in a drift." },
    { bg: "images/forest.jpg", name: "Me", text: "I remember thinking..." },
    { bg: "images/forest.jpg", name: "Me", text: "Not in words." },
    { bg: "images/forest.jpg", name: "Me", text: "But with a blank certainty." },
    { bg: "images/forest.jpg", name: "Me", text: "If I keep walking..." },
    { bg: "images/forest.jpg", name: "Me", text: "Something will happen that can never be undone." },
    { bg: "images/forest.jpg", name: "Me", text: "I kept walking." },
    { bg: "images/forest.jpg", name: "Me", text: "My heartbeat did not quicken." },
    { bg: "images/forest.jpg", name: "Me", text: "That surprises me even now." },
    { bg: "images/forest.jpg", name: "Me", text: "One imagines murder as frenzy." },
    { bg: "images/forest.jpg", name: "Me", text: "A storm of blood and panic." },
    { bg: "images/forest.jpg", name: "Me", text: "But there was only stillness." },
    { bg: "images/forest.jpg", name: "Me", text: "As though I had stepped out of myself." },
    { bg: "images/forest.jpg", name: "Me", text: "And was watching from somewhere behind my own eyes." },

    { bg: "images/forest.jpg", name: "Stranger", text: "...?" },
    { bg: "images/forest.jpg", name: "Me", text: "He heard me when I was two steps behind him." },
    { bg: "images/forest.jpg", name: "Me", text: "He began to turn." },
    { bg: "images/forest.jpg", name: "Me", text: "Only slightly." },
    { bg: "images/forest.jpg", name: "Me", text: "Enough that his shoulder shifted." },
    { bg: "images/forest.jpg", name: "Me", text: "Enough that I saw the corner of his eye." },
    { bg: "images/forest.jpg", name: "Me", text: "My left hand seized his collar." },
    { bg: "images/forest.jpg", name: "Me", text: "The wool was rough." },
    { bg: "images/forest.jpg", name: "Me", text: "Damp with melted snow." },
    { bg: "images/forest.jpg", name: "Me", text: "My fingers slipped once." },
    { bg: "images/forest.jpg", name: "Me", text: "Then found purchase." },

    { bg: "images/black.jpg", name: "Me", text: "My right hand moved." },
    { bg: "images/black.jpg", name: "Me", text: "The knife entered beneath his ribs." },
    { bg: "images/black.jpg", name: "Me", text: "That is where I had imagined it would go." },
    { bg: "images/black.jpg", name: "Me", text: "Though I did not know until that instant that I had imagined anything at all." },
    { bg: "images/black.jpg", name: "Me", text: "There was resistance first." },
    { bg: "images/black.jpg", name: "Me", text: "The coat." },
    { bg: "images/black.jpg", name: "Me", text: "The shirt beneath." },
    { bg: "images/black.jpg", name: "Me", text: "After that..." },
    { bg: "images/black.jpg", name: "Me", text: "Nothing." },
    { bg: "images/black.jpg", name: "Me", text: "The blade passed through him with an ease so obscene it offended me." },
    { bg: "images/black.jpg", name: "Me", text: "Flesh should resist." },
    { bg: "images/black.jpg", name: "Me", text: "Bone should intervene." },
    { bg: "images/black.jpg", name: "Me", text: "But it was as though the body had already opened itself to receive the steel." },
    { bg: "images/black.jpg", name: "Me", text: "He dropped the letter." },
    { bg: "images/black.jpg", name: "Me", text: "It fell face-up into the snow." },
    { bg: "images/black.jpg", name: "Me", text: "The black lines of writing stark against the white." },
    { bg: "images/black.jpg", name: "Me", text: "He made a wet choking noise." },
    { bg: "images/black.jpg", name: "Me", text: "We slipped together." },
    { bg: "images/black.jpg", name: "Me", text: "My boots lost purchase." },
    { bg: "images/black.jpg", name: "Me", text: "We both fell." },
    { bg: "images/black.jpg", name: "Me", text: "The knife tore sideways as he went down." },
    { bg: "images/black.jpg", name: "Me", text: "Warmth burst over my hand." },
    { bg: "images/black.jpg", name: "Me", text: "For a moment, I thought I had cut myself." },
    { bg: "images/black.jpg", name: "Me", text: "But it was his blood." },
    { bg: "images/black.jpg", name: "Me", text: "Soaking through my glove." },
    { bg: "images/black.jpg", name: "Me", text: "Startling in its heat." },
    { bg: "images/black.jpg", name: "Me", text: "Steam rose where it struck the snow." },

    { bg: "images/black.jpg", name: "Me", text: "And then he looked at me." },
    { bg: "images/black.jpg", name: "Me", text: "No hatred." },
    { bg: "images/black.jpg", name: "Me", text: "No fear." },
    { bg: "images/black.jpg", name: "Me", text: "Only confusion." },
    { bg: "images/black.jpg", name: "Me", text: "A terrible, intimate bewilderment." },
    { bg: "images/black.jpg", name: "Me", text: "As though he were trying to place me." },
    { bg: "images/black.jpg", name: "Me", text: "As though my face belonged somewhere in his childhood." },
    { bg: "images/black.jpg", name: "Me", text: "Or in a dream." },
    { bg: "images/black.jpg", name: "Stranger", text: "...Me..." },
    { bg: "images/black.jpg", name: "Me", text: "His lips moved." },
    { bg: "images/black.jpg", name: "Me", text: "I leaned closer." },
    { bg: "images/black.jpg", name: "Me", text: "Desperate to hear." },
    { bg: "images/black.jpg", name: "Me", text: "I think he said my name." },
    { bg: "images/black.jpg", name: "Me", text: "But that cannot be true." },
    { bg: "images/black.jpg", name: "Me", text: "I had never seen him before." },
    { bg: "images/black.jpg", name: "Me", text: "He died less than a minute later." },
    { bg: "images/black.jpg", name: "Me", text: "The body did not thrash." },
    { bg: "images/black.jpg", name: "Me", text: "It shuddered." },
    { bg: "images/black.jpg", name: "Me", text: "A series of smaller and smaller shudders." },
    { bg: "images/black.jpg", name: "Me", text: "Until nothing remained." },
    { bg: "images/black.jpg", name: "Me", text: "His eyes stayed open." },
    { bg: "images/black.jpg", name: "Me", text: "Snow gathered on his lashes." },
    { bg: "images/black.jpg", name: "Me", text: "One flake landed on the dark pupil." },
    { bg: "images/black.jpg", name: "Me", text: "It did not melt." },

    { bg: "images/forest.jpg", name: "Me", text: "I stood over him for some time." },
    { bg: "images/forest.jpg", name: "Me", text: "I do not know how long." },
    { bg: "images/forest.jpg", name: "Me", text: "The hillside had become completely silent." },
    { bg: "images/forest.jpg", name: "Me", text: "Even the wind from the harbor seemed to have withdrawn." },
    { bg: "images/forest.jpg", name: "Me", text: "As though it wanted no part in what had happened." },
    { bg: "images/forest.jpg", name: "Me", text: "My breath smoked above us in pale clouds." },
    { bg: "images/forest.jpg", name: "Me", text: "My right hand still held the knife." },
    { bg: "images/forest.jpg", name: "Me", text: "I remember noticing that my wrist hurt." },
    { bg: "images/forest.jpg", name: "Me", text: "Not from the stabbing." },
    { bg: "images/forest.jpg", name: "Me", text: "From how tightly I had been gripping the handle." },

    { bg: "images/forest.jpg", name: "Me", text: "Then practicality asserted itself." },
    { bg: "images/forest.jpg", name: "Me", text: "It came not as panic." },
    { bg: "images/forest.jpg", name: "Me", text: "Not even regret." },
    { bg: "images/forest.jpg", name: "Me", text: "Only a series of simple facts." },
    { bg: "images/forest.jpg", name: "Me", text: "The body was visible." },
    { bg: "images/forest.jpg", name: "Me", text: "The road was not empty forever." },
    { bg: "images/forest.jpg", name: "Me", text: "Someone might come." },
    { bg: "images/forest.jpg", name: "Me", text: "And if someone came..." },
    { bg: "images/forest.jpg", name: "Me", text: "Then all of this would become real." },
    { bg: "images/forest.jpg", name: "Me", text: "I dragged him by the ankles." },
    { bg: "images/forest.jpg", name: "Me", text: "He was heavier than I expected." },
    { bg: "images/forest.jpg", name: "Me", text: "Dead weight." },
    { bg: "images/forest.jpg", name: "Me", text: "People say that phrase casually." },
    { bg: "images/forest.jpg", name: "Me", text: "They do not know how literal it feels." },
    { bg: "images/forest.jpg", name: "Me", text: "His coat kept catching on frozen roots beneath the snow." },
    { bg: "images/forest.jpg", name: "Me", text: "His head struck stones as we moved." },
    { bg: "images/forest.jpg", name: "Me", text: "A dull sound." },
    { bg: "images/forest.jpg", name: "Me", text: "Again." },
    { bg: "images/forest.jpg", name: "Me", text: "And again." },
    { bg: "images/forest.jpg", name: "Me", text: "That sound still wakes me." },

    { bg: "images/cedar.jpg", name: "Me", text: "The cedar stood deeper in the trees." },
    { bg: "images/cedar.jpg", name: "Me", text: "Dead." },
    { bg: "images/cedar.jpg", name: "Me", text: "Split by lightning long ago." },
    { bg: "images/cedar.jpg", name: "Me", text: "One side of its trunk had rotted away." },
    { bg: "images/cedar.jpg", name: "Me", text: "The roots rose from the ground like ribs." },
    { bg: "images/cedar.jpg", name: "Me", text: "I chose it because the earth there looked softer." },
    { bg: "images/cedar.jpg", name: "Me", text: "It was not." },
    { bg: "images/cedar.jpg", name: "Me", text: "The frost had hardened the soil to the consistency of brick." },
    { bg: "images/cedar.jpg", name: "Me", text: "I had no shovel." },
    { bg: "images/cedar.jpg", name: "Me", text: "I used a branch first." },
    { bg: "images/cedar.jpg", name: "Me", text: "It snapped." },
    { bg: "images/cedar.jpg", name: "Me", text: "Then the knife." },
    { bg: "images/cedar.jpg", name: "Me", text: "The blade bent slightly." },
    { bg: "images/cedar.jpg", name: "Me", text: "Then my hands." },
    { bg: "images/cedar.jpg", name: "Me", text: "The cold burned so intensely it stopped feeling like cold." },
    { bg: "images/cedar.jpg", name: "Me", text: "It became merely pain." },
    { bg: "images/cedar.jpg", name: "Me", text: "Dirt packed under my nails." },
    { bg: "images/cedar.jpg", name: "Me", text: "The skin across my knuckles split." },
    { bg: "images/cedar.jpg", name: "Me", text: "I could not feel my fingertips." },
    { bg: "images/cedar.jpg", name: "Me", text: "Several times, I stopped." },
    { bg: "images/cedar.jpg", name: "Me", text: "I thought I heard footsteps on the road." },
    { bg: "images/cedar.jpg", name: "Me", text: "But it was only my own heartbeat." },
    { bg: "images/cedar.jpg", name: "Me", text: "The hole was too shallow." },
    { bg: "images/cedar.jpg", name: "Me", text: "I knew that even as I lowered him into it." },
    { bg: "images/cedar.jpg", name: "Me", text: "His knees would not straighten." },
    { bg: "images/cedar.jpg", name: "Me", text: "One arm bent beneath his back." },
    { bg: "images/cedar.jpg", name: "Me", text: "I almost pulled him out to dig deeper." },
    { bg: "images/cedar.jpg", name: "Me", text: "But then his face tilted toward me." },
    { bg: "images/cedar.jpg", name: "Me", text: "His eyes were still open." },
    { bg: "images/cedar.jpg", name: "Me", text: "Snow had melted into them." },
    { bg: "images/cedar.jpg", name: "Me", text: "And something in my chest seized." },
    { bg: "images/cedar.jpg", name: "Me", text: "I began shoveling dirt over him with both hands." },
    { bg: "images/cedar.jpg", name: "Me", text: "Too quickly." },
    { bg: "images/cedar.jpg", name: "Me", text: "Hardly caring whether he was covered." },

    { bg: "images/cedar.jpg", name: "Me", text: "At one point..." },
    { bg: "images/cedar.jpg", name: "Me", text: "His hand emerged again." },
    { bg: "images/cedar.jpg", name: "Me", text: "Fingers pushing through the loose earth." },
    { bg: "images/cedar.jpg", name: "Me", text: "As if reaching upward." },
    { bg: "images/cedar.jpg", name: "Me", text: "As if asking for help." },
    { bg: "images/cedar.jpg", name: "Me", text: "I struck it with the branch." },
    { bg: "images/cedar.jpg", name: "Me", text: "Once." },
    { bg: "images/cedar.jpg", name: "Me", text: "Twice." },
    { bg: "images/cedar.jpg", name: "Me", text: "Until it disappeared." },

    { bg: "images/black.jpg", name: "Me", text: "When it was done..." },
    { bg: "images/black.jpg", name: "Me", text: "I stood over the disturbed patch of snow." },
    { bg: "images/black.jpg", name: "Me", text: "Panting." },
    { bg: "images/black.jpg", name: "Me", text: "Covered in mud." },
    { bg: "images/black.jpg", name: "Me", text: "Covered in blood." },
    { bg: "images/black.jpg", name: "Me", text: "And then..." },
    { bg: "images/black.jpg", name: "Me", text: "I began to laugh." },
    { bg: "images/black.jpg", name: "Me", text: "Not because it was funny." },
    { bg: "images/black.jpg", name: "Me", text: "Because the silence had become unbearable." },
    { bg: "images/black.jpg", name: "Me", text: "Because if I had not laughed..." },
    { bg: "images/black.jpg", name: "Me", text: "I think I would have screamed so loudly the whole hillside would have answered." },

    { bg: "images/train.jpg", name: "Me", text: "I moved away the following spring." },
    { bg: "images/train.jpg", name: "Me", text: "No one came for me." },
    { bg: "images/train.jpg", name: "Me", text: "That was the strangest part." },
    { bg: "images/train.jpg", name: "Me", text: "The world did not rearrange itself around the act." },
    { bg: "images/train.jpg", name: "Me", text: "The woman who sold hotteok near the station still lit her cart every evening." },
    { bg: "images/train.jpg", name: "Me", text: "The church loudspeaker still crackled on Sunday mornings." },
    { bg: "images/train.jpg", name: "Me", text: "Children still kicked half-frozen soccer balls in schoolyards." },
    { bg: "images/train.jpg", name: "Me", text: "No detective appeared." },
    { bg: "images/train.jpg", name: "Me", text: "No notices were posted." },
    { bg: "images/train.jpg", name: "Me", text: "No missing traveler." },
    { bg: "images/train.jpg", name: "Me", text: "It was as though the man had not existed before I killed him." },
    { bg: "images/train.jpg", name: "Me", text: "And therefore could not be missed afterward." },

    { bg: "images/room.jpg", name: "Me", text: "At first, I listened for every footstep outside my room." },
    { bg: "images/room.jpg", name: "Me", text: "Every knock at the door made my hands go numb." },
    { bg: "images/room.jpg", name: "Me", text: "I burned the coat I had worn that night." },
    { bg: "images/room.jpg", name: "Me", text: "I scrubbed the knife until the wooden handle cracked from hot water." },
    { bg: "images/room.jpg", name: "Me", text: "Then one evening..." },
    { bg: "images/room.jpg", name: "Me", text: "I realized I had gone an entire day without thinking of him." },
    { bg: "images/room.jpg", name: "Me", text: "That frightened me more than the murder." },
    { bg: "images/room.jpg", name: "Me", text: "Because it meant the mind can digest anything." },
    { bg: "images/room.jpg", name: "Me", text: "Given enough time." },
    { bg: "images/room.jpg", name: "Me", text: "Years passed." },
    { bg: "images/room.jpg", name: "Me", text: "Or months." },
    { bg: "images/room.jpg", name: "Me", text: "I cannot say." },
    { bg: "images/room.jpg", name: "Me", text: "I lived in three districts." },
    { bg: "images/room.jpg", name: "Me", text: "Perhaps four." },
    { bg: "images/room.jpg", name: "Me", text: "Small rooms in buildings whose names I never learned." },
    { bg: "images/room.jpg", name: "Me", text: "I took whatever work required little speech." },
    { bg: "images/room.jpg", name: "Me", text: "I avoided mirrors." },
    { bg: "images/room.jpg", name: "Me", text: "Dreams came often." },
    { bg: "images/room.jpg", name: "Me", text: "Snow beneath my boots." },
    { bg: "images/room.jpg", name: "Me", text: "A letter in the road." },
    { bg: "images/room.jpg", name: "Me", text: "A man turning too late." },
    { bg: "images/room.jpg", name: "Me", text: "But waking was always a relief." },
    { bg: "images/room.jpg", name: "Me", text: "Until last night." },

    { bg: "images/room_night.jpg", name: "Me", text: "The room I occupy now is on the third floor of a boarding house." },
    { bg: "images/room_night.jpg", name: "Me", text: "The wallpaper is green." },
    { bg: "images/room_night.jpg", name: "Me", text: "Though smoke from the stove has darkened it into the color of old bruises." },
    { bg: "images/room_night.jpg", name: "Me", text: "The widow downstairs coughs in her sleep every night just after midnight." },
    { bg: "images/room_night.jpg", name: "Me", text: "The boards in the hallway swell when it rains." },
    { bg: "images/room_night.jpg", name: "Me", text: "So the door sticks unless one lifts it while turning the handle." },
    { bg: "images/room_night.jpg", name: "Me", text: "These details matter." },
    { bg: "images/room_night.jpg", name: "Me", text: "Because they prove this happened in a real place." },
    { bg: "images/room_night.jpg", name: "Me", text: "And not merely in the theater of a fever." },

    { bg: "images/room_night.jpg", name: "Me", text: "The knocking came." },
    { bg: "images/room_night.jpg", name: "Me", text: "Three times." },
    { bg: "images/room_night.jpg", name: "Me", text: "Soft." },
    { bg: "images/room_night.jpg", name: "Me", text: "Polite." },
    { bg: "images/room_night.jpg", name: "Me", text: "Not the pounding of a drunk." },
    { bg: "images/room_night.jpg", name: "Me", text: "Not the landlord." },
    { bg: "images/room_night.jpg", name: "Me", text: "Each knock separated by the exact same pause." },
    { bg: "images/room_night.jpg", name: "Me", text: "As though performed by someone counting silently." },
    { bg: "images/room_night.jpg", name: "Me", text: "The widow's coughing stopped." },
    { bg: "images/room_night.jpg", name: "Me", text: "The fire gave a small crack." },
    { bg: "images/room_night.jpg", name: "Me", text: "Then the whole house seemed to hold its breath." },
    { bg: "images/room_night.jpg", name: "Me", text: "I opened the door." },
    { bg: "images/room_night.jpg", name: "Me", text: "The corridor was empty." },
    { bg: "images/room_night.jpg", name: "Me", text: "The lamp at the far end flickered." },
    { bg: "images/room_night.jpg", name: "Me", text: "No footsteps." },
    { bg: "images/room_night.jpg", name: "Me", text: "No sound." },
    { bg: "images/room_night.jpg", name: "Me", text: "Then I looked down." },
    { bg: "images/room_night.jpg", name: "Me", text: "An envelope lay on the floorboards." },
    { bg: "images/room_night.jpg", name: "Me", text: "Damp." },
    { bg: "images/room_night.jpg", name: "Me", text: "A thin sheen of moisture covered the paper." },
    { bg: "images/room_night.jpg", name: "Me", text: "As though it had been left in snow." },
    { bg: "images/room_night.jpg", name: "Me", text: "There was no address." },
    { bg: "images/room_night.jpg", name: "Me", text: "No seal." },
    { bg: "images/room_night.jpg", name: "Me", text: "Only a dark stain in one corner." },
    { bg: "images/room_night.jpg", name: "Me", text: "I bent to pick it up." },
    { bg: "images/room_night.jpg", name: "Me", text: "And recoiled." },
    { bg: "images/room_night.jpg", name: "Me", text: "The paper was warm." },
    { bg: "images/room_night.jpg", name: "Me", text: "Not room temperature." },
    { bg: "images/room_night.jpg", name: "Me", text: "Warm like skin." },
    { bg: "images/room_night.jpg", name: "Me", text: "Warm like something alive." },
    { bg: "images/room_night.jpg", name: "Me", text: "Inside was a single folded sheet." },
    { bg: "images/room_night.jpg", name: "Me", text: "I recognized the handwriting at once." },
    { bg: "images/room_night.jpg", name: "Me", text: "Though I had never seen it before." },
    { bg: "images/room_night.jpg", name: "Me", text: "That sentence is impossible." },
    { bg: "images/room_night.jpg", name: "Me", text: "Yet it is true." },
    { bg: "images/room_night.jpg", name: "Me", text: "Some patterns are known not by sight." },
    { bg: "images/room_night.jpg", name: "Me", text: "But by dread." },
    { bg: "images/room_night.jpg", name: "Me", text: "My stomach turned before I read the first line." },
    { bg: "images/room_night.jpg", name: "Me", text: "Because I understood where I had seen those slanting lines." },
    { bg: "images/room_night.jpg", name: "Me", text: "On the paper in the snow." },
    { bg: "images/room_night.jpg", name: "Me", text: "The letter the man had been reading before I killed him." },

    { bg: "images/room_night.jpg", name: "Letter", text: "If you are reading this..." },
    { bg: "images/room_night.jpg", name: "Letter", text: "Then I have already killed you." },

    { bg: "images/black.jpg", name: "Me", text: "I screamed." },
    { bg: "images/black.jpg", name: "Me", text: "I did not mean to." },
    { bg: "images/black.jpg", name: "Me", text: "The sound escaped me." },
    { bg: "images/black.jpg", name: "Me", text: "I stumbled backward." },
    { bg: "images/black.jpg", name: "Me", text: "Knocked the lamp over." },
    { bg: "images/black.jpg", name: "Me", text: "Oil spilled across the floor." },
    { bg: "images/black.jpg", name: "Me", text: "By some mercy, it did not ignite." },
    { bg: "images/black.jpg", name: "Me", text: "I could not look away from the doorway." },
    { bg: "images/black.jpg", name: "Me", text: "Certain someone would step through it." },
    { bg: "images/black.jpg", name: "Me", text: "Someone wet with snow." },
    { bg: "images/black.jpg", name: "Me", text: "Someone whose face I had covered with frozen earth." },
    { bg: "images/black.jpg", name: "Me", text: "No one entered." },
    { bg: "images/black.jpg", name: "Me", text: "Minutes passed." },
    { bg: "images/black.jpg", name: "Me", text: "Perhaps longer." },
    { bg: "images/black.jpg", name: "Me", text: "Eventually..." },
    { bg: "images/black.jpg", name: "Me", text: "Because terror becomes compulsion when prolonged..." },
    { bg: "images/black.jpg", name: "Me", text: "I picked the letter up again." },
    { bg: "images/black.jpg", name: "Me", text: "And read the rest." },

    { bg: "images/black.jpg", name: "Letter", text: "You do not know me, though you think you killed me." },
    { bg: "images/black.jpg", name: "Letter", text: "On the contrary, I selected you years ago." },
    { bg: "images/black.jpg", name: "Letter", text: "I knew what you would become." },
    { bg: "images/black.jpg", name: "Letter", text: "I knew the road you would walk." },
    { bg: "images/black.jpg", name: "Letter", text: "The stranger you would meet." },
    { bg: "images/black.jpg", name: "Letter", text: "The knife you would carry." },
    { bg: "images/black.jpg", name: "Letter", text: "I stood there because I had already written it." },
    { bg: "images/black.jpg", name: "Letter", text: "I have always written it." },

    { bg: "images/black.jpg", name: "Me", text: "At the bottom was one final line." },
    { bg: "images/black.jpg", name: "Letter", text: "Look beneath your floorboards." },

    { bg: "images/room_night.jpg", name: "Me", text: "I should have fled." },
    { bg: "images/room_night.jpg", name: "Me", text: "Any sane man would have fled." },
    { bg: "images/room_night.jpg", name: "Me", text: "But guilt is a kind of obedience." },
    { bg: "images/room_night.jpg", name: "Me", text: "It trains the soul to answer accusation even when spoken by the dead." },
    { bg: "images/room_night.jpg", name: "Me", text: "I took the iron poker." },
    { bg: "images/room_night.jpg", name: "Me", text: "And struck the floor." },
    { bg: "images/room_night.jpg", name: "Me", text: "Once." },
    { bg: "images/room_night.jpg", name: "Me", text: "Twice." },
    { bg: "images/room_night.jpg", name: "Me", text: "On the third blow..." },
    { bg: "images/room_night.jpg", name: "Me", text: "The board split." },
    { bg: "images/room_night.jpg", name: "Me", text: "Beneath was a cavity." },
    { bg: "images/room_night.jpg", name: "Me", text: "Wrapped in a yellowing bedsheet..." },
    { bg: "images/room_night.jpg", name: "Me", text: "Lay a body." },
    { bg: "images/room_night.jpg", name: "Me", text: "Fresh." },
    { bg: "images/room_night.jpg", name: "Me", text: "No smell of decay." },
    { bg: "images/room_night.jpg", name: "Me", text: "No skeleton." },
    { bg: "images/room_night.jpg", name: "Me", text: "Only a man as though recently dead." },
    { bg: "images/room_night.jpg", name: "Me", text: "His skin pale." },
    { bg: "images/room_night.jpg", name: "Me", text: "A single narrow wound in the chest." },
    { bg: "images/room_night.jpg", name: "Me", text: "Mud packed beneath the fingernails." },
    { bg: "images/room_night.jpg", name: "Me", text: "Frozen there." },
    { bg: "images/room_night.jpg", name: "Me", text: "It was me." },
    { bg: "images/room_night.jpg", name: "Me", text: "My face." },
    { bg: "images/room_night.jpg", name: "Me", text: "My mouth slightly open." },
    { bg: "images/room_night.jpg", name: "Me", text: "My scar above the left eyebrow." },
    { bg: "images/room_night.jpg", name: "Me", text: "The one from childhood." },
    { bg: "images/room_night.jpg", name: "Me", text: "The one no stranger should know." },
    { bg: "images/room_night.jpg", name: "Me", text: "Myself." },

    { bg: "images/room_night.jpg", name: "Me", text: "As I write this..." },
    { bg: "images/room_night.jpg", name: "Me", text: "Someone is knocking again." },
    { bg: "images/room_night.jpg", name: "Me", text: "Three times." },
    { bg: "images/room_night.jpg", name: "Me", text: "Soft." },
    { bg: "images/room_night.jpg", name: "Me", text: "Polite." },
    { bg: "images/room_night.jpg", name: "Me", text: "And from the way the boards creak outside..." },
    { bg: "images/room_night.jpg", name: "Me", text: "From the rhythm of the breathing beyond the threshold..." },
    { bg: "images/room_night.jpg", name: "Me", text: "From the strange certainty that has entered me like a second heartbeat..." },
    { bg: "images/room_night.jpg", name: "Me", text: "I know it is me." },
    { bg: "images/room_night.jpg", name: "Me", text: "And when I open the door..." },
    { bg: "images/room_night.jpg", name: "Me", text: "He will be holding a letter." },

    { bg: "images/black.jpg", name: "", text: "" }
];

// Rest of the engine code (copy this below the story array)
let currentIndex = 0;
let typing = false;
let fullText = '';
let charIndex = 0;
let interval;

const bgEl = document.getElementById('background');
const nameEl = document.getElementById('namebox');
const textEl = document.getElementById('text');
const textboxEl = document.getElementById('textbox');
const titleScreen = document.getElementById('title-screen');
const gameScreen = document.getElementById('game-screen');
const bgMusic = document.getElementById('bgMusic');

function typeText(text) {
    clearInterval(interval);
    textEl.textContent = '';
    fullText = text;
    charIndex = 0;
    typing = true;
    interval = setInterval(() => {
        if (charIndex < fullText.length) {
            textEl.textContent += fullText.charAt(charIndex);
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

    nameEl.textContent = line.name || '';
    if (!line.name) {
        textboxEl.classList.add('narration');
    } else {
        textboxEl.classList.remove('narration');
    }

    typeText(line.text);
}

function startGame() {
    titleScreen.style.opacity = '0';
    setTimeout(() => {
        titleScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        bgMusic.src = "audio/wind.ogg";
        bgMusic.play().catch(() => {});
        showLine();
    }, 1800);
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

document.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (typing) {
            clearInterval(interval);
            textEl.textContent = fullText;
            typing = false;
        } else {
            currentIndex++;
            showLine();
        }
    }
});
