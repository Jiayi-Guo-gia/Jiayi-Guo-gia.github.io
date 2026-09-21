document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".life-gallery");
  const previous = document.querySelector(".life-carousel-prev");
  const next = document.querySelector(".life-carousel-next");

  if (!gallery || !previous || !next) return;

  const move = (direction) => {
    gallery.scrollBy({ left: direction * gallery.clientWidth * 0.82, behavior: "smooth" });
  };

  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
});
