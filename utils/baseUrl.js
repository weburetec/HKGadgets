const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hk-gadgets-ecommerce-5s3chx9m5-mayes243.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
