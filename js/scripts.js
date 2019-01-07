$(document).ready(function() {
    let quote;
    let author;

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
                $('#text').text(quote);
                if (author){
                    $('#author').text ("by " + author)
                } else {
                    $('#author').text ("- unknown");
                }
            },
            error: function(){
                $('#text').text("Error: Operator");
                $('#author').text("Taking Back Sunday");
            }   
        });
    }
    getNewQuote();

    $('#new-quote').on('click', function(event) {
        event.preventDefault();
        getNewQuote();
    });
    $('#tweet-quote').on('click', function(event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + "- " + author + " #RandomQuote"));
    });
});