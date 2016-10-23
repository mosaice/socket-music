<template>
  <div class='container'>
    <i class="el-icon-loading" v-if="globalFetch.isFething"></i>
    <music-card
      v-if="song"
      :data="song"
      :current="audio.current"
      :duration="audio.duration"
      :index="playList.current"
      :remove="removeFromList"
      :showRemove="!playList.isCasual"
    >
    </music-card>
    <div class="line" v-if="song">
      <music-bar color="#8492A6" barColor="rgba(255,255,255,.84)" :slider="slider"></music-bar>
    </div>
    <transition-group class="play-list" tag="div" name="list">
      <p @click="listGoSome(id)"
        v-for="(item, id) in playList.list"
        :key="id"
        :class="{active: !playList.isCasual && (id === playList.current), titleItem: true}"
      >
        {{ item.title }}
        <i class="material-icons md-18 remove-item" @click="remove(id, $event)">indeterminate_check_box</i>
      </p>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MusicBar from 'components/MusicBar';
import MusicCard from 'components/MusicCard';


export default {
  components: {
    MusicBar,
    MusicCard,
  },
  data() {
    return {
      slider: true,
    };
  },
  computed: {
    ...mapState(['playList', 'audio', 'globalFetch']),
    song() {
      const { list, current, casual, isCasual } = this.playList;
      if (isCasual) return casual;
      return list[current];
    },
  },
  methods: {
    ...mapActions(['listGoSome', 'removeFromList', 'changeCurrentTime']),
    remove(id, e) {
      e.stopPropagation();
      this.removeFromList(id);
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
    display: inline-flex;
    flex-direction: column;
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

  .remove-item {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -9px;
    display: none;
  }

  .titleItem {
    padding: 5px 20px;
    letter-spacing: 2px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    position: relative;
    &.active {
      color: $color-red!important;
      font-weight: bold;
    }
    &:hover {
      border-radius: 5px;
      color: $color-grey-light;
      border-color: $color-white-dividers;
      .remove-item {
        display: inline-block;
      }
    }
  }

  .list-transition {
    transition: opacity 0.3s ease-in;
    will-change: opacity;
  }

  .list-enter, .list-leave {
    opacity: 0,
  }
  .line {
    width: 100%;
    margin-bottom: 20px;
  }

  .play-list {
    overflow-y: auto;
  }
</style>
