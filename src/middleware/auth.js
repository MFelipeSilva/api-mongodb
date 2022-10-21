import jwt from 'jsonwebtoken';
import User from '../models/userdb.js';

const protect = async (req, res, next) => {
  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_JWT);

      req.user = await User.findById(decoded.id).select("-password");

      if(decoded.id == req.params.id) {
        next()
      }
      else {
        res.status(401).json("Unauthorized and invalid token!");
      };

    } catch (error) {
      res.status(401).json("Your token was not authorized!");
    };
    
  };
}

export default protect;