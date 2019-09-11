import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Render from '@/components/00intro/Render'
import ConditionsAndLoop from '@/components/00intro/ConditionsAndLoop'
import HandleUserInput from '@/components/00intro/HandleUserInput'
import Comp from '@/components/00intro/ComponentDemo'
import FirstVueInstance from '@/components/01VueInstance/FirstVueInstance'
import DataAndMerhod from '@/components/01VueInstance/DataAndMerhod'
import LifeLoop from '@/components/01VueInstance/LifeLoop'
import Lang from '@/components/02template/Lang'
import OriginHTML from '@/components/02template/OriginHTML'
import Features from '@/components/02template/Features'
import UseJSExpression from '@/components/02template/UseJSExpression'
import Commond from '@/components/02template/Commond'
import Paremeter from '@/components/02template/Paremeter'
import DynamicParam from '@/components/02template/DynamicParam'
import Modifier from '@/components/02template/Modifier'
import Abbr from '@/components/02template/Abbr'
import ComputeAttr from '@/components/03compute_attr_monitor/ComputeAttr'
import BasicExample from '@/components/03compute_attr_monitor/BasicExample'
import ComputedVSWatch from '@/components/03compute_attr_monitor/ComputedVSWatch'
import ComputedSetter from '@/components/03compute_attr_monitor/ComputedSetter'
import Watch from '@/components/03compute_attr_monitor/Watch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path:'/intro/Render', name:'Render', component:Render},
        {path:'/intro/ConditionsAndLoop', name:'ConditionsAndLoop', component:ConditionsAndLoop},
        {path:'/intro/HandleUserInput', name:'HandleUserInput', component:HandleUserInput},
        {path:'/intro/Comp', name:'ComponentDemo', component:Comp},
        {path:'/VueInstance/FirstVueInstance', name:'FirstVueInstance', component:FirstVueInstance},
        {path:'/VueInstance/DataAndMerhod', name:'DataAndMerhod', component:DataAndMerhod},
        {path:'/VueInstance/LifeLoop', name:'LifeLoop', component:LifeLoop},
        {path:'/VueInstance/Lang', name:'Lang', component:Lang},
        {path:'/VueInstance/OriginHTML', name:'OriginHTML', component:OriginHTML},
        {path:'/VueInstance/Features', name:'Features', component:Features},
        {path:'/VueInstance/UseJSExpression', name:'UseJSExpression', component:UseJSExpression},
        {path:'/VueInstance/Commond', name:'Commond', component:Commond},
        {path:'/VueInstance/Paremeter', name:'Paremeter', component:Paremeter},
        {path:'/VueInstance/DynamicParam', name:'DynamicParam', component:DynamicParam},
        {path:'/VueInstance/Modifier', name:'Modifier', component:Modifier},
        {path:'/VueInstance/Abbr', name:'Abbr', component:Abbr},
        {path:'/VueInstance/ComputeAttr', name:'ComputeAttr', component:ComputeAttr},
        {path:'/VueInstance/BasicExample', name:'BasicExample', component:BasicExample},
        {path:'/VueInstance/ComputedVSWatch', name:'ComputedVSWatch', component:ComputedVSWatch},
        {path:'/VueInstance/ComputedSetter', name:'ComputedSetter', component:ComputedSetter},
        {path:'/VueInstance/Watch', name:'Watch', component:Watch},
      ]
    }
  ]
})
