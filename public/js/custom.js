/*$( "#request-create" ).on("submit", function( event ) {
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
      }).fail(function (jqXHR, textStatus, errorThrown) {        
        if (jqXHR.status == 400) {
          console.log(jqXHR.responseJSON.errors);
          $("#err-alert").removeClass("hidden");
          $("#err-alert").html(jqXHR.responseJSON.errors);
        } else {
          Swal.fire({
            title: "Beklenmedik bir hata ile karşılaşıldı",
            icon: "error",
            confirmButtonText: "Tamam",
          });
          document.body.classList.remove("swal2-height-auto");
        }
      });

    
});*/

/*$("#find-request-form").on("submit", function( event ) {
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
      var reqStatusTitle = $("#req-status-title");
      var reqType = $("#req-type");
      var reqContent = $("#req-content");
      var reqTitle = $("#req-title");
      var reqCreated = $("#req-createdAt");
      var reqCreatedAt = $("#req-created");
      var reqStatus = $("#req-status");
      
      reqStatusTitle.html("Talep NO: " + data.data.uuid);
      reqType.html("Talep Tipi: " + "<span class='badge badge-warning'>" + requestTypeConverter(data.data.requestTypeId) + "</span>");
      reqCreated.html("Talep Tarihi: " + "<span class='badge badge-success'>" + new Date(data.data.createdAt).toLocaleDateString('tr-TR') + "</span>");
      reqCreatedAt.html("Son güncelleme: " + "<span class='badge badge-info'>" + prettyDate(data.data.updatedAt) + "</span>");
      reqStatus.html(requestStatusConverter(data.data.status));

      reqTitle.html(data.data.title);
      reqContent.html(data.data.content);

      if (data.data.responses.length > 0) {
        data.data.responses.forEach(element => {
          $("#admin-responses").append(`
            <img src="/images/favicon.ico" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;">
            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <div class="d-flex justify-content-between align-items-center w-100">
                <strong class="text-gray-dark">${element.authorName}</strong>
                <span>${prettyDate(element.createdAt)}</span>
              </div>
              <span class="d-block">${element.message}</span>
            </div>
          `);
        });
      } else {
        $("#admin-responses").html("Talebinize henüz bir cevap verilmedi.");
      }
      

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
});*/

function requestStatusConverter(status) {
    if (status) {
      return '<span class="badge badge-success">Cevaplandı</span>';
    } else {
      return '<span class="badge badge-warning">Beklemede</span>';
    }
}

function requestTypeConverter(type) {
    switch(type) {
        case 1:
            return "İSTEK";
        case 2:
            return "ŞİKAYET";
        case 3:
            return "ÖNERİ";
        default:
            return "Bilinmeyen";
    }
}

function prettyDate(time){
  var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
      diff = (((new Date()).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);
  if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
      return;
  return day_diff == 0 && (
          diff < 60 && '<span class="badge badge-info">biraz önce</span>' ||
          diff < 120 && '<span class="badge badge-info">1 dakika önce</span>' ||
          diff < 3600 && Math.floor( diff / 60 ) + ' dakika önce' ||
          diff < 7200 && '<span class="badge badge-info">1 saat önce</span>' ||
          diff < 86400 && Math.floor( diff / 3600 ) + ' saat önce') ||
      day_diff == 1 && '<span class="badge badge-info">Dün</span>' ||
      day_diff < 7 && day_diff + ' gün önce' ||
      day_diff < 31 && Math.ceil( day_diff / 7 ) + ' hafta önce';
}