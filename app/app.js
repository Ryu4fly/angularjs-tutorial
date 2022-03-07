var myApp = angular.module('myApp', [])

myApp.controller('testController', function($scope){
  $scope.message = "Hello World";

  $scope.ninjas = [
    {
      name: 'Yoshi',
      belt: 'green',
      rate: 10
    },
    {
      name: 'Ryu',
      belt: 'orange',
      rate: 100
    },
    {
      name: 'Shaun',
      belt: 'black',
      rate: 1000
    }
  ];

});

// Fire before the application runs
// myApp.config(function(){



// });


// Will run when the application runs
// myApp.run(function(){


// });
