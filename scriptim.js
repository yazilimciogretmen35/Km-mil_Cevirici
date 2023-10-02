const Kilometre=document.getElementById('kiloMetre')
const Mil=document.getElementById('mil');



function fonksiyon(event){
    const deger=Number(event.target.value);

    switch(event.target.name){

    case 'Kilometre':
        Mil.value=(deger*0.62137).toFixed(2)
            break;

    case 'Mil':
        Kilometre.value=(deger/0.62137).toFixed(2)
            break;
        default:
            break;
    }
}
