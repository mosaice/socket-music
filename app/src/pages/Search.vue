<template>
  <div class="search-container">
    <h1>选择搜索类型与内容</h1>
      <div class="ant-search-input-wrapper">
        <ant-input-group>
          <ant-input
            placeholder="输入一个或多个关键字用'/'分割"
            :value.sync="value"
          >
          </ant-input>
          <div class="ant-input-group-wrap">
            <ant-button icon="search" :on-click="handleSearch"></ant-button>
          </div>
        </ant-input-group>
      </div>
    <multiselect
      :selected="selected"
      :options="options"
      :multiple="true"
      :searchable="true",
      :taggable="true"
      :allow-empty="false",
      placeholder="选择一个或多个"
      :close-on-select="false",
      key="value"
      label="label"
      @update="updateSelected">
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import _ from 'lodash';
import { Notification } from 'vue-ant-ui';
import { get } from 'api';


export default {
  components: { Multiselect },
  data() {
    return {
      selected: [{ value: 1, label: '歌曲' }],
      value: '',
      data: this.$root.state.search.data,
      options: [{ value: 1, label: '歌曲' },
                { value: 2, label: '歌手' },
                { value: 3, label: '专辑' }],
    };
  },
  methods: {
    get,
    updateSelected(newSelected) {
      const newSelect = _.sortBy(newSelected, ['value']);
      this.selected = newSelect;
    },
    handleSearch() {
      const searchType = this.selected.map(item => item.value);
      const searchValue = this.value.split('/');
      if (searchType.length !== 1) {
        if (searchType.length !== searchValue.lenth) {
          Notification.warning({
            message: '搜索失败',
            description: '请根据选项正确的输入搜索内容 "/" 分割',
          });
          return;
        }
      }
      const query = {
        song: searchValue[0],
        singer: searchValue[1],
        album: searchValue[2],
      };

      this.get('search', query, () => { this.$root.state.search.isFething = true; })
      .then(json => {
        if (!json) return;
        this.$root.search = {
          data: json.data,
          meta: json.meta,
          query: json.query,
          isFething: false,
        };
      });
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
