/*
 * @Author: your name
 * @Date: 2020-08-18 09:57:07
 * @LastEditTime: 2020-08-26 11:52:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \typescipt-app\src\store\index.ts
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 自动注册store 模块
const files = require.context( './modules', false, /\.ts$/ )
const modules: any = {}
files.keys().forEach( key => {
  modules[key.replace( /(\.\/|\.ts)/g, '' )] = files( key ).default
} )
console.log(modules)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});
