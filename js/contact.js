$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            /*var url = "./contact.php";*/
            var url = "contact.php";
            
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = "您的留言已发送。Your message has been sent.";//data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    
                    if (1 ||  messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        //alert(alertBox+"\n"+$('#contact-form').find('.messages'));
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});