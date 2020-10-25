import AUTH from '../services/auth'
let beforeEnter = (to, from, next) => {
  // localStorage.setItem('usertoken', 'abcde')
  // localStorage.setItem('usertoken', 'abcde')
  // TODO Redirect if no token when token is required in meta.tokenRequired
  AUTH.currentPath = to.path
  let userID = null
  if(localStorage.getItem('cashierId') !== null){
    userID = localStorage.getItem('cashierId')
  }else if(localStorage.getItem('adminId') !== null){
    userID = localStorage.getItem('adminId')
  }else{
    userID = localStorage.getItem('customerId')
  }
  let token = localStorage.getItem('userToken')
  if(token !== null && userID > 0){
    if(to.path === '/' || to.meta.tokenRequired === false){
      next({path: '/casherDashboard'})
    }else{
      next()
    }
  }else if(to.meta.tokenRequired === true){
    next({path: '/'})
  }else{
    next()
  }
}
var devRoutes = []
let driptea = require('./dev_routes/app.js')
devRoutes = devRoutes.concat(driptea.default.routes)
for(let x = 0; x < devRoutes.length; x++){
  devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
  {
    path: '/',
    name: 'landing',
    component: resolve => require(['@/js/basic/landing'], resolve),
    beforeEnter: beforeEnter
  }
]
// if(CONFIG.default.IS_DEV){
routes = routes.concat(devRoutes)
// }
export default{
  routes: routes
}
