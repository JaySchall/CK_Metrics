var WMCbad = document.getElementById('WMCbad');
var DITbad = document.getElementById('DITbad');
var NOCbad = document.getElementById('NOCbad');
var CBCbad = document.getElementById('CBCbad');
var RFCbad = document.getElementById('RFCbad');
var LCMbad = document.getElementById('LCMbad');


window.onload = function testing(){
    var WMC = sessionStorage.getItem('WMC');
    document.getElementById('WMC').innerHTML = WMC;
    if (WMC > 5)
    {
        WMCbad.style.display = 'block';
    }
    var DIT = sessionStorage.getItem('DIT');
    document.getElementById('DIT').innerHTML = DIT;
    if (DIT > 5)
    {
        DITbad.style.display = 'block';
    }
    var NOC = sessionStorage.getItem('NOC');
    document.getElementById('NOC').innerHTML = NOC;
    if (NOC > 5)
    {
        NOCbad.style.display = 'block';
    }
    var CBC = sessionStorage.getItem('CBC');
    document.getElementById('CBC').innerHTML = CBC;
    if (CBC > 5)
    {
        CBCbad.style.display = 'block';
    }
    var RFC = sessionStorage.getItem('RFC');
    document.getElementById('RFC').innerHTML = RFC;
    if (RFC > 5)
    {
        RFCbad.style.display = 'block';
    }
    var LCM = sessionStorage.getItem('LCM');
    document.getElementById('LCM').innerHTML = LCM;
    if (LCM > 5)
    {
        LCMbad.style.display = 'block';
    }
}
