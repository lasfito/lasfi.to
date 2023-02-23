import {test, expect} from "@playwright/test";
//@ts-ignore todo: fix import module not found
import {isIntersectingViewport} from "./isIntersectingViewport.ts";

test("home page renders correctly", async ({page}) => {
  await page.goto("http://localhost:3000/");

  expect(page.getByText("¡Hola, soy Lasfito!")).toBeTruthy();

  const heroButton = page.getByTestId("HERO-BUTTON");
  const formIntersecting = await isIntersectingViewport(page, "CONTACT-FORM");
  expect(formIntersecting).not.toBeTruthy();
  expect(heroButton).toBeTruthy();

  const windowAcerca = page.getByTestId("ACERCA-HERO");
  const acercaIntersecting = await isIntersectingViewport(page, "HERO-BUTTON");
  expect(acercaIntersecting).toBeTruthy();
  expect(windowAcerca).toBeTruthy();
  await heroButton.click();

  const windowContact = page.getByTestId("CONTACT-FORM");
  expect(windowContact).toBeTruthy();

  await page
    .locator("#acerca-top")
    .getByRole("link", {name: "contactarme"})
    .click();
});
