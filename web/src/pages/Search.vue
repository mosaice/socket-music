<template>
  <div class="search-container">
    <h1>选择搜索类型与内容</h1>
    <el-input
    placeholder="输入一个或多个关键字用'/'分割"
    v-model="input"
    class="search-input"
    @keyup.native.enter="handleSearch"
    >
      <el-button slot="append" icon="search" @click.native="handleSearch"></el-button>
    </el-input>
    <el-checkbox-group v-model="checkList">
      <el-checkbox class="checkbox" label="歌曲"></el-checkbox>
      <el-checkbox class="checkbox" label="歌手"></el-checkbox>
      <el-checkbox class="checkbox" label="专辑"></el-checkbox>
    </el-checkbox-group>
    <div v-if="search.data.length">
      <el-table
        :data="search.data"
        stripe
        selection-mode="single"
        @selectionchange="handleSelectionChange"
        style="width: 100%; margin: 20px;"
        allow-no-selection>
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          property="title"
          label="歌名"
          align="center">
        </el-table-column>
        <el-table-column
          property="album"
          label="专辑"
          align="center">
        </el-table-column>
        <el-table-column
          property="source"
          label="来源"
          align="center">
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @sizechange="sizeChange"
          @currentchange="currentChange"
          :current-page="search.meta.page"
          :page-sizes="[10, 20, 50]"
          :page-size="search.meta.size"
          layout="sizes, prev, pager, next"
          :total="search.meta.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {
  data() {
    return {
      checkList: ['歌曲'],
      input: '',
    };
  },
  computed: mapState(['globalFetch', 'search']),
  methods: {
    ...mapActions(['startSearch']),
    handleSearch() {
      if (!this.checkList.length) {
        return this.$notify({
          title: '警告',
          message: '最少需要选择一项才可搜索',
          type: 'warning',
        });
      }
      const searchValue = this.input.split('/');
      if (this.checkList.length !== 1) {
        if (this.checkList.length !== searchValue.lenth) {
          return this.$notify({
            title: '警告',
            message: '搜索关键词数量不匹配',
            type: 'warning',
          });
        }
        const query = {
          song: searchValue[0],
          singer: searchValue[1],
          album: searchValue[2],
        };
        return this.startSearch(query);
      }
      let query = null;
      switch (this.checkList[0]) {
        case '歌曲':
          query = { song: this.input };
          break;
        case '歌手':
          query = { singer: this.input };
          break;
        case '专辑':
          query = { album: this.input };
          break;
        default:
          break;
      }
      this.startSearch(query);
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    sizeChange(val) {
      console.log(val);
    },
    currentChange(val) {
      console.log(val);
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
  text-align: center;
  margin-top: 100px;
}
.ant-search-input-wrapper {
  margin: 10px 0;
}
.search-input {
  max-width: 300px;
  margin: 20px auto;
}
</style>
