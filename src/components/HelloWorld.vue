<!--
 * @Author: your name
 * @Date: 2020-08-18 09:57:07
 * @LastEditTime: 2020-08-26 13:56:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescipt-app\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}{{name}}</h1>
    <h2>Like:</h2>
    <div v-for="item in like" :key="item.name">{{item.name}}</div>
    <h2>My Full Name is {{fullName}}</h2>
    <button @click="clickMe">演示一下方法：methods</button>
    <h2>子组件改变后传回父组件的值：{{num}}</h2>
    <Project @add-one="someMethod"></Project>
  </div>
</template>

<script lang="ts">
// 为了使用Typescript 首先要设置script 的lang 属性为 ts

// 注意：后面会有多次运用到它
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
// vue-property-decorator 是一个第三方包，他使用了 Vue 类组件包，并在此基础上添加了更多的装饰器
import Project from '@/components/Project.vue'


// 使用 Vuex
import { namespace } from 'vuex-class'
const data = namespace('data')

@Component({
  name: 'HelloWorld',
  components: {
    Project
  }
})
export default class HelloWorld extends Vue {

  // 使用Vuex 
  @data.State
  public myName!: string
  @data.Getter
  public nameUpperCase!: string

  @data.Action
  public updateName!: (newName: string) => void

  // props
  // 使用 readonly 避免操作改变props
  // 设置 ! 修饰符规避问题
  @Prop() readonly msg!: string;
  @Prop({
    default: 'Gopal',
    required: false,
    type: String
  }) readonly name!: string


  // data 的书写
  private like: object[] = [
    { name: "daxia", age: 26 }
  ];
  private firstName = ''
  private lastName = 'Da Xia'
  private num = 0

  // computed 的书写
  get fullName(): string {
    console.log('Get fullName')
    return this.firstName + ' ' + this.lastName
  }
  set fullName(newValue: string) {
    console.log('Set fullName')
    const names = newValue.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }

  // methods 写法
  public clickMe(): void {
    console.log('方法的使用')
    console.log(this.addNum(4, 2))
    console.log('----')
  }
  public addNum(num1: number, num2: number) {
    return num1 + num2
  }

  // 验证组件通信
  someMethod(n: number) {
    this.num = n
  }

  // Watch 的使用
  @Watch('fullName', {
    immediate: true,
    deep: true
  })
  nameChanged(newVal: string, oldVal: string) {
    console.log('watch----', newVal, oldVal)
  }

  // 生命周期写法
  created() {
    this.fullName = 'XIAO Da Xia'
  }
  mounted() {
    console.log('mounted')
  }


  
}
/****
 * 上边的代码等价于
 * export default {
 *  name: 'HelloWorld,
 *  props: ['msg']
 * }
 */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
