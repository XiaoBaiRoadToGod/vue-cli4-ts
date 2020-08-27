/*
 * @Author: your name
 * @Date: 2020-08-26 09:57:24
 * @LastEditTime: 2020-08-26 11:54:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \typescipt-app\mock\modules\dataLists.ts
 */
const lists: any = {
  code: 1,
  message: 'success',
  total: 100,
  'rows|10': [{
    id: '@guid',
    name: '@cname',
    'age|20-30': 23,
    'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
  }]
  
}

export default {
  'get|/data/lists': lists,
}