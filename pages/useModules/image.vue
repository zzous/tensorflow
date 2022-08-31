<template>
  <div>
    <h1>모델 사용하기 ( mobilenet / coco-ssd )</h1>
    <div>mobilenet : <a href="https://github.com/tensorflow/tfjs-models/tree/master/mobilenet" target="_blank">https://github.com/tensorflow/tfjs-models/tree/master/mobilenet</a></div>
    <div>coco-ssd : <a href="https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd" target="_blank">https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd</a></div>
    <div>
      <img src="/images/bird.jpg" alt="" @click="getPredictions">
      <img src="/images/dog.jpg" alt="" @click="getPredictions">
      <img src="/images/cow.jpg" alt="" @click="getPredictions">
      <img src="/images/cat.jpg" alt="" @click="getPredictions">
    </div>
    <!-- <div>{{ predictions }}</div> -->
    <div v-if="loading">loading...</div>
    <div>
      <h2>mobilenet</h2>
      <template v-for="(item, index) in predictionsMobilenet">
        <div :key="`mn${index}`">
          <ul>
            <li>className : {{ item.className }}</li>
            <li>probability : {{ item.probability }}</li>
          </ul>
        </div>
      </template>
      <h2>coco-ssd</h2>
      <template v-for="(item, index) in predictionsCocoSsd">
        <div :key="`cc${index}`">
          <ul>
            <li>bbox [x, y, width, height] : {{ item.bbox }}</li>
            <li>class : {{ item.class }}</li>
            <li>score : {{ item.score }}</li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// import * as tf from '@tensorflow/tfjs';
const mobilenet = require('@tensorflow-models/mobilenet');
const cocoSsd = require('@tensorflow-models/coco-ssd');
const backend = require('@tensorflow/tfjs-backend-webgl');
const cpu = require('@tensorflow/tfjs-backend-cpu');
// const mobilenet = require('@tensorflow-models/mobilenet'); ;
export default ({
  name: 'MODULEIMAGE',
  data () {
    return {
      loading: true,
      img: null,
      mobilenetModel: null,
      cocoSsdModel: null,
      predictionsMobilenet: null,
      predictionsCocoSsd: null
    };
  },
  create () {
  },
  mounted () {
    this.$nextTick(() => {
      this.getModel();
    });
    // console.log('# mounted', mobilenet, mobilenet.load());
    this.img = document.getElementById('img');
  },
  methods: {
    async getModel () {
      this.loading = true;
      this.mobilenetModel = await mobilenet.load();
      this.cocoSsdModel = await cocoSsd.load();
      this.loading = false;
      // console.log('# getModel', this.model, mobilenet.load());
    },
    async getPredictions (event) {
      if (this.mobilenetModel) { this.predictionsMobilenet = await this.mobilenetModel.classify(event.target); }
      if (this.cocoSsdModel) { this.predictionsCocoSsd = await this.cocoSsdModel.detect(event.target); }
    }
  }
});
</script>
