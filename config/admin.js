module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f607e7606fce8e1bbfc6060aab47c43'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
