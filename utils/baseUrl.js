const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hk-gadgets-ecommerce-git-dev-mayes243.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
