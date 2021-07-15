const assert = require('assert')

Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.content__error');
  I.see('Anda Belum menyukai Sebuah Restaurant', '.content__error');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.content__name a');

  const firstRestaurant = locate('.content__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('content-item');
  const likedRestaurantTitle = await I.grabTextFrom('.content__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.content__name a');

  const firstRestaurant = locate('.content__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('content-item');
  const likedRestaurantTitle = await I.grabTextFrom('.content__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.content__name');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content__error');

  I.see('Anda Belum menyukai Sebuah Restaurant', '.content__error');
});
