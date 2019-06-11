// 导入组件，组件必须声明 name
import TestUiBtn from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
TestUiBtn.install = function (Vue) {
  Vue.component(TestUiBtn.name, TestUiBtn)
}

export default TestUiBtn
