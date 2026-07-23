// ---- Edit these two arrays to change the conversation or the cafe list ----

const messages = [
  { who: "me",   text: "awesome!" },
  { who: "me",   text: "now tell meee! 👀" },
  { who: "me",   text: "what are the best cafes to go to?" },
  { who: "them", text: "just copy my map :)" },
  { who: "them", text: "click here ☁️", isCta: true },
  { who: "me",   text: "these are sooo gooood 😭" },
  { who: "me",   text: "i need to visit them nowww" },
  { who: "them", text: "do send me your photos when you go! can't wait to hear what you have to say about my favourite cafes 🥰" },
];

const cafes = [
  {
    tag: "patisserie",
    name: "Cava - Cafe & Patisserie",
    desc: "Ballygunge favourite for pastries and a quiet coffee break.",
    query: "Cava Cafe Patisserie Ballygunge Kolkata",
    img: "assets/cafes/cava.jpg",
  },
  {
    tag: "vintage vibe",
    name: "Roastery Coffee House",
    desc: "Gariahat, in-house roasted beans, cold brew cascara, leafy outdoor seating.",
    query: "Roastery Coffee House Gariahat Kolkata",
    img: "assets/cafes/roastery.jpg",
  },
  {
    tag: "european soul food",
    name: "Marbella's Cafe",
    desc: "Purna Das Road, cozy three-zone seating, great for slow evenings.",
    query: "Marbella's Cafe Purna Das Road Kolkata",
    img: "assets/cafes/marbellas.jpg",
  },
  {
    tag: "underground gem",
    name: "Cafe Mezzuna",
    desc: "Basement, bookstore-cozy, at Forum Elgin Road.",
    query: "Cafe Mezzuna Forum Elgin Road Kolkata",
    img: "assets/cafes/mezzuna.jpg",
  },
  {
    tag: "century-old building",
    name: "The Country House Cafe",
    desc: "Allenby Road, near Forum Mall — high ceilings, natural light, English breakfast.",
    query: "The Country House Cafe Allenby Road Kolkata",
    img: "assets/cafes/countryhouse.jpg",
  },
  {
    tag: "absolute gem",
    name: "Piccadilly Square",
    desc: "Vintage lamps, dessert-heavy menu — waffles, crepes, cheesecakes.",
    query: "Piccadilly Square Cafe Kolkata",
    img: "assets/cafes/piccadilly.jpg",
  },
];

// ---- Playback logic (no need to edit below this line) ----

const thread = document.getElementById("thread");
const sheetOverlay = document.getElementById("sheetOverlay");
const cardList = document.getElementById("cardList");

function renderCards() {
  cafes.forEach((c) => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(c.query);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <img class="thumb" src="${c.img}" alt="${c.name}">
      <div class="info">
        <span class="tag">${c.tag}</span>
        <div class="name">${c.name}</div>
        <div class="desc">${c.desc}</div>
      </div>
      <div class="go">open →</div>
    `;
    cardList.appendChild(a);
  });
}

function openSheet() { sheetOverlay.classList.add("open"); }
function closeSheet() { sheetOverlay.classList.remove("open"); }

function appendMessage(msg) {
  const row = document.createElement("div");
  row.className = "row " + msg.who;

  if (msg.isCta) {
    const btn = document.createElement("button");
    btn.className = "cta-bubble";
    btn.textContent = msg.text;
    btn.addEventListener("click", openSheet);
    row.appendChild(btn);
  } else {
    const bubble = document.createElement("div");
    bubble.className = "bubble " + msg.who;
    bubble.textContent = msg.text;
    row.appendChild(bubble);
  }

  thread.appendChild(row);
  thread.scrollTop = thread.scrollHeight;
}

function showTyping() {
  const row = document.createElement("div");
  row.className = "row them";
  row.id = "typingRow";
  row.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
  thread.appendChild(row);
  thread.scrollTop = thread.scrollHeight;
}

function removeTyping() {
  const row = document.getElementById("typingRow");
  if (row) row.remove();
}

function playScript(i = 0) {
  if (i >= messages.length) return;
  const msg = messages[i];

  if (msg.who === "them") {
    showTyping();
    setTimeout(() => {
      removeTyping();
      appendMessage(msg);
      setTimeout(() => playScript(i + 1), 500);
    }, 800);
  } else {
    appendMessage(msg);
    setTimeout(() => playScript(i + 1), 400);
  }
}

document.getElementById("closeSheet").addEventListener("click", closeSheet);
sheetOverlay.addEventListener("click", (e) => {
  if (e.target === sheetOverlay) closeSheet();
});

renderCards();
setTimeout(() => playScript(0), 400);
