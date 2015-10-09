app.directive('newFlashCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/newFlashCard/newFlashCard.html',
    scope: {},
    controller: function($scope, Categories, ItemFactory) {
      $scope.categories = Categories
      
      $scope.submit = function() {
        console.log('submit')
        ItemsFactory.createItem($scope.formData)
          .then(function(data) {
            console.log('data from server', data)
            $scope.reset();
          })
          .catch(function(e) { console.error(e) })
      };


      $scope.reset = function() {
        $scope.formData = {
          entry: []
        }
      };


      $scope.reset()
    }
  }
})