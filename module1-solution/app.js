(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  function LunchCheckController ($scope){
    $scope.name="";
    $scope.diplayMessage = "";
    $scope.display = function(){
       $scope.diplayMessage = displayMeals($scope.name);
    };

    function displayMeals(string){
      console.log(string);
      var  mealsList = string.split(",");
      var displyValue ="";
      if(mealsList.length > 3){
         displyValue = "Too much!";
      } else {
         if(mealsList.length == 1 && mealsList[0] ==""){
            displyValue = "Please enter data first!";
         } else {
           displyValue = "Enjoy!";
         }
      }
      return displyValue;
    }


  }

})();
