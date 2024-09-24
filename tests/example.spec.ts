import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://ccw.mji1ywfjzji5o.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Your Creative Team/);
});

let timeout = 180000000;
test.setTimeout(timeout);

// loop over this test 3 times
for (let i = 0; i < 3; i++) {
  test(`Test ${i}`, async ({ page }) => {
    await page.goto('https://ccw.mji1ywfjzji5o.com/');
    await page.getByRole('button', { name: 'Try an Example' }).click();
    await page.getByRole('button', { name: 'Get to Work!' }).click();
    await expect(page.getByText('Editor accepted article')).toBeVisible({ timeout: timeout });
  });
}
