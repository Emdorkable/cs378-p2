// alert('hello world');


function adjustOrder(adjustment)
{
    // alert("Button clicked!");
    if (adjustment == 'plus-mac') {
        var element = document.getElementById('num-order-mac');
        var val = element.innerHTML;
        ++val;
        document.getElementById('num-order-mac').innerHTML = val;

        element = document.getElementById('subtotal-cost');
        val = element.innerHTML;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        document.getElementById('subtotal-cost').innerHTML = val;
    }
    if (adjustment == 'minus-mac') {
        var element = document.getElementById('num-order-mac');
        var val = element.innerHTML;
        if (val > 0) {
            --val;
            document.getElementById('num-order-mac').innerHTML = val;
            element = document.getElementById('subtotal-cost');
            val = element.innerHTML;
            --val;
            --val;
            --val;
            --val;
            --val;
            document.getElementById('subtotal-cost').innerHTML = val;
        }
    }
    if (adjustment == 'plus-pasta') {
        var element = document.getElementById('num-order-pasta');
        var val = element.innerHTML;
        ++val;
        document.getElementById('num-order-pasta').innerHTML = val;
        element = document.getElementById('subtotal-cost');
        val = element.innerHTML;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        document.getElementById('subtotal-cost').innerHTML = val;
    }
    if (adjustment == 'minus-pasta') {
        var element = document.getElementById('num-order-pasta');
        var val = element.innerHTML;
        if (val > 0) {
            --val;
            document.getElementById('num-order-pasta').innerHTML = val;
            element = document.getElementById('subtotal-cost');
            val = element.innerHTML;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            document.getElementById('subtotal-cost').innerHTML = val;
        }
    }
    if (adjustment == 'plus-tacos') {
        var element = document.getElementById('num-order-tacos');
        var val = element.innerHTML;
        ++val;
        document.getElementById('num-order-tacos').innerHTML = val;
        element = document.getElementById('subtotal-cost');
        val = element.innerHTML;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        document.getElementById('subtotal-cost').innerHTML = val;
    }
    if (adjustment == 'minus-tacos') {
        var element = document.getElementById('num-order-tacos');
        var val = element.innerHTML;
        if (val > 0) {
            --val;
            document.getElementById('num-order-tacos').innerHTML = val;
            element = document.getElementById('subtotal-cost');
            val = element.innerHTML;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            document.getElementById('subtotal-cost').innerHTML = val;
        }
    }
    if (adjustment == 'plus-enchiladas') {
        var element = document.getElementById('num-order-enchiladas');
        var val = element.innerHTML;
        ++val;
        document.getElementById('num-order-enchiladas').innerHTML = val;
        element = document.getElementById('subtotal-cost');
        val = element.innerHTML;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        ++val;
        document.getElementById('subtotal-cost').innerHTML = val;
    }
    if (adjustment == 'minus-enchiladas') {
        var element = document.getElementById('num-order-enchiladas');
        var val = element.innerHTML;
        if (val > 0) {
            --val;
            document.getElementById('num-order-enchiladas').innerHTML = val;
            element = document.getElementById('subtotal-cost');
            val = element.innerHTML;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            --val;
            document.getElementById('subtotal-cost').innerHTML = val;
        }
    }
}

function clearAll()
{
    document.getElementById('num-order-mac').innerHTML = 0;
    document.getElementById('num-order-pasta').innerHTML = 0;
    document.getElementById('num-order-tacos').innerHTML = 0;
    document.getElementById('num-order-enchiladas').innerHTML = 0;
    document.getElementById('subtotal-cost').innerHTML = 0;
}

function order() {
    if (document.getElementById('subtotal-cost').innerHTML == 0) {
        alert("No Items In Cart");
    }
    else {
        var order = "Order Placed!\n";
        if (document.getElementById('num-order-mac').innerHTML != 0) {
            order += document.getElementById('num-order-mac').innerHTML;
            order += " mac & cheese ";
        }
        if (document.getElementById('num-order-pasta').innerHTML != 0) {
            order += document.getElementById('num-order-pasta').innerHTML;
            order += " pasta ";
        }
        if (document.getElementById('num-order-tacos').innerHTML != 0) {
            order += document.getElementById('num-order-tacos').innerHTML;
            order += " taco ";
        }
        if (document.getElementById('num-order-enchiladas').innerHTML != 0) {
            order += document.getElementById('num-order-enchiladas').innerHTML;
            order += " enchilada ";
        }
        alert(order);
    }
}