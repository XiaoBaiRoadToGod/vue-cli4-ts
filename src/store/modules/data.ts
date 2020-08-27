import data from '@/api/data'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
// 

@Module({ namespaced: true})
class Data extends VuexModule {
  // 定义 state 
  public dataList: Array<any> = []
  public myName = ''

  
  @Mutation
  /**
   * name
   */
  public setDataLists(data: any): void {
    this.dataList = this.dataList.concat(data)
  }

  public setName(newName: string): void {
    this.myName = newName
  }

  @Action({ rawError: true })

  public updateName(newName: string): void {
    this.context.commit('setName', newName)
  }
  @Action({ rawError: true })
  public getDataLists(par: any) {
    console.log('=====')
    data.getData( par ).then(res => {
      console.log(res)
      const { rows } = res.data
      this.context.commit('setDataLists', rows)
    }).catch(err => {
      console.log(err)
    })
    
    // return new Promise((resolve, reject) => {
    //   try {
    //     console.log('getData')
    //     const resp = data.getData( par )
    //     resp.then(res => {
    //       console.log(res)
    //       const { code, rows } = res
    //       if(code) {
    //         this.context.commit('setDataLists', rows)
    //       }
            
    //     })

    //     resolve( resp )
    //   } catch ( e ) {
    //     console.log(e)
    //     reject( e )
    //   }
    // })
  }

}
export default Data
