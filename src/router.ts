import { initWelcomePage } from "./pages/welcome/welcome";
import { initGamePage } from "./pages/game/game";
import { initGameOverPage } from "./pages/end/end";

type Route = {
  path: RegExp;
  renderPage: () => HTMLElement;
};
const basePath = "/repaso-juego-ppt";
const basePathRegex = /\/repaso-juego-ppt/;
const routes: Route[] = [
  {
    path: /\/welcome/,
    renderPage: () => {
      console.log("rendering /welcome");
      const welcomeSectionEl = document.createElement("section");
      welcomeSectionEl.appendChild(initWelcomePage());
      return welcomeSectionEl;
    },
  },
  {
    path: /\/play/,
    renderPage: () => {
      console.log("rendering /play");
      const gameSection = document.createElement("section");
      gameSection.appendChild(initGamePage());
      return gameSection;
    },
  },
  {
    path: /\/gameover/,
    renderPage: () => {
      console.log("rendering /gameOver");
      const gameOverSection = document.createElement("section");
      gameOverSection.appendChild(initGameOverPage());
      return gameOverSection;
    },
  },
];

function renderPath(path: string): void {
  // renderiza la pagina correspondiente a path que recibe usando routes

  const contentContainerEl = document.querySelector(".main-content__container");
  const route = routes.find((route) => route.path.test(path));
  if (route) {
    console.log("Se encontro el path", route.path);
    contentContainerEl!.innerHTML = "";

    contentContainerEl?.appendChild(route.renderPage());
  } else {
    console.log(`El path ${path} no fue encontrado`);
  }
}

export function goTo(path: string) {
  // cambia la url y usa renderPath() para cambiar la pagina
  if (path.includes(basePath)) {
    window.history.pushState({}, "", path);
  } else {
    window.history.pushState({}, "", basePath + path);
  }
  if (isDeployed()) {
    // quitar el basePath
    const splitedPath = path.split("/");
    path = "/" + splitedPath[splitedPath.length - 1];
  }
  renderPath(path);
}

export function initRouter() {
  // inicia el router con la ruta inicial
  // arreglar el bug
  let initialPath = window.location.pathname;

  if (basePathRegex.test(initialPath)) {
    console.log("se modifica el initalPath");

    initialPath = basePath + "/welcome";
  } else {
    console.log("bug");
  }

  goTo(initialPath);
}

function isDeployed() {
  const deployPath = "github.io";
  // true si estamos en github
  return location.host.includes(deployPath);
}

// si el location host es github quitar el path que se evalua el basePath
// muchas cosas que agrege funcionan mal
// no esta mal que siempre se valla a /welcome
