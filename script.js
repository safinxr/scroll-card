const allCards = document.querySelectorAll(".card");
const headerHeight =70;
const baseWidth = 60;
if(allCards.length){
    allCards.forEach((card, i)=>{
        console.log(card);
        const incValue = i*headerHeight;
        const decValue =(allCards.length -i )* headerHeight;
        const widthValue = (allCards.length -i )* baseWidth;

        card.setAttribute("style", `top: ${incValue}px; margin-bottom: ${decValue}px; margin-top: ${incValue}px; bottom: calc(-90vh + ${decValue}px);`)
    })
}