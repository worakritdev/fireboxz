import { browser } from "$app/env";

function browserGet(key){
    if(browser){
        const item= localStorage.getItem(key)
        if(item){
            return JSON.parse(item)
        }
    }
    return null;
}
