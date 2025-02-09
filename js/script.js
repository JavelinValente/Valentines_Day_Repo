let currentPage = 0;

const pages = [
    {
        title: "Are you my girlfriend?",
        question: "If You're not Omosigho this site isn't for you.",
        buttons: [
            { text: "Yes", nextPage: 1 },
            { text: "No", nextPage: 5 }
        ]
    },
    {
        title: "Sorry for waiting so long to ask",
        question: "But I'm gonna ask now",
        buttons: [
            { text: "Continue", nextPage: 2 },
            { text: "Took too long! Go Away.", nextPage: 6 }
        ]
    },
    {
        title: "I just want to let you know I love you very much :)",
        question: "",
        buttons: [
            { text: "Continue", nextPage: 3 },
        ]
    },
    {
        title: "Will you be my Valentine?",
        question: "",
        buttons: [
            { text: "Yes", nextPage: 4 },
            { text: "No", nextPage: 7 }
        ]
    },
    {
        title: "Yay! You’re my Valentine!",
        question: "I’m so happy you said yes! I can’t wait to celebrate together. 💖",
        images: [
            "images/Barnes_and_Noble.JPG",  // 1st image
            "images/Chicago_Henge.JPG",  // 2nd image
            "images/Morton_Sitting.JPG",  // 3rd image
            "images/Morton_standing.JPG",  // 4th image
            "images/pumpkin_patch.JPG",  // 5th image
            "images/Spiders.JPG"   // 6th image
        ],
        buttons: []
    },
    {
        title: "Sorry, but you need to leave.",
        question: "Maybe get someone else to make you a website.",
        buttons: []
    },
    {
        title: "Sorry baby :/",
        question: "I’ll make sure you know how much you mean to me. 💖",
        buttons: []
    },
    {
        title: "I’ll always adore you!",
        question: "That’s okay, you mean so much to me no matter what! 😊",
        buttons: []
    }
];

function loadPage(pageIndex) {
    const page = pages[pageIndex];
    const content = document.getElementById("content");

    // Clear previous content and set the new content
    content.innerHTML = `
        <h1>${page.title}</h1>
        <p>${page.question}</p>
    `;

    if (page.images) {
        // Only display images on the "Yay! You're my Valentine!" page
        page.images.forEach(image => {
            content.innerHTML += `<img src="${image}" alt="Valentine Image" class="page-image">`;
        });
    }

    page.buttons.forEach(button => {
        content.innerHTML += `
            <button class="button" onclick="nextPage(${button.nextPage})">${button.text}</button>
        `;
    });
}

function nextPage(nextPageIndex) {
    currentPage = nextPageIndex;
    loadPage(currentPage);
}

// Initialize the first page
loadPage(currentPage);
