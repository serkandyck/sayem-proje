$( "#request-create" ).on("submit", function( event ) {
    event.preventDefault();

    var formData = {
        requestType: $("#request_type").val(),
        requestTitle: $("#request_title").val(),
        requestContent: $("#request_content").val(),
    };
  
      $.ajax({
        type: "POST",
        url: "/request",
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
      url: "/request/find",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      $("#request-form-card").addClass("hidden");
      $("#request-detail-card").removeClass("hidden");
      var reqType = $("#req-type");
      var reqStatus = $("#req-status");
      var reqDate = $("#req-date");
      var reqLastUpdate = $("#req-last-update");

      reqType.html(data.data.requestTypeId);
      reqStatus.text(data.data.status);
      reqDate.html(prettyDate(data.data.createdAt));
      reqLastUpdate.html(prettyDate(data.data.updatedAt));

    }).fail(function (jqXHR, textStatus, errorThrown) {
      if (jqXHR.status == 422) {
        Swal.fire({
          title: jqXHR.responseJSON.errors[0].msg,
          icon: "error",
          confirmButtonText: "Tamam",
        });
        document.body.classList.remove("swal2-height-auto");
      } else if (jqXHR.status == 404) {
        Swal.fire({
          title: "Talep bulunamadı.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
        document.body.classList.remove("swal2-height-auto");
      } else {
        Swal.fire({
          title: "Beklenmedik bir hata ile karşılaşıldı",
          icon: "error",
          confirmButtonText: "Tamam",
        });
        document.body.classList.remove("swal2-height-auto");
      }
    });
});

function prettyDate(time){
  var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
      diff = (((new Date()).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);
  if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
      return;
  return day_diff == 0 && (
          diff < 60 && "biraz önce" ||
          diff < 120 && "1 dakika önce" ||
          diff < 3600 && Math.floor( diff / 60 ) + " dakika önce" ||
          diff < 7200 && "1 saat önce" ||
          diff < 86400 && Math.floor( diff / 3600 ) + " saat önce") ||
      day_diff == 1 && "Dün" ||
      day_diff < 7 && day_diff + " g" ||
      day_diff < 31 && Math.ceil( day_diff / 7 ) + " h";
}