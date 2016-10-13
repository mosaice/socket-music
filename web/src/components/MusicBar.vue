<template>
  <div class='container'>
    <div class="progress" :style="width"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { isNaN } from 'lodash';

export default {
  data() {
    return {
      msg: 'Hello World!',
    };
  },
  computed: {
    ...mapState(['audio']),
    width() {
      let { current, duration } = this.audio;
      current = Number(current);
      duration = Number(duration);
      if (isNaN(current) || isNaN(duration) || !duration) return { width: '0px' };
      const percent = `${(current / duration * 100).toFixed(2)}%`;
      return {
        width: percent,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: 4px;
    width: 100%;
  }

  .progress {
    background: #64A6BD;
    height: 100%;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  }
</style>
