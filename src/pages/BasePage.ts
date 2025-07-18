import { expect, Page } from '@playwright/test';

export abstract class BasePage {

  constructor(protected readonly page: Page) {}

  abstract visit(): Promise<void>;

  async validateAlertMessage(text: string) {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe(text);
            await dialog.accept();
        });
    }

}