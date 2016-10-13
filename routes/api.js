var express = require('express');
var router = express.Router();

var movies = [{
  id: 1,
  logoSrc: 'images/logo_antman.jpg',
  imageSrc: 'images/banner_antman.jpg',
  title: 'Ant - Man',
  description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
  genre: 'Sci-Fi/Action',
  finished: false
}, {
  id: 2,
  logoSrc: 'images/logo_avengers.jpg',
  imageSrc: 'images/banner_avengers.jpg',
  title: 'Avengers',
  description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
  genre: 'Sci-Fi/Action',
  finished: true
}, {
  id: 3,
  logoSrc: 'images/logo_edgeoftomorrow.jpg',
  imageSrc: 'images/banner_edgeoftomorrow.jpg',
  title: 'Edge of Tomorrow',
  description: 'A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.',
  genre: 'Sci-Fi/Action',
  finished: false
}, {
  id: 4,
  logoSrc: 'images/logo_interstellar.jpg',
  imageSrc: 'images/banner_interstellar.jpg',
  title: 'Interstellar',
  description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 5,
  logoSrc: 'images/logo_johncarter.jpg',
  imageSrc: 'images/banner_johncarter.jpg',
  title: 'John Carter',
  description: 'Transported to Barsoom, a Civil War vet discovers a barren planet seemingly inhabited by 12-foot tall barbarians. Finding himself prisoner of these creatures, he escapes, only to encounter Woola and a princess in desperate need of a savior.',
  genre: 'Sci-Fi',
  finished: true
}, {
  id: 6,
  logoSrc: 'images/logo_captainamerica.jpg',
  imageSrc: 'images/banner_captainamerica.jpg',
  title: 'Captain America',
  description: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 7,
  logoSrc: 'images/logo_deadpool.jpg',
  imageSrc: 'images/banner_deadpool.jpg',
  title: 'Deadpool',
  description: 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 8,
  logoSrc: 'images/logo_fantastic4.jpg',
  imageSrc: 'images/banner_fantastic4.jpg',
  title: 'Fant4stic',
  description: 'Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.',
  genre: 'Sci-Fi',
  finished: true
}, {
  id: 9,
  logoSrc: 'images/logo_frozen.jpg',
  imageSrc: 'images/banner_frozen.jpg',
  title: 'Frozen',
  description: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
  genre: 'Animation',
  finished: true
}, {
  id: 10,
  logoSrc: 'images/logo_ironman3.jpg',
  imageSrc: 'images/banner_ironman3.jpg',
  title: 'Iron Man 3',
  description: 'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 11,
  logoSrc: 'images/logo_rio.jpg',
  imageSrc: 'images/banner_rio.jpg',
  title: 'Rio',
  description: 'When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.',
  genre: 'Animation',
  finished: false
}, {
  id: 12,
  logoSrc: 'images/logo_riseoftheguardians.jpg',
  imageSrc: 'images/banner_riseoftheguardians.jpg',
  title: 'Rise of the Guardians',
  description: 'When the evil spirit Pitch launches an assault on Earth, the Immortal Guardians team up to protect the innocence of children all around the world.',
  genre: 'Animation',
  finished: true
}, {
  id: 13,
  logoSrc: 'images/logo_startrek.jpg',
  imageSrc: 'images/banner_startrek.jpg',
  title: 'Star Trek',
  description: 'After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 14,
  logoSrc: 'images/logo_thehobbit.jpg',
  imageSrc: 'images/banner_thehobbit.jpg',
  title: 'The Hobbit',
  description: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 15,
  logoSrc: 'images/logo_theinterview.jpg',
  imageSrc: 'images/banner_theinterview.jpg',
  title: 'The Interview',
  description: 'Dave Skylark and his producer Aaron Rapoport run the celebrity tabloid show "Skylark Tonight". When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to turn their trip to Pyongyang into an assassination mission.',
  genre: 'Action-Comedy',
  finished: false
}, {
  id: 16,
  logoSrc: 'images/logo_warcraft.jpg',
  imageSrc: 'images/banner_warcraft.jpg',
  title: 'Warcraft',
  description: 'As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.',
  genre: 'Sci-Fi',
  finished: true
}];

router.get('/banner', function(req, res, next) {
  res.header( 'Access-Control-Allow-Origin', '*');
  res.header( 'Access-Control-Allow-Credentials', true);
  res.header( 'Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  var bannerData = [{
          imageSrc: 'images/banner_antman.jpg',
          alt: 'AntMan',
          title: 'Ant - Man',
          id: 1
        }, {
          imageSrc: 'images/banner_avengers.jpg',
          alt: 'Avengers',
          title: 'Avengers',
          id: 2
        }, {
          imageSrc: 'images/banner_edgeoftomorrow.jpg',
          alt: 'Edge Of Tomorrow',
          title: 'Edge of Tomorrow',
          id: 3

        }, {
          imageSrc: 'images/banner_interstellar.jpg',
          alt: 'Interstellar',
          title: 'Interstellar',
          id: 4
        }, {
          imageSrc: 'images/banner_johncarter.jpg',
          alt: 'John Carter',
          title: 'John Carter',
          id: 5
        }];
  res.send(bannerData);
});

router.post('/login', function(req, res, next) {
  res.header( 'Access-Control-Allow-Origin', '*');
  res.header( 'Access-Control-Allow-Credentials', true);
  res.header( 'Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  var email = req.body.email || null;
  var password = req.body.password || null;
  console.log(email);
  console.log(password);
  if(email.toLowerCase() === 'abc@abc.com' && password === 'abc') {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(403);
  }

});

router.get('/menu', function(req, res, next) {
  var menu = {
    config_menu: {
      id: 'DEFAULT',
      title: '',
      items: [{
          'action': 'accedo://page/resume',
          'id': 'resume',
          'state': '',
          'title': 'Resume',
          'page': 'Resume',
          'icon': 'update',
          'items': []
        },
        {
            'action': 'accedo://page/movies',
            'id': 'movies',
            'state': '',
            'title': 'Movies',
            'page': 'Movies',
            'icon': 'movie',
            'items': [{
                  'action': 'accedo://page/movies/action',
                  'id': 'movies-action',
                  'state': '',
                  'title': 'Action',
                  'page': 'Resume',
                  'icon': '',
                  'items': []
            },{
                    'action': 'accedo://page/movies/comedy',
                    'id': 'movies-comedy',
                    'state': '',
                    'title': 'Comedy',
                    'page': 'Resume',
                    'icon': '',
                    'items': []
            },{
                    'action': 'accedo://page/movies/scifi',
                    'id': 'movies-scifi',
                    'state': '',
                    'title': 'Sci-Fi',
                    'page': 'Resume',
                    'icon': '',
                    'items': []
            }]
        },
        {
            'action': 'accedo://page/series',
            'id': 'series',
            'state': '',
            'title': 'Series',
            'page': 'Series',
            'icon': 'theaters',
            'items': []
        },
        {
            'action': 'accedo://page/search',
            'id': 'search',
            'state': '',
            'title': 'Search',
            'page': 'Search',
            'icon': 'search',
            'items': []
          },
      ]
    }
  };

  res.send(menu);
});

router.get('/resume', function(req, res, next) {
  var elements = movies;
  res.send({items: elements});
});

router.get('/movie', function(req, res, next) {
  var elements = movies;
  res.send({items: elements});
});

router.get('/movie/:id', function(req, res, next) {
    res.send({elements: []});
});

router.get('/serie', function(req, res, next) {
    res.send({elements: []});
});

router.get('/search', function(req, res, next) {
    res.send({elements: []});
});

module.exports = router;
