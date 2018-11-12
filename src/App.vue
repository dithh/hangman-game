<template>
  <div id="app" class="game-window">
    <game-header></game-header>
    <game-details :guesses-left="this.guessesLeft"
   :letters-used="this.lettersUsed"
   :guessed="this.guessed"></game-details>
    <player-controls :is-game-on=isGameOn 
    @gameStarted="startGame"
    @gameFinished="endGame"
    @letterSelected="checkGuess($event)"></player-controls>
  </div>
</template>

<script>
import GameHeader from './components/game-header.vue'
import PlayerControls from './components/player-controls.vue'
import Answer from './components/answer.vue'
import GameDetails from './components/game-details.vue'




export default {
  name: 'app',
  data:function() {
    return {
      isGameOn:false,
      answer:"",
      guessesLeft:10,
      lettersUsed:[],
      toGuess:0,
      guessed:[]
    }
  },
  methods:{
    startGame: function () {
      fetch("https://wordsapiv1.p.mashape.com/words/?random=true", {
        headers: {
          "X-Mashape-key": "oDMWIcQhtUmsheKLOq97fytvcg8ap15biEwjsnwIoq9eUUTaDZ",
          "X-Mashape-host": "wordsapiv1.p.mashape.com"
        }
      }).then((response) => {
        return response.json()
      }).then((data) => {
        this.answer = data.word.replace(/[\W_]+/g," "); //replace all non alphabetic characters with regular space
        this.toGuess = this.answer.replace(/ /g,'').length; // number of found letters to win
        this.isGameOn = true
        for (let i = 0; i < this.answer.length; i++) {  // for loop pushing appropriate characters to guessed array 
        let answerSplitted=this.answer.split('')      // white spaces are replaced with -
          if(answerSplitted[i] === " "){ 
          this.guessed.push("-")
          } else {                                 /// letters are replaced with _
            this.guessed.push("_")
          }
        }

      })
      console.log(this.answer)
    },
    endGame:function(){
      this.isGameOn = false
      this.answer = ""
      this.guessesLeft = 10;
      this.lettersUsed= [];
      this.guessed=[];
    },
    checkGuess(letter) {
      let index = this.answer.toUpperCase().indexOf(letter)
      if (this.lettersUsed.indexOf(letter) === -1) { // if letter was not used 
        this.lettersUsed.push(letter); // add letter to lettersUsed array
        if (index === -1) { // if answer does not  contain the letter 
          this.guessesLeft-- // take one life away
          if (this.guessesLeft == 0) { // reset the game if player ran out of lifes.
           window.alert("You loss! The answer is : " + this.answer)
            this.endGame() 
          }
        } else {                  //if answer contains the letter
        
        while (index != -1) {
           this.toGuess--         
          this.guessed[index] = letter;
          if(this.toGuess === 0){  // if player guessed everything 
            window.alert("You won! The answer is: "+ this.answer)   // pop up the alert
            this.endGame(); // end the game 
          } index = this.answer.toUpperCase().indexOf(letter, index + 1)
          }
        }
      } else { //letter used 
        window.alert("That letter was already used!")
      }


    }
    },
  components: {
    GameHeader,
    PlayerControls,
    Answer,
    GameDetails
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300");
body{
  font-family: 'Open Sans Condensed', sans-serif;
}


.game-window{
  width: 450px;
  margin:auto;
  text-align: center;
}
</style>
