//main js file

var cascades = {};

//model
cascades.Card = function(data) {
	this.rank = m.prop(data.rank);
	this.suits = m.prop(data.suits);
	this.name = m.prop(data.name);
	this.image = m.prop(data.image);
};

cascades.Rules = function() {
	return "Click on the stock pile to turn over three cards at a time, as in Klondike.  You get three passes (rounds) through the stock pile; when the stock is empty, click on the empty space to redeal.  Click on the waste pile to move a face-up card to the appropriate foundation row.  Ranks are moved to the rows in order, so the card can move to at most one of the rows.  For example, a six cannot appear in the third row until one has been placed in the second row.  For those ranks that appear in the deck more than three times (Crowns and the optional Aces, Pawns, and Courts), a second card cannot be added to the top row until a first one has appeared in all three rows.  Rank order does not matter within a row, but a suit must match.";
};

cascades.Version = function(data) {
	this.id = m.prop(data.id);
	this.title = m.prop(data.title);
	this.description = m.prop(data.description);
	this.rules = m.prop(data.rules);
};

cascades.VersionList = function() {
	list = [];
	list.push(makeVersion(0, "Foundations Only", "An ultra-simple version where you only play from the stock to the foundations.", "the suit(s) of a card must overlap with those of the last card on that foundation row."));
	list.push(makeVersion(1, "Foundations with Aces", "An easy version where the aces are removed from the deck and dealt out to the foundation rows to determine the suits of the row.", "the suit(s) of a card must include one of the suits of the two aces next to that foundation row."));
	list.push(makeVersion(2, "Foundations with Reserve Piles", "A harder version where one of three reserve piles is uncovered after each round.", "the suit(s) of a card must overlap with those of the last card on that foundation row."));
	return list;

	function makeVersion(id, title, description, rules) {
		return new cascades.Version({
			id: id,
			title: title,
			description: description,
			rules: cascades.Rules() + " For this version (" + title + "), " + rules
		});
	}
};

cascades.Deck = function() {
	deck = [];
	deck.push(makeCard('Ace', ['Knots'], 'Ace of Knots', '1_ace_knots.png',1));
	deck.push(makeCard('Ace', ['Leaves'], 'Ace of Leaves', '1_ace_leaves.png',1));
	deck.push(makeCard('Ace', ['Moons'], 'Ace of Moons', '1_ace_moons.png',1));
	deck.push(makeCard('Ace', ['Suns'], 'Ace of Suns', '1_ace_suns.png',1));
	deck.push(makeCard('Ace', ['Waves'], 'Ace of Waves', '1_ace_waves.png',1));
	deck.push(makeCard('Ace', ['Wyrms'], 'Ace of Wyrms', '1_ace_wyrms.png',1));
	deck.push(makeCard('2', ['Moons', 'Knots'], 'the AUTHOR', '2_author.png',2));
	deck.push(makeCard('2', ['Suns', 'Wyrms'], 'the DESERT', '2_desert.png',2));
	deck.push(makeCard('2', ['Waves', 'Leaves'], 'the ORIGIN', '2_origin.png',2));
	deck.push(makeCard('3', ['Moons', 'Waves'], 'the JOURNEY', '3_journey.png',3));
	deck.push(makeCard('3', ['Suns', 'Knots'], 'the PAINTER', '3_painter.png',3));
	deck.push(makeCard('3', ['Leaves', 'Wyrms'], 'the SAVAGE', '3_savage.png',3));
	deck.push(makeCard('4', ['Wyrms', 'Knots'], 'the BATTLE', '4_battle.png',4));
	deck.push(makeCard('4', ['Moons', 'Suns'], 'the MOUNTAIN', '4_mountain.png',4));
	deck.push(makeCard('4', ['Waves', 'Leaves'], 'the SAILOR', '4_sailor.png',4));
	deck.push(makeCard('5', ['Suns', 'Waves'], 'the DISCOVERY', '5_discovery.png',5));
	deck.push(makeCard('5', ['Moons', 'Leaves'], 'the FOREST', '5_forest.png',5));
	deck.push(makeCard('5', ['Wyrms', 'Knots'], 'the SOLDIER', '5_soldier.png',5));
	deck.push(makeCard('6', ['Moons', 'Waves'], 'the LUNATIC', '6_lunactic.png',6));
	deck.push(makeCard('6', ['Leaves', 'Knots'], 'the MARKET', '6_market.png',6));
	deck.push(makeCard('6', ['Suns', 'Wyrms'], 'the PENITENT', '6_penitent.png',6));
	deck.push(makeCard('7', ['Suns', 'Knots'], 'the CASTLE', '7_castle.png',7));
	deck.push(makeCard('7', ['Waves', 'Wyrms'], 'the CAVE', '7_cave.png',7));
	deck.push(makeCard('7', ['Moons', 'Leaves'], 'the CHANCE MEETING', '7_chance_meeting.png',7));
	deck.push(makeCard('8', ['Wyrms', 'Knots'], 'the BETRAYAL', '8_betrayal.png',8));
	deck.push(makeCard('8', ['Moons', 'Suns'], 'the DIPLOMAT', '8_diplomat.png',8));
	deck.push(makeCard('8', ['Waves', 'Leaves'], 'the MILL', '8_mill.png',8));
	deck.push(makeCard('9', ['Waves', 'Wyrms'], 'the DARKNESS', '9_darkness.png',9));
	deck.push(makeCard('9', ['Leaves', 'Knots'], 'the MERCHANT', '9_merchant.png',9));
	deck.push(makeCard('9', ['Moons', 'Suns'], 'the PACT', '9_pact.png',9));
	deck.push(makeCard('PAWN', ['Waves', 'Leaves', 'Wyrms'], 'the BORDERLAND', 'pawn_borderland.png',10));
	deck.push(makeCard('PAWN', ['Moons', 'Suns', 'Leaves'], 'the HARVEST', 'pawn_harvest.png',10));
	deck.push(makeCard('PAWN', ['Suns', 'Waves', 'Knots'], 'the LIGHT KEEPER', 'pawn_light_keeper.png',10));
	deck.push(makeCard('PAWN', ['Moons', 'Wyrms', 'Knots'], 'the WATCHMAN', 'pawn_watchman.png',10));
	deck.push(makeCard('COURT', ['Moons', 'Waves', 'Knots'], 'the CONSUL', '11_court_consul.png',11));
	deck.push(makeCard('COURT', ['Suns', 'Waves', 'Wyrms'], 'the ISLAND', '11_court_island.png',11));
	deck.push(makeCard('COURT', ['Moons', 'Leaves', 'Wyrms'], 'the RITE', '11_court_rite.png',11));
	deck.push(makeCard('COURT', ['Suns', 'Leaves', 'Knots'], 'the WINDOW', '11_court_window.png',11));
	deck.push(makeCard('CROWN', ['Knots'], 'the WINDFALL', 'crown_knots.png',12));
	deck.push(makeCard('CROWN', ['Leaves'], 'the END', 'crown_leaves.png',12));
	deck.push(makeCard('CROWN', ['Moons'], 'the HUNTRESS', 'crown_moons.png',12));
	deck.push(makeCard('CROWN', ['Suns'], 'the BARD', 'crown_suns.png',12));
	deck.push(makeCard('CROWN', ['Waves'], 'the SEA', 'crown_waves.png',12));
	deck.push(makeCard('CROWN', ['Wyrms'], 'the CALAMITY', 'crown_wyrms.png',12));
	//	deck.push(makeCard('', [], 'the EXCUSE', 'excuse.png', 0));
	return deck;
	
	function makeCard(rank, suits, name, image, value) {
		return new cascades.Card({
			rank: rank,
			suits: suits,
			name: name,
			image: image,
			value: value
		});
	};
};

cascades.shuffle = function(deck) {
	var shuffled = [];
	while(deck.length > 0) {
		pos = Math.floor(Math.random() * deck.length);
		taken = deck.splice(pos,1);
		card = taken[0];
		shuffled.push(taken[0]);
	}
	
	return shuffled;
};

cascades.nextFoundation = function(rankCard, foundation) {
	//Determine what the next foundation for that rank should be.
	var rank = rankCard.rank();
	var ranks = [0,0,0].map(function(initialVal,idx) {
		return foundation[idx].reduce(function(acc,cardObj) {
			return (cardObj.rank() == rank) ? acc + 1 : acc;
		}, initialVal);
	});
	if (ranks[0] > ranks[1])
		return 1;
	else if (ranks[1] > ranks[2])
		return 2;
	else
		return 0;
};

cascades.findOne = function (haystack, arr) {
	//boolean helper function from SO for suit comparison
	return arr.some(function (v) {
		return haystack.indexOf(v) >= 0;
	});
};

cascades.suitChecker = function(suitCard, row) {
	//Degenerate case (adding to an empty foundation).
	if (row.length == 0)
		return true;
	//Normal case.
	var cardSuits = suitCard.suits();
	var rowSuits = row[row.length - 1].suits();
	return cascades.findOne(cardSuits, rowSuits);
};


//a sample component
var Version = {};

//controller
Version.controller = function() {

	this.deck = cascades.shuffle(cascades.Deck());
	this.foundation = [[],[],[]];
	this.reserve = [[],[],[]];
	this.waste = [];
	this.message = "";
	this.rules = "";
	this.round = 1;
	this.versions = cascades.VersionList();
	
	this.reset = function() {
		this.deck = cascades.shuffle(cascades.Deck());
		this.foundation = [[],[],[]];
		this.reserve = [[],[],[]];
		this.waste = [];
		this.message = "";
		this.rules = "";
		this.round = 1;
		this.versions = cascades.VersionList();
	};

	this.toggleRules = function() {
		this.rules = this.rules ? "" : this.versions[m.route.param("version")].rules();
	};

	this.changeVersion = function(newVersion) {
		this.version = newVersion;
		this.reset();
		this.drawReserve(newVersion);
	};

	this.draw = function() {
		if (this.deck.length > 0) {
			this.waste.push(this.deck.pop());
			this.message = "";
		} else {
			this.message = "Dealt last stock card.";
		}
	};

	this.drawReserve = function(version) {
		switch (version) {
			case 0:
			break;

			case 1: 
			break;
			
			case 2:
			[0,1,2].map(function(val,idx) {
				[0,1,2].map(function(val2,idx2) {
					this.reserve[val].push(this.deck.pop());
				});
			});
		}
		return;
	};
	
	this.turn = function() {
		for (var i = 0; i < 3; i++) {
			this.draw();
		}
		if (this.deck.length == 0) 
			this.round++;
		if (this.round > 3)
			this.message += " No more rounds.";
	};

	this.play = function() {
		//Play a card from the waste or reserve(s) to the appropriate foundation row.
		if (this.waste.length > 0) {
			var playCard = this.waste[this.waste.length - 1];
			var found = cascades.nextFoundation(playCard,this.foundation);
			var playRow = this.foundation[found];
			if (cascades.suitChecker(playCard,playRow)) {
				this.foundation[found].push(this.waste.pop());
				this.message = "Played " + playCard.name() + " to row " + (found + 1) + ".";
			} else
				this.message = "Suits do not match row " + (found + 1) + ".";
		}
	};

	this.redeal = function() {
		//The end of round flippy thing.
		if (this.round > 3)
			this.message = "No more rounds.";
		else {
			while (this.waste.length > 0) {
				this.deck.push(this.waste.pop());
				this.message = "Redealt.";
			}
		}
	};
};

//view

Version.view = function(ctrl) {

	return m("body", [

		m("header", [
			m("h1", "Cascades"),
			m("div", {className: "buttonWrapper"}, [
				m("button", {onclick: ctrl.reset.bind(ctrl)}, "Restart"),
				m("button", {onclick: ctrl.toggleRules.bind(ctrl)}, "Rules")
			]),
			m("div", {className: "rules"}, [
				m("p", "a solitaire card game for the Decktet by Joe Conard"),
				m("p", ctrl.rules)
			])
		]),
		m("main", [
			m("div", {className: "leftColumn"}, [
				m("div", {className: "versionWrapper"}, [
					m("b", "Version: "),
					m('select', { onchange : function() { m.route("version" + this.value); }}, [
						ctrl.versions.map(function(v, i) {
							if (v.id() == m.route.param("version"))
								return m('option', { value: v.id(), innerHTML: v.title(), selected: "selected" });
							else
								return m('option', { value: v.id(), innerHTML: v.title() });
						})
					]),
					m("p", ctrl.versions[m.route.param("version")].description())
				]),
				// Stock and waste.
				m("h3", "Round " + Math.min(ctrl.round,3)),
				m("div", {className: "deckWrapper"}, [
					m("div", {className: "stock"}, [
						m("h2","Stock (" + ctrl.deck.length + ")"),
						m("img", {onclick: (ctrl.deck.length > 0 ? ctrl.turn.bind(ctrl) : ctrl.redeal.bind(ctrl)), className: "card", src: "cards/" + (ctrl.deck.length > 0 ? "back.png" : "blank.png")})
					]),
					m("div", {className: "waste"}, [
						m("h2","Waste (" + ctrl.waste.length + ")"),
						m("img", {className: "card", src: "cards/" + (ctrl.waste.length > 0 ? ctrl.waste[ctrl.waste.length - 1].image() : "blank.png"), onclick: ctrl.play.bind(ctrl)})
					])
				]),
				m("div", {className: "message"}, ctrl.message)
			]),
			
			// Reserve
			m("div", {className: "reserveWrapper"}, [
				m("div", [
					m("div", {className: "reserve"}, [
						m("img", {className: "card", src: "cards/blank.png"}),
						ctrl.reserve[0].map(function(card,index) {
							return m("img", {className: "card", src: "cards/" + card.image()});
						})
					]),
					m("div", {className: "reserve"}, [
						m("img", {className: "card", src: "cards/blank.png"}),
						ctrl.reserve[1].map(function(card,index) {
							return m("img", {className: "card", src: "cards/" + card.image()});
						})
					]),
					m("div", {className: "reserve"}, [			
						m("img", {className: "card", src: "cards/blank.png"}),	
						ctrl.reserve[2].map(function(card,index) {
							return m("img", {className: "card", src: "cards/" + card.image()});
						})
					])
				])
			]),
			// foundation
			m("div", {className: "foundationWrapper"}, [
				m("div", [
					m("div", {className: "foundation"}, [
						m("img", {className: "card", src: "cards/blank.png"}),		
						ctrl.foundation[0].map(function(card,index) {
							return m("img", {className: "card", style: "left: " + index * 20 + "px", src: "cards/" + card.image()});
						})
					]),
					m("div", {className: "foundation"}, [
						m("img", {className: "card", src: "cards/blank.png"}),
						ctrl.foundation[1].map(function(card,index) {
							return m("img", {className: "card", style: "left: " + index * 20 + "px", src: "cards/" + card.image()});
						})
					]),
					m("div", {className: "foundation"}, [
						m("img", {className: "card", src: "cards/blank.png"}),
						ctrl.foundation[2].map(function(card,index) {
							return m("img", {className: "card", style: "left: " + index * 20 + "px", src: "cards/" + card.image()});
						})
					])
				])
			])
		])
	]);
};

/*
cascades.init = function() {
	m.mount(document.getElementById("game"),cascades);
};

// start the app
cascades.init();

*/


//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

//define the routes
m.route(document.body, "version2", {
  "version:version": Version
});
