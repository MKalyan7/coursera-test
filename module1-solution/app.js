(function functionName() {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope){
     $scope.name="";
     $scope.diplayMessage = "";
     $scope.displayMeals = function (){
        var displyValue =calculateNumericForString($scope.name)
        $scope.diplayMessage = displyValue;
     };

     function calculateNumericForString(string){
       var  mealsList = string.split(",");
       var displyValue ="";
       if(mealsList.length > 3){
          displyValue = "Too much!";
       } else {
          displyValue = "Enjoy!";
       }
       return displyValue;
     }

  });

})();
