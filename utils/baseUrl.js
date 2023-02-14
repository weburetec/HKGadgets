const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.hkgadgets.com"
    : "http://localhost:3000";

export default baseUrl;
