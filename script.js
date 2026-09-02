const chatContainer = document.getElementById('chat-container');

const rolesData = {
    "1": { title: "Software Engineer", desc: "Diseña, desarrolla y mantiene el código base impulsando nuestra plataforma.", kpis: [{ kpi: "Calidad del Código", metrica: "Tasa de errores", meta: "< 2%" }, { kpi: "Velocidad", metrica: "Puntos por Sprint", meta: "90%" }] },
    "2": { title: "Customer Success Manager", desc: "Asegura que nuestros clientes adopten y obtengan valor de las soluciones.", kpis: [{ kpi: "Retención", metrica: "NRR", meta: "> 110%" }, { kpi: "Satisfacción", metrica: "NPS", meta: "> 40" }] },
    "3": { title: "Talent Acquisition Specialist", desc: "Atrae y contrata al mejor talento del mercado.", kpis: [{ kpi: "Tiempo Contratación", metrica: "Días a oferta", meta: "< 45 días" }, { kpi: "Calidad", metrica: "Retención a 6 meses", meta: "> 95%" }] },
    "4": { title: "B2B Sales Executive", desc: "Impulsa ingresos cerrando nuevos contratos empresariales.", kpis: [{ kpi: "Logro Cuota", metrica: "ARR", meta: "100%" }, { kpi: "Tasa de Cierre", metrica: "Win Rate", meta: "> 25%" }] },
    "5": { title: "Data Scientist", desc: "Desarrolla modelos predictivos para mejorar el producto.", kpis: [{ kpi: "Precisión", metrica: "F1 Score", meta: "> 90%" }, { kpi: "Impacto", metrica: "Incremento CTR", meta: "+ 5%" }] },
    "6": { title: "Product Manager", desc: "Lidera la visión y ejecución de nuevos productos.", kpis: [{ kpi: "Adopción", metrica: "Uso activo a 30 días", meta: "> 30%" }, { kpi: "Velocidad", metrica: "Roadmap on-time", meta: "85%" }] },
    "7": { title: "UX Designer", desc: "Garantiza interfaces intuitivas y accesibles.", kpis: [{ kpi: "Usabilidad", metrica: "SUS Score", meta: "> 80" }, { kpi: "Éxito Tarea", metrica: "Completitud", meta: "> 90%" }] },
    "8": { title: "Technical Support", desc: "Resuelve incidencias técnicas escaladas por clientes.", kpis: [{ kpi: "1ra Respuesta", metrica: "SLA críticos", meta: "< 30 min" }, { kpi: "Resolución Efectiva", metrica: "FCR", meta: "> 75%" }] },
    "9": { title: "Content Marketing", desc: "Diseña estrategias para tráfico orgánico y leads.", kpis: [{ kpi: "Tráfico", metrica: "Visitantes únicos", meta: "+ 15%" }, { kpi: "Leads", metrica: "MQLs", meta: "> 200/mes" }] },
    "10": { title: "Financial Analyst", desc: "Analiza el rendimiento y elabora pronósticos.", kpis: [{ kpi: "Precisión", metrica: "Varianza", meta: "< 5%" }, { kpi: "Eficiencia Cierre", metrica: "Días para cierre", meta: "< 4 días" }] }
};

function addMessage(type, htmlContent) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}-msg`;
    msgDiv.innerHTML = htmlContent;
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function initChat() {
    addMessage('bot', `<strong>¡Hola! Soy tu asistente de capacitación de LinkedIn.</strong><br><br>Mi objetivo es guiarte para asegurar una evaluación de desempeño exitosa. ¿A qué puesto pertenece el colaborador que vas a evaluar?`);
    
    let optionsHtml = `<div class="options-container">`;
    for (const [key, role] of Object.entries(rolesData)) {
        optionsHtml += `<button class="option-btn" onclick="handleRoleSelection('${key}', '${role.title}')">${role.title}</button>`;
    }
    optionsHtml += `</div>`;
    addMessage('bot', optionsHtml);
}

function handleRoleSelection(roleId, roleTitle) {
    addMessage('user', `Quiero evaluar a un ${roleTitle}`);
    
    const role = rolesData[roleId];
    setTimeout(() => {
        let tableRows = role.kpis.map(k => `<tr><td>${k.kpi}</td><td>${k.metrica}</td><td>${k.meta}</td></tr>`).join('');
        let response = `
            <strong>Rol: ${role.title}</strong><br>${role.desc}<br><br>
            <strong>KPIs a evaluar:</strong>
            <table><tr><th>KPI</th><th>Métrica</th><th>Meta</th></tr>${tableRows}</table><br>
            <em>Mediante la técnica EPM, estos datos se extraen de nuestros sistemas para alinear el rendimiento individual con los OKRs globales de LinkedIn.</em>
            <div class="options-container">
                <button class="option-btn" onclick="showPlanning()">Ver cómo planear la entrevista</button>
            </div>`;
        addMessage('bot', response);
    }, 600);
}

function showPlanning() {
    addMessage('user', `Ver cómo planear la entrevista`);
    setTimeout(() => {
        addMessage('bot', `
            <strong>Planeación de la sesión 1:1:</strong>
            <ul>
                <li>Revisa el histórico en el tablero EPM.</li>
                <li>Agenda con una semana de anticipación.</li>
                <li>Asegura un entorno privado y sin distracciones.</li>
                <li>Prepara al menos 3 preguntas abiertas.</li>
            </ul>
            <div class="options-container">
                <button class="option-btn" onclick="showTips()">Ver tips de retroalimentación</button>
            </div>`);
    }, 600);
}

function showTips() {
    addMessage('user', `Ver tips de retroalimentación`);
    setTimeout(() => {
        addMessage('bot', `
            <strong>Tips para el éxito:</strong>
            <ul>
                <li>Usa Radical Candor: desafía directamente cuidando a la persona.</li>
                <li>Habla de comportamientos y métricas, no de personalidad.</li>
                <li>Escucha el 70% del tiempo.</li>
                <li>Co-creen un Plan de Acción juntos.</li>
            </ul>
            <div class="options-container">
                <button class="option-btn" onclick="location.reload()">Evaluar a otro colaborador</button>
            </div>`);
    }, 600);
}

window.onload = initChat;