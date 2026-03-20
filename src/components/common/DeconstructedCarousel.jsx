import React, { useEffect } from 'react';
import './DeconstructedCarousel.css';
import './DeconstructedCarousel.css';

const DeconstructedCarousel = ({ items }) => {
  useEffect(() => {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".deconstructed-card");
    const prevBtn = document.querySelector(".carousel-button.prev");
    const nextBtn = document.querySelector(".carousel-button.next");
    const dotsContainer = document.querySelector(".dots-container");

    if (!track || !cards.length) return;

    // Clear existing dots
    dotsContainer.innerHTML = '';

    cards.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToCard(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    const cardWidth = cards[0].offsetWidth;
    const cardMargin = 40;
    const totalCardWidth = cardWidth + cardMargin;

    let currentIndex = 0;

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const xDeg = (y - 0.5) * 8;
        const yDeg = (x - 0.5) * -8;
        card.style.transform = `perspective(1200px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
        const layers = card.querySelectorAll(".card-layer");
        layers.forEach((layer, index) => {
          const depth = 30 * (index + 1);
          const translateZ = depth;
          const offsetX = (x - 0.5) * 10 * (index + 1);
          const offsetY = (y - 0.5) * 10 * (index + 1);
          layer.style.transform = `translate3d(${offsetX}px, ${offsetY}px, ${translateZ}px)`;
        });
        const waveSvg = card.querySelector(".wave-svg");
        if (waveSvg) {
          const moveX = (x - 0.5) * -20;
          const moveY = (y - 0.5) * -20;
          waveSvg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
          const wavePaths = waveSvg.querySelectorAll("path:not(:first-child)");
          wavePaths.forEach((path, index) => {
            const factor = 1 + index * 0.5;
            const waveX = moveX * factor * 0.5;
            const waveY = moveY * factor * 0.3;
            path.style.transform = `translate(${waveX}px, ${waveY}px)`;
          });
        }
        const bgObjects = card.querySelectorAll(".bg-object");
        bgObjects.forEach((obj, index) => {
          const factorX = (index + 1) * 10;
          const factorY = (index + 1) * 8;
          const moveX = (x - 0.5) * factorX;
          const moveY = (y - 0.5) * factorY;
          if (obj.classList.contains("square")) {
            obj.style.transform = `rotate(45deg) translate(${moveX}px, ${moveY}px)`;
          } else if (obj.classList.contains("triangle")) {
            obj.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1)`;
          } else {
            obj.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
        });
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
        const layers = card.querySelectorAll(".card-layer");
        layers.forEach((layer) => {
          layer.style.transform = "";
        });
        const waveSvg = card.querySelector(".wave-svg");
        if (waveSvg) {
          waveSvg.style.transform = "";
          const wavePaths = waveSvg.querySelectorAll("path:not(:first-child)");
          wavePaths.forEach((path) => {
            path.style.transform = "";
          });
        }
        const bgObjects = card.querySelectorAll(".bg-object");
        bgObjects.forEach((obj) => {
          if (obj.classList.contains("square")) {
            obj.style.transform = "rotate(45deg) translateY(-20px)";
          } else if (obj.classList.contains("triangle")) {
            obj.style.transform = "translate(-50%, -50%) scale(0.5)";
          } else {
            obj.style.transform = "translateY(20px)";
          }
        });
      });
    });

    function goToCard(index) {
      if (index < 0) {
        index = cards.length - 1;
      } else if (index >= cards.length) {
        index = 0;
      }

      currentIndex = index;
      updateCarousel();
    }

    function updateCarousel() {
      const containerWidth = track.parentElement.offsetWidth;
      const translateX = (containerWidth / 2) - (totalCardWidth / 2) - (currentIndex * totalCardWidth);
      track.style.transform = `translateX(${translateX}px)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    prevBtn.addEventListener("click", () => {
      goToCard(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      goToCard(currentIndex + 1);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        goToCard(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        goToCard(currentIndex + 1);
      }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      if (touchStartX - touchEndX > 50) {
        goToCard(currentIndex + 1);
      } else if (touchEndX - touchStartX > 50) {
        goToCard(currentIndex - 1);
      }
    }

    window.addEventListener("resize", () => {
      const newCardWidth = cards[0].offsetWidth;
      const newTotalCardWidth = newCardWidth + cardMargin;
      const containerWidth = track.parentElement.offsetWidth;

      const translateX = (containerWidth / 2) - (newTotalCardWidth / 2) - (currentIndex * newTotalCardWidth);
      track.style.transition = "none";
      track.style.transform = `translateX(${translateX}px)`;

      setTimeout(() => {
        track.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      }, 50);
    });

    updateCarousel();

    return () => {
      // Cleanup
    };
  }, [items]);

  const gradients = [
    { bg: 'linear-gradient(135deg, #C8102E, #FFD700)', wave1: '#FFD700', wave2: '#FFE55C' },
    { bg: 'linear-gradient(135deg, #003366, #FFD700)', wave1: '#FFD700', wave2: '#FFE55C' },
    { bg: 'linear-gradient(135deg, #C8102E, #003366)', wave1: '#003366', wave2: '#4A5D7A' },
    { bg: 'linear-gradient(135deg, #FFD700, #C8102E)', wave1: '#C8102E', wave2: '#A00D24' },
    { bg: 'linear-gradient(135deg, #003366, #C8102E)', wave1: '#C8102E', wave2: '#A00D24' },
    { bg: 'linear-gradient(135deg, #FFD700, #003366)', wave1: '#003366', wave2: '#4A5D7A' },
    { bg: 'linear-gradient(135deg, #C8102E, #FFD700)', wave1: '#FFD700', wave2: '#FFE55C' },
    { bg: 'linear-gradient(135deg, #003366, #FFD700)', wave1: '#FFD700', wave2: '#FFE55C' },
    { bg: 'linear-gradient(135deg, #C8102E, #003366)', wave1: '#003366', wave2: '#4A5D7A' },
    { bg: 'linear-gradient(135deg, #FFD700, #C8102E)', wave1: '#C8102E', wave2: '#A00D24' },
  ];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {items.map((item, index) => (
          <article key={index} className="deconstructed-card">
            <div className="card-layer card-image">
              <svg className="wave-svg" viewBox="0 0 300 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={gradients[index % gradients.length].bg.split(',')[0].split('(')[1]} />
                    <stop offset="100%" stopColor={gradients[index % gradients.length].bg.split(',')[1].split(')')[0]} />
                  </linearGradient>
                  <linearGradient id={`waveGradient1${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={gradients[index % gradients.length].wave1} />
                    <stop offset="50%" stopColor={gradients[index % gradients.length].wave2} />
                    <stop offset="100%" stopColor={gradients[index % gradients.length].wave1} />
                  </linearGradient>
                  <linearGradient id={`waveGradient2${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={gradients[index % gradients.length].wave2} />
                    <stop offset="50%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor={gradients[index % gradients.length].wave2} />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill={`url(#gradient${index})`} />
                <path d="M0,230 C30,220 60,240 90,230 C120,220 150,240 180,230 C210,220 240,240 270,230 C290,225 295,230 300,225 L300,400 L0,400 Z" fill={`url(#waveGradient1${index})`} opacity="0.8" />
                <path d="M0,260 C40,250 80,270 120,260 C160,250 200,270 240,260 C280,250 290,260 300,255 L300,400 L0,400 Z" fill={`url(#waveGradient2${index})`} opacity="0.9" />
                <path d="M0,290 C50,280 100,300 150,290 C200,280 250,300 300,290 L300,400 L0,400 Z" fill="#FFFFFF" opacity="0.9" />
              </svg>
            </div>
            <div className="card-layer card-frame">
              <svg viewBox="0 0 300 400" preserveAspectRatio="none">
                <path className="frame-path" d="M 20,20 H 280 V 380 H 20 Z" />
              </svg>
            </div>
            <div className="card-layer card-content">
              <div className="content-fragment fragment-heading">
                <h2 className="content-text">Department of</h2>
                <h3 className="content-subtext">{item.name.replace('Department of ', '')}</h3>
              </div>
              <div className="content-fragment fragment-meta">
                <div className="meta-line"></div>
                <span className="meta-text">DEPARTMENT</span>
              </div>
              <div className="content-fragment fragment-body">
                <p className="content-text">Explore the {item.name} and learn about our programs and faculty.</p>
              </div>
              <div className="content-fragment fragment-cta">
                <a href={`/departments/${item.id}`} className="cta-link">
                  <div className="cta-box"></div>
                  <span className="cta-text">VIEW DEPARTMENT</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-button prev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="carousel-button next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="dots-container"></div>
    </div>
  );
};

export default DeconstructedCarousel;