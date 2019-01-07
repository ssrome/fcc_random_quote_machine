$(document).ready(function() {
    let quote;
    let author;
    let link;

    function getNewQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function(response){
                quote = response.quoteText;
                author = response.quoteAuthor;
                console.log(response.quoteAuthor);
                $('#text').text(quote);
                if (author){
                    $('#author').text ("by " + author)
                } else {
                    $('#author').text ("by unknown");
                }
            }
            
        });
    }
    getNewQuote();

    $('#new-quote').on('click', function() {
        getNewQuote();
    });
})
