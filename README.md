# Cascades

This is a JavaScript implementation of `Cascades`, a solitaire card game for the Decktet by Joe Conard.

[Cascades]: http://wiki.decktet.com/game:cascades


## Rules

The stock is turned over three cards at a time as in Klondike.
Cards are moved from the stock to the three foundation rows;
order does not matter within a row, but a suit must match the previous card (or the Aces in the simplified version), and the rows must be filled in order: a six cannot appear in the third row until one has been placed in the second row, and (for Crowns and the optional Aces, Pawns, and Courts) a second card cannot be added to the top row until a first one has appeared in all three rows.

## Versions

### 1.0.1 

No longer restricts the game to 3 rounds, plus layout fixes (2021).

### 1.0.0

Initial release (2016/2020).

## Credits

The Decktet was created by P. D. Magnus.  Cascades is by Joe Conard.  This JavaScript implementation is by M. C. DeMarco; it uses the lightweight [Mithril.js](https://mithril.js.org/) framework.

The Decktet card images were released under a Creative Commons License by P.D. Magnus.  The ["Fortune Letters" font](https://www.fontmonkey.com/archive1.php) is also by P.D. Magnus.  The background texture is "Skulls" by Adam, from [Subtle Patterns](http://subtlepatterns.com/skulls/).

Joe Conard's original version of the game corresponds to "Foundations with Reserve Piles" in the UI; he later revised it to "Foundations with Aces".  Both included the options for Pawns and Courts.  The "Foundations Only" variant is probably by me, as was an accidental set of variants restricting the game to 3 rounds which I have since removed (h/t Niko Lepka).  You can still restrict the game to three rounds if desired by stopping after 3 rounds.


