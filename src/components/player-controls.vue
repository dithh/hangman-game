<template>
<div v-if="isGameOn === false">
<button @click="$emit('gameStarted')">Start the game </button>
</div>
<div v-else>
    <button v-for="(letter, index) in lettersArray" :key=index @click="$emit('letterSelected', letter)"> {{letter}}</button>
    <button @click="$emit('gameFinished')">Give up</button>
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

