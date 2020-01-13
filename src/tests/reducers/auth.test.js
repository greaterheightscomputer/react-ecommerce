import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN_SUCCESS',
        authError: null,
        uid: '123456abc'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should set authErro for login error', () => {
    const action = {
        type: 'LOGIN_ERROR',
        authError: 'Login failed'        
    };
    const state = authReducer({}, action);
    expect(state.authError).toBe('Login failed');
});

test('should set clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'              
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
});

