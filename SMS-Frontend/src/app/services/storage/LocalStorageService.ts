import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})


export class LocalStorageService{

    private readonly TOKEN_KEY='auth_token_S14';
    private readonly REFRSH_TOKEN_KEY='reresh_token_S14';
    
    private Role='';
    private customId='';

    constructor(){}

    setAuthdata(token:string,refrshToken:string):void{
        localStorage.setItem(this.TOKEN_KEY,token);
        localStorage.setItem(this.REFRSH_TOKEN_KEY,refrshToken);
    }

    removeAuthdata():void{
        localStorage.removeItem(this.REFRSH_TOKEN_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }

    getAuthToken(): string | null{
        return localStorage.getItem(this.TOKEN_KEY)

    }
    getRefreshToken():string|null{
    return localStorage.getItem(this.REFRSH_TOKEN_KEY);
    }

    setUserdata():void{
        
    }

} 