const request = require('supertest');
const app = require('../index');

describe('Hello World App', () => {
  test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET /api/config should return bgColor', async () => {
    const response = await request(app).get('/api/config');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('bgColor');
  });

  test('GET /api/config should respect BG_COLOR env variable', async () => {
    process.env.BG_COLOR = 'red';
    const response = await request(app).get('/api/config');
    expect(response.body.bgColor).toBe('red');
    delete process.env.BG_COLOR;
  });
});
