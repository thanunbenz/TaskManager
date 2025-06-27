const prisma = require("../utils/prisma");

exports.createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = await prisma.task.create({
            data: { title },
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.readTask = async (req, res) => {
    try {
        const { done } = req.query;

        if (done === "true") {
            const tasks = await prisma.task.findMany({
                where: { done: true },
            });
            if (tasks.length === 0) {
                return res.status(404).json({ message: "No tasks found" });
            }
            return res.status(200).json(tasks);
        }

        const tasks = await prisma.task.findMany();
        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.readTaskDone = async (req, res) => {
    try {
        const { done } = req.query;
        const tasks = await prisma.task.findMany({
            where: { done: true },
        });
        if (tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found" });
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.readTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await prisma.task.findUnique({
            where: { id: parseInt(id) },
        });
        if (!task) {
            return res.status(404).json({ message: "No tasks found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTaskDone = async (req, res) => {
    try {
        const { id } = req.params;

        if (req.path.endsWith("/done")) {
            const task = await prisma.task.update({
                where: { id: parseInt(id) },
                data: { done: true },
            });
            return res.status(200).json(task);
        }
        res.status(400).json({ message: "Invalid request" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTaskUndone = async (req, res) => {
    try {
        const { id } = req.params;

        if (req.path.endsWith("/undone")) {
            const task = await prisma.task.update({
                where: { id: parseInt(id) },
                data: { done: false },
            });
            return res.status(200).json(task);
        }
        res.status(400).json({ message: "Invalid request" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await prisma.task.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
