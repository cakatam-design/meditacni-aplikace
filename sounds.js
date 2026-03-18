/* ============================================
   SOUND ENGINE - Web Audio API Bell Synthesis
   Zenová škola Kwan Um
   ============================================ */

const SoundEngine = (() => {
    let audioCtx = null;
    let masterGain = null;
    let volume = 0.7;

    function getContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            masterGain = audioCtx.createGain();
            masterGain.gain.value = volume;
            masterGain.connect(audioCtx.destination);
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function setVolume(v) {
        volume = Math.max(0, Math.min(1, v));
        if (masterGain) {
            masterGain.gain.value = volume;
        }
    }

    // --- SINGING BOWL (Tibetská mísa) ---
    function playSingingBowl(startTime) {
        const ctx = getContext();
        const t = startTime || ctx.currentTime;
        const fundamental = 220;
        // Singing bowl partial ratios (characteristic of Tibetan bowls)
        const partials = [
            { ratio: 1,    amp: 0.5,  decay: 5.0 },
            { ratio: 2.71, amp: 0.3,  decay: 3.5 },
            { ratio: 4.77, amp: 0.15, decay: 2.5 },
            { ratio: 7.71, amp: 0.08, decay: 1.8 },
        ];

        const output = ctx.createGain();
        output.gain.value = 1.0;
        output.connect(masterGain);

        partials.forEach(p => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.value = fundamental * p.ratio;
            // Slight detune for warmth
            osc.detune.value = (Math.random() - 0.5) * 6;

            gain.gain.setValueAtTime(p.amp, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + p.decay);

            // Subtle vibrato
            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();
            lfo.type = 'sine';
            lfo.frequency.value = 3 + Math.random() * 2;
            lfoGain.gain.value = 1.5;
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            lfo.start(t);
            lfo.stop(t + p.decay + 0.1);

            osc.connect(gain);
            gain.connect(output);
            osc.start(t);
            osc.stop(t + p.decay + 0.1);
        });

        // Attack transient (strike)
        const noise = ctx.createBufferSource();
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseData.length; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * 0.3;
        }
        noise.buffer = noiseBuffer;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = 3000;
        noiseFilter.Q.value = 2;

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.4, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(output);
        noise.start(t);
    }

    // --- TEMPLE BELL (Chrámový zvon / Keisu) ---
    function playTempleBell(startTime) {
        const ctx = getContext();
        const t = startTime || ctx.currentTime;
        const fundamental = 165;
        const partials = [
            { ratio: 1,    amp: 0.45, decay: 6.0 },
            { ratio: 2.0,  amp: 0.35, decay: 4.0 },
            { ratio: 3.0,  amp: 0.2,  decay: 3.0 },
            { ratio: 4.2,  amp: 0.12, decay: 2.0 },
            { ratio: 5.4,  amp: 0.06, decay: 1.5 },
        ];

        const output = ctx.createGain();
        output.gain.value = 1.0;
        output.connect(masterGain);

        partials.forEach(p => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = fundamental * p.ratio;
            osc.detune.value = (Math.random() - 0.5) * 4;

            gain.gain.setValueAtTime(p.amp, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + p.decay);

            osc.connect(gain);
            gain.connect(output);
            osc.start(t);
            osc.stop(t + p.decay + 0.1);
        });

        // Strike transient
        const noise = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, ctx.sampleRate * 0.03, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.5;
        }
        noise.buffer = buf;

        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 2000;

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.5, t);
        nGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

        noise.connect(filter);
        filter.connect(nGain);
        nGain.connect(output);
        noise.start(t);
    }

    // --- DEEP BELL (Hluboký zvon / Bonshō) ---
    function playDeepBell(startTime) {
        const ctx = getContext();
        const t = startTime || ctx.currentTime;
        const fundamental = 82;
        const partials = [
            { ratio: 1,    amp: 0.5,  decay: 8.0 },
            { ratio: 2.0,  amp: 0.3,  decay: 6.0 },
            { ratio: 3.01, amp: 0.18, decay: 4.5 },
            { ratio: 4.0,  amp: 0.1,  decay: 3.5 },
            { ratio: 5.5,  amp: 0.05, decay: 2.5 },
        ];

        const output = ctx.createGain();
        output.gain.value = 1.0;
        output.connect(masterGain);

        partials.forEach(p => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = fundamental * p.ratio;
            osc.detune.value = (Math.random() - 0.5) * 3;

            // Slow attack for deep bell
            gain.gain.setValueAtTime(0.001, t);
            gain.gain.linearRampToValueAtTime(p.amp, t + 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, t + p.decay);

            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();
            lfo.type = 'sine';
            lfo.frequency.value = 1.5 + Math.random();
            lfoGain.gain.value = 0.8;
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            lfo.start(t);
            lfo.stop(t + p.decay + 0.2);

            osc.connect(gain);
            gain.connect(output);
            osc.start(t);
            osc.stop(t + p.decay + 0.2);
        });
    }

    // --- MOKTAK (Wood Block) ---
    function playMoktak(startTime) {
        const ctx = getContext();
        const t = startTime || ctx.currentTime;

        const output = ctx.createGain();
        output.gain.value = 1.0;
        output.connect(masterGain);

        // Resonant tone
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 800;
        oscGain.gain.setValueAtTime(0.4, t);
        oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        osc.connect(oscGain);
        oscGain.connect(output);
        osc.start(t);
        osc.stop(t + 0.2);

        // Second harmonic
        const osc2 = ctx.createOscillator();
        const osc2Gain = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.value = 1200;
        osc2Gain.gain.setValueAtTime(0.25, t);
        osc2Gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        osc2.connect(osc2Gain);
        osc2Gain.connect(output);
        osc2.start(t);
        osc2.stop(t + 0.15);

        // Noise click
        const noise = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.6;
        }
        noise.buffer = buf;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1000;
        filter.Q.value = 5;

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.5, t);
        nGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

        noise.connect(filter);
        filter.connect(nGain);
        nGain.connect(output);
        noise.start(t);
    }

    // --- PUBLIC: Play bell by type ---
    const bellFunctions = {
        'singing-bowl': playSingingBowl,
        'temple-bell': playTempleBell,
        'deep-bell': playDeepBell,
    };

    function playBell(type, count, delayBetween) {
        type = type || 'singing-bowl';
        count = count || 1;
        delayBetween = delayBetween || 2.5;

        const ctx = getContext();
        const fn = bellFunctions[type] || playSingingBowl;

        for (let i = 0; i < count; i++) {
            fn(ctx.currentTime + i * delayBetween);
        }

        return count * delayBetween;
    }

    function playWoodBlock() {
        playMoktak();
    }

    // Ensure AudioContext is unlocked on user interaction
    function unlock() {
        getContext();
    }

    return {
        setVolume,
        playBell,
        playWoodBlock,
        unlock,
    };
})();
