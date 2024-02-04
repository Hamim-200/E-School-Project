const product = [
    {
        id: 0,
        image: './images/photo/course-1.jpg',
        title: 'Social Media expert',
        price: 1500,
    },
    {
        id: 1,
        image: './images/photo/course-2.jpg',
        title: 'Digital Marketing expart',
        price: 2000,
    },
    {
        id: 2,
        image: './images/photo/course-3.jpg',
        title: 'English Fundamental',
        price: 800,
    },
    {
        id: 3,
        image: './images/photo/course-4.jpg',
        title: 'Blockachain Development',
        price: 2500,
    },
    {
        id: 4,
        image: './images/photo/course-5.jpg',
        title: 'Basic Computer',
        price: 1200,
    },
    {
        id: 5,
        image: './images/photo/course-6.jpg',
        title: 'Asrchitecture Design',
        price: 4000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00 Taka</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Buy Course</button>"+
        `</div>
        </div>`
       
       
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-regular fa-circle-xmark' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}