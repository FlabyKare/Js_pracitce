const btn = document.getElementById('js-btn'),
         nickName = document.getElementById('js-name'),
         password = document.getElementById('js-password')
let accountsInfo = [
    {name: ''},
    {password: ''}
]
btn.addEventListener('click', () => {
    if(nickName.value != '' && password.value != ''){
        window.open('account.html', '_blank');
        accountsInfo.name = nickName.value 
        accountsInfo.password = password.value 
        // console.log(accountsInfo)
        btn.innerHTML = "Авторизован: " + accountsInfo.name + `<br style="margin-bottom: 2%;">` + "С паролем: " + password.value
    } else{
        alert('Вы не являетесь владельцем данного аккаунта')
    }
})


