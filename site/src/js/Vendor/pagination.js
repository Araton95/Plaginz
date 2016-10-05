$(document).ready(function () {

    initSliders();

    //NOTE: To append in different container
    var appendToContainer = function (htmlele, record) {

    };

    var afterFilter = function (result, jQ) {
        $('#total_movies').text(result.length);

        var checkboxes = $("#plugin-seciton_criteria :input:gt(0)");

        checkboxes.each(function () {
            var c = $(this), count = 0

            if (result.length > 0) {
                count = jQ.where({'pluginType': c.val()}).count;
            }

            if (count === 0) {
                c.parent().css('pointer-events', 'none');
                c.siblings().css('color', '#c5c5c5');
            } else {
                c.parent().css('pointer-events', 'all');
                c.siblings().css('color', '#34495e');
            }

            c.next().text(c.val() + '(' + count + ')')
        });
    }

    var card_quantity_per_page, card_quantity;
    card_quantity = movies.length;


    if ($(window).width() >= 769) {
        card_quantity_per_page = Math.floor(($(window).width() - $('.sidebar').width() - 50 ) / 225);
    }
    else {
        if ($(window).width() <= 467) {
            card_quantity_per_page = card_quantity / 3;
        }
        else {
            card_quantity_per_page = 6;
        }
    }

    var FJS = FilterJS(movies, '#movies', {
        template: '#movie-template',
        search: {ele: '#searchbox'},
        //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
        callbacks: {
            afterFilter: afterFilter
        },
        pagination: {
            container: '#pagination',
            visiblePages: 5,
            perPage: {
                values: [card_quantity_per_page * 3, 24, 32],
                container: '#per_page'
            },
        }
    });

    FJS.addCriteria({field: 'pluginType', ele: '#plugin-seciton_criteria input:checkbox'});

    window.FJS = FJS;

    $("img.plugin-pic").lazyload();
});

function initSliders() {
    $('#plugin-seciton_criteria :checkbox').prop('checked', false);
    $('#all_plugin-seciton').on('click', function () {

        $('#plugin-seciton_criteria :checkbox').prop('checked', $(this).is(':checked'));
        $('#searchbox').val('');
    });
}
