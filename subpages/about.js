
var data_no = 1;
let questions = [
    {
        data: "Started from the bottom arvind started to work in small startups to gain experience and used it all together to make ChitkaraKart.",

        about: "About the Founder",
        name: "Arvind Kaushal",
        pic: "img\founder.jpg",

        
    },
    {
        data: "Arvind completed his B-tech from Chitkara University hence named his startup ChitkaraKart.",


        about: "about the ChitkaraKart..",
        name: "ChitkaraKart",
        pic: "fold3.png",

        
    },
    {
        data: "From starting from a small market place in chandigarh <b><i>ChitkaraKart</i></b> has expanded tremendously over the decades and it wouldn't just stop till there so the plans to expand to different contries and dream of having a branch in every continent.",


        about: "What future holds for us??",
        name: "Dream to touch every continent",
        pic: "iphone13.jfif",

    }
    ,
];
/*feching data
*/
function myFunction(no) {
    document.getElementById("data").innerHTML = questions[no - 1].data;
    document.getElementById("about").innerHTML = questions[no - 1].about;
    document.getElementById("name").innerHTML = questions[no - 1].name;
    document.getElementById("pic").src = questions[no - 1].pic;
}

/*responding to mouse click*/
$('html').mousedown(function (event) {
    switch (event.which) {
        case 1:
            if (data_no < 3) {
                data_no = data_no + 1;
                myFunction(data_no);
            }
            
            break;
        case 2:
            
            break;
        case 3:
            if (data_no > 1) {
                data_no = data_no - 1;
                myFunction(data_no);
            }
            
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
/*disabling right click*/
$(document).bind("contextmenu", function (e) {
    return false;
});


/*disabling selecting text*/
if (typeof document.onselectstart != "undefined") {
    document.onselectstart = new Function("return false");
}

/*document.getElementById("myImg").src = "hackanm.gif";
*/
myFunction(1);

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal(`#data, #pic`, {
    interval: 100
});

/*night mode*/
$(document).ready(function () {
    $("#nightmode").click(function () {
        if ($("body").css('color') == 'rgb(0, 0, 0)') {

            $("body").css("background-color", "#050505");
            $(".footer").css("background-color", "#050505");
            $("body").css("color", "#fafafa");
            $(".footer").css("color", "#fafafa");
            $(".link").css("color", "#fafafa");
        }
        else {
            $("body").css("background-color", "white");
            $(".footer").css("background-color", "#0f0f0f");
            $("body").css("color", "#000000");
            $(".footer").css("color", "#000000");
            $(".link").css("color", "#000000");
        }


    });
});


