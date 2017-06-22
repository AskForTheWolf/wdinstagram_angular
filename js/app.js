"use strict";

//angular.module("wdinstagram", [])

  angular
  .module("wdinstagram", ["ui.router", "posts"])
  .config(["$stateProvider", Router])
  .controller("PostIndexController", [
    PostIndexControllerFunction
  ])
  .controller("PostShowController", [
    "$stateParams",
    PostShowControllerFunction
  ])


function PostIndexControllerFunction(){
  this.posts = [
    {author: "No one", body: "Send it!", photo_url: "https://video-images.vice.com/_uncategorized/1487797275177-Larry-Enticer.png"},
    {author: "Your Parents", body: "Once upon a time... the end", photo_url: "http://i.imgur.com/yErFr19.jpg"}

  ]
}

function PostShowControllerFunction ($stateParams) {
  console.log($stateParams); //for debug purposes and whatnot
this.insta = posts[$stateParams.id];
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

  });
