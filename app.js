/* ============================================
   MAIN APPLICATION
   Meditační aplikace - Zenová škola Kwan Um
   ============================================ */

(() => {
    'use strict';

    // ========== TEXTS ==========

    const TEXTS = {
        vows: `<p><strong>— Cítících bytostí je bezpočet,</strong><br>slibujeme všechny zachránit.</p>
<p><strong>— Sebeklamy jsou ustavičné,</strong><br>slibujeme všechny prohlédnout.</p>
<p><strong>— Učení jsou nekonečná,</strong><br>slibujeme všechna poznat.</p>
<p><strong>— Buddhova cesta je nepochopitelná,</strong><br>slibujeme ji dosáhnout.</p>`,

        sutra: `<p><strong>Sútra srdce</strong><br><em>(česky)</em></p>

<p><strong><em>Mahá</em> pradžňá páramitá hridaja sútra</strong></p>

<p class="verse">Bódhisattva Avalókitéšvara,<br>
hluboce praktikující pradžňá páramitu,<br>
vnímá prázdnotu všech pěti skandh<br>
a je zachráněn od všeho utrpení.</p>

<p class="verse">Šáripútro,<br>
forma se neliší od prázdnoty<br>
a prázdnota od formy.<br>
Forma je prázdnotou<br>
a prázdnota je formou.</p>

<p class="verse">Pocity, vjemy, podněty i vědomí<br>
jsou také takové.</p>

<p class="verse">Šáripútro,<br>
všechny dharmy jsou prázdné,<br>
neobjevují se ani nemizí,<br>
nejsou nečisté ani čisté,<br>
nerostou ani neubývají.</p>

<p class="verse">A tak v prázdnotě není žádná forma,<br>
pocity, vjemy, podněty ani vědomí.</p>

<p class="verse">Žádné oči, uši, nos,<br>
jazyk, tělo ani mysl,<br>
žádná barva, zvuk, vůně,</p>

<p class="verse">chuť, dotek ani představa,<br>
žádná říše očí<br>
ani žádná z dalších říší.</p>

<p class="verse">Žádná nevědomost ani konec nevědomosti<br>
a tak je to až po stáří a smrt.<br>
Žádné utrpení, žádné vznikání,<br>
žádné zastavení, cesta ani poznání.<br>
Žádné dosažení ani nic k dosahování.</p>

<p class="verse">Bódhisattva závisí na pradžňá páramitě,<br>
mysl není překážkou,<br>
bez překážek není strachu.<br>
Daleko od mylných názorů<br>
přebývá v nirváně.</p>

<p class="verse">Všichni buddhové tří světů<br>
závisí na pradžňá páramitě<br>
a dosahují anuttara samjak sambódhi.</p>

<p class="verse">Věz tedy, že pradžňá páramitá<br>
je vše přesahující mantra,<br>
velká jasná mantra,<br>
nejdokonalejší mantra,<br>
nejvyšší mantra,<br>
která tíší všechno utrpení,<br>
opravdová, žádné zdání.</p>

<p class="verse">Hlásej tedy mantru pradžňá páramity,<br>
hlásej mantru, která zní:</p>

<p class="mantra">gaté, gaté, paragaté, parasamgaté, bódhi sváhá<br>
gaté, gaté, paragaté, parasamgaté, bódhi sváhá<br>
gaté, gaté, paragaté, parasamgaté, bódhi sváhá</p>`,

        readings: [
            {
                title: 'Dharmová povinnost',
                text: 'Vyučuji zenové studenty na této hoře již téměř čtyřicet let. Mnoho lidí mě přichází navštívit. Myslí si, že jdou za zenovým mistrem, přitom však vidí jen moji tělesnou formu, dům, ve kterém přebývá má pravá přirozenost. Mou pravou přirozenost nevidí. To není problém, jen to znamená, že nevidí ani svou vlastní pravou přirozenost.\n\nProtože nevidí svou pravou přirozenost, nemohou vidět ani své rodiče, sourozence, ženu ani děti, nikoho. Potulují se životem nadarmo, jako blázni. Musíme říct, že toto je vskutku svět temna.\n\nKdyž studenti dostanou mé učení, musejí ho převést do praxe s nejvyšší upřímností a odhodláním a nezapomínat při tom na metody, které jsem použil. Když jste upřímní a odhodlaní, splácíte tím svoji dharmovou povinnost, takže nemarníte svou praxi a nezažijete duševní ztrátu.',
                author: 'Zenový mistr Man Gong'
            },
            {
                title: 'Z ateliéru do suterénu',
                text: 'Naše praxe je praxí neustálého se vracení do tohoto okamžiku, do skutečnosti přímo před námi. Stěhujeme se z ateliérového bytu myšlení, vytváření, posuzování, držení – aniž bychom reagovali nebo se poutali k jakýmkoli emočním podnětům, jež mohou při tom vyvstat – úplně dolů do suterénu, našeho těžiště, energetické zahrady „jen to dělej“, místa, z něhož vychází aktivita se záměrem, kde je názor v souladu s činy.',
                author: 'Zenový mistr Tan Gong'
            }
        ],

        quotes: [
            { text: 'Jen nevím — to je nejdůležitější věc.', author: 'Zenový mistr Seung Sahn' },
            { text: 'Když jíš, jen jez. Když sedíš, jen seď. Především se nepokoušej o nic!', author: 'Zenový mistr Seung Sahn' },
            { text: 'Jasná mysl znamená, že od okamžiku k okamžiku, co dělám právě teď?', author: 'Zenový mistr Seung Sahn' },
            { text: 'Putuj, jako by ses právě probudil do tohoto světa.', author: 'Zenová tradice' },
            { text: 'Forma je prázdnota, prázdnota je forma.', author: 'Sútra srdce' },
            { text: 'Celý svět je jedna květina.', author: 'Zenový mistr Seung Sahn' },
            { text: 'Přicházím s prázdnýma rukama, odcházím s prázdnýma rukama — to je cesta lidí.', author: 'Zenová tradice' },
        ]
    };

    // ========== PHASES DEFINITION ==========

    const BOW_SECONDS_PER_BOW = 60 / 9;
    const BASE_PHASE_SECONDS = 20 + 180;

    const PHASES = [
        {
            id: 'vows',
            title: 'Čtyři velké sliby',
            duration: 20,
            bellsBefore: 1,
            bellsAfter: 0,
            type: 'text',
        },
        {
            id: 'bows',
            title: 'Devět velkých poklon',
            duration: null,
            bellsBefore: 0,
            bellsAfter: 0,
            type: 'bows',
        },
        {
            id: 'sutra',
            title: 'Zpěv Sútry srdce',
            duration: null,
            bellsBefore: 1,
            bellsAfter: 0,
            type: 'text',
            manualAdvanceOnly: true,
        },
        {
            id: 'sitting',
            title: 'Meditace v sedě',
            duration: null, // set from wheel
            bellsBefore: 3,
            bellsAfter: 3,
            bellType: 'chukpi', // sezení se vždy začíná i končí třemi údery čukpi
            type: 'sitting',
        },
        {
            id: 'reading',
            title: 'Čtení buddhistického textu',
            duration: 180,
            bellsBefore: 1,
            bellsAfter: 3,
            type: 'text',
        },
    ];

    // ========== STATE ==========

    const state = {
        currentScreen: 'splash',
        sittingMinutes: 10,
        currentPhase: 0,
        phaseTimeLeft: 0,
        totalElapsed: 0,
        isPaused: false,
        timerInterval: null,
        bowCount: 0,
        wakeLock: null,
        meditationStartTime: null,
        pendingTimeouts: [],
        manualAdvanceHandler: null,
        chant: null,
        chantFollow: true,
        chantTrack: 0,
        chantFrame: null,
    };

    // ========== SETTINGS ==========

    function loadSettings() {
        const defaults = {
            bellType: 'singing-bowl',
            volume: 70,
            intervalMinutes: 0,
            fontSize: 'medium',
            screenWake: 'on',
            autoAdvance: 'auto',
            sittingMinutes: 10,
            bowCount: 9,
            bowSpeed: 'slow',
            chantMode: 'audio',
        };
        try {
            const saved = JSON.parse(localStorage.getItem('kum-settings'));
            return { ...defaults, ...saved };
        } catch {
            return defaults;
        }
    }

    function saveSettings(settings) {
        localStorage.setItem('kum-settings', JSON.stringify(settings));
    }

    let settings = loadSettings();

    // ========== STATS ==========

    function loadStats() {
        const defaults = { totalSessions: 0, totalMinutes: 0, streak: 0, lastDate: null };
        try {
            const saved = JSON.parse(localStorage.getItem('kum-stats'));
            return { ...defaults, ...saved };
        } catch {
            return defaults;
        }
    }

    function saveStats(stats) {
        localStorage.setItem('kum-stats', JSON.stringify(stats));
    }

    function updateStreak(stats) {
        const today = new Date().toISOString().split('T')[0];
        if (stats.lastDate === today) return stats;

        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (stats.lastDate === yesterday) {
            stats.streak += 1;
        } else {
            stats.streak = 1;
        }
        stats.lastDate = today;
        return stats;
    }

    // ========== DOM ELEMENTS ==========

    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ========== CUSTOM CONFIRM ==========

    function showConfirm(message) {
        return new Promise((resolve) => {
            const overlay = $('#modalOverlay');
            const msgEl = $('#modalMessage');
            const btnConfirm = $('#modalConfirm');
            const btnCancel = $('#modalCancel');

            msgEl.textContent = message;
            overlay.classList.add('active');

            function cleanup(result) {
                overlay.classList.remove('active');
                btnConfirm.removeEventListener('click', onConfirm);
                btnCancel.removeEventListener('click', onCancel);
                overlay.removeEventListener('click', onOverlay);
                resolve(result);
            }

            function onConfirm() { cleanup(true); }
            function onCancel() { cleanup(false); }
            function onOverlay(e) {
                if (e.target === overlay) cleanup(false);
            }

            btnConfirm.addEventListener('click', onConfirm);
            btnCancel.addEventListener('click', onCancel);
            overlay.addEventListener('click', onOverlay);
        });
    }

    // ========== SCREEN NAVIGATION ==========

    function showScreen(screenId) {
        $$('.screen').forEach(s => s.classList.remove('active'));
        $(`#screen-${screenId}`).classList.add('active');
        state.currentScreen = screenId;
    }

    // ========== WHEEL PICKER ==========

    function getWheelItemHeight() {
        const wheel = $('#wheelScroll');
        const item = wheel.querySelector('.wheel-item:not(.wheel-pad)');
        return item ? item.offsetHeight : 60;
    }

    function initWheel() {
        const wheel = $('#wheelScroll');
        const options = [];
        // 5 to 60 minutes in steps of 5
        for (let m = 5; m <= 60; m += 5) {
            options.push(m);
        }

        // Add padding items for scroll
        let html = '<div class="wheel-item wheel-pad" data-val="">&nbsp;</div>';
        options.forEach(m => {
            html += `<div class="wheel-item" data-val="${m}">${m} min</div>`;
        });
        html += '<div class="wheel-item wheel-pad" data-val="">&nbsp;</div>';
        wheel.innerHTML = html;

        // Set initial position
        const targetIdx = options.indexOf(settings.sittingMinutes);

        setTimeout(() => {
            const itemHeight = getWheelItemHeight();
            wheel.scrollTop = (targetIdx >= 0 ? targetIdx : 1) * itemHeight;
            updateWheelSelection();
        }, 50);

        // Scroll handler
        let scrollTimeout;
        wheel.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                updateWheelSelection();
            }, 60);
        });

        // Re-align wheel on resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                scrollWheelTo(state.sittingMinutes);
            }, 150);
        });
    }

    function updateWheelSelection() {
        const wheel = $('#wheelScroll');
        const items = wheel.querySelectorAll('.wheel-item:not(.wheel-pad)');
        const itemHeight = getWheelItemHeight();
        const centerOffset = wheel.scrollTop + wheel.clientHeight / 2;

        let closestItem = null;
        let closestDist = Infinity;

        items.forEach(item => {
            const itemCenter = item.offsetTop + itemHeight / 2;
            const dist = Math.abs(centerOffset - itemCenter);
            if (dist < closestDist) {
                closestDist = dist;
                closestItem = item;
            }
            item.classList.remove('selected');
        });

        if (closestItem) {
            closestItem.classList.add('selected');
            const val = parseInt(closestItem.dataset.val);
            if (val && val !== state.sittingMinutes) {
                state.sittingMinutes = val;
                settings.sittingMinutes = val;
                saveSettings(settings);
                updateTotalTime();
                updatePresetButtons();
            }
        }
    }

    function scrollWheelTo(minutes) {
        const wheel = $('#wheelScroll');
        const items = wheel.querySelectorAll('.wheel-item:not(.wheel-pad)');
        const itemHeight = getWheelItemHeight();

        items.forEach((item, idx) => {
            if (parseInt(item.dataset.val) === minutes) {
                wheel.scrollTo({ top: idx * itemHeight, behavior: 'smooth' });
            }
        });
    }

    function getBowDurationSeconds() {
        const baseSeconds = (settings.bowCount || 9) * BOW_SECONDS_PER_BOW;
        const speedMultiplier = settings.bowSpeed === 'fast' ? 0.7 : 1;
        return Math.round(baseSeconds * speedMultiplier);
    }

    function getEstimatedTotalSeconds() {
        return BASE_PHASE_SECONDS + getBowDurationSeconds() + state.sittingMinutes * 60;
    }

    function updateTotalTime() {
        const totalSeconds = getEstimatedTotalSeconds();
        const min = Math.floor(totalSeconds / 60);
        const sec = totalSeconds % 60;
        $('#totalTime').textContent = sec > 0 ? `${min} min ${sec} s` : `${min} min`;
    }

    function updatePresetButtons() {
        $$('.preset-btn').forEach(btn => {
            const m = parseInt(btn.dataset.minutes);
            btn.classList.toggle('active', m === state.sittingMinutes);
        });
    }

    function updateBowSpeedButtons() {
        $$('.bow-speed-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.speed === settings.bowSpeed);
        });
    }

    function updateBowCountButtons() {
        $$('.bow-count-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.count) === settings.bowCount);
        });
    }

    // ========== MEDITATION FLOW ==========

    function startMeditation() {
        SoundEngine.unlock();
        clearPendingTimeouts();
        clearManualAdvance();
        clearInterval(state.timerInterval);
        state.currentPhase = 0;
        state.totalElapsed = 0;
        state.isPaused = false;
        state.meditationStartTime = Date.now();

        PHASES[1].duration = getBowDurationSeconds();
        PHASES[1].title = `${settings.bowCount} poklon`;
        PHASES[2].duration = null;
        // Set sitting duration
        PHASES[3].duration = state.sittingMinutes * 60;

        showScreen('meditation');
        applyFontSize();
        requestWakeLock();

        // Small delay then start first phase
        queueTimeout(() => startPhase(0), 600);
    }

    function startPhase(index) {
        clearPendingTimeouts();
        clearManualAdvance();
        clearInterval(state.timerInterval);
        stopChant();
        state.currentPhase = index;
        const phase = PHASES[index];
        state.phaseTimeLeft = phase.duration;
        state.isPaused = false;
        $('#chantBar').style.display = phase.id === 'sutra' ? 'flex' : 'none';

        // Update phase indicator
        $$('.phase-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
            dot.classList.toggle('done', i < index);
        });

        // Update title
        $('#phaseTitle').textContent = phase.title;

        // Show appropriate content
        const content = $('#phaseContent');
        const ensoTimer = $('#ensoTimer');
        const simpleTimer = $('#simpleTimer');
        const isManualPhase = phase.manualAdvanceOnly === true;

        if (phase.type === 'sitting') {
            content.style.display = 'none';
            ensoTimer.style.display = 'flex';
            simpleTimer.style.display = 'none';
            initEnsoTimer(phase.duration);
        } else {
            content.style.display = 'flex';
            ensoTimer.style.display = 'none';
            simpleTimer.style.display = isManualPhase ? 'none' : 'block';
            renderPhaseContent(phase);
            if (phase.duration) {
                updateTimerDisplay(phase.duration);
            }
        }

        // Play bells before phase
        if (phase.bellsBefore > 0) {
            const bellDuration = SoundEngine.playBell(phase.bellType || settings.bellType, phase.bellsBefore);
            // Start countdown after bells finish
            queueTimeout(() => {
                if (!isManualPhase) {
                    startPhaseTimer();
                }
            }, bellDuration * 1000 + 500);
        } else {
            if (!isManualPhase) {
                startPhaseTimer();
            }
        }

        // Remove paused class
        $('#screen-meditation').classList.remove('paused');
        setPauseAvailability(!isManualPhase);
        updatePauseButton();
    }

    function renderPhaseContentLegacy(phase) {
        const content = $('#phaseContent');

        switch (phase.id) {
            case 'vows':
                content.innerHTML = `<div class="phase-text phase-transition-enter">${TEXTS.vows}</div>`;
                break;

            case 'bows':
                state.bowCount = 0;
                updateBowDisplayLegacy();
                break;

            case 'sutra':
                content.innerHTML = `<div class="phase-text phase-transition-enter">${TEXTS.sutra}</div>`;
                // Auto-scroll sutra
                setTimeout(() => autoScrollSutraLegacy(), 2000);
                break;

            case 'reading': {
                const reading = TEXTS.readings[Math.floor(Math.random() * TEXTS.readings.length)];
                const textHtml = reading.text.replace(/\n/g, '<br>');
                content.innerHTML = `<div class="phase-text phase-transition-enter">
                    <p class="verse">${textHtml}</p>
                    <p style="margin-top:1.5em;font-size:0.85em;color:rgba(245,240,232,0.4)">— ${reading.author}</p>
                </div>`;
                break;
            }
        }
    }

    function updateBowDisplayLegacy() {
        const content = $('#phaseContent');
        const remaining = 9 - state.bowCount;
        content.innerHTML = `<div class="phase-text phase-transition-enter">
            <span class="bow-counter">${state.bowCount} / 9</span>
            <span class="bow-label">${remaining > 0 ? `Zbývá ${remaining} poklon` : 'Poklony dokončeny'}</span>
        </div>`;
    }

    function autoScrollSutraLegacy() {
        return;
    }

    function renderPhaseContent(phase) {
        const content = $('#phaseContent');
        content.classList.remove('phase-content-scrollable');

        switch (phase.id) {
            case 'vows':
                content.innerHTML = `<div class="phase-text phase-transition-enter">
                    <p class="phase-note">Přečtěte nahlas čtyři sliby.</p>
                    ${TEXTS.vows}
                </div>`;
                break;

            case 'bows':
                state.bowCount = 0;
                updateBowDisplay();
                break;

            case 'sutra':
                content.classList.add('phase-content-scrollable');
                $('#chantSelect').value = CZECH_SUTRA_ID;
                renderChant(CZECH_SUTRA_ID);
                break;

            case 'reading': {
                const reading = READINGS[Math.floor(Math.random() * READINGS.length)];
                const parasHtml = reading.p.map(p => {
                    const cls = p.length < 90 && READING_SOURCE_RE.test(p) ? ' class="reading-source"' : '';
                    return `<p${cls}>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`;
                }).join('');
                content.classList.add('phase-content-scrollable');
                content.innerHTML = `<div class="phase-text phase-text-scrollable phase-transition-enter">
                    <p class="phase-reading-title">${escapeHtml(reading.t)}</p>
                    ${parasHtml}
                </div>`;
                content.scrollTop = 0;
                break;
            }
        }
    }

    const READING_SOURCE_RE = /^(Zenov[ýá] mist|Z knihy|Ze sbírky|Primary Point|[„"]?.{0,60}JDPSN|.{0,60}SSN$)/;

    function escapeHtml(text) {
        return text.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    // ========== CHANTS (zpěvník + nahrávky) ==========

    const CZECH_SUTRA_ID = 'sutra-srdce-cz';

    function initChantBar() {
        const select = $('#chantSelect');
        const audio = $('#chantAudio');
        const options = [{ id: CZECH_SUTRA_ID, title: 'Sútra srdce (česky) — bez nahrávky' }, ...CHANTS];
        select.innerHTML = options.map(c => `<option value="${c.id}">${escapeHtml(c.title)}</option>`).join('');

        select.addEventListener('change', () => {
            renderChant(select.value);
            if (state.chant && settings.chantMode === 'audio') {
                audio.play().catch(() => {});
            }
        });

        // Zpívám sám (jen text) / Zpívám s nahrávkou
        $$('.chant-mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                settings.chantMode = btn.dataset.mode;
                saveSettings(settings);
                renderChant(select.value);
                if (state.chant && settings.chantMode === 'audio') {
                    audio.play().catch(() => {});
                }
            });
        });

        $('#btnChantPlay').addEventListener('click', () => {
            if (audio.paused) {
                audio.play().catch(() => {});
            } else {
                audio.pause();
            }
        });

        $('#chantSeek').addEventListener('input', (e) => {
            const total = getChantTotal();
            if (!total) return;
            // Find the track the position falls into (a chant can span several recordings)
            let offset = (e.target.value / 1000) * total;
            const durations = getChantDurations();
            let track = 0;
            while (track < durations.length - 1 && offset >= durations[track]) {
                offset -= durations[track];
                track++;
            }
            if (track !== state.chantTrack) {
                const wasPlaying = !audio.paused;
                state.chantTrack = track;
                audio.src = getChantTracks()[track];
                if (wasPlaying) audio.play().catch(() => {});
            }
            audio.currentTime = offset;
            setChantFollow(true);
        });

        $('#btnChantFollow').addEventListener('click', () => setChantFollow(true));

        // Manual scrolling takes over from the automatic one
        const content = $('#phaseContent');
        ['wheel', 'touchstart', 'pointerdown'].forEach(evt => {
            content.addEventListener(evt, () => {
                if (state.chant && !audio.paused) setChantFollow(false);
            }, { passive: true });
        });

        audio.addEventListener('play', () => {
            updateChantPlayButton();
            cancelAnimationFrame(state.chantFrame);
            state.chantFrame = requestAnimationFrame(chantTick);
        });
        audio.addEventListener('pause', updateChantPlayButton);
        audio.addEventListener('timeupdate', updateChantTime);
        audio.addEventListener('loadedmetadata', updateChantTime);
        audio.addEventListener('ended', () => {
            if (!state.chant) return;
            const tracks = getChantTracks();
            if (state.chantTrack < tracks.length - 1) {
                // Next recording of the same chant follows immediately
                state.chantTrack++;
                audio.src = tracks[state.chantTrack];
                audio.play().catch(() => {});
            } else if (settings.autoAdvance === 'auto') {
                skipPhase();
            }
        });
    }

    function renderChant(id) {
        const content = $('#phaseContent');
        const chant = CHANTS.find(c => c.id === id) || null;
        stopChant();
        state.chant = chant;

        const withAudio = settings.chantMode === 'audio';
        $('#chantMode').style.display = chant ? 'flex' : 'none';
        $$('.chant-mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === settings.chantMode);
        });

        if (!chant) {
            $('#phaseTitle').textContent = PHASES[state.currentPhase].title;
            $('#chantPlayer').style.display = 'none';
            content.innerHTML = `<div class="phase-text phase-text-scrollable phase-transition-enter">
                <p class="phase-note">Postupujte vlastním tempem. Až dokončíte zpěv nebo čtení, přeskočte krok.</p>
                <img class="sutra-image" src="Obrázky/česká sutra.jpg" alt="Sútra srdce">
            </div>`;
        } else {
            const audio = $('#chantAudio');
            state.chantTrack = 0;
            if (withAudio) {
                audio.src = getChantTracks()[0];
                audio.volume = settings.volume / 100;
            }
            $('#phaseTitle').textContent = chant.title;
            $('#chantPlayer').style.display = withAudio ? 'flex' : 'none';
            const pagesHtml = chant.pages.map(p =>
                `<img class="chant-page" src="${p.src}" width="${p.w}" height="${p.h}" alt="${escapeHtml(chant.title)} — stránka zpěvníku">`
            ).join('');
            content.innerHTML = `<div class="phase-text phase-text-scrollable phase-transition-enter">
                <p class="phase-note">${withAudio ? 'Text se posouvá podle nahrávky.' : 'Zpívejte vlastním tempem a text si posouvejte sami.'} Po skončení zpěvu přeskočte krok.</p>
                ${pagesHtml}
            </div>`;
            setChantFollow(true);
            updateChantTime();
        }
        content.scrollTop = 0;
    }

    function stopChant() {
        const audio = $('#chantAudio');
        cancelAnimationFrame(state.chantFrame);
        state.chant = null;
        audio.pause();
        audio.removeAttribute('src');
        audio.load();
        updateChantPlayButton();
    }

    function setChantFollow(follow) {
        state.chantFollow = follow;
        $('#btnChantFollow').style.display = follow ? 'none' : 'inline-block';
    }

    function updateChantPlayButton() {
        const playing = !$('#chantAudio').paused;
        $('.chant-play-icon').style.display = playing ? 'none' : 'block';
        $('.chant-pause-icon').style.display = playing ? 'block' : 'none';
    }

    function getChantTracks() {
        return [].concat(state.chant.audio);
    }

    function getChantDurations() {
        return state.chant.durations || [$('#chantAudio').duration || 0];
    }

    function getChantTotal() {
        return state.chant ? getChantDurations().reduce((sum, d) => sum + d, 0) : 0;
    }

    // Position within the whole chant, including recordings already played
    function getChantPosition() {
        const played = getChantDurations().slice(0, state.chantTrack).reduce((sum, d) => sum + d, 0);
        return played + $('#chantAudio').currentTime;
    }

    function updateChantTime() {
        const total = getChantTotal();
        const position = total ? getChantPosition() : 0;
        $('#chantTime').textContent = `${formatTime(Math.floor(position))} / ${formatTime(Math.floor(total))}`;
        $('#chantSeek').value = total ? Math.round((position / total) * 1000) : 0;
    }

    // Scroll position for a given fraction of the recording: each zpěvník page
    // gets a share of the time proportional to the amount of text on it.
    function getChantScrollTop(fraction) {
        const content = $('#phaseContent');
        const pages = content.querySelectorAll('.chant-page');
        const totalChars = state.chant.pages.reduce((sum, p) => sum + p.chars, 0);
        let remaining = fraction * totalChars;
        let y = 0;
        for (let i = 0; i < pages.length; i++) {
            const chars = state.chant.pages[i].chars;
            const pageTop = pages[i].getBoundingClientRect().top - content.getBoundingClientRect().top + content.scrollTop;
            if (remaining <= chars || i === pages.length - 1) {
                y = pageTop + Math.min(remaining / chars, 1) * pages[i].offsetHeight;
                break;
            }
            remaining -= chars;
        }
        const max = content.scrollHeight - content.clientHeight;
        return Math.max(0, Math.min(max, y - content.clientHeight * 0.4));
    }

    function chantTick() {
        const audio = $('#chantAudio');
        if (!state.chant || audio.paused) return;
        const total = getChantTotal();
        if (state.chantFollow && total) {
            $('#phaseContent').scrollTop = getChantScrollTop(Math.min(getChantPosition() / total, 1));
        }
        state.chantFrame = requestAnimationFrame(chantTick);
    }

    function updateBowDisplay() {
        const content = $('#phaseContent');
        const totalBows = settings.bowCount || 9;
        const remaining = totalBows - state.bowCount;
        content.innerHTML = `<div class="phase-text phase-transition-enter">
            <span class="bow-counter">${state.bowCount} / ${totalBows}</span>
            <span class="bow-label">${remaining > 0 ? `Zbývá ${remaining} poklon` : 'Poklony dokončeny'}</span>
        </div>`;
    }

    // ========== ENSŌ TIMER ==========

    function initEnsoTimer(totalSeconds) {
        const circle = $('#ensoProgress');
        const r = 130;
        const circumference = 2 * Math.PI * r;

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;
        circle.style.transition = 'none';

        // Add breathing glow effect
        $('.enso-timer-svg').classList.add('breathing-pulse');

        updateTimerDisplay(totalSeconds);
        $('#timerLabel').textContent = 'meditace v sedě';

        // Show end time
        const endTime = new Date(Date.now() + totalSeconds * 1000);
        const hh = endTime.getHours().toString().padStart(2, '0');
        const mm = endTime.getMinutes().toString().padStart(2, '0');
        $('#timerEndTime').textContent = `skončí v ${hh}:${mm}`;
    }

    function updateEnsoProgress(elapsed, total) {
        const circle = $('#ensoProgress');
        const r = 130;
        const circumference = 2 * Math.PI * r;
        const progress = Math.min(elapsed / total, 1);
        const offset = circumference * (1 - progress);

        circle.style.transition = 'stroke-dashoffset 1s linear';
        circle.style.strokeDashoffset = offset;
    }

    function updateTimerDisplay(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        const display = `${min}:${sec.toString().padStart(2, '0')}`;

        const phase = PHASES[state.currentPhase];
        if (phase && phase.type === 'sitting') {
            $('#timerRemaining').textContent = display;
        }
        $('#simpleTimerValue').textContent = display;
    }

    // ========== PHASE TIMER ==========

    function startPhaseTimer() {
        clearInterval(state.timerInterval);

        const phase = PHASES[state.currentPhase];
        const totalDuration = phase.duration;
        let elapsed = totalDuration - state.phaseTimeLeft;

        // Bow timer setup
        if (phase.id === 'bows') {
            state.bowCount = 0;
        }

        state.timerInterval = setInterval(() => {
            if (state.isPaused) return;

            elapsed++;
            state.phaseTimeLeft = totalDuration - elapsed;
            state.totalElapsed++;

            // Update displays
            updateTimerDisplay(state.phaseTimeLeft);

            if (phase.type === 'sitting') {
                updateEnsoProgress(elapsed, totalDuration);
            }

            // Bow counting (every ~6.7 seconds for 9 bows in 60 sec)
            if (phase.id === 'bows') {
                const totalBows = settings.bowCount || 9;
                const bowInterval = Math.max(1, Math.floor(totalDuration / totalBows));
                const newBowCount = Math.min(Math.floor(elapsed / bowInterval), totalBows);
                if (newBowCount > state.bowCount) {
                    state.bowCount = newBowCount;
                    SoundEngine.playWoodBlock();
                    updateBowDisplay();
                }
            }

            // Phase complete
            if (state.phaseTimeLeft <= 0) {
                clearInterval(state.timerInterval);
                onPhaseComplete();
            }
        }, 1000);
    }

    function onPhaseComplete() {
        clearPendingTimeouts();
        clearManualAdvance();
        const phase = PHASES[state.currentPhase];

        // Play bells after phase
        if (phase.bellsAfter > 0) {
            SoundEngine.playBell(phase.bellType || settings.bellType, phase.bellsAfter);
        }

        // Remove breathing glow
        const svgEl = $('.enso-timer-svg');
        if (svgEl) svgEl.classList.remove('breathing-pulse');

        const nextIndex = state.currentPhase + 1;

        if (nextIndex >= PHASES.length) {
            // Meditation complete
            queueTimeout(() => onMeditationComplete(), 3000);
        } else if (settings.autoAdvance === 'auto') {
            // Auto advance after bell sound
            const delay = phase.bellsAfter > 0 ? (phase.bellsAfter * 2.5 + 1) * 1000 : 1500;
            queueTimeout(() => startPhase(nextIndex), delay);
        } else {
            // Manual: wait for user tap
            showManualAdvancePrompt(nextIndex);
        }
    }

    function showManualAdvancePrompt(nextIndex) {
        const content = $('#phaseContent');
        clearManualAdvance();
        content.style.display = 'flex';
        $('#ensoTimer').style.display = 'none';
        content.innerHTML = `<div class="phase-text phase-transition-enter">
            <p style="color: var(--color-gold); margin-bottom: 1em;">Klepněte pro pokračování</p>
            <p style="font-size: 0.9rem; color: rgba(245,240,232,0.4);">${PHASES[nextIndex].title}</p>
        </div>`;

        const handler = () => {
            clearManualAdvance();
            startPhase(nextIndex);
        };
        state.manualAdvanceHandler = handler;
        content.addEventListener('click', handler);
    }

    function clearManualAdvance() {
        const content = $('#phaseContent');
        if (content && state.manualAdvanceHandler) {
            content.removeEventListener('click', state.manualAdvanceHandler);
            state.manualAdvanceHandler = null;
        }
    }

    function queueTimeout(callback, delay) {
        const timeoutId = setTimeout(() => {
            state.pendingTimeouts = state.pendingTimeouts.filter(id => id !== timeoutId);
            callback();
        }, delay);
        state.pendingTimeouts.push(timeoutId);
        return timeoutId;
    }

    function clearPendingTimeouts() {
        state.pendingTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
        state.pendingTimeouts = [];
    }

    function onMeditationComplete() {
        clearInterval(state.timerInterval);
        clearPendingTimeouts();
        clearManualAdvance();
        stopChant();
        releaseWakeLock();

        const totalSeconds = Math.round((Date.now() - state.meditationStartTime) / 1000);
        const sittingSeconds = state.sittingMinutes * 60;

        // Update stats
        let stats = loadStats();
        stats.totalSessions += 1;
        stats.totalMinutes += Math.round(totalSeconds / 60);
        stats = updateStreak(stats);
        saveStats(stats);

        // Update complete screen
        $('#statDuration').textContent = formatTime(totalSeconds);
        $('#statSitting').textContent = formatTime(sittingSeconds);
        $('#statStreak').textContent = stats.streak;

        // Random quote
        const quote = TEXTS.quotes[Math.floor(Math.random() * TEXTS.quotes.length)];
        $('#completeQuote p').textContent = `„${quote.text}"`;
        $('#completeQuote cite').textContent = `— ${quote.author}`;

        showScreen('complete');
    }

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    // ========== PAUSE / STOP ==========

    function togglePause() {
        if ($('#btnPause').disabled) return;
        state.isPaused = !state.isPaused;
        updatePauseButton();
        $('#screen-meditation').classList.toggle('paused', state.isPaused);
    }

    function updatePauseButton() {
        const btn = $('#btnPause');
        const pauseIcons = btn.querySelectorAll('.pause-icon');
        const playIcon = btn.querySelector('.play-icon');

        if (state.isPaused) {
            pauseIcons.forEach(i => i.style.display = 'none');
            playIcon.style.display = 'block';
        } else {
            pauseIcons.forEach(i => i.style.display = 'block');
            playIcon.style.display = 'none';
        }
    }

    function setPauseAvailability(isEnabled) {
        const btn = $('#btnPause');
        btn.disabled = !isEnabled;
        if (!isEnabled) {
            state.isPaused = false;
            $('#screen-meditation').classList.remove('paused');
        }
    }

    async function stopMeditation() {
        const confirmed = await showConfirm('Opravdu chcete ukončit meditaci?');
        if (!confirmed) return;
        clearInterval(state.timerInterval);
        clearPendingTimeouts();
        clearManualAdvance();
        stopChant();
        releaseWakeLock();
        showScreen('home');

    }

    function skipPhase() {
        clearInterval(state.timerInterval);
        clearPendingTimeouts();
        clearManualAdvance();

        const svgEl = $('.enso-timer-svg');
        if (svgEl) svgEl.classList.remove('breathing-pulse');

        const nextIndex = state.currentPhase + 1;
        if (nextIndex >= PHASES.length) {
            onMeditationComplete();
            return;
        }

        startPhase(nextIndex);
    }

    // ========== WAKE LOCK ==========

    async function requestWakeLock() {
        if (settings.screenWake !== 'on') return;
        try {
            if ('wakeLock' in navigator) {
                state.wakeLock = await navigator.wakeLock.request('screen');
            }
        } catch {
            // Wake lock not available
        }
    }

    function releaseWakeLock() {
        if (state.wakeLock) {
            state.wakeLock.release();
            state.wakeLock = null;
        }
    }

    // ========== FONT SIZE ==========

    function applyFontSize() {
        const med = $('#screen-meditation');
        med.classList.remove('font-small', 'font-medium', 'font-large');
        med.classList.add(`font-${settings.fontSize}`);
    }

    // ========== SETTINGS UI ==========

    function initSettingsUI() {
        $('#settingBellType').value = settings.bellType;
        $('#settingVolume').value = settings.volume;
        $('#settingFontSize').value = settings.fontSize;
        $('#settingScreenWake').value = settings.screenWake;
        $('#settingBowCount').value = settings.bowCount;
        $('#settingBowSpeed').value = settings.bowSpeed;
        $('#settingAutoAdvance').value = settings.autoAdvance;

        SoundEngine.setVolume(settings.volume / 100);

        $('#settingBellType').addEventListener('change', (e) => {
            settings.bellType = e.target.value;
            saveSettings(settings);
        });

        $('#settingVolume').addEventListener('input', (e) => {
            settings.volume = parseInt(e.target.value);
            SoundEngine.setVolume(settings.volume / 100);
            saveSettings(settings);
        });

        $('#settingFontSize').addEventListener('change', (e) => {
            settings.fontSize = e.target.value;
            saveSettings(settings);
        });

        $('#settingScreenWake').addEventListener('change', (e) => {
            settings.screenWake = e.target.value;
            saveSettings(settings);
        });

        $('#settingBowCount').addEventListener('change', (e) => {
            settings.bowCount = parseInt(e.target.value);
            saveSettings(settings);
            updateTotalTime();
        });

        $('#settingBowSpeed').addEventListener('change', (e) => {
            settings.bowSpeed = e.target.value;
            saveSettings(settings);
            updateTotalTime();
        });

        $('#settingAutoAdvance').addEventListener('change', (e) => {
            settings.autoAdvance = e.target.value;
            saveSettings(settings);
        });

        $('#btnTestSound').addEventListener('click', () => {
            SoundEngine.playBell(settings.bellType, 1);
        });

        $('#btnResetStats').addEventListener('click', async () => {
            const confirmed = await showConfirm('Opravdu vynulovat všechny statistiky?');
            if (confirmed) {
                localStorage.removeItem('kum-stats');
        
            }
        });
    }

    // ========== EVENT LISTENERS ==========

    function initEvents() {
        // Start meditation
        $('#btnStart').addEventListener('click', startMeditation);

        // Quick presets
        $$('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const min = parseInt(btn.dataset.minutes);
                state.sittingMinutes = min;
                settings.sittingMinutes = min;
                saveSettings(settings);
                scrollWheelTo(min);
                updateTotalTime();
                updatePresetButtons();
            });
        });

        // Bow count toggle
        $$('.bow-count-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                settings.bowCount = parseInt(btn.dataset.count);
                saveSettings(settings);
                updateTotalTime();
                updateBowCountButtons();
            });
        });

        // Bow speed toggle
        $$('.bow-speed-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                settings.bowSpeed = btn.dataset.speed;
                saveSettings(settings);
                updateTotalTime();
                updateBowSpeedButtons();
            });
        });

        // Navigation
        $('#btnSettings').addEventListener('click', () => showScreen('settings'));
        $('#btnAbout').addEventListener('click', () => showScreen('about'));
        $('#btnBackFromSettings').addEventListener('click', () => showScreen('home'));
        $('#btnBackFromAbout').addEventListener('click', () => showScreen('home'));
        $('#btnBackHome').addEventListener('click', () => {
            showScreen('home');
    
        });

        // Meditation controls
        $('#btnPause').addEventListener('click', togglePause);
        $('#btnSkip').addEventListener('click', skipPhase);
        $('#btnStop').addEventListener('click', stopMeditation);

        // Handle visibility change for wake lock
        document.addEventListener('visibilitychange', async () => {
            if (document.visibilityState === 'visible' && state.currentScreen === 'meditation' && !state.isPaused) {
                await requestWakeLock();
            }
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (state.currentScreen === 'meditation') {
                if (e.code === 'Space') {
                    e.preventDefault();
                    togglePause();
                } else if (e.code === 'Escape') {
                    stopMeditation();
                }
            }
        });
    }

    // ========== SPLASH SCREEN ==========

    function initSplash() {
        setTimeout(() => {
            showScreen('home');
        }, 3200);
    }

    // ========== SERVICE WORKER ==========

    function registerSW() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(() => {});
        }
    }

    // ========== INIT ==========

    function init() {
        state.sittingMinutes = settings.sittingMinutes;

        initWheel();
        updateTotalTime();
        updatePresetButtons();
        updateBowCountButtons();
        updateBowSpeedButtons();

        initSettingsUI();
        initChantBar();
        initEvents();
        initSplash();
        registerSW();
    }

    // Start app
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
