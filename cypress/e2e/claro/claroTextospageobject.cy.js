/// <reference types="cypress" />
import ClaroHome from "../../Page/claro/claroHome.js";
const claroHome = new ClaroHome();

describe("test sobre la pagina de TIENDA CLARO, usando Page Object", () => {
  it("verificar boton de ver catalogo completo", () => {
    cy.visit("https://tienda.claro.com.ar/");

    claroHome
      .getSubtitles()
      .eq(0)
      .should("contain.text", "Productos destacados");
    claroHome.getSubtitles().eq(1).should("contain.text", "Destacados Tienda");
    claroHome
      .getSubtitles()
      .eq(2)
      .should("contain.text", "Celulares y accesorios de última tecnología");
    cy.log("El titulo productos destacados paso correctamente");
  });
});
