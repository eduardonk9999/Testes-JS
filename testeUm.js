var objeBody = document.body;
document.body = objeBody;


// Create footer

function createFooter(name, precodesconto, preconormal, image) {

    // Box
    const footerFixed = document.createElement('div');


    // Imagem

    const imagemCapa = document.createElement('img');
    imagemCapa.setAttribute('src', image)
    footerFixed.appendChild(imagemCapa)

    // Title
    const title = document.createElement('h2');
    title.innerHTML = name;

    // Preço com Desconto
    const precoComDesconto = document.createElement('h3');
    precoComDesconto.innerHTML = `Preço: ${precodesconto}`;


    // Preço sem Desconto
    const precoSemDesconto = document.createElement('h4');
    const desconto = +preconormal - 10;
    precoSemDesconto.innerHTML = `Preço com desconto: R$ ${desconto}`;

    // Div Textos
    const divTexto = document.createElement('div');
    divTexto.appendChild(title)
    divTexto.appendChild(precoComDesconto)
    divTexto.appendChild(precoSemDesconto)

    footerFixed.appendChild(divTexto);

    // Btn Adc Sacola
    const button = document.createElement('button');
    button.setAttribute('href', 'javascript:;')


    button.innerHTML = 'adicionar à sacola';

    button.addEventListener('click', function () {
        const modal = document.querySelector('.minicart');

        modal.classList.add('js-active');

        footerFixed.style.display = "none";
    });



    // Btn Clouse
    const buttonF = document.createElement('div');

    buttonF.innerHTML = 'X';


    buttonF.addEventListener('click', function () {
       

        footerFixed.style.display = "none";
    });


    objeBody.appendChild(footerFixed);
    footerFixed.appendChild(button);
    footerFixed.appendChild(buttonF);


    styleElement(footerFixed, imagemCapa, button, buttonF)

    return footerFixed;
}

function styleElement(elementFront, image, btn, clouse) {
    elementFront.style.background = "#FFFFFF";
    elementFront.style.width = "100%";
    elementFront.style.position = "fixed";
    elementFront.style.height = "200px";

    elementFront.style.bottom = "50px";
    elementFront.style.display = "grid";
    elementFront.style.gridTemplateColumns = "1fr 6fr 10fr";
    elementFront.style.gridGap = "10px";
    elementFront.style.alignItems = "flex-start";
    elementFront.style.padding = "42px 30px";
    elementFront.style.boxShadow = "10px 6px 5px #00000042";
    elementFront.style.zIndex = "9999";
    elementFront.style.padding = "30px 160px";


    // IMG
    image.style.width = "100px"


    // Button
    btn.style.color = "#FFF";
    btn.style.background = "#000";
    btn.style.width = "300px";
    btn.style.height = "60px";
    btn.style.textAlign = "center";
    btn.style.textTransform = "uppercase";
    btn.style.fontSize = "15px";
    btn.style.paddingTop = "0px";
    btn.style.fontWeight = "500";
    btn.style.cursor = "pointer";
    btn.style.margin = "0px auto";


    // Button Fechar
    clouse.style.color = "#000";
    clouse.style.position = "absolute";
    clouse.style.right = "400px";
    clouse.style.fontWeight = "600"
    clouse.style.fontSize = "20px"
    clouse.style.cursor = "pointer";


}

function infosProduct() {

    fetch(`https://www.animale.com.br/api/catalog_system/pub/products/search?an=lojaanimale&=productId`, { mode: 'no-cors' })
        .then(function (response) {
            response.json().then(function (data) {

                console.log(this.skuJson);

                var name = this.skuJson.name;
                var precoDesconto = this.skuJson.skus[0].bestPriceFormated;
                var precoNormal = this.skuJson.skus[0].bestPrice;
                var image = this.skuJson.skus[0].image;

                createFooter(name, precoDesconto, precoNormal, image);
            });
        })
        .catch(function (err) {
            console.error('Failed retrieving information', err);
        });


}




infosProduct();