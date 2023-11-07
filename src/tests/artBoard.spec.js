import { test } from "@playwright/test";
import { Webstudio } from "../Services/webStudio";

test("Drop artboard, chart and resize the chart element in the container", async ({ page }) => {
  const webstudio = new Webstudio(page);

  await test.step("Navigate to creatingly website", async () => {
    await webstudio.openWebstudio();
  });

  await test.step("Open the artboard", async () => {
    await webstudio.openArtBoard();
  });

  await test.step("Drop chart on artboard", async () => {
    await webstudio.dropChartOnArtBoard();
  });

  await test.step("Align the chart to the center", async () => {
    await webstudio.alignChartVertically();
    await webstudio.alignChartHorizontally();
    await webstudio.alignChartVertically();
  });

  await page.close();
});
