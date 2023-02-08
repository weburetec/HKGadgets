const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hk-gadgets-git-dev-weburetec.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
