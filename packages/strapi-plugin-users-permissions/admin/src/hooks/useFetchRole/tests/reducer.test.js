import reducer from '../reducer';

describe('ADMIN | HOOKS | USEFETCHROLE | reducer', () => {
  describe('DEFAULT_ACTION', () => {
    it('should return the initialState', () => {
      const state = {
        test: true,
      };

      expect(reducer(state, {})).toEqual(state);
    });
  });

  describe('GET_DATA_ERROR', () => {
    it('should set isLoading to false is an error occured', () => {
      const action = {
        type: 'GET_DATA_ERROR',
      };
      const initialState = {
        role: {},
        isLoading: true,
      };
      const expected = {
        role: {},
        isLoading: false,
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('GET_DATA_SUCCEEDED', () => {
    it('should return the state with the data', () => {
      const action = {
        type: 'GET_DATA_SUCCEEDED',
        role: {
          id: 1,
          name: 'Authenticated',
          description: 'This is the Authenticated role',
          permissions: {},
        },
      };
      const initialState = {
        role: {},
        isLoading: true,
      };
      const expected = {
        role: {
          id: 1,
          name: 'Authenticated',
          description: 'This is the Authenticated role',
          permissions: {},
        },
        isLoading: false,
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });
});