/**
 * @file
 * Created by hanan on 16/10/15.
 */
const Hello = r => require(['views/HelloWorld'], r)
const NotFound = r => require(['views/NotFound'], r)

// 根目录
const rootPath = ''

// 页面路由
const routes = [
    {
        path: '/',
        redirect: {name: 'hello'}
    },
    {
        path: '/hello',
        component: Hello,
        name: 'hello'
    }
].map(route => {
    route.path = rootPath + route.path
    return route
})

// 404 页
routes.push({path: '*', component: NotFound, name: 'not-found'})

export default routes
