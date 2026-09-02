const chatContainer = document.getElementById('chat-container');

const rolesData = {
    "1": { title: "Software Engineer", desc: "Diseña, desarrolla y mantiene la arquitectura de código y escalabilidad que impulsa nuestra plataforma.", kpis: [{ kpi: "Calidad del Código", metrica: "Tasa de errores post-despliegue", meta: "< 2%" }, { kpi: "Velocidad de Entrega", metrica: "Puntos de historia por Sprint", meta: "90% de cumplimiento" }] },
    "2": { title: "Customer Success Manager", desc: "Asegura que nuestros clientes empresariales adopten y obtengan el máximo retorno de inversión (ROI) de nuestras soluciones.", kpis: [{ kpi: "Retención de Clientes", metrica: "Net Retention Rate (NRR)", meta: "> 110%" }, { kpi: "Satisfacción y Lealtad", metrica: "Net Promoter Score (NPS)", meta: "> 40 puntos" }] },
    "3": { title: "Talent Acquisition Specialist", desc: "Atrae, evalúa y contrata al mejor talento del mercado para mantener el estándar de excelencia de LinkedIn.", kpis: [{ kpi: "Tiempo de Contratación", metrica: "Días desde apertura hasta oferta", meta: "< 45 días" }, { kpi: "Calidad de Contratación", metrica: "Retención del candidato a 6 meses", meta: "> 95%" }] },
    "4": { title: "B2B Sales Executive", desc: "Impulsa el crecimiento de los ingresos mediante la prospección estratégica y cierre de contratos empresariales.", kpis: [{ kpi: "Logro de Cuota", metrica: "Ingresos recurrentes anuales (ARR)", meta: "100% de la cuota" }, { kpi: "Tasa de Cierre", metrica: "Win Rate (Oportunidades ganadas)", meta: "> 25%" }] },
    "5": { title: "Data Scientist", desc: "Desarrolla modelos predictivos y algoritmos de Machine Learning para mejorar la personalización del feed.", kpis: [{ kpi: "Precisión del Modelo", metrica: "F1 Score / Accuracy en producción", meta: "> 90%" }, { kpi: "Impacto en Negocio", metrica: "Incremento en Engagement (CTR)", meta: "+ 5% trimestral" }] },
    "6": { title: "Product Manager", desc: "Lidera la visión, estrategia y ciclo de vida de nuevos productos, alineando necesidades del usuario con el negocio.", kpis: [{ kpi: "Adopción de Funciones", metrica: "% de usuarios activos a 30 días", meta: "> 30%" }, { kpi: "Velocidad de Lanzamiento", metrica: "Cumplimiento del Roadmap", meta: "85% on-time" }] },
    "7": { title: "UX Designer", desc: "Garantiza que nuestras interfaces sean altamente intuitivas, accesibles y generen deleite en el usuario final.", kpis: [{ kpi: "Usabilidad del Sistema", metrica: "System Usability Scale (SUS)", meta: "> 80 puntos" }, { kpi: "Éxito de Tarea", metrica: "Tasa de completitud sin fricción", meta: "> 90%" }] },
    "8": { title: "Technical Support", desc: "Resuelve incidencias técnicas complejas, garantizando la continuidad operativa de los clientes corporativos.", kpis: [{ kpi: "Tiempo de 1ra Respuesta", metrica: "SLA de respuesta a tickets críticos", meta: "< 30 minutos" }, { kpi: "Resolución Efectiva", metrica: "Resolución en 1er contacto (FCR)", meta: "> 75%" }] },
    "9": { title: "Content Marketing", desc: "Diseña y ejecuta estrategias de contenido inbound para generar autoridad de marca y leads calificados.", kpis: [{ kpi: "Crecimiento de Tráfico", metrica: "Visitantes únicos al ecosistema", meta: "+ 15% trimestral" }, { kpi: "Generación de Leads", metrica: "MQLs (Marketing Qualified Leads)", meta: "> 200/mes" }] },
    "10": { title: "Financial Analyst", desc: "Analiza el rendimiento financiero, elabora presupuestos complejos y provee pronósticos directivos.", kpis: [{ kpi: "Precisión de Pronóstico", metrica: "Varianza entre forecast y gasto", meta: "< 5% desviación" }, { kpi: "Eficiencia de Cierre", metrica: "Días hábiles para cierre mensual", meta: "< 4 días" }] }
};

function addMessage(type, htmlContent) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}-msg`;
    msgDiv.innerHTML = htmlContent;
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function initChat() {
    addMessage('bot', `<strong>¡Hola! Soy tu Asistente de Capacitación de Talento de LinkedIn.</strong><br><br>Mi objetivo es dotarte de las herramientas necesarias para ejecutar una evaluación de desempeño estructurada, justa y profundamente alineada con nuestra cultura corporativa.<br><br>Para comenzar con la personalización de la guía, <strong>¿a qué puesto pertenece el colaborador que vas a evaluar?</strong>`);
    
    let optionsHtml = `<div class="options-container">`;
    for (const [key, role] of Object.entries(rolesData)) {
        optionsHtml += `<button class="option-btn" onclick="handleRoleSelection('${key}', '${role.title}')">${role.title}</button>`;
    }
    optionsHtml += `</div>`;
    addMessage('bot', optionsHtml);
}

function handleRoleSelection(roleId, roleTitle) {
    const oldOptions = document.querySelector('.options-container');
    if(oldOptions) oldOptions.remove();

    addMessage('user', `Revisaremos a un ${roleTitle}`);
    
    const role = rolesData[roleId];
    setTimeout(() => {
        let tableRows = role.kpis.map(k => `<tr><td>${k.kpi}</td><td>${k.metrica}</td><td>${k.meta}</td></tr>`).join('');
        let response = `
            <strong>Definición del Rol: ${role.title}</strong><br>${role.desc}<br><br>
            <strong>KPIs Clave a Evaluar:</strong>
            <table><tr><th>Indicador (KPI)</th><th>Métrica de Medición</th><th>Meta Esperada</th></tr>${tableRows}</table><br>
            <strong>Integración con el Sistema EPM (Electronic Performance Monitoring):</strong><br>
            Nuestra evaluación se apoya en el Monitoreo Electrónico del Desempeño. Mediante el uso de redes tecnológicas y software interno, monitoreamos las computadoras de los subordinados para registrar tiempos de respuesta, uso de aplicaciones clave y actividad en tiempo real.<br><br>
            Como líder, usar este EPM te permite:
            <ol>
                <li><strong>Evaluación Objetiva:</strong> Respaldar tus comentarios con evidencia cuantificable extraída directamente de la actividad digital del usuario.</li>
                <li><strong>Detección de Desviaciones:</strong> Identificar inmediatamente si el colaborador está invirtiendo su tiempo en prioridades incorrectas.</li>
                <li><strong>Transparencia Total:</strong> Mostrarle al empleado su propio registro de productividad para justificar la calificación de sus KPIs.</li>
            </ol>
            <div class="options-container">
                <button class="option-btn" onclick="showPlanning()">Paso 2: ¿Cómo planear la entrevista EPM?</button>
            </div>`;
        addMessage('bot', response);
    }, 600);
}

function showPlanning() {
    const oldOptions = document.querySelectorAll('.options-container');
    if(oldOptions.length > 0) oldOptions[oldOptions.length - 1].remove();

    addMessage('user', `¿Cómo debo estructurar y planear la entrevista?`);
    
    setTimeout(() => {
        addMessage('bot', `
            <strong>Protocolo de Planeación de la Sesión 1:1:</strong><br><br>
            Una evaluación EPM exitosa se gana en la preparación previa. Sigue estos pasos clave antes de sentarte con tu colaborador:
            <ul>
                <li><strong>Auditoría de Datos EPM:</strong> Descarga el reporte de monitoreo electrónico del último ciclo. Analiza las tendencias: ¿Hubo picos de inactividad? ¿Cuáles son las horas de mayor productividad? Conoce los números a la perfección antes de la junta.</li>
                <li><strong>Contextualización del Comportamiento:</strong> El tablero EPM te dice el <em>'qué'</em> (los números y tiempos), pero tú debes investigar el <em>'cómo'</em>. Recopila retroalimentación de pares que expliquen el porqué de los resultados numéricos.</li>
                <li><strong>Agenda Anticipada:</strong> Agenda la reunión con al menos 1 semana de anticipación. En la invitación, incluye los KPIs y registros a revisar para evitar emboscadas.</li>
                <li><strong>Seguridad Psicológica:</strong> Reserva una sala privada (o bloquea interrupciones si es virtual). El colaborador debe sentir que tiene tu atención incondicional y que es un espacio seguro para el diálogo constructivo.</li>
            </ul>
            <div class="options-container">
                <button class="option-btn" onclick="showTips()">Paso 3: Tips para resolución de conflictos</button>
            </div>`);
    }, 600);
}

function showTips() {
    const oldOptions = document.querySelectorAll('.options-container');
    if(oldOptions.length > 0) oldOptions[oldOptions.length - 1].remove();

    addMessage('user', `Dame los tips para ejecutar una retroalimentación y manejar conflictos.`);
    
    setTimeout(() => {
        addMessage('bot', `
            <strong>Tips para una Retroalimentación y Manejo de Conflictos Exitoso:</strong><br><br>
            Durante la charla, tu objetivo no es juzgar, sino actuar como un facilitador de soluciones:
            <ul>
                <li><strong>Abordaje Positivo del Conflicto:</strong> Es común que el colaborador se ponga a la defensiva al ver sus métricas de monitoreo. Usa la técnica "Conectar antes de Corregir"; valida sus retos primero y luego redirige la charla hacia los datos.</li>
                <li><strong>Radical Candor:</strong> Habla estrictamente sobre los comportamientos evidenciados por el EPM y nunca ataques la personalidad.</li>
                <li><strong>Escucha Activa (La Regla 70/30):</strong> Permite que el colaborador hable el 70% del tiempo. Haz preguntas de sondeo sobre los obstáculos externos que impactaron sus métricas de monitoreo.</li>
                <li><strong>Enfoque en el Futuro, no en la Culpa:</strong> Si los números son bajos, no uses la junta para regañar. Transforma el conflicto en colaboración preguntando: <em>"¿Qué recursos te faltan para mejorar estas métricas el próximo mes?"</em></li>
            </ul>
            <p><em>¡Estás completamente preparado! Recuerda que un buen líder no solo monitorea el rendimiento, sino que lo eleva e inspira.</em></p>
            <div class="options-container">
                <button class="option-btn" onclick="location.reload()">Reiniciar y evaluar otro puesto</button>
            </div>`);
    }, 600);
}

window.onload = initChat;
