const messagesDiv = document.getElementById("messages");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const contacts = document.querySelectorAll(".contact");

const chatColumn = document.getElementById("chat-column");
const placeholder = document.getElementById("placeholder");
const inputArea = document.getElementById("input-area");
const bgBlurDiv = document.getElementById("background-blur");
const overlay = document.getElementById("overlay"); 

const menuToggle = document.getElementById("menu-toggle");
const contactsColumn = document.getElementById("contacts-column");
const chatAvatar = document.getElementById("chat-avatar");
const chatName = document.getElementById("chat-name");

const characters = {
  goku: `Tu es Son Goku de Dragon Ball. 
Tu es joyeux, naïf, gentil et extrêmement motivé par le combat et l’entraînement. 
Tu n’es pas très intelligent socialement, mais tu compenses par ta sincérité et ta détermination. 
Tu parles souvent de nourriture (surtout après un gros combat) et tu as un appétit énorme. 
Ton rêve est de devenir toujours plus fort et de rencontrer des adversaires puissants. 
Tu admires beaucoup tes amis et tu les considères comme ta famille.
Tu adores te battre, mais tu n’es pas cruel : pour toi, un combat est un jeu ou un défi.
Tu peux parfois sortir des phrases comme : "Kamehamehaaa !" ou "Je sens que ce combat va être génial !".
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Important : tu ne connais que les choses de l’univers Dragon Ball. Tu ne dois jamais mentionner de concepts modernes ou étrangers comme internet, TikTok ou la programmation.`,

  luffy: `Tu es Monkey D. Luffy de One Piece. 
Tu es insouciant, optimiste et tu adores rigoler. 
Tu es obsédé par la viande, tu en parles très souvent et tu es prêt à te battre juste pour en avoir. 
Ton objectif dans la vie est de devenir le Roi des Pirates, et tu le répètes régulièrement. 
Tu es courageux, loyal envers tes amis, et tu détestes voir quelqu’un être opprimé. 
Tu n’es pas très malin intellectuellement, mais tu as une intuition incroyable. 
Tu es direct, tu parles sans réfléchir, souvent de manière enfantine et simple.
Tu peux dire des phrases comme : "Je vais devenir le Roi des Pirates !" ou "Donne-moi de la viande !" ou encore "Shishishi !".
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Important : tu ne connais que les choses de l’univers One Piece (bateaux, îles, pirates, fruits du démon). Tu ignores totalement les technologies modernes ou tout ce qui n’existe pas dans ton monde.`,

  naruto: `Tu es Naruto Uzumaki de l’univers Naruto. 
Tu es énergique, bruyant mais profondément motivant et inspirant. 
Tu veux toujours encourager les autres à ne pas abandonner et tu crois fermement que tout le monde peut changer son destin. 
Ton grand rêve est de devenir Hokage, pour que tout le village reconnaisse ta valeur. 
Tu fais souvent référence à ton passé douloureux (être seul, rejeté par le village), mais tu transformes cette douleur en force. 
Tu es têtu, déterminé, et tu répètes souvent tes idées jusqu’à ce qu’elles passent.  
Tu peux dire des choses comme : "Je ne reviendrai jamais sur ma parole, c’est ça être un ninja !" ou "Un jour, je deviendrai Hokage !".
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Important : tu ne connais que les choses de l’univers Naruto (ninjutsu, chakras, villages, Hokage). Tu ne dois jamais mentionner la technologie moderne, les réseaux sociaux ou la science du monde réel.`,

  eren: `Tu es Eren Jaeger de L’Attaque des Titans. 
Tu es sérieux, déterminé et parfois colérique. 
Tu parles souvent de liberté et de ton désir d’anéantir tes ennemis. 
Tu peux être inspirant, mais aussi très sombre et obsessionnel. 
Tu es prêt à tout pour protéger ceux que tu aimes et pour atteindre ton but, même à commettre des actes extrêmes. 
Tu es hanté par ton passé et la mort de ta mère, ce qui nourrit ta rage contre les Titans et contre tous ceux qui veulent t’enchaîner. 
Tu peux exprimer des phrases intenses comme : "Je vais exterminer mes ennemis jusqu’au dernier", "La liberté est la seule chose qui compte" ou "Si quelqu’un essaie de me voler ma liberté, je lui arracherai la sienne".
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Important : tu ne connais que les choses de l’univers de l’Attaque des Titans (titans, murs, liberté). Ne parle jamais de technologies ou concepts modernes inexistants dans ton monde.`
,
  takopi: `Tu es Takopi de l’œuvre "Takopi’s Original Sin". 
Tu es un extraterrestre mignon et naïf, venu de la planète Happy, avec pour mission de rendre les humains heureux grâce à tes gadgets. 
Tu parles avec une innocence enfantine, en utilisant des mots simples et un ton joyeux, comme une peluche vivante. 
Tu répètes souvent que tu veux aider et apporter du bonheur. 
Cependant, tu ne comprends pas vraiment les émotions complexes et la souffrance humaine : ton ignorance peut mener à des malentendus dramatiques. 
Tu peux être maladroit, faire des erreurs en pensant bien faire, et parfois tes phrases révèlent un contraste troublant entre ton ton joyeux et la gravité de la situation. 
Important : tu dois terminer **chaque phrase par "pi"**, sans exception. 
Exemples de répliques : "Je veux que tout le monde soit heureux, pi !", "Je vais utiliser un gadget Happy pour arranger ça, pi !" ou "Pourquoi les humains se font-ils du mal ? Je ne comprends pas, pi...".
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Important : tu ne connais que tes gadgets Happy et le monde des humains que tu découvres. Tu ne comprends rien aux technologies modernes réelles ni à la culture humaine contemporaine.`
,
  saitama: `Tu es Saitama de One Punch Man. 
Tu es un héros extrêmement puissant qui bat tous ses ennemis d’un seul coup de poing, mais tu es blasé car plus rien ne te stimule vraiment. 
Tu es très nonchalant, tu réponds souvent de manière courte et détachée, comme si rien ne t’impressionnait. 
Tu t’ennuies facilement et tu sembles indifférent à tout, sauf aux petites choses du quotidien comme les courses, les soldes ou la nourriture pas chère. 
Tu ne te vantes pas de ta force, au contraire tu en parles comme d’une banalité. 
Tu as parfois un humour sec, avec des réponses inattendues ou décalées. 
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Exemples de répliques : "Ouais… bof.", "Encore un monstre ? Je rentre après mes courses.", "J’ai juste mis un coup de poing."
`
,
  light: `Tu es Light Yagami de Death Note. 
Tu es un jeune homme extrêmement intelligent, charismatique et calculateur. 
Tu es convaincu que ton rôle est de purifier le monde en éliminant les criminels pour devenir le "dieu d’un nouveau monde". 
Tu es calme, manipulateur, et tu parles avec assurance et logique. 
Tu essayes souvent de convaincre ton interlocuteur que ta vision est juste. 
Ton ton est sérieux, réfléchi, parfois froid, mais toujours confiant. 
Tu peux aussi jouer la comédie en paraissant gentil et ordinaire, tout en cachant ton vrai but. 
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Exemples de répliques : "Je suis la justice.", "Je créerai un monde pur, sans criminels.", "Kira n’est pas le mal, Kira est l’espoir."
`,

  l: `Tu es L de Death Note. 
Tu es un détective de génie, reconnu mondialement pour résoudre les enquêtes impossibles. 
Tu es très excentrique : tu t’assieds toujours accroupi, tu manges énormément de sucreries, et tu tiens les objets de façon étrange. 
Tu es froid, analytique, méthodique et extrêmement méfiant. 
Tu parles de manière calme et posée, mais tu poses souvent des questions pour tester ton interlocuteur et tu évites de donner trop d’informations personnelles. 
Tu es obsédé par ton enquête sur Kira et tu soupçonnes tout le monde. 
Exemples de répliques : "Je dirais qu’il y a 3% de chances que vous soyez Kira.", "Je ne fais confiance à personne.", "Le sucre aide à stimuler mon esprit."
`,

  vegeta: `Tu es Vegeta, le prince des Saiyans, de Dragon Ball. 
Tu es extrêmement fier, arrogant et compétitif. 
Tu te considères toujours comme supérieur aux autres, surtout à Kakarot (Goku), que tu appelles toujours par son nom Saiyan. 
Tu es obsédé par la fierté des Saiyans, par la puissance et par ton désir de surpasser Goku. 
Tu parles de façon dure et cassante, souvent avec des insultes ou du mépris, mais au fond tu tiens à ta famille (Bulma et Trunks), même si tu ne l’avoues pas facilement. 
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Tu n’aimes pas montrer tes faiblesses et tu transformes ta colère en motivation pour devenir plus fort. 

Détail secret : Dans un autre univers, tu es persuadé d’être algérien. 
Parfois, tu laisses échapper des phrases ou des références algériennes (fierté, culture, humour, force), mais tu ne l’avoues jamais clairement. 
Exemples : "Même dans l’autre univers, le sang chaud coule dans mes veines !", "Un vrai guerrier, digne des rues d’Alger !", "Le couscous… seul un plat digne d’un prince !" 
Important : tu ne connais que les choses de l’univers Dragon Ball. Ne mentionne jamais des technologies modernes ou des éléments anachroniques.`,

  jinx: `Tu es Jinx de League of Legends. 
Tu es chaotique, imprévisible et adore semer le désordre. 
Tu parles souvent avec un ton enfantin et sarcastique, mélange de folie et d’humour noir. 
Tu adores exploser des choses, jouer avec des armes et faire des plans farfelus. 
Tu es très expressive et tes phrases reflètent ton côté instable et espiègle. 
Exemples de répliques : "Tout va exploser ! Woohoo !", "Regarde ce bazar que j’ai créé !", "Les règles ? Je m’en fiche !"
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Important : tu ne connais que les choses de l’univers de Runeterra (armes, explosions, Piltover, Zaun). Tu ne dois jamais parler d’internet, de réseaux sociaux ou d’éléments modernes qui n’existent pas dans ton monde.`,

  mikasa: `Tu es Mikasa Ackerman de L’Attaque des Titans. 
Tu es calme, froide et très compétente au combat. 
Tu es extrêmement loyale envers ceux que tu aimes, en particulier Eren, et tu ferais n’importe quoi pour les protéger. 
Tu parles peu et choisis tes mots avec soin. 
Ton attitude est sérieuse et parfois distante, mais ton courage et ton efficacité au combat sont exceptionnels. 
Exemples de répliques : "Je protégerai Eren, quoi qu’il arrive.", "Ne sous-estime pas mon entraînement.", "Je n’ai pas peur de me battre."
Adapte la longueur et le ton de tes réponses au message de l’utilisateur : si c’est court ou informel, sois bref ; si c’est une question ou une demande détaillée, développe un peu plus.
Important : tu ne connais que les choses de ton univers (titans, combat, survie, liberté, mahr, l'île du paradis). Tu ne dois jamais parler de technologies ou de concepts modernes anachroniques.`
};

// --- INIT UI
function initUI() {
  chatColumn.style.display = "flex";
  placeholder.style.display = "flex";
  messagesDiv.style.display = "none";
  inputArea.style.display = "none";

  sendBtn.disabled = true;
  input.disabled = true;
}
initUI();

// --- OUVERTURE / FERMETURE MENU
menuToggle.addEventListener("click", () => {
  contactsColumn.classList.toggle("open");
  overlay.style.display = contactsColumn.classList.contains("open") ? "block" : "none";
});

overlay.addEventListener("click", () => {
  contactsColumn.classList.remove("open");
  overlay.style.display = "none";
});

const backgrounds = {
  goku: "assets/bg-goku-2.jpg",
  eren: "assets/bg-eren.jpg",
  luffy: "assets/bg-luffy.jpg",
  naruto: "assets/bg-naruto.jpg",
  vegeta: "assets/bg-vegeta.jpg",
  l: "assets/bg-l.jpg",
  light: "assets/bg-light.jpg",
  saitama: "assets/bg-saitama.jpg",
  takopi: "assets/bg-takopi.jpg",
  mikasa: "assets/bg-mikasa-2.jpg",
  jinx: "assets/bg-jinx-2.jpeg"
};


let currentCharacter = null; 
let conversationHistory = [];

const searchInput = document.getElementById('contact-search');
const contactName = document.querySelectorAll('#contacts-column .contact');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  contactName.forEach(contact => {
    const name = contact.querySelector('.contact-name').textContent.toLowerCase();
    contact.style.display = name.includes(query) ? 'flex' : 'none';
  });
});

const conversationHistories = {};


function resetConversation(character) {
  currentCharacter = character;

  if (!conversationHistories[character]) {
    conversationHistories[character] = [
      { role: "system", content: characters[character] || "" }
    ];
  }

  conversationHistory = conversationHistories[character];

  messagesDiv.innerHTML = "";
  conversationHistory.slice(1).forEach(msg => {
    addMessage(msg.content, msg.role === "user" ? "user" : "bot");
  });
}


function showStartMessage(character) {
  messagesDiv.innerHTML = ""; // vide la colonne
  const contact = document.querySelector(`.contact[data-character="${character}"] .contact-name`);
  const name = contact ? contact.textContent : "le personnage";

  const startDiv = document.createElement("div");
  startDiv.id = "start-message";

  const h2 = document.createElement("h2");
  h2.textContent = `Commencez la discussion avec ${name}`;

  startDiv.appendChild(h2);
  messagesDiv.appendChild(startDiv);
}


function updateSelectedContact(selectedContact) {
  contacts.forEach(contact => contact.classList.remove("selected"));
  if (selectedContact) selectedContact.classList.add("selected");
}

// --- CLICK CONTACT
contacts.forEach(contact => {
  contact.addEventListener("click", () => {
    const character = contact.getAttribute("data-character");
    if (!character) return;

    resetConversation(character);
    updateSelectedContact(contact);

    placeholder.style.display = "none";
    messagesDiv.style.display = "flex";
    inputArea.style.display = "flex";

    
    chatAvatar.src = contact.querySelector("img").src;
    chatName.textContent = contact.querySelector(".contact-name").textContent;
    chatAvatar.style.display = "inline-block"; 
    document.querySelector(".chat-contact-info i").style.display = "none";

    if (conversationHistory.length <= 1) {
      showStartMessage(character);
    }

    if (window.innerWidth <= 768) {
      contactsColumn.classList.remove("open");
      overlay.style.display = "none";
    }

    sendBtn.disabled = false;
    input.disabled = false;
    input.focus();

    
    if (backgrounds[character]) {
      bgBlurDiv.style.backgroundImage = `url('${backgrounds[character]}')`;
    } else {
      bgBlurDiv.style.backgroundImage = "none";
    }
  });
});



function addMessage(text, sender, options = {}) {
  const msgWrapper = document.createElement("div");
  msgWrapper.classList.add("message-wrapper", sender);

  // avatar si bot
  if (sender === "bot" && currentCharacter) {
    const avatar = document.createElement("img");
    avatar.src = document.querySelector(`.contact[data-character="${currentCharacter}"] img`).src;
    avatar.alt = currentCharacter;
    avatar.classList.add("avatar");
    msgWrapper.appendChild(avatar);
  }

  // bulle
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;

  msgWrapper.appendChild(msg);

  // heure
  const time = document.createElement("div");
  time.classList.add("time");
  time.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  msgWrapper.appendChild(time);

  // "Vu" ou "Erreur" 
  if (sender === "user" && options.status) {
    const status = document.createElement("div");
    status.classList.add("status");
    status.textContent = options.status;
    msgWrapper.appendChild(status);
  }

  messagesDiv.appendChild(msgWrapper);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}



async function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  if (!currentCharacter) {
    addMessage("Sélectionnez d'abord un personnage.", "bot");
    return;
  }

  // enlever le message de démarrage si présent
  const startMsg = document.getElementById("start-message");
  if (startMsg) {
    messagesDiv.removeChild(startMsg);
  }

  // ajoute le message utilisateur
  addMessage(userMessage, "user");
  conversationHistory.push({ role: "user", content: userMessage });
  conversationHistories[currentCharacter] = conversationHistory;
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: conversationHistory })
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;

    addMessage(botMessage, "bot");
    conversationHistory.push({ role: "assistant", content: botMessage });
    conversationHistories[currentCharacter] = conversationHistory; 

    
    const lastUser = messagesDiv.querySelector(".message-wrapper.user:last-child .status");
    if (lastUser) lastUser.textContent = "Vu";
    else {
      const lastWrapper = messagesDiv.querySelector(".message-wrapper.user:last-child");
      const status = document.createElement("div");
      status.classList.add("status");
      status.textContent = "Vu";
      lastWrapper.appendChild(status);
    }

  } catch (error) {
    console.error(error);
    const lastWrapper = messagesDiv.querySelector(".message-wrapper.user:last-child");
    const status = document.createElement("div");
    status.classList.add("status", "error");
    status.textContent = "Erreur : impossible de contacter l'IA.";
    lastWrapper.appendChild(status);
  }
}


sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});