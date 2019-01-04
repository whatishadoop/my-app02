import jwt from 'jsonwebtoken';

export const getAuthorization = (options) => {
  console.log('getAuthorization');
  let obj = {
    code: 200,
    mes: 'success',
    data: {
      token: jwt.sign({ name: 'root' }, 'abcd', {
        expiresIn: 100
      })
    }
  };
  return obj;
};

export const login = (options) => {
  console.log('login');
  let obj = {
    code: 200,
    mes: 'success',
    data: {
      token: jwt.sign({ name: 'root' }, 'abcd', {
        expiresIn: 100
      })
    }
  };
  return obj;
};
