<template>
  <div>
    <h1>Simon Says</h1>
    <div class="container">
      <div class="circle">
        <div @click="clicked(1)" class="color red" :class="{lit:isLit[1]}"></div>
        <div @click="clicked(2)" class="color blue" :class="{lit:isLit[2]}"></div>
        <div @click="clicked(3)" class="color yellow" :class="{lit:isLit[3]}"></div>
        <div @click="clicked(4)" class="color green" :class="{lit:isLit[4]}"></div>
      </div>
      <div class="info">
        <h2>Round: {{ level }}</h2>
        <button class="btn" @click="startGame">Start</button>
        <p v-if="isWrong">Sorry, you lost after {{ score }} rounds!</p>
        <h2>Difficulty: </h2>
        <input type="radio" value="1500" v-model="difficulty">
        <label>Easy 1.5s</label><br>
        <input type="radio" value="1000" v-model="difficulty">
        <label>Normal 1s</label><br>
        <input type="radio" value="400" v-model="difficulty">
        <label>Hard 0.4s</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimonGame',
  data() {
    return {
      started: false,
      level: 0,
      score: 0,
      gameSequence: [],
      playerSequence: [],
      sequenceInterval: null,
      isClickable: false,
      isWrong: false,
      difficulty: 1000,
      sounds: [
          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
        ],
      isLit: {
        1: false,
        2: false,
        3: false,
        4: false
      }
    }
  },
  methods: {
    startGame() {
      this.started = true;
      this.level = 0;
      this.score = 0;
      this.gameSequence = [];
      this.playerSequence = [];
      this.isWrong = false;
      clearInterval(this.sequenceInterval);
      this.nextSequence();
    },
    clicked(color) {
      if (this.isClickable) {
        this.playSound(color);
        this.highlight(color);
        this.playerSequence.push(color);
        this.checkAnswer();
      }
    },
    highlight(color) {
      this.isLit[color] = true;
      setTimeout(() => {
        this.isLit[color] = false;
      }, 300);
    },
    playSound(color) {
      this.sounds[color - 1].play();
    },


    nextSequence(redo) {
      let currentIndex = 0;
      // Уровень сложности - скорость
      let speed = this.gameSequence.length === 0 ? 1000 : this.difficulty;
      this.isClickable = false;
      if (!redo) {
        this.gameSequence.push(Math.floor(Math.random() * 4 + 1));
      }
      this.sequenceInterval = setInterval(() => {
        if (currentIndex >= this.gameSequence.length) {
          clearInterval(this.sequenceInterval);
          return (this.isClickable = true);
        }
          this.playSound(this.gameSequence[currentIndex]);
          this.highlight(this.gameSequence[currentIndex]);
          currentIndex++;
        
      }, speed);
    },

    checkAnswer() {
      // Проверяем несовпадения
      for (let i = 0; i < this.playerSequence.length; i++) {
        if (this.playerSequence[i] !== this.gameSequence[i]) {
          this.playerSequence = [];
          this.level = 0;
          this.isWrong = true;
          this.isClickable = false;
        }
      }
      // Если все верно, продолжаем
      if (this.playerSequence.length === this.gameSequence.length) {
        this.score++;
        this.level++;
        this.playerSequence = [];
        this.nextSequence();
      }
    }
  }
  
}

</script>

<style>
  @import '../assets/styles/style.css';
</style>