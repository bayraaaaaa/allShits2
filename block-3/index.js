import express from "express";

const app = express();

const port = 8000;

const users = [];
app.use(express.json());

app.get("/", (request, response) => {
  response.send({
    data: users,
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  users.map((user) => {
    if (user.username === username && user.password === password) {
      res.send({
        success: true,

        msg: "Ta amjjilttai newterlee",
      });
    } else {
      res.send({
        success: false,

        msg: "Newtreh ner, nuuts ug buruu",
      });
    }
  });
});
app.post("/signup", (request, response) => {
  const { username, age, gender, phoneNumber, address, password, email } =
    request.body;

  const user = {
    username,
    age,
    gender,
    phoneNumber,
    address,
    email,
    password,
  };

  users.push(user);

  response.send({
    success: true,
    msg: "Amjilttai burtguulle goodluck <333",
  });
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
// const array = [5, 7, 3, 1, 9, 6, 12];
// 1
// let sum = 0;
// array.map((e) => {
//   sum += e;
// });
// console.log(sum);
// 2
// array.map((e) => {
//   if (e > 5) {
//     console.log(e);
//   }
// });
// 3
// array.sort(function (a, b) {
//   return b - a;
// });
// console.log(array);
// 4
// array.map((e) => {
//   for (let i = 0; i <= array.length; i++) {
//     if (e == array[i]) {
//       break;
//     } else {
//       if (e + array[i] == 10) {
//         console.log(e, array[i]);
//       }
//     }
//   }
// });
// 5
// let newArray = [];
// array.map((e) => {
//   if (e % 2 == 0) {
//     newArray.push(e);
//   }
// });
// console.log(newArray);
