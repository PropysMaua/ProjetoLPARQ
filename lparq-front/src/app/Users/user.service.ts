import { User } from "./user.model";



export class UserService{
    private Users:User[] = []

    getUsers(): User[]{
        return [...this.Users]
    }

    addUser(id: string, name: string, nationality: string, birthDate: string,
        gender: string, city: string, country: string, email: string, phoneNumber: string,
        username: string, password: string): void{
        const user: User = {
            id, name, nationality, birthDate, gender, city, country, email, phoneNumber, username, password
        }
        this.Users.push(user)
    }


}