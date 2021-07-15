import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriteRestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
