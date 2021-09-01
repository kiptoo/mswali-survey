require("dotenv").config();

module.exports = {
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    // host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD,
    ...(process.env.NODE_ENV === "test" ? { fast: true } : {}),
  },
  applicationPort: Number(process.env.APPLICATION_PORT) || 3000,
  dbUrl: process.env.DB_URL,
  applicationSecret: process.env.APP_SECRET,
  applicationDomain: process.env.APPLICATION_DOMAIN,
  questionTypes: ["radio", "dropdown", "text", "textarea"], //"text", "textarea", "multiple","rating"
  httpsEnabled: process.env.httpsEnabled,
  httpOnly: process.env.httpOnly,
  sameSite: process.env.sameSite,
  sessionValidityMs: Number(process.env.SESSION_VALIDITY_MS) || 86400000,
};
