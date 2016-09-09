<template>
  <div class="search-container">
    <h1>选择搜索类型与内容</h1>
      <div class="ant-search-input-wrapper">
        <ant-input-group>
          <ant-input
          placeholder="输入一个或多个关键字用'\'分割"
          >
          </ant-input>
          <div class="ant-input-group-wrap">
            <ant-button icon="search"></ant-button>
          </div>
        </ant-input-group>
      </div>
    <multiselect
      :selected="selected"
      :options="options"
      :multiple="true"
      placeholder="选择一个或多个"
      @update="updateSelected">
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  components: { Multiselect },
  data() {
    return {
      selected: null,
      options: ['歌曲', '歌手', '专辑'],
    };
  },
  methods: {
    updateSelected(newSelected) {
      this.selected = newSelected;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.search-container {
  width: 300px;
}
.ant-search-input-wrapper {
  margin: 10px 0;
}
</style>
