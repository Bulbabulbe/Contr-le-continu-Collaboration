/*  ============================================================
    Mini project for Git conflict practice (team of 3)
    ------------------------------------------------------------
    ALL THREE must edit THE SAME LINE below (AUTHOR_NAME)
    on separate branches to provoke merge conflicts.
    ============================================================ */

const PROJECT_NAME = "git-collab-mini";

// ★ À MODIFIER PAR LES TROIS (VALEUR DIFFÉRENTE OBLIGATOIRE)
const AUTHOR_NAME = "Raphael";

function buildBanner() {
  return `[${PROJECT_NAME}] by ${AUTHOR_NAME}`;
}

function main() {
  console.log(buildBanner());
}

main();
