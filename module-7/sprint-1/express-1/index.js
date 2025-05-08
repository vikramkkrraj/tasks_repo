// index.js
import express from "express";
import os from "os";
import dns from "dns";
import { readDataFile } from "./read.js";

const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.get("/readfile", (req, res) => {
  const content = readDataFile();
  res.send(content);
});

app.get("/systemdetails", (req, res) => {
  const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB";
  const freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB";
  const cpuModel = os.cpus()[0].model;

  res.json({
    platform: os.platform(),
    totalMemory: totalMem,
    freeMemory: freeMem,
    cpuModel: cpuModel,
  });
});

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", (err, address) => {
    if (err) {
      res.status(500).send("DNS lookup failed.");
    } else {
      res.json({
        hostname: "masaischool.com",
        ipAddress: `${address}`,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
