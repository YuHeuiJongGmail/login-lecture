"use strict";

console.log('hee');

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

    console.log("헬로 레지스터");

registerBtn.addEventListener("click", register);

function register() {
    // console.log(id.value);
    if(!id.value) return alert("아이디를 입력해 주세요");

    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,

    };
    // console.log(req);

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())          //res.json()의 반환값은 promise이다.
    .then((res) => {
        if(res.success){
            location.href = "/login";        //로그인으로 이동
        }else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입중 에러 발생"));
    });


}

