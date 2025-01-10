import express from "express";
const app = express();
const PORT = process.env.PORT || 1227;

app.use("/", (req, res) => {
    console.log("hello");
    console.log("hello2");
    res.send("Assalomu alekum from Ismoil! Welcome This is CI and CD");
});
app.listen(PORT, () => {
    console.log(`SERVER is running on PORT: ${PORT}`);
});
