import express, { Router } from "express"
import { CreateTask, DeleteTask, UpdateTask, getOneTask, getTask } from "../controller/doneTaskController";

const router = Router();

router.route("/")
.get(getTask)
.post(CreateTask)


router.route("/:id").get(getOneTask).patch(UpdateTask).delete(DeleteTask);
    
export default router;