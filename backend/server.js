const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cors({
  origin: "https://test-frontend-bakckend-vercel-saev-git-main-amg16.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Backend" });
});

module.exports = app; // For Vercel