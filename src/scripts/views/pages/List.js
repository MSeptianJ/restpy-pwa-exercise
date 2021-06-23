import RestaurantDicodingSource from '../../data/restaurantdicoding-source';
import '../component/content-list';

const List = {
  async render() {
    return `
      <content-list></content-list>
    `;
  },

  async afterRender() {
    const contentListElement = document.querySelector('content-list');
    const loadingElement = document.querySelector('#contentLoading');

    try {
      loadingElement.classList.add('show');
      const restaurants = await RestaurantDicodingSource.listRestaurant();
      loadingElement.classList.remove('show');
      contentListElement.contents = restaurants;
    } catch (error) {
      contentListElement.renderError(error);
    }
  },
};

export default List;
