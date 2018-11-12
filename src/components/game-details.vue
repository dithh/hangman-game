<template>
<div>
    <p> Lifes left {{this.guessesLeft}}</p>
    <p>Letters used: <span v-for="(letter, index) in lettersUsed" :key="index">{{letter}}</span></p>
    <p><span v-for="(guess,index) in guessed" :key=index>{{guess}} </span></p>
    </div>
</template>
<script>
export default {
    props:["guessesLeft","lettersUsed","guessed"]
}
</script>

