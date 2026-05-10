import { goTo } from "../../router";

export function initWelcomePage() {
  const welcomePageRootEl = document.createElement("div");
  welcomePageRootEl.innerHTML = `
    <h2>Esto es welcome</h2>
    <button>JUGAR</button>
    `;

  welcomePageRootEl.querySelector("button")?.addEventListener("click", () => {
    console.log("se clicko el boton jugar");
    // aca cambiar de pagina
    goTo("/play");
  });

  return welcomePageRootEl;
}
