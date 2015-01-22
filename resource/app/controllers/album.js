angular.module('app').controller('albumController',['$scope',function($scope){
    var filename = function (path){
        var nm,amt=10;
        return nm = ((new Date).getMilliseconds() % amt + 1), path + (nm < 10 ? '0'+nm : nm) + '.jpg'; 
    }

    var images=[], data={}, key;
    while(images.length<5){
        key = filename('/mcard/resource/images/');
        if(data[key]) continue;
        data[key]=true, images[images.length]=key;
    }

    $scope.images = images;
}]);