import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// Get all expenses
router.get("/", async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

// Add expense
router.post("/", async (req, res) => {
    const { title, amount } = req.body;
    const expense = new Expense({ title, amount });
    await expense.save();
    res.json(expense);
});

// Delete expense
router.delete("/:id", async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
});

export default router;
