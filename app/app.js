var myApp = angular.module('myApp', [])

myApp.controller('testController', function($scope){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1)
  };

  $scope.addNinja = function(){
    $scope.ninjas.push(
    {
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: parseInt($scope.newNinja.rate),
      available: true
    });
    $scope.newNinja.name = "";
    $scope.newNinja.belt = "";
    $scope.newNinja.rate = "";
  };

  $scope.ninjas = [
    {
      name: 'Yoshi',
      belt: 'green',
      rate: 10,
      thumb: "content/img/yoshi.webp",
      available: true
    },
    {
      name: 'Ryu',
      belt: 'black',
      rate: 100,
      thumb: "content/img/ryu.png",
      available: true
    },
    {
      name: 'Charmander',
      belt: 'red',
      rate: 1000,
      thumb: "content/img/char.jpeg",
      available: true
    },
  ];

});

// Fire before the application runs
// myApp.config(function(){



// });


// Will run when the application runs
// myApp.run(function(){


// });
