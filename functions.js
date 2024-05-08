var data = [
    { name: "flare.analytics.cluster.AgglomerativeCluster", value: 3938 },
    { name: "flare.analytics.cluster.CommunityStructure", value: 3812 },
    { name: "flare.analytics.cluster.HierarchicalCluster", value: 6714 },
    // Agrega más elementos aquí
];

// Función para crear un nodo con un valor y una lista de hijos
function createNode(name, value) {
    return {
        "name": name,
        "value": value,
        "children": []
    };
}

// Crear la jerarquía de nodos
var rootNode = createNode("flare", null);

data.forEach(function(datum) {
    var parts = datum.name.split(".");
    var currentNode = rootNode;
    for (var i = 0; i < parts.length; i++) {
        var children = currentNode.children;
        var nodeName = parts[i];
        var childNode = children.find(function(child) { return child.name === nodeName; });
        if (!childNode) {
            childNode = createNode(nodeName, i === parts.length - 1 ? datum.value : null);
            children.push(childNode);
        }
        currentNode = childNode;
    }
});

// Convertir el objeto a formato JSON
var jsonString = JSON.stringify(rootNode, null, 2);

console.log(jsonString);