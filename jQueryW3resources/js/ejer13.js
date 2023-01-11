$ (principal);

colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };

function principal() {
    $.each(colors, function(key, value) {
        $('#divSelect').append($("<option/>", {
            value: key,
            text: value
        }));
    });
}
