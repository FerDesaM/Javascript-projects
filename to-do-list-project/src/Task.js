export class Task{
    constructor(title,description,date,priority){
        this._title=title;
        this._description=description;
        this._date=date;
        this._priority=priority;
    }

    get title(){
        return this._title;
    }
    set title(newTitle){
        if(typeof newTitle==="string"&&newTitle.value.length>0)
            this._title=newTitle;
        else{
            throw new Error("invalid title");
        }
    }
    get description(){
        return this._description;
    }
    set description(newDescription){
        if(typeof newDescription==="string")
            this._description=newDescription;
        else{
            throw new Error("Invalid description");
        }
    }
    get dueDate() {
        return this._dueDate;
      }
    
      set dueDate(newDueDate) {
    
        this._dueDate = newDueDate;
    
      }
      get priority() {
        return this._priority;
      }
    
      set priority(newPriority) {
        if (['low', 'medium', 'high'].includes(newPriority.toLowerCase())) {
          this._priority = newPriority;
        } else {
          throw new Error("Priority must be 'low', 'medium', or 'high'");
        }
      }
}
