<template>
  <div class="container">
    <i class="material-icons md-36" @click="listGoPrev">skip_previous</i>
    <i class="material-icons md-36" @click="pauseAudio">{{audio.playing ? 'pause' : 'play_arrow'}}</i>
    <i class="material-icons md-36" @click="listGoNext">skip_next</i>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState(['audio']),
  methods: mapActions(['pauseAudio', 'listGoNext', 'listGoPrev']),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/stylesheets/base/_vars.scss";

  .container {
    display: inline-block;
    height: 65px;
    line-height: 65px;
    float: right;
    margin-right: 20px;
  }
  .material-icons {
    margin: 0 5px;
    cursor: pointer;
    color: #475669;
  }
</style>
