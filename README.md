# Buzz In

Family quiz night. The TV shows the questions and everyone's phone is their buzzer.

**Play:** https://jimmywilson1979-arch.github.io/buzz-in/

## Getting it on the TV
Step-by-step guides for each kind of TV (Chromecast, HDMI, Samsung, LG, Fire TV, Xbox, Apple TV, Android, Roku, Sky Glass):
https://jimmywilson1979-arch.github.io/buzz-in/?tvhelp

## How to run a game
1. On the laptop or Chromebook, open the link in Chrome and choose **This is the TV screen**.
2. Cast the tab to the TV (Chrome menu → Cast → Shield), or plug the laptop in with HDMI.
3. Press **Open the lobby**. Players scan the big QR code (or enter the 4-letter code).
4. The host scans the small QR code to get the controls on their phone.

## Rounds
General Knowledge, Kids' Corner (only players marked as a child can answer), Christmas Cracker,
Name That Tune (public-domain melodies played as generated notes), Emoji Films, Famous Lines,
True or False, Higher or Lower, Odd One Out, Closest Wins, Telly & Films, Music, Sport, Food & Drink,
Buzzer Round (after a buzz, the host can show the answer on the TV before marking it right or wrong; a wrong answer marked without showing the answer lets others steal for double), and the Anything Round (written by Claude,
needs an Anthropic API key saved on the TV device), and the Family Round.

## Family Round
Set it up on the phone you'll host with (home page → Set up the Family Round, or the host controls in the lobby).
Question types: Who's in the photo?, Guess the year (photo, closest wins), Question with choices, True or false.
Questions and photos stay on that phone and are sent to the TV over the live connection when you host.
Once played they're marked as used, so a second game skips the Family Round.

## Kids' game
Choose **Kids' game** under "Who's playing" in the lobby (TV or host phone). Every round is just for
the kids: only phones ticked "A child is playing" can answer, and only kids appear on the scoreboard.
Grown-ups can join to watch along, or just host. It defaults to a 30-second timer and has its own rounds:
Kids' Corner, Animal Antics, Christmas Elves, Nursery Rhyme Tunes, Cartoon Emojis, Kids' True or False,
Bigger or Smaller and Kids' Odd One Out.

## Christmas edition
Choose **🎄 Christmas edition** under "Edition" in the lobby (TV or host phone). Every round switches to
Christmas questions and the Christmas look comes on. It has its own round list, so the standard game's
questions aren't used up, and switching back to **Standard** brings your normal rounds back.

Default six rounds: Christmas Cracker, Festive Films (emojis), Carol Tunes (public-domain carols),
Christmas by Numbers (closest wins), Christmas Traditions (true or false) and a Christmas Buzzer Round.
Also available: Christmas Elves (kids only), Christmas Telly & Tunes, Festive Odd One Out, the Anything Round
and the Family Round.

Choose **Kids' game** as well for Christmas rounds just for the kids: Christmas Elves, Christmas Tunes,
Christmas Cartoon Emojis, Christmas True or False and Christmas Odd One Out.

## 🎨 Showtime look
Buzz In now looks like a TV game-show studio: sweeping spotlights, a shiny stage floor, a marquee of chasing light bulbs
around the logo and each round title, glossy answer buttons, a glowing timer, and lit-up score bars and podium.
In the Christmas edition the lights turn red, green and gold, a garland of twinkling lights hangs across the top and
presents sit on the stage. Switch back to the original look with **🎨 Showtime / Classic** in the lobby (under the
host QR code) or press **L** on the TV. The choice is remembered on that screen. All of it lives in `showtime.css`.

## Extras
- One Joker per player to double their points on a round.
- Original background music, drumroll reveals and a winner's fanfare. Music and volume on the host phone.
- End-of-game awards: Fastest Finger, Best Guesser, So Close, Buzzer Champ, Joker Genius.
- Christmas look with falling snow (automatic in December, or pick it in the lobby).

Used questions are remembered on the TV device so replays get fresh ones.
Live sync runs over Supabase Realtime (broadcast only, nothing stored).

## Doodle Gallery (drawing game)
**Play:** https://jimmywilson1979-arch.github.io/buzz-in/draw.html

Same set-up as Buzz In: the TV screen opens the lobby, phones scan the QR code to join.
Each player takes a turn to draw on their phone; the drawing appears live in a gold picture frame on the TV.
- **Guessing:** Type answers (marked automatically, close guesses get "So close!", letter hints appear as time runs down)
  or Buzz in (first to buzz says it out loud and the artist taps right or wrong).
- **Kids:** players who tick "A child is playing" pick a picture to draw (no reading needed) and guess by tapping one of four pictures.
- **Kids only:** only kids draw and guess, grown-ups watch.
- The first player to join is the host (settings, start, skip). The TV can also skip a drawing.
- End of game: The Exhibition, every drawing framed with a plaque. Click one on the TV to save it as a framed print.
- **🎄 Christmas edition** (Edition in the lobby, on automatically in December): Christmas words and pictures for grown-ups and kids, falling snow, a bow on the frame, and prints dated "Christmas".
- Installs as its own home-screen app with its own icon (`manifest-draw.webmanifest`, `draw-icon-*.png`, `draw-og.jpg` for link previews).

## Tap That Tune (piano game)
**Play:** https://jimmywilson1979-arch.github.io/buzz-in/piano.html

Same set-up as Buzz In and Doodle Gallery. On their turn, a player's phone becomes a two-octave piano (shown sideways,
and turned round for you if the phone is upright). The notes play through the TV, and everyone else guesses the song.
- **Note guide:** Glowing keys (the next key lights up) or Note letters (the tune shown as letters, colour-coded by octave).
  Kids always start on glowing keys and can switch to letters on their phone. A strip above the keys shows the rhythm.
- **Songs:** Built-in tunes (52 out-of-copyright songs: nursery rhymes, carols, folk, anthems and classical), From memory
  (the pianist gets only a song title, such as "Mr Brightside", and works it out by ear; no melody is stored),
  ⭐ Our songs (made in My songs, below), or 🎲 Mix of all.
- **🎼 My songs (song maker):** in the lobby on any phone. Play a tune on the sideways piano (the timing is recorded),
  undo, clear or play it back, then name it and pick a picture. Songs are saved on that phone and sent to the TV when it
  joins, so they come up in ⭐ Our songs and Mix, with glowing keys for whoever plays them. Made-up tunes, or songs you know.
  Or **📝 Type or paste notes**: letters with spaces (`E D C D E E E:2`), sharps/flats (`F#`, `Bb`), `:2`/`:0.5` for
  longer/shorter, `R` for a rest, a number for the octave (`C5`; plain letters are the middle octave), with a speed
  choice and a Listen button before saving. Bar lines, commas and dashes are ignored.
- **Guessing:** Type answers (marked automatically, close guesses get "So close!", letter hints as time runs down) or Buzz in.
  Kids guess by tapping one of four song pictures. Kids only mode works as in Doodle Gallery.
- Sound comes from the TV (click once to switch it on). Notes are scheduled a fraction of a second after they arrive so the
  rhythm survives the internet. The pianist can also turn sound on for their own phone.
- At the reveal the TV plays the real tune (built-in songs). End of game: The Concert, press ▶ to hear any performance again.
- **🎄 Christmas edition:** carols and Christmas songs, with falling snow.

## Buzz In Party (party games)
**Play:** https://jimmywilson1979-arch.github.io/buzz-in/party.html

Same set-up as Buzz In: the TV screen opens the lobby, phones scan the QR code to join. Fourteen mini-games (pick which ones in the lobby) played in a row with an overall leaderboard
(10 / 7 / 5 / 4 / 3 / 2 points for 1st to 6th in each game):
- **🐧 Penguin Sumo** – joystick + DASH, push everyone off a shrinking ice floe. 3 rounds.
- **💪 Tug of War** – two auto-balanced teams tap as fast as they can. Best of 3 (uneven teams are evened out).
- **🤠 Quick Draw** – wait for green, tap fastest. Red decoys and early taps knock you out of the round. 5 rounds. Reaction time is measured on the phone itself, so the connection speed doesn't matter.
- **🥌 Curling** – swipe up to throw (speed = distance, angle = aim), tap SWEEP to carry it further. Closest stone wins.
- **⛵ Blow Boat Race** – blow into the phone's microphone (or shout) to fill your sail; tap-to-paddle if there's no mic.
- **🎣 Gone Fishing** – swipe to cast, wait for a real bite (striking on a nibble scares it off), tap HOOK, wind your finger round the reel and stop when the fish fights or the line snaps. 100 seconds, most points of fish wins. Golden carp are worth the most; old boots are worth nothing.
- **🃏 Play Your Cards Right** – higher or lower on your phone, 3 rows of 6 cards. Aces high, a pair beats everyone.
- **🐱 Copy Cat** – remember the colour sequence on the TV and tap it back on your phone; one more colour each round.
- **🎯 Darts** – flick to throw (power = height, angle = aim), 3 darts × 3 rounds, proper dartboard scoring.
- **🎳 Bowling** – everyone bowls on their own lane at once, 3 frames, strike/spare bonuses; kids get bumpers.
- **🏀 Basketball** – flick to shoot as often as you like for 45 seconds; 2 a basket, 3 for a swish; the hoop moves at the end.
- **❄️ Snowball Fight** – joystick + THROW, hit someone to freeze them, hide behind snow walls; most hits in 60 seconds.
- **🎁 Catch the Presents** – run left and right to catch presents from Santa's sleigh; gold +3, coal −2.
- **🏇 Derby Day** – 100 pretend coins each, back a horse at fractional odds, 3 races. Results are drawn fairly from the odds shown. Most coins wins.

**Aiming in the flick games** (Curling, Gone Fishing, Darts, Bowling, Basketball): the aim comes from the direction of the whole swipe, start to finish. Straight up aims at the middle (in Basketball, at the hoop from wherever you stand). While you swipe, a dotted line shows the aim on the phone and on the TV; how fast the flick is at the end sets the power. Misses come with a tip, such as "It went left. Angle your swipe a bit more to the right."

Lobby settings: which games, Standard / 🎄 Christmas theme, **🤖 Computer players** (Auto adds 2 robot opponents when one person is playing alone, or choose 0–3), and **Kids boost** (players who tick "a child is playing" get heavier penguins,
stronger taps, a head start in Quick Draw and help with curling power). The first player to join is the host (start, next, skip from their phone).
The end screen has the settings and Play again, no rejoining needed.
Controls use a direct Wi-Fi link between phone and laptop (WebRTC) when possible, falling back to the cloud.

## Files
- `index.html` – the game page (TV, phones, Family Round set-up, TV guide)
- `party.html` – Buzz In Party mini-games (self-contained), with `manifest-party.webmanifest` and `party-*` icons
- `draw.html` – Doodle Gallery drawing game (self-contained)
- `piano.html` – Tap That Tune piano game (self-contained), with `manifest-piano.webmanifest`, `piano-*` icons and `piano-og.jpg`
- `pad-test.html` – controller test: phones as joystick, air pointer or touchpad, with a cloud vs direct (WebRTC) ping comparison
- `admin.html` – owner admin page; installs as its own home-screen app ("BI Admin")
- `app.js`, `app.css` – shared code and styles for both pages. Bump the `?v=` on both pages when they change.
