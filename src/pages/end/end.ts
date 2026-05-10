import { goTo } from "../../router";
export function initGameOverPage() {
  const gameOverRootEl = document.createElement("div");
  gameOverRootEl.innerHTML = `
    <h2>Game Over</h2>
    <button>Volver al comienzo</button>
    `;

  gameOverRootEl.querySelector("button")?.addEventListener("click", () => {
    console.log("se clicko el boton volver al comienzo");
    // aca cambiar de pagina
    goTo("/welcome");
  });

  return gameOverRootEl;
}
