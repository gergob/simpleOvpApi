var movies = [{
    id: 1,
    logoSrc: 'images/logo_antman.jpg',
    imageSrc: 'images/banner_antman.jpg',
    title: 'Ant - Man',
    length: '1h 57min',
    releaseDate: '17 July 2015 (USA)',
    description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
    genre: 'Action, Adventure, Comedy',
    actors: ['Paul Rudd', 'Michael Douglas', 'Corey Stoll'],
    director: 'Peyton Reed',
    rating: 7.4,
    videoSrc: 'https://res.cloudinary.com/aveautomedia/video/upload/v1478018231/testing/toystory.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 2,
    logoSrc: 'images/logo_avengers.jpg',
    imageSrc: 'images/banner_avengers.jpg',
    title: 'The Avengers',
    length: '2h 23min',
    releaseDate: '4 May 2012 (USA)',
    description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
    genre: 'Action, Sci-Fi',
    actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    director: 'Joss Whedon',
    rating: 8.1,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 3,
    logoSrc: 'images/logo_edgeoftomorrow.jpg',
    imageSrc: 'images/banner_edgeoftomorrow.jpg',
    title: 'Edge of Tomorrow',
    length: '1h 53min',
    releaseDate: '6 June 2014 (USA)',
    description: 'A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.',
    genre: 'Action, Adventure, Sci-Fi ',
    actors: ['Tom Cruise', 'Emily Blunt','Bill Paxton'],
    director: 'Doug Liman',
    rating: 7.9,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 4,
    logoSrc: 'images/logo_interstellar.jpg',
    imageSrc: 'images/banner_interstellar.jpg',
    title: 'Interstellar',
    length: '2h 49min',
    releaseDate: '7 November 2014 (USA)',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: 'Adventure, Drama, Sci-Fi',
    actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    director: 'Christopher Nolan',
    rating: 8.6,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 5,
    logoSrc: 'images/logo_johncarter.jpg',
    imageSrc: 'images/banner_johncarter.jpg',
    title: 'John Carter',
    length: '2h 12min',
    releaseDate: '9 March 2012 (USA)',
    description: 'Transported to Barsoom, a Civil War vet discovers a barren planet seemingly inhabited by 12-foot tall barbarians. Finding himself prisoner of these creatures, he escapes, only to encounter Woola and a princess in desperate need of a savior.',
    genre: 'Action, Adventure, Sci-Fi',
    actors: ['Taylor Kitsch', 'Lynn Collins', 'Willem Dafoe'],
    director: 'Andrew Stanton',
    rating: 6.6,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 6,
    logoSrc: 'images/logo_captainamerica.jpg',
    imageSrc: 'images/banner_captainamerica.jpg',
    title: 'Captain America',
    length: '2h 4min',
    releaseDate: '22 July 2011 (USA)',
    description: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.',
    genre: 'Action, Adventure, Sci-Fi',
    actors: ['Chris Evans', 'Hugo Weaving', 'Samuel L. Jackson'],
    director: 'Joe Johnston',
    rating: 6.9,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 7,
    logoSrc: 'images/logo_deadpool.jpg',
    imageSrc: 'images/banner_deadpool.jpg',
    title: 'Deadpool',
    length: '1h 48min',
    releaseDate: '12 February 2016 (USA)',
    description: 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',
    genre: 'Action, Adventure, Comedy',
    actors: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller'],
    director: 'Tim Miller',
    rating: 8.1,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 8,
    logoSrc: 'images/logo_fantastic4.jpg',
    imageSrc: 'images/banner_fantastic4.jpg',
    title: 'Fant4stic',
    length: '1h 40min',
    releaseDate: '7 August 2015 (USA)',
    description: 'Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.',
    genre: 'Action, Adventure, Sci-Fi',
    actors: ['Miles Teller', 'Kate Mara', 'Michael B. Jordan'],
    director: 'Josh Tank',
    rating: 4.3,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 9,
    logoSrc: 'images/logo_frozen.jpg',
    imageSrc: 'images/banner_frozen.jpg',
    title: 'Frozen',
    length: '1h 42min',
    releaseDate: ' 27 November 2013 (USA)',
    description: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
    genre: 'Animation, Adventure, Comedy ',
    actors: ['Kristen Bell', 'Idina Menzel', 'Jonathan Groff'],
    director: 'Chris Buck, Jennifer Lee',
    rating: 7.6,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 10,
    logoSrc: 'images/logo_ironman3.jpg',
    imageSrc: 'images/banner_ironman3.jpg',
    title: 'Iron Man 3',
    length: '2h 13min',
    releaseDate: '3 May 2013 (USA)',
    description: 'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
    genre: 'Action, Adventure, Sci-Fi',
    actors: ['Robert Downey Jr.', 'Guy Pearce', 'Gwyneth Paltrow'],
    director: 'Shane Black',
    rating: 7.2,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 11,
    logoSrc: 'images/logo_rio.jpg',
    imageSrc: 'images/banner_rio.jpg',
    title: 'Rio',
    length: '1h 36min',
    releaseDate: ' 15 April 2011 (USA)',
    description: 'When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.',
    genre: 'Animation, Adventure, Comedy',
    actors: ['Jesse Eisenberg', 'Anne Hathaway', 'George Lopez'],
    director: 'Carlos Saldanha',
    rating: 7.0,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 12,
    logoSrc: 'images/logo_riseoftheguardians.jpg',
    imageSrc: 'images/banner_riseoftheguardians.jpg',
    title: 'Rise of the Guardians',
    length: '1h 37min',
    releaseDate: '21 November 2012 (USA)',
    description: 'When the evil spirit Pitch launches an assault on Earth, the Immortal Guardians team up to protect the innocence of children all around the world.',
    genre: 'Animation, Adventure, Family',
    actors: ['Hugh Jackman', 'Alec Baldwin', 'Isla Fisher'],
    director: 'Peter Ramsey',
    rating: 7.3,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 13,
    logoSrc: 'images/logo_startrek.jpg',
    imageSrc: 'images/banner_startrek.jpg',
    title: 'Star Trek - Into the Darkness',
    length: '2h 12min',
    releaseDate: '16 May 2013 (USA)',
    description: 'After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.',
    genre: 'Action, Adventure, Sci-Fi ',
    actors: ['Chris Pine', 'Zachary Quinto', 'Zoe Saldana'],
    director: 'J.J Abrams',
    rating: 7.8,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 14,
    logoSrc: 'images/logo_thehobbit.jpg',
    imageSrc: 'images/banner_thehobbit.jpg',
    title: 'The Hobbit',
    length: '2h 49min',
    releaseDate: '14 December 2012 (USA)',
    description: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.',
    genre: 'Adventure, Fantasy',
    actors: ['Martin Freeman', 'Ian McKellen', 'Richard Armitage'],
    director: 'Peter Jackson',
    rating: 7.9,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 15,
    logoSrc: 'images/logo_theinterview.jpg',
    imageSrc: 'images/banner_theinterview.jpg',
    title: 'The Interview',
    length: ' 1h 52min',
    releaseDate: '24 December 2014 (USA)',
    description: 'Dave Skylark and his producer Aaron Rapoport run the celebrity tabloid show "Skylark Tonight". When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to turn their trip to Pyongyang into an assassination mission.',
    genre: 'Comedy',
    actors: ['James Franco', 'Seth Rogen', 'Randall Park'],
    director: 'Even Goldberg',
    rating: 6.6,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 16,
    logoSrc: 'images/logo_warcraft.jpg',
    imageSrc: 'images/banner_warcraft.jpg',
    title: 'Warcraft',
    length: '2h 3min',
    releaseDate: '10 June 2016 (USA)',
    description: 'As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.',
    genre: 'Action, Adventure, Fantasy',
    actors: ['Travis Fimmel', 'Paula Patton', 'Ben Foster'],
    director: 'Duncan Jones',
    rating: 7.1,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 17,
    logoSrc: 'images/logo_bigbangtheory.jpg',
    imageSrc: 'images/banner_bigbangtheory.jpg',
    title: 'Big Bang Theory',
    length: '22min',
    releaseDate: 'TV Series 2007- ',
    description: 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
    genre: 'Comedy, Romance',
    actors: ['Johnny Galecki', 'Jim Parsons', 'Kaley Cuoco'],
    director: 'Chuck Lorre',
    rating: 8.4,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'serie'
}, {
    id: 18,
    logoSrc: 'images/logo_friends.jpg',
    imageSrc: 'images/banner_friends.jpg',
    title: 'Friends',
    length: '22min',
    releaseDate: 'TV Series (1994–2004)',
    description: 'Follows the personal and professional lives of six 20 to 30-something yrs old friends living in Manhattan.',
    genre: 'Comedy, Romance',
    actors: ['Jennifer Aniston', 'Courteney Cox', 'Lisa Kudrow'],
    director: 'David Crane',
    rating: 9.0,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'serie'
}, {
    id: 19,
    logoSrc: 'images/logo_stargate.jpg',
    imageSrc: 'images/banner_stargate.jpg',
    title: 'Stargate',
    length: '44min',
    releaseDate: 'TV Series (1997–2007)',
    description: 'A secret military team, SG-1, is formed to explore the recently discovered Stargates.',
    genre: 'Action, Adventure, Drama, Sci-Fi',
    actors: ['Richard Dean Anderson', 'Michael Shanks', 'Amanda Tapping'],
    director: 'Jonathan Glassner',
    rating: 8.4,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'serie'
}, {
    id: 20,
    logoSrc: 'images/logo_familyguy.jpg',
    imageSrc: 'images/banner_familyguy.jpg',
    title: 'Family Guy',
    length: '22min',
    releaseDate: 'TV Series (1999– )',
    description: 'In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another.',
    genre: 'Comedy, Animation',
    actors: ['Seth MacFarlane', 'Alex Borstein', 'Seth Green'],
    director: 'Seth MacFarlane, David Zuckerman',
    rating: 8.3,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'serie'
}, {
    id: 21,
    logoSrc: 'images/logo_desperate.jpg',
    imageSrc: 'images/banner_desperate.jpg',
    title: 'Desperate Housewives',
    length: '45min',
    releaseDate: 'TV Series (2004–2012)',
    description: 'Secrets and truths unfold through the lives of female friends in one suburban neighborhood, after the mysterious suicide of a neighbor.',
    genre: 'Comedy, Drama, Mystery ',
    actors: ['Teri Hatcher', 'Felicity Huffman', 'Marcia Cross'],
    director: 'Marc Cherry',
    rating: 7.5,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'serie'
}, {
    id: 22,
    logoSrc: 'images/logo_lost.jpg',
    imageSrc: 'images/banner_lost.jpg',
    title: 'Lost',
    length: '44min',
    releaseDate: 'TV Series (2004–2010)',
    description: 'The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.',
    genre: 'Adventure, Drama, Fantasy',
    actors: [ 'Jorge Garcia', 'Josh Holloway', 'Evangeline Lilly'],
    director: 'J.J. Abrams',
    rating: 8.4,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'serie'
}, {
    id: 23,
    logoSrc: 'images/logo_talespin.jpg',
    imageSrc: 'images/banner_talespin.jpg',
    title: 'TaleSpin',
    length: '30min',
    releaseDate: ' TV Series (1990–1991)',
    description: 'Baloo the Bear from the Jungle Book is cast as a 1930\'s Pacific Islands bush pilot.',
    genre: 'Animation, Action, Adventure',
    actors: ['Ed Gilbert', 'R.J. Williams', 'Sally Struthers'],
    director: 'N/A',
    rating: 5.0,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'serie'
}, {
    id: 24,
    logoSrc: 'images/logo_thegodfather.jpg',
    imageSrc: 'images/banner_thegodfather.jpg',
    title: 'The Godfather',
    length: '2h 55min',
    releaseDate: '24 March 1972 (USA)',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    genre: 'Crime, Drama',
    actors: [ 'Marlon Brando', 'Al Pacino', 'James Caan'],
    director: 'Francis Ford Coppola',
    rating: 9.2,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 25,
    logoSrc: 'images/logo_thedarknight.jpg',
    imageSrc: 'images/banner_thedarknight.jpg',
    title: 'The Dark Night',
    length: '2h 32min',
    releaseDate: '18 July 2008 (USA)',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    genre: 'Action, Crime, Drama',
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    director: 'Christopher Nolan',
    rating: 9.0,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}, {
    id: 26,
    logoSrc: 'images/logo_lotr1.jpg',
    imageSrc: 'images/banner_lotr1.jpg',
    title: 'LOTR: The fellowship of the ring',
    length: '2h 58min',
    releaseDate: '19 December 2001 (USA)',
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.',
    genre: 'Adventure, Drama, Fantasy',
    actors: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
    director: 'Peter Jackson',
    rating: 8.8,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 27,
    logoSrc: 'images/logo_inception.jpg',
    imageSrc: 'images/banner_inception.jpg',
    title: 'Inception',
    length: '2h 28min',
    releaseDate: '16 July 2010 (USA)',
    description: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    genre: 'Action, Adventure, Sci-Fi',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    director: 'Christopher Nolan',
    rating: 8.8,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'movie'
}, {
    id: 28,
    logoSrc: 'images/logo_bandofbrothers.jpg',
    imageSrc: 'images/banner_bandofbrothers.jpg',
    title: 'Band of Brothers',
    length: '9h 54min',
    releaseDate: 'TV Mini-Series (2001)',
    description: 'The story of Easy Company of the US Army 101st Airborne division and their mission in WWII Europe from Operation Overlord through V-J Day.',
    genre: 'Action, Drama, History',
    actors: ['Scott Grimes', 'Damian Lewis', 'Ron Livingston'],
    director: 'N/A',
    rating: 9.5,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'serie'
}, {
    id: 29,
    logoSrc: 'images/logo_breakingbad.jpg',
    imageSrc: 'images/banner_breakingbad.jpg',
    title: 'Breaking Bad',
    length: '49min',
    releaseDate: 'TV Series (2008–2013)',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    genre: 'Action, Drama, History',
    actors: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    director: 'Vince Gilligan',
    rating: 9.5,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'serie'
}, {
    id: 30,
    logoSrc: 'images/logo_got.jpg',
    imageSrc: 'images/banner_got.jpg',
    title: 'Game of Thrones',
    length: '56min',
    releaseDate: 'TV Series (2011– )',
    description: 'While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise to power.',
    genre: 'Adventure, Drama, Fantasy',
    actors: ['Emilia Clarke', 'Peter Dinklage', 'Kit Harington'],
    director: 'D.B. Weiss',
    rating: 9.5,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: true,
    type: 'serie'
}, {
    id: 31,
    logoSrc: 'images/logo_shawshenk.jpg',
    imageSrc: 'images/banner_shawshenk.jpg',
    title: 'The Shawshank Redemption',
    length: '144min',
    releaseDate: '14 October 1994 (USA)',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: 'Crime, Drama',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    director: 'Frank Darabont',
    rating: 9.3,
    videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    finished: false,
    type: 'movie'
}];


module.exports = {
    movies: movies,
    types: {
        MOVIE: 'movie',
        SERIE: 'serie'
    }
}
