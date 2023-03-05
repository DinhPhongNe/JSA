var factored = 1;

function factorial(form) {
  var number = form.factor.value;
  var n = number;

  for (i = n; i > 0; i--) {
    if (n > 170) {
      form.result.value = "Não tôi quá nhỏ để tính con số lớn như vậy!";
    } else {
      if (i == n) {
        factored = i;
      } else {
        factored = factored * i;
      }
      form.result.value = factored;
    }
  }

  return factored;
}
