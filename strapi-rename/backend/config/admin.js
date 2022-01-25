module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '91bf65c9a5f4f3128b3a4c90e6731623'),
  },
});
