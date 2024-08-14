$(document).ready(function(){
    var number = 0
    var num_inc_btn_delta = 1

    $('.num_inc_btn').click(function(){
        increment_number(num_inc_btn_delta)
    });

    function increment_number(delta){
        number += delta
        $('.num_text').html("Number = " + number)
        return number
    }
})