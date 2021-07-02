const dev = process.env.VERCEL_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://wheretomug.ml";
