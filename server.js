import express from "express";
const app = express();
const PORT = process.env.PORT || 2000;

app.use("/", (req, res) => {
    console.log("hello");
    console.log("hello2");
    res.send("Hello World from Ismoil! Welcome This is CI and CD");
});
app.listen(PORT, () => {
    console.log(`SERVER is running on PORT: ${PORT}`);
});
