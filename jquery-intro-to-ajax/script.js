function handleResponse(items) {
    let html = "";
    console.log("items (api response):")
    console.log(items)
    items.forEach(function(item) {
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

// $.get("coffee.json")

$.get('https://ajax-demo.zach.wiki/featured-items')
    .done(handleResponse);
