import './content-item';

class ContentList extends HTMLElement {
  set contents(contents) {
    this._contents = contents;
    this.render();
  }

  renderError(error) {
    this.innerHTML = `
      <h2 class="content__error"></h2>
      <h2 tabindex="0" class="content__error"> Error Detected : ${error}  </h2>
      <h2 class="content__error"></h2>
    `;
  }

  render() {
    if (this._contents.length) {
      this._contents.forEach((content) => {
        const contentItemEl = document.createElement('content-item');
        contentItemEl.content = content;
        this.appendChild(contentItemEl);
      });
    } else {
      this.innerHTML = `
        <h2 class="content__error"></h2>
        <h2 tabindex="0" class="content__error">Anda Belum menyukai Sebuah Restaurant</h2>
        <h2 class="content__error"></h2>
      `;
    }
  }
}

customElements.define('content-list', ContentList);
