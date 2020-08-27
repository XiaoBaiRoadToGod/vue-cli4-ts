import { Component, Vue } from 'vue-property-decorator'
@Component
class ProjectMixin extends Vue {
  public projName = '我是一个 mixin'
  /**
   * setProjectName
   */
  public setProjectName(newVal: string): void {
    this.projName = newVal
  }
}

export default ProjectMixin