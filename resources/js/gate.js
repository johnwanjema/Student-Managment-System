export default class Gate{

    constructor(user){
        this.usefr = user;
    }
    isAdmin(){
        return this.user.type === 'Admin'
    }
    isUser(){
        return this.user.type === 'Admin'
    }

}
