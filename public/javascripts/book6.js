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

var startHere0_2 = function () {
  audio.currentTime = 0;
};

var startHere0_3 = function () {
  audio.currentTime = 0;
};

var startHere1_2 = function () {
  audio.currentTime = 2.5;
};

var startHere1_3 = function () {
  audio.currentTime = 3.3;
};

var startHere1_4 = function () {
  audio.currentTime = 3.6;
};

var startHere2_2 = function () {
  audio.currentTime = 4.5;
};

var startHere2_3 = function () {
  audio.currentTime = 5;
};

var startHere2_4 = function () {
  audio.currentTime = 5.4;
};

var startHere2_5 = function () {
  audio.currentTime = 6;
};

var startHere2_6 = function () {
  audio.currentTime = 6.9;
};

var startHere2_7 = function () {
  audio.currentTime = 7.15;
};

var startHere2_8 = function () {
  audio.currentTime = 7.2;
};

var startHere2_9 = function () {
  audio.currentTime = 7.8;
};

var startHere2_10 = function () {
  audio.currentTime = 8;
};

var startHere2_11 = function () {
  audio.currentTime = 8.3;
};

var startHere2_12 = function () {
  audio.currentTime = 8.5;
};

var startHere2_13 = function () {
  audio.currentTime = 8.8;
};

var startHere2_14 = function () {
  audio.currentTime = 9.5;
};

var startHere2_15 = function () {
  audio.currentTime = 9.88;
};

var startHere2_16 = function () {
  audio.currentTime = 10.5;
};

var startHere2_17 = function () {
  audio.currentTime = 10.9;
};

var startHere2_18 = function () {
  audio.currentTime = 11.05;
};

var startHere2_19 = function () {
  audio.currentTime = 11.7;
};

var startHere2_20 = function () {
  audio.currentTime = 12.5;
};

var startHere2_21 = function () {
  audio.currentTime = 12.6;
};

var startHere2_22 = function () {
  audio.currentTime = 12.8;
};

var startHere2_23 = function () {
  audio.currentTime = 12.9;
};

var startHere2_24 = function () {
  audio.currentTime = 13.8;
};

var startHere2_25 = function () {
  audio.currentTime = 14.5;
};

var startHere2_26 = function () {
  audio.currentTime = 14.75;
};

var startHere2_27 = function () {
  audio.currentTime = 14.9;
};

var startHere2_28 = function () {
  audio.currentTime = 15.1;
};

var startHere2_29 = function () {
  audio.currentTime = 16;
};

var startHere2_30 = function () {
  audio.currentTime = 16.5;
};
