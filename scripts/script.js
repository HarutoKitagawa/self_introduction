'use strict';

$(document).ready(function(){
    $('h2.category').on('click', function(){
        $(this).next().toggleClass('hidden');
    })
    $('h3.subcategory').on('click', function(){
        $(this).next().toggleClass('hidden');
    })
})