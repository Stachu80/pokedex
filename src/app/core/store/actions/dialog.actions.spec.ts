import * as fromDialog from './dialog.actions';

describe('loadDialogs', () => {
  it('should return an action', () => {
    expect(fromDialog.loadDialogs().type).toBe('[Dialog] Load Dialogs');
  });
});
