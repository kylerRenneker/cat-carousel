$(function() {

    $('.thumbnail').on('click', function(event) {
        const targetSrc = $(this).find('img').attr('src');

        // event.preventDefault();

        console.log(targetSrc);

        $('.hero img').attr('src', targetSrc);
    });

  





});

