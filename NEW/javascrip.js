// Datos de ejemplo para los resultados
const allRunners = [

    // MUJERES 
    { position: 1, dorsal: 87, name: "KAREN SANDRITH MANJARRÉS VÉLEZ", time: "08:15", gap: "+00:00", gender: "FEMENINO",  },
    { position: 2, dorsal: 106, name: "LUCIANA CAMARGO OCAMPO", time: "08:46", gap: "+00:31", gender: "FEMENINO" },
    { position: 3, dorsal: 57, name: "STEFFIT VALENCIA CARVAJAL", time: "08:53", gap: "+00:38", gender: "FEMENINO" },
    { position: 4, dorsal: 97, name: "MITSHELLE FUENTES", time: "09:09", gap: "+00:54", gender: "FEMENINO" },
    { position: 5, dorsal: 82, name: "YULI ANDREA MONROY RONDON", time: "09:26", gap: "+01:11", gender: "FEMENINO" },
    { position: 6, dorsal: 64, name: "DAYANA SALAZAR GIRALDO", time: "09:39", gap: "+01:24", gender: "FEMENINO" },
    { position: 7, dorsal: 85, name: "JESSICA MERCADO", time: "10:13", gap: "+01:58", gender: "FEMENINO" },
    { position: 8, dorsal: 108, name: "ERIKA JOHANA ARANGO DUQUE", time: "10:55", gap: "+02:40", gender: "FEMENINO" },
    { position: 9, dorsal: 70, name: "DIANA RIBON", time: "11:00", gap: "+02:45", gender: "FEMENINO" },
    { position: 10, dorsal: 72, name: "SILVIA RAMÍREZ RADA", time: "11:05", gap: "+02:50", gender: "FEMENINO" },
    { position: 11, dorsal: 94, name: "KELLY JOHANNA GÓMEZ", time: "11:27", gap: "+03:12", gender: "FEMENINO" },
    { position: 12, dorsal: 80, name: "SANDY CAROLINA OROZCO VELÁSQUEZ", time: "12:07", gap: "+03:52", gender: "FEMENINO" },
    { position: 13, dorsal: 96, name: "LAURA CAROLINA GARCES MARTINEZ", time: "12:30", gap: "+04:15", gender: "FEMENINO" },
    { position: 14, dorsal: 95, name: "YANURIS MICHELL GARCÍA BARRANCO", time: "12:42", gap: "+04:27", gender: "FEMENINO" },
    { position: 15, dorsal: 69, name: "VIVIANA RINCONES", time: "12:46", gap: "+04:31", gender: "FEMENINO" },
    { position: 16, dorsal: 81, name: "DAYLIZ OLIVERO BRITO", time: "12:50", gap: "+04:35", gender: "FEMENINO" },
    { position: 17, dorsal: 52, name: "ANDREA JIMENEZ", time: "13:10", gap: "+04:55", gender: "FEMENINO" },
    { position: 18, dorsal: 61, name: "ADRIANA SEDANO ARIZA", time: "13:22", gap: "+05:07", gender: "FEMENINO" },
    { position: 19, dorsal: 73, name: "XILENA RAMÍREZ CARDOZO", time: "13:38", gap: "+05:23", gender: "FEMENINO" },
    { position: 20, dorsal: 66, name: "MARÍA FERNANDA ROSADO CARDILES", time: "13:39", gap: "+05:24", gender: "FEMENINO" },
    { position: 21, dorsal: 107, name: "IRMA BORREGO PARDO", time: "13:40", gap: "+05:25", gender: "FEMENINO" },
    { position: 22, dorsal: 93, name: "ELIANA GONZALEZ", time: "13:48", gap: "+05:33", gender: "FEMENINO" },
    { position: 23, dorsal: 78, name: "BETTY PATIÑO URIELES", time: "14:16", gap: "+06:01", gender: "FEMENINO" },
    { position: 24, dorsal: 67, name: "CAROLINA ROSADA LEON", time: "14:33", gap: "+06:18", gender: "FEMENINO" },
    { position: 25, dorsal: 60, name: "YARIBETH SOLANO", time: "14:36", gap: "+06:21", gender: "FEMENINO" },
    { position: 26, dorsal: 88, name: "ADELAIDA MACHADO", time: "14:45", gap: "+06:30", gender: "FEMENINO" },
    { position: 27, dorsal: 99, name: "YELENA FERRER VERGARA", time: "14:57", gap: "+06:42", gender: "FEMENINO" },
    { position: 28, dorsal: 56, name: "BRIANA ZAPATA EGUIS", time: "14:58", gap: "+06:43", gender: "FEMENINO" },
    { position: 29, dorsal: 104, name: "JURANIS AMERICAS", time: "14:59", gap: "+06:44", gender: "FEMENINO" },
    { position: 30, dorsal: 62, name: "XIMENA SALAZAR RAMIREZ", time: "15:01", gap: "+06:46", gender: "FEMENINO" },
    { position: 31, dorsal: 74, name: "LIZETH PERTUZ CASTRO", time: "15:03", gap: "+06:48", gender: "FEMENINO" },
    { position: 32, dorsal: 102, name: "CYNTIA MARGARITA DURÁN RACINES", time: "15:05", gap: "+06:50", gender: "FEMENINO" },
    { position: 33, dorsal: 65, name: "LUISA MARINA SALAS YANES", time: "15:20", gap: "+07:05", gender: "FEMENINO" },
    { position: 34, dorsal: 92, name: "CATALINA GONZÁLEZ QUINTERO", time: "15:22", gap: "+07:07", gender: "FEMENINO" },
    { position: 35, dorsal: 51, name: "LORENA PERNETT", time: "16:29", gap: "+08:14", gender: "FEMENINO" },
    { position: 36, dorsal: 103, name: "HERMINIA DE LA ROSA DIAZGRANADOS", time: "17:41", gap: "+09:26", gender: "FEMENINO" },
    { position: 37, dorsal: 76, name: "MERY DEL CARMEN PERLAZA CUERO", time: "17:45", gap: "+09:30", gender: "FEMENINO" },
    { position: 38, dorsal: 112, name: "SOPHIA BARRIOS ALFARO", time: "17:50", gap: "+09:35", gender: "FEMENINO" },
    { position: 39, dorsal: 111, name: "YISELA MELISA ALFARO VISBAL", time: "17:52", gap: "+09:37", gender: "FEMENINO" },
    { position: 40, dorsal: 90, name: "KENDRY VANESSA JIMÉNEZ PACHECO", time: "17:58", gap: "+09:43", gender: "FEMENINO" },
    { position: 41, dorsal: 110, name: "NANCY LUCIA LLATH BARRERA", time: "18:32", gap: "+10:17", gender: "FEMENINO" },
    { position: 42, dorsal: 79, name: "YARLENIS DEL CARMEN ORTEGA MEJÍA", time: "19:08", gap: "+10:53", gender: "FEMENINO" },
    { position: 43, dorsal: 98, name: "MARÍA FONTALVO", time: "19:30", gap: "+11:15", gender: "FEMENINO" },
    { position: 44, dorsal: 77, name: "CINDY PEREA", time: "19:31", gap: "+11:16", gender: "FEMENINO" },
    { position: 45, dorsal: 119, name: "NUBIA ISABEL ARRIETA", time: "19:52", gap: "+11:37", gender: "FEMENINO" },
    { position: 46, dorsal: 120, name: "DANIELA SOFIA ORTEGA ARRIETA", time: "19:53", gap: "+11:38", gender: "FEMENINO" },
    { position: 47, dorsal: 101, name: "JENNIFER ESCOBAR PALACIO", time: "21:32", gap: "+13:17", gender: "FEMENINO" },
    { position: 48, dorsal: 84, name: "MAYERLIS ISABEL MERCADO PACHECO", time: "21:40", gap: "+13:25", gender: "FEMENINO" },
    { position: 49, dorsal: 116, name: "MARIA ASCANIO OROZCO", time: "21:52", gap: "+13:37", gender: "FEMENINO" },
    { position: 50, dorsal: 113, name: "LAURA CAROLINA ZAMORA GUTIERREZ", time: "21:53", gap: "+13:38", gender: "FEMENINO" },

    // Hombres (datos de ejemplo)

    { position: 1, dorsal: 25, name: "CRISTIAN DAVID LOZANO ANGEL", time: "06:34", gap: "+00:00", gender: "MASCULINO" },
    { position: 2, dorsal: 34, name: "LEONARDO JOSÉ CHIRINO CASTILLO", time: "06:45", gap: "+00:11", gender: "MASCULINO" },
    { position: 3, dorsal: 37, name: "CARLOS ARTURO CÁRDENAS CORREA", time: "06:52", gap: "+00:18", gender: "MASCULINO" },
    { position: 4, dorsal: 1, name: "FREILER VIDES", time: "07:01", gap: "+00:27", gender: "MASCULINO" },
    { position: 5, dorsal: 6, name: "SEBASTIAN SANCHEZ", time: "07:03", gap: "+00:29", gender: "MASCULINO" },
    { position: 6, dorsal: 36, name: "JUAN SEBASTIÁN CELEDÓN TORRES", time: "07:10", gap: "+00:36", gender: "MASCULINO" },
    { position: 7, dorsal: 44, name: "MANUEL AMAYA", time: "07:15", gap: "+00:41", gender: "MASCULINO" },
    { position: 8, dorsal: 2, name: "JOSE VARGAS PALMA", time: "07:25", gap: "+00:51", gender: "MASCULINO" },
    { position: 9, dorsal: 109, name: "JOINER DAVID SANTANA ORTIZ", time: "07:40", gap: "+01:06", gender: "MASCULINO" },
    { position: 10, dorsal: 19, name: "JULIAN OSORIO LONDOÑO", time: "07:50", gap: "+01:16", gender: "MASCULINO" },
    { position: 11, dorsal: 18, name: "JAIVER OTERO", time: "08:00", gap: "+01:26", gender: "MASCULINO" },
    { position: 12, dorsal: 8, name: "JORGE CAMILO ROOS DEL PORTILLO", time: "08:10", gap: "+01:36", gender: "MASCULINO" },
    { position: 13, dorsal: 9, name: "NICOLAS ROMERO GOMEZ", time: "08:15", gap: "+01:41", gender: "MASCULINO" },
    { position: 14, dorsal: 14, name: "HECTOR RADA CORTES", time: "08:33", gap: "+01:59", gender: "MASCULINO" },
    { position: 15, dorsal: 4, name: "BRYAM DAVID TOBAR ROMO", time: "08:35", gap: "+02:01", gender: "MASCULINO" },
    { position: 16, dorsal: 33, name: "ANGEL CRESPO", time: "08:40", gap: "+02:06", gender: "MASCULINO" },
    { position: 17, dorsal: 35, name: "JUAN CAMILO ORTIZ", time: "08:50", gap: "+02:16", gender: "MASCULINO" },
    { position: 18, dorsal: 3, name: "DEIVER VARGAS", time: "09:00", gap: "+02:26", gender: "MASCULINO" },
    { position: 19, dorsal: 5, name: "CRISTIAN TABARES", time: "09:03", gap: "+02:29", gender: "MASCULINO" },
    { position: 20, dorsal: 32, name: "LUIS CARLOS CRESPO", time: "09:10", gap: "+02:36", gender: "MASCULINO" },
    { position: 21, dorsal: 30, name: "DEIKER DUBAN GODOY SALCEDO", time: "09:15", gap: "+02:41", gender: "MASCULINO" },
    { position: 22, dorsal: 13, name: "SAMUEL RESTREPO ARRIETA", time: "09:17", gap: "+02:43", gender: "MASCULINO" },
    { position: 23, dorsal: 7, name: "JONATHAN SALAZAR", time: "09:25", gap: "+02:51", gender: "MASCULINO" },
    { position: 24, dorsal: 10, name: "JEFERSON ROJAS NIETO", time: "09:40", gap: "+03:06", gender: "MASCULINO" },
    { position: 25, dorsal: 27, name: "LUIS MIGUEL HERRERA RODRÍGUEZ", time: "10:00", gap: "+03:26", gender: "MASCULINO" },
    { position: 26, dorsal: 11, name: "HENRY RODRIGUEZ DIAZ", time: "10:10", gap: "+03:36", gender: "MASCULINO" },
    { position: 27, dorsal: 31, name: "ARIS MANUEL DE LA CRUZ POLO", time: "10:35", gap: "+04:01", gender: "MASCULINO" },
    { position: 28, dorsal: 29, name: "ENNDY JOSE GONZALEZ PAREJO", time: "10:37", gap: "+04:03", gender: "MASCULINO" },
    { position: 29, dorsal: 20, name: "OLIVER OROZCO NUÑEZ", time: "10:45", gap: "+04:11", gender: "MASCULINO" },
    { position: 30, dorsal: 23, name: "ÓSCAR MEJIA CORONADO", time: "11:00", gap: "+04:26", gender: "MASCULINO" },
    { position: 31, dorsal: 49, name: "ALFREDO OLIVERO", time: "11:20", gap: "+04:46", gender: "MASCULINO" },
    { position: 32, dorsal: 42, name: "JESUS ALBERTO ARIZA ARAUJO", time: "11:40", gap: "+05:06", gender: "MASCULINO" },
    { position: 33, dorsal: 118, name: "ALFREDO OLIVERO", time: "12:06", gap: "+05:32", gender: "MASCULINO" },
    { position: 34, dorsal: 54, name: "ESTHER ÁLVAREZ", time: "12:14", gap: "+05:40", gender: "MASCULINO" },
    { position: 35, dorsal: 49, name: "ALFREDO OLIVERO", time: "13:17", gap: "+06:43", gender: "MASCULINO" },
    { position: 36, dorsal: 24, name: "RAFAEL MARIO LUQUE", time: "13:45", gap: "+07:11", gender: "MASCULINO" }

];




// Variables para el estado actual
let currentTab = 'results';
let currentGalleryTab = 'photos';
let currentGenderFilter = 'all';
let searchTerm = '';
let raceResults = [...allRunners];

// Configuración de paginación para resultados
const resultsPerPage = 10;
let currentResultsPage = 1;

// Configuración de paginación para participantes
const participantsPerPage = 12;
let currentParticipantsPage = 1;

// Función para cambiar entre pestañas
function switchTab(tabId) {
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada
    document.getElementById(`${tabId}-section`).classList.add('active');

    // Actualizar clases activas en los botones de navegación
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');

    // Actualizar la variable de estado
    currentTab = tabId;

    // Cargar el contenido correspondiente
    if (tabId === 'results') {
        displayResults(currentResultsPage);
    } else if (tabId === 'participants') {
        displayParticipants(currentParticipantsPage);
    } else if (tabId === 'gallery') {
        displayGallery(currentGalleryTab);
    }
}

// Función para cambiar entre fotos y videos en la galería
function switchGalleryTab(galleryType) {
    document.querySelectorAll('.gallery-container').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(`${galleryType}-gallery`).style.display = 'grid';

    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.gallery-tab[data-gallery="${galleryType}"]`).classList.add('active');

    currentGalleryTab = galleryType;
}

// Función para filtrar resultados
function filterResults() {
    // Filtrar por género
    let filteredResults = [...allRunners];

    if (currentGenderFilter !== 'all') {
        const genderText = currentGenderFilter === 'F' ? 'FEMENINO' : 'MASCULINO';
        filteredResults = filteredResults.filter(runner => runner.gender === genderText);
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
        filteredResults = filteredResults.filter(runner =>
            runner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            runner.dorsal.toString().includes(searchTerm)
        );
    }

    // Actualizar posiciones después del filtrado
    filteredResults = filteredResults.map((runner, index) => ({
        ...runner,
        position: index + 1
    }));

    raceResults = filteredResults;

    // Actualizar contador
    document.getElementById('classified-count').textContent = filteredResults.length;
    document.getElementById('total-count').textContent = currentGenderFilter === 'F' ? '33' : (currentGenderFilter === 'M' ? '25' : '58');

    // Actualizar etiqueta de categoría
    document.querySelector('.category-label').textContent = currentGenderFilter === 'F' ? 'WOMEN' : (currentGenderFilter === 'M' ? 'MEN' : 'ALL');

    // Actualizar visualización
    if (currentTab === 'results') {
        currentResultsPage = 1; // Volver a la primera página al filtrar
        displayResults(currentResultsPage);
    } else if (currentTab === 'participants') {
        currentParticipantsPage = 1;
        displayParticipants(currentParticipantsPage);
    }
}

// Función para mostrar los resultados en la tabla
function displayResults(page) {
    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = '';

    const totalPages = Math.ceil(raceResults.length / resultsPerPage);
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = Math.min(startIndex + resultsPerPage, raceResults.length);

    if (raceResults.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 7;
        cell.style.textAlign = 'center';
        cell.style.padding = '2rem';
        cell.textContent = 'No se encontraron resultados con los filtros aplicados';
        row.appendChild(cell);
        resultsBody.appendChild(row);
    } else {
        for (let i = startIndex; i < endIndex; i++) {
            const result = raceResults[i];

            const row = document.createElement('tr');

            // Posición
            const positionCell = document.createElement('td');
            positionCell.className = 'position-col';
            positionCell.textContent = result.position + '.';
            row.appendChild(positionCell);

            // Dorsal
            const dorsalCell = document.createElement('td');
            dorsalCell.className = 'dorsal-col';
            dorsalCell.textContent = result.dorsal;
            row.appendChild(dorsalCell);

            // Nombre
            const nameCell = document.createElement('td');
            nameCell.className = 'name-col';
            nameCell.textContent = result.name;
            nameCell.addEventListener('click', () => openCompetitorModal(result));
            row.appendChild(nameCell);

            // Club
            const clubCell = document.createElement('td');
            clubCell.className = 'club-col';
            clubCell.textContent = result.club;
            row.appendChild(clubCell);

            // Género
            const genderCell = document.createElement('td');
            genderCell.className = 'gender-col';
            genderCell.textContent = result.gender;
            row.appendChild(genderCell);

            // Tiempo
            const timeCell = document.createElement('td');
            timeCell.className = 'time-col';
            const timeSpan = document.createElement('span');
            timeSpan.className = 'time-value';
            timeSpan.textContent = result.time;
            timeCell.appendChild(timeSpan);
            row.appendChild(timeCell);

            // Gap
            const gapCell = document.createElement('td');
            gapCell.className = 'gap-col';
            if (result.position > 1) {
                const gapSpan = document.createElement('span');
                gapSpan.className = 'gap-value';
                gapSpan.textContent = result.gap;
                gapCell.appendChild(gapSpan);
            } else {
                gapCell.textContent = '-';
            }
            row.appendChild(gapCell);

            resultsBody.appendChild(row);
        }
    }

    // Actualizar indicadores de paginación
    document.getElementById('current-page').textContent = page;
    document.getElementById('total-pages').textContent = totalPages || 1;

    // Habilitar/deshabilitar botones de paginación
    document.getElementById('prev-page').disabled = page === 1 || raceResults.length === 0;
    document.getElementById('next-page').disabled = page === totalPages || raceResults.length === 0;
}

// Función para mostrar los participantes en la vista de tarjetas
function displayParticipants(page) {
    const participantsGrid = document.getElementById('participants-grid');
    participantsGrid.innerHTML = '';

    const totalPages = Math.ceil(raceResults.length / participantsPerPage);
    const startIndex = (page - 1) * participantsPerPage;
    const endIndex = Math.min(startIndex + participantsPerPage, raceResults.length);

    if (raceResults.length === 0) {
        const noResults = document.createElement('div');
        noResults.style.gridColumn = '1 / -1';
        noResults.style.textAlign = 'center';
        noResults.style.padding = '3rem';
        noResults.textContent = 'No se encontraron participantes con los filtros aplicados';
        participantsGrid.appendChild(noResults);
    } else {
        for (let i = startIndex; i < endIndex; i++) {
            const participant = raceResults[i];

            const card = document.createElement('div');
            card.className = 'participant-card';
            card.addEventListener('click', () => openCompetitorModal(participant));

            const header = document.createElement('div');
            header.className = 'participant-header';

            const avatar = document.createElement('div');
            avatar.className = 'participant-avatar';
            avatar.innerHTML = participant.gender === 'FEMENINO' ?
                '<i class="fas fa-female"></i>' :
                '<i class="fas fa-male"></i>';

            const name = document.createElement('div');
            name.className = 'participant-name';
            name.textContent = participant.name;

            const dorsal = document.createElement('div');
            dorsal.className = 'participant-dorsal';
            dorsal.textContent = participant.dorsal;

            header.appendChild(avatar);
            header.appendChild(name);
            header.appendChild(dorsal);

            const body = document.createElement('div');
            body.className = 'participant-body';

            // Detalles del participante
            const details = [
                { label: 'Posición', value: participant.position },
                { label: 'Tiempo', value: participant.time },
                { label: 'Club', value: participant.club || 'No especificado' },
                { label: 'Categoría', value: participant.category }
            ];

            details.forEach(detail => {
                const detailRow = document.createElement('div');
                detailRow.className = 'participant-detail';

                const label = document.createElement('div');
                label.className = 'detail-label';
                label.textContent = detail.label + ':';

                const value = document.createElement('div');
                value.className = 'detail-value';
                value.textContent = detail.value;

                detailRow.appendChild(label);
                detailRow.appendChild(value);
                body.appendChild(detailRow);
            });

            const footer = document.createElement('div');
            footer.className = 'participant-footer';

            const viewDetailsBtn = document.createElement('button');
            viewDetailsBtn.className = 'view-details-btn';
            viewDetailsBtn.textContent = 'Ver detalles';
            viewDetailsBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que se propague al card
                openCompetitorModal(participant);
            });

            footer.appendChild(viewDetailsBtn);

            card.appendChild(header);
            card.appendChild(body);
            card.appendChild(footer);

            participantsGrid.appendChild(card);
        }
    }

    // Actualizar indicadores de paginación
    document.getElementById('participants-current-page').textContent = page;
    document.getElementById('participants-total-pages').textContent = totalPages || 1;

    // Habilitar/deshabilitar botones de paginación
    document.getElementById('participants-prev-page').disabled = page === 1 || raceResults.length === 0;
    document.getElementById('participants-next-page').disabled = page === totalPages || raceResults.length === 0;
}

// Función para mostrar la galería
function displayGallery(galleryType) {
    const photosGallery = document.getElementById('photos-gallery');
    const videosGallery = document.getElementById('videos-gallery');

    // Limpiar galerías
    photosGallery.innerHTML = '';
    videosGallery.innerHTML = '';

    // Mostrar fotos
    galleryPhotos.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';

        const title = document.createElement('div');
        title.className = 'gallery-title';
        title.textContent = photo.title;

        const description = document.createElement('div');
        description.className = 'gallery-description';
        description.textContent = photo.description;

        overlay.appendChild(title);
        overlay.appendChild(description);

        item.appendChild(img);
        item.appendChild(overlay);

        photosGallery.appendChild(item);
    });

    // Mostrar videos
    galleryVideos.forEach(video => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = video.url;
        img.alt = video.title;

        const playIcon = document.createElement('div');
        playIcon.className = 'play-icon';
        playIcon.innerHTML = '<i class="fas fa-play-circle"></i>';

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';

        const title = document.createElement('div');
        title.className = 'gallery-title';
        title.textContent = video.title;

        const description = document.createElement('div');
        description.className = 'gallery-description';
        description.textContent = video.description;

        overlay.appendChild(title);
        overlay.appendChild(description);

        item.appendChild(img);
        item.appendChild(playIcon);
        item.appendChild(overlay);

        videosGallery.appendChild(item);
    });

    // Mostrar la galería correspondiente
   
    
}

// Función para abrir el modal de competidor
function openCompetitorModal(competitor) {
    const modal = document.getElementById('competitor-modal');

    // Llenar datos del competidor
    document.getElementById('modal-name').textContent = competitor.name;
    document.getElementById('modal-dorsal').textContent = competitor.dorsal;
    document.getElementById('modal-time').textContent = competitor.time;
    document.getElementById('modal-position').textContent = competitor.position;
    document.getElementById('modal-club').textContent = competitor.club || 'No especificado';
    document.getElementById('modal-category').textContent = competitor.category || 'ABIERTA';
    document.getElementById('modal-age').textContent = competitor.age ;
    document.getElementById('modal-city').textContent = competitor.city || 'Santa Marta';

    // Calcular ritmo basado en la distancia de 1.4 kilómetros
    
    const timeParts = competitor.time.split(':').map(Number);
    const totalSeconds = timeParts[0] * 60 + timeParts[1];
    const pace = totalSeconds / 1.4; // Ritmo en segundos por kilómetro
    const paceMinutes = Math.floor(pace / 60);
    const paceSeconds = Math.round(pace % 60);
    const paceFormatted = `${paceMinutes}:${paceSeconds < 10 ? '0' : ''}${paceSeconds}`;
    document.getElementById('modal-pace').textContent = paceFormatted;





    // Mostrar el modal
    modal.style.display = 'block';

    // Configurar el botón de descarga de certificado
    document.getElementById('download-certificate').addEventListener('click', () => {
        alert(`Descargando certificado para ${competitor.name} (Dorsal: ${competitor.dorsal})`);
        // Aquí iría la lógica real para descargar el certificado
    });
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('competitor-modal');
    modal.style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la primera pestaña
    displayResults(currentResultsPage);

    // Cambio de pestañas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Cambio de pestañas en galería
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const galleryType = tab.getAttribute('data-gallery');
            switchGalleryTab(galleryType);
        });
    });

    // Filtros de género
    document.querySelectorAll('.filter-btn[data-gender]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn[data-gender]').forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            currentGenderFilter = btn.getAttribute('data-gender');
            filterResults();
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        searchTerm = searchInput.value.trim();
        filterResults();
    });

    document.querySelector('.search-btn').addEventListener('click', () => {
        searchTerm = searchInput.value.trim();
        filterResults();
    });

    // Paginación de resultados
    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentResultsPage > 1) {
            currentResultsPage--;
            displayResults(currentResultsPage);
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        const totalPages = Math.ceil(raceResults.length / resultsPerPage);
        if (currentResultsPage < totalPages) {
            currentResultsPage++;
            displayResults(currentResultsPage);
        }
    });

    // Paginación de participantes
    document.getElementById('participants-prev-page').addEventListener('click', () => {
        if (currentParticipantsPage > 1) {
            currentParticipantsPage--;
            displayParticipants(currentParticipantsPage);
        }
    });

    document.getElementById('participants-next-page').addEventListener('click', () => {
        const totalPages = Math.ceil(raceResults.length / participantsPerPage);
        if (currentParticipantsPage < totalPages) {
            currentParticipantsPage++;
            displayParticipants(currentParticipantsPage);
        }
    });

    // Cerrar modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('competitor-modal');
        if (e.target === modal) {
            closeModal();
        }
    });
});