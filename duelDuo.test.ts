import { Builder, Capabilities, By } from "selenium-webdriver";
import { convertToObject, idText } from "typescript";

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
/////////////////////////my code///////////////////////////////
//test#1 : i feel like im really close with this.
beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Draw button id", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  await driver.sleep(2000);
  await drawButton.click();
  const displayed = await drawButton.isDisplayed();
  await driver.sleep(1000);
  expect(displayed).toBe("choices");

  await driver.sleep(2000);
});
