function MakeOption(e) {
  e.querySelectorAll('.slidebox-item').length < 2 &&
    e.classList.add('single-slide');
}
isFirst = 0;
var fullSlide = function () {
    MakeOption(fullBanner);
    var e = fullBanner.dataset.time,
      t = fullBanner.querySelectorAll('.slidebox-item').length;
    if (t > 1) var o = !0;
    else o = !1;
    var a = new Splide(fullBanner, {
      type: 'fade',
      rewind: !0,
      autoplay: o,
      interval: e,
      speed: 3e3,
      perPage: 1,
      gap: 0,
      arrows: !1,
      pagination: !1,
      afterTrace: !0,
      autoWidth: !0,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      waitForTransition: !0,
    });
    if (
      (a.on('mounted', function () {
        var e = a.root.querySelector('.slidebox-toggle');
        e && e.click();
      }),
      t > 1)
    ) {
      Cursor(fullBanner, '', '0.6vw');
      var n = fullBanner.querySelector('.prev-left'),
        r = fullBanner.querySelector('.next-right'),
        s = fullBanner.querySelector('.cursor-zoom');
      (r.addEventListener('mouseenter', function () {
        s.querySelector('.cursor-text').innerHTML = this.dataset.click;
      }),
        n.addEventListener('mouseenter', function () {
          s.querySelector('.cursor-text').innerHTML = this.dataset.click;
        }),
        r.addEventListener('click', function () {
          a.go('>');
        }),
        n.addEventListener('click', function () {
          a.go('<');
        }));
    }
    a.mount();
    var c = document.querySelectorAll('.slidebox-toggle'),
      i = new IntersectionObserver(function (e) {
        e.forEach(function (e) {
          e.target.classList.contains('slidebox-toggle') &&
            (e.isIntersecting
              ? e.target.classList.contains('is-active') ||
                (e.target.click(), a.go('>'))
              : e.target.classList.contains('is-active') && e.target.click());
        });
      });
    c &&
      c.forEach(function (e) {
        i.observe(e);
      });
  },
  faciSlide = function () {
    Faci = new Splide('.faci-slide', {
      autoplay: !Mobile.matches,
      interval: 5e3,
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      arrows: !1,
      pagination: !1,
      speed: 800,
      focus: 0,
      trimSpace: !1,
      updateOnMove: !0,
      autoWidth: !0,
      waitForTransition: !0,
      pauseOnHover: !1,
      pauseOnFocus: !1,
      breakpoints: { 1100: { focus: 'center', trimSpace: !0, gap: '0.5rem' } },
    });
    var e = new Splide('.bg-slide', {
        type: 'fade',
        speed: 4e3,
        perPage: 1,
        gap: 0,
        arrows: !1,
        pagination: !1,
        autoWidth: !0,
        updateOnMove: !0,
        waitForTransition: !0,
      }),
      t = new Splide('.text-slide', {
        type: 'fade',
        perPage: 1,
        gap: 0,
        rewind: !0,
        arrows: !0,
        pagination: !1,
        autoWidth: !0,
        updateOnMove: !0,
        waitForTransition: !0,
        afterTrace: !0,
      });
    (Faci.on('mounted', function () {
      Faci.Components.Autoplay;
      Faci.refresh();
    }),
      Faci.on('moved', function () {
        Mobile.matches || Faci.refresh();
      }),
      Faci.on('resize', function () {
        Mobile.matches || Faci.refresh();
      }),
      Faci.sync(e).sync(t).mount(),
      e.mount(),
      t.mount());
    var o = Faci.root.querySelector('.slidebox-toggle');
    new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        Mobile.matches ||
          (e.isIntersecting
            ? e.target.classList.contains('is-active') || e.target.click()
            : e.target.classList.contains('is-active') && e.target.click());
      });
    }).observe(o);
  },
  lifestyleSlide = function () {
    var e = new Splide('.lifestyle-slide', {
        type: 'fade',
        perPage: 1,
        perMove: 1,
        speed: 3e3,
        autoplay: !Mobile.matches,
        interval: 6e3,
        gap: 0,
        rewind: !0,
        autoWidth: !0,
        arrows: !1,
        pagination: !1,
        pauseOnHover: !1,
        pauseOnFocus: !1,
      }),
      t = new Splide('.lifestyle-text', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '2rem',
        rewind: !0,
        autoWidth: !0,
        arrows: !0,
        pagination: !1,
        afterTrace: !0,
        waitForTransition: !0,
        updateOnMove: !0,
      }).mount();
    (t.on('move', function () {
      onPlay();
    }),
      e.on('resize', function () {
        Mobile.matches || e.refresh();
      }));
    var o = e.root.querySelector('.slidebox-toggle');
    (new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        Mobile.matches ||
          (e.isIntersecting
            ? e.target.classList.contains('is-active') || e.target.click()
            : e.target.classList.contains('is-active') && e.target.click());
      });
    }).observe(o),
      e.sync(t),
      e.mount());
  },
  bgSlide = function () {
    var e = document.querySelector('.bgx-slide'),
      t = new Splide(e, {
        type: 'fade',
        rewind: !0,
        autoplay: !0,
        interval: 3e3,
        speed: 3e3,
        perPage: 1,
        gap: 0,
        drag: !1,
        arrows: !1,
        pagination: !1,
        autoWidth: !0,
        pauseOnHover: !1,
        pauseOnFocus: !1,
      }),
      o = t.root.querySelector('.slidebox-toggle');
    (new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        e.isIntersecting
          ? e.target.classList.contains('is-active') || e.target.click()
          : e.target.classList.contains('is-active') && e.target.click();
      });
    }).observe(o),
      t.mount());
  },
  gallerySlide = function () {
    document.querySelectorAll('.gallery-slide').forEach(function (e) {
      if (e.querySelectorAll('.slidebox-item').length > 1) var t = 'loop';
      else t = 'slide';
      var o = new Splide(e, {
        type: t,
        perPage: 1,
        perMove: 1,
        gap: 0,
        arrows: !0,
        pagination: !1,
        autoWidth: !0,
        rewind: !0,
        updateOnMove: !0,
        waitForTransition: !0,
        afterTrace: !0,
        breakpoints: { 1100: { destroy: !0 } },
      });
      (MakeOption(e), o.mount());
    });
  },
  slidePartner = function () {
    var e = new Splide('.slide-partner', {
      type: 'loop',
      drag: 'free',
      snap: !0,
      focus: 'center',
      autoWidth: !0,
      easing: 'linear',
      gap: '3rem',
      pagination: !1,
      arrows: !1,
      pauseOnHover: !1,
      autoScroll: { speed: 1.5, autoStart: !1 },
      breakpoints: { 1100: { gap: '2rem', autoScroll: { speed: 1 } } },
    });
    e.mount(window.splide.ExScroll);
    var t = e.Components.AutoScroll;
    new IntersectionObserver(function (e, o) {
      e.forEach(function (e) {
        e.isIntersecting ? t.play() : t.pause();
      });
    }).observe(document.querySelector('.slide-partner'));
  };
// function NavClick() {
//   if (
//     (navClick.addEventListener("click", function (e) {
//       e.preventDefault(),
//         e.stopPropagation(),
//         navClick.classList.contains("active")
//           ? ((Nav.scrollTop = 0),
//             Header.classList.remove("active"),
//             Navigation.classList.remove("show", "enable"),
//             WinScroll.start(),
//             gsap.to(Navigation, {
//               duration: 0.5,
//               opacity: 0,
//               ease: "none",
//               onComplete: function () {
//                 navClick.classList.remove("active"),
//                   overlayMenu.classList.remove("show"),
//                   RemoveClass(naItems),
//                   (function (e) {
//                     for (var t = 0; t < e.length; t++)
//                       e[t].classList.add("off"),
//                         e[t].classList.remove("active");
//                   })(subItems),
//                   (function (e) {
//                     for (var t = 0; t < e.length; t++)
//                       e[t].classList.remove("active");
//                   })(hasSub),
//                   Array.from(naItems, function (e) {
//                     e.querySelector(".normal").classList.remove("show"),
//                       e.querySelector(".nav-drop") &&
//                         e.querySelector(".nav-drop").classList.remove("show");
//                   }),
//                   scrollStay &&
//                     groupCentral[groupIndex].classList.contains(
//                       "home-video",
//                       "show-text"
//                     ) &&
//                     (ytVideo || boxVideo) &&
//                     (Mobile.matches || playVid.click());
//               },
//             }))
//           : ((Nav.scrollTop = 0),
//             navClick.classList.add("active"),
//             Header.classList.add("active"),
//             overlayMenu.classList.add("show"),
//             WinScroll.stop(),
//             scrollStay &&
//               groupCentral[groupIndex].classList.contains(
//                 "home-video",
//                 "show-text"
//               ) &&
//               (ytVideo || boxVideo) &&
//               StopPlay(),
//             gsap.to(Navigation, {
//               duration: 0.5,
//               opacity: 1,
//               ease: "none",
//               onComplete: function () {
//                 Navigation.classList.add("show"),
//                   Mobile.matches || new colEffect(Header),
//                   Array.from(naItems, function (e) {
//                     e.querySelector(".normal").classList.add("show"),
//                       e.querySelector(".nav-drop") &&
//                         e.querySelector(".nav-drop").classList.add("show");
//                   });
//                 for (var e = 0; e < hasSub.length; e++)
//                   hasSub[e].classList.contains("current") &&
//                     hasSub[e].querySelector(".nav-item").click();
//               },
//             }));
//     }),
//     subClick)
//   ) {
//     for (var e = 0; e < subClick.length; e++)
//       subClick[e].addEventListener("click", t);
//     function t(e) {
//       var t = this.getAttribute("data-show"),
//         o = Navigation.querySelector('.sub-menu-drop[data-show="' + t + '"]');
//       o.classList.contains("active")
//         ? (this.parentNode.classList.remove("active"),
//           this.classList.remove("active"),
//           o.classList.remove("active"))
//         : (this.parentNode.classList.add("active"),
//           this.classList.add("active"),
//           o.classList.add("active"));
//     }
//   }
//   Subscrible.addEventListener("click", function (e) {
//     e.preventDefault(),
//       e.stopPropagation(),
//       navClick.classList.contains("active") && navClick.click(),
//       document.querySelector(".house-detail") && closeApart.click();
//     var t = this.dataset.page;
//     if (Mobile.matches || !scrollStay) {
//       var o = document.querySelector(
//         ".group-central[data-name='" + t + "']"
//       ).offsetTop;
//       gsap.to("html", { duration: 1, scrollTop: o, ease: "none" });
//     } else document.querySelector(".box-nav .click[data-page='" + t + "']").click();
//   }),
//     window.addEventListener("keydown", function (e) {
//       27 == (e.keyCode || e.which) &&
//         (e.preventDefault(),
//         navClick.classList.contains("active") && navClick.click());
//     });
// }

function slideKeyvisual() {
  const sliders = document.querySelectorAll('.js-slider-keyvisual');
  if (!sliders.length) return;

  sliders.forEach((element) => {
    new Swiper(element, {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: false,
      },
      centeredSlides: true,
      pagination: {
        el: element.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  });
}
function LoadProgress(e) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  (t.open('GET', e, !0),
    (t.onreadystatechange = function () {
      4 == t.readyState &&
        200 == t.status &&
        ((document.querySelector('.progress-list').innerHTML = t.responseText),
        document.querySelectorAll('.box-progress').forEach(function (e, t) {
          e.style.setProperty('--data-index', t);
        }),
        gsap.to('.progress-list', {
          duration: 0.6,
          opacity: 1,
          ease: 'none',
          onComplete: function () {
            (document.querySelector('.progress-list').classList.add('show'),
              onPlay());
          },
        }));
    }),
    t.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
    t.send());
}
function loadPopup(e, t) {
  var o = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  (o.open('GET', e, !0),
    (o.onreadystatechange = function () {
      if (4 == o.readyState && 200 == o.status) {
        WindBody.insertAdjacentHTML('beforeend', o.responseText);
        var e = document.querySelector('.content-popup'),
          a = e.querySelector('.details-news');
        ((e.scrollTop = 0),
          gsap.to(e, { duration: 0.1, scrollTop: 0, ease: 'none' }));
        var n = e.querySelector('.details-center');
        if (n) {
          var r = n.offsetWidth;
          n.style.setProperty('--off-width', r + 'px');
        }
        var s = e.querySelector('.close-popup');
        if (((s.innerHTML = svgClose), a)) {
          var c = a.querySelectorAll('.load-text a');
          (document
            .querySelectorAll('.load-text img, .load-text p, .print')
            .forEach(function (e) {
              e.classList.add('ani-item');
            }),
            Format(),
            ShareSocial(),
            c.forEach(function (e) {
              e.addEventListener('click', function (e) {
                e.preventDefault();
                var t = this.getAttribute('href');
                return (window.open(t, '_blank'), !1);
              });
            }));
        }
        (t && window.location.hash,
          gsap.to(e, {
            duration: 1,
            opacity: 1,
            ease: 'none',
            onComplete: function () {
              (n.classList.add('fadein'),
                s.classList.add('goleft'),
                Loadx.classList.remove('display-block'),
                n.scrollHeight > window.innerHeight &&
                  (e.classList.add('no-after'), ScrollInner(e)),
                setTimeout(function () {
                  onPlay();
                }, 500));
            },
          }),
          s.addEventListener('click', function (o) {
            (o.preventDefault(),
              document.querySelector('.popup-home') &&
                sessionStorage.setItem('showpopup', '1'),
              gsap.to(e, {
                duration: 0.5,
                opacity: 0,
                ease: 'none',
                onComplete: function () {
                  (WinScroll.start(), thatInner && thatInner.destroy());
                  (overlayDark.classList.remove('show'),
                    gsap.to(e, {
                      duration: 0.3,
                      scrollTop: 0,
                      ease: 'none',
                      onComplete: function () {
                        e.remove();
                      },
                    }));
                },
              }),
              window.location.hash,
              '' != t &&
                (!document.querySelector('.box-nav .current button') ||
                ('masterplan-page' != IDPage &&
                  'about-page' != IDPage &&
                  'location-page' != IDPage &&
                  'facilities-page' != IDPage &&
                  'library-page' != IDPage) ||
                Mobile.matches
                  ? (changeUrl(
                      document.querySelector('.main-menu .current a').href,
                      document.querySelector('.main-menu .current a').dataset
                        .title,
                      document.querySelector('.main-menu .current a').dataset
                        .description,
                      document.querySelector('.main-menu .current a').dataset
                        .keyword,
                      document.querySelector('.main-menu .current a').dataset
                        .name,
                    ),
                    changeAlternate(
                      document.querySelector('.main-menu .current a').href,
                      document.querySelector('.main-menu .current a'),
                      1,
                    ))
                  : (changeUrl(
                      document.querySelector('.box-nav .current button').dataset
                        .href,
                      document.querySelector('.box-nav .current button').dataset
                        .title,
                      document.querySelector('.box-nav .current button').dataset
                        .description,
                      document.querySelector('.box-nav .current button').dataset
                        .keyword,
                      document.querySelector('.box-nav .current button').dataset
                        .name,
                    ),
                    changeAlternate(
                      document.querySelector('.box-nav .current button').dataset
                        .href,
                      document.querySelector('.box-nav .current button'),
                      1,
                    ))));
          }),
          window.addEventListener('resize', function () {
            var t = e.querySelector('.details-center').scrollHeight,
              o = e.querySelector('.scrollbar-inner');
            t > window.innerHeight
              ? (e.classList.add('no-after'),
                o ||
                  setTimeout(function () {
                    ScrollInner(e);
                  }, 500))
              : e.classList.remove('no-after');
          }),
          window.addEventListener('keydown', function (e) {
            27 == (e.keyCode || e.which) && (e.preventDefault(), s.click());
          }));
      }
    }),
    o.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
    o.send());
}
function LinkPopup() {
  document.querySelectorAll('.link-popup').forEach(function (e) {
    e.addEventListener('click', function (e) {
      (e.preventDefault(), e.stopPropagation());
      var t = this.dataset.href ? this.dataset.href : this.href + '?isajax=1',
        o = this.dataset.name;
      if ('' != o) {
        var a = null != this.dataset.canonical ? this.dataset.canonical : '';
        (changeUrl(
          this.href,
          this.dataset.title,
          this.dataset.description,
          this.dataset.keyword,
          this.dataset.name,
          a,
        ),
          changeAlternate(this.href, this, 1));
      }
      (Loadx.classList.contains('display-block') ||
        Loadx.classList.add('display-block'),
        overlayDark.classList.add('show'),
        WinScroll.stop(),
        loadPopup(t, o));
    });
  });
}
var toolTip = function () {
  var e = document.querySelectorAll('.key-area');
  e.forEach(function (t) {
    (addMultipleEvents(['mouseenter', 'click'], t, function (t) {
      (t.preventDefault(), t.stopPropagation());
      for (var o = 0; o < e.length; o++) e[o].classList.remove('show');
      ('click' == t.type &&
        document
          .querySelector('.tooltip span:nth-child(1)')
          .removeAttribute('class'),
        this.classList.add('show'));
      var a = this.dataset.name;
      if (
        document.querySelector(
          '.house-text[data-num="' + a + '"] .area-des h3 strong',
        )
      )
        var n = document.querySelector(
          '.house-text[data-num="' + a + '"] .area-des h3 strong',
        ).textContent;
      var r = document.querySelector(
          '.house-text[data-num="' + a + '"] .num-block p',
        ).textContent,
        s = document.querySelector(
          '.house-text[data-num="' + a + '"] .num-block span',
        ).className;
      return (
        n &&
          (document.querySelector('.tooltip span:nth-child(1)').innerHTML = n),
        (document.querySelector('.tooltip span:nth-child(2)').innerHTML = r),
        document.querySelector('.tooltip span:nth-child(1)').classList.add(s),
        document.querySelector('.tooltip').classList.add('showup'),
        !1
      );
    }),
      t.addEventListener('mouseleave', function (e) {
        return (
          this.classList.remove('show'),
          document.querySelector('.tooltip').classList.remove('showup'),
          document
            .querySelector('.tooltip span:nth-child(1)')
            .removeAttribute('class'),
          !1
        );
      }),
      t.addEventListener('click', function (e) {
        if ((e.preventDefault(), e.stopPropagation(), !Touch)) {
          gsap.to(houseLoad, {
            duration: 0.3,
            ease: 'none',
            opacity: 0,
            onComplete: function () {
              houseLoad.innerHTML = '';
            },
          });
          var t = this.dataset.name;
          document.querySelector(
            ".house-text[data-num='" + t + "'] .go-link",
          ) &&
            document
              .querySelector(".house-text[data-num='" + t + "'] .go-link")
              .click();
        }
        return !1;
      }),
      document
        .querySelector('.tooltip')
        .addEventListener('click', function (t) {
          (t.preventDefault(), t.stopPropagation());
          for (var o = 0; o < e.length; o++) e[o].classList.remove('show');
          return (
            this.classList.remove('showup'),
            this.querySelector('span:nth-child(1)').removeAttribute('class'),
            !1
          );
        }));
  });
};
function ApartmentLoad(e, t, o, a, n, r, s, c) {
  document.querySelector('.house-detail') &&
    (document.querySelector('.house-detail').remove(),
    (houseLoad.innerHTML = ''));
  var i = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  (i.open('GET', e, !0),
    (i.onreadystatechange = function () {
      if (4 == i.readyState && 200 == i.status) {
        if (
          ((houseLoad.innerHTML = i.responseText),
          !document.querySelector('.slide-pic-nav'))
        ) {
          var e = creatDiv('div', 'slide-pic-nav');
          ((e.innerHTML = NP), loadApartment.append(e));
        }
        ((houseLoad.querySelector('.block-des').innerHTML = t),
          (houseLoad.querySelector('.floor-des').innerHTML = o),
          (houseLoad.querySelector('.house-number').innerHTML = n),
          (houseLoad.querySelector('.block-num').innerHTML = t),
          (houseLoad.querySelector('.floor-num').innerHTML = o),
          houseLoad.querySelector('.keyplan').classList.add(s),
          houseLoad.querySelector('.house-number').classList.add(c));
        var l = creatDiv('div', 'keyplan-svg');
        ((l.className = 'keyplan-svg'),
          'keyplan_01' == a
            ? (l.innerHTML = keyplan_01)
            : 'keyplan_02' == a
              ? (l.innerHTML = keyplan_02)
              : 'keyplan_03' == a
                ? (l.innerHTML = keyplan_03)
                : 'keyplan_A2' == a
                  ? (l.innerHTML = keyplan_A2)
                  : 'keyplan_A3' == a
                    ? (l.innerHTML = keyplan_A3)
                    : 'keyplan_B1' == a
                      ? (l.innerHTML = keyplan_B1)
                      : 'keyplan_B2' == a
                        ? (l.innerHTML = keyplan_B2)
                        : 'keyplan_B3' == a
                          ? (l.innerHTML = keyplan_B3)
                          : 'keyplan_B4' == a
                            ? (l.innerHTML = keyplan_B4)
                            : 'keyplan_B5_35' == a
                              ? (l.innerHTML = keyplan_B5_35)
                              : 'keyplan_B36' == a &&
                                (l.innerHTML = keyplan_B36),
          houseLoad.querySelector('.keyplan').append(l),
          makeImg(),
          bgHouse.classList.add('show'),
          ShareSocial());
        var u = document.querySelector('.house-text.current');
        (u && LoadNext(u),
          gsap.to(houseLoad, {
            duration: 0.5,
            ease: 'none',
            opacity: 1,
            onComplete: function () {
              (gsap.to('.keyplan-svg', {
                duration: 0.3,
                ease: 'none',
                opacity: 1,
                onComplete: function () {
                  houseLoad.querySelectorAll('.keyplan-svg .key-area');
                  houseLoad
                    .querySelector(
                      '.keyplan-svg .key-area[data-name="' + r + '"]',
                    )
                    .classList.add('active');
                },
              }),
                houseLoad
                  .querySelector('.house-detail')
                  .classList.add('show-house'),
                loadApartment
                  .querySelector('.slide-pic-nav')
                  .classList.add('show'),
                closeApart.classList.add('show'),
                toolTip(),
                Loadx.classList.remove('display-block'));
            },
          }),
          closeApart.addEventListener('click', function (e) {
            var t = document.querySelectorAll('.on-slide, .house-text');
            return (
              RemoveClass(t),
              Header.classList.remove('light'),
              loadApartment.querySelector('.slide-pic-nav') &&
                loadApartment
                  .querySelector('.slide-pic-nav')
                  .classList.remove('show'),
              Mobile.matches
                ? (addURL(
                    document.querySelector('.main-menu li.current a'),
                    document.querySelector('.main-menu li.current a').dataset
                      .name,
                  ),
                  changeAlternate(
                    document.querySelector('.main-menu li.current a').href,
                    document.querySelector('.main-menu li.current a'),
                    1,
                  ))
                : (addURL(
                    document.querySelector('.box-nav li.current button'),
                    document.querySelector('.box-nav li.current button').dataset
                      .name,
                  ),
                  changeAlternate(
                    document.querySelector('.box-nav li.current button').dataset
                      .href,
                    document.querySelector('.box-nav li.current button'),
                    1,
                  )),
              Loadx.classList.remove('display-block'),
              houseLoad
                .querySelector('.house-detail')
                .classList.remove('show-house'),
              closeApart.classList.remove('show'),
              bgHouse.classList.remove('show'),
              document.querySelector('.bg-house .bg-house-img') &&
                document.querySelector('.bg-house-img').remove(),
              gsap.killTweensOf(loadApartment, houseLoad),
              gsap.to([loadApartment, houseLoad], {
                duration: 0.3,
                ease: 'none',
                opacity: 0,
                delay: 0.5,
                onComplete: function () {
                  ((houseLoad.innerHTML = ''),
                    loadApartment.classList.remove('display-block'),
                    WinScroll.start());
                },
              }),
              !1
            );
          }));
      }
    }),
    i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
    i.send());
}
function checkNum(e, t) {
  var o = Array.from(
    document.querySelectorAll('.on-slide .house-text'),
  ).indexOf(t);
  o == e - 1
    ? (document.querySelector('.arrow-next').classList.add('disabled'),
      document.querySelector('.arrow-prev').classList.remove('disabled'))
    : o <= 0
      ? (document.querySelector('.arrow-next').classList.remove('disabled'),
        document.querySelector('.arrow-prev').classList.add('disabled'))
      : (document.querySelector('.arrow-next').classList.remove('disabled'),
        document.querySelector('.arrow-prev').classList.remove('disabled'));
}
function LoadNext(e) {
  var t = !1,
    o = document.querySelector('.on-slide .current').nextElementSibling,
    a = document.querySelector('.on-slide .current').previousElementSibling,
    n = document.querySelectorAll('.on-slide .house-text'),
    r = n.length,
    s = document.querySelector('.on-slide .current'),
    c = document.querySelector('.arrow-next'),
    i = document.querySelector('.arrow-prev');
  (checkNum(r, s),
    document
      .querySelector('.arrow-next')
      .addEventListener('click', function (e) {
        (e.preventDefault(),
          e.stopPropagation(),
          (t = !0),
          document.querySelector('.arrow-next').classList.add('disabled'));
        for (var a = 0; a < n.length; a++) n[a].classList.remove('current');
        return (
          houseLoad.querySelector('.house-detail').classList.add('fadeout'),
          Loadx.classList.contains('display-block') ||
            Loadx.classList.add('display-block'),
          gsap.killTweensOf(houseLoad),
          gsap.to(houseLoad, {
            duration: 0.8,
            opacity: 0,
            ease: 'none',
            onComplete: function () {
              if (
                (document.querySelector('.house-detail') &&
                  (houseLoad.innerHTML = ''),
                (t = !1),
                null !== o)
              ) {
                o.classList.add('current');
                var e = o.querySelector('.go-link').href + '?isajax=1',
                  a = o.parentNode.dataset.text,
                  n = o.parentNode.dataset.floor,
                  r = o.parentNode.dataset.key,
                  s = o.querySelector('.num-block p').textContent,
                  c = o.parentNode.parentNode.dataset.class,
                  i = o.dataset.num,
                  l = o.querySelector('.num-block span').className;
                (addURL(
                  o.querySelector('.go-link'),
                  o.querySelector('.go-link').dataset.name,
                ),
                  changeAlternate(
                    o.querySelector('.go-link').href,
                    o.querySelector('.link-change-url'),
                    1,
                  ),
                  ApartmentLoad(e, a, n, r, s, i, c, l));
              }
            },
          }),
          !1
        );
      }),
    document
      .querySelector('.arrow-prev')
      .addEventListener('click', function (e) {
        (e.preventDefault(),
          e.stopPropagation(),
          (t = !0),
          document.querySelector('.arrow-prev').classList.add('disabled'));
        for (var o = 0; o < n.length; o++) n[o].classList.remove('current');
        return (
          houseLoad.querySelector('.house-detail').classList.add('fadeout'),
          Loadx.classList.contains('display-block') ||
            Loadx.classList.add('display-block'),
          gsap.killTweensOf(houseLoad),
          gsap.to(houseLoad, {
            duration: 0.8,
            opacity: 0,
            ease: 'none',
            onComplete: function () {
              if (
                (document.querySelector('.house-detail') &&
                  (houseLoad.innerHTML = ''),
                (t = !1),
                null !== a)
              ) {
                a.classList.add('current');
                var e = a.querySelector('.go-link').href + '?isajax=1',
                  o = a.parentNode.dataset.text,
                  n = a.parentNode.dataset.floor,
                  r = a.parentNode.dataset.key,
                  s = a.querySelector('.num-block p').textContent,
                  c = a.parentNode.parentNode.dataset.class,
                  i = a.dataset.num,
                  l = a.querySelector('.num-block span').className;
                (addURL(
                  a.querySelector('.go-link'),
                  a.querySelector('.go-link').dataset.name,
                ),
                  changeAlternate(
                    a.querySelector('.go-link').href,
                    a.querySelector('.link-change-url'),
                    1,
                  ),
                  ApartmentLoad(e, o, n, r, s, i, c, l));
              }
            },
          }),
          !1
        );
      }),
    loadApartment.addEventListener(
      'wheel',
      function (e) {
        if (!Mobile.matches) {
          e = window.event || e;
          if (Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)) > 0) {
            if (!doWheel || t) return;
            ((doWheel = !1),
              i.classList.contains('disabled') || i.click(),
              setTimeout(turnWheelTouch, 800));
          } else {
            if (!doWheel || t) return;
            ((doWheel = !1),
              c.classList.contains('disabled') || c.click(),
              setTimeout(turnWheelTouch, 800));
          }
        }
      },
      { passive: !1 },
    ),
    loadApartment.addEventListener(
      'swipeleft',
      function (e) {
        doTouch &&
          !t &&
          ((doTouch = !1),
          c.classList.contains('disabled') ||
            (document.querySelector('.house-detail').classList.add('moveleft'),
            document
              .querySelector('.moveleft')
              .addEventListener('animationend', function () {
                c.click();
              })),
          setTimeout(turnWheelTouch, 1e3));
      },
      { passive: !1 },
    ),
    loadApartment.addEventListener(
      'swiperight',
      function (e) {
        doTouch &&
          !t &&
          ((doTouch = !1),
          i.classList.contains('disabled') ||
            (document.querySelector('.house-detail').classList.add('moveright'),
            document
              .querySelector('.moveright')
              .addEventListener('animationend', function () {
                i.click();
              })),
          setTimeout(turnWheelTouch, 1e3));
      },
      { passive: !1 },
    ));
}
function LinkPage() {
  (document.querySelectorAll('.link-load').forEach(function (e) {
    e.addEventListener('click', function (e) {
      e.preventDefault();
      var t = this.href || this.dataset.href;
      (gsap.to([Container, Header], {
        duration: 0.6,
        opacity: 0,
        ease: 'none',
      }),
        (window.location = t));
    });
  }),
    document.querySelectorAll('.link-blank').forEach(function (e) {
      e.addEventListener('click', function (e) {
        e.preventDefault();
        var t = this.href;
        return (window.open(t, '_blank'), !1);
      });
    }));
}
function ContentLoad() {
  var e = Container.dataset.name;
  if (
    ('home-page' !== IDPage
      ? (Logo.classList.add('onclick'),
        Logo.addEventListener('click', function () {
          Navigation.querySelector('.link-home')
            ? Navigation.querySelector('.link-home').click()
            : document.querySelector('.link-home') &&
              document.querySelector('.link-home').click();
        }))
      : document.querySelectorAll('.link-home').forEach(function (e) {
          e.classList.add('current');
        }),
    document.querySelector(
      '.main-menu li .nav-item[data-name="' + IDPage + '"]',
    ) &&
      document
        .querySelector('.main-menu li .nav-item[data-name="' + IDPage + '"]')
        .parentNode.classList.add('current'),
    e &&
      document.querySelectorAll('.item-menu-second').forEach(function (t) {
        t.querySelector('a[data-name="' + e + '"]') &&
          t
            .querySelector('a[data-name="' + e + '"]')
            .parentNode.classList.add('current');
      }),
    document.querySelector('.link-popup.current')
      ? setTimeout(function () {
          document.querySelector('.link-popup.current').click();
        }, 2e3)
      : document.querySelector('.popup-show') &&
        (sessionStorage.getItem('showpopup') ||
          setTimeout(function () {
            var e = document.querySelector('.popup-show').dataset.href;
            (Loadx.classList.contains('display-block') ||
              Loadx.classList.add('display-block'),
              WinScroll.stop(),
              loadPopup(e, ''),
              overlayDark.classList.add('show', 'on'));
          }, 2500)),
    document
      .querySelectorAll('.item-news-home, .item-news')
      .forEach(function (e) {
        e &&
          e.addEventListener('click', function (e) {
            (e.preventDefault(), this.querySelector('a').click());
          });
      }),
    document
      .querySelectorAll('.home-masterplan .hover-block')
      .forEach(function (e) {
        e.addEventListener('click', function (e) {
          (e.preventDefault(), e.stopPropagation());
          var t = this.dataset.name;
          Touch ||
            document
              .querySelector(".note-block[data-block='" + t + "'] a")
              .click();
        });
      }),
    document.querySelectorAll('.masterplan .hover-block').forEach(function (e) {
      e.addEventListener('click', function (e) {
        (e.preventDefault(), e.stopPropagation());
        var t = this.dataset.block,
          o = this.dataset.link;
        if (t)
          if (Mobile.matches) {
            var a = document.querySelector(
              ".block[data-name='" + t + "']",
            ).offsetTop;
            gsap.to('html', { duration: 1, scrollTop: a, ease: 'sine.inOut' });
          } else
            document
              .querySelector(".box-nav .click[data-page='" + t + "']")
              .click();
        o &&
          document
            .querySelector(".item-menu-second > a[data-name='" + o + "']")
            .click();
      });
    }),
    (document.querySelector('.note-available') ||
      document.querySelector('.dot-num') ||
      document.querySelector('.map-img')) &&
      hoverEvents(),
    document.querySelector('.item-library .big-thumb') &&
      document
        .querySelectorAll('.item-library .big-thumb')
        .forEach(function (e) {
          (e.addEventListener('click', function (e) {
            (e.preventDefault(),
              e.stopPropagation(),
              this.querySelector('a').click());
          }),
            e.addEventListener('mouseenter', function (e) {
              (e.preventDefault(), this.parentNode.classList.add('hover'));
            }),
            e.addEventListener('mouseleave', function (e) {
              (e.preventDefault(), this.parentNode.classList.remove('hover'));
            }));
        }),
    'progress-page' == IDPage && customSelect(),
    scrollStay &&
      (groupCentral[0].classList.add('show-text'),
      boxLi[0].classList.add('current')),
    document.querySelector('.sub-mobile'))
  ) {
    (document.querySelector('.sub-mobile').classList.add('show'),
      document.querySelector('.sub-mobile li .click').classList.add('current'),
      document
        .querySelector('.slidebar')
        .addEventListener('click', function (e) {
          return (
            e.preventDefault(),
            this.parentNode.classList.contains('active')
              ? this.parentNode.classList.remove('active')
              : this.parentNode.classList.add('active'),
            !1
          );
        }));
    var t = document.querySelectorAll('.click');
    t.forEach(function (e) {
      e.addEventListener('click', function (e) {
        (e.preventDefault(), RemoveClass(t));
        var o = this.dataset.page;
        this.classList.add('current');
        var a = document.querySelector(
          '.group-central[data-name="' + o + '"]',
        ).offsetTop;
        return (
          Mobile.matches &&
            (window.scrollTo({ top: a, behavior: 'smooth' }),
            document.querySelector('.slidebar').click()),
          !1
        );
      });
    });
  }
}
(houseText.forEach(function (e) {
  e.addEventListener('click', function (e) {
    if (
      (e.preventDefault(), e.stopPropagation(), this.querySelector('.go-link'))
    ) {
      for (var t = 0; t < blockArea.length; t++)
        blockArea[t].classList.remove('show');
      for (t = 0; t < houseText.length; t++)
        houseText[t].classList.remove('show', 'current');
      (this.classList.add('current'),
        this.parentNode.classList.add('on-slide'));
      var o = this.querySelector('.go-link').href + '?isajax=1',
        a = this.parentNode.dataset.text,
        n = this.parentNode.dataset.floor,
        r = this.parentNode.dataset.key,
        s = this.querySelector('.num-block p').textContent,
        c = this.parentNode.parentNode.dataset.class,
        i = this.dataset.num,
        l = this.querySelector('.num-block span').className;
      (WinScroll.stop(),
        loadApartment.classList.add('display-block'),
        Header.classList.add('light'),
        Loadx.classList.contains('display-block') ||
          Loadx.classList.add('display-block'),
        addURL(
          this.querySelector('.go-link'),
          this.querySelector('.go-link').dataset.name,
        ),
        changeAlternate(
          this.querySelector('.go-link').href,
          this.querySelector('.link-change-url'),
          1,
        ),
        gsap.to(loadApartment, {
          duration: 0.3,
          ease: 'none',
          opacity: 1,
          onComplete: function () {
            ApartmentLoad(o, a, n, r, s, i, c, l);
          },
        }));
    } else this.classList.remove('showup');
    return !1;
  });
}),
  blockArea.forEach(function (e) {
    (addMultipleEvents(['mouseenter', 'click'], e, function (e) {
      if ((e.stopPropagation(), !Mobile.matches)) {
        for (var t = 0; t < houseText.length; t++)
          (houseText[t].classList.remove('showup'),
            (houseText[t].style.left = '0'),
            (houseText[t].style.top = '0'));
        for (t = 0; t < blockArea.length; t++)
          blockArea[t].classList.remove('show');
        this.classList.add('show');
        var o = this.dataset.name,
          a = document.querySelector('.house-text[data-num="' + o + '"]'),
          n = e.clientX,
          r = e.clientY,
          s = a.offsetWidth,
          c = a.offsetHeight;
        a &&
          (Touch
            ? ((a.style.left = n - s / 2 + 'px'),
              (a.style.top = r - (c + 60) + 'px'))
            : ((a.style.left = n + 60 + 'px'), (a.style.top = r - 100 + 'px')),
          a.classList.add('showup'));
      }
    }),
      e.addEventListener('mouseleave', function (e) {
        this.classList.remove('show');
        for (var t = 0; t < houseText.length; t++)
          (houseText[t].classList.remove('showup'),
            (houseText[t].style.left = '0'),
            (houseText[t].style.top = '0'));
      }),
      e.addEventListener('click', function (e) {
        if ((e.preventDefault(), e.stopPropagation(), !Touch)) {
          var t = this.dataset.name;
          document.querySelector(
            ".house-text[data-num='" + t + "'] .go-link",
          ) &&
            document
              .querySelector(".house-text[data-num='" + t + "'] .go-link")
              .click();
        }
        return !1;
      }));
  }));
var customSelect = function () {
  var e = document.querySelector('.select-header'),
    t = document.querySelector('.select-box'),
    o = document.querySelectorAll('.select-box li'),
    a = document.querySelectorAll('.select-box li a');
  (t.addEventListener('mouseenter', function () {
    thatScroll.stop();
  }),
    t.addEventListener('mouseleave', function () {
      thatScroll.start();
    }),
    t.addEventListener(
      'touchstart',
      function () {
        thatScroll.stop();
      },
      { passive: !1 },
    ),
    t.addEventListener(
      'touchend',
      function () {
        thatScroll.start();
      },
      { passive: !1 },
    ),
    e.addEventListener('click', function (e) {
      (e.preventDefault(),
        this.classList.contains('onclick')
          ? (this.classList.remove('onclick'),
            gsap.to('.select-box', {
              duration: 0.2,
              ease: 'none',
              opacity: 0,
              onComplete: function () {
                t.classList.remove('show');
              },
            }))
          : (this.classList.add('onclick'),
            t.classList.add('show'),
            gsap.to('.select-box', {
              duration: 0.2,
              ease: 'none',
              opacity: 1,
            })));
    }));
  document.addEventListener('click', function (o) {
    const a = document.querySelector('.select-header');
    var n = o.target;
    do {
      if (n == a) return;
      n = n.parentNode;
    } while (n);
    e.classList.contains('onclick') &&
      gsap.to('.select-box', {
        duration: 0.2,
        ease: 'none',
        opacity: 0,
        onComplete: function () {
          (e.classList.remove('onclick'),
            t.classList.remove('show'),
            thatScroll && thatScroll.start());
        },
      });
  });
  (document
    .querySelector('.select-list')
    .addEventListener('mouseleave', function () {
      gsap.to('.select-box', {
        duration: 0.2,
        ease: 'none',
        opacity: 0,
        onComplete: function () {
          (e.classList.remove('onclick'),
            t.classList.remove('show'),
            thatScroll.start());
        },
      });
    }),
    a.forEach(function (a) {
      a.addEventListener('click', function (a) {
        a.preventDefault();
        for (var n = 0; n < o.length; n++) o[n].classList.remove('selected');
        (this.parentNode.classList.add('selected'),
          gsap.to('.select-box', {
            duration: 0.2,
            ease: 'none',
            opacity: 0,
            onComplete: function () {
              (e.classList.remove('onclick'), t.classList.remove('show'));
            },
          }));
        this.dataset.name;
        var r = this.href + '?isajax=1',
          s = this.querySelector('h3').textContent;
        return (
          (document.querySelector('.select-header h3').innerHTML = s),
          1 == isFirst &&
            (changeUrl(
              this.href,
              this.dataset.title,
              this.dataset.description,
              this.dataset.keyword,
              this.dataset.name,
            ),
            changeAlternate(this.href, this, 1)),
          (isFirst = 1),
          gsap.to('.progress-list', {
            duration: 0.5,
            ease: 'none',
            opacity: 0,
            onComplete: function () {
              (document
                .querySelector('.progress-list')
                .classList.remove('show'),
                document.querySelector('.wrap-page') &&
                  document.querySelector('.wrap-page').remove(),
                LoadProgress(r));
            },
          }),
          !1
        );
      });
    }),
    document.querySelector('.link-ajax.current')
      ? document.querySelector('.link-ajax.current').click()
      : (function () {
          var e = new Date(),
            t = e.getMonth() + 1;
          if (t < 10) var o = '0' + t + '-' + e.getFullYear();
          else o = t + '-' + e.getFullYear();
          document.querySelector(".link-ajax[data-name='" + o + "']")
            ? document
                .querySelector(".link-ajax[data-name='" + o + "']")
                .click()
            : document.querySelector('.link-ajax:first-child') &&
              document.querySelector('.link-ajax:first-child').click();
        })());
};
const textColor = function (e) {
  var t = e.parentNode.parentNode.querySelector('.play-gsap'),
    o = e.parentNode.parentNode.querySelector('.pause-gsap'),
    a = gsap.fromTo(
      e,
      {
        backgroundImage:
          'linear-gradient(90deg, #c69b77 0%, #62b9d3 20%, #fff 60%, #7b9164 80%, #184e47 100%)',
        filter: 'contrast(1)',
      },
      {
        duration: 1.5,
        backgroundImage:
          'linear-gradient(110deg, #fff 0%, #7b9164 40%, #c69b77 60%, #62b9d3 80%, #877055 100%)',
        filter: 'contrast(1.3)',
        ease: 'none',
      },
    ),
    n = gsap.timeline({ repeat: -1, yoyo: !0 });
  (n.add(a),
    t.addEventListener('click', function (e) {
      n.play();
    }),
    o.addEventListener('click', function (e) {
      n.pause();
    }));
};
function ShareSocial() {
  var e =
    'https://www.facebook.com/sharer/sharer.php?u=' +
    encodeURI(window.location.href);
  (document.querySelector('.item-facebook').setAttribute('href', e),
    document.querySelector('.block-house') &&
      document.querySelectorAll('.block-house').forEach(function (t) {
        var o = t.querySelector('.item-facebook');
        if (window.location.hash) {
          var a = e.replace(/#.*/, '');
          o.setAttribute('href', a + '#' + t.dataset.name);
        } else o.setAttribute('href', e + '#' + t.dataset.name);
      }));
}
(window.addEventListener('orientationchange', function (e) {
  onPlay();
}),
  window.addEventListener('resize', function () {
    ResizeWindows();
  }),
  window.addEventListener(
    'resize',
    debounce(function () {
      if ((ResizeWindows(), boxSlider.classList.contains('desktop-slide')))
        if (Mobile.matches) {
          if (Tagline && !Tagline.classList.contains('show')) {
            Tagline.classList.add('show');
            var e = document.querySelector('.tagline .text-gradient');
            textColor(e);
          }
        } else {
          checkData();
        }
    }, 250),
  ),
  ResizeWindows(),
  // NavClick(),
  slideKeyvisual(),
  textBreak(),
  LinkPage(),
  LinkPopup(),
  Reset(),
  FocusText(),
  ContentLoad());
var Length = document.querySelectorAll('.box-nav li').length;
function Done() {
  (ResizeWindows(),
    scrollStay ? checkData() : scrollBody(),
    setTimeout(function () {
      (WindBody.classList.add('showed'),
        document.querySelector('.full-banner') && fullSlide(),
        document.querySelector('.lifestyle-slide') && lifestyleSlide(),
        document.querySelector('.faci-slide') && faciSlide(),
        document.querySelector('.bgx-slide') && bgSlide(),
        document.querySelector('.gallery-slide') && gallerySlide(),
        document.querySelector('.slide-partner') && slidePartner(),
        Mask && Mask.classList.add('hide'),
        maskInner && maskInner.classList.add('hide'));
    }, 500),
    setTimeout(function () {
      if (
        (scrollDown.classList.add('show'),
        Mask && Mask.remove(),
        Loadx && Loadx.classList.remove('display-block'),
        maskInner && maskInner.remove(),
        Logo.classList.contains('center-load') &&
          Logo.classList.remove('center-load'),
        Tagline)
      ) {
        Tagline.classList.add('show');
        var e = document.querySelector('.tagline .text-gradient');
        textColor(e);
      }
      if (
        (titlePage && titlePage.classList.add('show'),
        document.querySelector('.option-scroll'))
      ) {
        var t = document.querySelector('.option-scroll .scroll-list');
        new SmoothScroll(t);
      }
      (('facilities-page' != IDPage && 'masterplan-page' != IDPage) ||
        (Mobile.matches && Header.classList.add('light')),
        onPlay());
    }, 1500),
    document.querySelector('.box-nav li.subcurrent') &&
      scrollStay &&
      document.querySelector('.box-nav li.subcurrent').click(),
    document.querySelector('.go-link.current') &&
      setTimeout(function () {
        (document.querySelector('.go-link.current').click(),
          document
            .querySelector('.go-link.current')
            .classList.remove('current'));
      }, 1e3));
}
(Length <= 1 &&
  (scrollDown.classList.add('display-none'), boxSlider.classList.add('single')),
  window.addEventListener('DOMContentLoaded', function () {
    ('home-page' == IDPage &&
      document.querySelector('.wrap-logo') &&
      document.querySelector('.wrap-logo').classList.add('showed'),
      setTimeout(function () {
        Done();
      }, 500));
  }));
var LocationHash = function () {
  var e = window.location.hash.slice(1);
  (document.querySelector(".link-ajax[data-name='" + e + "']") &&
    document.querySelector(".link-ajax[data-name='" + e + "']").click(),
    document.querySelector(".box-nav li .click[data-page='" + e + "']") &&
      document
        .querySelector(".box-nav li .click[data-page='" + e + "']")
        .parentNode.click());
};
history.pushState &&
  (window.onpopstate = function (e) {
    (e.preventDefault(),
      e.state &&
        (document.querySelector('.link-popup[href="' + e.state.path + '"]') &&
          document
            .querySelector('.link-popup[href="' + e.state.path + '"]')
            .click(),
        document.querySelector(
          '.box-nav li button[data-href="' + e.state.path + '"]',
        ) &&
          (document.querySelector('.house-detail')
            ? document.querySelector('.close-apartment').click()
            : document
                .querySelector(
                  '.box-nav li button[data-href="' + e.state.path + '"]',
                )
                .click()),
        document.querySelector('.link-ajax[href="' + e.state.path + '"]') &&
          document
            .querySelector('.link-ajax[href="' + e.state.path + '"]')
            .click(),
        document.querySelector('.go-link[href="' + e.state.path + '"]') &&
          document
            .querySelector('.go-link[href="' + e.state.path + '"]')
            .click()),
      null != document.querySelector('.close-video') &&
        document.querySelector('.close-video').click(),
      null != document.querySelector('.close-album') &&
        document.querySelector('.close-album').click(),
      null != document.querySelector('.close-pics') &&
        document.querySelector('.close-pics').click(),
      null != document.querySelector('.close-popup') &&
        document.querySelector('.close-popup').click(),
      window.location.hash && LocationHash());
  });

//# sourceMappingURL=app.js.map
