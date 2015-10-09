app.controller('MainCtrl', function ($scope, ItemsFactory, Categories) {
    // make a query
    ItemsFactory.getItems()
        .then(function () {
            $scope.items = ItemsFactory.items;
        })
        .catch(function (e) {
            console.log('e', e);
        });

    $scope.categories = [
        'Protein',
        'Sports Enhancer',
        'Vegetarian'
    ];

    $scope.activeCat = null;

    $scope.filterByCategory = function (cat) {
        $scope.activeCat = cat;
        $scope.items = null;
        ItemsFactory.getItems(cat)
            .then(function (items) {
                $scope.items = items;
            });
    };

    ItemsFactory.getOneItem()
        .then(function(item){
            $scope.item = item;
        })

    //$scope.filterByID = function (ID) {
    //    $scope.activeID = ID;
    //    console.log($scope.items);
    //    ItemsFactory.getItems(cat)
    //    //.then(function (items) {
    //    //    $scope.items = items;
    //}
});