export interface Users{
    id:number,
    name: string,
    surname: string,
    email: string,
    password:string,
    token:string,
    role:string,
}

export interface CreateUser{
    name: string,
    surname: string,
    email: string,
    password: string,
    role: string,
}

export interface UpdateUserData {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
    role?: string,
  }