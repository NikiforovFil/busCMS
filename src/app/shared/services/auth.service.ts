import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    private isLoggedIn = false;

    login(){
        this.isLoggedIn = true
    }

    logout(){
        this.isLoggedIn = false;
        window.localStorage.clear();
    }

    checkLoggedIn(){
        return this.isLoggedIn;
    }
}