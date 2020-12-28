import * as fromPokedex from './pokedex.actions';

describe('loadPokedexs', () => {
  it('should return an action', () => {
    expect(fromPokedex.loadPokedexs().type).toBe('[Pokedex] Load Pokedexs');
  });
});
