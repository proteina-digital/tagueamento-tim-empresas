function dataLayerPush(category, action, label) {
    dataLayer.push({
        'event':'Event',
        'eventCategory':category,
        'eventAction' :action,
        'eventLabel' :label
    });

    console.log(`evento ${action} no ${label} ${category}`);
}

$(document).on('click', "#botao-0800", function(event) {
    let category = '0800-topo', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).one("keyup", "#aquitelefone", function() {
    let category = 'preencher-topo', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#pedir-ligacao", function(event) {
    if($('#aquitelefone') == "") {
        let category = 'ligacao-topo', action = 'clique', label = 'botao';
        dataLayerPush(category, action, label);
    }
});

$(document).on('click', "#preco-topo", function(event) {
    let category = 'preco-topo', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#buttonOpen", function(event) {
    let category = 'chat', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#assine-ja-topo", function(event) {
    let category = 'assine-topo', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#whatsapp", function(event) {
    let category = 'whats', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#fechar-modal", function(event) {
    let category = 'fechar-modal', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).one("keyup", "#aquitelefone-modal", function() {
    let category = 'preencher', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#pedir-ligacao-modal", function(event) {
    if($('#aquitelefone-modal') == "") {
        let category = 'ligacao', action = 'clique', label = 'botao';
        dataLayerPush(category, action, label);
    }
});

$(document).on('click', "#preco-6gb, #preco-6gb-mb", function(event) {
    let category = 'preco-6gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#preco-10gb, #preco-10gb-mb", function(event) {
    let category = 'preco-10gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#preco-20gb, #preco-20gb-mb", function(event) {
    let category = 'preco-20gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#preco-50gb, #preco-50gb-mb", function(event) {
    let category = 'preco-50gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#assine-6gb, #assine-6gb-mb", function(event) {
    let category = 'assine-6gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#assine-10gb, #assine-10gb-mb", function(event) {
    let category = 'assine-10gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#assine-20gb, #assine-20gb-mb", function(event) {
    let category = 'assine-20gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#assine-50gb, #assine-50gb-mb", function(event) {
    let category = 'assine-50gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#beneficios-6gb, #beneficios-6gb-mb", function(event) {
    let category = 'beneficios-6gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#beneficios-10gb, #beneficios-10gb-mb", function(event) {
    let category = 'beneficios-10gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#beneficios-20gb, #beneficios-20gb-mb", function(event) {
    let category = 'beneficios-20gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#beneficios-50gb, #beneficios-50gb-mb", function(event) {
    let category = 'beneficios-50gb', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});


$(document).on('click', "#ligue-10341", function(event) {
    let category = '10341', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#assine-rodape", function(event) {
    let category = 'assine-rodape', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#sumario", function(event) {
    let category = 'sumario', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#regulamento", function(event) {
    let category = 'regulamento', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#botao-0800-rodape", function(event) {
    let category = '0800-rodape', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});