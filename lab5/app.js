import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello Express");
});
app.get("/about", (req, res) => {
  res.send("We are FSD Developer");
});
app.post("/login", (req, res) => {
  res.send({ msg: "user login" });
});
app.put("user/update/1", (req, res) => {
  res.send({ msg: "user update" });
});
app.delete("/user/1", (req, res) => {
  res.send({ msg: "remove user 1" });
});
app.use((req, res) => {
  res.status(400).send("NOT Found");
});

app.listen(3333, () => console.log("server is Running at 3333"));
