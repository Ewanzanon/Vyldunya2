function connexion() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const utilisateurs = [
    "LoicBed3",
    "MathieuScr1",
    "CharlieZan0",
    "RobinLah4",
    "NoaVin0"
  ];

  if (!utilisateurs.includes(username)) {
    message.textContent = "utilisateur inconnu";
    return;
  }

  switch (password) {
    case "Rag4nus":
      afficherPagePersonnage({
        classe: "rag-theme",
        titre: "Bienvenue Rag Anus le Nain Noir",
        image: "rag.png",
        fiche: "fiche_rag.pdf",
        infos: "Ton seul et meilleur ami est un robot appelé <strong>MRD2</strong>, il maîtrise l’air et il a un bouton d’arrêt d’urgence sous une plaque dans son dos."
      });
      return;

    case "GenT1":
      afficherPagePersonnage({
        classe: "genty-theme",
        titre: "Bienvenue Genty Presley l'elfe bleu",
        image: "genty.png",
        fiche: "fiche_genty.pdf",
        infos: "Il n'a que <strong>8 écus</strong> mais sa mère lui envoie <strong>30 écus</strong> dès qu'il n'en a plus car elle est riche étant la princesse, tu n'as pas d'ami car tu n'en veux pas tu es un solitaire."
      });
      return;

    case "M3RD2":
      afficherPagePersonnage({
        classe: "mrd2-theme",
        titre: "Bienvenue MRD2 le robot",
        image: "mrd2.png",
        fiche: "fiche_mrd2.pdf",
        infos: "Tu ne te souviens pas de ton enfance ton seul et meilleur ami est Rag Anus tu peux lui dire n'importe quel infos sur toi il sait déjà que tu as un bouton d'arrêt d'urgence sous une plaque dans ton dos"
      });
      return;

    case "Tristan2Sucebol":
      afficherPagePersonnage({
        classe: "tristan-theme",
        titre: "Bienvenue Tristan De Sucebol",
        image: "tristan.png",
        fiche: "fiche_tristan.pdf",
        infos: "Tu es un nerd et tes amis aussi tu es au premier rang de la classe pour faire le focul avec le prof (Heureusement que ton prof Albert adore les enfant suce boule comme toi)"
      });
      return;

    case "Ly4Vesperine":
      afficherPagePersonnage({
        classe: "lya-theme",
        titre: "Bienvenue Lya Vesperine",
        image: "lya.png",
        fiche: "fiche_lya.pdf",
        infos: "Tu maîtrises la magie de <strong>l’eau</strong> comme Genty, mais avec une attaque différente : <strong>Lame d’eau</strong>. Tu utilises une ombrelle renforcée comme arme élégante et tu connais beaucoup de secrets sur les élèves de la classe."
      });
      return;

    default:
      message.textContent = "mot de passe inconnu";
  }
}

function afficherPagePersonnage(data) {
  document.body.innerHTML = `
    <div class="character-page ${data.classe}">
      <div class="magic-background"></div>

      <header class="character-header">
        <button class="back-button" onclick="retourAccueil()">Retour</button>
        <h1>${data.titre}</h1>
      </header>

      <section class="character-layout">
        <div class="character-card">
          <img src="${data.image}" class="character-image" alt="Image du personnage">
        </div>

        <div class="sheet-card">
          <iframe src="${data.fiche}" title="Fiche de personnage"></iframe>
        </div>
      </section>

      <section class="info-section">
        <button class="info-button" onclick="toggleInfo()">Infos complémentaires</button>
        <div id="infoText" class="info-text" style="display:none;">
          ${data.infos}
        </div>
      </section>
    </div>
  `;
}

function toggleInfo() {
  const info = document.getElementById("infoText");
  if (!info) return;
  info.style.display = info.style.display === "none" ? "block" : "none";
}

function retourAccueil() {
  location.reload();
}

function ouvrirIntroduction() {
  const modal = document.getElementById("introModal");
  if (modal) {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }
}

function fermerIntroduction() {
  const modal = document.getElementById("introModal");
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}
