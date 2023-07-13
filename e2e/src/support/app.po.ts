export const getRoot = () => cy.get('#app-root');

export const getNavBar = () => getRoot().get('*[class^="_navigation"]');
export const getLogo = () => getNavBar().get('*[class^="_logo"]');

export const getHeader = () => getRoot().get('*[class^="_header"]');
export const getTitle = () => getHeader().get('h1');

export const getMainContainer = () => cy.get('[data-cy="main-container"]');

export const getFilters = () => cy.get('[data-cy="filters"]');
export const getSearchButton = () => cy.get('[data-cy="search-button"]');
export const getNumResults = () => cy.get('[data-cy="number-of-results"]');
export const getCountry = () => cy.get('[data-cy="country"]');
export const getCalendar = () => cy.get('[data-cy="calendar"]');

export const getResults = () => cy.get('[data-cy="results"]');
export const getResultsContainer = () => getResults().get('[data-cy="results-container"]');

export const getPagination = () => cy.get('[data-cy="pagination"]');