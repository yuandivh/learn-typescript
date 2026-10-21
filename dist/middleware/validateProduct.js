import {} from "express";
export function validateProduct(req, res, next) {
    const body = req.body;
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return res.status(400).json({
            message: "Request body must be an object",
        });
    }
    const { name, price } = body;
    if (typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({
            message: "Name must be a non-empty string",
        });
    }
    if (typeof price !== "number" || !Number.isInteger(price) || price <= 0) {
        return res.status(400).json({
            message: "Price must be a positive integer",
        });
    }
    next();
}
//# sourceMappingURL=validateProduct.js.map