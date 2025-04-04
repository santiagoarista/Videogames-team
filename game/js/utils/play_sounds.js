const soundMap = {
    jump: "../assets/sounds/jump.mp3",
    shoot: " ../../game/assets/soundeffects/laserShot/107613__robinhood76__02156-laser-shot.wav",
    hurt: " ../../game/assets/soundeffects/protagonist/hurt.mp3",
    hurt2: " ../../game/assets/soundeffects/protagonist/hurt2.wav",
    enemyhurt1: " ../../game/assets/soundeffects/protagonist/hurt2.wav",
    hit: "../assets/sounds/hit.mp3",
    walk: "../assets/soundeffects/protagonist/run.mp3",
    regularLevelsMusic: "../assets/music/musical_cuartos_regulares.mp3",
    
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



// Controlador de sonidos individuales// Controlador de sonidos individuales
class SoundController {
    constructor(action, loop = false, volume = 1.0) {
        this.action = action;
        this.audio = new Audio(soundMap[action]);
        this.audio.loop = loop;
        this.audio.volume = volume;
        this.fadeInterval = null; // Para poder detener un fade anterior si es necesario
    }

    play() {
        this.audio.play();
        console.log("Sonido: " + soundMap[this.action] + " se está reproduciendo.");
    }

    pause() {
        this.audio.pause();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    setVolume(volume) {
        this.audio.volume = volume;
    }

    setLoop(loop) {
        this.audio.loop = loop;
    }

    setSound(action) {
        const soundFile = soundMap[action];
        if (soundFile) {
            const isPlaying = !this.audio.paused;
            this.audio.pause();
            this.audio = new Audio(soundFile);
            this.audio.loop = true;
            this.audio.volume = 1.0;
            if (isPlaying) this.audio.play();
        } else {
            console.warn(`No hay sonido asociado a: ${action}`);
        }
    }

    // 🎧 Fade In
    fadeIn(targetVolume = 1.0, duration = 500) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);

        const steps = 20;
        const interval = duration / steps;
        let currentStep = 0;

        this.audio.volume = 0;
        this.audio.play();

        this.fadeInterval = setInterval(() => {
            currentStep++;
            const newVolume = targetVolume * (currentStep / steps);
            this.audio.volume = Math.min(targetVolume, newVolume);

            if (currentStep >= steps) {
                clearInterval(this.fadeInterval);
                this.fadeInterval = null;
            }
        }, interval);
    }

    // 🎧 Fade Out
    fadeOut(duration = 500) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);

        const steps = 20;
        const interval = duration / steps;
        let currentStep = 0;

        const initialVolume = this.audio.volume;

        this.fadeInterval = setInterval(() => {
            currentStep++;
            const newVolume = initialVolume * (1 - currentStep / steps);
            this.audio.volume = Math.max(0, newVolume);

            if (currentStep >= steps) {
                clearInterval(this.fadeInterval);
                this.fadeInterval = null;
                this.stop(); // Detiene completamente después del fade
            }
        }, interval);
    }
}