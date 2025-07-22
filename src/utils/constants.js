export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.colorush.serverpit.com/coloRUSH/api"
    : "http://localhost:3003/coloRUSH/api";
