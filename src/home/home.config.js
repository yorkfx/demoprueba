class HomeConfig {

  static initRoute($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider

      .state('home', {
      url: '/home',
      views: {
        'content@': {
          template: require('./home.pug'),
          controller: 'HomeController as vm'
        }
      }
    })

    .state('about', {
      url: '/about',
      views: {
        'content@': {
          template: require('./about.html')
            // controller: 'HomeController as vm'
        }
      }
    })

    .state('proyecto', {
      url: '/proyecto',
      views: {
        'content@': {
          template: require('./proyecto.pug')
            // controller: 'HomeController as vm'
        }
      }
    })

    .state('tarea', {
      url: '/tarea',
      views: {
        'content@': {
          template: require('./tarea.pug')
            // controller: 'HomeController as vm'
        }
      }
    })

    .state('layout', {
      url: '/layout',
      views: {
        'content@': {
          template: require('./layout.pug')
            // controller: 'HomeController as vm'
        }
      }
    })

    ;

    $urlRouterProvider.otherwise('/home');
  }
}

export default HomeConfig.initRoute;
