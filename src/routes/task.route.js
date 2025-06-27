const express = require("express");
const router = express.Router();
const {
    createTask,
    readTask,
    readTaskById,
    readTaskDone,
    updateTaskDone,
    updateTaskUndone,
    deleteTask,
} = require("../controllers/task.controller");

router.post("/", createTask);
router.get("/", readTask);
router.get("/done", readTaskDone);
router.get("/:id", readTaskById);
router.patch("/:id/done", updateTaskDone);
router.patch("/:id/undone", updateTaskUndone);
router.delete("/:id", deleteTask);

module.exports = router;
