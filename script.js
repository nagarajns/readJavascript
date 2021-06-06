function loadXMLDoc(file) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
        xhttp.open("GET",file, false);
        xhttp.send(null);
        return xhttp.responseXML;
}

function doSubmit(){

 xmlDoc = loadXMLDoc("colors.xml");
 var input = document.getElementById("fname").value;
//  var str = xmlDoc.getElementsByTagName("color")[0].childNodes[0].nodeValue;
//  var res = str.replace(xmlDoc.getElementsByTagName("color")[0].childNodes[0].nodeValue,input);
//  document.getElementById("color").innerHTML=res;
//  console.log(xmlDoc.getElementsByTagName("color")[0].childNodes[0].nodeValue); 
//  str.documentElement.replace(input);
    
  xmlDoc.getElementsByTagName("color")[0].childNodes[0].nodeValue = input;
    
  var blob = new Blob([new XMLSerializer().serializeToString(xmlDoc.documentElement)], {
                type: "text/xml"
            });

            saveAs(blob, "test.xml");

}

 
