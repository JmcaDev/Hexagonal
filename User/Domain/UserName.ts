//Value Objects: Name
export class UserName{
    value: string;

    constructor(value: string){
        this.value = value
        this.isValid();
    }

    private isValid(){
        if(this.value.length === 0){
            throw new Error("This is not a valid Name")
        }
    }
}