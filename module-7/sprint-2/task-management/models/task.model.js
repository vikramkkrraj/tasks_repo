import mongoose , {Schema} from "mongoose";

const taskSchema = new Schema({
    title : { type : String },
    description : { type : String },
    status : {type : String },
    dueDate : { type : Date }
}, {timestamps : true }
)

export const Task = mongoose.model("Task", taskSchema);