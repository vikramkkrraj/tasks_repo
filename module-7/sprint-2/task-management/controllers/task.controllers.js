
import { Task } from '../models/task.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from './../utils/asyncHandler.js';

export const addTask = asyncHandler (async (req,res) => {
      try {
        const newTask  = new Task(req.body);
        await newTask.save();
        return res
        .status(201)
        .json(
            new ApiResponse(201,newTask, "Task Added Successfully")
        )
      } catch (error) {
        throw new ApiError(401, error?.message || "Error in Adding Task");
      }
});

export const getAllTask = asyncHandler( async (req,res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json( new ApiResponse(200, tasks,"Success"));
    } catch (error) {
        throw new ApiError(401, error?.message || "Error in getting all tasks");
    }
});

export const updateTask = asyncHandler( async (req,res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            throw new ApiError(400, "Task not Found!");
        };
        task.status = req.body.status;
        task.title = req.body.title;

        await task.save();
        return res.status(200).json( new ApiResponse(200,task, "Task is Updated Successfully"));
    } catch (error) {
        throw new ApiError(401, error?.message || "Error in updating task");
    }
});

export const deleteTask = asyncHandler( async (req,res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json( new ApiResponse(200),null, "Task Deleted Successfully");
    } catch (error) {
        throw new ApiError(401, error?.message || "Error in deleting the data");
    }
})
