const kick = document.getElementById("kick"); // F key
const snare = document.getElementById("snare"); // K key
const crash = document.getElementById("crash"); // V key
const ride = document.getElementById("ride"); // T key
const tom = document.getElementById("tom"); // G key

const kickAudio = document.getElementById("kickAudio");
const snareAudio = document.getElementById("snareAudio");
const crashAudio = document.getElementById("crashAudio");
const rideAudio = document.getElementById("rideAudio");
const tomAudio = document.getElementById("tomAudio");

const drumKit = [
    {key:"f", button: kick, audio: kickAudio},
    {key: "k", button: snare, audio: snareAudio},
    {key: "v", button: crash, audio: crashAudio},
    {key: "t", button: ride, audio: rideAudio},
    {key: "g", button: tom, audio: tomAudio}
];

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
};

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    const drum = drumKit.find(drum => drum.key === key);

    if (drum) {
        playSound(drum.audio); 
    }
});