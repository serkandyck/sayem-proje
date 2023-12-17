$( "#request-create" ).on("submit", function( event ) {
    event.preventDefault();

    var formData = {
        requestType: $("#request_type").val(),
        requestTitle: $("#request_title").val(),
        requestContent: $("#request_content").val(),
    };
  
      $.ajax({
        type: "POST",
        url: "/request/create",
        dataType: "json",
        data: formData,
        encode: true,
      }).done(function (data) {
        Swal.fire({
            title: data.message,
            html: `
              <div class="alert alert-success" role="alert">
                Talep durumunuzu sorgulamak için talep numaraınızı kaydetmeyi unutmayın!
              </div>
              Talep numaranız </br><b>${data.uuid}</b>
            `,
            icon: 'success',
            confirmButtonText: 'Tamam'
        })
        document.body.classList.remove('swal2-height-auto');
        $( "#request-create" ).trigger("reset");
        $("#succ-alert").removeClass("hidden");
        $("#succ-alert").html(data.message + " Talep numaranız </br><b>" + data.uuid + "</b>");
      }).fail(function (data) {
        Swal.fire({
            title: "Beklenmedik bir hata ile karşılaşıldı",
            icon: 'error',
            confirmButtonText: 'Tamam'
        })
        document.body.classList.remove('swal2-height-auto');
        $("#err-alert").removeClass("hidden");
        $("#err-alert").html(data.message);
      });

    
});

$("#find-request-form").on("submit", function( event ) {
  event.preventDefault();

  var formData = {
      uuid: $("#request_uuid").val(),
  };

    $.ajax({
      type: "POST",
      url: "/find-request",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      
    }).fail(function (data) {
      
    });
});