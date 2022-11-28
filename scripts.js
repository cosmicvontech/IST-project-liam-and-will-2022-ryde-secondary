var shit = document.getElementById('shit')

function setshit(src) {
    shit.innerHTML = '<iframe width="450px" height="600px" id="shit" class="pageitemsandshit" src="' + src + '"></iframe>';
};

let videodiv = document.getElementById('videor');
let videoref;
let sub = 'vtt/beemovie.vtt'

function setvideo(src) {
    videodiv.innerHTML = '<video width="1000px" height="800px" id="videort" class="videocrete" controls allow="autoplay" autoplay> <source src="' + src + '" /> <track id="subs" srclang="eng" kind="subtitles" label="English" src="' + sub + '" default /></video>';
    videoref = document.getElementById('videort');
    videoref.play();
    console.log(src);
};

function openpage(href) {
    window.location.href = href;
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

let skipvid = videoref;
let currentime = document.getElementById(videort).currentTime;

function skip(int) {
    currentime = skipvid.currentTime;
    currentime =+ 10;
    skipvid.currentTime = currentime;
    console.log(currentime)
};