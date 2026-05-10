const adviceText = document.querySelector(".advice-wise");
const count = document.querySelector("#times");
const roll_dice = document.querySelector(".roll-dice");

async function getAdvice(){
    try{
        const response = await fetch("https://dummyjson.com/quotes/random");

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        adviceText.textContent = `"${data.quote}"`;
        count.textContent = ` ${data.author} `;
    }catch(error){
       console.error("Error fetching advice: " , error);
       adviceText.textContent = "Something went wrong please try again after some time";
       count.textContent = ``;
    }
}

roll_dice.addEventListener("click" , getAdvice);

getAdvice();
