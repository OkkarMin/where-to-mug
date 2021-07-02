const dev = process.env.VERCEL_ENV !== "production";

export const server = dev
  ? "https://where-to-mug-git-refactor-extractfiltertoapi-okkar.vercel.app"
  : "https://wheretomug.ml";
