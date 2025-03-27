let leftSidebarBtn = document.querySelector(".sidebar-btn-sidebar");

console.log(leftSidebarBtn);

function closeSidebar() {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".sidebar-btn-main").style.display = "block";
    document.getElementById("newChat").style.display = "inline-block";
}

function openSidebar() {
    document.querySelector(".sidebar").style.display = "inline-block";
    document.querySelector(".sidebar-btn-main").style.display = "none";
    document.getElementById("newChat").style.display = "none";
}


let textarea = document.getElementById("userQuestion");
console.log(textarea.ariaValueNow);
let mainChattingSection = document.querySelector(".main-chatting-section");

function sendQuestion() {
    document.querySelector(".title").style.display = "none";
    document.querySelector(".chat-container").style.top = "87%";

    mainChattingSection.style.display = "inline-block";

    let question = document.createElement("div");
    question.id = "question";
    question.className = "question";

    let message = document.createElement("p");
    message.textContent = textarea.value;
    textarea.value = '';

    question.appendChild(message);

    mainChattingSection.appendChild(question);

    question.style.marginLeft = `${690 - question.clientWidth}px`;
}


textarea.addEventListener("keypress", function(event) {
    if(event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendQuestion();
    }
})