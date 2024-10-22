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
    {key: "g", button: to , audio: tomAudio}
];

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
};

function playAudio(drumKit) {
    document.addEventListener("keydown", function(event) {
        if (event.key === "F" || event.key === "f") {
            kickAudio.play();
        };
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "K" || event.key === "k") {
            snareAudio.play();
        };
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "V" || event.key === "v") {
            crashAudio.play();
        };
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "T" || event.key === "t") {
            rideAudio.play();
        };
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "G" || event.key === "g") {
            tomAudio.play();
        };
    });
};


