$(document).ready(() => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');
  
    $('#cart').on('click', () => {
      $('#cartMenu').show();
    })
  
    $('#account').on('click', () => {
      $('#accountMenu').show();
      
    })
  
    $('#help').on('click', () => {
      $('#helpMenu').show();
      
    })
  
    $('.dropdown-menu').on('mouseleave', () => {
      $('#cartMenu').hide();
      $('#accountMenu').hide();
      $('#helpMenu').hide();
    })
  });