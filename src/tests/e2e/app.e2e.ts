import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('SvelteKit 🚀 Tailwind');
});

test('get validation error from year input', async ({ page }) => {
	await page.goto('/');

	await page.locator('#post-movie').click();

	const errorText = page.locator('.text-red-500');

	await expect(errorText).toContainText('Year is wrong format');
});
