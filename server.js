import express from "express";
const app = express();
const PORT = process.env.PORT || 1227;
app.use(express.json);
app.use("/", (req, res) => {
    res.send({
        message: "Hello World!",
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
