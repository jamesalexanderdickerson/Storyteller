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
audio.currentTime = 1;
};

var startHere0_3 = function () {
audio.currentTime = 1;
};

var startHere1_2 = function () {
audio.currentTime = 3;
};

var startHere1_3 = function () {
audio.currentTime = 3.7;
};

var startHere1_4 = function () {
audio.currentTime = 4;
};

var startHere1_5 = function () {
audio.currentTime = 4.3;
};

var startHere1_6 = function () {
audio.currentTime = 5;
};

var startHere1_7 = function () {
audio.currentTime = 5.1;
};

var startHere1_8 = function () {
audio.currentTime = 5.3;
};

var startHere1_9 = function () {
audio.currentTime = 5.8;
};

var startHere1_10 = function () {
audio.currentTime = 6.5;
};

var startHere1_11 = function () {
audio.currentTime = 7;
};

var startHere1_12 = function () {
audio.currentTime = 7.4;
};

var startHere1_13 = function () {
audio.currentTime = 7.6;
};

var startHere1_14 = function () {
audio.currentTime = 7.8;
};

var startHere1_15 = function () {
audio.currentTime = 8.5;
};

var startHere1_16 = function () {
audio.currentTime = 8.9;
};

var startHere1_17 = function () {
audio.currentTime = 9.1;
};

var startHere1_18 = function () {
audio.currentTime = 9.4;
};

var startHere1_19 = function () {
audio.currentTime = 9.6;
};

var startHere1_20 = function () {
audio.currentTime = 10.1;
};

var startHere1_21 = function () {
audio.currentTime = 10.2;
};

var startHere1_22 = function () {
audio.currentTime = 10.5;
};

var startHere1_23 = function () {
audio.currentTime = 12;
};

var startHere1_24 = function () {
audio.currentTime = 12.2;
};

var startHere1_25 = function () {
audio.currentTime = 12.6;
};

var startHere1_26 = function () {
audio.currentTime = 12.7;
};

var startHere1_27 = function () {
audio.currentTime = 12.8;
};

var startHere1_28 = function () {
audio.currentTime = 14;
};

var startHere1_29 = function () {
audio.currentTime = 14.3;
};

var startHere1_30 = function () {
audio.currentTime = 14.4;
};

var startHere1_31 = function () {
audio.currentTime = 14.6;
};

var startHere1_32 = function () {
audio.currentTime = 15.2;
};

var startHere1_33 = function () {
audio.currentTime = 15.4;
};

var startHere1_34 = function () {
audio.currentTime = 16.1;
};

var startHere1_35 = function () {
audio.currentTime = 16.72;
};

var startHere1_36 = function () {
audio.currentTime = 16.9;
};

var startHere1_37 = function () {
audio.currentTime = 17.4;
};

var startHere1_38 = function () {
audio.currentTime = 17.5;
};

var startHere1_39 = function () {
audio.currentTime = 17.7;
};

var startHere1_40 = function () {
audio.currentTime = 20;
};

var startHere1_41 = function () {
audio.currentTime = 20.4;
};

var startHere1_42 = function () {
audio.currentTime = 20.7;
};

var startHere1_43 = function () {
audio.currentTime = 21.1;
};

var startHere1_44 = function () {
audio.currentTime = 21.4;
};

var startHere1_45 = function () {
audio.currentTime = 21.9;
};

var startHere1_46 = function () {
audio.currentTime = 22.4;
};

var startHere1_47 = function () {
audio.currentTime = 22.7;
};

var startHere1_48 = function () {
audio.currentTime = 22.8;
};

var startHere1_49 = function () {
audio.currentTime = 23.1;
};

var startHere1_50 = function () {
audio.currentTime = 23.2;
};

var startHere1_51 = function () {
audio.currentTime = 23.4;
};

var startHere1_52 = function () {
audio.currentTime = 24.45;
};
