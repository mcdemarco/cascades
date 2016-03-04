//main js file
var cascades = {};

//model
cascades.Card = function(data) {
  this.rank = m.prop(data.rank);
  this.suits = m.prop(data.suits);
  this.name = m.prop(data.name);
  this.image = m.prop(data.image);
};

cascades.Deck = function() {
  deck = [];
	deck.push(makeCard('Ace', ['Knots'], 'Ace of Knots', '1_ace_knots.png'));
	deck.push(makeCard('Ace', ['Leaves'], 'Ace of Leaves', '1_ace_leaves.png'));
	deck.push(makeCard('Ace', ['Moons'], 'Ace of Moons', '1_ace_moons.png'));
	deck.push(makeCard('Ace', ['Suns'], 'Ace of Suns', '1_ace_suns.png'));
	deck.push(makeCard('Ace', ['Waves'], 'Ace of Waves', '1_ace_waves.png'));
	deck.push(makeCard('Ace', ['Wyrms'], 'Ace of Wyrms', '1_ace_wyrms.png'));
	deck.push(makeCard('2', ['Moons', 'Knots'], 'the AUTHOR', '2_author.png'));
	deck.push(makeCard('2', ['Suns', 'Wyrms'], 'the DESERT', '2_desert.png'));
	deck.push(makeCard('2', ['Waves', 'Leaves'], 'the ORIGIN', '2_origin.png'));
	deck.push(makeCard('3', ['Moons', 'Waves'], 'the JOURNEY', '3_journey.png'));
	deck.push(makeCard('3', ['Suns', 'Knots'], 'the PAINTER', '3_painter.png'));
	deck.push(makeCard('3', ['Leaves', 'Wyrms'], 'the SAVAGE', '3_savage.png'));
	deck.push(makeCard('4', ['Wyrms', 'Knots'], 'the BATTLE', '4_battle.png'));
	deck.push(makeCard('4', ['Moons', 'Suns'], 'the MOUNTAIN', '4_mountain.png'));
	deck.push(makeCard('4', ['Waves', 'Leaves'], 'the SAILOR', '4_sailor.png'));
	deck.push(makeCard('5', ['Suns', 'Waves'], 'the DISCOVERY', '5_discovery.png'));
	deck.push(makeCard('5', ['Moons', 'Leaves'], 'the FOREST', '5_forest.png'));
	deck.push(makeCard('5', ['Wyrms', 'Knots'], 'the SOLDIER', '5_soldier.png'));
	deck.push(makeCard('6', ['Moons', 'Waves'], 'the LUNATIC', '6_lunactic.png'));
	deck.push(makeCard('6', ['Leaves', 'Knots'], 'the MARKET', '6_market.png'));
	deck.push(makeCard('6', ['Suns', 'Wyrms'], 'the PENITENT', '6_penitent.png'));
	deck.push(makeCard('7', ['Suns', 'Knots'], 'the CASTLE', '7_castle.png'));
	deck.push(makeCard('7', ['Waves', 'Wyrms'], 'the CAVE', '7_cave.png'));
	deck.push(makeCard('7', ['Moons', 'Leaves'], 'the CHANCE MEETING', '7_chance_meeting.png'));
	deck.push(makeCard('8', ['Wyrms', 'Knots'], 'the BETRAYAL', '8_betrayal.png'));
	deck.push(makeCard('8', ['Moons', 'Suns'], 'the DIPLOMAT', '8_diplomat.png'));
	deck.push(makeCard('8', ['Waves', 'Leaves'], 'the MILL', '8_mill.png'));
	deck.push(makeCard('9', ['Waves', 'Wyrms'], 'the DARKNESS', '9_darkness.png'));
	deck.push(makeCard('9', ['Leaves', 'Knots'], 'the MERCHANT', '9_merchant.png'));
	deck.push(makeCard('9', ['Moons', 'Suns'], 'the PACT', '9_pact.png'));
	deck.push(makeCard('CROWN', ['Knots'], 'the WINDFALL', 'crown_knots.png'));
	deck.push(makeCard('CROWN', ['Leaves'], 'the END', 'crown_leaves.png'));
	deck.push(makeCard('CROWN', ['Moons'], 'the HUNTRESS', 'crown_moons.png'));
	deck.push(makeCard('CROWN', ['Suns'], 'the BARD', 'crown_suns.png'));
	deck.push(makeCard('CROWN', ['Waves'], 'the SEA', 'crown_waves.png'));
	deck.push(makeCard('CROWN', ['Wyrms'], 'the CALAMITY', 'crown_wyrms.png'));
	deck.push(makeCard('', [], 'the EXCUSE', 'excuse.png'));
	deck.push(makeCard('PAWN', ['Waves', 'Leaves', 'Wyrms'], 'the BORDERLAND', 'pawn_borderland.png'));
	deck.push(makeCard('PAWN', ['Moons', 'Suns', 'Leaves'], 'the HARVEST', 'pawn_harvest.png'));
	deck.push(makeCard('PAWN', ['Suns', 'Waves', 'Knots'], 'the LIGHT KEEPER', 'pawn_light_keeper.png'));
	deck.push(makeCard('PAWN', ['Moons', 'Wyrms', 'Knots'], 'the WATCHMAN', 'pawn_watchman.png'));
	deck.push(makeCard('COURT', ['Moons', 'Waves', 'Knots'], 'the CONSUL', '11_court_consul.png'));
	deck.push(makeCard('COURT', ['Suns', 'Waves', 'Wyrms'], 'the ISLAND', '11_court_island.png'));
	deck.push(makeCard('COURT', ['Moons', 'Leaves', 'Wyrms'], 'the RITE', '11_court_rite.png'));
	deck.push(makeCard('COURT', ['Suns', 'Leaves', 'Knots'], 'the WINDOW', '11_court_window.png'));
	return deck;
	
	function makeCard(rank, suits, name, image) {
		return new cascades.Card({
			rank: rank,
			suits: suits,
			name: name,
			image: image
		});
	};
}

cascades.shuffle = function(deck) {
  var shuffled = [];
  while(deck.length >0) {
    pos = Math.floor(Math.random() * deck.length);
    taken = deck.splice(pos,1);
    card = taken[0];
    console.log("Added: " + card.name() + " of " + card.suits());
    shuffled.push(taken[0]);
  }
	
  return shuffled;
}


//controller

cascades.controller = function() {

	this.deck = cascades.shuffle(cascades.Deck());
  this.foundation = [];
  this.waste = [];

	this.reset = function() {
		this.deck = cascades.shuffle(cascades.Deck());
		this.foundation = [];
		this.waste = [];
	};

	this.draw = function() {
		if (this.deck.length > 0)
			this.waste.push(this.deck.pop());
	};
	
	this.turn = function() {
		for (var i = 0; i < 3; i++) {
			this.draw();
		}
	};

	this.play = function() {
		//Play a card from the waste or reserve(s) to the appropriate foundation row.
	};

}

//view

cascades.view = function(ctrl) {

  return m("div", [
			
      // control buttons
      m("button", {onclick: ctrl.turn.bind(ctrl)}, "Turn"),
      m("button", {onclick: ctrl.play.bind(ctrl)}, "Play"),
      m("button", {onclick: ctrl.reset.bind(ctrl)}, "Reset"),
			
      // player's hand
      m("h2","Foundation"),
      m("table", [
        ctrl.foundation.map(function(card,index) {
					
          return m("tr", [
            m("td", card.suits()),
            m("td", card.name()),
          ]);
        })
      ]),
			
    // Stock and waste.
		m("div", {className: "deckWrapper"}, [
			m("div", {className: "stock"}, [
				m("h2","Stock (" + ctrl.deck.length + ")"),
				m("img", {className: "card", src: "cards/back.png"})
			]),
			m("div", {className: "waste"}, [
				m("h2","Waste (" + ctrl.waste.length + ")"),
				m("img", {className: "card", src: "cards/" + (ctrl.waste.length > 0 ? ctrl.waste[ctrl.waste.length - 1].image() : "blank.png")})
      ]),
		])
  ]);
}

cascades.init = function() {
  m.module(document.getElementById("game"),cascades);
}

// start the app
cascades.init();
