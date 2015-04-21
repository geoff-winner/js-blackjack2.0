describe("Dealer", function() {

  describe("createDeck", function() {
    it("will start full with a full deck of cards.", function() {
      Dealer.createDeck();
      expect(cards.length).to.equal(52);
    });
  });

  describe("deal", function() {
    it("will deal both the dealer and player one two cards", function() {
      var blackJack = Object.create(BlackJack);
      blackJack.createDeck();
      blackJack.deal();
      expect(blackJack.cards.length).to.equal(48);
    });
  });
});
