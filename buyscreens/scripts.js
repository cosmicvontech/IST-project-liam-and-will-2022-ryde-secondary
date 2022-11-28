var shit = document.getElementById('shit')

function setshit(href) {
    shit.innerHTML = '<iframe width="450px" height="600px" id="shit" class="pageitemsandshit" href="' + href + '"></iframe>';
};

let videodiv = document.getElementById('videor');
let videoref;


function setvideo(src) {
    videodiv.innerHTML = '<video width="1000px" height="800px" id="videort" controls autoplay> <source src="' + src + '" /> </video>';
    videoref = document.getElementById('videort');
    videoref.play();
    console.log(src);
};

function openpage(href) {
    window.location.href = '../' + href;
};

function searchstuff() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h1")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}