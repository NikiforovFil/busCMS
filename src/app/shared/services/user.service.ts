import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseApi } from '../core/baseApi';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class UserService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }
    private apiName = 'user.php';

    getUserByEmail(email: string): Observable<User> {
        return this.get(`${this.apiName}?email=${email}`);
    }
    
}