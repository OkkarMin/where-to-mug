const dev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_VERCEL_URL;
