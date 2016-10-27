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
          template: require('./about.pug')
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

    .state('dashboard', {
      url: '/dashboard',
      views: {
        'dashboardUI@': {
          template: require('./dashboard.pug')
            // controller: 'HomeController as vm'
        }
      }
    })

    .state('reports', {
      url: '/reports',
      views: {
        'dashboardUI@': {
          template: require('./reports.pug')
            // controller: 'HomeController as vm'
        }
      }
    })

    .state('projects', {
      url: '/projects',
      views: {
        'dashboardUI@': {
          template: require('./projects.pug')
            // controller: 'HomeController as vm'
        }
      }
    })


    .state('clients', {
      url: '/clients',
      views: {
        'dashboardUI@': {
          template: require('./clients.pug')
            // controller: 'HomeController as vm'
        }
      }
    })


    .state('team', {
      url: '/team',
      views: {
        'dashboardUI@': {
          template: require('./team.pug')
            // controller: 'HomeController as vm'
        }
      }
    })


    .state('profile', {
      url: '/profile',
      views: {
        'dashboardUI@': {
          template: require('./profile.pug')
            // controller: 'HomeController as vm'
        }
      }
    })

    ;

    $urlRouterProvider.otherwise('/home');
  }
}

export default HomeConfig.initRoute;
