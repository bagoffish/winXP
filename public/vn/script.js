// ====================== STORY DATA ======================
const story = [
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I killed a man in winter." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Though I cannot say with certainty which winter it was." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "That is the first difficulty." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not that I killed him." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Of that, I am as certain as a man can be of anything that happened long ago." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "It is the season that swallowed the year whole." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Winter repeats itself too faithfully." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Every snowfall resembles the last." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Every bare tree holds the same expression." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "An accusation." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Time, once touched by guilt, ceases to proceed in a straight line." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "It softens at the edges." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "It caves beneath recollection like old floorboards under the weight of someone walking above you in the dark." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Still..." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I remember the cold." },

    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not the abstract cold one speaks of indoors." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not while wrapped in blankets." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not with the floor heating beneath your feet and a kettle muttering on the stove." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I mean the kind that enters through the fingernails first." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The kind that makes the joints of the hand ache before the skin has even begun to sting." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The air that evening was so sharp it seemed to have corners." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Each breath cut my throat on the way down." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Snow had fallen earlier in the day." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Then stopped." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The wooded hillside became unnaturally still." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "As if every sound had been packed under the white crust and buried there." },

    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "My boots sank into the road with a muffled crunch." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Too loud." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Though there was no one close enough to hear." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The road was not much of a road." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Only a narrow strip of frozen dirt climbing through the trees above the villages outside Incheon." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Where the city thinned into farmland." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Where the sea wind came inland through bare branches." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The sort of road that appears on no map unless your family has lived nearby for generations." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I had walked it many times." },
    { bg: "/vn/images/bg-road.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Never with a knife in my coat pocket." },

    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/oldman-neutral.png", name: "Old Man", text: "Need something?" },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Just looking." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/oldman-neutral.png", name: "Old Man", text: "No one comes in here just to look." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The owner wore spectacles so thick his eyes seemed detached from his face." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "As if they floated separately behind the lenses." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The knife had a wooden handle." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Slightly black." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The blade was just under twelve centimeters." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I remember the price." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/oldman-neutral.png", name: "Old Man", text: "12,000 won." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Exactly 12,000 won." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Because I had thought at the time it was too much for such a plain thing." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "There was a small notch near the hilt where the metal had not been polished properly." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "My thumb found that imperfection often." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "It was there beneath my glove as I walked." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Rubbing the same notch again and again." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "As if confirming the knife was real." },
    { bg: "/vn/images/bg-shop.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "And not merely an intention." },

    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I had not gone out with a plan." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Or so I told myself then." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "There had been no quarrel." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No debt." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No insult that demanded satisfaction." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I had spent the afternoon in my rented room." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Staring at wallpaper peeling near the stove." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Unable to read." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Unable to sleep." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Unable even to think in a coherent sequence." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "A pressure had been building in me for weeks." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Perhaps months." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "A sensation not unlike standing at the top of a staircase." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "And feeling, with dreadful fascination, how easy it would be to let yourself fall." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "There are impulses that arrive not from hatred." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "But from vacancy." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "One wants to see whether the world will change shape if something irreversible is done to it." },

    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "So I walked." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Dusk came early." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "It always does in winter." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The light thinned between the trees until everything seemed submerged." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "As if the hillside had sunk to the bottom of a frozen sea." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Then I saw him." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "He stood at the side of the road." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Near a cedar whose branches had long since died." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Hardened into black claws against the sky." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "He was not doing anything remarkable." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "That is what horrifies me now." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "He was simply standing there." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Reading a letter." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "His hat was pushed back from his forehead." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "He held the page close to his face because the light was failing." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Once, he lifted his gloved hand and brushed snow from the paper." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Such a small gesture." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "So human." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "So entirely unprepared for what was already approaching him from behind." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I stopped when I first saw him." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The distance between us could not have been more than twenty paces." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Had he turned, he would have seen me plainly." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "But he did not." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "His attention belonged to the letter." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I remember the exact sound of the paper rustling in the sea wind." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I remember one of his boots half-buried in a drift." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I remember thinking..." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not in words." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "But with a blank certainty." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "If I keep walking..." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Something will happen that can never be undone." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I kept walking." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "My heartbeat did not quicken." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "That surprises me even now." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "One imagines murder as frenzy." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "A storm of blood and panic." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "But there was only stillness." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "As though I had stepped out of myself." },
    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "And was watching from somewhere behind my own eyes." },

    { bg: "/vn/images/bg-forest-dusk.jpg", char: "/vn/images/stranger-back.png", name: "Stranger", text: "...?" },

    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "My right hand moved." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "The knife entered beneath his ribs." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "That is where I had imagined it would go." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Though I did not know until that instant that I had imagined anything at all." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "There was resistance first." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "The coat." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "The shirt beneath." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "After that..." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Nothing." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "The blade passed through him with an ease so obscene it offended me." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Flesh should resist." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Bone should intervene." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "But it was as though the body had already opened itself to receive the steel." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "He dropped the letter." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "It fell face-up into the snow." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "The black lines of writing stark against the white." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "He made a wet choking noise." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "We slipped together." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "My boots lost purchase." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "We both fell." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "The knife tore sideways as he went down." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Warmth burst over my hand." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "For a moment, I thought I had cut myself." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "But it was his blood." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Soaking through my glove." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Startling in its heat." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-hurt.png", name: "Me", text: "Steam rose where it struck the snow." },

    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "And then he looked at me." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "No hatred." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "No fear." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "Only confusion." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "A terrible, intimate bewilderment." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "As though he were trying to place me." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "As though my face belonged somewhere in his childhood." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Me", text: "Or in a dream." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/stranger-face.png", name: "Stranger", text: "...Ah..." },

    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I stood over him for some time." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I do not know how long." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The hillside had become completely silent." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Even the wind from the harbor seemed to have withdrawn." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "As though it wanted no part in what had happened." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "My breath smoked above us in pale clouds." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "My right hand still held the knife." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I remember noticing that my wrist hurt." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Not from the stabbing." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "From how tightly I had been gripping the handle." },

    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Then practicality asserted itself." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "It came not as panic." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Not even regret." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Only a series of simple facts." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The body was visible." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The road was not empty forever." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Someone might come." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "And if someone came..." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Then all of this would become real." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I dragged him by the ankles." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "He was heavier than I expected." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Dead weight." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "People say that phrase casually." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "They do not know how literal it feels." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "His coat kept catching on frozen roots beneath the snow." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "His head struck stones as we moved." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "A dull sound." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Again." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "And again." },
    { bg: "/vn/images/bg-forest-night.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "That sound still wakes me." },

    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The cedar stood deeper in the trees." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Dead." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Split by lightning long ago." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "One side of its trunk had rotted away." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The roots rose from the ground like ribs." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I chose it because the earth there looked softer." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "It was not." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The frost had hardened the soil to the consistency of brick." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I had no shovel." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I used a branch first." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "It snapped." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Then the knife." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The blade bent slightly." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Then my hands." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The cold burned so intensely it stopped feeling like cold." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "It became merely pain." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Dirt packed under my nails." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The skin across my knuckles split." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I could not feel my fingertips." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Several times, I stopped." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I thought I heard footsteps on the road." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "But it was only my own heartbeat." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "The hole was too shallow." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I knew that even as I lowered him into it." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "His knees would not straighten." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "One arm bent beneath his back." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I almost pulled him out to dig deeper." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "But then his face tilted toward me." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "His eyes were still open." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Snow had melted into them." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "And something in my chest seized." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I began shoveling dirt over him with both hands." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Too quickly." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Hardly caring whether he was covered." },

    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "At one point..." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "His hand emerged again." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Fingers pushing through the loose earth." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "As if reaching upward." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "As if asking for help." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I struck it with the branch." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Once." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Twice." },
    { bg: "/vn/images/bg-cedar.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Until it disappeared." },

    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "When it was done..." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I stood over the disturbed patch of snow." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Panting." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Covered in mud." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Covered in blood." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "And then..." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I began to laugh." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Not because it was funny." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Because the silence had become unbearable." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "Because if I had not laughed..." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-hurt.png", name: "Me", text: "I think I would have screamed so loudly the whole hillside would have answered." },

    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I moved away the following spring." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No one came for me." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "That was the strangest part." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The world did not rearrange itself around the act." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The woman who sold hotteok near the station still lit her cart every evening." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The church loudspeaker still crackled on Sunday mornings." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Children still kicked half-frozen soccer balls in schoolyards." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No detective appeared." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No notices were posted." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No missing traveler." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "It was as though the man had not existed before I killed him." },
    { bg: "/vn/images/bg-train.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "And therefore could not be missed afterward." },

    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "At first, I listened for every footstep outside my room." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Every knock at the door made my hands go numb." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I burned the coat I had worn that night." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I scrubbed the knife until the wooden handle cracked from hot water." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Then one evening..." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I realized I had gone an entire day without thinking of him." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "That frightened me more than the murder." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Because it meant the mind can digest anything." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Given enough time." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Years passed." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Or months." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I cannot say." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I lived in three districts." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Perhaps four." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Small rooms in buildings whose names I never learned." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I took whatever work required little speech." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I avoided mirrors." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Dreams came often." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Snow beneath my boots." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "A letter in the road." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "A man turning too late." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "But waking was always a relief." },
    { bg: "/vn/images/bg-room.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Until last night." },

    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The room I occupy now is on the third floor of a boarding house." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The wallpaper is green." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Though smoke from the stove has darkened it into the color of old bruises." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The widow downstairs coughs in her sleep every night just after midnight." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The boards in the hallway swell when it rains." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "So the door sticks unless one lifts it while turning the handle." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "These details matter." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Because they prove this happened in a real place." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "And not merely in the theater of a fever." },

    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The knocking came." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Three times." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Soft." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Polite." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not the pounding of a drunk." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not the landlord." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Each knock separated by the exact same pause." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "As though performed by someone counting silently." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The widow's coughing stopped." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The fire gave a small crack." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Then the whole house seemed to hold its breath." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I opened the door." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The corridor was empty." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The lamp at the far end flickered." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No footsteps." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No sound." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Then I looked down." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "An envelope lay on the floorboards." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Damp." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "A thin sheen of moisture covered the paper." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "As though it had been left in snow." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "There was no address." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "No seal." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Only a dark stain in one corner." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I bent to pick it up." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "And recoiled." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The paper was warm." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Not room temperature." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Warm like skin." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Warm like something alive." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Inside was a single folded sheet." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "I recognized the handwriting at once." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Though I had never seen it before." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "That sentence is impossible." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Yet it is true." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Some patterns are known not by sight." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "But by dread." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "My stomach turned before I read the first line." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "Because I understood where I had seen those slanting lines." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "On the paper in the snow." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-neutral.png", name: "Me", text: "The letter the man had been reading before I killed him." },

    // Letter parts
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/letter.png", name: "", text: "If you are reading this...", isLetter: true },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/letter.png", name: "", text: "Then I have already killed you.", isLetter: true },

    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I screamed." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I did not mean to." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "The sound escaped me." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I stumbled backward." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Knocked the lamp over." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Oil spilled across the floor." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "By some mercy, it did not ignite." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I could not look away from the doorway." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Certain someone would step through it." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Someone wet with snow." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Someone whose face I had covered with frozen earth." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "No one entered." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Minutes passed." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Perhaps longer." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Eventually..." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Because terror becomes compulsion when prolonged..." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I picked the letter up again." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "And read the rest." },

    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "You do not know me, though you think you killed me.", isLetter: true },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "On the contrary, I selected you years ago.", isLetter: true },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "I knew what you would become.", isLetter: true },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "I knew the road you would walk.", isLetter: true },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "The stranger you would meet.", isLetter: true },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "The knife you would carry.", isLetter: true },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "I stood there because I had already written it.", isLetter: true },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "I have always written it.", isLetter: true },

    { bg: "/vn/images/black.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "At the bottom was one final line." },
    { bg: "/vn/images/black.jpg", char: "/vn/images/letter.png", name: "", text: "Look beneath your floorboards.", isLetter: true },

    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I should have fled." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Any sane man would have fled." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "But guilt is a kind of obedience." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "It trains the soul to answer accusation even when spoken by the dead." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I took the iron poker." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "And struck the floor." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Once." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Twice." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "On the third blow..." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "The board split." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Beneath was a cavity." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Wrapped in a yellowing bedsheet..." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Lay a body." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Fresh." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "No smell of decay." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "No skeleton." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Only a man as though recently dead." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "His skin pale." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "A single narrow wound in the chest." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Mud packed beneath the fingernails." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Frozen there." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "It was me." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "My face." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "My mouth slightly open." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "My scar above the left eyebrow." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "The one from childhood." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "The one no stranger should know." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Myself." },

    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "As I write this..." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Someone is knocking again." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Three times." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Soft." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "Polite." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "And from the way the boards creak outside..." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "From the rhythm of the breathing beyond the threshold..." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "From the strange certainty that has entered me like a second heartbeat..." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "I know it is me." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "And when I open the door..." },
    { bg: "/vn/images/bg-room-night.jpg", char: "/vn/images/me-shocked.png", name: "Me", text: "He will be holding a letter." },

    { bg: "/vn/images/black.jpg", char: "", name: "", text: "THE END" }
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
const creditsScreen = document.getElementById('credits-screen');

const gameMusic = document.getElementById('bgMusic');     // Game BGM
const titleMusic = document.getElementById('titleMusic'); // Title + Credits BGM

gameMusic.loop = true;
titleMusic.loop = true;

function playTitleMusic() {
    gameMusic.pause();
    titleMusic.src = "/vn/audios/title.ogg";
    titleMusic.play().catch(() => {});
}

function playGameMusic() {
    titleMusic.pause();
    gameMusic.src = "/vn/audios/wind.ogg";
    gameMusic.play().catch(() => {});
}

function playCreditsMusic() {
    gameMusic.pause();
    titleMusic.src = "/vn/audios/title.ogg";   // Same as title
    titleMusic.play().catch(() => {});
}

function typeText(text, isLetter = false) {
    clearInterval(interval);
    if (isLetter) letterText.textContent = '';
    else textEl.textContent = '';
    fullText = text;
    charIndex = 0;
    typing = true;
    interval = setInterval(() => {
        if (charIndex < fullText.length) {
            if (isLetter) letterText.textContent += fullText.charAt(charIndex);
            else textEl.textContent += fullText.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(interval);
            typing = false;
        }
    }, 32);
}

function showLine() {
    if (currentIndex >= story.length) {
        endGame();
        return;
    }
    const line = story[currentIndex];

    if (line.bg) bgEl.style.backgroundImage = `url('${line.bg}')`;

    if (line.char && charEl) {
        charEl.src = line.char;
        charEl.style.opacity = '1';
    } else if (charEl) {
        charEl.style.opacity = '0';
    }

    if (line.isLetter) {
        textboxEl.style.display = 'none';
        letterBox.style.display = 'block';
        typeText(line.text, true);
    } else {
        textboxEl.style.display = 'block';
        letterBox.style.display = 'none';
        nameEl.textContent = line.name || '';
        if (!line.name) textboxEl.classList.add('narration');
        else textboxEl.classList.remove('narration');
        typeText(line.text, false);
    }
}

function endGame() {
    gameScreen.style.transition = 'opacity 1.8s ease';
    gameScreen.style.opacity = '0';

    setTimeout(() => {
        gameScreen.style.display = 'none';
        creditsScreen.style.display = 'flex';
        setTimeout(() => { creditsScreen.style.opacity = '1'; }, 50);
        playCreditsMusic();
    }, 1800);
}

function returnToTitle() {
    window.location.reload();   // Refresh as you requested
}

function startGame() {
    titleScreen.style.opacity = '0';
    setTimeout(() => {
        titleScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        playGameMusic();
        showLine();
    }, 1200);
}

// Click handlers
textboxEl.addEventListener('click', () => {
    if (typing) {
        clearInterval(interval);
        textEl.textContent = fullText;
        typing = false;
    } else {
        currentIndex++;
        showLine();
    }
});

letterBox.addEventListener('click', () => {
    if (typing) {
        clearInterval(interval);
        letterText.textContent = fullText;
        typing = false;
    } else {
        currentIndex++;
        showLine();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (typing) {
            clearInterval(interval);
            if (letterBox.style.display === 'block') letterText.textContent = fullText;
            else textEl.textContent = fullText;
            typing = false;
        } else {
            currentIndex++;
            showLine();
        }
    }
});
