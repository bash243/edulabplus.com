jQuery(document).ready(function($) {
"use strict";

    $('form.certificateForm').submit(function(){
        var formData = $(this).serialize();
        $.ajax({
            type: "GET",                
            url: 'https://htmlservice.herokuapp.com/api/edulabplus/expo/certificate',				
            data: formData,
            beforeSend: function(){
                $('#loading').addClass("d-block").removeClass("d-none");
             },
            success: function(data) {
               $("#sendmessage").addClass("d-block");
               $("#errormessage").removeClass("d-block");
               $('#loading').removeClass("d-block").addClass("d-none");
            },
            error: function() {
               $("#sendmessage").removeClass("d-block");
               $("#errormessage").addClass("d-block");
               $('#errormessage').html("Error occurred. Please try again");
               $('#loading').removeClass("d-block").addClass("d-none");
            }
        }).always(function(){				
            $('form.certificateForm').find("select[name='studentName']").val('');
        });
       // return false;
    });

});