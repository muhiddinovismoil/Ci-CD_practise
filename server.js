import express from "express";
const app = express();
const PORT = process.env.PORT || 2000;
app.use("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/message", (req, res) => {
    res.send("nima gappp");
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
