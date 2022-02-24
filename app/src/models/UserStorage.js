"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "1111", "1111"],
        psword: ["1234", "1111", "2222"],
        name: ["우리밋", "나개발", "나팀장"],
    
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            console.log("field == " + field);
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
                console.log("newUsers[field] == " + newUsers[field]);
            }
            
            return newUsers;
        }, {});
        // console.log("newUsers == " + newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   //[id, psword, name] 키값을 배열로
        // console.log("usersKeys== " + usersKeys);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        console.log('userInfo["id"] == ' + userInfo["id"]);
        console.log('userInfo["psword"] == ' + userInfo["psword"]);
        console.log('userInfo["name"] == ' + userInfo["name"]);
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        // console.log(users);
        return { success: true };

    }
}

module.exports = UserStorage;