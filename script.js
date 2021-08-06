var NumberOfWords = 75

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "angel"
words[2] = "apple"
words[3] = "ball of yarn"
words[4] = "bell"
words[5] = "bicycle"
words[6] = "boat"
words[7] = "brick"
words[8] = "bug"
words[9] = "cake"
words[10] = "candle"
words[11] = "car"
words[12] = "castle"
words[13] = "cat face"
words[14] = "chair"
words[15] = "chicken"
words[16] = "coin"
words[17] = "croissant"
words[18] = "devil"
words[19] = "diamond"
words[20] = "feather"
words[21] = "fire"
words[22] = "fish"
words[23] = "fork"
words[24] = "gamepad"
words[25] = "glasses"
words[26] = "hammer"
words[27] = "hat"
words[28] = "headphones"
words[29] = "helmet"
words[30] = "ice cream"
words[31] = "island"
words[32] = "key"
words[33] = "laser gun"
words[34] = "letter"
words[35] = "lightbulb"
words[36] = "lock"
words[37] = "magnifying glass"
words[38] = "melon"
words[39] = "microphone"
words[40] = "muffin"
words[41] = "old book"
words[42] = "pencil"
words[43] = "pineapple"
words[44] = "planet"
words[45] = "playing card"
words[46] = "dice"
words[47] = "pocket watch"
words[48] = "puzzle piece"
words[49] = "rabbit"
words[50] = "robot"
words[51] = "rocket ship"
words[52] = "screw driver"
words[52] = "screw driver"
words[53] = "shoe"
words[54] = "shovel"
words[55] = "skull"
words[56] = "soccer ball"
words[57] = "spoon"
words[58] = "star"
words[59] = "submarine"
words[60] = "sunflower"
words[61] = "sword"
words[62] = "tea cup"
words[63] = "telephone"
words[64] = "television"
words[65] = "tomato"
words[66] = "treasure chest"
words[67] = "tree"
words[68] = "trophy"
words[69] = "trumpet"
words[70] = "umbrella"
words[71] = "vase"
words[72] = "wheel"
words[73] = "whistle"
words[74] = "window"
words[75] = "wrench"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}