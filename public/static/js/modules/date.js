export default class DateModule {
  constructor() {
    this.domElement = document.querySelector('.date');
  }

  update() {
    const today = new Date();

    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: undefined,
    };

    this.domElement.innerHTML = `<span>${today.toLocaleDateString('de-DE', options)}</span>`;
  }
}
