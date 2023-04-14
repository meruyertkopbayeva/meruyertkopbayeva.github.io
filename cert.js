var certID = 0;

$(document).ready(function () {
    for (let i = 1; i < 10; i++) {
        $('.flex-container').append('<img class="flex-item" src="/resources/cert' + i + '.jpg" height="500px" srcset="">')
        $('.selected-certs').append('<img is_selected="false" cert_id="' + (i - 1) +'" class="cert" src="/resources/cert' + i + '.jpg" height="50px" srcset="">')
    }
    $('.flex-item')[certID].style.display ='block'
    $('.cert:eq(0)').attr('is_selected','true')
    $('.download').attr('href','/resources/cert' + 1 + '.pdf')
    $('.download').attr('download','cert' + 1 + '.pdf')
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
        $('.download').attr('href','/resources/cert' + (certID + 1) + '.pdf')
        $('.download').attr('download','cert' + (certID + 1) + '.pdf')
    });
    $('#left-click').click(function(self) {
        $('.flex-item')[certID].style.display ='none';
        $('.cert:eq(' + certID + ')').attr('is_selected','false');
        if (certID === 0) certID = $('.flex-item').length - 1;
        else certID -= 1;
        if (certID > $('.flex-item').length - 1) certID = 0;
        $('.flex-item')[certID].style.display ='block';
        $('.cert:eq(' + certID + ')').attr('is_selected','true');
        $('.download').attr('href','/resources/cert' + (certID + 1) + '.pdf')
        $('.download').attr('download','cert' + (certID + 1) + '.pdf')
    });
    $('.cert').click(function() {
        $('.flex-item')[certID].style.display ='none';
        $('.cert:eq(' + certID + ')').attr('is_selected','false');
        certID = parseInt(this.getAttribute('cert_id'))
        $('.flex-item')[certID].style.display ='block';
        $('.cert:eq(' + certID + ')').attr('is_selected','true');
        $('.download').attr('href','/resources/cert' + (certID + 1) + '.pdf')
        $('.download').attr('download','cert' + (certID + 1) + '.pdf')
    });


})
