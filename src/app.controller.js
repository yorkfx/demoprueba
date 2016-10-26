class AppController {

  /**
   * Constructor class AppController
   *
   * @param {object} $scope
   */
  constructor($log, $rootScope) {
    'ngInject';

    $log.log('AppController');

    let vm = this;

    this.navOpen = 0;

    // Watch state to close menu
    $rootScope.$on('$stateChangeStart', function() {
      // if (angular.isDefined(this.navOpen)) {
      vm.navOpen = 0;
      // }
    });
  }

  /**
   * Toggles nav menu.
   */
  toggleMenu() {
    this.navOpen = !this.navOpen;
  }
}

export default AppController;
