describe('is api ready ', () => {
  it('should get respones from https://api.pokemontcg.io/v1/cards',()=>{
    cy.request('https://api.pokemontcg.io/v1/cards');
  })
})
