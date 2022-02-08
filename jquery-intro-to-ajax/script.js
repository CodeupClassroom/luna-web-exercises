// NB. These several render* functions provide duplicated functionality. In practice you would only
// ever use one of them, multiple ways are provided for the sake of demonstration

function renderHtmlWithjQuery(items) {
    items.forEach(function (item) {
        // create the surrounding div
        let $div = $('<div>').addClass('col-sm-6')

        let $h2 = $('<h2>').text(item.name);
        let $descriptionParagraph = $('<p>').text(item.description);
        let $priceParagraph = $('<p>').text('Price: $' + item.price);

        $div.append([$h2, $descriptionParagraph, $priceParagraph]);
        $div.appendTo($('#items'));
    });
}


function renderHtmlWithVanillaDom(items) {
    items.forEach(function (item) {
        // create the surrounding div
        let div = document.createElement('div');
        div.classList.add('col-sm-6');

        let h2 = document.createElement('h2');
        let descriptionParagraph = document.createElement('p');
        let priceParagraph = document.createElement('p');
        h2.innerText = item.name
        descriptionParagraph.innerText = item.description;
        priceParagraph.innerText = 'Price: $' + item.price;

        div.append(h2, descriptionParagraph, priceParagraph);
        document.querySelector('#items').append(div)
    });
}

function renderHtmlWithStrings(items) {
    let html = "";
    items.forEach(function (item) {
        // generate html for this item
        let itemHtml = '<div class="col-sm-6">'
        itemHtml += '<h2>' + item.name + '</h2>';
        itemHtml += '<p>' + item.description + '</p>';
        itemHtml += '<p>Price: $' + item.price + '</p>';
        itemHtml += '</div>';
        console.log('inside forEach loop, itemHtml:')
        console.log(itemHtml);
        html += itemHtml;
    });
    console.log('finished the forEach loop, html:')
    console.log(html);
    $('#items').html(html);
}

function handleResponse(items) {
    renderHtmlWithjQuery(items);
}

$.get('https://ajax-demo.zach.wiki/featured-items')
    .done(handleResponse);
