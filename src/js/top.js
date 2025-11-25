gsap.registerPlugin(Observer);

let sections = document.querySelectorAll('section'),
  images = document.querySelectorAll('.is-clippath'),
  currentIndex = 0,
  animating = false;

sections.forEach((section, i) => {
  gsap.set(section, {
    top: i * 100 + 'vh'
  });
});

let container = document.querySelector('main.main');

function gotoSection(index, direction) {
  // Kiểm tra index hợp lệ trước
  index = Math.max(0, Math.min(index, sections.length - 1));
  
  // Nếu đã ở section đó hoặc đang animate thì return
  if (index === currentIndex || animating) {
    return;
  }

  animating = true;
  currentIndex = index;

  let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.inOut'
    },
    onComplete: () => {
      animating = false;
    }
  });

  // Sử dụng percentage thay vì pixel để tính chính xác hơn
  tl.to(container, {
    y: (-index * 100) + 'vh'
  });
}

Observer.create({
  type: 'wheel,touch,pointer',
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 50, // Tăng tolerance để tránh trigger nhạy
  preventDefault: true
});

gsap.set(container, {
  y: 0
});