app.directive('item', function () {
	return {
		restrict: 'E',
		scope: {
			theItem: '=item'
		},
		templateUrl: '/directives/item/item.html'
	};
});