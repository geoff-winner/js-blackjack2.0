var cards = [
  { suit: "Clubs", rank: 2, img: "css/imgs/PNG-cards-1.3/2_of_clubs.png" },
  { suit: "Clubs", rank: 3, img: "css/imgs/PNG-cards-1.3/3_of_clubs.png" },
  { suit: "Clubs", rank: 4, img: "css/imgs/PNG-cards-1.3/4_of_clubs.png" },
  { suit: "Clubs", rank: 5, img: "css/imgs/PNG-cards-1.3/5_of_clubs.png" },
  { suit: "Clubs", rank: 6, img: "css/imgs/PNG-cards-1.3/6_of_clubs.png" },
  { suit: "Clubs", rank: 7, img: "css/imgs/PNG-cards-1.3/7_of_clubs.png" },
  { suit: "Clubs", rank: 8, img: "css/imgs/PNG-cards-1.3/8_of_clubs.png" },
  { suit: "Clubs", rank: 9, img: "css/imgs/PNG-cards-1.3/9_of_clubs.png" },
  { suit: "Clubs", rank: 10, img: "css/imgs/PNG-cards-1.3/10_of_clubs.png" },
  { suit: "Clubs", rank: 10, img: "css/imgs/PNG-cards-1.3/jack_of_clubs.png" },
  { suit: "Clubs", rank: 10, img: "css/imgs/PNG-cards-1.3/queen_of_clubs.png" },
  { suit: "Clubs", rank: 10, img: "css/imgs/PNG-cards-1.3/king_of_clubs.png" },
  { suit: "Clubs", rank: 11, img: "css/imgs/PNG-cards-1.3/ace_of_clubs.png" },
  { suit: "Hearts", rank: 2, img: "css/imgs/PNG-cards-1.3/2_of_hearts.png" },
  { suit: "Hearts", rank: 3, img: "css/imgs/PNG-cards-1.3/3_of_hearts.png" },
  { suit: "Hearts", rank: 4, img: "css/imgs/PNG-cards-1.3/4_of_hearts.png" },
  { suit: "Hearts", rank: 5, img: "css/imgs/PNG-cards-1.3/5_of_hearts.png" },
  { suit: "Hearts", rank: 6, img: "css/imgs/PNG-cards-1.3/6_of_hearts.png" },
  { suit: "Hearts", rank: 7, img: "css/imgs/PNG-cards-1.3/7_of_hearts.png" },
  { suit: "Hearts", rank: 8, img: "css/imgs/PNG-cards-1.3/8_of_hearts.png" },
  { suit: "Hearts", rank: 9, img: "css/imgs/PNG-cards-1.3/9_of_hearts.png" },
  { suit: "Hearts", rank: 10, img: "css/imgs/PNG-cards-1.3/10_of_hearts.png" },
  { suit: "Hearts", rank: 10, img: "css/imgs/PNG-cards-1.3/jack_of_hearts.png" },
  { suit: "Hearts", rank: 10, img: "css/imgs/PNG-cards-1.3/queen_of_hearts.png" },
  { suit: "Hearts", rank: 10, img: "css/imgs/PNG-cards-1.3/king_of_hearts.png" },
  { suit: "Hearts", rank: 11, img: "css/imgs/PNG-cards-1.3/ace_of_hearts.png" },
  { suit: "Diamonds", rank: 2, img: "css/imgs/PNG-cards-1.3/2_of_diamonds.png" },
  { suit: "Diamonds", rank: 3, img: "css/imgs/PNG-cards-1.3/3_of_diamonds.png" },
  { suit: "Diamonds", rank: 4, img: "css/imgs/PNG-cards-1.3/4_of_diamonds.png" },
  { suit: "Diamonds", rank: 5, img: "css/imgs/PNG-cards-1.3/5_of_diamonds.png" },
  { suit: "Diamonds", rank: 6, img: "css/imgs/PNG-cards-1.3/6_of_diamonds.png" },
  { suit: "Diamonds", rank: 7, img: "css/imgs/PNG-cards-1.3/7_of_diamonds.png" },
  { suit: "Diamonds", rank: 8, img: "css/imgs/PNG-cards-1.3/8_of_diamonds.png" },
  { suit: "Diamonds", rank: 9, img: "css/imgs/PNG-cards-1.3/9_of_diamonds.png" },
  { suit: "Diamonds", rank: 10, img: "css/imgs/PNG-cards-1.3/10_of_diamonds.png" },
  { suit: "Diamonds", rank: 10, img: "css/imgs/PNG-cards-1.3/jack_of_diamonds.png" },
  { suit: "Diamonds", rank: 10, img: "css/imgs/PNG-cards-1.3/queen_of_diamonds.png" },
  { suit: "Diamonds", rank: 10, img: "css/imgs/PNG-cards-1.3/king_of_diamonds.png" },
  { suit: "Diamonds", rank: 11, img: "css/imgs/PNG-cards-1.3/ace_of_diamonds.png" },
  { suit: "Spades", rank: 2, img: "css/imgs/PNG-cards-1.3/2_of_spades.png" },
  { suit: "Spades", rank: 3, img: "css/imgs/PNG-cards-1.3/3_of_spades.png" },
  { suit: "Spades", rank: 4, img: "css/imgs/PNG-cards-1.3/4_of_spades.png" },
  { suit: "Spades", rank: 5, img: "css/imgs/PNG-cards-1.3/5_of_spades.png" },
  { suit: "Spades", rank: 6, img: "css/imgs/PNG-cards-1.3/6_of_spades.png" },
  { suit: "Spades", rank: 7, img: "css/imgs/PNG-cards-1.3/7_of_spades.png" },
  { suit: "Spades", rank: 8, img: "css/imgs/PNG-cards-1.3/8_of_spades.png" },
  { suit: "Spades", rank: 9, img: "css/imgs/PNG-cards-1.3/9_of_spades.png" },
  { suit: "Spades", rank: 10, img: "css/imgs/PNG-cards-1.3/10_of_spades.png" },
  { suit: "Spades", rank: 10, img: "css/imgs/PNG-cards-1.3/jack_of_spades.png" },
  { suit: "Spades", rank: 10, img: "css/imgs/PNG-cards-1.3/queen_of_spades.png" },
  { suit: "Spades", rank: 10, img: "css/imgs/PNG-cards-1.3/king_of_spades.png" },
  { suit: "Spades", rank: 11, img: "css/imgs/lemmy.jpg" }
];
var shuffled_deck;
var player1_score = 0;
var dealer_score = 0;

$(document).ready(function() {

  $('.stand').hide();
  $('.deal').show();

  $(".deal").click(function(event){
    shuffled_deck = _.shuffle(cards);
    var player1_hand = shuffled_deck.splice(0, 1);
    var player1_hand2 = shuffled_deck.splice(0, 1);
    var dealer_hand = shuffled_deck.splice(0, 1);

    player1_score = player1_hand[0].rank + player1_hand2[0].rank + player1_score;
    dealer_score = dealer_hand[0].rank + dealer_score;

    $(".player1_hand").attr("src", player1_hand[0].img);
    $(".player1_hand").show();
    $(".player1_hand2").attr("src", player1_hand2[0].img);
    $(".player1_hand2").show();
    $(".dealer_hand").attr("src", dealer_hand[0].img);
    $(".player1_score").text(player1_score).val();
    $(".dealer_score").text(dealer_score).val();
    $(".deal").hide();
    $('.stand').show();
    $(".dealer-hit").hide();
    $(".dealer-hit2").hide();
    $(".hit").hide();
    $(".hit").show();
    $(".hit-again").hide();
    event.preventDefault();

    if (player1_score === 21) {
      $(".you-win").show();
      $(".you-win").text("You Win");
      $('.hit').hide();
      $(".hit-again").hide();
      $('.stand').hide();
    } else if (dealer_score === player1_score) {
      $('.you-win').show();
      $('.you-win').text("Push");
    }
  });

  $('.hit').click(function(event) {
    var player1_hand3 = shuffled_deck.splice(0, 1);

    player1_score = player1_hand3[0].rank + player1_score;

    $(".player1_hand3").attr("src", player1_hand3[0].img);
    $(".player1_score").text(player1_score).val();
    $(".dealer_score").text(dealer_score).val();
    $(".player1_hand3").show();
    $(".dealer-hit").hide();
    $(".dealer-hit2").hide();
    $(".hit").hide();
    $(".hit-again").hide();
    $(".hit-again").show();
    event.preventDefault();

    if (player1_score === 21) {
      $(".you-win").show();
      $(".you-win").text("You Win");
      $('.hit').hide();
      $(".hit-again").hide();
      $('.stand').hide();
    } else if (player1_score > 21) {
      $(".you-lose").text("You Bust");
      $('.stand').hide();
      $('.hit-again').hide();
    } else if (dealer_score === player1_score) {
      $('.you-win').show();
      $('.you-win').text("Push");
    }
  });

  $('.hit-again').click(function(event) {
    var player1_hand4 = shuffled_deck.splice(0, 1);

    player1_score = player1_hand4[0].rank + player1_score;

    $(".player1_hand4").attr("src", player1_hand4[0].img);
    $(".player1_score").text(player1_score).val();
    $(".dealer_score").text(dealer_score).val();
    $(".player1_hand4").show();
    $('.hit-again').hide();
    $(".dealer-hit").hide();
    $(".dealer-hit2").hide();

    event.preventDefault();

    if (player1_score === 21) {
      $(".you-win").show();
      $(".you-win").text("You-Win!!!!");
      $('.hit').hide();
      $(".hit-again").hide();
      $('.stand').hide();
    } else if (player1_score > 21) {
      $(".stand").hide();
      $(".you-lose").text("You Bust");
    } else if (dealer_score === player1_score) {
      $('.you-win').show();
      $('.you-win').text("Push");
    }
  });

// Dealer stuff
  $(".stand").click(function() {
    var dealer_hand2 = shuffled_deck.splice(0, 1);

    dealer_score = dealer_hand2[0].rank + dealer_score;

    $(".dealer_hand2").hide();
    $('.dealer_hand2').show();
    $('.dealer_hand2').attr("src", dealer_hand2[0].img);
    $(".player1_score").text(player1_score).val();
    $(".dealer_score").text(dealer_score).val();
    $(".hit-again").hide();
    $(".hit").hide();
    $(".stand").hide();
    $(".dealer-hit").hide();
    $(".dealer-hit2").hide();
    $(".dealer-hit").show();

    event.preventDefault();
    if (dealer_score === 21 && dealer_score > player1_score) {
      $('.hit').hide();
      $(".hit-again").hide();
      $('.stand').hide();
      $(".dealer-hit").hide();
      $(".you-lose").text("Dealer Wins");
  } else if (dealer_score === 17 && player1_score > dealer_score) {
      $('.hit').hide();
      $(".hit-again").hide();
      $('.stand').hide();
      $(".dealer-hit").hide();
      $(".you-win").text("You Win");
  } else if (dealer_score > player1_score && dealer_score < 21) {
      $('.hit').hide();
      $(".hit-again").hide();
      $('.stand').hide();
      $(".dealer-hit").hide();
      $(".you-lose").text("Dealer Wins");
  } else if (dealer_score === player1_score) {
    $('.you-win').show();
    $(".dealer-hit").hide();
    $('.you-win').text("Push");
  }
  });

  $(".dealer-hit").click(function() {
    var dealer_hand3 = shuffled_deck.splice(0, 1);

    dealer_score = dealer_hand3[0].rank + dealer_score;

    $('.dealer_hand3').show();
    $('.dealer_hand3').attr("src", dealer_hand3[0].img);
    $(".player1_score").text(player1_score).val();
    $(".dealer_score").text(dealer_score).val();
    $(".dealer-hit").hide();
    $(".dealer-hit2").hide();
    $(".dealer-hit2").show();

    event.preventDefault();
    if (dealer_score === 21) {
      $(".you-win").show();
      $('.hit').hide();
      $(".hit-again").hide();
      $(".you-lose").text("Dealer Wins");
    } else if (dealer_score > 21) {
        $(".dealer-hit2").hide();
        $('.you-win').show();
        $(".you-win").text("Dealer Busts, you win!");
    } else if (dealer_score < player1_score) {
      $('.stand').hide();
    } else if (dealer_score >= 17 && dealer_score > player1_score) {
        $(".you-lose").text("Dealer Wins");
        $(".dealer-hit2").hide();
        $(".you-win").text("You Win!!");
    } else if (dealer_score === player1_score) {
      $('.you-win').show();
      $(".dealer-hit2").hide();
      $('.you-win').text("Push");
    }
  });

  $(".dealer-hit2").click(function() {
    var dealer_hand4 = shuffled_deck.splice(0, 1);

    dealer_score = dealer_hand4[0].rank + dealer_score;

    $('.dealer_hand4').show();
    $('.dealer_hand4').attr("src", dealer_hand4[0].img);
    $(".player1_score").text(player1_score).val();
    $(".dealer_score").text(dealer_score).val();
    $(".dealer-hit2").hide();
    $(".stand").hide();
    $('.deal').hide();

    event.preventDefault();

    if (dealer_score === 21 && dealer_score > player1_score ) {
      $(".you-lose").text("Dealer Wins");
      $('.hit').hide();
      $(".hit-again").hide();
      $('.stand').hide();
    } else if (dealer_score > 21) {
      $(".you-lose").text("Dealer Busts, you win!");
      $(".dealer-hit2").hide();
    } else if (player1_score > dealer_score) {
      $(".you-win").text("You Win");
    } else if (dealer_score === player1_score) {
      $('.you-win').show();
      $(".dealer-hit2").hide();
      $('.you-win').text("Push");
    }
  });

  $(".deal_again").click(function() {
    location.reload();
  });
});
