 import products from './products';

 const productName: string = 'fanny pack';
 
 const product = products.filter(product => product.name === productName)[0];
 
 let shipping :number = 0;
 let taxPercent : number;
 let taxTotal : number;
 let total : number;
 let shippingAddress: string = 'New York';


 console.log(product)

 if(product.preOrder === 'true') {
  console.log('Avisaremos quando o produto estiver a caminho')
 }

 if (Number(product.price) > 25) {

    console.log('O produto tem frete grátis')
 } else  {
     shipping = 5;
 }


 if(shippingAddress.match('New York')) {
    taxPercent = 0.1;
 } else {
    taxPercent = 0.05;
 }

 taxTotal = Number(product.price) * taxPercent;

 total =  Number(product.price)+ taxTotal  + shipping;

 console.log(`
              Nome do Produto ${productName}
              Endereço para Envio ${shippingAddress}
              Preço do Produto ${Number(product.price)}
              Total de impostos ${taxTotal}
              Envio ${shipping}
              Montante total ${total}`
              )