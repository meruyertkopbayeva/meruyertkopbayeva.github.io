var certID = 0;

$(document).ready(function () {
    console.log(window.outerWidth)
    function createCert(cert_id) {
        let bp = $('<div>',{
            class: 'flex-column'
        })
        let bc = $('<div>',{
            class: 'flex-column'
        })
        let imgCert = $('<img>',{
            id: "cert" + cert_id,
            class: "display-cert",
            src: "certificates/cert" + cert_id + ".jpg",
            height: "500px"
        })
        bc.append(imgCert)
        let a = $('<a>',{
            href: "certificates/cert" + cert_id + ".pdf",
            download: "cert" + cert_id + ".pdf",
            class: "download"
        })
        a.append('<img class="download-btn" src="images/download.png" height="40px" width="40px" alt="">')
        bc.append(a)
        bp.append(bc)
        return bp
    }
    for (let i = 1; i < 10; i++) {
        $('.flex-container').append('<img onclick="document.location = \'#cert' + i +'\'" class="flex-item" src="certificates/cert' + i + '.jpg" height="500px" srcset="">')
        $('.selected-certs').append('<img is_selected="false" cert_id="' + (i - 1) +'" class="cert" src="certificates/cert' + i + '.jpg" height="50px" srcset="">')
        $('.certificates-all').append(createCert(i))
    }
    $('.flex-item')[certID].style.display ='block'
    $('.cert:eq(0)').attr('is_selected','true')
    $('.hamburger').click(function (){
        $('#hamburger-input1').prop('checked',!$('#hamburger-input1').prop('checked'))
        $('#hamburger-input2').prop('checked',!$('#hamburger-input2').prop('checked'))
    });
    $('#right-click').click(function(self) {
        $('.flex-item')[certID].style.display ='none'
        $('.cert:eq(' + certID + ')').attr('is_selected','false');
        certID += 1
        if (certID > $('.flex-item').length - 1) certID = 0
        $('.flex-item')[certID].style.display ='block';
        $('.cert:eq(' + certID + ')').attr('is_selected','true');
    });
    $('#left-click').click(function(self) {
        $('.flex-item')[certID].style.display ='none';
        $('.cert:eq(' + certID + ')').attr('is_selected','false');
        if (certID === 0) certID = $('.flex-item').length - 1;
        else certID -= 1;
        if (certID > $('.flex-item').length - 1) certID = 0;
        $('.flex-item')[certID].style.display ='block';
        $('.cert:eq(' + certID + ')').attr('is_selected','true');
    });

    $('.cert').click(function() {
        $('.flex-item')[certID].style.display ='none';
        $('.cert:eq(' + certID + ')').attr('is_selected','false');
        certID = this.getAttribute('cert_id')
        $('.flex-item')[certID].style.display ='block';
        $('.cert:eq(' + certID + ')').attr('is_selected','true');
    });


})
