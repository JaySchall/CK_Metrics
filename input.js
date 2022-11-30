var submitData = document.getElementById('submitbutton');


submitData.onclick = function submit(){
    
    var WMC = document.getElementById('WMC').value;
    sessionStorage.setItem('WMC', WMC);
    var DIT = document.getElementById('DIT').value;
    sessionStorage.setItem('DIT', DIT);
    var NOC = document.getElementById('NOC').value;
    sessionStorage.setItem('NOC', NOC);
    var CBC = document.getElementById('CBC').value;
    sessionStorage.setItem('CBC', CBC);
    var RFC = document.getElementById('RFC').value;
    sessionStorage.setItem('RFC', RFC);
    var LCM = document.getElementById('LCM').value;
    sessionStorage.setItem('LCM', LCM);
    window.location.href = 'summary.html';
}