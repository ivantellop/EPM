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
    // Remove the initial options after clicking to clean the chat
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
            <strong>Integración con el Modelo EPM (Enterprise Performance Management):</strong><br>
            Nuestra evaluación no se basa en percepciones subjetivas, sino en la técnica EPM. Este sistema integra en tiempo real los datos de plataformas como Workday, Jira y Salesforce para crear un perfil de rendimiento 100% auditable.<br><br>
            Como líder, usar el EPM te permite tres cosas fundamentales:
            <ol>
                <li><strong>Alineación Estratégica:</strong> Demostrarle al colaborador cómo su trabajo diario impacta directamente en los OKRs (Objectives and Key Results) globales de LinkedIn.</li>
                <li><strong>Análisis de Varianza:</strong> Identificar brechas históricas entre la 'Meta Esperada' y el 'Rendimiento Real' para detectar necesidades específicas de capacitación.</li>
                <li><strong>Evaluación Basada en Datos:</strong> Eliminar el sesgo cognitivo asegurando que la calificación final dependa de métricas operativas y no de afinidad personal.</li>
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
                <li><strong>Auditoría de Datos EPM:</strong> Descarga el reporte histórico del último ciclo. Analiza las tendencias: ¿Hubo picos de productividad? ¿Caídas estacionales? Conoce los números a la perfección antes de la junta.</li>
                <li><strong>Contextualización del Comportamiento:</strong> El tablero EPM te dice el <em>'qué'</em> (los números), pero tú debes investigar el <em>'cómo'</em> (los comportamientos). Recopila retroalimentación cualitativa de pares o correos destacados que expliquen el porqué de los resultados numéricos.</li>
                <li><strong>Agenda Anticipada:</strong> Agenda la reunión con al menos 1 semana de anticipación. En la invitación, incluye los KPIs a revisar para que el colaborador pueda realizar y documentar su propia autoevaluación. Evita emboscadas.</li>
                <li><strong>Seguridad Psicológica:</strong> Reserva una sala privada (o bloquea interrupciones si es virtual). Apaga notificaciones de Teams o Slack. El colaborador debe sentir que tiene tu atención incondicional y que es un espacio seguro para ser vulnerable.</li>
            </ul>
            <div class="options-container">
                <button class="option-btn" onclick="showTips()">Paso 3: Tips para liderar la sesión</button>
            </div>`);
    }, 600);
}

function showTips() {
    const oldOptions = document.querySelectorAll('.options-container');
    if(oldOptions.length > 0) oldOptions[oldOptions.length - 1].remove();

    addMessage('user', `Dame los tips para ejecutar una retroalimentación exitosa.`);
    
    setTimeout(() => {
        addMessage('bot', `
            <strong>Técnicas de Liderazgo para la Sesión de Retroalimentación:</strong><br><br>
            Durante la charla, tu objetivo no es juzgar, sino actuar como un 'Coach' de desarrollo:
            <ul>
                <li><strong>Aplica 'Radical Candor' (Franqueza Radical):</strong> Desafía el bajo rendimiento de forma directa, pero demuestra un interés profundo y personal por la carrera del colaborador. No suavices la verdad, entrégala con empatía estructurada.</li>
                <li><strong>Separa la Identidad del Problema:</strong> Apóyate en el tablero EPM para hablar estrictamente de hechos ("El porcentaje de errores aumentó al 4%"), evitando siempre los juicios de personalidad ("Últimamente eres descuidado").</li>
                <li><strong>Escucha Activa (La Regla 70/30):</strong> Como líder, debes hablar solo el 30% del tiempo. Permite que el colaborador hable el 70% restante. Haz preguntas de sondeo: <em>"¿Qué obstáculos externos te impidieron alcanzar esta meta EPM?"</em> y escucha sin interrumpir.</li>
                <li><strong>Transición a 'Feed-forward' (Visión a futuro):</strong> No terminen la junta atrapados en el pasado. Dediquen los últimos 15 minutos a co-crear un Plan de Acción (IDP). Definan 3 pasos operativos claros para mejorar los KPIs en el próximo trimestre.</li>
            </ul>
            <p><em>¡Estás completamente preparado! Recuerda que un buen líder no solo mide el rendimiento, sino que lo eleva e inspira.</em></p>
            <div class="options-container">
                <button class="option-btn" onclick="location.reload()">Reiniciar y evaluar otro puesto</button>
            </div>`);
    }, 600);
}

window.onload = initChat;
