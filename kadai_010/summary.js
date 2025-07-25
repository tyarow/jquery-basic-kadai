$(function() {
  // 文字色変化
  $('#change-color').on('click', function() {
    $('p').css('color', 'red');
  });
  
  // 文字内容変化
  $('#change-text').on('click', function() {
    $('p').text('Hello!');
  });

  // フェードアウト
  $('#fade-out').on('click', function() {
    $('p').fadeOut();
  });

  // フェードイン
  $('#fade-in').on('click', function() {
    $('p').fadeIn();
  });
});