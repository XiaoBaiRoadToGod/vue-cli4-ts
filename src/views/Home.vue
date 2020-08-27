<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 通过hook:mounted 监听组件的 mounted 生命钩子函数 -->
    <!--组件的所有生命周期钩子都可以通过@hook:钩子函数名 来监听触发-->
    <HelloWorld @hook:mounted="handleMounted" msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  // 引入一个组件
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {

  public handleMounted(): void {
    console.log('helloWorld mounted---')
  }
  public windowResize (): void {
    console.log('windowResize')
  }
  mounted() {
    // hookEvent 监听生命周期
    window.addEventListener('resize', this.windowResize)
    // 通过hook 监听组件销毁钩子函数，并取消监听事件
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.windowResize)
    })
  }
}
</script>
