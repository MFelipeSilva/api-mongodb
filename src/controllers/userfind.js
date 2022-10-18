import User from '../models/userdb.js';
import generatorToken from '../utils/generatorToken.js';

export default {
  async create(req, res) {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({email});

    if(userExists) {
      res.status(400).json("The user already exists");
    }

    try{
      const user = await User.create({
        name,
        email,
        password
      })
      res.status(201).json(user);
    }
    catch (error) {
      res.status(400).json(error);
    }
  },
    async login(req, res) {
      const { email, password } = req.body;
      const user = await User.findOne({email});

      if(!user) {
        res.status(400).json("User no longer exists!");
      }
      if(await user.matchPassword(password)) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generatorToken(user._id)
        });
      } else {
        res.status(400).json("Invalid email or password!");
      };
    }
}