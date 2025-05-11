
import express from express;

const app = express();
const PORT = 3000;

const dummyUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};

const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" }
];


app.get('/users/get', (req, res) => {
  res.json(dummyUser);
});


app.get('/users/list', (req, res) => {
  res.json(dummyUsers);
});


app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
