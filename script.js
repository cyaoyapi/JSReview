document.addEventListener("DOMContentLoaded", function(){

    const buttonTellMe = document.getElementById("telle-me");
    const storyArea = document.querySelector("#story-area");
    let tour = 0;

    buttonTellMe.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const newParagraph = document.createElement("p");
        tour++;
        switch(tour){
            case 1:
                newParagraph.innerHTML = "My name's <strong>Cyrille YAO</strong>.<br>" +
                "In the beginging, I was single, a bachelor.";
                buttonTellMe.textContent = "continue Tell Me Please!";
                break;
            case 2:
                newParagraph.innerHTML = "In 2015, I married my beautyfull wife <strong>Agnès YAO</strong>.<br>";
                buttonTellMe.textContent = "continue Tell Me Please!";
                break;
            case 3:
                newParagraph.innerHTML = "In 2016, our first daughter was born. She name's <strong>YAO Dabira</strong>.<br>";
                buttonTellMe.textContent = "continue Tell Me Please!";
                break;
            case 4:
                newParagraph.innerHTML = "In 2018, God bless us again.<strong>Akiva YAO</strong>, our boy was born.<br>";
                buttonTellMe.textContent = "continue Tell Me Please!";
                break;
            case 5:
                newParagraph.innerHTML = "Currently wife is pregnant. Our new born will born near June 2022 by the grace of God.";
                buttonTellMe.textContent = "Ended the story";
                break;
            default:
                newParagraph.innerHTML = "Thakns for listening to our story. GoodBye.";
                document.querySelector("body").removeChild(buttonTellMe.parentElement);
        }
        storyArea.appendChild(newParagraph);
    });
}, false);