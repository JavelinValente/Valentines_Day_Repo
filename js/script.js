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
        title: "Do you know how much you mean to me?",
        question: "You are the most important person in my life. So I just have to ask:",
        buttons: [
            { text: "Yes", nextPage: 2 },
            { text: "No", nextPage: 6 }
        ]
    },
    {
        title: "Are you ready for a special question?",
        question: "This one’s been on my mind for a while now. Are you ready?",
        buttons: [
            { text: "Yes", nextPage: 3 },
            { text: "No", nextPage: 7 }
        ]
    },
    {
        title: "Will you be my Valentine?",
        question: "So, here it is. Will you be my Valentine?",
        buttons: [
            { text: "Yes", nextPage: 4 },
            { text: "No", nextPage: 8 }
        ]
    },
    {
        title: "Yay! You’re my Valentine!",
        question: "I’m so happy you said yes! I can’t wait to celebrate together. 💖",
        buttons: []
    },
    {
        title: "Sorry, but you need to leave.",
        question: "Maybe get someone else to make you a website.",
        buttons: []
    },
    {
        title: "Let me show you just how much!",
        question: "I’ll make sure you know how much you mean to me. 💖",
        buttons: []
    },
    {
        title: "Take your time!",
        question: "No rush, I’m here for you. 😊",
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

    content.innerHTML = `
        <h1>${page.title}</h1>
        <p>${page.question}</p>
    `;

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
