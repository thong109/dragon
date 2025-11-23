gsap.registerPlugin(Observer);

let sections = document.querySelectorAll("section"),
  images = document.querySelectorAll(".is-clippath"),
  currentIndex = 0,
  animating = false;

sections.forEach((section, i) => {
  gsap.set(section, {
    top: i * 100 + 'vh'
  });
});

let container = document.querySelector('main.main');

function gotoSection(index, direction) {
  if (index < 0 || index >= sections.length || animating) {
    return;
  }

  animating = true;

  let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.inOut"
    },
    onComplete: () => {
      animating = false
    }
  });

  tl.to(container, {
    y: -index * window.innerHeight
  });

  currentIndex = index;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 10,
  preventDefault: true
});

gsap.set(container, {
  y: 0
});
