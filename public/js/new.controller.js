"use strict";

(function(){
  angular
    .module( "radio" )
    .controller("wdiradioNewController", [
      "$firebaseArray",
      "$state",
      wdiradioNewControllerFunction
    ])

    function wdiradioNewControllerFunction( $firebaseArray, $state ){
      console.log("Hi from new")
      var vm = this;
      var ref = firebase.database().ref().child("songs");
      vm.songs = $firebaseArray(ref);


    }
})()
