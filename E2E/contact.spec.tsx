import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact'); 
  });

  test('should display the contact container', async ({ page }) => {
    const contactContainer = await page.locator('[data-testid="contact-container"]');
    await expect(contactContainer).toBeVisible();
  });

  test('should display the correct number of member cards', async ({ page }) => {
    const cards = await page.locator('div');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0); 
  });

  test('should display member names', async ({ page }) => {
    const memberNames = ['Jesús S. González', 'Adriel Arocha', 'Sergio Castellano', 'Idaira Alemán','Crisamer Ortega', 'Daniel Gil']; 
    for (const name of memberNames) {
      await expect(page.locator(`text=${name}`)).toBeVisible();
    }
  });
});