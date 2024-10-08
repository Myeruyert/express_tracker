const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { email, name, password, profile_img } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = await sql`INSERT INTO users(email, name, password, profile_img)
      VALUES
      (${email}, ${name}, ${hashedPassword}, ${profile_img});`;
    console.log("data", data);
    res
      .status(201)
      .json({ message: "New user is registered succeessfully", user: data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Client error" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await sql`SELECT * FROM users WHERE email=${email}`;
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      if (!isCheck) {
        res.status(404).json({
          message: "Хэрэглэгчийн и-мэйл эсвэл нууц үг тохирохгүй байна. ",
        });
      } else {
        const token = jwt.sign({ id: user.id }, "JST_TOKEN_PASS@123", {
          expiresIn: "10h",
        });
        res.status(200).json({ message: "Success ", token });
      }
    }
    console.log("data", user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Couldn't signed in" });
  }
};

module.exports = { signUp, signIn };
