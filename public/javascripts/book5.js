var audio = document.getElementById('reading');
var page = document.getElementsByClassName('section');
var data = '';
var count = 0;
[].forEach.call(page, function(i) {
data = i.innerHTML;
i.innerHTML = spanText(data);
count++
});

function spanText (paragraph) {
var newparagraph = '';
var spannedText = "";
var temparray = paragraph.split(" ");

for (i = 0; i < temparray.length; i++){
  spannedText += "<span class='"+count+"_"+i+"' onclick='startHere"+count+"_"+i+"();'>"+temparray[i]+"</span> ";
}

 for (i = 0; i < spannedText.length; i++) {
   newparagraph += spannedText[i];
 }
return newparagraph;
};

var playAudio = function () {
  audio.play();
};

var pauseAudio = function () {
  audio.pause();
};
