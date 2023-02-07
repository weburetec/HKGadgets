const baseUrl =
  process.env.NODE_ENV === "production"
    ? "hkg-gadgets.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
