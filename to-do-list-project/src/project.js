import {Task} from "./Task"
class Project{
    
    constructor(name){
        this._name=name;
        this._taskArray=[];
    }
    set name(newName){
        if(typeof newName==="string"&&newProject.length>0){
            this._name=newNroject;
        }
    }
    get project(){
        return this._name;
    }
    addTask(task){
        if(task instanceof Task){
            this._taskArray.push(task);
        }else{
            console.error("ERROR TO INSERT");
        }
    }   
    
}
export default Project;
