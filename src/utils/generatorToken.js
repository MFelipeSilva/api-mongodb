import jwt from 'jsonwebtoken';

const generatorToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_JWT, {
    expiresIn: 60
  });
};

export default generatorToken;