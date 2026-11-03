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
Buzzer Round (wrong answers let others steal for double), and the Anything Round (written by Claude,
needs an Anthropic API key saved on the TV device), and the Family Round.

## Family Round
Set it up on the phone you'll host with (home page → Set up the Family Round, or the host controls in the lobby).
Question types: Who's in the photo?, Guess the year (photo, closest wins), Question with choices, True or false.
Questions and photos stay on that phone and are sent to the TV over the live connection when you host.
Once played they're marked as used, so a second game skips the Family Round.

## Extras
- One Joker per player to double their points on a round.
- Original background music, drumroll reveals and a winner's fanfare. Music and volume on the host phone.
- End-of-game awards: Fastest Finger, Best Guesser, So Close, Buzzer Champ, Joker Genius.
- Christmas look with falling snow (automatic in December, or pick it in the lobby).

Used questions are remembered on the TV device so replays get fresh ones.
Live sync runs over Supabase Realtime (broadcast only, nothing stored).
