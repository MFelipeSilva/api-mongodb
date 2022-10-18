import jwt from 'jsonwebtoken';

const generatorToken = (id) => {
  jwt.sign({ id }, process.env.SECRET_JWT, {
    expiresIn: '30d'
  });
};

export default generatorToken;