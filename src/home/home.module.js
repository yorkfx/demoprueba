import HomeConfig from './home.config';
import HomeController from './home.controller';

let homeModule = angular.module('app.home', []);

homeModule.config(HomeConfig);
homeModule.controller('HomeController', HomeController);

export default homeModule = homeModule.name;
