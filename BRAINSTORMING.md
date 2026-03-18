# Meditační aplikace - Zenová škola Kwan Um
## Kompletní Brainstorming

---

## 1. VIZE PROJEKTU

Oficiální meditační aplikace Zenové školy Kwan Um pro Českou republiku.
Aplikace provádí uživatele strukturovanou 15minutovou meditací (a dalšími formami praxe)
s nastavitelnou dobou sezení, zvukovými signály a texty.

**Cílová skupina:** Začátečníci i pokročilí praktikující zenu v ČR
**Jazyk:** Čeština (s možností budoucího rozšíření o angličtinu)

---

## 2. STRUKTURA MEDITACE (z PDF)

| # | Fáze | Výchozí čas | Popis |
|---|------|-------------|-------|
| 1 | Čtyři velké sliby | 30 s | Recitace čtyř slibů |
| 2 | Devět velkých poklon | 1 min | Poklony |
| 3 | Zpěv Sútry srdce | 5 min | Zpěv s textem na obrazovce |
| 4 | Meditace v sedě | 5-60 min (volitelné) | Tiché sezení se zvonkem |
| 5 | Čtení buddhistického textu | 3 min | Zobrazení textu k přečtení |

**Celkový čas:** 9,5 min + volitelná doba sezení (výchozí 5 min = 14,5 min)

---

## 3. KLÍČOVÉ FUNKCE

### 3.1 Průvodce meditací (hlavní funkce)
- Krok-za-krokem vedení celou 15minutovou meditací
- Každá fáze má vlastní obrazovku s textem a časovačem
- Automatický přechod mezi fázemi se zvukovým signálem (zvonky)
- Možnost pozastavit / přeskočit fázi
- Minimální UI během meditace (jen časovač + text)

### 3.2 Nastavitelná doba sezení
- **Otočné kolečko (wheel picker)** pro výběr doby sezení
- Rozsah: 5 - 60 minut, po 5minutových krocích
- Výchozí: 5 minut
- Vizuální zpětná vazba - animovaný kruhový progress ring
- Zobrazení "Meditace skončí v XX:XX" (reálný čas konce)
- Zapamatování poslední volby uživatele

### 3.3 Zvukové signály
- **Začátek meditace:** 3 údery zvonku (tradiční zen)
- **Přechod mezi fázemi:** 1-2 údery
- **Konec meditace:** 3 údery zvonku
- **Intervalový zvoneček** během sezení (volitelný, každých X minut)
- Zvuky: tibetská mísa, chrámový zvon (keisu), dřevěný blok (moktak)
- Možnost ztlumení / vibrace místo zvuku

### 3.4 Texty na obrazovce
- **Čtyři velké sliby** - plný text k recitaci
- **Sútra srdce** - kompletní český překlad s plynulým scrollem
- **Buddhistické texty** - knihovna textů k závěrečnému čtení
- Nastavitelná velikost písma

### 3.5 Vizuální časovač
- **Animovaný Ensó kruh** (zenový kruh) - kreslí se postupně s časem
- Nebo kruhový progress ring v barvách školy
- Velké číslo s odpočtem uprostřed
- Tmavé pozadí během meditace (šetrné k očím)

---

## 4. DESIGN & VIZUÁLNÍ IDENTITA

### 4.1 Barevná paleta (inspirováno webem kwanumzen.cz)

| Název | Barva | Použití |
|-------|-------|---------|
| **Hluboká indigo/navy** | `hsl(232, 84%, 19%)` / `#0A0F47` | Hlavní barva, pozadí, tlačítka |
| **Tmavá navy** | `#1a1a2e` | Pozadí během meditace |
| **Teplá bílá/krém** | `#f5f0e8` | Pozadí světlého režimu, texty |
| **Zlatá/amber** | `#c9a227` | Akcenty, zvonky, aktivní prvky |
| **Růžová (logo)** | `#d4a0a0` | Decentní akcent z loga |
| **Šedozelená (šalvěj)** | `#8b9d77` | Sekundární prvky, ikony |

### 4.2 Typografie
- Čistý sans-serif pro UI (Inter / Noto Sans)
- Volitelně kaligrafický font pro nadpisy / texty súter
- Velké řádkování pro texty k recitaci
- Minimální text na obrazovkách

### 4.3 Vizuální principy (Wabi-sabi estetika)
- **Kanso** - jednoduchost, žádný vizuální nepořádek
- **Seijaku** - klid, ticho v designu
- **Ma** - využití prázdného prostoru
- Zaoblené rohy na všech prvcích (žádné ostré hrany)
- Jemné animace, pomalé přechody
- Ensó kruh jako hlavní vizuální motiv
- Inkoustové textury / vodové barvy jako pozadí

### 4.4 Tmavý režim
- Výchozí režim pro meditaci
- Hluboká indigo/navy (ne čistá černá)
- Teplé zlaté akcenty
- Automatické ztmavení při spuštění meditace

---

## 5. OBRAZOVKY APLIKACE

### 5.1 Úvodní obrazovka (Splash)
- Logo Zenové školy Kwan Um (růže)
- Animovaný Ensó kruh
- "Zenová škola Kwan Um"

### 5.2 Domovská obrazovka
- Velké tlačítko "Začít meditaci"
- Nastavení doby sezení (kolečko/wheel)
- Rychlé předvolby: 5 / 10 / 15 / 20 / 30 min
- Zobrazení celkového času meditace
- Série praxe (streak) - kolik dní v řadě
- Citát dne (z zenových učitelů)

### 5.3 Obrazovka fáze - Čtyři velké sliby (30 s)
- Plný text slibů na obrazovce
- Jemný odpočet v pozadí
- Zvoneček na začátku a konci
- Tlačítko "Další" pro ruční přechod

### 5.4 Obrazovka fáze - Poklony (1 min)
- Odpočet 9 poklon
- Zvukový signál pro každou poklonu (moktak)
- Vizuální indikátor (1/9, 2/9...)

### 5.5 Obrazovka fáze - Zpěv Sútry srdce (5 min)
- Plný text sútry s automatickým scrollem
- Velké, čitelné písmo
- Zvýraznění aktuální sekce
- Zvoneček na začátku a konci

### 5.6 Obrazovka fáze - Meditace v sedě (volitelná doba)
- Minimální UI - pouze Ensó časovač
- Velký odpočet času
- Tmavé pozadí
- Volitelné intervalové zvonky
- Možnost prodloužit/zkrátit během sezení

### 5.7 Obrazovka fáze - Čtení textu (3 min)
- Náhodný nebo vybraný buddhistický text
- Odpočet času
- Zvoneček na konci

### 5.8 Obrazovka dokončení
- "Meditace dokončena"
- Statistiky sezení (celkový čas, doba sezení)
- Aktualizace série (streak)
- Motivační citát
- Tlačítko "Zpět na úvod"

### 5.9 Nastavení
- Výběr zvuků (tibetská mísa / chrámový zvon / moktak / ticho)
- Hlasitost zvonků
- Intervalové zvonky (vypnuto / každých 5 min)
- Velikost písma textů
- Tmavý / světlý režim
- Jazyk (CZ / EN budoucnost)
- O aplikaci / O škole

### 5.10 O škole
- Informace o Zenové škole Kwan Um
- Kontakty na centra a skupiny v ČR
- Odkaz na web kwanumzen.cz
- Odkaz na e-shop zenspirit.cz
- Kalendář akcí (napojení na web)

---

## 6. TECHNOLOGIE

### Doporučení: Webová aplikace (PWA)
**Proč:**
- Funguje na všech zařízeních (mobil, tablet, PC)
- Lze nainstalovat jako "nativní" aplikace
- Žádný app store = snadná distribuce
- Nízké náklady na vývoj a údržbu
- Offline podpora přes Service Worker

### Tech stack
- **HTML5 + CSS3 + Vanilla JavaScript** (nebo React pro složitější stav)
- **Web Audio API** pro zvuky zvonků
- **Service Worker** pro offline fungování
- **LocalStorage** pro ukládání nastavení a statistik
- **CSS Custom Properties** pro theming (dark/light)
- **requestAnimationFrame** pro plynulé animace

### Alternativa: React Native / Flutter
- Pro budoucí nativní mobilní aplikaci
- App Store + Google Play distribuce
- Push notifikace pro připomenutí meditace

---

## 7. ZVUKOVÝ DESIGN

### Potřebné zvuky
| Zvuk | Použití | Formát |
|------|---------|--------|
| Tibetská mísa (malá) | Přechod mezi fázemi | MP3/OGG |
| Tibetská mísa (velká) | Začátek/konec meditace | MP3/OGG |
| Moktak (dřevěný blok) | Poklony | MP3/OGG |
| Chrámový zvon (keisu) | Alternativní zvuk | MP3/OGG |
| Jemný gong | Intervalový zvoneček | MP3/OGG |

### Zvukové vzory (tradiční zen)
- **3 údery** = začátek zazen (sezení)
- **2 údery** = konec zazen / začátek kinhin (chůze)
- **1 úder** = přechod / upozornění
- Pauza 2-3 sekundy mezi údery

---

## 8. UŽIVATELSKÁ CESTA (User Flow)

```
[Otevření aplikace]
        |
[Domovská obrazovka]
        |
[Nastavení doby sezení - kolečko]
        |
[Klik "Začít meditaci"]
        |
   🔔 3x zvoneček
        |
[Fáze 1: Čtyři velké sliby] --30s--> auto přechod
        |
   🔔 1x zvoneček
        |
[Fáze 2: Devět poklon] --1min--> auto přechod
        |
   🔔 1x zvoneček
        |
[Fáze 3: Zpěv Sútry srdce] --5min--> auto přechod
        |
   🔔 3x zvoneček (začátek zazen)
        |
[Fáze 4: Meditace v sedě] --volitelná doba--> auto přechod
        |
   🔔 2x zvoneček (konec zazen)
        |
[Fáze 5: Čtení textu] --3min-->
        |
   🔔 3x zvoneček (konec)
        |
[Obrazovka dokončení]
```

---

## 9. BUDOUCÍ ROZŠÍŘENÍ (v2+)

- **Připomenutí meditace** - denní notifikace
- **Statistiky a grafy** - týdenní/měsíční přehledy praxe
- **Knihovna textů** - rozšířená sbírka súter a zenových textů
- **Zpěvník** - integrace zpěvníku školy s audio nahrávkami
- **Kalendář akcí** - napojení na akce školy
- **Kong-an praxe** - interaktivní práce s koány
- **Zvon všímavosti** - náhodný zvoneček během dne
- **Kinhin (chůze)** - přidání meditace v chůzi mezi sezení
- **Komunita** - sdílené meditace, kolik lidí právě medituje
- **Audio vedení** - nahrávky učitelů (Jiří Hazlbauer JDPSN)
- **Vícejazyčnost** - EN, KR, PL

---

## 10. INSPIRACE Z NEJLEPŠÍCH APLIKACÍ

| Aplikace | Co převzít |
|----------|-----------|
| **Insight Timer** | Multi-fázový časovač, výběr zvuků, presety |
| **Plum Village** | Zenová estetika, zvon všímavosti, texty súter |
| **Headspace** | Onboarding, animace, gamifikace (série) |
| **Calm** | Kruhový progress, minimální UI při meditaci |
| **Bodhi Timer** | Animovaný Ensó kruh, zenové zvuky |
| **Zazen Timer** | Struktura zazen+kinhin, tradiční zvonkové vzory |

---

## 11. JEDINEČNÉ PRVKY NAŠÍ APLIKACE

1. **Autentická zenová praxe** - ne generická "meditace", ale skutečná forma Kwan Um
2. **Kompletní Sútra srdce v češtině** - s automatickým scrollem
3. **Ensó časovač** - animovaný zenový kruh jako progress indikátor
4. **Tradiční zvonkové vzory** - 3-2-1 systém jako v zendu (meditační síni)
5. **Oficiální aplikace školy** - propojení s komunitou a akcemi
6. **Český jazyk** - jediná česká zenová meditační aplikace
7. **Wabi-sabi design** - autentická zenová estetika, ne komerční "wellness"
