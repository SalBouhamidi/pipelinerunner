it('test infromation file', () => {
  const filename = Cypress.env('filename');
  cy.readFile(`uploads/${filename}`).then((uploadedJson) => {
    expect(uploadedJson.MARKET).to.equal('fr');
  });
});
