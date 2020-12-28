describe('Is App ready?', () => {
  context('start app', () => {
    it('open gallery on localhost ', () => {
      cy.visit('http://localhost:4200/gallery')
    })
  })

  context('testy', () => {
    it('toolbar should have description Pokedex', () => {
      cy
        .get('.mat-toolbar > span').should('have.text', "Pokedex")
    })

    it('first card name should be Vespiquen', () => {
      cy
        .get(':nth-child(1) > .mat-grid-tile > .mat-figure > app-pokedex-list-item > .name')
        .should('have.text', "Vespiquen")
    })

    it('open dialog, remove original name, add new name ', () => {
      cy
        .get(':nth-child(3) > .mat-grid-tile > .mat-figure > app-pokedex-list-item > img').click()
        .get('#mat-input-0')
        .type('{selectall}{del}')
        .type('Stachu')
        .get('.cdk-overlay-backdrop').click({force: true})
    })

    it('new name should be visible on small card', () => {
      cy
        .get(':nth-child(3) > .mat-grid-tile > .mat-figure > app-pokedex-list-item > .name')
        .should('contain', 'Stachu')
    })
  })

})
