<template>
  <div>
    我是userInfo
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class UserInfo extends Vue {
    @Prop () readonly id!: number

    mounted() {
      console.log(this.id)
    }
  }
</script>

<style scoped>

</style>