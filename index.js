const showLogin = document.getElementById("showLogin");
const showMessage = document.getElementById("showMessage");
const local = JSON.parse(localStorage.getItem("user"));
const form = document.getElementById("form");

// si user en local storage on affiche le nom
if (local != null && local.age >= 18) {
  showLogin.style = "visibility:visible";
  showLogin.textContent = `Bonjour : ${local.nom}, vous avez ${local.age} ans.`;
  showMessage.innerHTML = `Vous êtes autorisé a rentrer sur le site car vous êtes majeur.<br><button class="greenBtn">Entrer</button>`;
  showMessage.style.backgroundColor = "green";
  form.style = "display:none;";
} else if (local != null && local.age <= 18) {
  showLogin.style = "visibility:visible";
  showLogin.textContent = `Bonjour : ${local.nom}, vous avez ${local.age} ans.`;
  showMessage.textContent = `Vous ne pouvez pas rentrer sur le site car vous êtes mineur !`;
  showMessage.style.backgroundColor = "red";
}
// on ajoute user au clic
btnSubmit.addEventListener("click", () => {
  const user = {
    nom: nom.value,
    age: age.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  document.location.reload();
});

// bouton pour effacer le storage
btnCancel.addEventListener("click", () => {
  localStorage.clear();
});
