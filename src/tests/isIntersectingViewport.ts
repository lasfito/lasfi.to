import type {Page} from "@playwright/test";

export async function isIntersectingViewport(page: Page, testId: string) {
  const element = page.getByTestId(testId);

  const boundingBox = await element.boundingBox();
  const isIntersectingViewport =
    boundingBox !== null &&
    (boundingBox.width !== 0 || boundingBox.height !== 0) &&
    (await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (!element) return false;
      const intersection = element!.getBoundingClientRect();
      return (
        intersection.top < window.innerHeight &&
        intersection.bottom >= 0 &&
        intersection.left < window.innerWidth &&
        intersection.right >= 0
      );
    }, `[data-testid=${testId}]`));

  return isIntersectingViewport;
}
