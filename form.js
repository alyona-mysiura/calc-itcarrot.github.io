$("#button").click(function(){ 
  AjaxFormRequest('messegeResult_m', 'form_id', '/calc/mail.php'); 
  return false; 
});
function AjaxFormRequest(result_id,form_id,url) {
                jQuery.ajax({
                    url:     url,
                    type:     "POST",
                    dataType: "html",
                    data: jQuery("#"+form_id).serialize(),
                    success: function(response) {
                    document.getElementById(result_id).innerHTML = "<p>Ваша заявка отправлена</p>";
                },
                error: function(response) {
                document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
                }
             });

             $(':input','#form_id')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
    }