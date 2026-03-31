import { test, expect } from '@playwright/test';

// the title is changed from test to test to-do app @sanity and the test is run 
// by running the command 'npx playwright test --headed --grep "@sanity"'

test('test to-do app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('B');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('Buy');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('Buy G');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('G');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('Go for a walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('REST');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('PLAY');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Buy Groceries' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Go for a walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'PLAY' }).getByTestId('todo-item-toggle')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('REST');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(3);
});