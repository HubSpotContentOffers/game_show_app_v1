document.addEventListener("DOMContentLoaded", () =>  {
  //Global variables
  const startGame = document.querySelector(".btn__reset");
  const overlay = document.getElementById("overlay");
  const phrase = document.getElementById("phrase");
  const qwerty = document.getElementById("qwerty");

    //Start game with addEventListener() on start game button
    startGame.addEventListener("click", () => {
        overlay.style.display = "none";

        //Create phrases array
        const phrases = ["as you wish", "whats knitten kitten", "danger will robinson", 
                         "single serving friends", "si vis pacem para bellum"];
       
       //Get phrase function 
       function getRandomPhrase(phrases){
         //Dynamic random based on the number of phrases in the array
         let random = Math.floor(Math.random() * phrases.length);
         //Use random to select a phrase
         let randomPhrase = phrases[random];
         //Split that phrase into an array of letters
         let splitPhrase = randomPhrase.split("");
         //Return result
         return splitPhrase;
       }

       //Collect the result of getRandomPhrase()
       let splitPhrase = getRandomPhrase(phrases);

       //Add to display
       function addPhraseToDisplay(splitPhrase){
          //Loop through letters in phrase
          let word = 0;
          for (let i = 0; i < splitPhrase.length; i++) {
           
            //Ensure letter isn't a space
            if (splitPhrase[i] != " ") {
              //Create li
              let li = document.createElement("LI");
              //Create text containing current letter 
              let phraseLetter = document.createTextNode(splitPhrase[i]);
              //Add html to the dom
              phrase.children[0].appendChild(li);
              //Style the li
              li.classList.add("letter");
              phrase.children[0].lastChild.style.marginBottom = "10px";
              //Add letter to the li
              li.appendChild(phraseLetter);
             //Check for space
            }else if(splitPhrase[i] == " "){
              //Count words
              word++;
              //Create visual spacing 
              let li = document.createElement("LI");
             
              li.classList.add("space");
              //Ensure no more than two words per line
              if(word == 2 || word == 4){
                //Linebreak after 2 and 4 words
                let br = document.createElement("BR");
                //Add linebreak to dom
                phrase.children[0].appendChild(br);
              }
              
             }
          }
        }
        addPhraseToDisplay(splitPhrase);
        //Get qwerty children 
            
            for (var i = 0; i < transcript.length; i += 1) {
            transcript[i].addEventListener("click", function (event) {
              video.currentTime = event.target.getAttribute("data-start");
            });                
          }
        
        
    });
});

