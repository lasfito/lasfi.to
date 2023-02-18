import {test, expect} from "@playwright/test";
//@ts-ignore todo: fix import module not found
import {isIntersectingViewport} from "./isIntersectingViewport.ts";

test("home page renders correctly", async ({page}) => {
  await page.goto("http://localhost:3000/");

  expect(page.getByText("¡Hola, soy Lasfito!")).toBeTruthy();

  const heroButton = page.getByTestId("HERO-BUTTON");
  const formIntersecting = await isIntersectingViewport(page, "CONTACT-FORM");
  console.log({formIntersecting});
  expect(heroButton).toBeTruthy();

  const windowAcerca = page.getByTestId("ACERCA-HERO");
  const acercaIntersecting = await isIntersectingViewport(page, "HERO-BUTTON");
  console.log({acercaIntersecting});
  expect(windowAcerca).toBeTruthy();
  await heroButton.click();

  // take a screenshot a name it with the browser name of the current test
  await page.screenshot({path: `screenshots/${new Date().toString()}.png`});

  const windowContact = page.getByTestId("CONTACT-FORM");
  expect(windowContact).toBeTruthy();

  await page
    .locator("#acerca-top")
    .getByRole("link", {name: "contáctame"})
    .click();
});
