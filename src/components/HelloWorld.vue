<template>
  <div class="hello">
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <!--默认展开一层-->
        <el-menu :default-opends="['1']">
          <!--用户-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>介绍
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link :to="{name:'Render'}">声明式渲染</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link :to="{name:'ConditionsAndLoop'}">条件与循环</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link :to="{name:'HandleUserInput'}">处理用户输入</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link :to="{name:'ComponentDemo'}">组件化应用构建</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--内容-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>Vue实例
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link :to="{name:'FirstVueInstance'}">创建一个Vue实例</router-link>
              </el-menu-item>

              <el-menu-item index="2-2">
                <router-link :to="{name:'DataAndMerhod'}">数据与方法</router-link>
              </el-menu-item>

              <el-menu-item index="2-3">
                <router-link :to="{name:'LifeLoop'}">实例生命周期钩子</router-link>
              </el-menu-item>

            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>模板语法
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link :to="{name:'Lang'}">模板语法</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link :to="{name:'OriginHTML'}">原始 HTML</router-link>
              </el-menu-item>
              <el-menu-item index="3-3">
                <router-link :to="{name:'Features'}">特性</router-link>
              </el-menu-item>
              <el-menu-item index="3-4">
                <router-link :to="{name:'UseJSExpression'}">使用 JavaScript 表达式</router-link>
              </el-menu-item>
              <el-menu-item index="3-5">
                <router-link :to="{name:'Commond'}">指令</router-link>
              </el-menu-item>
              <el-menu-item index="3-6">
                <router-link :to="{name:'Paremeter'}">参数</router-link>
              </el-menu-item>
              <el-menu-item index="3-7">
                <router-link :to="{name:'DynamicParam'}">动态参数</router-link>
              </el-menu-item>
              <el-menu-item index="3-8">
                <router-link :to="{name:'Modifier'}">修饰符</router-link>
              </el-menu-item>
              <el-menu-item index="3-9">
                <router-link :to="{name:'Abbr'}">缩写</router-link>
              </el-menu-item>

            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-message"></i>计算属性和侦听器
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">
                <router-link :to="{name:'ComputeAttr'}">计算属性</router-link>
              </el-menu-item>
              <el-menu-item index="4-2">
                <router-link :to="{name:'OriginHTML'}">原始 HTML</router-link>
              </el-menu-item>
              <el-menu-item index="4-3">
                <router-link :to="{name:'Features'}">特性</router-link>
              </el-menu-item>
              <el-menu-item index="4-4">
                <router-link :to="{name:'UseJSExpression'}">使用 JavaScript 表达式</router-link>
              </el-menu-item>
              <el-menu-item index="4-5">
                <router-link :to="{name:'Commond'}">指令</router-link>
              </el-menu-item>
              <el-menu-item index="4-6">
                <router-link :to="{name:'Paremeter'}">参数</router-link>
              </el-menu-item>
              <el-menu-item index="4-7">
                <router-link :to="{name:'DynamicParam'}">动态参数</router-link>
              </el-menu-item>
              <el-menu-item index="4-8">
                <router-link :to="{name:'Modifier'}">修饰符</router-link>
              </el-menu-item>
              <el-menu-item index="4-9">
                <router-link :to="{name:'Abbr'}">缩写</router-link>
              </el-menu-item>

            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>

      <!--个人信息-->
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>ziming</span>
        </el-header>

        <!--子路由 点击后内容-->
        <el-main>
          <router-view/>
        </el-main>

      </el-container>

    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>

<style scoped>

</style>
