export class UserModel{
    username: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;

    constructor(username?: string, firstName?: string, lastName?: string, phone?: string, password?: string, photo?: string){
        this.username = username || null;;
        this.firstName = firstName || null;;
        this.lastName = lastName || null;;
        this.phone = phone || null;;
        this.password = password || null;
    }
}

export class UpdatePhotoUserModel{
    file: string;
    constructor(file?: string){
        this.file = file || null;;
    }
}