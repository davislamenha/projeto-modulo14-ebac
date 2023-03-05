$(document).ready(() => {
  // MASCARA
  $('form #telefone').mask('(00) 9 0000-0000', {
    translation: { 9: { pattern: [9] } },
    placeholder: '(00) 9 0000-0000',
  });
});
