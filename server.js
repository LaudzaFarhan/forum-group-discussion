// server.js

// 1. Import the express library
const express = require("express");
const path = require("path");

// 2. Create an instance of an express app
const app = express();

// 3. Define the port the server will run on
const PORT = 3000;

// 4. Serve static files from the 'public' directory
// This tells Express to make the index.html file accessible
app.use(express.static(path.join(__dirname, "public")));

// 5. Start the server and listen for connections
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(
    `Access it from other devices on your WiFi at your local IP address.`
  );
});
