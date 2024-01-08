describe('Logowanie i wylogowywanie', () => {
  it('Poprawne logowanie', () => {
      // Otwarcie strony internetowej z formularzem logowania
      cy.visit('http://127.0.0.1:5500/index.html');

      // Wprowadzenie poprawnej nazwy użytkownika i hasła
      cy.get('#username').type('JanGrucaWSBMerito');
      cy.get('#password').type('Dobrehaslo123!');

      // Kliknięcie przycisku "Zaloguj się"
      cy.get('button').click();

      // Sprawdzenie czy użytkownik jest przekierowany na odpowiednią stronę po zalogowaniu
      cy.url().should('eq', 'http://127.0.0.1:5500/strona_glowna.html');

       // Sprawdzenie, czy nie ma widocznych komunikatów błędu
       cy.get('.error-message').should('not.exist');
  });
});
