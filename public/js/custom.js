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
        $( "#request-form" ).trigger("reset");
        $("#succ-alert").removeClass("hidden");
        $("#succ-alert").html(data.message + " Talep numaranız </br><b>" + data.uuid + "</b>");
      }).fail(function () {
        Swal.fire({
            title: "Beklenmedik bir hata ile karşılaşıldı",
            icon: 'error',
            confirmButtonText: 'Tamam'
        })
        $("#err-alert").removeClass("hidden");
        $("#err-alert").html("Beklenmedik bir hata ile karşılaşıldı");
      });

    event.preventDefault();
});