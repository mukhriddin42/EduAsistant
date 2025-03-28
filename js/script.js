let leftSidebarBtn = document.querySelector(".sidebar-btn-sidebar");


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






let title = document.querySelector(".title");
let chatContainer = document.querySelector(".chat-container");
let textarea = document.getElementById("userQuestion");
let mainChattingSection = document.querySelector(".main-chatting-section");
let sendBtn = document.getElementById("send-btn");

// function toSkipScroll() {
    
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
    
// }

function thinkingAnimate(){
    let thinkingAnim = document.createElement("div");
    thinkingAnim.id = "thinkingAnim";
    thinkingAnim.className = "loader";

    let thinkingMessage = document.createElement("p")
    // thinkingMessage.textContent = "O'ylayapman";

    thinkingAnim.appendChild(thinkingMessage);
    mainChattingSection.appendChild(thinkingAnim);

    setTimeout(() => {
        thinkingAnim.style.display = "none"
    }, 1000);
}

function reportAnswer(){
    let answer = document.createElement("div");
    answer.id = "answer";
    answer.className = "answer";

    mainChattingSection.appendChild(answer);

    let answerMessage = document.createElement("p")
    answer.appendChild(answerMessage);

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin accumsan, arcu ac vehicula consectetur, libero nulla suscipit sapien, non gravida elit nulla a est. Curabitur id velit at lectus dictum consequat. Aenean tincidunt, lacus at suscipit feugiat, arcu magna tempus augue, a dictum justo ligula nec metus. Vestibulum interdum ex ut justo aliquet, eget sagittis metus sagittis. Integer volutpat, sapien at pharetra molestie, lectus ligula fermentum augue, ut vestibulum arcu lectus id velit. Duis convallis purus vel dolor hendrerit, et elementum urna porttitor. Sed venenatis erat nec libero pellentesque, nec interdum justo auctor. Aenean dignissim, arcu nec facilisis pharetra, orci mauris eleifend turpis, sit amet euismod magna ex et lectus."

    let i = 0;
    function type() {
        if (i < text.length) {
            answerMessage.textContent = text.substring(0, i+1);
            i++;
            setTimeout(type, 0)
        }
    }
    // type();
    answerMessage.textContent = text;

    mainChattingSection.scrollTop = mainChattingSection.scrollHeight
}

function sendQuestion() {

    if (textarea.value.trim() === "") return;
    title.style.display = "none";
    chatContainer.style.top = "87%";

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

    thinkingAnimate()

    setTimeout(() => {
        reportAnswer();
    }, 2000);
    
    mainChattingSection.scrollTop = -300;
}

textarea.addEventListener("keypress", function(event) {
    if(event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendQuestion();
    }
})