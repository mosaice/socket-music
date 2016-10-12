<template>
  <div id="container">
    <left-menu></left-menu>
    <div id="top-menu">
      <el-menu class="el-menu-demo" mode="horizontal" router :default-active="$route.path">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/search">搜索</el-menu-item>
        <el-menu-item index="/">房间</el-menu-item>
        <el-menu-item index="/search">其他</el-menu-item>
      </el-menu>
      <music-controller></music-controller>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
    <div>
      <audio :src="currentSong && currentSong.src" ref="audio"></audio>
    </div>
  </div>
</template>

<script>
import LeftMenu from 'components/LeftMenu';
import MusicController from 'components/MusicController';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    LeftMenu,
    MusicController,
  },
  computed: {
    ...mapState(['playList', 'audio']),
    currentSong() {
      const { list, current, casual, isCasual } = this.playList;
      if (isCasual) return casual;
      return list[current];
    },
  },
  methods: mapActions(['saveAudioDom', 'saveComponent']),
  mounted() {
    this.saveComponent('notify', this.$notify);
    this.saveAudioDom(this.$refs.audio);
  },
};
</script>

<style lang="scss">
@import "./assets/stylesheets/base/_vars_zindex.scss";

#container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 300px;
}

.el-menu-demo {
  display: inline-block;
}

#top-menu {
  background: #eff2f7;
  position: fixed;
  top: 0;
  left:300px;
  width: calc(100% - 300px);
  z-index: $zIndex-6-menu;
}

</style>
