const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');
var upd;
form.addEventListener('submit' , (e)=>{
    
    e.preventDefault();
    if(upd){
        clearTimeout();
    }
    const ctype = form.elements.coinType.value;
   
    fetchPrice(ctype);

});

const fetchPrice= async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    console.log(r.data.coin.volume);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change= r.data.coin.priceChange1d;  
    const base = r.data.coin.name;
    const target = 'INR';


    res.innerHTML = ` <tr style ="background-color:#33cccc; color:white; font-weight:500">
    <td>Property</td>
    <td>value</td>
</tr>

<tr>
    <td>${base}</td> 
    <td >${price} ${target}</td>
</tr>

<tr>
    <td>volume</td>   
    <td>${volume}</td>
</tr>
<tr>
    <td>change</td>  
    <td>${change}</td>
</tr>`
 
 

upd = setTimeout(()=> fetchPrice(ctype),10000);
} 