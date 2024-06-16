//Value Objects: createdAt
export class UserCreatedAt{
    value: Date;

    constructor(value: Date){
        this.value = value;
        this.isValid()
    }

    private isValid(){
        if(this.value > new Date()){
            throw new Error("UserCreatedAt must be in the past")
        }
    }

}