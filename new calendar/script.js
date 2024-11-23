import data from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const activeColors = ["#5fa5f9", "#e879f9", "#a78fba", "#2cd4df"];

    
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    
    const generatePads = (card, items, days) => {
        const rowsConfig = [7, 7, 7, 7, Math.floor(Math.random() * 3) + 2];
        const activePads = [];
        const eventDays = items.map(item => item.day);

        rowsConfig.forEach((padCount, rowIndex) => {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let i = 0; i < padCount; i++) {
                const pad = document.createElement("div");
                pad.classList.add("pad");
                row.appendChild(pad);

                
                const dayNumber = days.shift();
                pad.textContent = dayNumber ? dayNumber : "";
                if (dayNumber) {
                    pad.dataset.day = dayNumber;
                    if (eventDays.includes(dayNumber)) {
                        pad.classList.add("active");
                        pad.style.backgroundColor = activeColors[Math.floor(Math.random() * activeColors.length)];
                        activePads.push(pad);
                    }
                }
            }
            card.appendChild(row);
        });

        setActivePads(activePads, card, items);
    };

    const setActivePads = (activePads, card, items) => {
        activePads.forEach(pad => {
            const dayNumber = parseInt(pad.dataset.day);
            const item = items.find(event => event.day === dayNumber);

            pad.addEventListener("click", () => {
                
                activePads.forEach(p => p.style.zIndex = "0");
                pad.style.zIndex = "1";

                const cardContent = card.querySelector(".card-content");
                cardContent.innerHTML = `
                    <button class="back-button">Back</button>
                    <div class="card-item img">
                        <img src="${item.img}" alt="${item.h1}" />
                    </div>
                    <div class="card-item copy">
                        <h1>${item.h1}</h1>
                        <p>${item.copy}</p>
                    </div>
                    <div class="card-item copy link">
                        <a href="${item.linkSrc}">${item.linkLabel}</a>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                `;

                gsap.to(pad, {
                    scale: 1.2,  
                    duration: 0.3,
                    onComplete: () => {
                        gsap.to(cardContent, {
                            opacity: 1,
                            pointerEvents: "all",
                            duration: 0.075,
                        });
                        gsap.fromTo(cardContent.querySelectorAll(".card-item"), {
                            y: 100,
                            rotation: () => gsap.utils.random(-30, 30),
                            opacity: 0,
                        }, {
                            y: 0,
                            rotation: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "elastic.out",
                            stagger: 0.1,
                        });
                    },
                });

                
                cardContent.querySelector(".back-button").addEventListener("click", () => {
                    gsap.to(cardContent, {
                        opacity: 0,
                        pointerEvents: "none",
                        duration: 0.2,
                        onComplete: () => {
                            gsap.to(pad, {
                                scale: 1,
                                duration: 0.3,
                                onComplete: () => {
                                    pad.style.zIndex = "0";
                                    cardContent.style.opacity = "0";
                                    cardContent.style.pointerEvents = "none";
                                    gsap.set(cardContent.querySelectorAll(".card-item"), {
                                        clearProps: "all",
                                    });
                                },
                            });
                        },
                    });
                });
            });
        });
    };

    const container = document.querySelector(".container");

    const calendarWrapper = document.createElement("div");
    calendarWrapper.classList.add("calendar");
    container.appendChild(calendarWrapper);

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const currentYear = new Date().getFullYear();

    data.forEach((monthData) => {
        const month = Object.keys(monthData)[0];
        const items = monthData[month];
        const monthIndex = new Date(Date.parse(month +" 1, "+ currentYear)).getMonth();
        const days = [...Array(daysInMonth(monthIndex + 1, currentYear)).keys()].map(i => i + 1);

        const card = document.createElement("div");
        card.classList.add("card");

        
        card.style.backgroundImage = `url('assets/${month.toLowerCase()}.jpg')`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.style.backgroundRepeat = 'no-repeat';
        card.style.position = 'relative'; 

        const cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = `<p>${month}</p>`;
        card.appendChild(cardTitle);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        card.appendChild(cardContent);

        generatePads(card, items, days);

        calendarWrapper.appendChild(card);
    });
});
