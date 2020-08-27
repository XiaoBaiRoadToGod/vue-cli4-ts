<template>
  <div class="hello" >
    <h1>{{ name }}</h1>
    <button @click="addOne">累增加一：改变父组件</button>
    <h2>Mixins 的实现</h2>
    {{projectDetail}}
  </div>
</template>

<script lang="ts">
import { Component, Emit, Mixins } from 'vue-property-decorator'
import ProjectMixins from '@/mixins/ProjectMixin'

@Component({
  name: 'Project'
})
export default class Project extends Mixins(ProjectMixins) {
  private name = '我是一个子组件'
  private num = 1
  get projectDetail(): string {
    return this.projName + ' ' + '很强大'
  }

  // 验证组件之间通信
  @Emit()
  public addOne(): number {
    this.num++ 
    return this.num
  }
}

</script>

<style scoped>

</style>