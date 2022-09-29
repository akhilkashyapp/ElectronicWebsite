
var data_no = 1;
let questions = [
    {
        data: "Vijay Pratap Singh was born in multan(now in Pakistan) and made the harsh journey to India after the Partition, he joined the Indian Army as a chef for half a decade. When he was young he found the passion for cooking from watching his grandmother putting her soul into the smokey kitchen. Watching her smile with her heart after the serving the food and looking at people smile and enjoy her food made Vijay very interested in cooking. He left the army to open a restaurant of his own. He wanted to see people smile after they'd eaten his food. That's when the idea of TAJ KITCEHNS came into being. He started this to spread warmth, love and joy through his food.",

        about: "About the Founder",
        name: "Vijay Pratap Singh",
        pic: "btspeaker.jfif",

        
    },
    {
        data: "TAJ KITCHEN was founded by Shri Ram Kumar Sharma back in 1955 after the sharma family migrated from  Pakistan.Ram Kumar, as we all know was an excellent chef.it started off slow but as people started to know about the Ram Kumar's delicious food  and the variety of food items offered by the restaurant it was a big hit. A middle ground of Mughal and Indian cuisine made the TAJ KITCHEN a fusion of food which no restaurant could offer.",


        about: "about the hotel..",
        name: "TAJ KITCHENS",
        pic: "fold3.png",

        
    },
    {
        data: "From starting from a small market place in chandigarh <b><i>Taj Kitchens</i></b> has expanded tremendously over the decades and it wouldn't just stop till there so the plans to expand to different contries and dream of having a branch in every continent. Being able to get this amazing cuisine on the tongues of people of different culture and make the Indian food more famous is what <b><i>Taj Kitchens</i></b> stands for.",


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


