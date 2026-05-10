import { goTo } from "../../router";
export function initGamePage() {
  const gameRootEl = document.createElement("div");
  gameRootEl.innerHTML = `
    <h2>Esto es el game</h2>
    <button>TERMINAR</button>
    `;

  gameRootEl.querySelector("button")?.addEventListener("click", () => {
    console.log("se clicko el boton TERMINAR");
    // aca cambiar de pagina
    goTo("/gameover");
  });

  return gameRootEl;
}
