var app=angular.module('computerlist',["ngDragDrop"]);


app.controller('addlist', ['$scope', function($scope){

	$scope.computer=[{
		'img':'src/img/1.jpg',
		'name':'15.6 [Home] Ноутбук DNS (0164783) (HD)',
		'price':'20 490 руб.'
	},{
		'img':'src/img/2.jpg',
		'name':'ПО Microsoft " Windows 8.1 " Русская версия DVD (ВОХ) [WN7-00937]',
		'price':'6 090 руб.'
	},{
		'img':'src/img/3.jpg',
		'name':'15.6 [Home] Ноутбук DNS (0164783) (HD)',
		'price':'20 490 руб.'
	},{
		'img':'src/img/4.jpg',
		'name':'15.6 [Home] Ноутбук DNS (0164783) (HD)',
		'price':'20 490 руб.'
	},{
		'img':'src/img/3.jpg',
		'name':'15.6 [Home] Ноутбук DNS (0164783) (HD)',
		'price':'20 490 руб.'
	},{
		'img':'src/img/1.jpg',
		'name':'15.6 [Home] Ноутбук DNS (0164783) (HD)',
		'price':'20 490 руб.'
	},{
		'img':'src/img/2.jpg',
		'name':'15.6 [Home] Ноутбук DNS (0164783) (HD)',
		'price':'20 490 руб.'
	},{
		'img':'src/img/4.jpg',
		'name':'15.6 [Home] Ноутбук DNS (0164783) (HD)',
		'price':'20 490 руб.'
	}];
	$scope.price="0";
	$scope.bucket_computer=[];
	$scope.dropSuccessHandler = function(element){
		$scope.bucket_computer.splice(element.$index,1);
		var sum=0;
		for (var i = 0; i < $scope.bucket_computer.length; i++) {
			var j=$scope.bucket_computer[i].price;
			var price = j.replace(" ","");
			var arr = price.split(" ");
			sum = sum+parseInt(arr[0]);
		};
		$scope.price=sum;
	};

	$scope.onDrop = function($event,$data,array){
		array.push($data);
		var sum=0;
		for (var i = 0; i < $scope.bucket_computer.length; i++) {
			var j=$scope.bucket_computer[i].price;
			var price = j.replace(" ","");
			var arr = price.split(" ");
			sum = sum+parseInt(arr[0]);
		};
		$scope.price=sum;

		};


	$scope.add_busket = function(element){
		$scope.bucket_computer.push(element.computer)
		var sum=0;
		for (var i = 0; i < $scope.bucket_computer.length; i++) {
			var j=$scope.bucket_computer[i].price;
			var price = j.replace(" ","");
			var arr = price.split(" ");
			sum = sum+parseInt(arr[0]);

		};
		$scope.price=sum;
	};
	$scope.add_view = function(element){
		$scope.bucket_computer.splice(element.$index, 1 )
		var sum=0;
		for (var i = 0; i < $scope.bucket_computer.length; i++) {
			var j=$scope.bucket_computer[i].price;
			var price = j.replace(" ","");
			var arr = price.split(" ");
			sum = sum+parseInt(arr[0]);
		};
		$scope.price=sum;
	};

}]);

