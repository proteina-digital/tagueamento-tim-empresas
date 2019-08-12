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

$(document).on('click', "#me-ligue-topo", function(event) {
    let category = 'me-ligue-topo', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
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
    let category = 'whatsapp', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#fechar-modal", function(event) {
    let category = 'fechar-modal', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

// $(document).on('keyup', "#preencher-telefone", function(event) {
//     let category = 'preencher', action = 'clique', label = 'botao';
//     dataLayerPush(category, action, label);
// });

$(document).one("keyup", "#aquitelefone", function() {
    let category = 'preencher', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#pedir-ligacao", function(event) {
    if($('#preencher-telefone') == "") {
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

$(document).on('click', "#assine-rodape", function(event) {
    let category = 'assine-rodape', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

$(document).on('click', "#botao-0800-rodape", function(event) {
    let category = '0800-rodape', action = 'clique', label = 'botao';
    dataLayerPush(category, action, label);
});

