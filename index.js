function getCards() {
    fetch("https://api.pokemontcg.io/v1/cards?name=pikachu")
        .then((response) => response.json())
        .then((data) => {
            data.cards.forEach((card) => {
                console.log(card);
                document.getElementById("cards").innerHTML +=
                    ("<img src =" + card.imageUrl + "/>"
                    )
            });
        });
}
