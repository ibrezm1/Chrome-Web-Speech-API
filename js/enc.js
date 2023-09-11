// simple project by Yudi Arif Kurniawan
// Developer URI : https://ngodeinweb.com/
var enckey = document.getElementById("encryptionKey").value;
function encrypt() {
  var inputan = document.getElementById("inputan").value;
  //var enckey = document.getElementById("encryptionKey").value;
  var encrypted = CryptoJS.AES.encrypt(inputan, enckey);
  document.getElementById("app").innerHTML = encrypted;
}

function decrypte() {
  var inputan2 = document.getElementById("inputan2").value;
  var decrypted = CryptoJS.AES.decrypt(inputan2, enckey);
  document.getElementById("app2").innerHTML = decrypted.toString(
    CryptoJS.enc.Utf8
  );
}
