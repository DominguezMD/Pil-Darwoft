/// <reference types="cypress" />

describe("Test de SERVICIOS", () => {
    it("Verificar servicio de Imagen de vidrio templado", () => {
      cy.request(
        "GET",
        "https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/70x110/7004756.jpg",
      ).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(200);
        cy.log("El test de servicio pasó correctamente")
      });
    });
});