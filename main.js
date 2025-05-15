function buatCardPS3() {
    return `
    <div class="flex flex-col items-center border rounded-md border-gray-200 shadow-md">
        <img src="./assets/Ps 3.jpeg" class="w-[50%] rounded-t-md">
        <div class="pl-2">
            <h1 class="font-bold">Playstation 3</h1>
            <p class="font-medium">Spesifikasi:</p>
            <details>
                <summary>Games</summary>
                <p>Efootball 2025</p>
                <p>Cyber Punk</p>
            </details>
            <p class="text-gray-600">Tv 55 Inch, Netflix, Games dan Karaoke.</p>
            <div>
                <button class="border border-green-400 rounded-md px-3 py-1 bg-green-400 text-white mb-2 mt-2">Pesan</button>
            </div>
        </div>
    </div>`;
}

function buatCardPS5() {
    return `
    <div class="flex flex-col items-center border rounded-md border-gray-200 shadow-md">
        <img src="./assets/Ps 5.jpeg" class="w-[64%] rounded-t-md">
        <div class="pl-2">
            <h1 class="font-bold">Playstation 5</h1>
            <p class="font-medium">Spesifikasi:</p>
            <details>
                <summary>Games</summary>
                <p>Efootball 2025</p>
                <p>Cyber Punk</p>
            </details>
            <p class="text-gray-600">Tv 55 Inch, Netflix, Games dan Karaoke.</p>
            <div>
                <button class="border border-green-400 rounded-md px-3 py-1 bg-green-400 text-white mb-2 mt-2">Pesan</button>
            </div>
        </div>
    </div>`;
}

function buatCardPS4() {
    return `
    <div class="flex flex-col items-center border rounded-md border-gray-200 shadow-md">
        <img src="./assets/Ps 4.jpeg" class="w-[64%] rounded-t-md">
        <div class="pl-2">
            <h1 class="font-bold">Playstation 4</h1>
            <p class="font-medium">Spesifikasi:</p>
            <details>
                <summary>Games</summary>
                <p>Efootball 2025</p>
                <p>Cyber Punk</p>
            </details>
            <p class="text-gray-600">Tv 55 Inch, Netflix, Games dan Karaoke.</p>
            <div>
                <button class="border border-green-400 rounded-md px-3 py-1 bg-green-400 text-white mb-2 mt-2">Pesan</button>
            </div>
        </div>
    </div>`;
}


function updateCard() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const checkboxes = document.querySelectorAll(".filter-checkbox");
    let adaYangDicek = false;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            adaYangDicek = true;
            if (cb.value === "ps5") {
                for (let i = 0; i < 12; i++) {
                    container.innerHTML += buatCardPS5();
                }
            } else if (cb.value === "ps4") {
                for (let i = 0; i < 12; i++) {
                    container.innerHTML += buatCardPS4();
                }
            } else if (cb.value === "ps3") {
                for (let i = 0; i < 12; i++) {
                    container.innerHTML += buatCardPS3();
                }
            }
        }
    });
    if (!adaYangDicek) {
        const cards = [buatCardPS3, buatCardPS4, buatCardPS5];
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        for (let i = 0; i < 12; i++) {
            container.innerHTML += randomCard();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    checkboxes.forEach(cb => {
        cb.addEventListener("change", updateCard);
    });

    updateCard();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        e.preventDefault();

        if (href && href !== '#') {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});
