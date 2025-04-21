// Datos de los corredores
const runners = [
    { position: 1, dorsal: 87, name: "KAREN SANDRITH MANJARRÉS VÉLEZ", time: "08:15", gap: "+00:00", gender: "F" },
    { position: 2, dorsal: 106, name: "LUCIANA CAMARGO OCAMPO", time: "08:46", gap: "+00:31", gender: "F" },
    { position: 3, dorsal: 57, name: "STEFFIT VALENCIA CARVAJAL", time: "08:53", gap: "+00:38", gender: "F" },
    { position: 4, dorsal: 97, name: "MITSHELLE FUENTES", time: "09:09", gap: "+00:54", gender: "F" },
    { position: 5, dorsal: 82, name: "YULI ANDREA MONROY RONDON", time: "09:26", gap: "+01:11", gender: "F" },
    { position: 6, dorsal: 64, name: "DAYANA SALAZAR GIRALDO", time: "09:39", gap: "+01:24", gender: "F" },
    { position: 7, dorsal: 85, name: "JESSICA MERCADO", time: "10:13", gap: "+01:58", gender: "F" },
    { position: 8, dorsal: 108, name: "ERIKA JOHANA ARANGO DUQUE", time: "10:55", gap: "+02:40", gender: "F" },
    { position: 9, dorsal: 70, name: "DIANA RIBON", time: "11:00", gap: "+02:45", gender: "F" },
    { position: 10, dorsal: 72, name: "SILVIA RAMÍREZ RADA", time: "11:05", gap: "+02:50", gender: "F" },
    { position: 11, dorsal: 94, name: "KELLY JOHANNA GÓMEZ", time: "11:27", gap: "+03:12", gender: "F" },
    { position: 12, dorsal: 80, name: "SANDY CAROLINA OROZCO VELÁSQUEZ", time: "12:07", gap: "+03:52", gender: "F" },
    { position: 13, dorsal: 96, name: "LAURA CAROLINA GARCES MARTINEZ", time: "12:30", gap: "+04:15", gender: "F" },
    { position: 14, dorsal: 95, name: "YANURIS MICHELL GARCÍA BARRANCO", time: "12:42", gap: "+04:27", gender: "F" },
    { position: 15, dorsal: 69, name: "VIVIANA RINCONES", time: "12:46", gap: "+04:31", gender: "F" },
    { position: 16, dorsal: 81, name: "DAYLIZ OLIVERO BRITO", time: "12:50", gap: "+04:35", gender: "F" },
    { position: 17, dorsal: 52, name: "ANDREA JIMENEZ", time: "13:10", gap: "+04:55", gender: "F" },
    { position: 18, dorsal: 61, name: "ADRIANA SEDANO ARIZA", time: "13:22", gap: "+05:07", gender: "F" },
    { position: 19, dorsal: 73, name: "XILENA RAMÍREZ CARDOZO", time: "13:38", gap: "+05:23", gender: "F" },
    { position: 20, dorsal: 66, name: "MARÍA FERNANDA ROSADO CARDILES", time: "13:39", gap: "+05:24", gender: "F" },
    { position: 21, dorsal: 107, name: "IRMA BORREGO PARDO", time: "13:40", gap: "+05:25", gender: "F" },
    { position: 22, dorsal: 93, name: "ELIANA GONZALEZ", time: "13:48", gap: "+05:33", gender: "F" },
    { position: 23, dorsal: 78, name: "BETTY PATIÑO URIELES", time: "14:16", gap: "+06:01", gender: "F" },
    { position: 24, dorsal: 67, name: "CAROLINA ROSADA LEON", time: "14:33", gap: "+06:18", gender: "F" },
    { position: 25, dorsal: 60, name: "YARIBETH SOLANO", time: "14:36", gap: "+06:21", gender: "F" },
    { position: 26, dorsal: 88, name: "ADELAIDA MACHADO", time: "14:45", gap: "+06:30", gender: "F" },
    { position: 27, dorsal: 99, name: "YELENA FERRER VERGARA", time: "14:57", gap: "+06:42", gender: "F" },
    { position: 28, dorsal: 56, name: "BRIANA ZAPATA EGUIS", time: "14:58", gap: "+06:43", gender: "F" },
    { position: 29, dorsal: 104, name: "JURANIS AMERICAS", time: "14:59", gap: "+06:44", gender: "F" },
    { position: 30, dorsal: 62, name: "XIMENA SALAZAR RAMIREZ", time: "15:01", gap: "+06:46", gender: "F" },
    { position: 31, dorsal: 74, name: "LIZETH PERTUZ CASTRO", time: "15:03", gap: "+06:48", gender: "F" },
    { position: 32, dorsal: 102, name: "CYNTIA MARGARITA DURÁN RACINES", time: "15:05", gap: "+06:50", gender: "F" },
    { position: 33, dorsal: 65, name: "LUISA MARINA SALAS YANES", time: "15:20", gap: "+07:05", gender: "F" },
    { position: 34, dorsal: 92, name: "CATALINA GONZÁLEZ QUINTERO", time: "15:22", gap: "+07:07", gender: "F" },
    { position: 35, dorsal: 51, name: "LORENA PERNETT", time: "16:29", gap: "+08:14", gender: "F" },
    { position: 36, dorsal: 103, name: "HERMINIA DE LA ROSA DIAZGRANADOS", time: "17:41", gap: "+09:26", gender: "F" },
    { position: 37, dorsal: 76, name: "MERY DEL CARMEN PERLAZA CUERO", time: "17:45", gap: "+09:30", gender: "F" },
    { position: 38, dorsal: 112, name: "SOPHIA BARRIOS ALFARO", time: "17:50", gap: "+09:35", gender: "F" },
    { position: 39, dorsal: 111, name: "YISELA MELISA ALFARO VISBAL", time: "17:52", gap: "+09:37", gender: "F" },
    { position: 40, dorsal: 90, name: "KENDRY VANESSA JIMÉNEZ PACHECO", time: "17:58", gap: "+09:43", gender: "F" },
    { position: 41, dorsal: 110, name: "NANCY LUCIA LLATH BARRERA", time: "18:32", gap: "+10:17", gender: "F" },
    { position: 42, dorsal: 79, name: "YARLENIS DEL CARMEN ORTEGA MEJÍA", time: "19:08", gap: "+10:53", gender: "F" },
    { position: 43, dorsal: 98, name: "MARÍA FONTALVO", time: "19:30", gap: "+11:15", gender: "F" },
    { position: 44, dorsal: 77, name: "CINDY PEREA", time: "19:31", gap: "+11:16", gender: "F" },
    { position: 45, dorsal: 119, name: "NUBIA ISABEL ARRIETA", time: "19:52", gap: "+11:37", gender: "F" },
    { position: 46, dorsal: 120, name: "DANIELA SOFIA ORTEGA ARRIETA", time: "19:53", gap: "+11:38", gender: "F" },
    { position: 47, dorsal: 101, name: "JENNIFER ESCOBAR PALACIO", time: "21:32", gap: "+13:17", gender: "F" },
    { position: 48, dorsal: 84, name: "MAYERLIS ISABEL MERCADO PACHECO", time: "21:40", gap: "+13:25", gender: "F" },
    { position: 49, dorsal: 116, name: "MARIA ASCANIO OROZCO", time: "21:52", gap: "+13:37", gender: "F" },
    { position: 50, dorsal: 113, name: "LAURA CAROLINA ZAMORA GUTIERREZ", time: "21:53", gap: "+13:38", gender: "F" },
  
    // Hombres (datos de ejemplo)
    
        { position: 1, dorsal: 25, name: "CRISTIAN DAVID LOZANO ANGEL", time: "06:34", gap: "+00:00" },
        { position: 2, dorsal: 34, name: "LEONARDO JOSÉ CHIRINO CASTILLO", time: "06:45", gap: "+00:11" },
        { position: 3, dorsal: 37, name: "CARLOS ARTURO CÁRDENAS CORREA", time: "06:52", gap: "+00:18" },
        { position: 4, dorsal: 1, name: "FREILER VIDES", time: "07:01", gap: "+00:27" },
        { position: 5, dorsal: 6, name: "SEBASTIAN SANCHEZ", time: "07:03", gap: "+00:29" },
        { position: 6, dorsal: 36, name: "JUAN SEBASTIÁN CELEDÓN TORRES", time: "07:10", gap: "+00:36" },
        { position: 7, dorsal: 44, name: "MANUEL AMAYA", time: "07:15", gap: "+00:41" },
        { position: 8, dorsal: 2, name: "JOSE VARGAS PALMA", time: "07:25", gap: "+00:51" },
        { position: 9, dorsal: 109, name: "JOINER DAVID SANTANA ORTIZ", time: "07:40", gap: "+01:06" },
        { position: 10, dorsal: 19, name: "JULIAN OSORIO LONDOÑO", time: "07:50", gap: "+01:16" },
        { position: 11, dorsal: 18, name: "JAIVER OTERO", time: "08:00", gap: "+01:26" },
        { position: 12, dorsal: 8, name: "JORGE CAMILO ROOS DEL PORTILLO", time: "08:10", gap: "+01:36" },
        { position: 13, dorsal: 9, name: "NICOLAS ROMERO GOMEZ", time: "08:15", gap: "+01:41" },
        { position: 14, dorsal: 14, name: "HECTOR RADA CORTES", time: "08:33", gap: "+01:59" },
        { position: 15, dorsal: 4, name: "BRYAM DAVID TOBAR ROMO", time: "08:35", gap: "+02:01" },
        { position: 16, dorsal: 33, name: "ANGEL CRESPO", time: "08:40", gap: "+02:06" },
        { position: 17, dorsal: 35, name: "JUAN CAMILO ORTIZ", time: "08:50", gap: "+02:16" },
        { position: 18, dorsal: 3, name: "DEIVER VARGAS", time: "09:00", gap: "+02:26" },
        { position: 19, dorsal: 5, name: "CRISTIAN TABARES", time: "09:03", gap: "+02:29" },
        { position: 20, dorsal: 32, name: "LUIS CARLOS CRESPO", time: "09:10", gap: "+02:36" },
        { position: 21, dorsal: 30, name: "DEIKER DUBAN GODOY SALCEDO", time: "09:15", gap: "+02:41" },
        { position: 22, dorsal: 13, name: "SAMUEL RESTREPO ARRIETA", time: "09:17", gap: "+02:43" },
        { position: 23, dorsal: 7, name: "JONATHAN SALAZAR", time: "09:25", gap: "+02:51" },
        { position: 24, dorsal: 10, name: "JEFERSON ROJAS NIETO", time: "09:40", gap: "+03:06" },
        { position: 25, dorsal: 27, name: "LUIS MIGUEL HERRERA RODRÍGUEZ", time: "10:00", gap: "+03:26" },
        { position: 26, dorsal: 11, name: "HENRY RODRIGUEZ DIAZ", time: "10:10", gap: "+03:36" },
        { position: 27, dorsal: 31, name: "ARIS MANUEL DE LA CRUZ POLO", time: "10:35", gap: "+04:01" },
        { position: 28, dorsal: 29, name: "ENNDY JOSE GONZALEZ PAREJO", time: "10:37", gap: "+04:03" },
        { position: 29, dorsal: 20, name: "OLIVER OROZCO NUÑEZ", time: "10:45", gap: "+04:11" },
        { position: 30, dorsal: 23, name: "ÓSCAR MEJIA CORONADO", time: "11:00", gap: "+04:26" },
        { position: 31, dorsal: 49, name: "ALFREDO OLIVERO", time: "11:20", gap: "+04:46" },
        { position: 32, dorsal: 42, name: "JESUS ALBERTO ARIZA ARAUJO", time: "11:40", gap: "+05:06" },
        { position: 33, dorsal: 118, name: "ALFREDO OLIVERO", time: "12:06", gap: "+05:32" },
        { position: 34, dorsal: 54, name: "ESTHER ÁLVAREZ", time: "12:14", gap: "+05:40" },
        { position: 35, dorsal: 49, name: "ALFREDO OLIVERO", time: "13:17", gap: "+06:43" },
        { position: 36, dorsal: 24, name: "RAFAEL MARIO LUQUE", time: "13:45", gap: "+07:11" }
      
      
  ]


// Función para llenar la tabla con los datos
function populateTable(data) {
    const tableBody = document.getElementById('runnersTableBody');
    tableBody.innerHTML = '';

    if (data.length === 0) {
        // Si no hay resultados, mostrar mensaje
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.className = 'no-results';
        cell.textContent = 'No se encontraron corredores con ese dorsal';
        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }

    // Llenar la tabla con los datos
    data.forEach(runner => {
        const row = document.createElement('tr');
        
        const positionCell = document.createElement('td');
        positionCell.textContent = runner.position;
        row.appendChild(positionCell);
        
        const dorsalCell = document.createElement('td');
        dorsalCell.textContent = runner.dorsal;
        row.appendChild(dorsalCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = runner.name;
        row.appendChild(nameCell);
        
        const timeCell = document.createElement('td');
        timeCell.textContent = runner.time;
        row.appendChild(timeCell);
        
        const gapCell = document.createElement('td');
        gapCell.textContent = runner.gap;
        row.appendChild(gapCell);
        
        tableBody.appendChild(row);
    });
}

// Función para filtrar corredores por dorsal
function filterRunnersByDorsal(dorsal) {
    if (!dorsal) {
        return runners; // Si no hay dorsal, devolver todos los corredores
    }
    
    // Filtrar corredores cuyo dorsal coincida con el número ingresado
    return runners.filter(runner => runner.dorsal.toString().includes(dorsal.toString()));
}

// Función para manejar la búsqueda
function handleSearch() {
    const dorsalInput = document.getElementById('dorsalSearch');
    const dorsal = dorsalInput.value.trim();
    
    const filteredRunners = filterRunnersByDorsal(dorsal);
    populateTable(filteredRunners);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Llenar la tabla inicialmente con todos los corredores
    populateTable(runners);
    
    // Configurar el evento de búsqueda
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', handleSearch);
    
    // Configurar el evento de búsqueda al presionar Enter
    const dorsalInput = document.getElementById('dorsalSearch');
    dorsalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Configurar el botón de reset
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', () => {
        document.getElementById('dorsalSearch').value = '';
        populateTable(runners);
    });
});