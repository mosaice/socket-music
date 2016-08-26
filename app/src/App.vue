<template>
  <div>
    <p>当前路径: {{$route.path}}</p>
    <p>当前路由参数: {{$route.params | json}}</p>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  components: {
    Hello,
  },
};
</script>

<style lang="scss">
@import "./styles/index";
</style>
