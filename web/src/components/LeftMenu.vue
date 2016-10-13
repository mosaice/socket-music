<template>
  <div class='container'>
    <i class="el-icon-loading" v-if="globalFetch.isFething"></i>
    <div class="music-message" v-if="song">
      <el-card>
        <img :src="song.cover" class="image">
        <div class="message">
          <p class="word">{{song.title}}</p>
          <p class="word">{{song.author}}</p>
        </div>
        <div>
          <span>{{audio.current | toTime}} / {{audio.duration | toTime}}</span>
          <div class="icon-group">
            <i class="material-icons md-18">delete_sweep</i>
            <a class="material-icons md-18" :download="song.title" :href="song.src">file_download</a>
          </div>
        </div>
      </el-card>
    </div>
    <div class="play-list">
      <p v-for="(item, id) in playList.list" :key="id" :class="{active: id === playList.current, titleItem: true}">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['playList', 'audio', 'globalFetch']),
    song() {
      const { list, current, casual, isCasual } = this.playList;
      if (isCasual) return casual;
      return list[current];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/stylesheets/base/_vars.scss";

  .container {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #324057;
    color: #fff;
    padding: 10px;
  }

  .music-message {
    .el-card {
      background: none;
      border: none;
      box-shadow: none;
    }
  }

  .image {
    width: 100%;
  }

  .word {
    font-size: 16px;
    margin-bottom: 5px;
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

  .el-icon-loading {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .titleItem {
    text-align: center;
    padding: 5px;
    letter-spacing: 2px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    &.active {
      color: $color-red!important;
      font-weight: bold;
    }
    &:hover {
      border-radius: 5px;
      color: $color-grey-light;
      border-color: $color-white-dividers;
    }
  }

</style>
