import express from "express";
const app = express();
const PORT = process.env.PORT || 2000;

app.use("/", (req, res) => {
    res.send("Hello World! This is CI and CD");
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
