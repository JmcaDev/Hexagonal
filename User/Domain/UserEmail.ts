//Value Objects: Email
export class UserEmail{
    value: string;

    constructor(value: string){
        this.value = value;
        this.isValid()
    }

    private isValid(){
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(!validEmail.test(this.value)){
            throw new Error("This is not a valid Email")
        }
    }
}