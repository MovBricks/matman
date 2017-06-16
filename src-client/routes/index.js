export default {
  childRoutes: [{
    path: '/',
    component: require('../containers/App').default,
    indexRoute: { onEnter: (nextState, replace) => replace('/admin/home') },
    childRoutes: [
      require('../pages/home/routes').default,
      require('../pages/about/routes').default,
      // require('../pages/mockers'),
      // require('../pages/topics'),
    ]
  }]
};