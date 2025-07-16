import { Page } from '@playwright/test';

export abstract class BasePage {

  constructor(protected readonly page: Page) {}

  abstract visit(): Promise<void>;

}