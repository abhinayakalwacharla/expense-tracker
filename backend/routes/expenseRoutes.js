import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// ➕ Add Expense
router.post("/", async (req, res) => {
try {
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.status(201).json(newExpense);
} catch (err) {
    res.status(400).json({ message: err.message });
}
});

// 📜 Get All Expenses
router.get("/", async (req, res) => {
try {
    const expenses = await Expense.find();
    res.json(expenses);
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

// ❌ Delete Expense
router.delete("/:id", async (req, res) => {
try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

export default router;
