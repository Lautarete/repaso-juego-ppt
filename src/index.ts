import { initWelcomePage } from "./pages/welcome/welcome";
import { initGamePage } from "./pages/game/game";
import { initGameOverPage } from "./pages/end/end";

import { initRouter } from "./router";

function main() {
  const mainRootEl = document.querySelector(".root");
  initRouter();
  //   mainRootEl?.appendChild(initWelcomePage());
  //   mainRootEl?.appendChild(initGamePage());
  //   mainRootEl?.appendChild(initGameOverPage())
}

main();
