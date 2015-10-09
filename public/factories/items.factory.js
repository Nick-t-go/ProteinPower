/**
* Created by uzer-y on 10/4/15.
*/
app.factory('ItemsFactory', function ($http) {
    return {
        getItems: getItems,
        getOneItem: getOneItem,
        items: [],
    };

        //items: [],
    function getItems(cat) {
        var self = this;
        var config = {};
        if (cat) config.params = {category: cat};
        return $http.get('/item', config)
            .then(function (res) {
                self.items = res.data;
                return res.data;
            });
    }

    function getOneItem(id){
        console.log(id);
        return $http.get('/item/' + id)
            .then(function(results){
                console.log(results.data)
                return results.data;
            });
    };

});