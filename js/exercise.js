// Exercise js-01
$('#btn-sub1').click (function () {
    let num1 = parseInt($('.num1').val());
    let num2 = parseInt($('.num2').val());
    let result = 0;
    if( num1 === num2 ) {
        result = 3*(num1 + num2);
    } else {
        result = num1 + num2;
    }
    $('#result-ex1').attr('value', result);
});

// Exercise js-02
$('#btn-sub2').click (function () {
    let num = parseInt($('.num').val());
    let result = 0;
    if (num > 19) {
      result = 3*(num - 19); 
    } else if(num < 19) {
      result = 19 - num;
    } else {
      result = 0;
    }
      $('#result-ex2').attr('value', result);
    
});

// Exercise js-03
$('#btn-sub3').click (function () {
    let arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let num = $('.num').val();
    let temp = 0;
    let result = '';
    arrayNum.forEach(element => {
      let str = parseInt(num.replace('*', element));
      if (str%3 === 0) {
          result += str + ", ";
      } 
      temp = 0;
    });
    if (result === null) {
      result += 'No value'
    }
      $('#result-ex3').attr('value', result);
    
});

// Exercise js-04
$('#btn-sub4').click (function () {
    let arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let num = $('.num').val();
    let temp = 0;
    let result;
    arrayNum.forEach(element => {
      let str = parseInt(num.replace('*', element));
      if (str%6 === 0) {
          result += str + ", ";
      } 
      temp = 0;
    });
    console.log(result);
    if (result === undefined) {
      result = 'No value';
    }
      $('#result-ex4').attr('value', result);
    
});