(function(){
  angular
    .module( "radio" )
    .directive('songForm', [
      '$state',
      '$firebaseArray',
      function($state, $firebaseArray){
      return {
        templateUrl: 'js/_song_form.html',
        replace: true,
        scope: {
          song: '=',
          formType: '@'
        },
        link: function(scope){
          var ref = firebase.database().ref().child("songs");
  
          scope.songs = $firebaseArray(ref);
          console.log(scope.songs)
          scope.create = function(){
            console.log("created")
            scope.songs.$add(scope.newSong).then(function(){
              scope.newSong = {};
            })
          }
        }
      }
}]
)
})();
