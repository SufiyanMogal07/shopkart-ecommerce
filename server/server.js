import "dotenv/config";
import { app } from "./src/app.js";
import { connectDB } from "./db/dbConfig.js";

const port = process.env.PORT || "5001";

connectDB();

app.listen(port, () => {
  console.log("Server running on", port);
});
