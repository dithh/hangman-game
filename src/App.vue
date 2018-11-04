<template>
  <div id="app">
    <game-header></game-header>
    <p> Lifes left {{this.guessesLeft}}</p>
    <p>Letters used: <span v-for="(letter, index) in lettersUsed" :key="index">{{letter}}</span></p>
    <p><span v-for="(guess,index) in guessed" :key=index>{{guess}} </span></p>
    <answer :answer="this.answer"></answer>
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



export default {
  name: 'app',
  data:function() {
    return {
      isGameOn:false,
      answersArray:["Cygan","Bagno","Baba",],
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
        this.answer = data.word.replace(/[\W_]+/g," ");
        this.toGuess = this.answer.replace(/ /g,'').length;
        this.isGameOn = true
        for (let i = 0; i < this.answer.length; i++) {
          let answerSplitted=this.answer.split('')
          if(answerSplitted[i] === " "){
          this.guessed.push("-")
          } else {
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
            this.endGame()
          }
        } else {                  //if answer contains the letter
        
        while (index != -1) {
           this.toGuess--         
          this.guessed[index] = letter;
          if(this.toGuess === 0){  // if player guessed everything 
            window.alert("You won! Answer is: "+ this.answer)   // pop up the alert
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
  }
}
</script>

<style>
</style>
