function getCards() {
    const result = document.getElementById("search").value;
    fetch(`https://api.pokemontcg.io/v1/cards?name=${result}`)
        .then((response) => response.json())
        .then((data) => {
            data.cards.forEach((card) => {
                document.getElementById("cards").innerHTML +=
                    ("<img src =" + card.imageUrl + " title='Set: " + card.set + " ' />"
                    )
            });
        });
}

function removeCards() {
    document.getElementById("cards").innerHTML = "";
}