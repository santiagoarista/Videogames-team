const soundMap = {
    jump: "../assets/sounds/jump.mp3",
    shoot: " ../../game/assets/soundeffects/laserShot/107613__robinhood76__02156-laser-shot.wav",
    hurt: " ../../game/assets/soundeffects/protagonist/hurt.mp3",
    hurt2: " ../../game/assets/soundeffects/protagonist/hurt2.wav",
    hit: "../assets/sounds/hit.mp3",
    explosion: "../assets/sounds/explosion.mp3"
};

function playSound(action) {
    const soundFile = soundMap[action];
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    } else {
        console.warn(`No hay sonido asociado a: ${action}`);
    }
}

