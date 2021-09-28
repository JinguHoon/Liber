const LoginBtn = () => {
    const ID = document.getElementById('ID').value;
    const PW = document.getElementById('PW').value;
    console.log('로그인 버튼 클릭');
    alert(`아이디는 ${ID}, 비밀번호는 ${PW}입니다.`)
}

const signWithGoogle = () => {
    console.log("구글 로그인 버튼 클릭")
}