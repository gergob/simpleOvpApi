var express = require('express');
var router = express.Router();

var dummyData = require('./dummyData');
var movies = dummyData.movies;

var API_HTTP_HEADER = 'X-SimpleOvpApi';
var API_HTTP_HEADER_VALUE = 'USER_KEY_';

var acceptedUsers = [
  'abc',
  'abc@abc.com',
  'test',
  'test@test.com',
  'a',
  'a@a',
  'dummy',
  'dummy@mysite.net'
];
var acceptedPasswords = [
  'abc',
  'abc@abc.com',
  'test',
  'test@test.com',
  'a',
  'a@a',
  'dummy',
  'dummy@mysite.net'
];

/**
 * @api {get} /banner
 * @apiVersion 0.5.0
 * @apiName GetBanner
 * @apiExample Example usage:
 * curl http://localhost/banner/
 *
 * @apiSuccess {Number}   id            The ID of the banner item
 * @apiSuccess {String}   imageSrc      The image source of the banner
 * @apiSuccess {String}   alt           The alt value for the image
 * @apiSuccess {String}   title         The title of the movie which is shown on te banner
 */
router.get('/banner', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET');
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


/**
 * @api {post} /login
 * @apiVersion 0.5.0
 * @apiName Login
 * @apiExample Example usage:
 * curl -d '{email:"john@doe.com", password:"secret"}' http://localhost/banner/
 *
 * @apiSuccess 200
 * @apiError 403
 */
router.post('/login', function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var email = req.body.email || null;
    var password = req.body.password || null;

    if(email === null || password === null) {
        var clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.warn('got request without email or password data from:' + clientIp);
        res.sendStatus(400);
    }

    console.log(email);
    console.log(password);

    var userIdx = acceptedUsers.indexOf(email.toLowerCase());
    if (userIdx > -1 && password === acceptedPasswords[userIdx]) {
        res.header(API_HTTP_HEADER, API_HTTP_HEADER_VALUE + userIdx);
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
});

/**
 * @api {get} /menu
 * @apiVersion 0.5.0
 * @apiName GetMenu
 * @apiExample Example usage:
 * curl http://localhost/menu/
 *
 * @apiSuccess {Number}   id            The ID of the menu item
 * @apiSuccess {String}   title         The title of the movie which is shown on te banner
 * @apiSuccess {Object[]} items         The elements defined under this menu item
 *
 * @apiSuccessExample Succes-Response:
 * HTTP/1.1 200 OK
 *     {
 *        id: 'DEFAULT',
 *        title: '',
 *        items: [{
 *          'action': 'accedo://page/resume',
 *          'id': 'resume',
 *          'state': '',
 *          'title': 'Resume',
 *          'page': 'Resume',
 *          'icon': 'update',
 *          'items': []
 *        }, {
 *          'action': 'accedo://page/movies',
 *          'id': 'movies',
 *          'state': '',
 *          'title': 'Movies',
 *          'page': 'Movies',
 *          'icon': 'movie',
 *          'items': []
 *        }]
 *    }
 */
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
            }, {
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
                }, {
                    'action': 'accedo://page/movies/comedy',
                    'id': 'movies-comedy',
                    'state': '',
                    'title': 'Comedy',
                    'page': 'Resume',
                    'icon': '',
                    'items': []
                }, {
                    'action': 'accedo://page/movies/scifi',
                    'id': 'movies-scifi',
                    'state': '',
                    'title': 'Sci-Fi',
                    'page': 'Resume',
                    'icon': '',
                    'items': []
                }]
            }, {
                'action': 'accedo://page/series',
                'id': 'series',
                'state': '',
                'title': 'Series',
                'page': 'Series',
                'icon': 'theaters',
                'items': []
            }, {
                'action': 'accedo://page/search',
                'id': 'search',
                'state': '',
                'title': 'Search',
                'page': 'Search',
                'icon': 'search',
                'items': []
            }, ]
        }
    };

    res.send(menu);

});

/**
 * @api {get} /resume
 * @apiVersion 0.5.0
 * @apiName GetResume
 * @apiExample Example usage:
 * curl http://localhost/api/resume/
 *
 * @apiSuccess {Number}   id            The ID of the movie/serie item
 * @apiSuccess {String}   logoSrc       The path to the logo for the movie/serie
 * @apiSuccess {String}   imageSrc      The path of the image for the movie/serie
 * @apiSuccess {String}   title         The title of the movie/serie which is shown on te banner
 * @apiSuccess {String}   description   Short text about the content of the movie/serie
 * @apiSuccess {String}   genre         The genre of the movie/serie
 * @apiSuccess {String}   videSrc       The path to playback of the movie/serie
 * @apiSuccess {Boolean}  finished      Has the user finished wathing the movie/serie
 * @apiSuccess {String}   type          The type of the asset, can be 'movie' or 'serie'
 * @apiSuccessExample Succes-Response:
 * HTTP/1.1 200 OK
 *     [{
 *         id: 1,
 *         logoSrc: 'images/logo_antman.jpg',
 *         imageSrc: 'images/banner_antman.jpg',
 *         title: 'Ant - Man',
 *         description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
 *         genre: 'Sci-Fi/Action',
 *         videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
 *         finished: false,
 *         type: 'movie'
 *       },...
 *      ]
 *
 */
router.get('/resume', function(req, res, next) {
    var result = [];

    movies.forEach(function(movie) {
        if (!movie.finished) {
            result.push(movie);
        }
    });

    res.send({
        items: result
    });
});

/**
 * @api {get} /movie
 * @apiVersion 0.5.0
 * @apiName GetMovie
 * @apiExample Example usage:
 * curl http://localhost/api/movie/
 *
 * @apiSuccess {Number}   id            The ID of the movie/serie item
 * @apiSuccess {String}   logoSrc       The path to the logo for the movie/serie
 * @apiSuccess {String}   imageSrc      The path of the image for the movie/serie
 * @apiSuccess {String}   title         The title of the movie/serie which is shown on te banner
 * @apiSuccess {String}   description   Short text about the content of the movie/serie
 * @apiSuccess {String}   genre         The genre of the movie/serie
 * @apiSuccess {String}   videSrc       The path to playback of the movie/serie
 * @apiSuccess {Boolean}  finished      Has the user finished wathing the movie/serie
 * @apiSuccess {String}   type          The type of the asset, can be 'movie' or 'serie'
 * @apiSuccessExample Succes-Response:
 * HTTP/1.1 200 OK
 *     [{
 *         id: 1,
 *         logoSrc: 'images/logo_antman.jpg',
 *         imageSrc: 'images/banner_antman.jpg',
 *         title: 'Ant - Man',
 *         description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
 *         genre: 'Sci-Fi/Action',
 *         videoSrc: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
 *         finished: false,
 *         type: 'movie'
 *       },...
 *      ]
 *
 */
router.get('/movie', function(req, res, next) {
    var result = [];

    movies.forEach(function(movie) {
        if (movie.type === dummyData.types.MOVIE) {
            result.push(movie);
        }
    });

    res.send({
        items: result
    });
});

router.get('/detail/:id', function(req, res, next) {
    var result = [];
    var found = false;

    movies.forEach(function(movie) {
        if (movie.id == req.params.id) {
            found = true;
            res.send({
                items: [movie]
            });
        }
    });

    if (!found) {
        res.sendStatus(404);
    }
});

router.get('/serie', function(req, res, next) {
    var result = [];
    movies.forEach(function(movie) {
        if (movie.type === dummyData.types.SERIE) {
            result.push(movie);
        }
    });

    res.send({
        items: result
    });
});

router.get('/data/:nrOfItems', function(req, res, next) {
    var result = new Array(req.params.nrOfItems),
        movieIdx = 0;
        console.log("Loading:" + req.params.nrOfItems + " elements.");

    for (var idx = 0; idx < req.params.nrOfItems; ++idx) {
        movieIdx = (Math.floor(Math.random() * 1000)) % movies.length;
        result.push(movies[movieIdx]);
    }

    res.send({
        items: result
    });
});

router.post('/search', function(req, res, next) {
    var result = [];
    var keyword = '';

    if (req.body.keyword && req.body.keyword === '') {
        res.sendStatus(400);
        if (next) {
            next();
        }
        return;
    } else {
        keyword = req.body.keyword;
    }

    console.log('Search - keyword is:[' + keyword + ']');

    movies.forEach(function(movie) {
        if (movie.title.toLowerCase().indexOf(keyword) >= 0 ||
            movie.description.toLowerCase().indexOf(keyword) >= 0 ||
            movie.genre.toLowerCase().indexOf(keyword) >= 0 ||
            checkActors(movie.actors) ||
            movie.director.toLowerCase().indexOf(keyword) >= 0 ||
            movie.releaseDate.toLowerCase().indexOf(keyword) >= 0) {
            console.log('Found entry matching search criteria, id:[' + movie.id + '] and title:[' + movie.title + ']')
            result.push(movie);
        }
    });

    if (result.length === 0) {
        res.sendStatus(404);
    } else {
        res.send({
            items: result
        });
    }
});

function checkActors(actors, searchTerm) {
    if (actors) {
        actors.forEach(function(item) {
            if (item.toLowerCase().indexOf(searchTerm) >= 0) {
                return true;
            }
        });
    }
    return false;
}

module.exports = router;
