const environment = process.env.NEXT_PUBLIC_VERCEL_ENV;

let server;
if (environment === "production") {
  server = "https://wheretomug.ml";
} else if (environment === "preview") {
  server = process.env.NEXT_PUBLIC_VERCEL_URL;
} else {
  server = "http://localhost:3000";
}

export { server };
