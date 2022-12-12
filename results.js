var WMCbad = document.getElementById('WMCbad');
var DITbad = document.getElementById('DITbad');
var NOCbad = document.getElementById('NOCbad');
var CBCbad = document.getElementById('CBCbad');
var RFCbad = document.getElementById('RFCbad');
var LCMbad = document.getElementById('LCMbad');


window.onload = function testing(){
    var WMC = sessionStorage.getItem('WMC');
    document.getElementById('WMC').innerHTML = WMC;
    if (WMC > 20)
    {
        WMCbad.style.display = 'block';
        document.getElementById('WMC').style.color = "red";
    }
    else
    {
        document.getElementById('WMC').style.color = "green";
    }
    var DIT = sessionStorage.getItem('DIT');
    document.getElementById('DIT').innerHTML = DIT;
    if (DIT > 8)
    {
        DITbad.style.display = 'block';
        document.getElementById('DIT').style.color = "red";
    }
    else
    {
        document.getElementById('DIT').style.color = "green";
    }
    var NOC = sessionStorage.getItem('NOC');
    document.getElementById('NOC').innerHTML = NOC;
    if (NOC > 15)
    {
        NOCbad.style.display = 'block';
        document.getElementById('NOC').style.color = "red";
    }
    else
    {
        document.getElementById('NOC').style.color = "green";
    }
    var CBC = sessionStorage.getItem('CBC');
    document.getElementById('CBC').innerHTML = CBC;
    if (CBC > 14)
    {
        CBCbad.style.display = 'block';
        document.getElementById('CBC').style.color = "red";
    }
    else
    {
        document.getElementById('CBC').style.color = "green";
    }
    var RFC = sessionStorage.getItem('RFC');
    document.getElementById('RFC').innerHTML = RFC;
    if (RFC > 15)
    {
        RFCbad.style.display = 'block';
        document.getElementById('RFC').style.color = "red";
    }
    else
    {
        document.getElementById('RFC').style.color = "green";
    }
    var LCM = sessionStorage.getItem('LCM');
    document.getElementById('LCM').innerHTML = LCM;
    if (LCM > 15)
    {
        LCMbad.style.display = 'block';
        document.getElementById('LCM').style.color = "red";
    }
    else
    {
        document.getElementById('LCM').style.color = "green";
    }
}
