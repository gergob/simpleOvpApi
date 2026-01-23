import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import requestValidator from '../middleware/requestValidator';
import { movies, types, Movie } from '../dummyData';

const router = express.Router();

const API_HTTP_HEADER = 'X-SimpleOvpApi';
const API_HTTP_HEADER_VALUE = 'USER_KEY_';

const acceptedUsers = [
  'abc',
  'abc@abc.com',
  'test',
  'test@test.com',
  'a',
  'a@a',
  'dummy',
  'dummy@mysite.net',
  'john@doe.com'
];
const acceptedPasswords = [
  'abc',
  'abc@abc.com',
  'test',
  'test@test.com',
  'a',
  'a@a',
  'dummy',
  'dummy@mysite.net',
  'secret'
];

const apiCorsMiddleware = cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,OPTIONS,POST,DELETE',
  allowedHeaders: [
    'Content-Type',
    'X-SimpleOvpApi'
  ],
  exposedHeaders: [
    'X-SimpleOvpApi',
  ],
  credentials: false,
  preflightContinue: true,
  optionsSuccessStatus: 200,
});

router.use(apiCorsMiddleware);
router.use(requestValidator({'excludePaths': ['/login']}));

/**
 * @api {get} /banner banner
 * ...
 */
router.get('/banner', (req: Request, res: Response, next: NextFunction) => {
    const bannerData = [{
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
 * @api {post} /login login
 * ...
 */
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    const email: string | null = req.body.email || null;
    const password: string | null = req.body.password || null;

    if(email === null || password === null) {
        // req.connection.remoteAddress might be undefined
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        console.warn('got request without email or password data from:' + clientIp);
        res.sendStatus(400);
        return; // Ensure we don't continue
    }

    console.log(email);
    console.log(password);

    const userIdx = acceptedUsers.indexOf(email.toLowerCase());
    if (userIdx > -1 && password === acceptedPasswords[userIdx]) {
        res.header(API_HTTP_HEADER, API_HTTP_HEADER_VALUE + userIdx);
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
});

/**
 * @api {get} /menu menu
 * ...
 */
router.get('/menu', (req: Request, res: Response, next: NextFunction) => {
    const menu = {
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
            }, {
                'action': 'accedo://page/performance',
                'id': 'performance',
                'state': '',
                'title': 'Performance',
                'page': 'Performance',
                'icon': 'equalizer',
                'items': []
            }, {
                'action': 'accedo://page/promotion',
                'id': 'promotion',
                'state': '',
                'title': 'Promotion',
                'page': 'Promotion',
                'icon': 'local-atm',
                'items': []
            }]
        }
    };

    res.send(menu);

});

/**
 * @api {get} /resume resume
 * ...
 */
router.get('/resume', (req: Request, res: Response, next: NextFunction) => {
    const result: Movie[] = [];

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
 * @api {get} /movie movie
 * ...
 */
router.get('/movie', (req: Request, res: Response, next: NextFunction) => {
    const result: Movie[] = [];

    movies.forEach(function(movie) {
        if (movie.type === types.MOVIE) {
            result.push(movie);
        }
    });

    res.send({
        items: result
    });
});

/**
 * @api {get} /promotion promotion
 * ...
 */
router.get('/promotion', (req: Request, res: Response, next: NextFunction) => {
    const result: Movie[] = [];

    movies.forEach(function(movie) {
        if (movie.isInPromotion) {
            result.push(movie);
        }
    });

    res.send({
        items: result
    });
});


/**
 * @api {get} /detail/:id detail/:id
 * ...
 */
router.get('/detail/:id', (req: Request, res: Response, next: NextFunction) => {
    let found = false;

    // Use loop to find single item
    for(const movie of movies) {
         if (movie.id == parseInt(req.params.id as string)) {
            found = true;
            res.send({
                items: [movie]
            });
            break;
        }
    }

    if (!found) {
        res.sendStatus(404);
    }
});

/**
 * @api {get} /serie serie
 * ...
 */
router.get('/serie', (req: Request, res: Response, next: NextFunction) => {
    const result: Movie[] = [];
    movies.forEach(function(movie) {
        if (movie.type === types.SERIE) {
            result.push(movie);
        }
    });

    res.send({
        items: result
    });
});



/**
 * @api {get} /data/:nr data/:nr
 * ...
 */
router.get('/data/:nrOfItems', (req: Request, res: Response, next: NextFunction) => {
    const nrOfItems = parseInt(req.params.nrOfItems as string, 10);
    const result: Movie[] = [];
    let movieIdx = 0;
    console.log("Loading:" + nrOfItems + " elements.");

    // The original code: var result = new Array(req.params.nrOfItems);
    // And then pushed into it, so it had empty slots + pushed items.
    // `result.push` appends.
    // var result = new Array(3); result.push(x) -> [empty, empty, empty, x]
    // This looks like another bug in original code or sloppy JS.
    // I will use an empty array and push.

    for (let idx = 0; idx < nrOfItems; ++idx) {
        movieIdx = (Math.floor(Math.random() * 1000)) % movies.length;
        result.push(movies[movieIdx]);
    }

    res.send({
        items: result
    });
});


/**
 * @api {post} /search search
 * ...
 */
router.post('/search', (req: Request, res: Response, next: NextFunction) => {
    const result: Movie[] = [];
    let keyword = '';

    if (req.body.keyword && req.body.keyword === '') {
        res.sendStatus(400);
        // Original code: if (next) { next(); } return;
        // Calling next() after sendStatus is bad (headers already sent).
        // But original code did: res.sendStatus(400); if(next) next(); return;
        // I will just return.
        return;
    } else {
        keyword = req.body.keyword || '';
    }

    // Check if keyword is valid string if body.keyword was missing?
    // If missing, keyword is '', triggering 400? No.
    // Original: if(req.body.keyword && req.body.keyword === '')
    // So if req.body.keyword is undefined, it proceeds with keyword = req.body.keyword (undefined).
    // Then uses it in indexOf?
    // `indexOf(undefined)` matches "undefined".
    // I will try to be robust.

    if (!keyword) {
         // If undefined or empty string?
         // Original code checks explicit empty string.
         // If undefined, it fell through.
         // Let's assume we want to search.
    }

    // Safety check for TS
    const searchKeyword = keyword.toLowerCase();

    console.log('Search - keyword is:[' + searchKeyword + ']');

    movies.forEach(function(movie) {
        if (movie.title.toLowerCase().indexOf(searchKeyword) >= 0 ||
            movie.description.toLowerCase().indexOf(searchKeyword) >= 0 ||
            movie.genre.toLowerCase().indexOf(searchKeyword) >= 0 ||
            checkActors(movie.actors, searchKeyword) ||
            movie.director.toLowerCase().indexOf(searchKeyword) >= 0 ||
            movie.releaseDate.toLowerCase().indexOf(searchKeyword) >= 0) {
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

function checkActors(actors: string[], searchTerm: string): boolean {
    if (actors) {
        return actors.some(item => item.toLowerCase().indexOf(searchTerm) >= 0);
    }
    return false;
}

export default router;
