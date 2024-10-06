// // document.getElementById('ten_id') => Tìm kiếm phần tử dựa theo id
// const $idHeading = document.getElementById('heading');
// console.log($idHeading);

// // document.getElementsByTagName('ten_the') => Tìm kiếm các phần tử dựa trên tên thẻ
// console.log(document.getElementsByTagName('h1'));

// // document.getElementsByClassName('ten_class') => Tìm kiếm các phần tử dựa trên tên class
// console.log(document.getElementsByClassName('heading'));

// // document.querySelector('selector') => Trả về phần tử đầu tiên thỏa mãn điều kiện
// console.log(document.querySelector('h1#heading'))
// console.log(document.querySelector('div.heading'))

// // document.querySelectorAll('selector') => Trả về các phần tử thỏa mãn điều kiện
// console.log(document.querySelectorAll('div'));

const $h1 = document.getElementById('heading');
// .innerHTML
// $h1.innerHTML = '<a href="#">Thẻ h1 đã được chỉnh sửa</a>';
// .innerText
// $h1.innerText = '<a href="#">Thẻ h1 đã được chỉnh sửa nội dung</a>';
const $a = document.getElementById('tagA');
// Thay đổi giá trị attribute
$a.href = "https://www.google.com";
// $a.data-id = 2;
$a.setAttribute('data-id', 200)
// Lấy giá trị attribute
console.log($a.href);
console.log($a.getAttribute('data-id'));
// Xóa thuộc tính 
$a.removeAttribute('data-id');
// Thao tác với style
$a.style.color = 'red';
$a.style.fontSize = '32px';

// $a.remove();

// Tạo ra 1 thẻ h2 có id="sub-title" nội dung "Xin chào thế giới"
const $h2 = document.createElement('h2'); //Tạo thẻ h2 và tham chiếu đến biến $h2
$h2.innerText = 'Xin chào thế giới'; //Thay đổi nội dung của thẻ h2 vừa tạo
$h2.id = 'sub-title'; //Thêm id cho thẻ h2

document.body.appendChild($h2); //Thêm thẻ h2 vừa tạo vào vị trí cuối trong thẻ body

// Truy xuất đến body
// document.body.innerHTML = 
//     document.body.innerHTML + `
//     <div class="productDe">
//         <div id="first">
//             <h2>first</h2>
//         </div>
//         <div id="second">
//             <h2>second</h2>
//         </div>
//         <div id="third">
//             <h2>third</h2>
//         </div>
//     </div>
// `

$a.classList.add('link');
$a.classList.remove('test');
$a.classList.toggle('abc');

// 
// const $tagsLi = document.querySelectorAll('li.favorite-list-item');
// // $tagsLi.innerText = 'I love this thing';
// for(let $tagLi of $tagsLi){
//     $tagLi.innerHTML = 'I love this thing';
//     $tagLi.style.color ='red';
// }
// let content= prompt("Nhập nội dung: ");
// let $tagLi = document.createElement('li');
// $tagLi.innerText = content;
// document.querySelector('ul#favorite-list').appendChild($tagLi)

const $tagH1 = document.getElementById('heading');

$tagH1.onclick = function(){
    alert('Đã click')
}