<template>
  <div id="container">
    <left-menu></left-menu>
    <div id="top-menu">
      <!-- <ant-menu :selected-keys="[]" mode="horizontal">
        <ant-menu-item><a v-link="'/search'">搜索</a></ant-menu-item>
        <ant-menu-item><a v-link="'/room'">聊天室</a></ant-menu-item>
        <ant-menu-item><a v-link="'/calendar'">日历</a></ant-menu-item>
      </ant-menu> -->
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
    <div></div>
  </div>
</template>

<script>
import LeftMenu from 'components/LeftMenu';
import state from 'store';

export default {
  components: {
    LeftMenu,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
@import "./styles/index";



#container {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 300px;
}

</style>
