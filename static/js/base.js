function initialfunction() {
    currenttime();
    currentdate();
    updatecounter();
}

var home1 = document.getElementById("home");
var projects1 = document.getElementById("projects");
// var projectoverlay = document.getElementById("projectoverlay");
window.addEventListener("scroll", function(){
    let offset= window.pageYOffset;
    home1.style.backgroundPositionY = offset*0.7+"px";
    projects1.style.backgroundPositionY = (offset*1.5)+500+"px";
    // projectoverlay.style.backgroundPositionY = (offset*0.5)+150+"px";
})

function settheam(para1, para2){
    var var11="HTML: HTML is the standard markup language for Web pages. With HTML you can create your own Website. ";
    var var12="CSS: CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.";
    var var13="JAVASCRIPT: JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.";
    var var14="PYTHON: Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.";
    var var15="JAVA: Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.";
    var var21="BOOTSTRAP: Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.";
    var var22="JQuery: jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation.";
    var var23="ReactJS: React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components.";
    var var24="OpenCV: OpenCV provides a real-time optimized Computer Vision library, tools, and hardware. It also supports model execution for Machine Learning (ML).";
    var var25="Django: Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. ";
    var var31="VSCode: Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.";
    var var32="PyCharm: PyCharm is an integrated development environment (IDE) used in computer programming, specifically for the Python language.";
    var var33="SublimeText: Sublime Text is a commercial source code editor. It natively supports many programming languages and markup languages.";
    var var34="PostgreSQL: PostgreSQL also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance.";
    var var41="MS Word: Basic knowledge of Microsoft Word, a word processing software developed by Microsoft.";
    var var42="MS Powerpoint: Basic knowledge of Microsoft PowerPoint for presentation of enginous ideas.";
    var var43="MS Excel: Basic knowledge of managing data using Microsoft Excel.";
    var var51="Photography: Special interest towards colour contrast and landscape capture";
    var var52="Drawing: Digital Art and potrait specailisation";

    switch(para1){
        case 1:
            var desc=document.getElementById("language-description");
            switch(para2){
                case 1:
                    desc.innerText=var11;
                    break;
                case 2:
                    desc.innerText=var12;
                    break;
                case 3:
                    desc.innerText=var13;
                    break;
                case 4:
                    desc.innerText=var14;
                    break;
                case 5:
                    desc.innerText=var15;
                    break;
            }
            desc.style.display="block";
            break;
    case 2:
            var desc=document.getElementById("framework-description");
            switch(para2){
                case 1:
                    desc.innerText=var21;
                    break;
                case 2:
                    desc.innerText=var22;
                    break;
                case 3:
                    desc.innerText=var23;
                    break;
                case 4:
                    desc.innerText=var24;
                    break;
                case 5:
                    desc.innerText=var25;
                    break;
            }
            desc.style.display="block";
            break;
    case 3:
            var desc=document.getElementById("tools-description");
            switch(para2){
                case 1:
                    desc.innerText=var31;
                    break;
                case 2:
                    desc.innerText=var32;
                    break;
                case 3:
                    desc.innerText=var33;
                    break;
                case 4:
                    desc.innerText=var34;
                    break;
            }
            desc.style.display="block";
            break;
    case 4:
            var desc=document.getElementById("softskills-description");
            switch(para2){
                case 1:
                    desc.innerText=var41;
                    break;
                case 2:
                    desc.innerText=var42;
                    break;
                case 3:
                    desc.innerText=var43;
                    break;
            }
            desc.style.display="block";
            break;
    case 5:
            var desc=document.getElementById("nontechskills-description");
            switch(para2){
                case 1:
                    desc.innerText=var51;
                    break;
                case 2:
                    desc.innerText=var52;
                    break;
            }
            desc.style.display="block";
            break;
    }
}


function currenttime(){
    let nowtime=new Date();
    // alert("nowtime.getHours()");
    let hh=nowtime.getHours();
    let mm=nowtime.getMinutes();
    let ss=nowtime.getSeconds();
    
    if (hh<10){
        hh="0"+hh;
    }
    if (mm<10){
        mm="0"+mm;
    }
    if (ss<10){
        ss="0"+ss;
    }
    document.getElementById("hours").innerText=hh;
    document.getElementById("minutes").innerText=mm;
    document.getElementById("seconds").innerText=ss;
    let t = setTimeout(function(){ currenttime() }, 1000);
}
function currentdate(){
    let nowtime=new Date();
    
    //display Age
    let bday=new Date("2/2/2000");
    let diff=Math.abs(nowtime-bday);
    let days=Math.ceil(diff/(1000*60*60*24));
    console.log(days);
    let yeard=Math.floor(days/365.25);
    let mond=Math.floor((days%365.25)/30.5);
    let dayd=Math.floor((days%365.25)%30.5);
    document.getElementById("year").innerText=yeard;
    document.getElementById("month").innerText=mond;
    document.getElementById("day").innerText=dayd;

    //display date
    let day=nowtime.getDay();
    let date=nowtime.getDate();
    let month=nowtime.getMonth();
    let year=nowtime.getFullYear();
    switch(day){
        case 0:
            day="SUN";
            break;
        case 1:
            day="MON";
            break;
        case 2:
            day="TUE";
            break;
        case 3:
            day="WED";
            break;
        case 4:
            day="THU";
            break;
        case 5:
            day="FRI";
            break;
        case 6:
            day="SAT";
            break;
        default:
            day="SUN"
    }
    switch(month){
        case 0:
            month="JAN";
            break;
        case 1:
            month="FEB";
            break;
        case 2:
            month="MAR";
            break;
        case 3:
            month="APR";
            break;
        case 4:
            month="MAY";
            break;
        case 5:
            month="JUN";
            break;
        case 6:
            month="JUL";
            break;
        case 7:
            month="AUG";
            break;
        case 8:
            month="SEP";
            break;
        case 9:
            month="OCT";
            break;
        case 10:
            month="NOV";
            break;
        case 11:
            month="DEC";
            break;
            
    }
    document.getElementById("date-day").innerText=day;
    document.getElementById("date-date").innerText=date;
    document.getElementById("date-month").innerText=month;
    document.getElementById("date-year").innerText=year;
}

function updatecounter(){
    console.log("api");
    fetch('https://api.countapi.xyz/update/profile/resume/?amount=1')
        .then(function(res) { 
            return res.json()
        })
        
        .then(function(data) {
            document.getElementById("visits").innerText=data.value;
        })
}
function openhirefloating(){
    document.getElementById("hiremefloating").style.display="block";
}

function closehirefloating(){
    document.getElementById("hiremefloating").style.display="none";
}

function submithireform(){
    var Name=document.getElementById("formname").value;
    var compname=document.getElementById("formcompname").value;
    var contact=document.getElementById("formcontact").value;
    var email=document.getElementById("formemail").value;
    var message=document.getElementById("formmessage").value;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "rizorock@gmail.com",
        Password : "upgnwnhqsjdzgoic",
        To : 'souvikbandyopadhyay2000@gmail.com',
        From : "rizorock@gmail.com",
        Subject : "JOB ALERT!!! from:- "+Name,
        Body : "-------Recruter Name__________:- "+Name+" \r\n------____________ Company Name:-___________ "+compname+" \r\n------___________ Contact:-____________ "+contact+" \n--------___________ Email:-____________ "+email+" \n----------___________ Message:-____________ "+message
    }).then(
      message => {
          alert(" Thanks! Successfully Nofitied.");
          closehirefloating();
        }
    );

    
}
