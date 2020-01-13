import { loginSucess, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = '1234abc';
    const action = loginSucess(uid)
    expect(action).toEqual({
        type: 'LOGIN_SUCCESS',
        uid
    });
});

test('should generate login error action object', () => {    
    const action = { type: 'LOGIN_ERROR'};
    expect(action).toEqual({
        type: 'LOGIN_ERROR'
    });
});

test('should generate logout action object', () => {    
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
