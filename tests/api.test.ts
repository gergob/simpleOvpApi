import request from 'supertest';
import app from '../src/app';

describe('GET /api/banner', () => {
  it('should return 200 and a list of banners', async () => {
    const res = await request(app)
        .get('/api/banner')
        .set('X-SimpleOvpApi', 'USER_KEY_1');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('GET /', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('POST /api/search', () => {
    it('should return 200 and results for valid search', async () => {
        const res = await request(app)
            .post('/api/search')
            .set('X-SimpleOvpApi', 'USER_KEY_1')
            .send({ keyword: 'ant' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.items).toBeDefined();
        expect(res.body.items.length).toBeGreaterThan(0);
    });

    it('should return 404 for no results', async () => {
        const res = await request(app)
            .post('/api/search')
            .set('X-SimpleOvpApi', 'USER_KEY_1')
            .send({ keyword: 'nonexistenttermxyz' });
        expect(res.statusCode).toEqual(404);
    });
});
