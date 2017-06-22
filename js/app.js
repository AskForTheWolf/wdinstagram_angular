"use strict";

//angular.module("wdinstagram", [])

  angular
  .module("wdinstagram", ["ui.router", "posts"])
  .config(["$stateProvider", Router])
  .controller("PostIndexController", [
    PostIndexControllerFunction
  ])
  angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .controller("PostShowController", [
    "$stateParams",
    PostShowControllerFunction
  ])
  .controller("PostIndexController", [
    "PostFactory",
    PostIndexControllerFunction
  ]);

  .controller("PostShowController", [
    "PostFactory",
    "$stateParams",
    PostShowControllerFunction
  ])
  .controller("PostNewController", [
    "PostFactory",
    PostNewControllerFunction
  ])

  .controller("PostEditController", [
    "PostFactory",
    "$stateParams",
    PostEditControllerFunction
  ])


  .factory( "PostFactory", [
        "$resource",
        PostFactoryFunction
      ]);

      function postFactoryFunction( $resource ){
        return $resource( "http://localhost:3000/posts/:id", {}, {
          update: { method: "PUT" }
        });
      }


function PostIndexControllerFunction(PostFactory){
  this.posts = PostFactory.query();
}

function PostShowControllerFunction (PostFactory, $stateParams) {
  console.log($stateParams); //for debug purposes and whatnot
this.insta = posts[$stateParams.id];
  
}

function PostNewControllerFunction (PostFactory) {
  console.log($stateParams); //for debug purposes and whatnot
this.insta = new PostFactory();
this.create = function(){
  this.insta.$save()
  }
}
function PostEditControllerFunction(PostFactory, $stateParams){
  this.insta = PostFactory.get({id: $stateParams.id});
  this.update = function(){
    this.insta.$update({id: $stateParams.id})
  }
  this.destroy = function(){
    this.insta.$delete({id: $stateParams.id});
  }
}


function Router($stateProvider){
  $stateProvider
    .state("postIndex", {
      url: "/posts",
      controller: "PostIndexController",
      controllerAs: "vm",
      templateUrl: "js/ng-vews/index.html"
    })

    .state("postShow", {
      url: "/posts/:id",
      controller: "PostShowController",
      controllerAs: "vm",
      templateUrl: "js/ng-views/show.html"
    });


}

$stateProvider
  .state("postIndex", {
    url: "/posts",
    templateUrl: "js/ng-views/index.html",
    controller: "PostIndexController",
    controllerAs: "vm"

  })
  .state("postNew", {
    url: "posts/new",
    templateUrl: "js/ng-views/new.html",
    controller: "PostNewController",
    controllerAs: "vm"
  })
  .state("postShow", {
    url: "posts/show",
    templateUrl: "js/ng-views/show.html",
    controller: "PostShowController",
    controllerAs: "vm"
  });
