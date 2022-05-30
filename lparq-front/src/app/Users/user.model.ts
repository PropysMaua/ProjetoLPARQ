export interface User{
        id: string
        name: string
        nationality: string
        birthDate: string
        gender: string
        city: string
        country: string
        email: string
        phoneNumber: string
        username: string
        password: string
}

export class User implements User{
  constructor(obj: User){
    Object.assign(this, obj)
  }
}
