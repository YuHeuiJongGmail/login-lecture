"use strict";

console.log('hee');

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

    console.log(id);

loginBtn.addEventListener("click", login);

function login() {
    // console.log(id.value);
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // console.log(req);

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())          //res.json()의 반환값은 promise이다.
    .then((res) => {
        if(res.success){
            location.href = "/";        //홈으로 이동
        }else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인중 에러 발생"));
    });
}

