<template>
  <div class="music-message">
    <el-card>
      <img :src="data.cover" class="image" ref="cover">
      <div class="message">
        <p class="word">{{data.title}}</p>
        <p class="word">{{data.author}}</p>
      </div>
      <div>
        <span>{{current | toTime}} / {{duration | toTime}}</span>
        <div class="icon-group">
          <i v-if="showRemove" class="material-icons md-18" @click="remove(index)">delete_sweep</i>
          <a class="material-icons md-18" :download="data.title" :href="data.src">file_download</a>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Logo from 'assets/images/logo.png';

export default {
  props: {
    data: {
      type: Object,
    },
    current: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    remove: {
      type: Function,
    },
    index: {
      type: Number,
    },
    showRemove: {
      type: Boolean,
    },
  },
  mounted() {
    const { cover } = this.$refs;
    this.changeCover = c => c.src = Logo;
    cover.addEventListener('error', this.changeCover.bind(this, cover), false);
  },
  beforeDestroy() {
    const { cover } = this.$refs;
    cover.removeEventListener('error', this.changeCover.bind(this, cover));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .music-message {
    .el-card {
      background: none;
      border: none;
      box-shadow: none;
    }
  }

  .image {
    width: 100%;
    min-width: 190px;
    min-height: 190px;
  }

  .word {
    font-size: 16px;
    margin-bottom: 5px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .time {
    text-align: center;
  }
  .message {
    padding:14px;
  }

  .icon-group {
    float: right;
  }

  .material-icons {
    cursor: pointer;
    color: #fff;
  }

</style>
