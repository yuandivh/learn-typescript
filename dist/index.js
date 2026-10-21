import express, {} from "express";
import { validateProduct } from "./middleware/validateProduct.js";
const app = express();
const PORT = 3000;
app.use(express.json());
const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 20000,
    },
    {
        id: 2,
        name: "Mouse",
        price: 10000,
    },
];
app.get("/products", (req, res) => {
    res.json({
        message: "Get all products",
        data: products,
    });
});
app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "ID must be positive integer",
        });
    }
    if (Number.isNaN(id)) {
        return res.status(400).json({
            message: "ID invalid",
        });
    }
    const result = products.find((product) => product.id === id);
    if (result === undefined) {
        return res.status(404).json({
            message: "Product not found",
        });
    }
    return res.status(200).json({
        message: "Data retrieved successfully",
        data: result,
    });
});
app.post("/products", (req, res) => {
    const { name, price } = req.body;
    const id = Math.max(0, ...products.map((product) => product.id)) + 1;
    const newProduct = {
        id: id,
        name: name,
        price: price,
    };
    products.push(newProduct);
    return res.status(201).json({
        message: "Product created successfully",
        data: newProduct,
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map