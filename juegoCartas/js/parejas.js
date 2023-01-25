 $(principal);

function principal(){
    
    $(document).ready(function(){
        $(".card").click(function(){
            $(this).hide();
        });
    });
}




















    // // Shuffle the cards
    // var cards = $("#card-container .card");
    // for (var i = 0; i < cards.length; i++) {
    // var target = Math.floor(Math.random() * cards.length - 1) + 1;
    // var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    // cards.eq(target).before(cards.eq(target2));
    // }

    // // Keep track of the currently selected card
    // var currentCard = null;

    // // Handle clicks on cards
    // $(".card").click(function() {
    // var card = $(this);
    
    // // If this card is already flipped, do nothing
    // if (card.hasClass("flipped")) {
    //     return;
    // }
    
    // // Flip the card
    // card.addClass("flipped");
    
    // // Check if this is the first card or the second card
    // if (!currentCard) {
    //     // This is the first card
    //     currentCard = card;
    // } else {
    //     // This is the second card
    //     // Compare the two cards to see if they match
    //     if (currentCard.data("card") == card.data("card")) {
    //         currentCard.off("click")
    //         card.off("click")
    //         setTimeout(function() {
    //         currentCard.addClass("matched");
    //         card.addClass("matched");
    //         currentCard = null;
    //     }, 1000);
    //     } else {
    //     setTimeout(function() {
    //         currentCard.removeClass("flipped");
    //         card.removeClass("flipped");
    //         currentCard = null;
    //     }, 1000);
    //     }
    // }
    // });

