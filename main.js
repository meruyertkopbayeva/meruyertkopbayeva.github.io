$(document).ready(function () {
    $('.hamburger').click(function (){
        $('#hamburger-input1').prop('checked',!$('#hamburger-input1').prop('checked'))
        $('#hamburger-input2').prop('checked',!$('#hamburger-input2').prop('checked'))
    });
})
