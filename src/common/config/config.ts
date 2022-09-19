import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgresUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpired: process.env.JWT_EXPIRE,
    apiUrl: process.env.APP_URL,
  };
});
