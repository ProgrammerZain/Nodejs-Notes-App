import express from "express";
import cors from "cors";
let notes = [
  {
    id: 1,
    title: "zain note 1",
    content: "bla bla note1",
  },
  {
    id: 2,
    title: "test note 2 ",
    content: "bla bla note2",
  },
  {
    id: 3,
    title: "test note 3",
    content: "bla bla note3",
  },
  {
    id: 4,
    title: "test note 4 ",
    content: "bla bla note4",
  },
  {
    id: 5,
    title: "test note 5",
    content: "bla bla note5",
  },
  {
    id: 6,
    title: "test note 6",
    content: "bla bla note6",
  },
];
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
  res.json(notes);
});

app.listen(5000, () => {
  console.log("server running on localhost:5000");
});
