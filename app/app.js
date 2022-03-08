var myApp = angular.module('myApp', [])

myApp.controller('testController', function($scope){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1)
  };

  $scope.ninjas = [
    {
      name: 'Yoshi',
      belt: 'green',
      rate: 10,
      available: true
    },
    {
      name: 'Ryu',
      belt: 'orange',
      rate: 100,
      available: false
    },
    {
      name: 'Shaun',
      belt: 'black',
      rate: 1000,
      available: true
    },
    {
      name: 'Henry',
      belt: 'yellow',
      rate: 400,
      available: true
    }
  ];

});

// Fire before the application runs
// myApp.config(function(){



// });


// Will run when the application runs
// myApp.run(function(){


// });
