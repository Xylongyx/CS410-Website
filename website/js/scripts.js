
/* Email Form to me */
$(document).ready(function() {
    $("#contact-send").on("click", function (e) {
        console.log($("Name"));
        e.preventDefault();
        Name = $("#Name").val();
        body = $("#Message Here").val();
        window.location = 
        "mailto:lonhuynh@pdx.edu?Name=" + Name + "&Body=" + body
    })
})