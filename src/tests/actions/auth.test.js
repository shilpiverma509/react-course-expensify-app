import {login,logout} from '../../actions/auth';

test('should set login action object',()=>{
    const uid= "anc123"
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })
  });

  test('should set logout action object',()=>{
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    })
  });
 