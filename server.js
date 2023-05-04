const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/scrape", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const pageTitle = await page.title();
  await page.goto("https://google.com");
  await browser.close();

  res.json({
    title: pageTitle,
  });
});

app.listen(3333, () => {
  console.log("Hello server");
});
