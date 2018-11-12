<template>
<div v-if="isGameOn === false" class="controls">
<button class="btn start-game-btn" @click="$emit('gameStarted')">Start the game </button>
</div>
<div v-else>
<div class="controls keyboard">
    <button class="btn keyboard-btn" v-for="(letter, index) in lettersArray" :key=index @click="$emit('letterSelected', letter)"> {{letter}}</button>
    </div>
    <div class="controls"><button @click="$emit('gameFinished')" class="btn give-up-btn">Give up</button>
</div>
</div>
</template>
<script>
export default {
    props:["isGameOn"],
    data:function(){
        return{
            lettersArray:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        }
    }
}
</script>
<style>
.btn{
     border: 0.5px solid black;
     border-radius: 6px; 
      text-align: center;
      display: inline-block;
      font-size: 16px;
      margin:5px 5px;
      padding:16px 32px;
}
.keyboard-btn{
    padding:0px;
    margin:2px;
    height:40px;
    width:40px;
}

.give-up-btn{
    background:red;
}
.start-game-btn{
    background:#76ff7e;
}
.controls{
    margin:15px;
    padding:5px;
     border:black 0.5px solid;
    box-shadow: 0px 3px 6px #ccc;
}
.keyboard{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
}
</style>


