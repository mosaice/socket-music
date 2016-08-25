(function ($) {
  $(window).load(function () {
    var $audio = document.getElementById('audio');
    var $title = $('#title');
    var $cover = document.getElementById('cover');

    var list = [];
    var current = 0;

    $('span').each(function () {
      list.push({
        title: $(this).html(),
        cover: $(this).data('cover'),
        src: $(this).data('src')
      });
    });

    $('ul > li > span').click(function () {
      var pos = $(this).parent().index();
      current = pos;
      play();
    });

    function play() {
      $audio.src = list[current].src;
      $title.text(list[current].title);
      $cover.src = list[current].cover;
      $audio.play();
      $('li').removeClass('active').eq(current).addClass('active');
    };

    $audio.addEventListener('ended', function () {
      if (!list[++current]) {
        current--;
        return alert('over!');
      }
      play();
    });

    $('#prev').click(function () {
      if (!list[--current]) {
        current++;
        return alert('over!');
      }
      play();
    });

    $('#next').click(function () {
      if (!list[++current]) {
        current--;
        return alert('over!');
      }
      play();
    });
    console.log(list);

  });
})(jQuery)
