import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

router.post("/", async (req, res) => {
try {
    const { title, amount } = req.body;
    const expense = new Expense({ title, amount });
    await expense.save();
    res.json(expense);
} catch (err) {
    res.status(500).json({ error: "Error adding expense" });
}
});

router.delete("/:id", async (req, res) => {
try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
} catch (err) {
    res.status(500).json({ error: "Error deleting expense" });
}
});

export default router;
