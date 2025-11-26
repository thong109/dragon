'use strict';

(() => {
  const tabletBreak = 1280;
  const mobileBreak = 768;
  const mobileXSBreak = 375;

  const detectBrowser = () => {
    const html = document.documentElement;

    const init = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      html.classList.toggle(
        'is-browser-chrome',
        userAgent.includes('chrome') && !userAgent.includes('edg/'),
      );
      html.classList.toggle(
        'is-browser-safari',
        userAgent.includes('safari') && !userAgent.includes('chrome'),
      );
      html.classList.toggle(
        'is-browser-firefox',
        userAgent.includes('firefox'),
      );
      html.classList.toggle(
        'is-browser-ie',
        userAgent.includes('msie ') || userAgent.includes('trident/'),
      );
      html.classList.toggle('is-browser-edge', userAgent.includes('edg/'));
    };

    const viewport = document.querySelector('meta[name="viewport"]');
    viewport?.setAttribute(
      'content',
      'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0',
    );

    window.addEventListener('load', init);
    window.addEventListener('resize', init);
    init();
  };

  const detectDevice = () => {
    const html = document.documentElement;

    const init = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      const userAgent = navigator.userAgent.toLowerCase();
      const orientation = window.matchMedia('(orientation: portrait)').matches;

      html.classList.toggle('is-device-mac', userAgent.includes('mac'));
      html.classList.toggle('is-device-macos', userAgent.includes('mac'));
      html.classList.toggle('is-device-iphone', /iphone/.test(userAgent));
      html.classList.toggle('is-device-ipod', /ipod/.test(userAgent));
      html.classList.toggle('is-device-ipad', /ipad/.test(userAgent));
      html.classList.toggle(
        'is-device-ios',
        /(iphone|ipod|ipad)/.test(userAgent),
      );
      html.classList.toggle('is-device-android', userAgent.includes('android'));

      // Emulation check
      if (navigator.maxTouchPoints === 1 && !userAgent.includes('mobile')) {
        html.classList.add('is-device-emulation');
      } else {
        html.classList.remove('is-device-emulation');
      }

      // Touchable check
      if (
        (html.classList.contains('is-device-mac') ||
          html.classList.contains('is-device-ios') ||
          html.classList.contains('is-device-android')) &&
        navigator.maxTouchPoints >= 1
      ) {
        html.classList.add('is-device-touchable');
      } else {
        html.classList.remove('is-device-touchable');
      }

      // Mobile / Desktop / Tablet checks
      if (window.innerWidth < mobileBreak) {
        if (window.screen.width < mobileXSBreak) {
          viewport?.setAttribute(
            'content',
            `width=${mobileXSBreak}, user-scalable=0`,
          );
        } else {
          viewport?.setAttribute(
            'content',
            'width=device-width, initial-scale=1',
          );
        }
        html.classList.add('is-device-mobile');
        html.classList.remove('is-device-desktop', 'is-device-tablet');
      } else {
        html.classList.add('is-device-desktop');
        html.classList.remove('is-device-mobile');

        if (
          (window.screen.width >= mobileBreak &&
            window.screen.width <= tabletBreak) ||
          (window.screen.width < mobileBreak &&
            window.screen.height >= mobileBreak &&
            !orientation)
        ) {
          html.classList.add('is-device-tablet');
        } else {
          html.classList.remove('is-device-tablet');
        }

        viewport?.setAttribute(
          'content',
          'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0',
        );
      }
    };

    window.addEventListener('load', init);
    window.addEventListener('resize', init);
    init();
  };

  const detectState = () => {
    let timerResize;
    const classStateResize = 'is-state-resize';
    const html = document.documentElement;

    window.addEventListener('resize', () => {
      html.classList.add(classStateResize);

      clearTimeout(timerResize);
      timerResize = setTimeout(() => {
        html.classList.remove(classStateResize);
      }, 200);
    });
  };

  const triggerHover = () => {
    const classHoverOver = 'is-hover-over';
    const classHoverOut = 'is-hover-out';

    document.querySelectorAll('.js-hover').forEach((element) => {
      element.addEventListener('mouseover', () => {
        element.classList.remove(classHoverOut);
        element.classList.add(classHoverOver);
      });

      element.addEventListener('mouseout', () => {
        element.classList.remove(classHoverOver);
        element.classList.add(classHoverOut);
      });
    });
  };

  const triggerClick = () => {
    const classClickActive = 'is-click-active';

    document.querySelectorAll('.js-click').forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.toggle(classClickActive);
      });
    });
  };

  const buttonTop = () => {
    const buttons = document.querySelectorAll('.js-button-top');
    if (!buttons.length) return;

    buttons.forEach((button) => {
      const classReady = 'is-ready';
      const classVisible = 'is-visible';
      const classStatic = 'is-static';
      const buttonWrapper = button.querySelector('.button-wrapper');

      const scrolling = () => {
        const buttonPosition = button.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        const startPosition = window.innerHeight * 1.5;

        button.classList.toggle(classVisible, scrollPosition >= startPosition);
        button.classList.toggle(classStatic, scrollPosition > buttonPosition);
        button.classList.add(classReady);
      };

      buttonWrapper?.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });

      const safeScroll = () => {
        if (!window.isWindowFrozen) scrolling();
      };

      window.addEventListener('load', safeScroll);
      window.addEventListener('resize', safeScroll);
      window.addEventListener('scroll', safeScroll);

      scrolling();
    });
  };

  const tabsLinking = () => {
    const classActive = 'is-tabs-active';
    const toggles = document.querySelectorAll(
      '.js-tabs-linking[data-tabs-role="toggle"]',
    );
    if (!toggles.length) return;

    toggles.forEach((tabsToggle) => {
      const tabsToggleIDGroup = tabsToggle.dataset.tabsIdGroup;
      const tabsToggleGroup = document.querySelectorAll(
        `.js-tabs-linking[data-tabs-role="toggle"][data-tabs-id-group="${tabsToggleIDGroup}"]`,
      );
      const tabsToggleIDLocal = tabsToggle.dataset.tabsIdLocal.split(/\s+/);
      const tabsTargetGroup = document.querySelectorAll(
        `.js-tabs-linking[data-tabs-role="target"][data-tabs-id-group="${tabsToggleIDGroup}"]`,
      );

      // Filter matching targets
      const tabsToggleBundle = Array.from(tabsToggleGroup).filter((toggle) => {
        const toggleIDs = toggle.dataset.tabsIdLocal.split(/\s+/);
        return tabsToggleIDLocal.some((toggleID) =>
          toggleIDs.includes(toggleID),
        );
      });
      const tabsTargetBundle = Array.from(tabsTargetGroup).filter((target) => {
        const targetIDs = target.dataset.tabsIdLocal.split(/\s+/);
        return tabsToggleIDLocal.some((toggleID) =>
          targetIDs.includes(toggleID),
        );
      });

      tabsToggle.addEventListener('click', () => {
        const isActive = tabsToggle.classList.contains(classActive);

        if (isActive) {
          tabsToggleGroup.forEach((el) => el.classList.remove(classActive));
          tabsTargetGroup.forEach((el) => el.classList.remove(classActive));
        } else {
          tabsToggleGroup.forEach((el) => el.classList.remove(classActive));
          tabsTargetGroup.forEach((el) => el.classList.remove(classActive));
          tabsToggle.classList.add(classActive);
          tabsToggleBundle.forEach((target) =>
            target.classList.add(classActive),
          );
          tabsTargetBundle.forEach((target) =>
            target.classList.add(classActive),
          );
        }
      });
    });
  };

  const inputFile = () => {
    const wrappers = document.querySelectorAll('.c-input-file');
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
      const input = wrapper.querySelector('input[type="file"]');
      const inputExtensions = wrapper.dataset.inputAccept
        ? wrapper.dataset.inputAccept
            .split(',')
            .map((e) => e.trim().toLowerCase())
            .filter(Boolean) // remove empty entries
        : [];
      const label = wrapper.querySelector('[data-input-role="label"]');
      const buttonDelete = wrapper.querySelector(
        '[data-input-role="button-delete"]',
      );
      const labelPlaceholder = label.dataset.inputPlaceholder || 'Choose file';
      label.textContent = labelPlaceholder;
      buttonDelete.style.display = 'none';
      input.addEventListener('change', () => {
        const file = input.files[0];
        if (!file) return;
        const ext = file.name.split('.').pop().toLowerCase();
        if (inputExtensions.length && !inputExtensions.includes(ext)) {
          alert(`Chỉ chấp nhận file dạng: ${inputExtensions.join(', ')}`);
          input.value = '';
          label.textContent = labelPlaceholder;
          buttonDelete.style.display = 'none';
          return;
        }
        label.textContent = file.name;
        buttonDelete.style.display = '';
      });
      buttonDelete.addEventListener('click', () => {
        input.value = '';
        label.textContent = labelPlaceholder;
        buttonDelete.style.display = 'none';
      });
    });
  };

  const sliderServices = () => {
    const sliders = document.querySelectorAll('.js-slider-services');
    if (!sliders.length) return;

    sliders.forEach((element) => {
      new Swiper(element, {
        loop: false,
        speed: 1500,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: {
          el: element.querySelector('.swiper-pagination'),
          clickable: true,
        },
        breakpoints: {
          1920: {
            slidesPerView: 'auto',
            slidesPerGroup: 4,
          },
          1400: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      });
    });
  };

  const sliderKeyvisual = () => {
    const sliders = document.querySelectorAll('.js-slider-keyvisual');
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      new Swiper(slider, {
        loop: true,
        speed: 1500,
        parallax: true,
        centeredSlide: true,
        autoplay: {
          delay: 5000,
          pauseOnMouseEnter: false,
        },
        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true,
        },
      });
    });
  };

  const sliderLibrary = () => {
    const sliders = document.querySelectorAll('.js-slider-library .swiper');
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      const wrapper = slider.querySelector('.swiper-wrapper');
      const slides = wrapper ? wrapper.children : [];

      if (slides.length > 0 && slides.length <= 3) {
        const cloneCount = slides.length;
        for (let i = 0; i < cloneCount; i++) {
          wrapper.appendChild(slides[i].cloneNode(true));
        }
      }

      const swiper = new Swiper(slider, {
        loop: true,
        speed: 1500,
        slidesPerView: 3,
        centeredSlides: true,
        breakpoints: {
          0: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 3, centeredSlides: true },
        },

        on: {
          init() {
            updateCurrentSlide(this);
          },
          slideChangeTransitionStart() {
            updateCurrentSlide(this);
          },
        },
      });

      slider
        .querySelectorAll('[data-slider-role="arrow-next"]')
        .forEach((btn) => {
          btn.addEventListener('click', () => swiper.slideNext());
        });
      slider
        .querySelectorAll('[data-slider-role="arrow-previous"]')
        .forEach((btn) => {
          btn.addEventListener('click', () => swiper.slidePrev());
        });
    });

    function updateCurrentSlide(swiper) {
      swiper.slides.forEach((slide) => slide.classList.remove('is-current'));
      const current = swiper.slides[swiper.activeIndex];
      if (current) current.classList.add('is-current');
    }
  };

  const sliderProjects = () => {
    const sliders = document.querySelectorAll('.js-slider-projects');
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      const sliderThumbnailsDOM = slider.querySelector(
        '.swiper[data-slider-role="slider-thumbnails"]',
      );
      const sliderMainDOM = slider.querySelector(
        '.swiper[data-slider-role="slider-main"]',
      );

      if (!sliderThumbnailsDOM || !sliderMainDOM) return;

      const sliderThumbnailsWrapper =
        sliderThumbnailsDOM.querySelector('.swiper-wrapper');
      sliderThumbnailsWrapper.innerHTML = '';
      const slideMainSlides = sliderMainDOM.querySelectorAll('.swiper-slide');
      slideMainSlides.forEach((slide) => {
        const thumbnail = slide.querySelector('.p-thumbnail-projects img');
        if (thumbnail) {
          const thumbnailItem = document.createElement('div');
          thumbnailItem.className = 'swiper-slide';
          thumbnailItem.innerHTML = `<figure><img class="u-object" src="${thumbnail.src}" alt="${thumbnail.alt || ''}" /></figure>`;
          sliderThumbnailsWrapper.appendChild(thumbnailItem);
        }
      });

      const sliderThumbnails = new Swiper(sliderThumbnailsDOM, {
        loop: true,
        speed: 500,
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        slideToClickedSlide: false,
        simulateTouch: false,
        keyboard: false,
        mousewheel: false,
      });

      const sliderMain = new Swiper(sliderMainDOM, {
        loop: true,
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: slider.querySelector('[data-slider-role="pagination"]'),
          clickable: true,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}" data-slider-role="pagination-current"></span>
                  <span class="${totalClass}" data-slider-role="pagination-total"></span>`;
          },
        },
        navigation: {
          nextEl: slider.querySelector('[data-slider-role="arrow-next"]'),
          prevEl: slider.querySelector('[data-slider-role="arrow-previous"]'),
        },
      });

      sliderMain.on('slideChange', () => {
        const total = sliderMain.slides.length - sliderMain.loopedSlides * 2;
        const indexNext = (sliderMain.realIndex + 1) % total;
        sliderThumbnails.slideToLoop(indexNext);
      });
    });
  };

  const sliderShowcase = () => {
    const sliders = document.querySelectorAll('.js-slider-showcase');
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      new Swiper(slider.querySelector('.swiper'), {
        loop: false,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} u-trans"></span>`;
          },
        },
      });
    });
  };

  const sliderCompany = () => {
    const sliders = document.querySelectorAll(
      '.js-slider-company [data-slider-role="viewport"]',
    );
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      const wrapper = slider.querySelector('.swiper-wrapper');
      if (!wrapper) return;

      const originalSlides = Array.from(wrapper.children);
      const isOpposite =
        slider.getAttribute('data-slider-direction') === 'opposite';
      const directionSetting = isOpposite ? 'rtl' : 'ltr';

      const getTotalWidth = () => {
        return Array.from(wrapper.children).reduce((sum, slide) => {
          return sum + slide.offsetWidth;
        }, 0);
      };

      const viewportWidth = slider.offsetWidth;
      let totalWidth = getTotalWidth();

      while (totalWidth < viewportWidth * 2) {
        originalSlides.forEach((slide) => {
          const clone = slide.cloneNode(true);
          wrapper.appendChild(clone);
        });
        totalWidth = getTotalWidth();
      }

      new Swiper(slider, {
        loop: true,
        slidesPerView: 'auto',
        speed: 5000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: isOpposite,
          pauseOnMouseEnter: true,
        },
        allowTouchMove: false,
        freeMode: false,
        freeModeMomentum: false,
      });
    });
  };

  const goTop = () => {
    if ($('.js-go-top').length) {
      const btnTop = $('.js-go-top');

      btnTop.click(() => {
        $('html, body').animate(
          {
            scrollTop: 0,
          },
          500,
        );
      });

      const btnTopFade = () => {
        if ($(window).scrollTop() > $(window).height() * 0.2) {
          btnTop.addClass('is-active');
        } else {
          btnTop.removeClass('is-active');
        }
      };

      const btnTopFixed = () => {
        const footer = $('footer').offset().top;
        const footerOffset = btnTop.outerHeight() + btnTop.outerHeight() * 1.3;

        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).innerHeight();

        if (scrollTop + windowHeight > footer + footerOffset) {
          btnTop.addClass('is-stuck');
        } else {
          btnTop.removeClass('is-stuck');
        }
      };

      btnTopFade();
      btnTopFixed();

      $(window).on('scroll resize', () => {
        btnTopFade();
        btnTopFixed();
      });
    }
  };

  detectBrowser();
  detectDevice();
  detectState();
  triggerHover();
  triggerClick();
  buttonTop();
  tabsLinking();
  inputFile();
  sliderServices();
  sliderProjects();
  sliderKeyvisual();
  sliderLibrary();
  sliderShowcase();
  sliderCompany();
  goTop();
})();

//# sourceMappingURL=scripts.js.map

//# sourceMappingURL=scripts.js.map
