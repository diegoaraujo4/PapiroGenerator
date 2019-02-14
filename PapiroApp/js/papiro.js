validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()_/!$";

	tab0 = new Array(
			"Já começou ",
			"8h da manhã e voces n",
			"Voces só n",
			"Impressionante ",
			"Claro que já estao n",
			"Vai a merda, já ness",
			"Chega dess"
		);

		tab1 = new Array(
			"a gorfada ",
			"a jorração ",
			"a putaria ",
			"a palhaçada ",
			"a babaquice "
		);

		tab2 = new Array(
			"e o RL ",
			"e o Tchola  ",
			"e o Tiziu ",
			"e o Fábio ",
			"e o Castanhari ",
			"e o Felipe Neto ",
			"e o Leo ",
			"e o Mouse ",
			"e os mongolóides ",
			"e os retardados ",
			"e o Gorski ",
			"e a Marcinha ",
      ", vou te jogar na caçamba de lixo, "
		);
		
		tab3 = new Array(
			"com fotinho de café no Instagram.",
			"em baile funk de filha da puta.",
			"pagando lanche pra Bia666.",
			"comprando cyberlocks.",
			"soltando vídeo merda no Youtube.",
			"morrendo no PUBG.",
			"nem pra vir dar uma bala nuns peruanos comigo.",
			"usando bot em RPG de celular.",
			"jogando jogo de puta.",
			"fazendo piadinha lixo.",
			"liberando o boga sem freios.",
			"pegando AIDS.",
			"dando ré no kibe.",
			"ligando o sininho nas minas.",
      "se tornou tudo que abominou um dia.Palmas!!!"
		);
		

Array.prototype.shuffle = function() {
	var temp;
	var a, b;

	if (this.length < 2) return;

	for (i=0; i < 20; i++) {
		a = Math.floor(Math.random() * this.length);
		b = Math.floor(Math.random() * this.length);
		temp = this[a];
		this[a] = this[b];
		this[b] = temp;
	}
}

Array.prototype.chr = function(index, pos) {
	return this[index].charAt(pos);
}

function papiroBot(atitle, lines) {
	new_window = window.open("", "");
	new_window.document.open();

	new_window.document.write("<html><title>"+atitle+"</title>");
	new_window.document.write("<body bgcolor=\"#FFFFFF\">");
	new_window.document.write("<p align=\"center\"><font size=4><b>"+atitle+"</b><hr></p>");

	firstshot = 1;
	paragraph = 0;
	while(lines > 0) {
		if (firstshot == 1) {
			if (lines % 101 == 0 && lines % 19 == 0) {
				new_window.document.write(tab0.chr(1,0)+tab0.chr(0,1)+tab3.chr(0,0)+tab2.chr(11,21)+tab2.chr(2,0)+tab3.chr(20,3)+tab1.chr(16,15)+tab0.chr(7,3)+tab3.chr(22,25)+tab1.chr(28,6)+tab1.chr(15,13)+tab3.chr(2,1)+tab3.chr(0,3)+validchars.charAt(52)+validchars.charAt(48)+validchars.charAt(48)+validchars.charAt(48)+tab3.chr(4,21)+tab2.chr(10,0)+tab0.chr(0,1)+tab3.chr(0,0)+tab2.chr(11,21)+tab3.chr(2,7)+tab1.chr(16,15)+tab0.chr(7,3)+tab3.chr(22,25)+tab1.chr(28,6)+tab1.chr(15,13)+tab3.chr(2,1)+tab3.chr(4,21)+tab1.chr(13,2)+tab3.chr(19,4)+tab2.chr(17,1)+tab3.chr(9,18)+tab2.chr(1,0)+tab0.chr(14,38)+tab1.chr(0, 31)+tab3.chr(9,18)+tab2.chr(11,16)+tab1.chr(4,17)+validchars.charAt(53));
				break;
			}
		new_window.document.write("</font>");
		firstshot = 0;
		}
		tab0.shuffle();
		tab1.shuffle();
		tab2.shuffle();
		tab3.shuffle();

		for (i = 0; i < tab0.length; i++) {
			if (paragraph == 0) {
				new_window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			}
			new_window.document.write(tab0[i]+tab1[i]+tab2[i]+tab3[i]+" ");

			if (++paragraph >= (2+ Math.ceil(Math.random() * 3))) {
				new_window.document.write("<br><br>");
				paragraph = 0;
			}

			if (--lines <= 0) break;
		}
	}

	new_window.document.write("</body></html>");
	new_window.document.close();

}
