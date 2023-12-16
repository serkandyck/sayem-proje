$( "#request-form" ).on("submit", function( event ) {
    var formData = {
        requestType: $("#request_type").val(),
        requestTitle: $("#request_title").val(),
        requestContent: $("#request_content").val(),
    };
  
      $.ajax({
        type: "POST",
        url: "/form-request",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
      });

    event.preventDefault();
});