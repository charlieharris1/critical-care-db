import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for the dropdown', () => {
      const authors = [
        { id: 'someId', firstName: 'firstName', lastName: 'lastName' },
        { id: 'someOtherId', firstName: 'otherFirstName', lastName: 'otherLastName' }
      ];

      const expected = [
        { value: 'someId', text: 'firstName lastName' },
        { value: 'someOtherId', text: 'otherFirstName otherLastName' }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
