//main js file

//the data model is a bit of a separate component
var cascades = {};

cascades.Card = function(data) {
	this.rank = m.prop(data.rank);
	this.suits = m.prop(data.suits);
	this.name = m.prop(data.name);
	this.image = m.prop(data.image);
};

cascades.Rules = function() {
	return m("div", {className: "rules"}, [
		m("p", "Click on the stock pile to turn over three cards at a time, as in Klondike.  You get three passes (rounds) through the stock pile; when the stock is empty, click on the empty space to redeal."),
		m("p", "Click on the waste pile to move a face-up card to the appropriate foundation row.  Ranks are moved to the rows in order, so the card can move to at most one of the rows.  For example, a six cannot appear in the third row until one has been placed in the second row.  For those ranks that appear in the deck more than three times (Crowns and the optional Aces, Pawns, and Courts), a second card cannot be added to the top row until a first one has appeared in all three rows."),
		m("p", "Rank order does not matter within a row, but a suit from the new card must match the row.")
	]);
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

cascades.Game = function() {
	var game = {
		deck: cascades.shuffle(cascades.Deck()),
		waste: [],
		foundation: [[],[],[]],
		reserve: [[],[],[]],
		aces: [[],[],[]],
		round: 1,
		message: ""
	};
	return game;
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

//row template
cascades.rows = function(cardArray, classStub, shift) {
	return m("div", {className: classStub + "Wrapper"},
	         [0,1,2].map(function(val,idx) {
		         return m("div", {className: classStub}, [
			         m("img", {className: "card", src: "cards/blank.png"}),
			         cardArray[val].map(function(card,index) {
				         return m("img", {className: "card", src: "cards/" + card.image(), style: shift ? "left: " + index * 20 + "px": ""});
			         })
		         ]);
	         }));
};

cascades.drawAces = function(game) {
	[0,1,2].map(function(val,idx) {
		[0,1].map(function(val2,idx2) {
			var pos = game.deck.map(function(c) { return c.rank; }).indexOf('Ace');
			game.reserve[val].push(game.deck.splice(pos));
		});
	});
	return game;
};

cascades.drawReserve = function(game) {
	[0,1,2].map(function(val,idx) {
		[0,1,2].map(function(val2,idx2) {
			game.reserve[val].push(game.deck.pop());
		});
	});
	return game;
};

cascades.draw = function(game) {
	if (game.deck.length > 0) {
		game.waste.push(game.deck.pop());
		game.message = "";
	} else {
		game.message = "Dealt last stock card.";
	}
	return game;
};

cascades.turn = function(game) {
	for (var i = 0; i < 3; i++) {
		game = cascades.draw(game);
	}
	if (game.deck.length == 0) 
		game.round++;
	if (game.round > 3)
		game.message += " No more rounds.";
	return game;
}

cascades.play = function(game) {
	//Play a card from the waste or reserve(s) to the appropriate foundation row.
	if (game.waste.length > 0) {
		var playCard = game.waste[game.waste.length - 1];
		var found = cascades.nextFoundation(playCard,game.foundation);
		var playRow = game.foundation[found];
		if (cascades.suitChecker(playCard,playRow)) {
			game.foundation[found].push(game.waste.pop());
			game.message = "Played " + playCard.name() + " to row " + (found + 1) + ".";
		} else
			game.message = "Suits do not match row " + (found + 1) + ".";
	}
	return game;
};

cascades.redeal = function(game) {
	//The end of round flippy thing.
	if (game.round > 3)
		game.message = "No more rounds.";
	else {
		while (game.waste.length > 0) {
			game.deck.push(game.waste.pop());
			game.message = "Redealt.";
		}
	}
	return game;
};

//modal module
var modal = {
	visible: m.prop(false),
	view: function(body) {
		return modal.visible() ? m("div.modal", body()) : "";
	}
};

//The variants module.
var variants = {};

variants.Version = function(data) {
	this.id = m.prop(data.id);
	this.title = m.prop(data.title);
	this.description = m.prop(data.description);
	this.rules = m.prop(data.rules);
};

variants.VersionList = function() {
	list = [];
	list.push(makeVersion(0, "Foundations Only", "An ultra-simple version where you only play from the stock to the foundations.", "at least one suit must be shared between the new card and the last (rightmost) card on that foundation row, if there is one."));
	list.push(makeVersion(1, "Foundations with Aces", "An easy version where the aces are removed from the deck and dealt out to the foundation rows to determine the suits of the row.", "the suit(s) of a card must match at least one of the suits of the two aces next to that foundation row."));
	list.push(makeVersion(2, "Foundations with Reserve Piles", "A harder version where one of three reserve piles is uncovered after each round.", "at least one suit must be shared between the new card and the last (rightmost) card on that foundation row, if there is one."));
	return list;

	function makeVersion(id, title, description, rules) {
		return new variants.Version({
			id: id,
			title: title,
			description: description,
			rules: m("div", [
				m("h2", "Rules"),
				cascades.Rules(),
				m("p", " For this version (" + title + "), " + rules),
				m("button[type=button]", {onclick: modal.visible.bind(this, false)}, "Close")
			])
		});
	}
};

//controller
variants.controller = function() {

	this.game = cascades.Game();
	this.versions = variants.VersionList();
	
	this.reset = function() {
		this.game = cascades.Game();
		this.versions = variants.VersionList();
		this.deal(m.route.param("version"));
	};

	this.deal = function(version) {
		switch (version) {
			case 0:
			break;

			case 1: 
			this.game = cascades.drawAces(this.game);
			break;
			
			case 2:
			this.game = cascades.drawReserve(this.game);
			break;
		}
		return;
	};

	this.draw = function() {
		if (this.game.deck.length > 0) {
			this.game.waste.push(this.game.deck.pop());
			this.game.message = "";
		} else {
			this.game.message = "Dealt last stock card.";
		}
	};
	
	this.turn = function() {
		this.game = cascades.turn(this.game);
	};

	this.play = function() {
		this.game = cascades.play(this.game);
	};

	this.redeal = function() {
		this.game = cascades.redeal(this.game);
	};
};

//view

variants.view = function(ctrl) {

	return m("body", [

		m("header", [
			m("h1", "Cascades"),
			m("div", {className: "buttonWrapper"}, [
				m("button[type=button]", {onclick: ctrl.reset.bind(ctrl)}, "Restart"),
				m("button[type=button]", {onclick: modal.visible.bind(ctrl, true)}, "Rules")
			]),
			m("div", [
				m("p", {className: "description"}, "a solitaire card game for the Decktet by Joe Conard")
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
				m("h2", "Round " + Math.min(ctrl.game.round,3)),
				m("div", {className: "deckWrapper"}, [
					m("div", {className: "stock"}, [
						m("h3","Stock (" + ctrl.game.deck.length + ")"),
						m("img", {onclick: (ctrl.game.deck.length > 0 ? ctrl.turn.bind(ctrl) : ctrl.redeal.bind(ctrl)), className: "card", src: "cards/" + (ctrl.game.deck.length > 0 ? "back.png" : "blank.png")})
					]),
					m("div", {className: "waste"}, [
						m("h3","Waste (" + ctrl.game.waste.length + ")"),
						m("img", {className: "card", src: "cards/" + (ctrl.game.waste.length > 0 ? ctrl.game.waste[ctrl.game.waste.length - 1].image() : "blank.png"), onclick: ctrl.play.bind(ctrl)})
					])
				]),
				m("div", {className: "message"}, ctrl.game.message)
			]),

			// Reserve
			cascades.rows(ctrl.game.reserve, "reserve", false),
			// Foundation
			cascades.rows(ctrl.game.foundation, "foundation", true)
		]),
		modal.view(function() {
			return m("div", ctrl.versions[m.route.param("version")].rules());
		})
	]);
};

//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

//define the routes
m.route(document.body, "version2", {
	"version:version": variants
});
