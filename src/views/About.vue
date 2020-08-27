<template>
  <div>
    <div v-for="item in dataList" :key="item.id" >{{ item.job }}</div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  // 使用 Vuex
import { namespace } from "vuex-class"
const data = namespace('data')

  @Component
  export default class About extends Vue {
    @data.State 
    public dataList!: Array<any>
    @data.Action
    public getDataLists!: (p: any) => {  }

    mounted() {
      this.getDataLists({p: 123})
    }
  }
</script>

<style scoped>

</style>
