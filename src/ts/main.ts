import { bundledHeaderFunctions } from "./header";

import { loadLandingPage } from "./landingpage";

window.onload = function () {
    loadLandingPage();
    bundledHeaderFunctions();   
}
