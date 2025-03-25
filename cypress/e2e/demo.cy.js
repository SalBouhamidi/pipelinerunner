it('test env file', () => {
  expect(Cypress.env('MARKET')).to.equal('fr');
});
