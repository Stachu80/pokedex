import { initialState, pokeDexReducer } from './pokedex.reducer';

describe('Pokedex Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = pokeDexReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
