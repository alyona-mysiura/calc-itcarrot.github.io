$(function () {

    // $('.select2').select2()
    // $(".vertical_ui_slider").slider({
    //     orientation: "vertical",
    //     range: "min",
    //     max: 10000,
    //     step: 10,
    //     value: $("#amount").value,
    //     slide: function (event, ui) {
    //         $("#amount").val(ui.value);
    //     }
    // });

    // $("#amount").change(function () {
    //     var value = this.value.substring(1);
    //     console.log(value);
    //     $(".vertical_ui_slider").slider("value", parseInt(value));
    // });

    // $(".horizontal_ui_slider").slider({
    //     range: "min",
    //     max: 10000,
    //     step: 10,
    //     slide: function (event, ui) {
    //         $("#amount2").val(ui.value);
    //     }
    // });
    // $("#amount2").change(function () {
    //     var value = this.value.substring(1);
    //     console.log(value);
    //     $(".horizontal_ui_slider").slider("value", parseInt(value));
    // });

    $(".calc_nav li a").click(function (e) {
        e.preventDefault();
    });
    $(".calc_nav li").click(function () {
        $(".calc_nav li").removeClass("active");
        $(this).addClass("active");
    });
    $(".calc_nav .hover_block a").click(function () {
        $(".calc_nav .hover_block a").removeClass("active");
        $(this).addClass("active");
        var c_img = $(this).children("img");
        var id = c_img.data("type");
        var img = c_img.attr('src');
 
        $('.c-img-size').children("img").attr('src',img);
        $('#window_type_inp').val(id);
    });

    $(".li_packet").click(function(){
            var value = $(this).data("typepe");
            $('#packet_inp').val(value);

    });

});
    