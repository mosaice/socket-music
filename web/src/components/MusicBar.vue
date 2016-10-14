<template>
  <div :style="container" ref="container" class="content">
    <div class="progress" :style="progress"></div>
    <div class="point"
      v-if="slider"
      :style="{left: width}"
      @mousedown="mouseDown($event)"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { isNaN } from 'lodash';

export default {
  props: {
    height: {
      type: Number,
      default: 1,
      validator(value) {
        return value > 0;
      },
    },
    color: {
      type: String,
      default: 'transparent',
    },
    barColor: {
      type: String,
      default: '#64A6BD',
    },
    slider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dragging: false,
      startX: 0,
      currentX: 0,
      sliderWidth: 0,
      postion: '',
    };
  },
  computed: {
    ...mapState(['audio']),
    width() {
      const { dragging, startX, currentX, sliderWidth, postion } = this;
      if (dragging) {
        const distance = (currentX - startX) / sliderWidth * 100;
        const percent = Number(postion.slice(0, -1));
        let result = distance + percent;
        if (result > 100) result = 100;
        if (result < 0) result = 0;

        return `${result.toFixed(2)}%`;
      }

      let { current, duration } = this.audio;
      current = Number(current);
      duration = Number(duration);
      if (isNaN(current) || isNaN(duration) || !duration) return '0%';
      return `${(current / duration * 100).toFixed(2)}%`;
    },
    progress() {
      const { barColor } = this;
      return {
        width: this.width,
        background: barColor,
      };
    },
    container() {
      const { height, color } = this;
      return {
        height: `${height}px`,
        background: color,
        width: '100%',
        position: 'relative',
      };
    },
  },
  methods: {
    ...mapActions(['changeCurrentTime']),
    mouseDown(e) {
      this.onDragStart(e);
      window.addEventListener('mousemove', this.onDragMove, false);
      window.addEventListener('mouseup', this.onDragEnd, false);
    },
    onDragStart(e) {
      this.postion = this.width;
      this.dragging = true;
      this.startX = e.clientX;
      this.currentX = e.clientX;
      this.sliderWidth = this.$refs.container.clientWidth;
    },
    onDragMove(e) {
      if (this.dragging) this.currentX = e.clientX;
    },
    onDragEnd() {
      const floatNum = Number(this.width.slice(0, -1)) / 100;
      this.changeCurrentTime(floatNum * this.audio.duration);
      this.dragging = false;
      window.removeEventListener('mousemove', this.onDragMove);
      window.removeEventListener('mouseup', this.onDragEnd);
    },
  },

};
</script>

<!-- Add "scoped" attribute t limit CSS to this component only -->
<style scoped lang="scss">

  .progress {
    height: 100%;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  }

  .point {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    margin-left: -4px;
    background: #fff;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .content:hover {
    .point {
      opacity: 1;
    }
  }
</style>
