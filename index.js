// Instancia o Jimp
const jimp = require('jimp');

// Palheta de cores a ser usada
var colors = {
	branco: {r:255, g:255, b: 255},
	yellow: {r:255, g:255, b:0},
	laranja: {r:255, g:134, b:0},
	vinho: {r:161, g:43, b:69},
	rosaesc: {r:206, g:60, b:121},
	bege: {r:255, g:161, b:138},
	rosaclaro: {r:253, g:117, b:156},
	roxo: {r:105, g:41, b:126},
	azulmed: {r:63, g:43, b:134},
	azulesc: {r:0, g:38, b:110},
	azulcla: {r:0, g:169, b:231},
	verdemar: {r:1, g:176, b:151},
	verdeesc: {r:0, g:79, b:38},
	verdemed: {r:0, g:164, b:56},
	verdecla: {r:42, g:190, b:78},
	limo: {r:40, g:134, b:43},
	tijolo: {r:160, g:55, b:54},
	marrom: {r:89, g:45, b:24},
	marromaver: {r:86, g:10, b:0},
	cinza: {r:79, g:92, b:97},
	prata: {r:219, g:230, b:233},
	preto: {r:0, g:0, b:0}
};

// Instancia o Nearest Color com as cores da palheta
const nc = require('nearest-color').from(colors);;

// Começa a ler a imagem e fazer as alterações
jimp.read('base.jpg', (err, imgBase) => {
	// Verifica se deu erro
	if (err) throw err;

	imgBase
		// Redimensiona a imagem
		.resize(116,155)

		// Escaneia pixel por pixel
		.scan(0, 0, imgBase.bitmap.width, imgBase.bitmap.height, (x, y, idx) => {
			// Pega a cor do pixel
			let pixelColor = imgBase.getPixelColor(x, y);
			// Pega a cor da palheta, mais próxima à do pixel
			let novaCor = nc(jimp.intToRGBA(pixelColor));
			// Insere a nova cor no pixel
			imgBase.setPixelColor(jimp.cssColorToHex(novaCor.value), x, y);
			// Verifica se chegou no final da imagem...
			if (x == imgBase.bitmap.width - 1 && y == imgBase.bitmap.height - 1) {
				// Salva a nova imagem
				imgBase.write('nova.jpg');
			}
		})
		
})