import { test, expect } from '@playwright/test';

test('Signup At Landbot', async ({ page }) => {
  await page.goto('https://landbot.online/v3/H-2653710-7K30IALC7LREO740/index.html');
  await page.getByRole('button', { name: 'Sign me up!' }).click();
  await page.getByPlaceholder('Type your name here...').fill('z');
  await page.getByPlaceholder('Type your name here...').click();
  await page.getByPlaceholder('Type your name here...').fill('zeeshan');
  await page.getByPlaceholder('Type your name here...').press('Enter');
  await page.getByPlaceholder('Type your email here...').fill('zeeshan@email.com');
  await page.getByPlaceholder('Type your email here...').press('Enter');
  await page.getByRole('button', { name: 'Facebook' }).click();
  await page.getByRole('button', { name: 'Nope' }).click();
  await page.getByRole('button', { name: 'Register for someone else' }).click();
  await page.close();
});