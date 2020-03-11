document.addEventListener('DOMContentLoaded', function () {
  const elem = document.getElementById('carousel');
  const instance = M.Carousel.init(elem);

  setInterval(() => {
    instance.next();
  }, 2000);
});