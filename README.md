# Cascades

`Cascades` is a solitaire card game for the Decktet by Joe Conard.

[Cascades]: http://wiki.decktet.com/game:cascades


## Rules

The stock is turned over three cards at a time as in Klondike.
Cards are moved from the stock to the three foundation rows;
order does not matter within a row, but a suit must match the previous card (or the Aces in the simplified version), and the rows must be filled in order: a six cannot appear in the third row until one has been placed in the second row, and (for Crowns and the optional Aces, Pawns, and Courts) a second card cannot be added to the top row until a first one has appeared in all three rows.



## Usage


	`hg clone https://bitbucket.org/mcdemarco/cascades.hg`  
	`cd cascades`  
	`npm install`  
	`npm start -s`  
	
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, you'll want to keep the command line open at all times so that your code is rebuilt and tests run automatically every time you hit save. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

To deploy:

	`npm run build`

