var express = require('express');
var router = express.Router();

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

router.post('/login', function(req, res, next){
  res.header( 'Access-Control-Allow-Origin', '*');
  res.header( 'Access-Control-Allow-Credentials', true);
  res.header( 'Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  var email = req.body.email || null;
  var password = req.body.password || null;

  if(email.toLowerCase() === 'abc@abc.com' && password === 'abc') {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(403);
  }

});

router.get('/menu', function(req, res, next){
  var menu = {
    config_menu: {
      id: 'DEFAULT',
      title: '',
      items: [{
          'action': 'accedo://page/resume',
          'id': 'resume',
          'state': '',
          'title': 'Resume',
          'items': []
        },
        {
            'action': 'accedo://page/movies',
            'id': 'movies',
            'state': '',
            'title': 'Movies',
            'items': [{
                  'action': 'accedo://page/movies/action',
                  'id': 'movies-action',
                  'state': '',
                  'title': 'Action',
                  'items': []
            },{
                    'action': 'accedo://page/movies/comedy',
                    'id': 'movies-comedy',
                    'state': '',
                    'title': 'Comedy',
                    'items': []
            },{
                    'action': 'accedo://page/movies/scifi',
                    'id': 'movies-scifi',
                    'state': '',
                    'title': 'Sci-Fi',
                    'items': []
            }]
        },
        {
            'action': 'accedo://page/series',
            'id': 'series',
            'state': '',
            'title': 'Series',
            'items': []
        },
        {
            'action': 'accedo://page/search',
            'id': 'search',
            'state': '',
            'title': 'Search',
            'items': []
          },
      ]
    }
  };

  res.send(menu);
});

module.exports = router;
