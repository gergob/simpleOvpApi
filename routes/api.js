var express = require('express');
var router = express.Router();

var movies = [{
  id: 1,
  logoSrc: 'images/logo_antman.jpg',
  imageSrc: 'images/banner_antman.jpg',
  title: 'Ant - Man',
  genre: 'Sci-Fi/Action',
  finished: false
}, {
  id: 2,
  logoSrc: 'images/logo_avengers.jpg',
  imageSrc: 'images/banner_avengers.jpg',
  title: 'Avengers',
  genre: 'Sci-Fi/Action',
  finished: true
}, {
  id: 3,
  logoSrc: 'images/logo_edgeoftomorrow.jpg',
  imageSrc: 'images/banner_edgeoftomorrow.jpg',
  title: 'Edge of Tomorrow',
  genre: 'Sci-Fi/Action',
  finished: false
}, {
  id: 4,
  logoSrc: 'images/logo_interstellar.jpg',
  imageSrc: 'images/banner_interstellar.jpg',
  title: 'Interstellar',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 5,
  logoSrc: 'images/logo_johncarter.jpg',
  imageSrc: 'images/banner_johncarter.jpg',
  title: 'John Carter',
  genre: 'Sci-Fi',
  finished: true
}, {
  id: 6,
  logoSrc: 'images/logo_captainamerica.jpg',
  imageSrc: 'images/banner_captainamerica.jpg',
  title: 'Captain America',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 7,
  logoSrc: 'images/logo_deadpool.jpg',
  imageSrc: 'images/banner_deadpool.jpg',
  title: 'Deadpool',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 8,
  logoSrc: 'images/logo_fantastic4.jpg',
  imageSrc: 'images/banner_fantastic4.jpg',
  title: 'Fant4stic',
  genre: 'Sci-Fi',
  finished: true
}, {
  id: 9,
  logoSrc: 'images/logo_frozen.jpg',
  imageSrc: 'images/banner_frozen.jpg',
  title: 'Frozen',
  genre: 'Animation',
  finished: true
}, {
  id: 10,
  logoSrc: 'images/logo_ironman3.jpg',
  imageSrc: 'images/banner_ironman3.jpg',
  title: 'Iron Man 3',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 11,
  logoSrc: 'images/logo_rio.jpg',
  imageSrc: 'images/banner_rio.jpg',
  title: 'Rio',
  genre: 'Animation',
  finished: false
}, {
  id: 12,
  logoSrc: 'images/logo_riseoftheguardians.jpg',
  imageSrc: 'images/banner_riseoftheguardians.jpg',
  title: 'Rise of the Guardians',
  genre: 'Animation',
  finished: true
}, {
  id: 13,
  logoSrc: 'images/logo_startrek.jpg',
  imageSrc: 'images/banner_startrek.jpg',
  title: 'Star Trek',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 14,
  logoSrc: 'images/logo_thehobbit.jpg',
  imageSrc: 'images/banner_thehobbit.jpg',
  title: 'The Hobbit',
  genre: 'Sci-Fi',
  finished: false
}, {
  id: 15,
  logoSrc: 'images/logo_theinterview.jpg',
  imageSrc: 'images/banner_theinterview.jpg',
  title: 'The Interview',
  genre: 'Action-Comedy',
  finished: false
}, {
  id: 16,
  logoSrc: 'images/logo_warcraft.jpg',
  imageSrc: 'images/banner_warcraft.jpg',
  title: 'Warcraft',
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
