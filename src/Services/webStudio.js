import { WebstudioPageObjects } from "../pageObjects/webstudioPageObject";
const webstudioPO = new WebstudioPageObjects();
const {
  elemWebStudioSpan,
  elemArtboardSpan,
  elemArtboard,
  elemArtboardTemplate,
  elemChartFlavourDiv,
  elemChartActionableActionSheet,
  elemChartImage,
  elemStretchHorizontally,
  elemStretchVertically,
  elemChart,
} = webstudioPO;

export class Webstudio {
  constructor(page) {
    this.page = page;
  }

  async openWebstudio() {
    await this.page.goto("/webstudio");
    await this.page.locator(elemWebStudioSpan).first().click();
  }

  async openArtBoard() {
    await this.page.locator(elemArtboardSpan).filter({ hasText: elemArtboard }).first().click();
    await this.page.getByLabel(elemArtboardTemplate).click();
  }

  async dropChartOnArtBoard() {
    await this.openChart();
    const chart = this.page
      .locator(elemChartFlavourDiv)
      .filter({ hasText: elemChartActionableActionSheet })
      .locator(elemChartImage)
      .first();

    await chart.isVisible();
    await chart.click();
  }

  async alignChartVertically() {
    await this.page.getByText(elemStretchVertically).click();
  }

  async alignChartHorizontally() {
    await this.page.getByText(elemStretchHorizontally).click();
  }

  async openChart() {
    await this.page.getByText(elemChart).click();
  }
}
