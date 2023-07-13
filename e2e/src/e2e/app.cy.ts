import { getCalendar, getCountry, getHeader, getLogo, getNumResults, getPagination, getResultsContainer, getSearchButton, getTitle } from '../support/app.po';

describe('grow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://wikimedia.org/api/**').as('getArticles');
    cy.wait('@getArticles');
  });

  it('should contain the grow therapy logo', () => {
    getLogo().should('exist');
  });

  it('should display wikipedia title', () => {
    getTitle().contains('Top Wikipedia Articles');
  });

  it('should display the first page of results', () => {
    getResultsContainer().children().should('have.length', 10);
    getResultsContainer().children().first().get('h3').contains('1');
    getResultsContainer().children().last().get('h3').contains('10');
  });

  it('should go to the second page of results', () => {
    getPagination().get('ul').children().eq(2).click();

    getResultsContainer().children().should('have.length', 10);
    getResultsContainer().children().first().get('h3').contains('11');
    getResultsContainer().children().last().get('h3').contains('20');
  });

  it('should go to the last page of results', () => {
    getPagination().get('ul').children().last().prev().prev().click();

    getResultsContainer().children().should('have.length', 10);
    getResultsContainer().children().first().get('h3').contains('91');
    getResultsContainer().children().last().get('h3').contains('100');
  });

  it('should change to only 50 results', () => {
    // Move to the second page first to validate that the page is reset to the first one
    getPagination().get('ul').children().eq(2).click();
    getResultsContainer().children().first().get('h3').contains('11');

    getNumResults().select('50');
    getSearchButton().click();

    // Count the page numbers
    getPagination().get('ul').children().should('have.length', 7);

    // Make sure it went back to page 1 when switching to 50
    getResultsContainer().children().last().get('h3').contains('10');
  });

  it('should switch to United Kingdom', () => {
    getCountry().select('GB');
    getSearchButton().click();

    // Make sure the results container is updated with the new data
    getResultsContainer().children().should('have.length', 10);
    getResultsContainer().children().first().get('h3').contains('1');
    getResultsContainer().children().last().get('h3').contains('10');

    // TODO: this is pretty brittle, needs to be replaced with checking the json response
    // is the one from the GB country code
    getResultsContainer().children().first().get('a').contains('Huw Edwards');
  });

  it('should switch to United Kingdon on June 26, 2023', () => {
    getCountry().select('GB');
    getCalendar().find('#start-date').clear().type('June 26, 2023');

    // Search!!
    getSearchButton().click();

    // Make sure the results container is updated with the new data
    getResultsContainer().children().should('have.length', 10);
    getResultsContainer().children().first().get('h3').contains('1');
    getResultsContainer().children().last().get('h3').contains('10');

    // Second result should be Elton John
    getResultsContainer().children().eq(1).get('a').contains('Elton John');
  });
  

});
