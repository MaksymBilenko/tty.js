function createButtons() {
  $(function () {
    $.ajax({
      url: '/api/containers',
      dataType: "json",
      success: function (containers) {
        $.each(containers, function () {
          if (this != '') {
            var button = '<button class="container" onclick="new tty.Window(false, {title:\''+this+'\', protocol:\'docker\', container:\''+this+'\'})"></button>' +
                '<button class="logs" onclick="new tty.Window(false, {title:\''+this+' logs\', protocol:\'dockerLogs\', container:\''+this+'\'})"></button>'+this+'<br/>';
            console.log(button);
            $(".dockerContainers").append(button);
          }
        });
      }
    });
  });
}
window.onload = createButtons;