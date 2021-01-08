import Layout from '@/layout'
/**
 * children.length                子菜单： 长度超过 1 才会出现子路线
 * hidden: true                   侧边栏隐藏： 默认为假 , 为真在侧边栏不显示
 * redirect: noRedirect           重定向： noRedirect 不重定向
 * name:'router-name'             路由名称：
 * meta : {

  }
 */
// 基础路由
export const basis = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  }
]

// 报错模块 放在异步路由里,解决刷新404问题
export const err = [
  { path: '*', redirect: '/404', hidden: true }
]

// 通用模块
export const example = [
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'excelExport',
        name: 'ExcelExport',
        component: () => import('@/views/example/excel-export/index'),
        meta: { title: 'excel表格导出', icon: 'table' }
      },
      {
        path: 'excelImport',
        name: 'ExcelImport',
        component: () => import('@/views/example/excel-import/index'),
        meta: { title: 'excel表格导入', icon: 'table' }
      },
      {
        path: 'tableForm',
        name: 'tableForm',
        component: () => import('@/views/example/table-form/index'),
        meta: { title: 'table of from', icon: 'table' }
      },
      {
        path: 'upload',
        name: 'upload',
        component: () => import('@/views/example/upload/index'),
        meta: { title: '文件上传', icon: 'table' }
      },
      {
        path: 'textFormat',
        name: 'textFormat',
        component: () => import('@/views/example/textFormat/index'),
        meta: { title: '富文本', icon: 'table' }
      },
      {
        path: 'chart',
        name: 'chart',
        component: () => import('@/views/example/chart/index'),
        meta: { title: '图表', icon: 'table' }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  }
]
export const component = [
  {
    path: '/component',
    component: Layout,
    redirect: '/component/table',
    name: 'component',
    meta: { title: '组件', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'directive',
        name: 'directive',
        component: () => import('@/views/component/directive/index'),
        meta: { title: '指令', icon: 'table' }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/component/login/index'),
        meta: { title: '登录', icon: 'table' }
      },
      {
        path: 'card',
        name: 'card',
        component: () => import('@/views/component/card/index'),
        meta: { title: '卡片', icon: 'table' }
      },
      {
        path: 'success',
        name: 'success',
        component: () => import('@/views/component/success/index'),
        meta: { title: '成功页面', icon: 'table' }
      }
    ]
  }
]

// 表单
export const form = [
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  }
]

// 树
export const nested = [
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  }
]

// link 跳转
export const link = [
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }
]

// root 账户
export const root = [...err, ...component, ...example, ...form, ...nested, ...link]

// 运营商
export const operator = [...err, ...form, ...nested]

// 全部暴露
export const ALL = {
  basis: basis,
  component: component,
  example: example,
  form: form,
  nested: nested,
  link: link,
  root: root,
  operator: operator
}
