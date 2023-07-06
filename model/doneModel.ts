import mongoose from "mongoose";


interface  iTask {
    time?: string;
    task?: string;
    priority?: string;
    isComplete?: boolean;

}

interface iTaskData extends iTask,  mongoose.Document {

}


const doneModel = new mongoose.Schema({
 
    task: {
        type :String,
        trim: true,
    },
    priority: {
        type :String,
    },
    isComplete: {
        type :Boolean,
        default: false,
    },
    
},
 {timestamps:true}
);

export default mongoose.model<iTaskData>('doneTask', doneModel)