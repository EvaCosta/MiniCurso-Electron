function dec2bin8(dec){
  var binario = (dec >>> 0).toString(2);

  return ("0".repeat(8) + binario).substr(-8);
}

function calculaIp() {
  var inp1 = document.getElementById("inp1").value;
  var resultado = document.getElementById("resultado");
  var selectIp = document.getElementById("selectIp");

  var ip = inp1.split('.');
  var masc = (selectIp.options[selectIp.selectedIndex].text).split('.');
  var retornoIp = "", retornoMasc = "", retornoIpRede = "", retornoBroadcast = "";

  if(inp1 == "")
    alert("Informe o IP!!!! A calculadora não adivinha pra você!");
  else{
    for (var i = 0; i <= 3; i++) {
      retornoIp += dec2bin8(ip[i]);
      retornoMasc += dec2bin8(masc[i]);
      if(masc[i] == 255){
        retornoIpRede += ip[i];
        retornoBroadcast += ip[i];
      }
      else{
        retornoIpRede += ip[i] & masc[i];
        soma = parseInt(retornoIpRede.split('.')[i]) + (masc[i] ^ 255);
        retornoBroadcast += (soma);
      }
      if(i!=3){
        retornoIp += '.';
        retornoMasc += '.';
        retornoIpRede += '.';
        retornoBroadcast += '.';
      }
    }
    resultado.innerHTML = "<p>IP Binário: "+retornoIp+"</p> <p>Máscara Binária: "+retornoMasc+
		"</p>"+"<p>IP de Rede: "+retornoIpRede+"</p>"+"<p>IP de Broadcast: "+retornoBroadcast+"</p>";
  }
}
