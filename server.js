const express = require("express");
const app = express();
const bfhlRoutes = require("./routes/bfhl");

app.use(express.json());

// Routes
app.use("/bfhl", bfhlRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("BFHL API is running ");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
