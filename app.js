// ===== QUESTION PACKS =====
// mc/emoji: [question, correct, wrong1, wrong2, wrong3]
// tf: [statement, true|false]
// number: [question, answer, unit]
// buzz: [question, answer]
const PACKS = {
  gk: { title: "General Knowledge", type: "mc", blurb: "A bit of everything to warm up.", qs: [
    ["What is the capital of Australia?", "Canberra", "Sydney", "Melbourne", "Perth"],
    ["Which element has the chemical symbol Au?", "Gold", "Silver", "Copper", "Aluminium"],
    ["What is the longest river in the UK?", "River Severn", "River Thames", "River Wye", "River Trent"],
    ["How many sides does a hexagon have?", "6", "5", "7", "8"],
    ["Which planet is known as the Red Planet?", "Mars", "Venus", "Jupiter", "Mercury"],
    ["What is the smallest country in the world?", "Vatican City", "Monaco", "San Marino", "Liechtenstein"],
    ["Who painted the Mona Lisa?", "Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Pablo Picasso"],
    ["What is the largest ocean on Earth?", "Pacific", "Atlantic", "Indian", "Arctic"],
    ["What is the hardest natural substance?", "Diamond", "Granite", "Iron", "Quartz"],
    ["In which city does the Welsh Parliament (the Senedd) sit?", "Cardiff", "Swansea", "Wrexham", "Newport"],
    ["What is the national animal of Scotland?", "Unicorn", "Stag", "Golden eagle", "Highland cow"],
    ["How many strings does a standard guitar have?", "6", "4", "5", "8"],
    ["Which gas do plants take in from the air?", "Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
    ["In which year did the Second World War end?", "1945", "1918", "1939", "1950"],
    ["What is the currency of Japan?", "Yen", "Yuan", "Won", "Ringgit"],
    ["What is the highest mountain in Wales?", "Yr Wyddfa (Snowdon)", "Pen y Fan", "Cadair Idris", "Tryfan"],
    ["What does 'www' stand for in a web address?", "World Wide Web", "Wide World Web", "Web World Wide", "World Web Wire"],
    ["What is the largest organ of the human body?", "Skin", "Liver", "Brain", "Lungs"],
    ["Which bird is a symbol of peace?", "Dove", "Robin", "Swan", "Owl"],
    ["How many players does a netball team have on court?", "7", "5", "9", "11"],
  ]},
  kids: { title: "Kids' Corner", type: "mc", blurb: "Easy ones. Let the little ones answer!", qs: [
    ["What colour do you get when you mix blue and yellow?", "Green", "Purple", "Orange", "Brown"],
    ["How many legs does a spider have?", "8", "6", "4", "10"],
    ["What does a caterpillar turn into?", "A butterfly", "A bee", "A spider", "A ladybird"],
    ["Which animal says 'moo'?", "Cow", "Sheep", "Pig", "Horse"],
    ["How many days are there in a week?", "7", "5", "6", "10"],
    ["What is the biggest planet in our solar system?", "Jupiter", "Earth", "Mars", "Saturn"],
    ["What do bees make?", "Honey", "Milk", "Jam", "Bread"],
    ["Which is the fastest land animal?", "Cheetah", "Lion", "Horse", "Rabbit"],
    ["What do we call frozen water?", "Ice", "Steam", "Rain", "Fog"],
    ["What colour is a ripe banana?", "Yellow", "Blue", "Red", "Purple"],
    ["Which shape has three sides?", "Triangle", "Square", "Circle", "Rectangle"],
    ["What is a baby sheep called?", "Lamb", "Calf", "Kid", "Foal"],
    ["How many months are there in a year?", "12", "10", "7", "52"],
    ["What is the opposite of hot?", "Cold", "Warm", "Wet", "Fast"],
    ["Which animal has a very long neck?", "Giraffe", "Elephant", "Zebra", "Hippo"],
    ["What do pandas mostly eat?", "Bamboo", "Fish", "Carrots", "Bananas"],
    ["What colour is Santa's suit?", "Red", "Green", "Blue", "Yellow"],
    ["What is 5 + 5?", "10", "8", "55", "12"],
  ]},
  xmas: { title: "Christmas Cracker", type: "mc", blurb: "Festive facts, films and traditions.", qs: [
    ["Which country started the tradition of decorated Christmas trees?", "Germany", "England", "Norway", "Canada"],
    ["Including Rudolph, how many reindeer pull Santa's sleigh?", "9", "8", "10", "12"],
    ["What is the name of the Grinch's dog?", "Max", "Buddy", "Rex", "Scruffy"],
    ["In Home Alone, where is the family flying to?", "Paris", "London", "Rome", "New York"],
    ["Who wrote 'A Christmas Carol'?", "Charles Dickens", "Jane Austen", "Roald Dahl", "Lewis Carroll"],
    ["What is Scrooge's first name?", "Ebenezer", "Jacob", "Bob", "Fred"],
    ["How do you say 'Merry Christmas' in Welsh?", "Nadolig Llawen", "Blwyddyn Newydd Dda", "Iechyd Da", "Bore Da"],
    ["Which plant do people kiss under at Christmas?", "Mistletoe", "Holly", "Ivy", "Poinsettia"],
    ["On the first day of Christmas, what did my true love give to me?", "A partridge in a pear tree", "Two turtle doves", "Five gold rings", "A golden goose"],
    ["Which band had a 1984 hit with 'Last Christmas'?", "Wham!", "Slade", "Wizzard", "Duran Duran"],
    ["Who had the original hit with 'White Christmas'?", "Bing Crosby", "Frank Sinatra", "Elvis Presley", "Dean Martin"],
    ["What colour are mistletoe berries?", "White", "Red", "Purple", "Orange"],
    ["What date is Boxing Day?", "26 December", "24 December", "27 December", "1 January"],
    ["In which year was the Queen's Christmas message first shown on TV?", "1957", "1952", "1966", "1972"],
    ["What was traditionally hidden in a Christmas pudding for luck?", "A coin", "A ring", "A button", "A bean"],
    ["In the film 'The Snowman', where do the boy and the snowman fly to?", "The North Pole", "Lapland", "The Moon", "London"],
    ["What three gifts did the Wise Men bring?", "Gold, frankincense and myrrh", "Gold, silver and bronze", "Myrrh, spices and silk", "Gold, oil and bread"],
    ["Which country sends London the Trafalgar Square Christmas tree each year?", "Norway", "Sweden", "Finland", "Denmark"],
    ["In 'The Nightmare Before Christmas', who is the Pumpkin King?", "Jack Skellington", "Oogie Boogie", "Sally", "Zero"],
  ]},
  telly: { title: "Telly & Films", type: "mc", blurb: "Box sets, classics and Saturday nights.", qs: [
    ["Which bear came from 'darkest Peru'?", "Paddington", "Winnie the Pooh", "Baloo", "Rupert"],
    ["In Gavin & Stacey, which town is Stacey from?", "Barry", "Swansea", "Cardiff", "Newport"],
    ["Who played Jack in the film Titanic?", "Leonardo DiCaprio", "Brad Pitt", "Matt Damon", "Johnny Depp"],
    ["In Only Fools and Horses, what is Del Boy's surname?", "Trotter", "Butcher", "Boycie", "Bishop"],
    ["What is the coffee shop called in Friends?", "Central Perk", "The Grind", "Java Joe's", "Monica's"],
    ["What type of fish is Nemo?", "Clownfish", "Goldfish", "Angelfish", "Pufferfish"],
    ["What is Doctor Who's time machine called?", "The TARDIS", "The Delorean", "The Time Ship", "The Vortex"],
    ["Which city is Doctor Who mostly made in?", "Cardiff", "London", "Manchester", "Bristol"],
    ["What is Shrek?", "An ogre", "A troll", "A giant", "A goblin"],
    ["In which village does Postman Pat deliver the post?", "Greendale", "Trumpton", "Camberwick Green", "Balamory"],
    ["Which TV family lives at 742 Evergreen Terrace?", "The Simpsons", "The Griffins", "The Flintstones", "The Belchers"],
    ["Who directed the film Jaws?", "Steven Spielberg", "George Lucas", "James Cameron", "Ridley Scott"],
    ["In Toy Story, what is the cowboy called?", "Woody", "Buzz", "Jessie", "Rex"],
    ["Which TV show is set in a big white baking tent?", "The Great British Bake Off", "MasterChef", "Come Dine With Me", "Saturday Kitchen"],
    ["What colour is the Teletubby Po?", "Red", "Yellow", "Green", "Purple"],
    ["Which Hogwarts house is Harry Potter sorted into?", "Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
    ["In Frozen, what is the snowman called?", "Olaf", "Sven", "Kristoff", "Hans"],
  ]},
  music: { title: "Music", type: "mc", blurb: "Bands, singers and instruments.", qs: [
    ["Freddie Mercury was the lead singer of which band?", "Queen", "Genesis", "The Who", "Wham!"],
    ["Which Welsh singer is famous for 'It's Not Unusual'?", "Tom Jones", "Shirley Bassey", "Bonnie Tyler", "Shakin' Stevens"],
    ["How many Beatles were there?", "4", "3", "5", "6"],
    ["Who is known as the 'King of Pop'?", "Michael Jackson", "Elvis Presley", "Prince", "Justin Timberlake"],
    ["Liam and Noel Gallagher were in which band?", "Oasis", "Blur", "Pulp", "Kasabian"],
    ["Which country did ABBA come from?", "Sweden", "Norway", "Denmark", "Finland"],
    ["Which Welsh band had the hit 'A Design for Life'?", "Manic Street Preachers", "Stereophonics", "Super Furry Animals", "Feeder"],
    ["Who is known as the 'Queen of Pop'?", "Madonna", "Kylie Minogue", "Beyoncé", "Cher"],
    ["How many strings does a violin have?", "4", "5", "6", "3"],
    ["Who sang 'Rocket Man'?", "Elton John", "David Bowie", "Rod Stewart", "Phil Collins"],
    ["Which Spice Girl was 'Posh Spice'?", "Victoria", "Geri", "Emma", "Mel B"],
    ["Ed Sheeran's albums are named after what?", "Maths symbols", "Colours", "Planets", "Numbers in Irish"],
    ["Which Welsh singer had a 2008 hit with 'Mercy'?", "Duffy", "Marina", "Charlotte Church", "Katherine Jenkins"],
    ["Which Welsh band had the hit 'Have a Nice Day'?", "Stereophonics", "Feeder", "Catatonia", "Manic Street Preachers"],
    ["Which city is Adele from?", "London", "Manchester", "Liverpool", "Birmingham"],
    ["Which Welsh singer became famous as a child with the album 'Voice of an Angel'?", "Charlotte Church", "Katherine Jenkins", "Duffy", "Aled Jones"],
  ]},
  sport: { title: "Sport", type: "mc", blurb: "Pitches, courses and the 19th hole.", qs: [
    ["How many players are on a football team on the pitch?", "11", "10", "12", "9"],
    ["In which sport would you use a shuttlecock?", "Badminton", "Squash", "Tennis", "Table tennis"],
    ["How many points is a try worth in rugby union?", "5", "3", "4", "7"],
    ["Which country has won the most men's football World Cups?", "Brazil", "Germany", "Italy", "Argentina"],
    ["What colour jersey does the leader of the Tour de France wear?", "Yellow", "Green", "Pink", "Polka dot"],
    ["What is the highest score with three darts?", "180", "150", "170", "200"],
    ["Which Welsh cyclist won the 2018 Tour de France?", "Geraint Thomas", "Mark Cavendish", "Chris Froome", "Bradley Wiggins"],
    ["What surface is Wimbledon played on?", "Grass", "Clay", "Hard court", "Carpet"],
    ["In snooker, how many points is the black ball worth?", "7", "5", "6", "10"],
    ["Which sport is played at Lord's?", "Cricket", "Rugby", "Tennis", "Golf"],
    ["How many holes are there on a standard golf course?", "18", "9", "12", "21"],
    ["At which course is the Grand National run?", "Aintree", "Cheltenham", "Ascot", "Chepstow"],
    ["In which city is the Principality Stadium?", "Cardiff", "Swansea", "Newport", "Llanelli"],
    ["What is the maximum break in snooker (normally)?", "147", "155", "100", "180"],
    ["Which horse won the Grand National three times?", "Red Rum", "Tiger Roll", "Desert Orchid", "Arkle"],
    ["In chess, which piece can only move diagonally?", "Bishop", "Rook", "Knight", "King"],
    ["How many players are on a rugby union team on the pitch?", "15", "13", "11", "7"],
  ]},
  food: { title: "Food & Drink", type: "mc", blurb: "For the ones who came for the buffet.", qs: [
    ["What is the main ingredient of guacamole?", "Avocado", "Pea", "Cucumber", "Courgette"],
    ["Bara brith is a type of what?", "Fruit loaf", "Cheese", "Soup", "Sausage"],
    ["Which country does paella come from?", "Spain", "Italy", "Portugal", "Mexico"],
    ["Which nut is used to make marzipan?", "Almond", "Walnut", "Hazelnut", "Cashew"],
    ["Which fruit is dried to make a prune?", "Plum", "Grape", "Apricot", "Fig"],
    ["Which spice is the most expensive by weight?", "Saffron", "Vanilla", "Cinnamon", "Paprika"],
    ["What is tofu made from?", "Soya beans", "Rice", "Chickpeas", "Wheat"],
    ["Which vegetable is used to make sauerkraut?", "Cabbage", "Onion", "Cucumber", "Carrot"],
    ["What is laverbread made from?", "Seaweed", "Leeks", "Oats", "Cockles"],
    ["Which pastry is used to make profiteroles?", "Choux", "Puff", "Filo", "Shortcrust"],
    ["Which drink is made from fermented apples?", "Cider", "Perry", "Mead", "Sherry"],
    ["Malbec wine is most famously from which country?", "Argentina", "Spain", "Australia", "Chile"],
    ["Which country does halloumi come from?", "Cyprus", "Greece", "Turkey", "Italy"],
    ["Welsh cakes are traditionally cooked on a what?", "Bakestone", "Oven tray", "Barbecue", "Toaster"],
    ["Welsh rarebit is cheese on what?", "Toast", "Crumpets", "Potatoes", "Pasta"],
    ["What colour is the inside of a pistachio?", "Green", "White", "Brown", "Yellow"],
  ]},
  tf: { title: "True or False", type: "tf", blurb: "Just two buttons. Anyone can play.", qs: [
    ["A group of crows is called a 'murder'.", true],
    ["Bananas are berries.", true],
    ["Strawberries are true berries.", false],
    ["You can see the Great Wall of China from the Moon with the naked eye.", false],
    ["There are more sheep than people in Wales.", true],
    ["Goldfish only have a three-second memory.", false],
    ["Lightning never strikes the same place twice.", false],
    ["A day on Venus is longer than its year.", true],
    ["Mount Everest is the tallest mountain measured from base to peak.", false],
    ["Sharks are mammals.", false],
    ["Hay-on-Wye is known as the 'Town of Books'.", true],
    ["An ostrich's eye is bigger than its brain.", true],
    ["The Eiffel Tower gets slightly taller in summer.", true],
    ["Penguins live at the North Pole.", false],
    ["A tomato is a fruit.", true],
    ["Bats are blind.", false],
    ["Mince pies originally had meat in them.", true],
    ["Rudolph the Red-Nosed Reindeer first appeared in a 1939 booklet.", true],
  ]},
  emoji: { title: "Emoji Films", type: "emoji", blurb: "Guess the film from the emojis.", qs: [
    ["🦁👑", "The Lion King", "Madagascar", "Jungle Book", "Tarzan"],
    ["❄️👸⛄", "Frozen", "Snow White", "Brave", "Tangled"],
    ["🚢🧊💔", "Titanic", "Jaws", "Pirates of the Caribbean", "Poseidon"],
    ["🦈🏖️🎣", "Jaws", "Finding Nemo", "Moana", "Shark Tale"],
    ["🐠🔍🌊", "Finding Nemo", "The Little Mermaid", "Shark Tale", "Moana"],
    ["🏠🎈👴", "Up", "Home Alone", "Coco", "Inside Out"],
    ["👻🔫🚒", "Ghostbusters", "Casper", "Beetlejuice", "Men in Black"],
    ["💍🧙‍♂️🌋", "The Lord of the Rings", "Harry Potter", "The Hobbit", "Narnia"],
    ["🦖🏝️🚙", "Jurassic Park", "King Kong", "Godzilla", "The Land Before Time"],
    ["🤖❤️🌱", "WALL-E", "Big Hero 6", "Robots", "The Iron Giant"],
    ["🏠👦🎄🪤", "Home Alone", "Elf", "The Polar Express", "Jingle All the Way"],
    ["🐭👨‍🍳🇫🇷", "Ratatouille", "Stuart Little", "Flushed Away", "The Rescuers"],
    ["🧸🤠🚀", "Toy Story", "Cars", "Monsters Inc", "Bolt"],
    ["👽🚲🌕", "E.T.", "Close Encounters", "Men in Black", "Paul"],
    ["🍫🏭🎫", "Charlie and the Chocolate Factory", "Chocolat", "Wonka", "Matilda"],
    ["⚡👓🧙", "Harry Potter", "The Wizard of Oz", "Fantastic Beasts", "Merlin"],
    ["🧝🎅🗽", "Elf", "The Santa Clause", "Arthur Christmas", "Miracle on 34th Street"],
    ["🚗⚡🏁", "Cars", "Fast & Furious", "Herbie", "Turbo"],
    ["🐧🕺❄️", "Happy Feet", "Penguins of Madagascar", "Surf's Up", "Ice Age"],
    ["🦍🏙️✈️", "King Kong", "Rampage", "Planet of the Apes", "Mighty Joe Young"],
  ]},
  closest: { title: "Closest Wins", type: "number", blurb: "Type a number. Nearest guess takes the points.", qs: [
    ["How tall is the Eiffel Tower, in metres?", 330, "metres"],
    ["In which year did the Titanic sink?", 1912, ""],
    ["How tall is Yr Wyddfa (Snowdon), in metres?", 1085, "metres"],
    ["How many bones are in an adult human body?", 206, "bones"],
    ["In which year was the first Harry Potter book published?", 1997, ""],
    ["How many keys are on a standard piano?", 88, "keys"],
    ["How many minutes are there in a week?", 10080, "minutes"],
    ["In which year did the Berlin Wall fall?", 1989, ""],
    ["In which year did people first walk on the Moon?", 1969, ""],
    ["At what temperature does water boil, in Fahrenheit?", 212, "°F"],
    ["In which year was Queen Elizabeth II crowned?", 1953, ""],
    ["In 'The Twelve Days of Christmas', how many gifts are given in total?", 364, "gifts"],
    ["In which year did Celtic Manor host the Ryder Cup?", 2010, ""],
    ["In which year did Cardiff's Millennium Stadium open?", 1999, ""],
    ["How many hearts does an octopus have?", 3, "hearts"],
    ["How many seconds are there in an hour?", 3600, "seconds"],
    ["In which year was the first Christmas card sent in the UK?", 1843, ""],
    ["How tall is Big Ben's tower, in metres?", 96, "metres"],
    ["How long is the Wales Coast Path, in miles?", 870, "miles"],
  ]},
  buzz: { title: "Buzzer Round", type: "buzz", blurb: "First to buzz answers out loud. Wrong answers lock you out.", qs: [
    ["What is the capital of Canada?", "Ottawa"],
    ["Which planet is famous for its rings?", "Saturn"],
    ["Who wrote Romeo and Juliet?", "William Shakespeare"],
    ["What is the square root of 144?", "12"],
    ["Which animal is called the 'ship of the desert'?", "Camel"],
    ["What is the largest country in the world by area?", "Russia"],
    ["Name the four countries of the UK.", "England, Scotland, Wales, Northern Ireland"],
    ["What is H2O better known as?", "Water"],
    ["Who wrote 'The Very Hungry Caterpillar'?", "Eric Carle"],
    ["Which city hosted the 2012 Olympics?", "London"],
    ["Which ocean lies between Europe and America?", "Atlantic"],
    ["What is the tallest animal in the world?", "Giraffe"],
    ["Who was the first person to walk on the Moon?", "Neil Armstrong"],
    ["What is the longest river in the world?", "The Nile"],
    ["What is the Welsh flag's dragon called in Welsh?", "Y Ddraig Goch"],
    ["How many sides does a 50p coin have?", "7"],
    ["What do you call a word that reads the same backwards, like 'level'?", "A palindrome"],
  ]},
};

// tune: [title, "NOTE:beats ...", wrong1, wrong2, wrong3, bpm]  (public-domain melodies, played as generated notes)
PACKS.tune = { title: "Name That Tune", type: "tune", blurb: "Listen to the TV. Name the tune before it finishes.", qs: [
  ["Jingle Bells", "E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:.5 E4:4 F4:1 F4:1 F4:1.5 F4:.5 F4:1 E4:1 E4:1 E4:.5 E4:.5 E4:1 D4:1 D4:1 E4:1 D4:2 G4:2", "Deck the Halls", "Jingle Bell Rock", "Sleigh Ride", 150],
  ["Twinkle Twinkle Little Star", "C4:1 C4:1 G4:1 G4:1 A4:1 A4:1 G4:2 F4:1 F4:1 E4:1 E4:1 D4:1 D4:1 C4:2", "Mary Had a Little Lamb", "Humpty Dumpty", "Hickory Dickory Dock", 120],
  ["Silent Night", "G4:1.5 A4:.5 G4:1 E4:3 G4:1.5 A4:.5 G4:1 E4:3 D5:2 D5:1 B4:3 C5:2 C5:1 G4:3", "O Holy Night", "Away in a Manger", "Once in Royal David's City", 110],
  ["Ode to Joy (Beethoven)", "E4:1 E4:1 F4:1 G4:1 G4:1 F4:1 E4:1 D4:1 C4:1 C4:1 D4:1 E4:1 E4:1.5 D4:.5 D4:2", "Für Elise", "Moonlight Sonata", "The Blue Danube", 130],
  ["Für Elise (Beethoven)", "E5:.5 D#5:.5 E5:.5 D#5:.5 E5:.5 B4:.5 D5:.5 C5:.5 A4:1.5 R:.5 C4:.5 E4:.5 A4:.5 B4:1.5 R:.5 E4:.5 G#4:.5 B4:.5 C5:1.5", "Moonlight Sonata", "Ode to Joy", "Clair de Lune", 130],
  ["Beethoven's 5th Symphony", "G4:.4 G4:.4 G4:.4 Eb4:2.5 R:.6 F4:.4 F4:.4 F4:.4 D4:3", "The Ride of the Valkyries", "Mozart's 40th Symphony", "The Four Seasons", 110],
  ["In the Hall of the Mountain King", "A3:.5 B3:.5 C4:.5 D4:.5 E4:.5 C4:.5 E4:1 D#4:.5 B3:.5 D#4:1 D4:.5 Bb3:.5 D4:1 A3:.5 B3:.5 C4:.5 D4:.5 E4:.5 C4:.5 E4:.5 A4:.5 G4:.5 E4:.5 C4:.5 E4:.5 G4:2", "The Flight of the Bumblebee", "The Ride of the Valkyries", "Dance of the Sugar Plum Fairy", 140],
  ["William Tell Overture", "B4:.25 B4:.25 B4:.5 B4:.25 B4:.25 B4:.5 B4:.25 B4:.25 E5:.5 F#5:.5 G5:1 R:.5 B4:.25 B4:.25 B4:.5 B4:.25 B4:.25 B4:.5 B4:.25 B4:.25 E5:.5 F#5:.5 G5:1", "The Can-Can", "Flight of the Bumblebee", "The Blue Danube", 120],
  ["Happy Birthday", "G4:.75 G4:.25 A4:1 G4:1 C5:1 B4:2 G4:.75 G4:.25 A4:1 G4:1 D5:1 C5:2 G4:.75 G4:.25 G5:1 E5:1 C5:1 B4:1 A4:2 F5:.75 F5:.25 E5:1 C5:1 D5:1 C5:2", "For He's a Jolly Good Fellow", "Auld Lang Syne", "Congratulations", 120],
  ["We Wish You a Merry Christmas", "D4:1 G4:1 G4:.5 A4:.5 G4:.5 F#4:.5 E4:1 E4:1 E4:1 A4:1 A4:.5 B4:.5 A4:.5 G4:.5 F#4:1 D4:1 D4:1 B4:1 B4:.5 C5:.5 B4:.5 A4:.5 G4:1 E4:1 D4:.5 D4:.5 E4:1 A4:1 F#4:1 G4:2", "Deck the Halls", "Jingle Bells", "Here We Come A-Wassailing", 150],
  ["Deck the Halls", "G4:1.5 F4:.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:.5 E4:.5 F4:.5 D4:.5 E4:1.5 D4:.5 C4:1 B3:1 C4:2", "We Wish You a Merry Christmas", "The Holly and the Ivy", "Ding Dong Merrily on High", 140],
  ["Mary Had a Little Lamb", "E4:1 D4:1 C4:1 D4:1 E4:1 E4:1 E4:2 D4:1 D4:1 D4:2 E4:1 G4:1 G4:2 E4:1 D4:1 C4:1 D4:1 E4:1 E4:1 E4:1 E4:1 D4:1 D4:1 E4:1 D4:1 C4:2", "Twinkle Twinkle Little Star", "Old MacDonald", "Row, Row, Row Your Boat", 140],
  ["Here Comes the Bride", "G4:1 C5:.75 C5:.25 C5:2 G4:1 D5:.75 B4:.25 C5:2", "Pachelbel's Canon", "The Wedding March", "Ave Maria", 90],
  ["Greensleeves", "A4:1 C5:2 D5:1 E5:1.5 F5:.5 E5:1 D5:2 B4:1 G4:1.5 A4:.5 B4:1 C5:2 A4:1 A4:1.5 G#4:.5 A4:1 B4:2 G#4:1 E4:2", "Scarborough Fair", "Danny Boy", "Auld Lang Syne", 170],
  ["Auld Lang Syne", "C4:1 F4:1.5 F4:.5 F4:1 A4:1 G4:1.5 F4:.5 G4:1 A4:1 F4:1.5 F4:.5 A4:1 C5:1 D5:3", "Danny Boy", "Greensleeves", "For He's a Jolly Good Fellow", 110],
  ["The Entertainer (Scott Joplin)", "D4:.25 D#4:.25 E4:.25 C5:.5 E4:.25 C5:.5 E4:.25 C5:1.25 C5:.25 D5:.25 D#5:.25 E5:.25 C5:.25 D5:.25 E5:.5 B4:.25 D5:.5 C5:1.5", "Maple Leaf Rag", "The Can-Can", "Flight of the Bumblebee", 100],
  ["Old MacDonald Had a Farm", "G4:1 G4:1 G4:1 D4:1 E4:1 E4:1 D4:2 B4:1 B4:1 A4:1 A4:1 G4:2", "The Farmer's in His Den", "Mary Had a Little Lamb", "Baa Baa Black Sheep", 150],
  ["Row, Row, Row Your Boat", "C4:1.5 C4:1.5 C4:1 D4:.5 E4:1.5 E4:1 D4:.5 E4:1 F4:.5 G4:3", "London Bridge Is Falling Down", "Twinkle Twinkle Little Star", "Frère Jacques", 200],
  ["Eine kleine Nachtmusik (Mozart)", "G4:1 D4:.5 G4:1 D4:.5 G4:.5 D4:.5 G4:.5 B4:.5 D5:2 C5:1 A4:.5 C5:1 A4:.5 C5:.5 A4:.5 F#4:.5 A4:.5 D4:2", "The Magic Flute", "Ode to Joy", "The Four Seasons", 130],
]};
// lines: [quote, film, wrong1, wrong2, wrong3]
PACKS.lines = { title: "Famous Lines", type: "lines", blurb: "Which film is the line from?", qs: [
  ["I'll be back.", "The Terminator", "Die Hard", "Rocky", "Top Gun"],
  ["May the Force be with you.", "Star Wars", "Star Trek", "Avatar", "Guardians of the Galaxy"],
  ["To infinity and beyond!", "Toy Story", "Wall-E", "The Incredibles", "Up"],
  ["There's no place like home.", "The Wizard of Oz", "Home Alone", "E.T.", "Mary Poppins"],
  ["You're gonna need a bigger boat.", "Jaws", "Titanic", "Finding Nemo", "Pirates of the Caribbean"],
  ["Houston, we have a problem.", "Apollo 13", "Gravity", "Armageddon", "The Martian"],
  ["Life is like a box of chocolates.", "Forrest Gump", "Charlie and the Chocolate Factory", "Chocolat", "Big"],
  ["I'm the king of the world!", "Titanic", "The Lion King", "King Kong", "Gladiator"],
  ["Just keep swimming.", "Finding Nemo", "The Little Mermaid", "Jaws", "Moana"],
  ["E.T. phone home.", "E.T.", "Close Encounters", "Men in Black", "Toy Story"],
  ["Keep the change, ya filthy animal.", "Home Alone", "Elf", "The Grinch", "Scrooged"],
  ["Son of a nutcracker!", "Elf", "The Nutcracker", "Home Alone", "The Santa Clause"],
  ["Here's Johnny!", "The Shining", "Psycho", "Jaws", "Ghostbusters"],
  ["Why so serious?", "The Dark Knight", "Joker", "Spider-Man", "The Mask"],
  ["You shall not pass!", "The Lord of the Rings", "Harry Potter", "The Hobbit", "Narnia"],
  ["I see dead people.", "The Sixth Sense", "Ghost", "Ghostbusters", "Beetlejuice"],
  ["Show me the money!", "Jerry Maguire", "The Wolf of Wall Street", "Wall Street", "Rocky"],
  ["Wax on, wax off.", "The Karate Kid", "Rocky", "Kung Fu Panda", "The Mighty Ducks"],
  ["Nobody puts Baby in a corner.", "Dirty Dancing", "Grease", "Footloose", "Mamma Mia!"],
  ["Ogres are like onions.", "Shrek", "Monsters, Inc.", "Frozen", "Tangled"],
  ["Adventure is out there!", "Up", "Toy Story", "Moana", "Cars"],
  ["Ohana means family.", "Lilo & Stitch", "Moana", "Encanto", "Coco"],
  ["It's alive!", "Frankenstein", "Dracula", "Jurassic Park", "Gremlins"],
]};
// hl: [question, option A, option B, index of correct (0/1), fact shown at the reveal]
PACKS.hl = { title: "Higher or Lower", type: "hl", blurb: "Two choices. Pick the bigger, taller or older one.", qs: [
  ["Which is taller?", "Pen y Fan", "The Shard", 0, "Pen y Fan is 886 m. The Shard is 310 m."],
  ["Which has more people?", "Wales", "Birmingham", 0, "Wales has about 3.1 million people, Birmingham about 1.1 million."],
  ["Which river is longer?", "River Wye", "River Thames", 1, "The Thames is about 215 miles, the Wye about 155."],
  ["Which is heavier?", "Blue whale", "African elephant", 0, "A blue whale can weigh over 20 times as much as an elephant."],
  ["Which came first?", "The first iPhone", "YouTube", 1, "YouTube launched in 2005, the iPhone in 2007."],
  ["Which country is bigger?", "Wales", "Belgium", 1, "Belgium is about 30,700 km², Wales about 20,800 km²."],
  ["Which planet is bigger?", "Neptune", "Earth", 0, "Neptune is about four times wider than Earth."],
  ["Which is faster?", "Cheetah", "Racehorse", 0, "A cheetah can hit about 70 mph, a racehorse about 44 mph."],
  ["Which was started first?", "Stonehenge", "The Great Pyramid", 0, "Stonehenge was begun around 3000 BC, the Great Pyramid around 2560 BC."],
  ["Which has more legs?", "Lobster", "Spider", 0, "A lobster has 10 legs, a spider has 8."],
  ["Which is taller?", "Big Ben's tower", "The Statue of Liberty", 0, "Big Ben's tower is 96 m. The Statue of Liberty is 93 m with its base."],
  ["Which is hotter?", "Surface of the Sun", "Lava", 0, "The Sun's surface is about 5,500°C, lava about 1,200°C."],
  ["Which is deeper?", "Loch Ness", "Lake Windermere", 0, "Loch Ness is about 230 m deep, Windermere about 67 m."],
  ["Which country is bigger?", "Canada", "USA", 0, "Canada is slightly bigger in total area."],
  ["Which started first?", "Doctor Who", "Coronation Street", 1, "Coronation Street began in 1960, Doctor Who in 1963."],
  ["Which is longer?", "A marathon", "The English Channel at its narrowest", 0, "A marathon is 26.2 miles, the narrowest part of the Channel about 21 miles."],
  ["Which is taller?", "A giraffe", "A double-decker bus", 0, "A tall giraffe reaches about 5.5 m, a double-decker about 4.4 m."],
]};
// odd: [odd one out, other1, other2, other3, reason shown at the reveal]
PACKS.odd = { title: "Odd One Out", type: "odd", blurb: "Four answers. Tap the one that doesn't belong.", qs: [
  ["Mars", "Jupiter", "Saturn", "Neptune", "The rest are giant planets."],
  ["Bristol", "Cardiff", "Swansea", "Newport", "The rest are in Wales."],
  ["Robin", "Penguin", "Ostrich", "Emu", "The rest can't fly."],
  ["Carrot", "Tomato", "Cucumber", "Pepper", "The rest are fruits, botanically."],
  ["Barcelona", "Paris", "Rome", "Berlin", "The rest are capital cities."],
  ["Nemo", "Woody", "Buzz", "Rex", "The rest are from Toy Story."],
  ["Shark", "Dolphin", "Whale", "Seal", "The rest are mammals."],
  ["Triangle", "Square", "Rectangle", "Rhombus", "The rest have four sides."],
  ["Flute", "Violin", "Cello", "Harp", "The rest have strings."],
  ["Shrek", "Elsa", "Anna", "Olaf", "The rest are from Frozen."],
  ["Water", "Copper", "Gold", "Iron", "The rest are metals."],
  ["Loch Lomond", "Snowdon", "Ben Nevis", "Scafell Pike", "The rest are mountains."],
  ["Golf", "Rugby", "Football", "Netball", "The rest are team sports."],
  ["Daffodil", "Holly", "Ivy", "Mistletoe", "The rest are Christmas plants."],
  ["Bambi", "Rudolph", "Dasher", "Comet", "The rest are Santa's reindeer."],
  ["9", "2", "3", "5", "The rest are prime numbers."],
  ["German", "Spanish", "French", "Italian", "The rest come from Latin."],
  ["Toaster", "Mouse", "Keyboard", "Monitor", "The rest are parts of a computer."],
]};

// ===== CONFIG (filled in at deploy) =====
const SUPA_URL = "https://uqwlmegbelyqtbegxqlz.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxd2xtZWdiZWx5cXRiZWd4cWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3NTYzNzAsImV4cCI6MjEwNzMzMjM3MH0.bSeF8_kwKqSrEj3n8Ku2OeSU8E5nMqJj0hcfgXb8cW0";
const CLAUDE_MODEL = "claude-sonnet-4-6";

const P = new URLSearchParams(location.search);
const LOCAL = P.has("local");
const $ = s => document.querySelector(s);
const app = $("#app");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const COLORS = ["#ff6b6b", "#4dabff", "#ffd43b", "#51e08a", "#c792ff", "#ff9f43", "#3ee6d6", "#ff7ac0", "#b5e853", "#a5b4cc", "#ffb4a2", "#8ce99a"];
const LET = ["A", "B", "C", "D"];
const ROUND_ORDER = ["gk", "kids", "xmas", "tune", "emoji", "lines", "tf", "hl", "odd", "closest", "telly", "music", "sport", "food", "buzz", "ai", "family"];
const DEFAULT_ROUNDS = ["gk", "kids", "tune", "xmas", "lines", "closest", "buzz"];
const KIDS_ORDER = ["kids", "kanimal", "kxmas", "ktune", "kemoji", "ktf", "khl", "kodd"];
const KIDS_DEFAULT = ["kids", "kanimal", "ktune", "kemoji", "ktf", "kxmas"];
const EXTRA = {
  ai: { title: "Anything Round", type: "mc", blurb: "Claude writes a round on any topic you choose." },
  family: { title: "Family Round", type: "mc", blurb: "Questions about your own family. How well do you know each other?" },
};
const roundInfo = id => PACKS[id] || EXTRA[id];
const isXmas = theme => theme === "xmas" || (theme === "auto" && new Date().getMonth() === 11);

const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const uid = () => Math.random().toString(36).slice(2, 10);
const roomCode = () => Array.from({ length: 4 }, () => "ABCDEFGHJKLMNPQRSTUVWXYZ"[Math.floor(Math.random() * 24)]).join("");
const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { } },
};
// Supabase RPC (host lock, sign-ups, admin)
async function rpc(fn, args) {
  const r = await fetch(SUPA_URL + "/rest/v1/rpc/" + fn, { method: "POST", headers: { "content-type": "application/json", apikey: SUPA_KEY, authorization: "Bearer " + SUPA_KEY }, body: JSON.stringify(args || {}) });
  if (!r.ok) throw new Error("rpc " + r.status);
  const t = await r.text(); return t ? JSON.parse(t) : null;
}
const deviceId = () => { let d = ls.get("buzzin_dev", ""); if (!d) { d = uid() + uid(); ls.set("buzzin_dev", d); } return d; };
const initials = n => (n || "?").trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
const baseUrl = () => location.origin + location.pathname;
const withLocal = u => LOCAL ? u + "&local=1" : u;

function toast(msg, ms = 2500) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => t.remove(), ms);
}

// Re-render without losing typing, ticks or focus
function paint(el, html) {
  const act = document.activeElement, aid = act && act.id, sel = act && act.selectionStart;
  const vals = {}, checks = {};
  el.querySelectorAll("input[id]").forEach(i => { if (i.type === "checkbox") checks[i.id] = i.checked; else vals[i.id] = i.value; });
  el.innerHTML = html;
  for (const id in vals) { const i = document.getElementById(id); if (i) i.value = vals[id]; }
  for (const id in checks) { const i = document.getElementById(id); if (i) i.checked = checks[id]; }
  if (aid) { const n = document.getElementById(aid); if (n) { n.focus(); try { if (sel != null) n.setSelectionRange(sel, sel); } catch (e) { } } }
}

const fmtNum = (n, unit) => unit ? Number(n).toLocaleString("en-GB") + " " + unit : String(n);

// Tiny IndexedDB wrapper: 'myfam' = family questions made on this phone, 'tvfam' = questions the TV has received
const IDB = {
  db: null,
  open() {
    return this.db || (this.db = new Promise((res, rej) => {
      const r = indexedDB.open("buzzin", 1);
      r.onupgradeneeded = () => { r.result.createObjectStore("myfam", { keyPath: "qid" }); r.result.createObjectStore("tvfam", { keyPath: "qid" }); };
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    }));
  },
  async req(store, mode, fn) {
    const db = await this.open();
    return new Promise((res, rej) => { const q = fn(db.transaction(store, mode).objectStore(store)); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); });
  },
  all(store) { return this.req(store, "readonly", o => o.getAll()).catch(() => []); },
  put(store, v) { return this.req(store, "readwrite", o => o.put(v)); },
  del(store, k) { return this.req(store, "readwrite", o => o.delete(k)); },
};
async function compressPhoto(file) {
  const url = URL.createObjectURL(file);
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
  let max = 800, q = .72, out = "";
  for (let k = 0; k < 7; k++) {
    const sc = Math.min(1, max / Math.max(img.width, img.height));
    const c = document.createElement("canvas"); c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    out = c.toDataURL("image/jpeg", q);
    if (out.length < 140000) break;
    max *= .8; q = Math.max(.4, q - .06);
  }
  URL.revokeObjectURL(url);
  return out;
}
const FAM_KINDS = {
  photo: { icon: "📷", label: "Who's in the photo?", def: "Who's in the photo?" },
  year: { icon: "📅", label: "Guess the year", def: "What year was this photo taken?" },
  mc: { icon: "❓", label: "Question with choices", def: "" },
  tf: { icon: "✅", label: "True or false", def: "" },
};
const famAnswer = q => q.kind === "year" ? String(q.year) : q.kind === "tf" ? (q.tf ? "True" : "False") : q.a;

// Family Round editor (phone). Questions are saved on this phone only.
function makeFamEditor(onChange) {
  const E = { list: [], mode: "list", draft: null, confirmDel: false, msg: "" };
  E.load = async () => { E.list = (await IDB.all("myfam")).sort((a, b) => (a.sort || 0) - (b.sort || 0)); };
  const v = id => { const el = document.getElementById(id); return el ? el.value.trim() : ""; };
  E.html = (standalone) => {
    if (E.mode === "list") {
      return `<div class="card"><h2>Family Round</h2>
        <p class="muted">Questions about your own family. They're saved on this phone and sent to the TV when you host. Once they've been played, a second game skips them.</p>
        <div class="fqlist">${E.list.map(q => `<div class="fq">${q.photo ? `<img src="${q.photo}" alt="">` : `<span class="fqi">${FAM_KINDS[q.kind].icon}</span>`}<div class="fqt"><b>${esc(q.text || FAM_KINDS[q.kind].def)}</b><small>Answer: ${esc(famAnswer(q))}</small></div><button class="btn" data-fe="edit" data-id="${q.qid}">Edit</button></div>`).join("") || `<p class="muted">No questions yet. Add a few, ideally 5 to 10.</p>`}</div>
        <button class="btn gold big" data-fe="add">Add a question</button>
        ${standalone ? "" : `<button class="btn big" data-fe="done">Done</button>`}
        ${E.msg ? `<p class="muted center">${esc(E.msg)}</p>` : ""}</div>`;
    }
    if (E.mode === "pick") {
      return `<div class="card"><h2>What kind of question?</h2>
        ${Object.entries(FAM_KINDS).map(([k, x]) => `<button class="btn big kindbtn" data-fe="kind" data-kind="${k}"><span>${x.icon}</span>${x.label}</button>`).join("")}
        <button class="btn big" data-fe="cancel">Cancel</button></div>`;
    }
    const d = E.draft, k = d.kind, needPhoto = k === "photo" || k === "year";
    const photo = `<div class="fphoto">${d.photo ? `<img src="${d.photo}" alt="">` : `<span class="muted">${needPhoto ? "Add a photo" : "Photo (optional)"}</span>`}
      <label class="btn">${d.photo ? "Change photo" : "Choose photo"}<input type="file" accept="image/*" data-fe-file hidden></label>${d.photo && !needPhoto ? `<button class="btn" data-fe="nophoto">Remove</button>` : ""}</div>`;
    let f = "";
    if (k === "photo") f = `${photo}<label>Question<input id="f-text" value="${esc(d.text || FAM_KINDS.photo.def)}"></label>
      <label>Right answer<input id="f-a" value="${esc(d.a || "")}" placeholder="e.g. Grandad"></label>
      <label>Other names to choose from (at least one)<input id="f-w1" value="${esc(d.w[0] || "")}" placeholder="e.g. Uncle Dai"><input id="f-w2" value="${esc(d.w[1] || "")}" placeholder="optional"><input id="f-w3" value="${esc(d.w[2] || "")}" placeholder="optional"></label>`;
    if (k === "year") f = `${photo}<label>Question<input id="f-text" value="${esc(d.text || FAM_KINDS.year.def)}"></label>
      <label>The year<input id="f-year" type="number" inputmode="numeric" value="${esc(d.year || "")}" placeholder="e.g. 1994"></label><p class="muted" style="font-size:14px">Closest guess wins, like the Closest Wins round.</p>`;
    if (k === "mc") f = `<label>Question<input id="f-text" value="${esc(d.text || "")}" placeholder="e.g. Where did Mum and Dad go on honeymoon?"></label>
      <label>Right answer<input id="f-a" value="${esc(d.a || "")}"></label>
      <label>Wrong answers (at least one)<input id="f-w1" value="${esc(d.w[0] || "")}"><input id="f-w2" value="${esc(d.w[1] || "")}" placeholder="optional"><input id="f-w3" value="${esc(d.w[2] || "")}" placeholder="optional"></label>${photo}`;
    if (k === "tf") f = `<label>Statement<input id="f-text" value="${esc(d.text || "")}" placeholder="e.g. Grandad once met the Queen"></label>
      <div class="row"><button class="btn ${d.tf ? "gold" : ""}" data-fe="tf" data-val="1">True</button><button class="btn ${d.tf === false ? "gold" : ""}" data-fe="tf" data-val="0">False</button></div>${photo}`;
    return `<div class="card"><h2>${FAM_KINDS[k].icon} ${FAM_KINDS[k].label}</h2>${f}
      ${E.msg ? `<p style="color:var(--bad);font-weight:700">${esc(E.msg)}</p>` : ""}
      <button class="btn gold big" data-fe="save">Save question</button>
      <div class="row"><button class="btn" data-fe="cancel">Cancel</button>${d.qid ? (E.confirmDel ? `<button class="btn bad" data-fe="delyes">Yes, delete it</button>` : `<button class="btn" data-fe="del">Delete</button>`) : ""}</div></div>`;
  };
  function readDraft() {
    const d = E.draft;
    if (document.getElementById("f-text")) d.text = v("f-text");
    if (document.getElementById("f-a")) d.a = v("f-a");
    if (document.getElementById("f-w1")) d.w = [v("f-w1"), v("f-w2"), v("f-w3")];
    if (document.getElementById("f-year")) d.year = v("f-year");
  }
  E.click = async (e, rerender) => {
    const b = e.target.closest("[data-fe]"); if (!b) return false;
    const a = b.dataset.fe; E.msg = "";
    if (a === "add") { E.mode = "pick"; }
    else if (a === "kind") { E.draft = { kind: b.dataset.kind, text: "", a: "", w: ["", "", ""], year: "", tf: null, photo: null }; E.mode = "edit"; E.confirmDel = false; }
    else if (a === "edit") { const q = E.list.find(x => x.qid === b.dataset.id); E.draft = JSON.parse(JSON.stringify(q)); E.draft.w = (E.draft.w || []).concat(["", "", ""]).slice(0, 3); E.mode = "edit"; E.confirmDel = false; }
    else if (a === "cancel") { E.mode = "list"; E.draft = null; }
    else if (a === "done") { E.mode = "list"; rerender(true); return true; }
    else if (a === "tf") { readDraft(); E.draft.tf = b.dataset.val === "1"; }
    else if (a === "nophoto") { readDraft(); E.draft.photo = null; }
    else if (a === "del") { readDraft(); E.confirmDel = true; }
    else if (a === "delyes") { await IDB.del("myfam", E.draft.qid); await E.load(); E.mode = "list"; E.draft = null; E.msg = "Question deleted"; onChange && onChange(); }
    else if (a === "save") {
      readDraft(); const d = E.draft, k = d.kind;
      const wrong = (d.w || []).filter(Boolean);
      if ((k === "photo" || k === "year") && !d.photo) E.msg = "Add a photo first.";
      else if ((k === "mc" || k === "tf") && !d.text) E.msg = k === "tf" ? "Write the statement." : "Write the question.";
      else if ((k === "photo" || k === "mc") && !d.a) E.msg = "Add the right answer.";
      else if ((k === "photo" || k === "mc") && !wrong.length) E.msg = "Add at least one other answer to choose from.";
      else if (k === "year" && !/^\d{3,4}$/.test(d.year)) E.msg = "Enter the year, e.g. 1994.";
      else if (k === "tf" && d.tf == null) E.msg = "Pick True or False.";
      if (E.msg) { rerender(); return true; }
      const isNew = !d.qid;
      const q = { qid: d.qid || uid(), kind: k, text: d.text || FAM_KINDS[k].def, a: d.a, w: wrong.slice(0, 3), year: d.year ? Number(d.year) : null, tf: d.tf, photo: d.photo || null, sort: d.sort ?? Date.now(), v: Date.now() };
      await IDB.put("myfam", q); await E.load(); E.mode = "list"; E.draft = null; E.msg = isNew ? "Question added" : "Question saved"; onChange && onChange();
    }
    rerender(); return true;
  };
  E.file = async (e, rerender) => {
    if (!e.target.matches("[data-fe-file]") || !e.target.files[0]) return false;
    readDraft(); E.msg = "Shrinking photo…"; rerender();
    try { E.draft.photo = await compressPhoto(e.target.files[0]); E.msg = ""; } catch (err) { E.msg = "Couldn't read that photo. Try another."; }
    rerender(); return true;
  };
  return E;
}

async function wakeLock() { try { if (navigator.wakeLock) await navigator.wakeLock.request("screen"); } catch (e) { } }
// ===== KIDS' GAME PACKS (only used when "Kids' game" is chosen in the lobby) =====
PACKS.kanimal = { title: "Animal Antics", type: "mc", blurb: "All about animals. Kids only!", qs: [
  ["Which animal is called the king of the jungle?", "Lion", "Tiger", "Elephant", "Bear"],
  ["What is a baby dog called?", "Puppy", "Kitten", "Calf", "Foal"],
  ["What is a baby cat called?", "Kitten", "Puppy", "Cub", "Lamb"],
  ["What is a baby sheep called?", "Lamb", "Chick", "Calf", "Piglet"],
  ["Which animal has a long trunk?", "Elephant", "Giraffe", "Hippo", "Rhino"],
  ["Which animal has black and white stripes?", "Zebra", "Horse", "Panda", "Tiger"],
  ["Which animal says 'oink'?", "Pig", "Cow", "Duck", "Dog"],
  ["What do bees make?", "Honey", "Milk", "Jam", "Butter"],
  ["Which bird can't fly but is great at swimming?", "Penguin", "Parrot", "Owl", "Robin"],
  ["Which animal hops and carries its baby in a pouch?", "Kangaroo", "Rabbit", "Frog", "Monkey"],
  ["Which is the tallest animal?", "Giraffe", "Elephant", "Horse", "Camel"],
  ["Where does a fish live?", "In water", "In a tree", "Underground", "In a nest"],
  ["What does a frog start life as?", "A tadpole", "A caterpillar", "A chick", "A puppy"],
  ["Which animal is famous for being very slow?", "Snail", "Cheetah", "Rabbit", "Horse"],
  ["How many legs does a bird have?", "2", "4", "6", "8"],
  ["Which animal sleeps hanging upside down?", "Bat", "Owl", "Cat", "Squirrel"],
  ["What colour is a polar bear?", "White", "Brown", "Black", "Orange"],
  ["Which animal has a long neck and spots?", "Giraffe", "Leopard", "Zebra", "Cheetah"],
]};
PACKS.kemoji = { title: "Cartoon Emojis", type: "emoji", blurb: "Guess the cartoon film from the emojis.", qs: [
  ["🐠🔍", "Finding Nemo", "Shark Tale", "The Little Mermaid", "Moana"],
  ["🤠🚀🧸", "Toy Story", "Cars", "Up", "Monsters, Inc."],
  ["🏠🎈👴", "Up", "Toy Story", "Coco", "Inside Out"],
  ["🚗⚡🏁", "Cars", "Planes", "Turbo", "Zootropolis"],
  ["👹🚪😱", "Monsters, Inc.", "Shrek", "Coco", "Hotel Transylvania"],
  ["🐼🥋", "Kung Fu Panda", "Zootropolis", "Madagascar", "The Jungle Book"],
  ["🧜‍♀️🐚", "The Little Mermaid", "Moana", "Finding Nemo", "Frozen"],
  ["🍯🐻🎈", "Winnie the Pooh", "Paddington", "Brave", "The Jungle Book"],
  ["🐻🧳🍊", "Paddington", "Winnie the Pooh", "Brave", "The Gruffalo"],
  ["🟢👹🐴", "Shrek", "Monsters, Inc.", "The Grinch", "Tangled"],
  ["🐘👂✈️", "Dumbo", "Bambi", "The Jungle Book", "Madagascar"],
  ["🦌🐰🌸", "Bambi", "Frozen", "The Lion King", "Robin Hood"],
  ["🐀👨‍🍳🍝", "Ratatouille", "Stuart Little", "Lady and the Tramp", "Cars"],
  ["🤖🌱🚀", "Wall-E", "Big Hero 6", "Toy Story", "Robots"],
  ["🧠😀😢😡", "Inside Out", "Up", "Coco", "Encanto"],
  ["🏰👸🍎", "Snow White", "Cinderella", "Sleeping Beauty", "Tangled"],
  ["👠🎃🕛", "Cinderella", "Snow White", "Frozen", "Beauty and the Beast"],
  ["🌹👹🏰", "Beauty and the Beast", "Shrek", "Sleeping Beauty", "Brave"],
  ["💇‍♀️🗼🦎", "Tangled", "Brave", "Frozen", "Moana"],
  ["🦁👑", "The Lion King", "Madagascar", "The Jungle Book", "Robin Hood"],
  ["❄️👸⛄", "Frozen", "Snow White", "Brave", "Tangled"],
]};
PACKS.ktf = { title: "Kids' True or False", type: "tf", blurb: "Just two buttons. True or false?", qs: [
  ["Cows say moo.", true],
  ["Fish can climb trees.", false],
  ["The Sun is a star.", true],
  ["Penguins live at the North Pole.", false],
  ["Spiders have 8 legs.", true],
  ["Carrots grow under the ground.", true],
  ["Snowmen melt when it gets warm.", true],
  ["Ripe tomatoes are blue.", false],
  ["Dogs can fly.", false],
  ["Bananas turn yellow when they're ripe.", true],
  ["There are 7 days in a week.", true],
  ["The Moon is made of cheese.", false],
  ["Ice is frozen water.", true],
  ["Elephants are smaller than mice.", false],
  ["Owls are awake at night.", true],
  ["Santa's sleigh is pulled by reindeer.", true],
  ["A triangle has 4 sides.", false],
  ["Plants need water to grow.", true],
]};
PACKS.khl = { title: "Bigger or Smaller", type: "hl", blurb: "Two choices. Which one is it?", qs: [
  ["Which is bigger?", "An elephant", "A mouse", 0, "An elephant can weigh as much as five cars!"],
  ["Which is taller?", "A giraffe", "A door", 0, "A giraffe can be more than twice as tall as a door."],
  ["Which is faster?", "A cheetah", "A tortoise", 0, "A cheetah can run about 70 mph. A tortoise walks less than 1 mph."],
  ["Which has more legs?", "A spider", "A dog", 0, "A spider has 8 legs. A dog has 4."],
  ["Which is bigger?", "The Sun", "The Earth", 0, "You could fit about a million Earths inside the Sun!"],
  ["Which is heavier?", "A blue whale", "A bus", 0, "A blue whale weighs more than 10 double-decker buses."],
  ["Which has more wheels?", "A bike", "A car", 1, "A car has 4 wheels. A bike has 2."],
  ["Which was bigger?", "A T. rex", "A chicken", 0, "A T. rex was about 12 metres long. Chickens are related to dinosaurs, though!"],
  ["Which lives longer?", "A tortoise", "A hamster", 0, "Tortoises can live over 100 years. Hamsters live about 2 or 3."],
  ["Which is bigger?", "A football", "A tennis ball", 0, "A football is about three times wider than a tennis ball."],
  ["Which has more days?", "A week", "A month", 1, "A week has 7 days. A month has about 30."],
  ["Which is higher?", "A mountain", "A tree", 0, "Mountains can be thousands of metres high. The tallest trees are about 115 metres."],
]};
PACKS.kodd = { title: "Kids' Odd One Out", type: "odd", blurb: "Four answers. Tap the one that doesn't belong.", qs: [
  ["Cat", "Apple", "Banana", "Orange", "The rest are fruits."],
  ["Car", "Dog", "Cat", "Rabbit", "The rest are animals."],
  ["Spoon", "Red", "Blue", "Green", "The rest are colours."],
  ["Fish", "Robin", "Owl", "Eagle", "The rest are birds."],
  ["Banana", "Hat", "Scarf", "Gloves", "The rest keep you warm in winter."],
  ["Circle", "Square", "Triangle", "Rectangle", "The rest have straight sides."],
  ["Pizza", "Bus", "Train", "Car", "The rest are things you can ride in."],
  ["7", "2", "4", "6", "The rest are even numbers."],
  ["Teddy", "Sun", "Moon", "Stars", "The rest are up in the sky."],
  ["Lion", "Shark", "Dolphin", "Octopus", "The rest live in the sea."],
  ["Carrot", "Strawberry", "Cherry", "Raspberry", "The rest are red fruits."],
  ["Bed", "Snowman", "Snowflake", "Icicle", "The rest are made of snow or ice."],
  ["Pencil", "Guitar", "Drum", "Piano", "The rest are musical instruments."],
  ["Elsa", "Woody", "Buzz", "Jessie", "The rest are from Toy Story."],
  ["Dog", "Butterfly", "Bee", "Ladybird", "The rest are insects."],
  ["Hammer", "Cup", "Plate", "Bowl", "The rest go on the table at dinner."],
  ["Wellies", "Sandals", "Swimsuit", "Sunglasses", "The rest are for sunny days."],
]};
PACKS.kxmas = { title: "Christmas Elves", type: "mc", blurb: "Christmas questions for the little ones.", qs: [
  ["What colour is Santa's suit?", "Red", "Green", "Blue", "Yellow"],
  ["What goes on top of a Christmas tree?", "A star or an angel", "A hat", "A sock", "A carrot"],
  ["Where does Santa live?", "The North Pole", "The South Pole", "The Moon", "Spain"],
  ["Which animals pull Santa's sleigh?", "Reindeer", "Horses", "Dogs", "Cows"],
  ["What is a snowman's nose usually made of?", "A carrot", "A banana", "A sausage", "A pencil"],
  ["What does Santa say?", "Ho ho ho!", "Ha ha ha!", "Hee hee hee!", "Boo!"],
  ["Who helps Santa make the toys?", "Elves", "Fairies", "Pirates", "Dragons"],
  ["What do children hang up on Christmas Eve?", "A stocking", "A coat", "A picture", "A towel"],
  ["Which reindeer has a shiny red nose?", "Rudolph", "Dasher", "Comet", "Blitzen"],
  ["What date is Christmas Day?", "25th December", "1st January", "31st October", "14th February"],
  ["What do we leave out for Santa?", "A mince pie", "Fish fingers", "Crisps", "An ice lolly"],
  ["Which of these is a Christmas plant?", "Holly", "Daisy", "Sunflower", "Tulip"],
  ["How does Santa get into the house?", "Down the chimney", "Through the cat flap", "Through the letterbox", "By bus"],
  ["What do you pull at Christmas dinner that goes bang?", "A cracker", "A balloon", "A sock", "A spoon"],
  ["What falls from the sky when it's very cold?", "Snow", "Sweets", "Leaves", "Feathers"],
]};
// Nursery rhymes reuse the melodies from Name That Tune, with kid-friendly wrong answers
{
  const tq = t => PACKS.tune.qs.find(q => q[0] === t);
  const k = (t, w1, w2, w3) => { const q = tq(t); return [q[0], q[1], w1, w2, w3, q[5]]; };
  PACKS.ktune = { title: "Nursery Rhyme Tunes", type: "tune", blurb: "Listen to the TV. Which song is it?", qs: [
    k("Twinkle Twinkle Little Star", "Mary Had a Little Lamb", "Humpty Dumpty", "Row, Row, Row Your Boat"),
    k("Mary Had a Little Lamb", "Twinkle Twinkle Little Star", "Old MacDonald Had a Farm", "London Bridge Is Falling Down"),
    k("Old MacDonald Had a Farm", "Baa Baa Black Sheep", "Mary Had a Little Lamb", "Frère Jacques"),
    k("Row, Row, Row Your Boat", "London Bridge Is Falling Down", "Twinkle Twinkle Little Star", "Frère Jacques"),
    k("Jingle Bells", "We Wish You a Merry Christmas", "Happy Birthday", "Old MacDonald Had a Farm"),
    k("We Wish You a Merry Christmas", "Jingle Bells", "Happy Birthday", "Twinkle Twinkle Little Star"),
    k("Happy Birthday", "Twinkle Twinkle Little Star", "Jingle Bells", "Row, Row, Row Your Boat"),
    ["Frère Jacques", "C4:1 D4:1 E4:1 C4:1 C4:1 D4:1 E4:1 C4:1 E4:1 F4:1 G4:2 E4:1 F4:1 G4:2", "London Bridge Is Falling Down", "Row, Row, Row Your Boat", "Old MacDonald Had a Farm", 130],
    ["London Bridge Is Falling Down", "G4:1.5 A4:.5 G4:1 F4:1 E4:1 F4:1 G4:2 D4:1 E4:1 F4:2 E4:1 F4:1 G4:2 G4:1.5 A4:.5 G4:1 F4:1 E4:1 F4:1 G4:2 D4:2 G4:2 E4:1 C4:3", "Frère Jacques", "Mary Had a Little Lamb", "Twinkle Twinkle Little Star", 150],
    ["Incy Wincy Spider", "G3:.5 C4:1 C4:.5 C4:1 D4:.5 E4:1.5 E4:1 E4:.5 D4:1 C4:.5 D4:1 E4:.5 C4:1.5", "Humpty Dumpty", "Twinkle Twinkle Little Star", "Row, Row, Row Your Boat", 170],
    ["Pop Goes the Weasel", "C4:1 C4:.5 D4:1 D4:.5 E4:.5 G4:.5 E4:.5 C4:1 G3:.5 C4:1 C4:.5 D4:1 D4:.5 E4:1.5 C4:1", "Old MacDonald Had a Farm", "Frère Jacques", "London Bridge Is Falling Down", 170],
  ]};
}

document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") wakeLock(); });

// ===== SOUND & MUSIC (all generated in the browser, no audio files) =====
const NOTE_BASE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
function parseNotes(str) {
  return str.trim().split(/\s+/).map(tok => {
    const [n, b] = tok.split(":");
    if (n === "R") return [0, +b];
    const m = n.match(/^([A-G])(#|b)?(\d)$/);
    return [12 * (+m[3] + 1) + NOTE_BASE[m[1]] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0), +b];
  });
}
const Sound = {
  ctx: null, master: null, sfx: null, mus: null, noiseBuf: null, vol: .8, musicOn: true, melNodes: [],
  init() {
    try {
      if (!this.ctx) {
        const C = window.AudioContext || window.webkitAudioContext; this.ctx = new C();
        this.master = this.ctx.createGain(); this.master.connect(this.ctx.destination);
        this.sfx = this.ctx.createGain(); this.sfx.connect(this.master);
        this.mus = this.ctx.createGain(); this.mus.connect(this.master);
        this.setVol(this.vol, this.musicOn);
      }
      if (this.ctx.state === "suspended") this.ctx.resume();
    } catch (e) { }
  },
  setVol(v, m) { this.vol = v; this.musicOn = m; if (this.master) { this.master.gain.value = v; this.mus.gain.value = m ? .5 : 0; } },
  osc(f, t, d, type, v, bus, attack = .005) {
    const c = this.ctx; if (!c) return null;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(v, t + attack); g.gain.exponentialRampToValueAtTime(.0001, t + Math.max(d, attack + .02));
    o.connect(g); g.connect(bus || this.sfx); o.start(t); o.stop(t + d + .05); return o;
  },
  noise(t, d, v, hp = 6000, bus) {
    const c = this.ctx; if (!c) return;
    if (!this.noiseBuf) { const b = c.createBuffer(1, c.sampleRate, c.sampleRate), a = b.getChannelData(0); for (let i = 0; i < a.length; i++) a[i] = Math.random() * 2 - 1; this.noiseBuf = b; }
    const s = c.createBufferSource(); s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = "highpass"; f.frequency.value = hp;
    const g = c.createGain(); g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    s.connect(f); f.connect(g); g.connect(bus || this.sfx); s.start(t, Math.random() * .5); s.stop(t + d + .05);
  },
  kick(t, bus) {
    const c = this.ctx; if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(45, t + .15);
    g.gain.setValueAtTime(.45, t); g.gain.exponentialRampToValueAtTime(.0001, t + .2);
    o.connect(g); g.connect(bus || this.sfx); o.start(t); o.stop(t + .25);
  },
  tone(f, d, type = "sine", v = .15, when = 0) { if (this.ctx) this.osc(f, this.ctx.currentTime + when, d, type, v, this.sfx); },
  tick() { this.tone(1200, .06, "square", .04); },
  join() { this.tone(660, .12, "triangle", .12); this.tone(990, .15, "triangle", .12, .08); },
  good() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, .22, "triangle", .14, i * .09)); },
  bad() { this.tone(200, .35, "sawtooth", .07); this.tone(150, .4, "sawtooth", .07, .15); },
  buzz() { this.tone(180, .5, "square", .14); this.tone(184, .5, "square", .1); },
  whoosh() { [300, 450, 600, 800].forEach((f, i) => this.tone(f, .12, "sine", .08, i * .05)); },
  joker() { [392, 523, 659, 784, 1047].forEach((f, i) => this.tone(f, .15, "square", .06, i * .06)); },
  fanfare() { [[523, 0], [659, .15], [784, .3], [1047, .45], [784, .7], [1047, .85]].forEach(([f, w]) => this.tone(f, .35, "triangle", .16, w)); },
  drumroll() {
    const c = this.ctx; if (!c) return; const t0 = c.currentTime;
    for (let i = 0; i < 30; i++) this.noise(t0 + i * .04, .05, .03 + i * .005, 1200);
    this.noise(t0 + 1.22, 1.1, .22, 5000);
  },
  melody(notes, bpm = 120, limit) {
    if (!this.ctx) return 0;
    this.stopMelody();
    const spb = 60 / bpm; let t = this.ctx.currentTime + .1;
    for (const [m, b] of (limit ? notes.slice(0, limit) : notes)) {
      const d = b * spb;
      if (m) {
        const o1 = this.osc(mtof(m), t, Math.max(.15, d * .95), "triangle", .3, this.sfx, .01);
        const o2 = this.osc(mtof(m) * 2, t, Math.max(.1, d * .5), "sine", .07, this.sfx, .01);
        this.melNodes.push(o1, o2);
      }
      t += d;
    }
    return t - this.ctx.currentTime;
  },
  stopMelody() { this.melNodes.forEach(o => { try { o && o.stop(); } catch (e) { } }); this.melNodes = []; },
};
// Original background tracks, sequenced in 16th notes
const TRACKS = {
  lobby: {
    bpm: 112, len: 64, play(s, t, st) {
      const B = Sound.mus, i = s % 16, ch = [[48, 0], [45, 1], [41, 0], [43, 0]][Math.floor(s / 16)];
      const root = ch[0], tri = ch[1] ? [0, 3, 7] : [0, 4, 7];
      if (i === 0 || i === 6 || i === 8 || i === 14) Sound.osc(mtof(root - 12), t, st * 1.8, "triangle", .22, B);
      if (i % 2 === 0) Sound.osc(mtof(root + 12 + tri[[0, 1, 2, 1, 2, 1, 0, 2][i / 2]]), t, st * 1.5, "square", .03, B);
      if (i === 0 || i === 8) Sound.kick(t, B);
      if (i === 4 || i === 12) Sound.noise(t, .12, .1, 2000, B);
      if (i % 2 === 1) Sound.noise(t, .03, .04, 8000, B);
      if (s >= 32 && [0, 3, 6, 10].includes(i)) Sound.osc(mtof(root + 24 + tri[[2, 1, 0, 1][[0, 3, 6, 10].indexOf(i)]]), t, st * 2.5, "sine", .06, B, .01);
    }
  },
  xmas: {
    bpm: 120, len: 64, play(s, t, st) {
      const B = Sound.mus, i = s % 16, ch = [[43, 0], [40, 1], [36, 0], [38, 0]][Math.floor(s / 16)];
      const root = ch[0], tri = ch[1] ? [0, 3, 7] : [0, 4, 7];
      if (i === 0 || i === 8) Sound.osc(mtof(root - 12), t, st * 3, "triangle", .22, B);
      if (i % 2 === 0) Sound.noise(t, .05, i % 4 === 0 ? .07 : .035, 9000, B); // sleigh bells
      if (i % 4 === 0) Sound.osc(mtof(root + 24 + tri[(i / 4) % 3]), t, st * 3, "sine", .08, B, .005); // bell arpeggio
      if (i % 4 === 2) Sound.osc(mtof(root + 31), t, st * 1.5, "sine", .03, B, .005);
      if (i === 0) Sound.kick(t, B);
    }
  },
  think: {
    bpm: 96, len: 32, play(s, t, st) {
      const B = Sound.mus, i = s % 16;
      if (i % 2 === 0) Sound.osc(mtof(s < 16 ? 45 : 52), t, st * 1.6, "triangle", .16, B);
      if (i % 4 === 0) Sound.noise(t, .02, .08, 9000, B);
      if (s === 0 || s === 16) Sound.osc(mtof(64), t, st * 7, "sine", .04, B, .3);
      if (s === 8 || s === 24) Sound.osc(mtof(65), t, st * 7, "sine", .04, B, .3);
    }
  },
};
const Music = {
  cur: null, step: 0, nextT: 0, timer: null,
  play(name) {
    if (this.cur === name) return;
    this.cur = name; this.step = 0;
    if (Sound.ctx) this.nextT = Sound.ctx.currentTime + .1;
    if (!this.timer) this.timer = setInterval(() => this.tick(), 60);
  },
  tick() {
    const c = Sound.ctx; if (!c || !this.cur) return;
    const tr = TRACKS[this.cur], st = 60 / tr.bpm / 4;
    if (this.nextT < c.currentTime) this.nextT = c.currentTime + .05;
    while (this.nextT < c.currentTime + .2) { if (Sound.musicOn) tr.play(this.step % tr.len, this.nextT, st); this.nextT += st; this.step++; }
  },
};

// ===== TRANSPORT =====
async function connect(room, onMsg, onStatus) {
  if (LOCAL) {
    const bc = new BroadcastChannel("buzzin-" + room);
    bc.onmessage = e => onMsg(e.data);
    onStatus && onStatus("ok");
    return { send: m => bc.postMessage(m) };
  }
  if (!window.supabase || SUPA_URL.startsWith("%%")) throw new Error("Live sync isn't set up yet.");
  const sb = window.supabase.createClient(SUPA_URL, SUPA_KEY, { realtime: { params: { eventsPerSecond: 30 } } });
  const ch = sb.channel("buzzin-" + room, { config: { broadcast: { self: false } } });
  ch.on("broadcast", { event: "m" }, ({ payload }) => onMsg(payload));
  await new Promise((res, rej) => {
    let done = false;
    ch.subscribe(st => {
      if (st === "SUBSCRIBED") { onStatus && onStatus("ok"); if (!done) { done = true; res(); } }
      else if (st === "CHANNEL_ERROR" || st === "TIMED_OUT" || st === "CLOSED") { onStatus && onStatus("lost"); if (!done) { done = true; rej(new Error(st)); } }
    });
  });
  return { send: m => ch.send({ type: "broadcast", event: "m", payload: m }) };
}

// ===== SETTINGS UI (shared by TV and host phone) =====
function settingsHTML(st, fresh, where, famCount) {
  const kg = st.mode === "kids", list = kg ? (st.kidRounds || KIDS_DEFAULT) : st.rounds;
  const chips = (kg ? KIDS_ORDER : ROUND_ORDER).map(id => {
    const r = roundInfo(id), on = list.includes(id), dis = id === "family" && !famCount;
    const f = fresh && fresh[id] != null ? `<small>${fresh[id]} new</small>` : "";
    return `<button class="chip ${on ? "on" : ""} ${dis ? "off" : ""}" data-round="${id}" ${dis ? "disabled" : ""}>${esc(r.title)} ${dis ? "<small>set up on host phone</small>" : f}</button>`;
  }).join("");
  const pick = (k, vals, fmt) => vals.map(v => `<button class="chip ${st[k] === v ? "on" : ""}" data-set="${k}" data-val="${v}">${fmt ? fmt(v) : v}</button>`).join("");
  return `<div class="setrow"><b>Who's playing</b>${pick("mode", ["all", "kids"], v => v === "kids" ? "🧒 Kids' game (grown-ups watch)" : "Everyone")}</div>
    <div class="setrow"><b>Rounds (in order)</b>${chips}</div>
    <div class="setrow"><b>Questions</b>${pick("perRound", [4, 5, 6, 8, 10], v => v + " per round")}</div>
    <div class="setrow"><b>Timer</b>${pick("timer", [15, 20, 30, 45], v => v + " sec")}</div>
    <div class="setrow"><b>Host</b>${pick("hostMode", ["host", "play"], v => v === "host" ? "Host only (sees answers)" : "Host & play")}</div>
    <div class="setrow"><b>Look</b>${pick("theme", ["auto", "classic", "xmas"], v => ({ auto: "Auto (Christmas in December)", classic: "Classic", xmas: "Christmas" })[v])}</div>
    ${!kg && st.rounds.includes("ai") ? `<div class="setrow"><b>Anything topic</b><input id="ai-topic-${where}" data-aitopic placeholder="e.g. Gavin & Stacey, 80s toys, Wales" value="${esc(st.aiTopic || "")}" style="flex:1 1 14em"></div>` : ""}
    ${kg && where !== "tv" ? `<div class="setrow"><b>Kids' game</b><span class="muted">Every round is just for the kids. Only phones ticked "A child is playing" can answer, and only kids are on the scoreboard. Grown-ups can join to watch along or just host. Easy questions, a longer timer and no buzzer round.</span></div>` : ""}
    <div class="setrow"><b>How it works</b><span class="muted">Tap rounds to add or remove them. Kids' Corner is for kids only and is skipped if no kids join. The Family Round uses questions set up on the host's phone and is skipped once they've all been played. Everyone gets one Joker to double a round. The last round scores double.</span></div>`;
}
function settingsClick(e, st) {
  const b = e.target.closest("[data-round],[data-set]"); if (!b) return null;
  if (b.dataset.round) {
    const id = b.dataset.round;
    if (st.mode === "kids") {
      let r = (st.kidRounds || KIDS_DEFAULT).slice();
      r = r.includes(id) ? r.filter(x => x !== id) : r.concat(id);
      r.sort((a, c) => KIDS_ORDER.indexOf(a) - KIDS_ORDER.indexOf(c));
      return { kidRounds: r };
    }
    let r = st.rounds.slice();
    r = r.includes(id) ? r.filter(x => x !== id) : r.concat(id);
    r.sort((a, c) => ROUND_ORDER.indexOf(a) - ROUND_ORDER.indexOf(c));
    if (r.length && r.includes("buzz")) { r = r.filter(x => x !== "buzz"); r.splice(Math.max(0, r.length - 1), 0, "buzz"); }
    return { rounds: r };
  }
  const k = b.dataset.set, raw = b.dataset.val;
  if (k === "mode") return raw === "kids" ? { mode: "kids", timer: Math.max(30, st.timer || 0) } : { mode: "all", timer: Math.min(st.timer || 20, 20) };
  return { [k]: isNaN(raw) ? raw : Number(raw) };
}
const isChoice = t => ["mc", "emoji", "lines", "tune", "odd", "hl", "tf"].includes(t);

// ======================================================================
// TV — runs the game
// ======================================================================
function tvMain() {
  document.body.className = "tv";
  const resumeCode = P.get("tv");
  let S = resumeCode ? ls.get("buzzin_tv", null) : null;
  if (!S || S.room !== resumeCode || Date.now() - (S.saved || 0) > 12 * 3600e3) S = null;
  if (!S) {
    S = {
      room: roomCode(), token: uid() + uid(), phase: "lobby", players: {}, order: [],
      settings: { rounds: DEFAULT_ROUNDS.slice(), kidRounds: KIDS_DEFAULT.slice(), mode: "all", perRound: 5, timer: 20, hostMode: "host", aiTopic: "", theme: "auto" },
      audio: { music: true, vol: .8 },
      plan: [], ri: 0, qi: 0, answers: {}, res: null, buzz: null, qEnds: 0, pausedLeft: null, qStart: 0, started: false,
    };
  }
  S.settings.theme = S.settings.theme || "auto"; S.settings.mode = S.settings.mode || "all"; S.settings.kidRounds = S.settings.kidRounds || KIDS_DEFAULT.slice(); S.audio = S.audio || { music: true, vol: .8 };
  Sound.setVol(S.audio.vol, S.audio.music);
  history.replaceState(null, "", "?tv=" + S.room + (LOCAL ? "&local=1" : ""));
  let T = null, conn = "connecting", lastShell = "", lastTick = -1, opened = !!S.started, tuneTimers = [], suspenseTimer = null, finalMusicAt = 0;
  // Host lock: when switched on in the admin page, this screen needs a host code before it can open the lobby
  let gate = opened ? { st: "ok" } : { st: "checking" }, gateCode = ls.get("buzzin_hostcode", "");
  async function checkGate(code, silent) {
    try {
      const r = await rpc("buzzin_host_check", { p_code: code || "", p_device: deviceId() });
      if (r && r.ok) { gate = { st: "ok", locked: !!r.locked }; if (r.locked) { gateCode = code; ls.set("buzzin_hostcode", code); } }
      else if (!silent) gate = { st: "need", reason: r && r.reason };
    } catch (e) { if (!silent) gate = { st: "ok" }; }
    if (!silent) render();
  }
  checkGate(gateCode, opened);
  setInterval(() => { if (gate.locked && gateCode) rpc("buzzin_host_ping", { p_code: gateCode, p_device: deviceId() }).catch(() => { }); }, 60000);
  const GATE_MSG = { need: "", bad: "That code isn't right. Check it and try again.", expired: "That code has expired.", inuse: "That code is already running a game on another screen. Finish that game first, or try again in a few minutes." };
  function unlock() { const v = (($("#hostcode") || {}).value || "").trim(); if (!v) return; gate = { st: "checking" }; render(); checkGate(v); }
  let fam = {}; // family questions received from the host phone (kept on this device)
  IDB.all("tvfam").then(list => { list.forEach(q => fam[q.qid] = q); render(); });
  let famBroadcastT = null;

  const used = () => new Set(ls.get("buzzin_used", []));
  const freshCounts = () => { const u = used(), o = {}; for (const id in PACKS) o[id] = PACKS[id].qs.filter((q, i) => !u.has(id + i)).length; o.family = Object.keys(fam).filter(k => !u.has("fam:" + k)).length; return o; };
  const save = () => { S.saved = Date.now(); ls.set("buzzin_tv", S); };
  const playersArr = () => S.order.filter(id => S.players[id]).map(id => S.players[id]);
  const curRound = () => S.plan[S.ri];
  const curQ = () => curRound() && curRound().qs[S.qi];
  const qkey = () => (S.gid || "g") + "-" + S.ri + "-" + S.qi;
  const left = () => S.pausedLeft != null ? S.pausedLeft : Math.max(0, S.qEnds - Date.now());
  const eligible = () => { const r = curRound(); return r && r.kids ? playersArr().filter(p => p.kid) : playersArr(); };
  const pmult = p => (curRound().dbl ? 2 : 1) * (p.joker === S.ri ? 2 : 1);
  const xmas = () => isXmas(S.settings.theme);
  const qTime = q => (q && q.type === "tune" ? Math.max(25, S.settings.timer) : S.settings.timer) * 1000;
  function addGain(p, gain) { p.score += gain; if (p.joker === S.ri) p.st.joker += gain; }

  function pub() {
    const r = curRound(), q = curQ();
    const o = {
      room: S.room, phase: S.phase, hostMode: S.settings.hostMode, settings: S.settings, theme: xmas() ? "xmas" : "classic", audio: S.audio,
      players: playersArr().map(p => ({ id: p.id, name: p.name, members: p.members, kid: !!p.kid, joker: p.joker ?? null, color: p.color, score: p.score, on: Date.now() - p.seen < 20000 })),
    };
    if (S.phase === "lobby") o.fresh = freshCounts();
    o.famCount = Object.keys(fam).length; o.kg = !!(S.started ? S.kg : S.settings.mode === "kids");
    if (r) o.round = { n: S.ri + 1, of: S.plan.length, id: r.id, title: r.title, type: r.type, blurb: r.blurb, dbl: r.dbl, kids: !!r.kids };
    if (q && (S.phase === "question" || S.phase === "suspense" || S.phase === "reveal")) {
      o.q = { n: S.qi + 1, of: r.qs.length, key: qkey(), type: q.type, text: q.text, emoji: q.emoji, quote: q.quote, photo: !!q.photo, opts: q.opts, unit: q.unit, left: left(), paused: S.pausedLeft != null, total: qTime(q) };
      o.answered = Object.keys(S.answers);
      if (S.buzz) o.buzz = { cur: S.buzz.cur, locked: S.buzz.locked, steal: !!S.buzz.steal };
    }
    if (S.phase === "reveal" && S.res) o.reveal = S.res;
    if (S.phase === "final") o.awards = awards();
    return o;
  }
  function hostInfo() {
    const q = curQ(); if (!q || !(S.phase === "question" || S.phase === "intro" || S.phase === "suspense")) return null;
    const showAns = S.settings.hostMode === "host" || (q.type === "buzz" && S.buzz && S.buzz.cur);
    return { ans: showAns ? q.ansText : null };
  }
  function broadcast() {
    save();
    if (T) { T.send({ t: "state", s: pub() }); T.send({ t: "hostinfo", h: hostInfo() }); }
    render();
  }

  // ----- questions -----
  function buildQuestion(type, raw, id) {
    if (type === "mc" || type === "emoji" || type === "lines" || type === "tune") {
      const correctText = type === "tune" ? raw[0] : raw[1];
      const o = shuffle([correctText, raw[2], raw[3], raw[4]]);
      const q = { id, type, opts: o, correct: o.indexOf(correctText), ansText: correctText };
      if (type === "mc") q.text = raw[0];
      if (type === "emoji") { q.text = "Which film is this?"; q.emoji = raw[0]; }
      if (type === "lines") { q.text = "Which film is this line from?"; q.quote = raw[0]; }
      if (type === "tune") { q.text = "Name that tune!"; q.notes = parseNotes(raw[1]); q.bpm = raw[5] || 120; }
      return q;
    }
    if (type === "odd") { const o = shuffle([raw[0], raw[1], raw[2], raw[3]]); return { id, type, text: "Which is the odd one out?", opts: o, correct: o.indexOf(raw[0]), ansText: raw[0], note: raw[4] }; }
    if (type === "hl") return { id, type, text: raw[0], opts: [raw[1], raw[2]], correct: raw[3], ansText: raw[3] === 0 ? raw[1] : raw[2], note: raw[4] };
    if (type === "tf") return { id, type, text: raw[0], opts: ["True", "False"], correct: raw[1] ? 0 : 1, ansText: raw[1] ? "True" : "False" };
    if (type === "number") return { id, type, text: raw[0], answer: raw[1], unit: raw[2], ansText: fmtNum(raw[1], raw[2]) };
    if (type === "buzz") return { id, type, text: raw[0], ansText: raw[1] };
  }
  function famQuestion(f) {
    const id = "fam:" + f.qid, photo = f.photo ? f.qid : null;
    if (f.kind === "year") return { id, type: "number", text: f.text, answer: Number(f.year), unit: "", ansText: String(f.year), photo };
    if (f.kind === "tf") return { id, type: "tf", text: f.text, opts: ["True", "False"], correct: f.tf ? 0 : 1, ansText: f.tf ? "True" : "False", photo };
    const o = shuffle([f.a].concat((f.w || []).filter(Boolean).slice(0, 3)));
    return { id, type: "mc", text: f.text, opts: o, correct: o.indexOf(f.a), ansText: f.a, photo };
  }
  function pickQs(id, n) {
    const p = PACKS[id], u = used();
    let idx = p.qs.map((q, i) => i).filter(i => !u.has(id + i));
    if (idx.length < n) {
      const all = ls.get("buzzin_used", []).filter(x => !x.startsWith(id)); ls.set("buzzin_used", all);
      idx = p.qs.map((q, i) => i);
    }
    return shuffle(idx).slice(0, n).map(i => buildQuestion(p.type, p.qs[i], id + i));
  }
  async function aiRound(topic, n) {
    const key = ls.get("buzzin_key", "");
    if (!key || !topic) throw new Error("no key or topic");
    const prompt = `Write ${n} multiple-choice pub quiz questions about "${topic}" for a family quiz night in Wales, UK. Mix easy and medium. Facts must be accurate and not time-sensitive. Each question needs exactly one correct answer and three plausible wrong answers, all short (under 6 words). Reply with ONLY a JSON array, no other text: [{"q":"...","a":"correct","w":["wrong1","wrong2","wrong3"]}]`;
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
      body: JSON.stringify({ model: CLAUDE_MODEL, max_tokens: 2500, messages: [{ role: "user", content: prompt }] }),
    });
    if (!r.ok) throw new Error("API " + r.status);
    const j = await r.json(); const txt = j.content.map(c => c.text || "").join("");
    const arr = JSON.parse(txt.slice(txt.indexOf("["), txt.lastIndexOf("]") + 1));
    return arr.slice(0, n).map((x, i) => buildQuestion("mc", [x.q, x.a, x.w[0], x.w[1], x.w[2]], "ai" + Date.now() + i));
  }

  // ----- game flow -----
  async function startGame() {
    if (!playersArr().length) { toast("Nobody's joined yet. Scan the code to join."); return; }
    const kidsGame = S.settings.mode === "kids";
    let rounds = (kidsGame ? (S.settings.kidRounds || KIDS_DEFAULT) : S.settings.rounds).slice();
    if (kidsGame && !playersArr().some(p => p.kid)) { toast("It's a kids' game, but no kids have joined yet. Tick \"A child is playing\" when joining."); return; }
    if (!kidsGame && rounds.includes("kids") && !playersArr().some(p => p.kid)) { rounds = rounds.filter(id => id !== "kids"); toast("No kids have joined, so Kids' Corner is skipped."); }
    if (!rounds.length) { toast("Pick at least one round."); return; }
    S.phase = "loading"; broadcast();
    const plan = [];
    for (const id of rounds) {
      const info = roundInfo(id);
      let qs, title = info.title, blurb = info.blurb;
      if (id === "family") {
        const u = used(), list = Object.values(fam).filter(f => !u.has("fam:" + f.qid)).sort((a, b) => (a.sort || 0) - (b.sort || 0));
        if (!list.length) { toast(Object.keys(fam).length ? "The Family Round has already been played, so it's skipped. Reset used questions to play it again." : "No family questions yet, so the Family Round is skipped."); continue; }
        qs = list.slice(0, 10).map(famQuestion);
      } else if (id === "ai") {
        try { qs = await aiRound(S.settings.aiTopic, S.settings.perRound); title = S.settings.aiTopic; blurb = "A round written just for tonight."; }
        catch (e) { toast("Couldn't write the Anything Round, so it's General Knowledge instead."); qs = pickQs("gk", S.settings.perRound); title = "General Knowledge"; blurb = PACKS.gk.blurb; }
      } else qs = pickQs(id, id === "buzz" ? Math.min(S.settings.perRound + 2, 8) : S.settings.perRound);
      plan.push({ id, title, type: qs[0] ? qs[0].type : info.type, blurb, qs, kids: kidsGame || id === "kids" });
    }
    if (!plan.length) { toast("No rounds left to play. Pick some more rounds."); S.phase = "lobby"; return broadcast(); }
    plan[plan.length - 1].dbl = plan.length > 1;
    S.plan = plan; S.ri = 0; S.qi = 0; S.started = true; S.kg = kidsGame; S.gid = uid().slice(0, 4);
    playersArr().forEach(p => { p.score = 0; p.joker = null; p.st = { fast: [], close1: 0, close2: 0, buzz: 0, joker: 0 }; });
    S.phase = "intro"; Sound.whoosh(); broadcast();
  }
  function clearTune() { tuneTimers.forEach(clearTimeout); tuneTimers = []; Sound.stopMelody(); }
  function playTune(full) {
    const q = curQ(); if (!q || q.type !== "tune") return;
    Sound.init(); Sound.melody(q.notes, q.bpm, full ? 0 : 6);
  }
  function startQuestion() {
    const q = curQ();
    clearTune(); clearTimeout(suspenseTimer);
    S.answers = {}; S.res = null; S.pausedLeft = null;
    S.buzz = q.type === "buzz" ? { cur: null, locked: [], steal: false } : null;
    S.qStart = Date.now(); S.qEnds = Date.now() + qTime(q);
    S.phase = "question"; broadcast();
    if (q.type === "tune") {
      const k = qkey();
      tuneTimers.push(setTimeout(() => { if (qkey() === k && S.phase === "question") playTune(false); }, 700));
      tuneTimers.push(setTimeout(() => { if (qkey() === k && S.phase === "question") playTune(true); }, 8000));
    }
  }
  function endQuestion(direct) {
    if (S.phase !== "question") return;
    clearTune();
    const q = curQ(), res = { correct: q.correct, ansText: q.ansText, answer: q.answer, note: q.note, per: {} };
    const ps = eligible();
    if (q.type === "number") {
      const guesses = ps.filter(p => S.answers[p.id]).map(p => ({ p, g: Number(S.answers[p.id].c), d: Math.abs(Number(S.answers[p.id].c) - q.answer) })).sort((a, b) => a.d - b.d);
      const dists = [...new Set(guesses.map(x => x.d))];
      guesses.forEach(x => {
        const rank = dists.indexOf(x.d); let gain = rank === 0 ? 100 : rank === 1 ? 50 : 0;
        if (x.d === 0) gain += 50; gain *= pmult(x.p); addGain(x.p, gain);
        if (rank === 0) x.p.st.close1++; else if (rank === 1) x.p.st.close2++;
        res.per[x.p.id] = { ans: x.g, gain, ok: rank === 0 };
      });
      res.order = guesses.map(x => x.p.id);
    } else if (q.type === "buzz") {
      Object.assign(res.per, S.buzzRes || {});
    } else {
      ps.forEach(p => {
        const a = S.answers[p.id]; if (!a) return;
        const ok = a.c === q.correct;
        const speed = Math.max(0, 1 - a.ms / qTime(q));
        const gain = ok ? Math.round((100 + 50 * speed) * pmult(p)) : 0;
        if (ok) p.st.fast.push(a.ms);
        addGain(p, gain); res.per[p.id] = { ans: a.c, gain, ok };
      });
    }
    S.buzzRes = null;
    const u = ls.get("buzzin_used", []); if (!u.includes(q.id)) { u.push(q.id); ls.set("buzzin_used", u); }
    S.res = res;
    if (direct || q.type === "buzz") return reveal();
    S.phase = "suspense"; Sound.drumroll(); broadcast();
    const k = qkey(); suspenseTimer = setTimeout(() => { if (qkey() === k && S.phase === "suspense") reveal(); }, 1400);
  }
  function reveal() {
    S.phase = "reveal";
    const anyRight = Object.values(S.res.per).some(x => x.ok);
    anyRight ? Sound.good() : Sound.bad();
    const q = curQ(); if (q.type === "tune") setTimeout(() => { if (S.phase === "reveal" && curQ() === q) Sound.melody(q.notes, q.bpm); }, 900);
    broadcast();
  }
  function next() {
    Sound.init();
    if (S.phase === "lobby") return startGame();
    if (S.phase === "intro") return startQuestion();
    if (S.phase === "question") return endQuestion();
    if (S.phase === "suspense") return;
    if (S.phase === "reveal") {
      Sound.stopMelody();
      if (S.qi < curRound().qs.length - 1) { S.qi++; return startQuestion(); }
      S.phase = S.ri < S.plan.length - 1 ? "scores" : "final";
      if (S.phase === "final") { Sound.fanfare(); finalMusicAt = Date.now() + 3500; }
      return broadcast();
    }
    if (S.phase === "scores") { S.ri++; S.qi = 0; S.phase = "intro"; Sound.whoosh(); return broadcast(); }
    if (S.phase === "final") { S.phase = "lobby"; S.plan = []; S.started = false; playersArr().forEach(p => { p.score = 0; p.joker = null; }); return broadcast(); }
  }
  function pause() {
    if (S.phase !== "question" || (S.buzz && S.buzz.cur)) return;
    if (S.pausedLeft != null) { S.qEnds = Date.now() + S.pausedLeft; S.pausedLeft = null; }
    else S.pausedLeft = left();
    broadcast();
  }
  function skip() {
    if (S.phase === "question" || S.phase === "reveal" || S.phase === "suspense") {
      clearTune(); clearTimeout(suspenseTimer);
      if (S.qi < curRound().qs.length - 1) { S.qi++; return startQuestion(); }
      S.phase = S.ri < S.plan.length - 1 ? "scores" : "final"; broadcast();
    }
  }
  function judge(ok) {
    if (S.phase !== "question" || !S.buzz || !S.buzz.cur) return;
    const p = S.players[S.buzz.cur];
    S.buzzRes = S.buzzRes || {};
    if (ok) {
      const gain = 100 * pmult(p) * (S.buzz.steal ? 2 : 1); addGain(p, gain); p.st.buzz++;
      S.buzzRes[p.id] = { gain, ok: true, steal: !!S.buzz.steal };
      S.buzz.cur = null; endQuestion(true);
    } else {
      S.buzzRes[p.id] = { gain: 0, ok: false };
      S.buzz.locked.push(p.id); S.buzz.cur = null; S.buzz.steal = true;
      S.qEnds = Date.now() + Math.max(8000, S.pausedLeft ?? 0); S.pausedLeft = null; Sound.bad();
      const remaining = eligible().filter(x => !S.buzz.locked.includes(x.id));
      if (!remaining.length) return endQuestion(true);
      broadcast();
    }
  }
  function awards() {
    const ps = playersArr().filter(p => p.st && (!S.kg || p.kid)); const out = [];
    const best = (f) => { let b = null, bv = null; ps.forEach(p => { const v = f(p); if (v != null && (bv == null || v > bv)) { bv = v; b = p; } }); return b ? { p: b, v: bv } : null; };
    const fast = best(p => p.st.fast.length >= 2 ? -p.st.fast.reduce((a, c) => a + c, 0) / p.st.fast.length : null);
    if (fast) out.push({ icon: "⚡", title: "Fastest Finger", id: fast.p.id, detail: `${(-fast.v / 1000).toFixed(1)}s average on right answers` });
    const g = best(p => p.st.close1 || null); if (g) out.push({ icon: "🎯", title: "Best Guesser", id: g.p.id, detail: `Closest ${g.v} time${g.v > 1 ? "s" : ""}` });
    const sc = best(p => p.st.close2 || null); if (sc) out.push({ icon: "😬", title: "So Close", id: sc.p.id, detail: `Runner-up guess ${sc.v} time${sc.v > 1 ? "s" : ""}` });
    const bz = best(p => p.st.buzz || null); if (bz) out.push({ icon: "🔔", title: "Buzzer Champ", id: bz.p.id, detail: `${bz.v} buzzer answer${bz.v > 1 ? "s" : ""} right` });
    const jk = best(p => p.st.joker || null); if (jk) out.push({ icon: "🃏", title: "Joker Genius", id: jk.p.id, detail: `${jk.v} points in their Joker round` });
    return out;
  }

  // ----- messages -----
  function onMsg(m) {
    if (!m || !m.t) return;
    const p = m.pid && S.players[m.pid];
    if (m.t === "hello") { if (p) p.seen = Date.now(); T.send({ t: "state", s: pub() }); if (m.host) T.send({ t: "hostinfo", h: hostInfo() }); return; }
    if (m.t === "join") {
      const name = String(m.name || "").trim().slice(0, 24); if (!name) return;
      const members = String(m.members || "").trim().slice(0, 60), kid = !!m.kid;
      if (!S.players[m.pid]) {
        S.players[m.pid] = { id: m.pid, name, members, kid, joker: null, color: COLORS[S.order.length % COLORS.length], score: 0, seen: Date.now(), st: { fast: [], close1: 0, close2: 0, buzz: 0, joker: 0 } };
        S.order.push(m.pid); Sound.join();
      } else Object.assign(S.players[m.pid], { name, members, kid, seen: Date.now() });
      return broadcast();
    }
    if (m.t === "fam_list" && m.k === S.token) {
      const want = new Set((m.items || []).map(i => i.qid));
      Object.keys(fam).forEach(k => { if (!want.has(k)) { delete fam[k]; IDB.del("tvfam", k).catch(() => { }); } });
      const need = (m.items || []).filter(i => !fam[i.qid] || fam[i.qid].v !== i.v).map(i => i.qid);
      T.send({ t: "fam_need", qids: need });
      return broadcast();
    }
    if (m.t === "fam_q" && m.k === S.token && m.q && m.q.qid) {
      fam[m.q.qid] = m.q; IDB.put("tvfam", m.q).catch(() => { });
      clearTimeout(famBroadcastT); famBroadcastT = setTimeout(broadcast, 400); return;
    }
    if (m.t === "joker" && p && S.phase === "intro" && p.joker == null) { p.joker = S.ri; Sound.joker(); return broadcast(); }
    if (m.t === "answer" && p && S.phase === "question" && m.key === qkey() && !S.answers[m.pid]) {
      const q = curQ(); if (q.type === "buzz") return;
      if (curRound().kids && !p.kid) return;
      let c = m.c; if (q.type === "number") { c = Number(c); if (!isFinite(c)) return; }
      S.answers[m.pid] = { c, ms: Date.now() - S.qStart }; p.seen = Date.now();
      Sound.tick();
      const active = eligible().filter(x => Date.now() - x.seen < 20000);
      if (active.length && active.every(x => S.answers[x.id])) { const k = qkey(); setTimeout(() => { if (qkey() === k) endQuestion(); }, 700); }
      return broadcast();
    }
    if (m.t === "buzz" && p && S.phase === "question" && S.buzz && !S.buzz.cur && !S.buzz.locked.includes(m.pid) && m.key === qkey() && S.pausedLeft == null) {
      if (curRound().kids && !p.kid) return;
      S.buzz.cur = m.pid; S.pausedLeft = left(); Sound.buzz(); return broadcast();
    }
    if (m.t === "cmd" && m.k === S.token) {
      if (m.cmd === "next") next();
      else if (m.cmd === "pause") pause();
      else if (m.cmd === "skip") skip();
      else if (m.cmd === "judge") judge(!!m.ok);
      else if (m.cmd === "replay") playTune(true);
      else if (m.cmd === "audio") { S.audio = { music: !!m.music, vol: Math.max(0, Math.min(1, Number(m.vol))) }; Sound.setVol(S.audio.vol, S.audio.music); broadcast(); }
      else if (m.cmd === "kick") { delete S.players[m.pid]; S.order = S.order.filter(x => x !== m.pid); broadcast(); }
      else if (m.cmd === "settings" && S.phase === "lobby") { Object.assign(S.settings, m.patch || {}); broadcast(); }
      else if (m.cmd === "lobby") { S.phase = "lobby"; S.plan = []; S.started = false; playersArr().forEach(x => x.score = 0); broadcast(); }
    }
  }

  // ----- rendering -----
  const joinUrl = () => withLocal(baseUrl() + "?join=" + S.room);
  const hostUrl = () => withLocal(baseUrl() + "?host=" + S.room + "&k=" + S.token);
  function qr(el, text) {
    if (!el) return; el.innerHTML = "";
    try { new QRCode(el, { text, width: 512, height: 512, correctLevel: QRCode.CorrectLevel.M }); } catch (e) { el.textContent = text; }
  }
  const ptile = p => `<div class="ptile ${Date.now() - p.seen < 20000 ? "" : "off"}"><span class="av" style="background:${p.color}">${esc(initials(p.name))}</span><span>${esc(p.name)}${p.kid ? " 🧒" : ""}${p.members ? `<small>with ${esc(p.members)}</small>` : ""}</span></div>`;
  const ranked = () => playersArr().filter(p => !S.kg || p.kid).sort((a, b) => b.score - a.score);
  const musicBtn = () => `<button class="btn" data-a="music">♫ ${S.audio.music ? "On" : "Off"} (M)</button>`;
  const ctl = (extra = "") => `<div class="ctl">${extra}${musicBtn()}${S.phase === "question" && !(S.buzz && S.buzz.cur) ? `<button class="btn" data-a="pause">${S.pausedLeft != null ? "Resume" : "Pause"} (P)</button>` : ""}<button class="btn" data-a="skip">Skip</button><button class="btn gold" data-a="next">Next (Space)</button></div>`;
  const top = () => {
    const r = curRound(), inQ = ["question", "suspense", "reveal"].includes(S.phase);
    return `<div class="top"><div class="brand disp">Buzz In</div>
      <div class="crumbs">${r ? `Round ${S.ri + 1} of ${S.plan.length} · ${esc(r.title)}${inQ ? ` · Q${S.qi + 1}/${r.qs.length}` : ""}${r.kids ? ` · <span class="kidtag">Kids only</span>` : ""}` : ""}</div>
      <div class="conn">${conn === "ok" ? "Room " + S.room : conn === "lost" ? "Reconnecting…" : "Connecting…"}</div></div>`;
  };
  function syncMusic() {
    const ph = S.phase, r = curRound(), bg = xmas() ? "xmas" : "lobby";
    let want = null;
    if (!opened) want = null;
    else if (ph === "lobby" || ph === "loading" || ph === "intro" || ph === "scores") want = bg;
    else if (ph === "question") want = r && r.type === "tune" ? null : "think";
    else if (ph === "final") want = Date.now() > finalMusicAt ? bg : null;
    Music.play(want);
  }
  function syncTheme() {
    const on = xmas() && opened;
    document.body.classList.toggle("xmas", on);
    let cv = $("#snow");
    if (on && !cv) { cv = document.createElement("canvas"); cv.id = "snow"; document.body.prepend(cv); snow(cv); }
    if (!on && cv) cv.remove();
  }

  function render() {
    syncTheme(); syncMusic();
    if (!opened && gate.st === "checking") {
      paint(app, `<div class="stage"><div class="center"><img class="appicon tvicon" src="icon-192.png" alt=""><div class="logo disp">Buzz In</div><div class="spin"></div></div></div>`);
      return;
    }
    if (!opened && gate.st === "need") {
      paint(app, `<div class="stage"><div class="center"><div class="logo disp">Buzz In</div>
        <div class="gatebox"><p class="rblurb">Enter your host code to start a game.</p>
        <input id="hostcode" maxlength="8" placeholder="CODE" autocomplete="off" autocapitalize="characters" spellcheck="false">
        <div class="gatemsg">${esc(GATE_MSG[gate.reason] || "")}</div>
        <button class="btn gold big" data-a="unlock">Unlock</button>
        <p class="muted" style="font-size:.9rem;text-align:center">Players don't need a code, only the screen running the game. This screen remembers it for next time.</p></div></div></div>`);
      return;
    }
    if (!opened) {
      app.innerHTML = `<div class="stage"><div class="center"><img class="appicon tvicon" src="icon-192.png" alt=""><div class="logo disp">Buzz In</div>
        <p class="rblurb muted">Family quiz night. Put this screen on the TV, then press start.</p>
        <button class="btn gold big" style="max-width:24rem" data-a="open">Open the lobby</button>
        <p class="muted" style="font-size:.9rem">This switches on the music and keeps the screen awake.</p>
        <p class="muted" style="font-size:.9rem">Not on the TV yet? Open <b>${SITE}</b> on your phone and tap "How do I get it on my TV?"</p></div></div>`;
      return;
    }
    const ph = S.phase, q = curQ(), r = curRound();
    let html = "";
    if (ph === "lobby") {
      const hasKey = !!ls.get("buzzin_key", "");
      html = `<div class="stage">${top().replace('<div class="brand disp">Buzz In</div>', '<div></div>')}
      <div class="lobby">
        <div class="joincard">
          <div class="logo disp">Buzz In</div>
          <div class="qrrow"><div class="qr" id="qr-join"></div>
            <div><div class="muted" style="font-size:1.2rem;font-weight:600">Scan to join, or enter the code</div><div class="code">${S.room}</div>
            <div class="muted" style="font-size:.95rem">One phone per player or team. No phone? Join a team with someone who has one.</div></div></div>
        </div>
        <div class="side">
          <div class="disp" style="font-size:2.2rem">Who's playing · ${playersArr().length}</div>
          <div class="players">${playersArr().map(ptile).join("") || `<span class="muted" style="font-size:1.2rem">Waiting for the first player…</span>`}</div>
          <div class="setup" data-settings>${settingsHTML(S.settings, freshCounts(), "tv", Object.keys(fam).length)}
            ${S.settings.rounds.includes("ai") && !hasKey ? `<div class="setrow"><b>Claude key</b><input id="ai-key" type="password" placeholder="Paste your Anthropic API key (stays on this device)" style="flex:1 1 14em"><button class="btn" data-a="savekey">Save</button></div>` : ""}
            <div class="hostbox"><div class="qr" id="qr-host"></div><div><b>Host controls on your phone</b><div class="muted">Scan with the host's phone to run the game from the sofa.</div></div>
              <div style="margin-left:auto;display:flex;flex-direction:column;gap:.5rem"><button class="btn gold" data-a="next">Start the quiz</button>${musicBtn()}<button class="btn" data-a="resetused" style="font-size:.8rem">Reset used questions</button></div></div>
          </div>
        </div>
      </div></div>`;
    } else if (ph === "loading") {
      html = `<div class="stage">${top()}<div class="center"><div class="spin" style="width:4rem;height:4rem;border-width:.4rem"></div><div class="rblurb">Getting the questions ready…</div></div></div>`;
    } else if (ph === "intro") {
      const jokers = playersArr().filter(p => p.joker === S.ri);
      html = `<div class="stage">${top()}<div class="center">
        <div class="rnum disp">Round ${S.ri + 1}</div><div class="rtitle disp">${esc(r.title)}</div>
        <div class="rblurb">${esc(r.blurb)}</div>
        ${r.kids ? `<div class="dbl" style="background:var(--b);color:#fff">${S.kg ? "Kids' game · grown-ups cheer them on" : "Kids only! Grown-ups sit this one out"}</div>` : ""}
        ${r.dbl ? `<div class="dbl">Final round · double points</div>` : ""}
        <div class="jokers">${jokers.map(p => `<span class="jk" style="border-color:${p.color}">🃏 ${esc(p.name)} plays their Joker!</span>`).join("")}</div>
        <div class="muted" style="font-size:1.1rem">Want double points on this round? Play your Joker on your phone now.</div>
      </div><div class="bottom"><div></div>${ctl()}</div></div>`;
    } else if (ph === "question" || ph === "suspense" || ph === "reveal") {
      const dotsFor = eligible();
      html = `<div class="stage">${top()}<div class="center ${q.photo ? "withphoto" : ""}">${questionBody(q, ph)}</div>
        <div class="bottom"><div class="dots">${dotsFor.map(p => `<span class="dot ${S.answers[p.id] || (S.buzz && (S.buzz.locked.includes(p.id) || S.buzz.cur === p.id)) ? "in" : ""}" style="background:${p.color}" title="${esc(p.name)}">${esc(initials(p.name))}${p.joker === S.ri ? `<i class="jkb">🃏</i>` : ""}</span>`).join("")}</div>
        ${ph === "question" ? `<div style="display:flex;gap:1.2rem;align-items:center">${ctl((q.type === "buzz" && S.buzz && S.buzz.cur ? `<button class="btn good" data-a="right">Right (Y)</button><button class="btn bad" data-a="wrong">Wrong (N)</button>` : "") + (q.type === "tune" ? `<button class="btn" data-a="replay">Play again (R)</button>` : ""))}<div class="timer" id="timer"></div></div>` : ph === "reveal" ? ctl(q.type === "tune" ? `<button class="btn" data-a="replay">Play again (R)</button>` : "") : `<div></div>`}</div></div>`;
    } else if (ph === "scores") {
      const rk = ranked(), max = Math.max(1, ...rk.map(p => p.score));
      html = `<div class="stage">${top()}<div class="center"><div class="disp" style="font-size:4rem;color:var(--gold)">Scores after round ${S.ri + 1}</div>
        <div class="board">${rk.map((p, i) => `<div class="brow"><span class="disp" style="font-size:2rem">${i + 1}</span><span class="nm">${esc(p.name)}${p.joker != null && p.joker <= S.ri ? " 🃏" : ""}</span><span><div class="bar" data-w="${Math.max(3, p.score / max * 100)}" style="width:0;background:${p.color}"></div></span><span class="sc">${p.score}</span></div>`).join("")}</div>
      </div><div class="bottom"><div class="muted">Next up: ${esc(S.plan[S.ri + 1].title)}</div>${ctl()}</div></div>`;
    } else if (ph === "final") {
      const rk = ranked(), pod = [rk[1], rk[0], rk[2]], hs = ["11rem", "16rem", "8rem"], ls_ = ["2nd", "1st", "3rd"], aw = awards();
      html = `<div class="stage">${top()}<div class="center" style="gap:1.1rem"><div class="disp" style="font-size:4.4rem;color:var(--gold)">${rk[0] ? esc(rk[0].name) + " wins!" : "Game over"}</div>
        <div class="podium">${pod.map((p, i) => p ? `<div class="pod"><div class="pn">${esc(p.name)}</div><div class="ps">${p.score} pts</div><div class="blk" style="height:${hs[i]};background:${p.color}">${ls_[i]}</div></div>` : "").join("")}</div>
        ${rk.length > 3 ? `<div class="muted" style="font-size:1.1rem">${rk.slice(3).map((p, i) => `${i + 4}. ${esc(p.name)} (${p.score})`).join(" · ")}</div>` : ""}
        ${aw.length ? `<div class="awards">${aw.map(a => { const p = S.players[a.id]; return `<div class="award"><span class="ai">${a.icon}</span><div><b>${esc(a.title)}</b><div>${esc(p ? p.name : "")}</div><small>${esc(a.detail)}</small></div></div>`; }).join("")}</div>` : ""}
      </div><div class="bottom"><div></div><div class="ctl" style="opacity:1">${musicBtn()}<button class="btn gold" data-a="next">Play again with new questions</button></div></div></div><canvas id="confetti"></canvas>`;
    }
    const shellKey = ph + "|" + S.ri + "|" + S.qi;
    paint(app, html);
    if (ph === "lobby") { qr($("#qr-join"), joinUrl()); qr($("#qr-host"), hostUrl()); }
    if (ph === "scores") requestAnimationFrame(() => document.querySelectorAll(".bar").forEach(b => b.style.width = b.dataset.w + "%"));
    if (ph === "final" && lastShell !== shellKey) confetti();
    lastShell = shellKey; lastTick = -1; tickTimer();
  }
  function questionBody(q, ph) {
    const rev = ph === "reveal" ? S.res : null, ps = playersArr();
    let h = "";
    if (q.emoji) h += `<div class="emoji">${q.emoji}</div>`;
    if (q.photo && fam[q.photo] && fam[q.photo].photo) h += `<img class="qphoto" src="${fam[q.photo].photo}" alt="">`;
    if (q.type === "tune") h += `<div class="eq ${ph === "question" || ph === "reveal" ? "on" : ""}">${Array.from({ length: 9 }, (_, i) => `<i style="animation-delay:${(i * 0.13) % 0.7}s"></i>`).join("")}</div>`;
    if (q.quote) h += `<div class="quote">“${esc(q.quote)}”</div>`;
    h += `<div class="qtext ${q.quote ? "small" : ""}">${esc(q.text)}</div>`;
    if (q.opts) {
      const two = q.opts.length === 2, tf = q.type === "tf";
      h += `<div class="opts ${two ? "two" : ""}" style="max-width:${two ? "56rem" : "none"}">${q.opts.map((o, i) => {
        const cls = rev ? (i === rev.correct ? "right" : "dim") : ph === "suspense" ? "wait" : "";
        const who = rev ? ps.filter(p => rev.per[p.id] && rev.per[p.id].ans === i).map(p => `<span class="mini" style="background:${p.color}">${esc(initials(p.name))}</span>`).join("") : "";
        const col = tf ? (i ? 0 : 3) : two ? (i ? 2 : 1) : i;
        return `<div class="opt o${col} ${cls}"><span class="let">${tf ? (i ? "✗" : "✓") : LET[i]}</span><span>${esc(o)}</span><span class="who">${who}</span></div>`;
      }).join("")}</div>`;
    }
    if (ph === "suspense") h += `<div class="rblurb drum">🥁 Drumroll…</div>`;
    if (rev && rev.note) h += `<div class="note">${esc(rev.note)}</div>`;
    if (q.type === "number") {
      if (ph === "question") h += `<div class="rblurb muted">Type your guess on your phone${q.unit ? ` (in ${esc(q.unit)})` : ""}</div>`;
      else if (rev) {
        h += `<div class="bigans">${esc(q.ansText)}</div><div class="glist">${(rev.order || []).map(id => {
          const p = S.players[id], x = rev.per[id]; if (!p) return "";
          return `<div class="grow"><span><span class="mini" style="background:${p.color}">${esc(initials(p.name))}</span> ${esc(p.name)}: ${esc(fmtNum(x.ans, q.unit))}</span><span class="gain">${x.gain ? "+" + x.gain : ""}</span></div>`;
        }).join("") || `<span class="muted">No guesses</span>`}</div>`;
      }
    }
    if (q.type === "buzz") {
      if (!rev) {
        if (S.buzz && S.buzz.cur) { const p = S.players[S.buzz.cur]; h += `<div class="buzzer" style="background:${p.color}">${esc(p.name)}!</div><div class="rblurb">Say your answer out loud${S.buzz.steal ? " · steal for double points" : ""}</div>`; }
        else h += `<div class="rblurb ${S.buzz && S.buzz.steal ? "" : "muted"}">${S.buzz && S.buzz.steal ? "Wrong! <b style=\"color:var(--gold)\">Steal it for double points</b>. Buzz in!" : "Buzz in on your phone when you know it"}</div>`;
      } else {
        const win = Object.keys(rev.per).find(id => rev.per[id].ok);
        h += `<div class="bigans">${esc(q.ansText)}</div><div class="rblurb">${win && S.players[win] ? `${rev.per[win].steal ? "Stolen by" : "Point to"} ${esc(S.players[win].name)} (+${rev.per[win].gain})` : "Nobody got it"}</div>`;
      }
    }
    return h;
  }
  function tickTimer() {
    const el = $("#timer"); if (!el || S.phase !== "question") return;
    const tot = qTime(curQ()), l = left(), sec = Math.ceil(l / 1000), frac = l / tot;
    if (sec !== lastTick) {
      if (sec <= 5 && sec > 0 && S.pausedLeft == null) Sound.tick();
      lastTick = sec;
    }
    const c = 2 * Math.PI * 45, col = frac < .25 ? "var(--bad)" : "var(--gold)";
    el.innerHTML = `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="var(--line)" stroke-width="9"/><circle cx="50" cy="50" r="45" fill="none" stroke="${col}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - frac)}"/></svg><div class="num">${S.pausedLeft != null ? "II" : sec}</div>`;
  }
  function confetti() {
    const cv = $("#confetti"); if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = cv.getContext("2d"); cv.width = innerWidth; cv.height = innerHeight;
    const bits = Array.from({ length: 160 }, () => ({ x: Math.random() * cv.width, y: -Math.random() * cv.height, v: 2 + Math.random() * 4, s: 6 + Math.random() * 8, c: COLORS[Math.floor(Math.random() * COLORS.length)], r: Math.random() * 6 }));
    let n = 0; (function f() { x.clearRect(0, 0, cv.width, cv.height); bits.forEach(b => { b.y += b.v; b.r += .1; x.fillStyle = b.c; x.save(); x.translate(b.x + Math.sin(b.r) * 10, b.y); x.rotate(b.r); x.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); x.restore(); }); if (n++ < 420 && $("#confetti")) requestAnimationFrame(f); else x.clearRect(0, 0, cv.width, cv.height); })();
  }
  function snow(cv) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = cv.getContext("2d");
    const size = () => { cv.width = innerWidth; cv.height = innerHeight; }; size(); addEventListener("resize", size);
    const flakes = Array.from({ length: 90 }, () => ({ x: Math.random(), y: Math.random(), r: 1 + Math.random() * 3, v: .0006 + Math.random() * .0012, w: Math.random() * 6 }));
    (function f() {
      if (!document.body.contains(cv)) return;
      x.clearRect(0, 0, cv.width, cv.height); x.fillStyle = "rgba(255,255,255,.75)";
      flakes.forEach(k => { k.y += k.v; k.w += .01; if (k.y > 1.02) { k.y = -.02; k.x = Math.random(); } x.beginPath(); x.arc((k.x + Math.sin(k.w) * .01) * cv.width, k.y * cv.height, k.r, 0, 6.3); x.fill(); });
      requestAnimationFrame(f);
    })();
  }
  function toggleMusic() { S.audio.music = !S.audio.music; Sound.setVol(S.audio.vol, S.audio.music); broadcast(); }

  // ----- input -----
  app.addEventListener("click", e => {
    const a = e.target.closest("[data-a]");
    if (a) {
      const k = a.dataset.a; Sound.init();
      if (k === "unlock") { unlock(); return; }
      if (k === "open") { if (gate.st !== "ok") return; opened = true; wakeLock(); try { document.documentElement.requestFullscreen && document.documentElement.requestFullscreen().catch(() => { }); } catch (_) { } render(); return; }
      if (k === "next") next(); else if (k === "pause") pause(); else if (k === "skip") skip();
      else if (k === "right") judge(true); else if (k === "wrong") judge(false);
      else if (k === "replay") playTune(true);
      else if (k === "music") toggleMusic();
      else if (k === "savekey") { const v = ($("#ai-key") || {}).value; if (v) { ls.set("buzzin_key", v.trim()); toast("Key saved on this device"); render(); } }
      else if (k === "resetused") { ls.set("buzzin_used", []); toast("All questions are fresh again"); render(); }
      return;
    }
    if (S.phase === "lobby") { const patch = settingsClick(e, S.settings); if (patch) { Object.assign(S.settings, patch); broadcast(); } }
  });
  app.addEventListener("change", e => { if (e.target.matches("[data-aitopic]")) { S.settings.aiTopic = e.target.value.trim(); broadcast(); } });
  document.addEventListener("keydown", e => {
    if (e.target.id === "hostcode" && e.key === "Enter") { e.preventDefault(); unlock(); return; }
    if (e.target.matches("input")) return;
    if (!opened) return;
    Sound.init();
    if (e.key === " " || e.key === "Enter" || e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "p" || e.key === "P") pause();
    else if (e.key === "y" || e.key === "Y") judge(true);
    else if (e.key === "n" || e.key === "N") judge(false);
    else if (e.key === "r" || e.key === "R") playTune(true);
    else if (e.key === "m" || e.key === "M") toggleMusic();
  });

  // ----- timers -----
  setInterval(() => {
    if (S.phase === "question" && S.pausedLeft == null && Date.now() >= S.qEnds) {
      if (!S.buzz) endQuestion(); else if (!S.buzz.cur) endQuestion(true);
    }
    if (S.phase === "final" && finalMusicAt && Date.now() > finalMusicAt) { finalMusicAt = 0; syncMusic(); }
    tickTimer();
  }, 200);
  setInterval(() => { if (T) T.send({ t: "state", s: pub() }); if (S.phase === "lobby") render(); }, 5000);

  render();
  connect(S.room, onMsg, s => { conn = s; if (s === "ok" && T) T.send({ t: "state", s: pub() }); render(); })
    .then(t => { T = t; conn = "ok"; broadcast(); })
    .catch(err => { conn = "lost"; toast("Can't connect: " + err.message, 6000); render(); });
}

// ======================================================================
// PHONE — player and/or host controller
// ======================================================================
function phoneMain(room, hostKey) {
  document.body.className = "phone";
  room = room.toUpperCase();
  const pidKey = "buzzin_pid_" + room;
  // each tab gets its own player when testing locally; real phones remember their player so they can rejoin
  const idStore = LOCAL ? sessionStorage : localStorage;
  let pid = null; try { pid = idStore.getItem(pidKey); } catch (e) { }
  if (!pid) { pid = uid(); try { idStore.setItem(pidKey, pid); } catch (e) { } }
  let s = null, T = null, H = null, conn = "connecting", myAns = {}, lastKey = "", showJoin = false, pendingJoin = false;
  const isHost = !!hostKey;
  let editingFam = false, famSyncedAt = 0, famSending = false;
  const famEd = isHost ? makeFamEditor(() => famSync(true)) : null;
  if (famEd) famEd.load().then(() => render());
  function famSync(force) {
    if (!isHost || !T || !famEd) return;
    if (!force && Date.now() - famSyncedAt < 10000) return;
    famSyncedAt = Date.now();
    send({ t: "fam_list", k: hostKey, items: famEd.list.map(q => ({ qid: q.qid, v: q.v })) });
  }
  async function famSend(qids) {
    if (famSending) return; famSending = true;
    for (const id of qids) { const q = famEd.list.find(x => x.qid === id); if (q) { send({ t: "fam_q", k: hostKey, q }); await new Promise(r => setTimeout(r, 150)); } }
    famSending = false;
  }
  const me = () => s && s.players.find(p => p.id === pid);

  function send(m) { if (T) T.send(Object.assign({ pid }, m)); }
  function cmd(c, extra) { send(Object.assign({ t: "cmd", k: hostKey, cmd: c }, extra || {})); }

  function onMsg(m) {
    if (m.t === "state") {
      s = m.s;
      document.body.classList.toggle("xmas", s.theme === "xmas");
      if (s.q && s.q.key !== lastKey) { lastKey = s.q.key; if (navigator.vibrate) navigator.vibrate(60); }
      if (me()) pendingJoin = false;
      render();
      if (isHost && famEd && s.phase === "lobby" && (s.famCount !== famEd.list.length)) famSync();
    } else if (m.t === "hostinfo" && isHost) { H = m.h; render(); }
    else if (m.t === "fam_need" && isHost && famEd) famSend(m.qids || []);
  }

  const sitOut = () => s.round && s.round.kids && me() && !me().kid;
  let leadMsg = "", leadBusy = false;
  const leadCard = () => ls.get("buzzin_lead", false)
    ? `<div class="card"><p style="margin:0">✅ Thanks! We'll let you know about Buzz In.</p></div>`
    : `<div class="card"><h2>Want Buzz In for your own party?</h2><p class="muted" style="margin:0">Leave your email and we'll let you know when you can get it.</p>
      <input id="l-email" type="email" inputmode="email" placeholder="you@example.com" autocomplete="email">
      ${leadMsg ? `<p style="margin:0;color:#ff8a8a;font-weight:700">${esc(leadMsg)}</p>` : ""}
      <button class="btn gold big" data-a="lead" ${leadBusy ? "disabled" : ""}>${leadBusy ? "Sending…" : "Keep me posted"}</button>
      <p class="muted" style="margin:0;font-size:13px">We'll only email you about Buzz In, and you can ask to be removed at any time.</p></div>`;
  function playerPane() {
    const p = me(), ph = s.phase;
    const needJoin = !p && (!isHost || s.hostMode === "play" || showJoin);
    if (needJoin && pendingJoin) return `<div class="grow1 center"><div class="spin"></div><p class="muted">Joining…</p></div>`;
    if (needJoin) {
      return `<div class="card"><h2>${isHost ? "Join as a player" : "Join the quiz"}</h2>
        <label>Your name or team name<input id="j-name" maxlength="24" placeholder="e.g. Kelly, or Team Nan" autocomplete="off"></label>
        <label>Playing with anyone who hasn't got a phone? (optional)<input id="j-mem" maxlength="60" placeholder="e.g. Nan and Grandad" autocomplete="off"></label>
        <label class="check"><input type="checkbox" id="j-kid" ${s && s.kg ? "checked" : ""}><span>A child is playing on this phone <small>${s && s.kg ? "(it's a kids' game, so only kids can answer)" : "(they can answer in Kids' Corner)"}</small></span></label>
        <button class="btn gold big" data-a="join">Join</button></div>`;
    }
    if (!p) return "";
    const hdr = `<div class="hd"><div class="disp">Buzz In</div><div class="me"><span class="mini" style="background:${p.color}">${esc(initials(p.name))}</span>${esc(p.name)}${p.kid ? " 🧒" : ""} · ${p.score}</div></div>`;
    let body = "";
    if (ph === "lobby") body = `<div class="grow1 center"><div class="result" style="color:${p.color}">You're in!</div><p class="muted">Look at the TV. The quiz starts when the host is ready.</p>${p.members ? `<p>Playing with ${esc(p.members)}</p>` : ""}<p class="muted">🃏 You have one Joker to double your points on a round. You'll get the chance to play it before each round.</p></div>`;
    else if (ph === "loading") body = `<div class="grow1 center"><div class="spin"></div><p class="muted">Getting the questions ready…</p></div>`;
    else if (ph === "intro") {
      const ri = s.round.n - 1, can = !(s.round.kids && !p.kid);
      const jk = p.joker === ri ? `<div class="jokercard on">🃏 Joker played! Double points this round.</div>`
        : p.joker != null ? `<p class="muted">Joker used in round ${p.joker + 1}.</p>`
        : can ? `<button class="btn big jokerbtn" data-a="joker">🃏 Play my Joker on this round<br><small>Double points. You only get one!</small></button>` : "";
      body = `<div class="grow1 center"><p class="muted">Round ${s.round.n} of ${s.round.of}</p><h2 style="color:var(--gold);font-size:48px">${esc(s.round.title)}</h2><p>${esc(s.round.blurb)}</p>${s.round.kids ? (s.kg ? `<p><b style="color:var(--b)">Kids' game!</b> ${p.kid ? "Get ready!" : "Cheer them on."}</p>` : `<p><b style="color:var(--b)">Kids only!</b> ${p.kid ? "This one's for you." : "Grown-ups sit this one out."}</p>`) : ""}${s.round.dbl ? `<p><b style="color:var(--gold)">Double points!</b></p>` : ""}${jk}</div>`;
    }
    else if (ph === "question" || ph === "suspense") body = sitOut() ? `<div class="grow1 center"><div class="result" style="color:var(--b);font-size:52px">${s.kg ? "Kids' game" : "Kids only"}</div><p style="font-size:20px">${s.kg ? "Cheer them on, but no whispering the answers! 🤫" : "Sit this one out. No whispering! 🤫"}</p></div>` : questionPane(p);
    else if (ph === "reveal") body = revealPane(p);
    else if ((ph === "scores" || ph === "final") && s.kg && !p.kid) {
      const rk = s.players.filter(x => x.kid).sort((a, b) => b.score - a.score);
      body = `<div class="grow1 center"><p class="muted">${ph === "final" ? "Game over" : "After round " + s.round.n}</p><div class="result" style="color:var(--gold);font-size:44px">${rk[0] ? esc(rk[0].name) + (ph === "final" ? " wins!" : " is winning!") : "Kids' game"}</div><p class="muted">Look at the TV for the scores.</p></div>${ph === "final" ? leadCard() : ""}`;
    }
    else if (ph === "scores" || ph === "final") {
      const rk = s.players.filter(x => !s.kg || x.kid).sort((a, b) => b.score - a.score), pos = rk.findIndex(x => x.id === pid) + 1;
      const ord = n => n + (["th", "st", "nd", "rd"][(n % 100 - 20) % 10] || ["th", "st", "nd", "rd"][n % 100] || "th");
      const mine = ph === "final" && s.awards ? s.awards.filter(a => a.id === pid) : [];
      body = `<div class="grow1 center"><p class="muted">${ph === "final" ? "Final position" : "After round " + s.round.n}</p><div class="result" style="color:${p.color}">${ord(pos)}</div><p style="font-size:22px;font-weight:700">${p.score} points</p>${ph === "final" && pos === 1 ? `<p style="font-size:22px">🏆 Winner!</p>` : ""}
        ${mine.map(a => `<div class="jokercard on">${a.icon} ${esc(a.title)}<br><small>${esc(a.detail)}</small></div>`).join("")}</div>${ph === "final" && !p.kid ? leadCard() : ""}`;
    }
    return hdr + body;
  }
  function questionPane(p) {
    const q = s.q, a = myAns[q.key], t = q.type;
    const head = `<p class="muted">${esc(s.round.title)} · Q${q.n}/${q.of}${p.joker === s.round.n - 1 ? " · 🃏 x2" : ""}</p><div class="qsmall">${q.emoji ? `<div style="font-size:44px">${q.emoji}</div>` : ""}${q.quote ? `<div class="pquote">“${esc(q.quote)}”</div>` : ""}${t === "tune" ? `<div class="pquote">🎵 Listen to the TV…</div>` : ""}${q.photo ? `<div class="pquote">📷 Look at the photo on the TV</div>` : ""}${esc(q.text)}</div>`;
    if (s.phase === "suspense") return `${head}<div class="grow1 center"><div class="result" style="color:var(--gold)">🥁</div><p style="font-size:20px">Drumroll…</p></div>`;
    if (t === "buzz") {
      const locked = s.buzz && s.buzz.locked.includes(pid), cur = s.buzz && s.buzz.cur, steal = s.buzz && s.buzz.steal;
      if (cur === pid) return `${head}<div class="grow1 center"><div class="result" style="color:var(--gold)">Your turn!</div><p>Say your answer out loud.</p></div>`;
      return `${head}<div class="grow1 center"><button class="buzzbtn" data-a="buzz" ${locked || cur || q.paused ? "disabled" : ""}>${steal && !locked ? "Steal!" : "Buzz"}</button>
        <p class="muted">${locked ? "You're locked out of this one." : cur ? "Someone else buzzed…" : steal ? "Steal it for double points!" : "First to buzz gets to answer"}</p></div>`;
    }
    if (a != null) return `${head}<div class="grow1 center"><div class="result" style="color:${p.color}">Locked in</div><p style="font-size:20px">${t === "number" ? esc(fmtNum(a, q.unit)) : esc(q.opts[a])}</p><p class="muted">Waiting for everyone else…</p></div>`;
    if (t === "number") return `${head}<div class="grow1"><input id="num-${q.key}" class="numin" type="number" inputmode="decimal" placeholder="?" autocomplete="off">${q.unit ? `<p class="center muted">${esc(q.unit)}</p>` : ""}<button class="btn gold big" data-a="num">Lock in my guess</button></div>`;
    if (t === "tf") return `${head}<div class="grow1"><div class="tfb"><button class="ans o3" data-ans="0">True</button><button class="ans o0" data-ans="1">False</button></div></div>`;
    if (q.opts.length === 2) return `${head}<div class="grow1"><div class="tfb hl"><button class="ans o1" data-ans="0">${esc(q.opts[0])}</button><button class="ans o2" data-ans="1">${esc(q.opts[1])}</button></div></div>`;
    return `${head}<div class="answers">${q.opts.map((o, i) => `<button class="ans o${i}" data-ans="${i}"><span class="let">${LET[i]}</span>${esc(o)}</button>`).join("")}</div>`;
  }
  function revealPane(p) {
    const r = s.reveal || { per: {} }, mine = r.per[pid];
    const ansLine = `<p class="muted">The answer was</p><p style="font-size:22px;font-weight:700">${esc(r.ansText)}</p>${r.note ? `<p class="muted">${esc(r.note)}</p>` : ""}`;
    if (sitOut()) return `<div class="grow1 center"><p class="muted">Kids' round</p>${ansLine}</div>`;
    const ok = mine && mine.ok, gain = mine ? mine.gain : 0;
    return `<div class="grow1 center"><div class="result" style="color:${ok ? "var(--good)" : gain ? "var(--gold)" : "var(--bad)"}">${ok ? (mine.steal ? "Stolen!" : "Correct!") : gain ? "Close!" : mine ? "Not this time" : "No answer"}</div>
      ${gain ? `<p style="font-size:26px;font-weight:800">+${gain}</p>` : ""}${ansLine}</div>`;
  }
  function hostBar() {
    if (!isHost) return "";
    const ph = s.phase; let row = "", lbl = "";
    if (ph === "lobby") { lbl = `${s.players.length} joined`; row = `<button class="btn gold" data-h="next">Start the quiz</button>`; }
    else if (ph === "loading") { lbl = "Loading"; row = `<button class="btn" disabled>Getting questions…</button>`; }
    else if (ph === "intro") { lbl = `Round ${s.round.n}: ${s.round.title}`; row = `<button class="btn gold" data-h="next">Start round</button>`; }
    else if (ph === "question") {
      const elig = s.round.kids ? s.players.filter(x => x.kid).length : s.players.length;
      lbl = `Q${s.q.n}/${s.q.of} · ${s.answered ? s.answered.length : 0}/${elig} answered`;
      if (s.buzz && s.buzz.cur) { const p = s.players.find(x => x.id === s.buzz.cur); lbl = `${p ? p.name : "Someone"} buzzed`; row = `<button class="btn good" data-h="right">Right</button><button class="btn bad" data-h="wrong">Wrong</button>`; }
      else row = `${s.q.type === "tune" ? `<button class="btn" data-h="replay">🎵 Again</button>` : `<button class="btn" data-h="pause">${s.q.paused ? "Resume" : "Pause"}</button>`}<button class="btn" data-h="skip">Skip</button><button class="btn gold" data-h="next">Reveal</button>`;
    }
    else if (ph === "suspense") { lbl = "Drumroll…"; row = `<button class="btn" disabled>Revealing…</button>`; }
    else if (ph === "reveal") { lbl = `Q${s.q.n}/${s.q.of}`; row = `<button class="btn gold" data-h="next">Next</button>`; }
    else if (ph === "scores") { lbl = "Scores"; row = `<button class="btn gold" data-h="next">Next round</button>`; }
    else if (ph === "final") { lbl = "Game over"; row = `<button class="btn gold" data-h="next">Play again</button>`; }
    const key = H && H.ans ? `<div class="anskey">Answer: ${esc(H.ans)}</div>` : "";
    const au = s.audio || { music: true, vol: .8 };
    const aud = `<div class="aud"><button data-h="music">♫ Music ${au.music ? "on" : "off"}</button><span>Volume</span><button data-h="voldown" aria-label="Volume down">−</button><b>${Math.round(au.vol * 100)}%</b><button data-h="volup" aria-label="Volume up">+</button></div>`;
    return `<div class="hbar">${key}<div class="lbl"><span>Host</span><span>${esc(lbl)}</span></div><div class="row">${row}</div>${aud}</div>`;
  }
  function hostLobby() {
    if (!isHost || s.phase !== "lobby") return "";
    const mine = famEd ? famEd.list.length : 0;
    return `<div class="card"><h2>Family Round</h2><p>${mine ? `${mine} question${mine > 1 ? "s" : ""} on this phone · ${s.famCount || 0} on the TV` : "Add your own questions and family photos."}</p>
      <button class="btn big" data-a="editfam">${mine ? "Add or edit family questions" : "Set up the Family Round"}</button></div>
      <div class="card"><h2>Game settings</h2><div class="setup" data-settings>${settingsHTML(s.settings, s.fresh, "ph", s.famCount || 0)}</div>
      ${s.settings.rounds.includes("ai") ? `<p class="muted" style="font-size:14px">The Anything Round needs your Claude key saved on the TV screen.</p>` : ""}</div>
      <div class="card"><h2>Players</h2><div class="plist">${s.players.map(p => `<div class="pi"><span class="mini" style="background:${p.color}">${esc(initials(p.name))}</span>${esc(p.name)}${p.kid ? " 🧒" : ""}${p.members ? ` <span class="muted">+ ${esc(p.members)}</span>` : ""}<button class="x" data-kick="${p.id}">Remove</button></div>`).join("") || `<span class="muted">Nobody yet</span>`}</div></div>`;
  }
  function render() {
    if (!s) {
      paint(app, `<div class="ph"><div class="grow1 center"><div class="logo disp" style="font-size:56px;color:var(--gold)">Buzz In</div>
        ${conn === "lost" ? `<p>Can't reach game <b>${esc(room)}</b>. Check the code on the TV.</p><a class="btn" href="${esc(baseUrl())}">Enter a different code</a>` : `<div class="spin"></div><p class="muted">Joining game ${esc(room)}…</p>`}</div></div>`);
      return;
    }
    if (editingFam && famEd) { paint(app, `<div class="ph"><div class="hd"><div class="disp">Buzz In</div><span class="muted">Family Round</span></div>${famEd.html(false)}</div>`); return; }
    const hostOnlyView = isHost && s.hostMode === "host" && !me() && !showJoin && s.phase !== "lobby";
    let main = "";
    if (hostOnlyView) main = hostWatch();
    else if (isHost && s.phase === "lobby" && !me() && !showJoin && s.hostMode === "host") main = `<div class="hd"><div class="disp">Buzz In</div><span class="muted">Room ${esc(s.room)}</span></div>`;
    else main = playerPane();
    paint(app, `<div class="ph ${isHost ? "withbar" : ""}">${main}${hostLobby()}</div>${hostBar()}`);
  }
  function hostWatch() {
    const ph = s.phase;
    let b = `<div class="hd"><div class="disp">Buzz In</div><span class="muted">Host · ${esc(s.room)}</span></div>`;
    if (s.q && (ph === "question" || ph === "suspense" || ph === "reveal")) {
      b += `<div class="card"><p class="muted">${esc(s.round.title)} · Q${s.q.n}/${s.q.of}</p><div class="qsmall">${s.q.emoji ? s.q.emoji + " " : ""}${s.q.quote ? `“${esc(s.q.quote)}” ` : ""}${esc(s.q.text)}</div>${s.q.opts ? `<p class="muted">${s.q.opts.map((o, i) => (s.q.type === "tf" ? "" : LET[i] + ": ") + esc(o)).join(" · ")}</p>` : ""}</div>`;
    } else if (s.round) b += `<div class="card"><p class="muted">Round ${s.round.n} of ${s.round.of}</p><h2>${esc(s.round.title)}</h2>${s.round.kids ? `<p>Kids only round</p>` : ""}</div>`;
    const rk = s.players.slice().sort((a, c) => c.score - a.score);
    b += `<div class="card"><h2>Scores</h2><div class="plist">${rk.map(p => `<div class="pi"><span class="mini" style="background:${p.color}">${esc(initials(p.name))}</span>${esc(p.name)}${s.round && p.joker === s.round.n - 1 ? " 🃏" : ""}<span style="margin-left:auto">${s.answered && s.answered.includes(p.id) ? "✓ " : ""}${p.score}</span></div>`).join("")}</div></div>`;
    if (ph === "final" && s.awards && s.awards.length) b += `<div class="card"><h2>Awards</h2><div class="plist">${s.awards.map(a => { const p = s.players.find(x => x.id === a.id); return `<div class="pi">${a.icon} <b>${esc(a.title)}</b> <span class="muted">${esc(p ? p.name : "")}</span></div>`; }).join("")}</div></div>`;
    return b;
  }

  app.addEventListener("change", e => { if (famEd && editingFam) famEd.file(e, () => render()); });
  app.addEventListener("click", async e => {
    const t = e.target;
    if (famEd && editingFam) { await famEd.click(e, (done) => { if (done) editingFam = false; render(); }); return; }
    const a = t.closest("[data-a]"), ans = t.closest("[data-ans]"), h = t.closest("[data-h]"), kick = t.closest("[data-kick]");
    if (a && a.dataset.a === "editfam") { editingFam = true; famEd.mode = "list"; render(); window.scrollTo(0, 0); return; }
    if (a && a.dataset.a === "join") {
      const name = ($("#j-name").value || "").trim(); if (!name) { $("#j-name").focus(); return; }
      send({ t: "join", name, members: $("#j-mem").value, kid: $("#j-kid").checked }); pendingJoin = true; showJoin = false; setTimeout(() => { if (!me()) { pendingJoin = false; render(); } }, 6000); wakeLock(); render(); return;
    }
    if (a && a.dataset.a === "lead") {
      const em = (($("#l-email") || {}).value || "").trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { leadMsg = "That email doesn't look quite right."; render(); return; }
      leadBusy = true; leadMsg = ""; render();
      try { const r = await rpc("buzzin_add_lead", { p_name: me() ? me().name : "", p_email: em, p_room: room }); if (r && r.ok) ls.set("buzzin_lead", true); else leadMsg = "That email doesn't look quite right."; }
      catch (err) { leadMsg = "Couldn't send that. Check your signal and try again."; }
      leadBusy = false; render(); return;
    }
    if (a && a.dataset.a === "joker") { send({ t: "joker" }); if (navigator.vibrate) navigator.vibrate([40, 40, 80]); return; }
    if (a && a.dataset.a === "buzz") { send({ t: "buzz", key: s.q.key }); if (navigator.vibrate) navigator.vibrate(120); return; }
    if (a && a.dataset.a === "num") {
      const v = $("#num-" + s.q.key).value; if (v === "" || !isFinite(Number(v))) return;
      myAns[s.q.key] = Number(v); send({ t: "answer", key: s.q.key, c: Number(v) }); render(); return;
    }
    if (ans && s && s.phase === "question") { const i = Number(ans.dataset.ans); myAns[s.q.key] = i; send({ t: "answer", key: s.q.key, c: i }); if (navigator.vibrate) navigator.vibrate(30); render(); return; }
    if (h) {
      const k = h.dataset.h, au = s.audio || { music: true, vol: .8 };
      if (k === "right" || k === "wrong") cmd("judge", { ok: k === "right" });
      else if (k === "music") cmd("audio", { music: !au.music, vol: au.vol });
      else if (k === "volup" || k === "voldown") cmd("audio", { music: au.music, vol: Math.round(Math.max(0, Math.min(1, au.vol + (k === "volup" ? .1 : -.1))) * 10) / 10 });
      else cmd(k);
      return;
    }
    if (kick) { cmd("kick", { pid: kick.dataset.kick }); return; }
    if (isHost && s && s.phase === "lobby") { const patch = settingsClick(e, s.settings); if (patch) { Object.assign(s.settings, patch); cmd("settings", { patch }); render(); } }
  });
  app.addEventListener("change", e => { if (isHost && e.target.matches("[data-aitopic]")) cmd("settings", { patch: { aiTopic: e.target.value.trim() } }); });

  render();
  connect(room, onMsg, st => { conn = st; if (st === "ok" && T) send({ t: "hello", host: isHost }); if (!s) render(); })
    .then(t => { T = t; conn = "ok"; send({ t: "hello", host: isHost }); setTimeout(() => famSync(true), 1500); setTimeout(() => { if (!s) { conn = "lost"; render(); } }, 8000); })
    .catch(() => { conn = "lost"; render(); });
  setInterval(() => send({ t: "hello", host: isHost }), 6000);
}

// ======================================================================
// FAMILY ROUND EDITOR (standalone, no game needed)
// ======================================================================
function familyPage() {
  document.body.className = "phone";
  const ed = makeFamEditor();
  const draw = () => paint(app, `<div class="ph land"><div class="hd"><div class="disp">Buzz In</div><a class="muted" href="${esc(baseUrl())}">Back</a></div>${ed.html(true)}
    <p class="muted center" style="font-size:14px">When you host a game, scan the host code on the TV with this phone and your questions go to the TV automatically.</p></div>`);
  app.addEventListener("click", e => ed.click(e, draw));
  app.addEventListener("change", e => ed.file(e, draw));
  draw(); ed.load().then(draw);
}

// ======================================================================
// TV SETUP GUIDE  (?tvhelp, or ?tvhelp=samsung to open one device)
// ======================================================================
const SITE = "jimmywilson1979-arch.github.io/buzz-in";
const TV_GUIDES = [
  { id: "cast", icon: "📡", title: "Chromecast or Google TV", sub: "Also Sony, Philips, TCL, Hisense and Nvidia Shield TVs with Google Cast", best: true,
    need: "A laptop or Chromebook with Google Chrome, on the same Wi-Fi as the TV.",
    steps: ["On the laptop, open Chrome and go to <b>" + SITE + "</b>.", "Click <b>This is the TV screen</b>.", "Click the three dots <b>⋮</b> at the top right of Chrome, then <b>Cast, save and share</b>, then <b>Cast…</b>", "Pick your TV or Chromecast from the list. The quiz appears on the TV.", "Press <b>Open the lobby</b> on the laptop. Sound comes out of the TV."],
    tips: ["Keep the laptop plugged in and leave that tab open. You can run the game from the host phone.", "If the TV isn't in the list, check the laptop and TV are on the same Wi-Fi."] },
  { id: "hdmi", icon: "🔌", title: "Laptop with an HDMI cable", sub: "Works with any TV that has an HDMI socket", best: true,
    need: "A laptop and an HDMI cable (some newer laptops need a USB-C to HDMI adapter).",
    steps: ["Plug the cable into the laptop and into a spare HDMI socket on the TV.", "Switch the TV to that HDMI input with the <b>Source</b> or <b>Input</b> button on the remote.", "Windows: press <b>Windows key + P</b> and choose <b>Duplicate</b>. Mac: it usually mirrors by itself.", "Open <b>" + SITE + "</b> in the browser and tap <b>This is the TV screen</b>.", "Press <b>Open the lobby</b>. If the sound comes out of the laptop, pick the TV as the sound output."],
    tips: ["The most reliable option. No Wi-Fi casting to go wrong.", "Press F11 (Windows) for full screen."] },
  { id: "samsung", icon: "📺", title: "Samsung smart TV", sub: "Use the TV's own web browser",
    need: "Just the TV remote, plus the host phone to run the game.",
    steps: ["Press the <b>Home</b> (or Smart TV) button on the remote.", "Open the <b>Internet</b> (web browser) app. If it's not on the home row, look in <b>Apps</b>.", "Select the address bar and type <b>" + SITE + "</b>, then press Enter.", "Choose <b>This is the TV screen</b>, then <b>Open the lobby</b>.", "Scan the small host QR code with your phone and run the game from there."],
    tips: ["Typing with the remote is slow. You only need to do it once: add the page as a bookmark for next time.", "Got a Samsung phone? You can also mirror it instead: see Android phone or tablet."] },
  { id: "lg", icon: "📺", title: "LG smart TV", sub: "Use the TV's own web browser",
    need: "Just the TV remote, plus the host phone to run the game.",
    steps: ["Press the <b>Home</b> button on the remote.", "Open the <b>Web Browser</b> app.", "Select the address bar, type <b>" + SITE + "</b> and press Enter.", "Choose <b>This is the TV screen</b>, then <b>Open the lobby</b>.", "Scan the small host QR code with your phone and run the game from there."],
    tips: ["The LG Magic Remote works like a mouse pointer, which makes this easy.", "Bookmark the page so you don't have to type it next time."] },
  { id: "fire", icon: "🔥", title: "Amazon Fire TV or Fire Stick", sub: "Use the Silk browser",
    need: "The Fire TV remote, plus the host phone to run the game.",
    steps: ["On the Fire TV home screen, look for <b>Silk Browser</b> (sometimes called <b>Internet</b>). If it's not there, search for <b>Silk</b> and install it (free).", "Open it, select the address bar and type <b>" + SITE + "</b>.", "Choose <b>This is the TV screen</b>, then <b>Open the lobby</b>.", "Scan the small host QR code with your phone and run the game from there."],
    tips: ["Say \"Alexa, open Silk\" into the remote to find it quickly.", "From a Windows laptop you can mirror instead: hold the Home button on the Fire remote, choose <b>Mirroring</b>, then press Windows key + K on the laptop."] },
  { id: "xbox", icon: "🎮", title: "Xbox", sub: "Use Microsoft Edge on the console",
    need: "An Xbox One or Series X/S and a controller.",
    steps: ["Open <b>Microsoft Edge</b> from My games & apps.", "Select the address bar and type <b>" + SITE + "</b>.", "Choose <b>This is the TV screen</b>, then <b>Open the lobby</b>.", "Scan the small host QR code with your phone and run the game from there."],
    tips: ["PlayStation doesn't have a proper web browser, so use one of the other options instead."] },
  { id: "apple", icon: "🍎", title: "Apple TV, iPhone or iPad", sub: "AirPlay screen mirroring",
    need: "An iPhone or iPad (or a Mac) on the same Wi-Fi as an Apple TV or AirPlay TV. Use a spare device, because it has to stay on the quiz screen.",
    steps: ["On the spare iPhone or iPad, open Safari and go to <b>" + SITE + "</b>.", "Tap <b>This is the TV screen</b> and turn the device sideways.", "Open <b>Control Centre</b> (swipe down from the top right), tap <b>Screen Mirroring</b> and pick the TV.", "If a code appears on the TV, type it on the device.", "Tap <b>Open the lobby</b>. Everyone joins on their own phones."],
    tips: ["Many Samsung, LG and Sony TVs support AirPlay too, as do 4K Roku devices.", "Plug the device into a charger and turn on Do Not Disturb so messages don't pop up on the TV."] },
  { id: "android", icon: "📱", title: "Android phone or tablet", sub: "Screen mirroring (Smart View, Screen Cast)",
    need: "A spare Android phone or tablet, because it has to stay on the quiz screen. Works with most smart TVs, Chromecast, Roku and Fire TV.",
    steps: ["On the spare device, open Chrome and go to <b>" + SITE + "</b>, then tap <b>This is the TV screen</b>.", "Turn it sideways and swipe down twice from the top to open Quick Settings.", "Tap <b>Smart View</b> (Samsung) or <b>Cast</b> / <b>Screen Cast</b> (other brands) and pick the TV.", "Tap <b>Start now</b>. On some TVs you need to press <b>Allow</b> with the remote.", "Tap <b>Open the lobby</b>. Everyone joins on their own phones."],
    tips: ["Plug the device into a charger and turn on Do Not Disturb so messages don't appear on the TV.", "Turn on auto-rotate so the quiz fills the screen."] },
  { id: "roku", icon: "🟣", title: "Roku", sub: "Screen mirroring from Android or Windows",
    need: "A Windows laptop or a spare Android phone or tablet on the same Wi-Fi.",
    steps: ["Open <b>" + SITE + "</b> on the laptop or device and tap <b>This is the TV screen</b>.", "Windows: press <b>Windows key + K</b> and pick the Roku. Android: open Quick Settings and tap <b>Smart View</b> or <b>Screen Cast</b>.", "On the TV, choose <b>Allow</b> (or <b>Always allow</b>).", "Press <b>Open the lobby</b>."],
    tips: ["iPhones can use AirPlay with 4K Roku devices: see Apple TV, iPhone or iPad."] },
  { id: "sky", icon: "☁️", title: "Sky Glass or Sky Stream", sub: "No web browser, so use the HDMI socket",
    need: "A laptop and HDMI cable, or a Chromecast or Fire TV Stick plugged into the Sky Glass HDMI socket.",
    steps: ["Plug a laptop (see Laptop with an HDMI cable), Chromecast or Fire TV Stick into an HDMI socket on the TV.", "Switch the TV to that input.", "Follow the steps for that device."],
    tips: ["Some people get AirPlay working from an iPhone on newer Sky Glass sets (Control Centre → Screen Mirroring). It isn't reliable on every set, so have a plan B."] },
  { id: "other", icon: "❓", title: "Something else", sub: "Any TV, any brand",
    need: "Any device with a web browser that can show its screen on the TV.",
    steps: ["Look for a <b>web browser</b> app on the TV. If there is one, open <b>" + SITE + "</b> and choose <b>This is the TV screen</b>.", "If not, plug in a laptop with an HDMI cable. That works with any TV.", "Or mirror a spare phone or tablet: most TVs accept Smart View, Screen Cast, Miracast or AirPlay."],
    tips: ["Phones join over Wi-Fi or mobile data, so they don't have to be on the TV's network."] },
];
function tvHelp() {
  document.body.className = "phone";
  let open = P.get("tvhelp") || "";
  const card = g => `<div class="card tvg ${open === g.id ? "open" : ""}" id="g-${g.id}">
      <button class="tvgh" data-g="${g.id}" aria-expanded="${open === g.id}"><span class="tvgi">${g.icon}</span><span><b>${esc(g.title)}</b>${g.best ? `<em>Easiest</em>` : ""}<small>${esc(g.sub)}</small></span><span class="chev">${open === g.id ? "−" : "+"}</span></button>
      ${open === g.id ? `<div class="tvgb"><p class="need"><b>You'll need:</b> ${g.need}</p><ol>${g.steps.map(x => `<li>${x}</li>`).join("")}</ol>
        ${g.tips.length ? `<div class="tips">${g.tips.map(x => `<p>💡 ${x}</p>`).join("")}</div>` : ""}
        <button class="btn" data-copy="${g.id}">Copy link to these steps</button></div>` : ""}
    </div>`;
  const draw = () => {
    app.innerHTML = `<div class="ph land tvhelp"><div class="hd"><div class="disp">Buzz In</div><a class="muted" href="${esc(withLocal(baseUrl() + "?"))}">Back</a></div>
      <div><h2>Get it on your TV</h2><p class="muted" style="margin-top:8px">One device shows the quiz on the TV. Everyone else just scans the code with their own phone.</p></div>
      <div class="card"><b>Quickest way to choose</b>
        <p>Got a laptop? Use <b>Chromecast</b> if the TV has Google Cast, or an <b>HDMI cable</b> for any TV.</p>
        <p>No laptop? Use the <b>TV's own web browser</b> (Samsung, LG, Fire TV, Xbox), or mirror a spare phone or tablet.</p></div>
      ${TV_GUIDES.map(card).join("")}
      <div class="card"><h2 style="font-size:26px">Before the big day</h2><ol>
        <li>Try it once at the house you'll play at, a day or two before.</li>
        <li>Open <b>${SITE}</b>, tap <b>This is the TV screen</b> and check it fills the TV.</li>
        <li>Press <b>Open the lobby</b> and check you can hear the music.</li>
        <li>Scan the code with one phone to check it joins.</li></ol></div>
      <div class="card"><h2 style="font-size:26px">If something's not right</h2>
        <p><b>No sound:</b> press Open the lobby (sound only starts after a tap), check the TV isn't muted, and check the music is on in the host controls.</p>
        <p><b>Phones can't join:</b> check the 4-letter code on the TV and that the phone has internet.</p>
        <p><b>The screen went to sleep:</b> keep the laptop or tablet plugged in. Refresh the page and it carries on where it left off.</p>
        <p><b>The quiz is tiny or cut off:</b> make the browser full screen (F11 on Windows) or turn the tablet sideways.</p></div>
    </div>`;
    if (open) { const el = document.getElementById("g-" + open); if (el) el.scrollIntoView({ block: "start" }); }
  };
  app.addEventListener("click", async e => {
    const g = e.target.closest("[data-g]"), c = e.target.closest("[data-copy]");
    if (g) { open = open === g.dataset.g ? "" : g.dataset.g; history.replaceState(null, "", "?tvhelp" + (open ? "=" + open : "") + (LOCAL ? "&local=1" : "")); draw(); return; }
    if (c) {
      const url = baseUrl() + "?tvhelp=" + c.dataset.copy;
      try { await navigator.clipboard.writeText(url); toast("Link copied. Send it to whoever's setting up the TV."); } catch (err) { toast(url, 6000); }
    }
  });
  draw();
}

// ======================================================================
// LANDING
// ======================================================================
function landing() {
  document.body.className = "phone";
  const saved = ls.get("buzzin_tv", null), canResume = saved && saved.phase !== "final" && Date.now() - (saved.saved || 0) < 12 * 3600e3;
  app.innerHTML = `<div class="ph land"><img class="appicon" src="icon-192.png" alt=""><div class="logo disp" style="margin-top:4px">Buzz In</div><p class="center muted">Family quiz night. The TV shows the questions, phones are the buzzers.</p>
    <div class="card"><h2>Joining a game?</h2><input id="code" class="codein" maxlength="4" placeholder="CODE" autocomplete="off" autocapitalize="characters"><button class="btn gold big" data-a="go">Join</button></div>
    <div class="card"><h2>Hosting?</h2><p class="muted">Open this on the device connected to the TV.</p>
      <a class="btn big" href="${withLocal("?tv")}">This is the TV screen</a>
      <a class="btn big" href="${withLocal("?tvhelp")}">How do I get it on my TV?</a>
      ${canResume ? `<a class="btn big" href="${withLocal("?tv=" + saved.room)}">Resume game ${esc(saved.room)}</a>` : ""}</div>
    <div class="card"><h2>Family Round</h2><p class="muted">Set up questions and photos about your family on the phone you'll host with.</p>
      <a class="btn big" href="${withLocal("?family=1")}">Set up the Family Round</a></div></div>`;
  const go = () => { const c = ($("#code").value || "").trim().toUpperCase(); if (c.length === 4) location.href = withLocal("?join=" + c); };
  app.addEventListener("click", e => { if (e.target.closest("[data-a=go]")) go(); });
  $("#code").addEventListener("keydown", e => { if (e.key === "Enter") go(); });
}


// ======================================================================
// ADMIN (owner only: ?admin)
// ======================================================================
function adminPage() {
  document.body.className = "phone";
  document.title = "Buzz In admin";
  let pass = ls.get("buzzin_admin", ""), data = null, msg = "", busy = false;
  const fmtD = d => d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";
  const fmtDT = d => d ? new Date(d).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "never";
  async function call(action, args) {
    busy = true; draw();
    try {
      const r = await rpc("buzzin_admin", { p_pass: pass, p_action: action, p_args: args || {} });
      if (r && r.ok) { data = r; msg = ""; ls.set("buzzin_admin", pass); }
      else if (r && r.reason === "password") { data = null; pass = ""; ls.del("buzzin_admin"); msg = "Wrong password."; }
      else if (r && r.reason === "short") msg = "The new password needs at least 8 characters.";
      else msg = "Something went wrong.";
    } catch (e) { msg = "Couldn't reach the server. Check your connection."; }
    busy = false; draw();
  }
  function draw() {
    if (!data) {
      paint(app, `<div class="ph land adm"><img class="appicon" src="icon-192.png" alt=""><div class="logo disp" style="margin-top:4px">Buzz In</div><p class="center muted">Owner admin</p>
        <div class="card"><h2>Log in</h2><input id="a-pass" type="password" placeholder="Admin password" autocomplete="current-password">
        ${msg ? `<p style="margin:0;color:#ff8a8a;font-weight:700">${esc(msg)}</p>` : ""}
        <button class="btn gold big" data-x="login" ${busy ? "disabled" : ""}>${busy ? "Checking…" : "Log in"}</button></div></div>`);
      return;
    }
    const now = Date.now();
    const codes = data.codes.map(c => {
      const exp = c.expires && new Date(c.expires).getTime() < now;
      const tag = !c.active ? `<span class="tag off">Off</span>` : exp ? `<span class="tag off">Expired</span>` : c.in_use ? `<span class="tag live">In a game now</span>` : `<span class="tag on">Active</span>`;
      return `<div class="item"><div class="row" style="justify-content:space-between"><span class="code">${esc(c.code)}</span>${tag}</div>
        <div><b>${esc(c.label || "No name")}</b> <span class="muted">${c.expires ? "· until " + fmtD(c.expires) : "· no expiry"}</span></div>
        <div class="muted" style="font-size:14px">Used ${c.uses} time${c.uses === 1 ? "" : "s"} · last ${fmtDT(c.last_used)}</div>
        <div class="row"><button class="btn" data-x="copy" data-c="${esc(c.code)}">Copy message</button>
          <button class="btn" data-x="toggle" data-c="${esc(c.code)}" data-on="${c.active ? 0 : 1}">${c.active ? "Turn off" : "Turn on"}</button>
          ${c.in_use ? `<button class="btn" data-x="free" data-c="${esc(c.code)}">Free it up</button>` : ""}
          <button class="btn" data-x="del" data-c="${esc(c.code)}">Delete</button></div></div>`;
    }).join("") || `<p class="muted" style="margin:0">No codes yet.</p>`;
    const leads = data.leads.map(l => `<div class="item"><div class="row" style="justify-content:space-between"><b>${esc(l.email)}</b><button class="btn" style="flex:0 0 auto" data-x="dellead" data-id="${l.id}">✕</button></div>
      <div class="muted" style="font-size:14px">${esc(l.name || "")}${l.name ? " · " : ""}${fmtD(l.at)}${l.room ? " · game " + esc(l.room) : ""}</div></div>`).join("") || `<p class="muted" style="margin:0">Nobody yet. Players see a sign-up box on their phone when a game ends.</p>`;
    paint(app, `<div class="ph land adm"><div class="logo disp" style="font-size:40px">Buzz In admin</div>
      <div class="card"><h2>Who can host?</h2>
        <div class="lockstate ${data.locked ? "locked" : "open"}">${data.locked ? "🔒 Locked: a host code is needed" : "🔓 Open: anyone with the link can host"}</div>
        <p class="muted" style="margin:0">${data.locked ? "The TV screen asks for a host code before a game can start. Players never need a code." : "Locking makes the TV screen ask for a host code. Games already running carry on."}</p>
        <button class="btn ${data.locked ? "" : "gold"} big" data-x="lock" data-on="${data.locked ? 0 : 1}" ${busy ? "disabled" : ""}>${data.locked ? "Unlock (let anyone host)" : "Lock hosting"}</button></div>
      <div class="card"><h2>Host codes</h2>
        <p class="muted" style="margin:0">One code per person. Each code can run one game at a time, so a code passed around stops working while its owner is playing.</p>
        <input id="c-label" placeholder="Who's it for? e.g. Tom" maxlength="60">
        <label class="muted" style="font-size:14px">Expires (optional)<input id="c-exp" type="date"></label>
        <button class="btn gold big" data-x="add" ${busy ? "disabled" : ""}>Create code</button>
        ${codes}</div>
      <div class="card"><h2>Sign-ups · ${data.leads.length}</h2>${data.leads.length ? `<button class="btn" data-x="copyemails">Copy all emails</button>` : ""}${leads}</div>
      <div class="card"><h2>Admin password</h2><input id="a-new" type="password" placeholder="New password (8+ characters)" autocomplete="new-password">
        <button class="btn" data-x="setpass">Change password</button>
        <button class="btn" data-x="logout">Log out on this device</button></div>
      ${msg ? `<p class="center" style="color:#ff8a8a;font-weight:700">${esc(msg)}</p>` : ""}</div>`);
  }
  const copy = t => { try { navigator.clipboard.writeText(t).then(() => toast("Copied"), () => toast(t, 6000)); } catch (e) { toast(t, 6000); } };
  app.addEventListener("click", e => {
    const b = e.target.closest("[data-x]"); if (!b || busy) return;
    const x = b.dataset.x, c = b.dataset.c;
    if (x === "login") { pass = ($("#a-pass").value || ""); if (pass) call("get"); }
    else if (x === "lock") call("lock", { locked: b.dataset.on === "1" });
    else if (x === "add") call("add_code", { label: ($("#c-label").value || "").trim(), expires: $("#c-exp").value || "" }).then(() => { const l = $("#c-label"), d = $("#c-exp"); if (l) l.value = ""; if (d) d.value = ""; });
    else if (x === "toggle") call("set_code", { code: c, active: b.dataset.on === "1" });
    else if (x === "free") call("free_code", { code: c });
    else if (x === "del") { if (b.dataset.sure) call("del_code", { code: c }); else { b.dataset.sure = 1; b.textContent = "Tap again to delete"; } }
    else if (x === "dellead") { if (b.dataset.sure) call("del_lead", { id: b.dataset.id }); else { b.dataset.sure = 1; b.textContent = "Delete?"; } }
    else if (x === "copy") { const cd = data.codes.find(k => k.code === c); copy(`Your Buzz In host code is ${c}.\nOpen ${SITE} on the TV screen, tap "This is the TV screen" and enter the code when asked. Players just scan the QR code, no code needed.${cd && cd.expires ? `\nIt works until ${fmtD(cd.expires)}.` : ""}`); }
    else if (x === "copyemails") copy(data.leads.map(l => l.email).join(", "));
    else if (x === "setpass") { const v = $("#a-new").value || ""; if (v.length < 8) { msg = "The new password needs at least 8 characters."; draw(); return; } call("set_pass", { pass: v }).then(() => { if (data) { pass = v; ls.set("buzzin_admin", v); call("get"); toast("Password changed"); } }); }
    else if (x === "logout") { ls.del("buzzin_admin"); pass = ""; data = null; draw(); }
  });
  app.addEventListener("keydown", e => { if (e.target.id === "a-pass" && e.key === "Enter") { pass = e.target.value || ""; if (pass) call("get"); } });
  if (pass) call("get"); else draw();
}

// ===== ROUTE =====
if (P.has("tv")) tvMain();
else if (window.BUZZIN_ADMIN) adminPage();
else if (P.has("admin")) location.replace("admin.html");
else if (P.has("family")) familyPage();
else if (P.has("tvhelp")) tvHelp();
else if (P.get("join")) phoneMain(P.get("join"));
else if (P.get("host")) phoneMain(P.get("host"), P.get("k"));
else landing();
