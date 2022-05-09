import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  await driver.sleep(2000);
  const displayed = await title.isDisplayed();
  await driver.sleep(2000);
  expect(displayed).toBe(true);
});

test("draw button displays div id = choices", async () => {
  let draw = driver.findElement(By.id("draw"));
  await driver.sleep(2000);
  expect(draw);
});
// this thing was throwing errors before i even added to it.
//instructions say nothing about fixing it so im gonna move on for now.
/////////////////////////my code///////////////////////////////

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  await driver.sleep(2000);
  const displayed = await title.isDisplayed();
  await driver.sleep(2000);
  expect(displayed).toBe(true);
});
