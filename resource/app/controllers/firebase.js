angular.module('app').controller('firebaseController',['$scope',function($scope){
    var fb = new Firebase('https://kangki.firebaseio.com/'), num = 0;

    function addReply(data){
        num += 1;
        var text = '<tr><td>';
        text    += '<h4 class="list-group-item-heading">['+num+'] '+data.name+'</h4>';
        text    += '<p class="list-group-item-text">'+data.message+'</p></td></tr>';

        $('#view').prepend(text);
    }

    $('#btnReplay').on('click',function(e){
        e.preventDefault();
        var name = $('#name').val(), message = $('#message').val();
        if(name && message) {
            fb.push({name:name,message:message});
            $('#message').val('');      
        }
    });

    fb.on('child_added',function(s){
        addReply(s.val());
    });

}]);