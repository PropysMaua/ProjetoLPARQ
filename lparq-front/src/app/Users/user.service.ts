import { User } from "./user.model";



export class UserService{
    private Users:User[] = []

    getUsers(): User[]{
        return [...this.Users]
    }

    addUser(user: User): void{
      console.log("Entrou: " +  user)
        // const user: User = {
        //     id, name, nationality, birthDate, gender, city, country, email, phoneNumber, username, password
        // }
        this.Users.push(user)
    }


}
