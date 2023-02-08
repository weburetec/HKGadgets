const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hk-gadgets-ecommerce-5b2gc498e-mayes243.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
