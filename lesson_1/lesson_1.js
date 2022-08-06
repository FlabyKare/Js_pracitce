const block = document.querySelector('.block');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');
let block_add = document.querySelector('.block_add');
const array_img = [
    'https://avatars.mds.yandex.net/i?id=af7e95c9b61c338ccc9c6bc26928a156-4478670-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=912ee95d4e540bc6ca6b1c95735d76f5-5482565-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=aaf7feee3d2f23b3f96c6428c563a468-4288981-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=58991ca995de3a6e86c0cd2b4dda4203-5524622-images-thumbs&n=13',

];

let massive = "";





btn.addEventListener('click', () => {
    array_img.forEach(photo => {
        block_add.innerHTML += `
        <div  class="f_row">
            <img src="${photo}" width="100px" height="100px">    

        </div>
    `
        // massive +=
    });

if (block_add.length != 0){
    console.log(block_add.length)
}

})
