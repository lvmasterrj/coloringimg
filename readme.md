# Coloring Images

Pequeno script para colorir imagens de acordo com uma palheta definida de cores.

A ideia é de criar um script para colorização por numeros.

A pasta em anexo pbnify-master é um exemplo de "Paint by Number", tirado do https://pbnify.com/

Atualmente o sistema utiliza os seguintes módulos:

**Jimp**
Usado pra redimensionar a imagem e alterar pixel por pixel

**nearest-color**
Usado pra pegar a cor do pixel e, de acordo com a palheta de cores dada, pegar a mais próxima.

## Como está funcionando
A partir de uma imagem "base.jpg", na raiz do projeto, ele redimensiona a imagem e pega pixel por pixel da imagem comparando com a palheta requerida e salva uma imagem "nova.jpg".

## Obs
O módulo *paperjs* pode ajudar também, mas ele não está instalando corretamente