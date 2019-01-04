


$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
        daysOfWeekDisabled: [0],
        startDate: "today",
    };
    date_input.datepicker(options);
})






// Initialize Firebase
var config = {
    apiKey: "AIzaSyB1ot-812RoR14KmbBsCanEc_ubgFzvYXs",
    authDomain: "cheatday-a9f72.firebaseapp.com",
    databaseURL: "https://cheatday-a9f72.firebaseio.com",
    projectId: "cheatday-a9f72",
    storageBucket: "cheatday-a9f72.appspot.com",
    messagingSenderId: "436313165419"
};
firebase.initializeApp(config);

var database = firebase.database();
$(document).ready(function () {
    $("#cake-order").on("click", function (event) {
        event.preventDefault();

        var ordName = $("#name").val().trim();
        var ordEmail = $("#email").val().trim();
        var ordPhone = $("#phone-number").val().trim();
        var ordCakeType = $("#cake-type").val().trim();
        var ordCakeFlavors = $("#cake-flavors").val().trim();
        var ordFrostingFlavors = $("#frosting-flavors").val().trim();
        var ordAdditionalOptions = $("#additional-options").val().trim();
        var ordAdditionalOptions2 = $("#additional-options2").val().trim();
        var ordAdditionalOptions3 = $("#additional-options3").val().trim();
        var ordAdditionalOptions4 = $("#additional-options4").val().trim();
        var ordOther = $("#other").val().trim();
        var ordNotes = $("#additional-notes").val().trim();
        var ordDate = $("#date").val().trim();
        var ordPickup=$("#pickup-time").val().trim();


        var newOrder = {
            name: ordName,
            email: ordEmail,
            phone: ordPhone,
            cake: ordCakeType,
            flavor: ordCakeFlavors,
            frosting: ordFrostingFlavors,
            options: ordAdditionalOptions,
            options2: ordAdditionalOptions2,
            options3: ordAdditionalOptions3,
            options4: ordAdditionalOptions4,
            other: ordOther,
            notes: ordNotes,
            date: ordDate,
            pickup: ordPickup,
        };

        database.ref().push(newOrder);




        console.log(newOrder.name);
        console.log(newOrder.email);
        console.log(newOrder.phone);
        console.log(newOrder.cake);
        console.log(newOrder.flavor)
        console.log(newOrder.frosting);
        console.log(newOrder.options);
        console.log(newOrder.options2);
        console.log(newOrder.options3);
        console.log(newOrder.options4);
        console.log(newOrder.other);
        console.log(newOrder.notes);
        console.log(newOrder.date);
        console.log(newOrder.pickup);


        alert("Order has been submitted");
        $("#name").val("")
        $("#email").val("");
        $("#phone-number").val("");
        $("#cake-type").val("(none)");
        $("#cake-flavors").val("(none)");
        $("#frosting-flavors").val("(none)");
        $("#additional-options").val("(none)");
        $("#additional-options2").val("(none)");
        $("#additional-options3").val("(none)");
        $("#additional-options4").val("(none)");
        $("#other").val("(none)");
        $("#additional-notes").val("");
        $("#pickup-time").val("11:00 A.M.");
        $("#date").val("MM/DD/YYYY");
    });
});