/// <reference types="cypress" />

class ClaroHomeLocators {
    constructor() {
        //Subtitulos
        this.subTitles = "h2"
    }
}

export default class ClaroHome {
    constructor () {
        this.locators = new ClaroHomeLocators();
    }

    getSubtitles() {
        return cy.get(this.locators.subTitles)
    }
};