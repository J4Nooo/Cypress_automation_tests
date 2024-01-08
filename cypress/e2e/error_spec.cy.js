describe('Logowanie z błędnymi danymi', () => {
  it('Powinien wyświetlić komunikat błędu', () => {
      // Otwarcie strony internetowej z formularzem logowania
      cy.visit('http://127.0.0.1:5500/index.html');

      // Wprowadzenie błędnej nazwy użytkownika i hasła
      cy.get('#username').type('nieprawidlowy_uzytkownik');
      cy.get('#password').type('BledneHaslo123!');

      // Kliknięcie przycisku "Zaloguj się"
      cy.get('button').click();

      // Sprawdzenie, czy pojawił się komunikat błędu
      cy.get('.error-message').should('exist').and('contain.text', 'Nazwa użytkownika nie może być dłuższa niż 20 znaków');
  });
});