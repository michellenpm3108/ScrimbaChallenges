import "./styles.css";

let myEmojis = ["🌵", "🌝", "🌿", "🍉"];

let emojiContainer = document.getElementById("emoji-container");
function renderEmoji() {
  for (let i = 0; i < myEmojis.length; i++) {
    let emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}
renderEmoji();
const emojiInput = document.getElementById("emojiInput");
const unshiftBtn = document.getElementById("unshift-Btn");
unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    emojiContainer.innerHTML = "";
    renderEmoji();
  }
});

const pushBtn = document.getElementById("push-Btn");
pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiContainer.innerHTML = "";
    emojiInput.value = "";
    renderEmoji();
  }
});

const popBtn = document.getElementById("pop-Btn");
popBtn.addEventListener("click", function () {
  myEmojis.pop();
  emojiContainer.innerHTML = "";
  renderEmoji();
});

const shiftBtn = document.getElementById("shift-Btn");
shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  emojiContainer.innerHTML = "";
  renderEmoji();
});
