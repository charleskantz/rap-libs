import { v4 as uuid } from 'uuid';

/** These objects hold the data for the Mad Lib stories. When a story is chosen,
 *  the relevant story object is passed to the app for the form and story creation.
 *  After user submits all words, the story array placeholders are updated with user
 *  submitted words and rendered together.
 *    - words: array of objects for each field needed for the form
 *        - word: field name for label and input connection
 *        - label: user friendly text for label
 *        - value: field value, starts as empty string
 *        - placeholder: sample words for that field in case user does not immediately know what kind of word
 *        - id: unique key provided by UUID for React to track everything nicely
 *    - story: array of full story text, separated by location of mad lib word 'XXXXX' that will be replaced with user's submitted word
 */
const rapLibIceCube = {
  rapLib: "iceCube",
  words: [
    { word:'singularnoun01', label: 'Singular Noun',          value: '', placeholder: 'taco, cat, tree, etc.',   id: uuid() },
    { word:'pluralnoun01',   label: 'Plural Noun',            value: '', placeholder: 'robots, birds, etc.',     id: uuid() },
    { word:'actionverb01',   label: 'Action Verb',            value: '', placeholder: 'run, clean, read, etc.',  id: uuid() },
    { word:'bodypartnoun01', label: 'Body Part Noun',         value: '', placeholder: 'arm, head, finger, etc.', id: uuid() },
    { word:'pluralnoun02',   label: 'Plural Noun',            value: '', placeholder: 'candles, people, etc.',   id: uuid() },
    { word:'pluralnoun03',   label: 'Plural Noun',            value: '', placeholder: 'cars, phones, etc.',      id: uuid() },
    { word:'singularnoun02', label: 'Singular Noun',          value: '', placeholder: 'taco, cat, tree, etc.',   id: uuid() },
    { word:'nounthing01',    label: 'Noun (thing you point)', value: '', placeholder: 'cannon, car, etc.',       id: uuid() },
    { word:'bodypartnoun02', label: 'Body Part Noun',         value: '', placeholder: 'leg, elbow, foot, etc.',  id: uuid() }
  ],
  story: [
    `Straight outta Compton crazy `,
    `XXXXX`,
    ` named Ice Cube / From the gang called `,
    `XXXXX`,
    ` with attitudes / When I'm called off I got a sawed off / Squeeze the trigger and bodies are hauled off / You too boy if ya `,
    `XXXXX`,
    ` with me / Off yo `,
    `XXXXX`,
    ` that's how I'm goin out / For the punk `,
    `XXXXX`,
    ` that's showin out / `,
    `XXXXX`,
    ` start to mumble, they wanna rumble / Mix 'em and cook 'em in a pot like gumbo / Goin off on a `,
    `XXXXX`,
    ` like that / with a `,
    `XXXXX`,
    ` that's pointed at yo `,
    `XXXXX`,
    `.`
  ],
  caption: "'Straight Outta Compton' by NWA"
}

const rapLibSnoopDogg = {
  rapLib: "snoopDogg",
  words: [
    { word:'location01',    label: 'Location Acronym',     value: '', placeholder: 'S-F-O, L-A-X, N-Y-C, etc.', id: uuid() },
    { word:'name01', label: 'Your Name/Nickname', value: '', placeholder: 'Chazz, Chuck, Charles, etc.',         id: uuid() },
    { word:'group01',    label: 'Group of People',   value: '', placeholder: 'engineers, women, rappers, etc.',    id: uuid() },
    { word:'actionverb01',   label: 'Action Verb-ing',   value: '', placeholder: 'running, cleaning, reading, etc.',       id: uuid() },
    { word:'pluralnoun01',   label: 'Plural Noun',   value: '', placeholder: 'pictures, bottles, etc.',   id: uuid() }
  ],
  story: [
    `With so much drama in the `,
    `XXXXX`,
    ` / It's kind of hard bein'
    `,
    `XXXXX`,
    ` / But I, somehow, some way / Keep comin' up with funky-ass shit, like, every single day / May I kick a little something for the G's / And make a few ends as I breeze through? / Two in the mornin' and the party's still jumpin' / ‘Cause my momma ain't home / I got `,
    `XXXXX`,
    ` in the livin' room `,
    `XXXXX`,
    ` / And they ain't leavin' till six in the mornin' / So what you wanna do? / Shit, I got a pocket full of `,
    `XXXXX`,
    ` and my homeboys do too / So turn off the lights and close the doors`
  ],
  caption: "'Gin and Juice' by Snoop Dogg"
}


export {
  rapLibIceCube,
  rapLibSnoopDogg,

}