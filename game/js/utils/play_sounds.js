const soundMap = {
    jump: "../assets/sounds/jump.mp3",
    shoot: " ../../assets/soundeffects/laserShot/107613__robinhood76__02156-laser-shot.wav",
    hurt: " ../../assets/soundeffects/protagonist/hurt.mp3",
    hurt2: " ../../assets/soundeffects/protagonist/hurt2.wav",
    enemyhurt1: " ../../assets/soundeffects/protagonist/hurt2.wav",
    hit: "../assets/sounds/hit.mp3",
    walk: "../assets/soundeffects/protagonist/run.mp3",
    regularLevelsMusic: "../assets/music/musica_menu_principal.mp3",
    menuPrincipalMusic: "../assets/music/musical_cuartos_regulares.mp3",
    musica_jefe: "../assets/music/cuerto_jefe_final_musica.mp3",

    no_weapon: "../assets/soundeffects/weapon_box/no_weapon.mp3",
    take_weapon: "../assets/soundeffects/weapon_box/take_weapon.wav",    
    lock: "../assets/soundeffects/doors/lock.mp3",    
    hurt3: "../assets/soundeffects/enemies/hurt1.mp3",   
    laughenemy: "../assets/soundeffects/enemies/monster-laugh.mp3",
    laugh2: "../assets/soundeffects/enemies/laugh2.wav",
    roarenemy: "../assets/soundeffects/enemies/monster-roar.mp3",  
    roar2enemy: "../assets/soundeffects/enemies/roar2.mp3",
    explosion: "../assets/soundeffects/enemies/explosion.wav",
    roars: "../assets/soundeffects/enemies/monster-roars.mp3",  
    bonus: "../assets/soundeffects/effects/bonus-points.mp3",  
    hurt4: "../assets/soundeffects/effects/hurt1.wav",  
    jump: "../assets/soundeffects/effects/jump.mp3",  
};

function playSound(action, volume= 1.0) {
    const soundFile = soundMap[action];
    if (soundFile) {
        
        const audio = new Audio(soundFile);
        audio.volume= volume;
        audio.play();
    } else {
        console.warn(`No hay sonido asociado a: ${action}`);
    }
}



// Controlador de sonidos individuales// Controlador de sonidos individuales
class SoundController {
    constructor(action, loop = false, volume = 1.0, ) {

        this.action = action;
        this.audio = new Audio(soundMap[action]);
        this.audio.loop = loop;
        this.audio.volume = volume;
        this.fadeInterval = null; // Para poder detener un fade anterior si es necesario
    }

    play() {
        console.log("sonido", this.audio.src)
        this.audio.play();
 
    }
    muted(){
        this.audio.muted = !this.audio.muted;
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
            this.audio.volume =0.5;
            if (isPlaying) this.audio.play();
        } else {
            console.warn(`No hay sonido asociado a: ${action}`);
        }
    }

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