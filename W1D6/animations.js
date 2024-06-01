// CSE 190 M, Homework 6: ASCIImation
// This file contains the ASCII animations as large strings.
//
// You can refer to them by variable names such as blank or dive, or by indexes
// into an array ANIMATIONS, such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"].
//
// The former is probably more intuitive for new programmers, but the latter
// may allow you to write more elegant code by indexing using the text of the
// menu option selected in the HTML.  (See bottom of file.)
//
// (Hint: The array index you want is the same as the select box's selected value...)
//
// YOU SHOULD NOT EDIT THIS FILE IN ANY WAY.
// TO ADD YOUR CUSTOM ANIMATION, CREATE YOUR OWN FILE myanimation.js AND
// PUT YOUR CODE IN THERE.  In myanimation.js, it is legal for you to modify
// the variables that have been declared in this file.

window.onload = function(){

var BLANK = "\n"+
        "This is blank"+
        "=====\n" +
        "There is no animation";


var CUSTOM = "";   // you could change the value of this variable in your code

var EXERCISE = "  o\n" +
    " /#\\\n" +
    " _|_\n" +
    "=====\n" +
    " \\o/\n" +
    "  #\n" +
    "_/ \\_\n";

var JUGGLER = "   o\n" +
    "   O\n" +
    " o/|\\o\n" +
    "  / \\\n" +
    "=====\n" +
    "    o\n" +
    " o_O\n" +
    "   |o\n" +
    "  / \\\n" +
    "=====\n" +
    " o   o\n" +
    "  \\O\n" +
    "   o\\\n" +
    "  / \\\n" +
    "=====\n" +
    "  o\n" +
    "  _O_o\n" +
    "  o|\n" +
    "  / \\\n";

var BIKE = "\n" +
    "   _o\n" +
    " _< \\\\_\n" +
    "(_)>(_)            .\n" +
    "=====\n" +
    "\n" +
    "     _o\n" +
    "   _< \\\\_\n" +
    "  (_)>(_)          .\n" +
    "=====\n" +
    "\n" +
    "       _o\n" +
    "     _< \\\\_\n" +
    "    (_)>(_)        .\n" +
    "=====\n" +
    "          o\n" +
    "         /\\\\_\n" +
    "       _< (_)\n" +
    "      (_)          .\n" +
    "=====\n" +
    "            o\n" +
    "           /\\\\_\n" +
    "         _< (_)\n" +
    "        (_)        .\n" +
    "=====\n" +
    "             _\n" +
    "           _ \\\\\\\\o\n" +
    "          (_)/<_\n" +
    "              (_)  .\n" +
    "\n" +
    "=====\n" +
    "               _\n" +
    "             _ \\\\\\\\o\n" +
    "            (_)/<_\n" +
    "                (_).\n" +
    "=====\n" +
    "                  _\n" +
    "                 (_)\\\\__/o\n" +
    "                   \\\\_| \\\\\n" +
    "                  .(_)\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\' \\\\/\n" +
    "                  .  (_)\'  _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'  \\\\/\n" +
    "                  .  (_)\'   _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'   \\\\/\n" +
    "                  .  (_)\'    _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\_o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__ o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__  o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__   o\n";

var DIVE = "  o\n" +
    " /|\\\n" +
    ",/ \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "..,..,,.,...,,|.,|..,.,,...,..,,,..,..,..,.,\n" +
    "=====\n" +
    "     o\n" +
    "    -|-\n" +
    "    / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "      \\o/\n" +
    "       |\n" +
    "      / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "        \\o/\n" +
    "        /\n" +
    "       / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "            |o__\n" +
    "            /\n" +
    "          /\\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "              o/__\n" +
    "           __/\n" +
    "             \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "\n" +
    "                  __ o__\n" +
    "                 /)  \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "...,,,...,.,.,|..|.,.,...,,,.,..,.,.,,,..,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "                           \\)\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/    \\\n" +
    "-|----------|-|--|-|--\'    /o\\\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "....,...,...,,|,,|,.,.,.,.,.,.,.,....,,,,,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |           \\|\n" +
    "              |  |            \\o\n" +
    "              |  |            ( \\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,....,,...|.,|.,.,.,.,.,.,.,.,.,.,.,.,,,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                \\)\n" +
    "              |  |                |\n" +
    "              |  |               /o\\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,,...,.,,,,,|.,|.,,,.,.,,.,..,.,,....,,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                 \\ /\n" +
    "              |  |                  |\n" +
    "              |  |                 /o\\\n" +
    ",..,.,..,,.,.,|,,|.,,,.,,.,,.,...,,..,,.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,\\|.,..,.\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                `.\' \'.\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,`\'.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n";


// can also access the animations as an associative array / hash map,
// such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"]
var ANIMATIONS = [];

ANIMATIONS["Blank"] = ANIMATIONS["blank"] = ANIMATIONS["BLANK"] = "";
ANIMATIONS["Custom"] = ANIMATIONS["custom"] = ANIMATIONS["CUSTOM"] = CUSTOM;   // you could change the value of this in your code
ANIMATIONS["Exercise"] = ANIMATIONS["exercise"] = ANIMATIONS["EXERCISE"] = EXERCISE;
ANIMATIONS["Juggler"] = ANIMATIONS["juggler"] = ANIMATIONS["JUGGLER"] = JUGGLER;
ANIMATIONS["Bike"] = ANIMATIONS["bike"] = ANIMATIONS["BIKE"] = BIKE;
ANIMATIONS["Dive"] = ANIMATIONS["dive"] = ANIMATIONS["DIVE"] = DIVE;


const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const contentArea = document.getElementById("text-area");
const animationType = document.getElementById("animation");
const selectedFontSize = document.getElementById("fontsize");
const turboChecked = document.getElementById("turbo");

let speed = 250;
let currentAnimation = null;
timer = null;

animationType.addEventListener("change", function() {
contentArea.innerHTML = "You have choosen "+animationType.value +" animation.";
});

turboChecked.addEventListener("change", function (){
    if(turboChecked.checked){
        speed = 50;
    }else{
        speed = 250;
    }

    if(timer !== null){
        clearInterval(timer);
        startAnimation();
    }
});

selectedFontSize.addEventListener("change", function() {
    let currentWidth=contentArea.offsetWidth;
    let currentHeight=contentArea.offsetHeight;
    contentArea.style.fontSize = selectedFontSize.value + "px";
    contentArea.style.width = currentWidth + "px";
    contentArea.style.height = currentHeight + "px";
});


stopBtn.addEventListener("click", function() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    animationType.disabled = false;
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
});

function startAnimation() {

    if(animationType.value == "Dive"){
        currentAnimation = DIVE.split("=====");
    }
    else if(animationType.value == "Bike"){
        currentAnimation = BIKE.split("=====");
    }
    else if(animationType.value == "Juggler"){
        currentAnimation = JUGGLER.split("=====");
    }
    else if(animationType.value == "Exercise"){
        currentAnimation = EXERCISE.split("=====");
    }

    startBtn.disabled = true;
    stopBtn.disabled = false;
    animationType.disabled = true;

    let index=0;
    timer = setInterval( function () {
        contentArea.innerHTML = currentAnimation[index];
        // contentArea.classList.add("");
        index++;
        if (index >= currentAnimation.length) {
            index = 0;
        }
    }, speed);
}


startBtn.addEventListener("click", startAnimation);


}
