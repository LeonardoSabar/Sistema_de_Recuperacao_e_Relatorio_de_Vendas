
const fs = require('fs');

// Função para ler arquivos JSON

function read_json(file_path) {
    const data = fs.readFileSync(file_path, 'utf8');
    const json_data = JSON.parse(data);
    console.log('Dados lidos com sucesso!, file_path')
    return json_data;
}

// Função para escrever arquivos JSON

function export_json_file(file_path, data) {
    const json_data = JSON.stringify(data, null, 2);
    fs.writeFileSync(file_path, json_data, 'utf8');
}

function generate_sql_insert(data) {
    return data.map(item => {
        return `INSERT INTO vehicles (brand, vehicle, sales) VALUES ('${item.brand}', '${item.vehicle}', ${item.sales});`;
    }).join('\n');
}

// Exportando as funções
module.exports = {
    read_json,
    export_json_file,
    generate_sql_insert
};