const chatContainer = document.getElementById('chat-container');

const rolesData = {
    "1": { 
        title: "Software Engineer (Backend / Frontend)", 
        desc: "Responsable de diseñar, desarrollar, probar y desplegar la arquitectura de software que sostiene la plataforma de LinkedIn, garantizando alta disponibilidad, seguridad y escalabilidad.",
        kpisDetail: [
            { 
                name: "Calidad del Código (Tasa de Defectos)", 
                metrica: "Porcentaje de errores post-despliegue en producción", 
                meta: "< 2%",
                explicacion: "Mide la solidez técnica del trabajo entregado. A través de EPM, el sistema rastrea automáticamente los commits en GitHub/GitLab y los registros de errores en SonarQube para identificar qué porcentaje de código desplegado requirió parches o generó fallas críticas."
            },
            { 
                name: "Velocidad de Entrega (Sprint Velocity)", 
                metrica: "Puntos de historia completados vs. planificados", 
                meta: ">= 90% de cumplimiento",
                explicacion: "Evalúa la capacidad de estimación y productividad del ingeniero. El software EPM monitorea la actividad en Jira y el tiempo efectivo invertido en el entorno de desarrollo (IDE) para verificar el avance constante de las tareas asignadas."
            },
            { 
                name: "Disponibilidad del Servicio (Uptime)", 
                metrica: "Tiempo de actividad continuo de los microservicios a cargo", 
                meta: "99.9%",
                explicacion: "Indica la estabilidad de la infraestructura desarrollada. Los sistemas de monitoreo de red registran la latencia y caídas de servicio en tiempo real, vinculando la responsabilidad directa del rendimiento con el equipo a cargo."
            }
        ]
    },
    "2": { 
        title: "Customer Success Manager (CSM)", 
        desc: "Gestiona la relación estratégica con clientes corporativos para asegurar la adopción continua de las soluciones de LinkedIn (Talent & Marketing Solutions) y maximizar la retención de cuentas.",
        kpisDetail: [
            { 
                name: "Tasa de Retención Neta (NRR)", 
                metrica: "Porcentaje de ingresos recurrentes retenidos y expandidos", 
                meta: "> 110%",
                explicacion: "Refleja la capacidad de mantener y hacer crecer el valor de la cartera de clientes. El sistema EPM sincroniza la actividad en Salesforce y registra los contratos renovados o ampliados electrónicamente."
            },
            { 
                name: "Nivel de Adopción de Plataforma (Health Score)", 
                metrica: "Índice de uso activo de la plataforma por parte del cliente", 
                meta: "> 85/100 puntos",
                explicacion: "Identifica si el cliente está usando las herramientas contratadas. El monitoreo EPM rastrea la frecuencia con la que el CSM interactúa con las cuentas de bajo uso para aplicar estrategias preventivas de rescate."
            },
            { 
                name: "Satisfacción del Cliente (NPS)", 
                metrica: "Puntuación de recomendación en encuestas automatizadas", 
                meta: "> 40 puntos",
                explicacion: "Mide la percepción de valor del cliente. Tras cada interacción virtual o revisión trimestral registrada en el sistema de llamadas, la plataforma EPM dispara encuestas automáticas de satisfacción."
            }
        ]
    },
    "3": { 
        title: "Talent Acquisition Specialist", 
        desc: "Lidera los procesos de atracción, evaluación, selección y contratación del mejor talento del mercado internacional para cubrir las vacantes estratégicas de la empresa.",
        kpisDetail: [
            { 
                name: "Tiempo de Cobertura (Time-to-Hire)", 
                metrica: "Días transcurridos desde la publicación hasta la aceptación de la oferta", 
                meta: "< 45 días",
                explicacion: "Evalúa la agilidad del reclutador. El sistema EPM rastrea las etapas del candidato dentro del sistema ATS (Applicant Tracking System), contabilizando los días exactos en cada fase del embudo."
            },
            { 
                name: "Calidad de Contratación (Quality-of-Hire)", 
                metrica: "Retención y evaluación de desempeño del contratado a los 6 meses", 
                meta: "> 95%",
                explicacion: "Verifica que las contrataciones sean sostenibles y acertadas. EPM cruza la información de contratación con los resultados de la primera evaluación de desempeño del nuevo empleado en Workday."
            },
            { 
                name: "Efectividad de Oferta (Offer Acceptance Rate)", 
                metrica: "Porcentaje de ofertas laborales aceptadas por los candidatos", 
                meta: "> 85%",
                explicacion: "Mide la competitividad del proceso y la capacidad de negociación del reclutador al presentar propuestas económicas finales registradas en el sistema de RRHH."
            }
        ]
    },
    "4": { 
        title: "B2B Sales Executive", 
        desc: "Encargado de la prospección, negociación y cierre de nuevos negocios con clientes corporativos para la venta de licencias y soluciones empresariales de LinkedIn.",
        kpisDetail: [
            { 
                name: "Cumplimiento de Cuota (Quota Attainment)", 
                metrica: "Monto total de ventas cerradas vs. cuota asignada (ARR)", 
                meta: "100% de la cuota trimestral",
                explicacion: "El indicador clave de ingresos. El monitoreo de Salesforce registra automáticamente cada oportunidad ganada y contrasta el volumen de ventas en tiempo real con la cuota establecida."
            },
            { 
                name: "Tasa de Cierre (Win Rate)", 
                metrica: "Porcentaje de oportunidades calificadas que se convierten en contrato", 
                meta: "> 25%",
                explicacion: "Determina la eficiencia comercial en las negociaciones. EPM monitorea el pipeline de ventas registrando el avance, estancamiento o pérdida de cada oportunidad en el sistema CRM."
            },
            { 
                name: "Actividad de Prospección Efectiva", 
                metrica: "Número de reuniones ejecutivas y demostraciones realizadas", 
                meta: "> 20 reuniones al mes",
                explicacion: "Evalúa la disciplina de ventas. Mediante la integración de agendas electrónicas y telefonía IP, EPM audita automáticamente el volumen de interacciones comerciales sostenidas."
            }
        ]
    },
    "5": { 
        title: "Data Scientist / Machine Learning Engineer", 
        desc: "Diseña, entrena y optimiza algoritmos predictivos para enriquecer las recomendaciones del feed, la búsqueda de empleo y los productos publicitarios.",
        kpisDetail: [
            { 
                name: "Precisión del Modelo (F1-Score / Accuracy)", 
                metrica: "Métrica de exactitud técnica del algoritmo en entorno de producción", 
                meta: "> 90%",
                explicacion: "Asegura que los modelos matemáticos entreguen predicciones confiables. El sistema EPM monitorea la tasa de falsos positivos/negativos que registra la plataforma durante pruebas A/B en vivo."
            },
            { 
                name: "Impacto Operativo en Producto", 
                metrica: "Porcentaje de incremento en la métrica objetivo (ej. Click-Through Rate)", 
                meta: "+ 5% trimestral",
                explicacion: "Conecta el desarrollo técnico con el impacto en el negocio. Los dashboards de telemetría miden cómo el nuevo algoritmo afectó el comportamiento real de los usuarios en la plataforma."
            },
            { 
                name: "Eficiencia de Cómputo (Pipeline Optimization)", 
                metrica: "Reducción del tiempo y costo de procesamiento de datos masivos", 
                meta: "Reducción del 10% en uso de servidor",
                explicacion: "Monitorea la optimización de recursos. EPM recopila registros de consumo en la nube (AWS/Azure) para auditar la eficiencia computacional del código desarrollado."
            }
        ]
    },
    "6": { 
        title: "Product Manager", 
        desc: "Define la visión, estrategia de producto y hoja de ruta (Roadmap), colaborando transversalmente con ingeniería, diseño y marketing para lanzar soluciones al mercado.",
        kpisDetail: [
            { 
                name: "Adopción de Nuevas Funciones", 
                metrica: "Porcentaje de usuarios activos (MAU) interactuando con la función a los 30 días", 
                meta: "> 30%",
                explicacion: "Determina si el mercado valoró la funcionalidad lanzada. La analítica integrada de la plataforma registra la tasa de uso de cada botón o sección lanzada por el equipo del PM."
            },
            { 
                name: "Velocidad de Cumplimiento de Roadmap", 
                metrica: "Porcentaje de épicas y proyectos entregados en la fecha comprometida", 
                meta: "85% on-time",
                explicacion: "Evalúa la capacidad de gestión de proyectos y priorización. EPM analiza la brecha temporal entre las fechas estimadas en el plan inicial y las fechas reales de lanzamiento registradas en Jira."
            },
            { 
                name: "Retención del Usuario (Retention Impact)", 
                metrica: "Tasa de retorno de usuarios que interactúan con la solución", 
                meta: "> 60% a 90 días",
                explicacion: "Mide si el producto aporta valor a largo plazo. Las métricas del sistema rastrean si los usuarios continúan utilizando la herramienta semanas después de su descubrimiento."
            }
        ]
    },
    "7": { 
        title: "UX Designer", 
        desc: "Investiga, conceptualiza y diseña experiencias de usuario óptimas, accesibles e intuitivas que eliminen la fricción en la navegación dentro de la plataforma.",
        kpisDetail: [
            { 
                name: "Índice de Usabilidad del Sistema (SUS)", 
                metrica: "Calificación estandarizada obtenida en pruebas de usabilidad", 
                meta: "> 80 / 100 puntos",
                explicacion: "Evalúa la facilidad de uso. A través de software de pruebas remotas monitoreadas, se registran las calificaciones que otorgan los usuarios reales tras realizar tareas específicas."
            },
            { 
                name: "Tasa de Éxito de Tarea (Task Completion Rate)", 
                metrica: "Porcentaje de usuarios que completan un flujo sin cometer errores o abandonar", 
                meta: "> 90%",
                explicacion: "Mide la efectividad del diseño. Las herramientas de mapas de calor y analítica de clics (EPM) registran si el usuario encuentra el flujo intuitivo o abandona la pantalla."
            },
            { 
                name: "Eficiencia de Navegación (Time on Task)", 
                metrica: "Tiempo promedio requeridos para completar un proceso clave (ej. publicar empleo)", 
                meta: "Reducción del 15% en tiempo",
                explicacion: "Verifica la eliminación de pasos innecesarios. El sistema monitorea el tiempo en segundos que le toma a un usuario promedio ir desde el inicio hasta la confirmación de la acción."
            }
        ]
    },
    "8": { 
        title: "Technical Support Engineer", 
        desc: "Proporciona soporte técnico avanzado de segundo o tercer nivel para resolver incidencias críticas escaladas por clientes corporativos.",
        kpisDetail: [
            { 
                name: "Tiempo de Primera Respuesta (SLA)", 
                metrica: "Minutos transcurridos hasta la primera atención de un ticket crítico", 
                meta: "< 30 minutos",
                explicacion: "Garantiza rapidez ante emergencias. La plataforma de ticketing (Zendesk/ServiceNow) registra electrónicamente la hora exacta de ingreso del caso y el sello de tiempo de la primera respuesta enviada."
            },
            { 
                name: "Resolución en Primer Contacto (FCR)", 
                metrica: "Porcentaje de casos resueltos sin necesidad de reescalar a ingeniería", 
                meta: "> 75%",
                explicacion: "Mide la solvencia técnica del ingeniero. El sistema audita si la incidencia fue marcada como resuelta en la primera interacción o si requirió transferencias adicionales."
            },
            { 
                name: "Satisfacción Post-Soporte (CSAT)", 
                metrica: "Promedio de calificación otorgado por el cliente al cerrar el caso", 
                meta: "> 4.8 / 5.0",
                explicacion: "Refleja la calidad del trato y la solución ofrecida. EPM envía y recopila la evaluación inmediata de 1 a 5 estrellas al momento de dar por cerrado cada ticket."
            }
        ]
    },
    "9": { 
        title: "Content Marketing Manager", 
        desc: "Planifica, produce y distribuye contenidos educativos e informativos estratégicos para posicionar la marca y captar clientes potenciales.",
        kpisDetail: [
            { 
                name: "Crecimiento de Tráfico Orgánico", 
                metrica: "Porcentaje de incremento en visitantes únicos a la sección de noticias/recursos", 
                meta: "+ 15% trimestral",
                explicacion: "Mide la atracción de audiencia. Las herramientas de analítica web registran el origen de los usuarios, contabilizando el tráfico generado sin inversión en pauta pagada."
            },
            { 
                name: "Generación de Leads Calificados (MQLs)", 
                metrica: "Volumen de contactos corporativos que descargan recursos y cumplen perfil", 
                meta: "> 200 leads al mes",
                explicacion: "Mide la conversión comercial del contenido. La plataforma de automatización de marketing (HubSpot/Marketo) registra los formularios llenados y califica el perfil del usuario."
            },
            { 
                name: "Tiempo de Permanencia y Lectura (Engagement Rate)", 
                metrica: "Tiempo promedio de lectura efectiva por artículo publicado", 
                meta: "> 2:30 minutos",
                explicacion: "Verifica la relevancia del material. El monitoreo digital mide el desplazamiento (scroll) y tiempo activo en pantalla para comprobar que el contenido se leyó realmente."
            }
        ]
    },
    "10": { 
        title: "Financial Analyst", 
        desc: "Monitorea la salud financiera de las unidades de negocio, realiza proyecciones presupuestales y proporciona análisis costo-beneficio para decisiones directivas.",
        kpisDetail: [
            { 
                name: "Precisión del Pronóstico Financiero (Variance Rate)", 
                metrica: "Porcentaje de desviación entre el presupuesto proyectado y el gasto real", 
                meta: "< 5% de varianza",
                explicacion: "Mide la exactitud de los modelos financieros. El sistema ERP (SAP/Oracle) contrasta automáticamente al final de cada trimestre la brecha presupuestaria acumulada."
            },
            { 
                name: "Velocidad de Cierre Mensual", 
                metrica: "Días hábiles requeridos para consolidar y conciliar los estados financieros", 
                meta: "< 4 días hábiles",
                explicacion: "Evalúa la eficiencia operativa. EPM registra los sellos de tiempo cuando se completan las conciliaciones bancarias y asientos contables de cada módulo."
            },
            { 
                name: "Identificación de Oportunidades de Ahorro", 
                metrica: "Monto en dólares de eficiencias operativas identificadas y validadas", 
                meta: "2% de reducción en OPEX",
                explicacion: "Demuestra visión analítica proactiva. Se auditan las propuestas presentadas por el analista que fueron aprobadas para reducir costos no esenciales en las operaciones."
            }
        ]
    }
};

function addMessage(type, htmlContent) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}-msg`;
    msgDiv.innerHTML = htmlContent;
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function initChat() {
    addMessage('bot', `<strong>¡Bienvenido al Capacitador de Líderes de LinkedIn!</strong><br><br>Este asistente interactivo ha sido diseñado para guiar a los mandos medios en el proceso de evaluación de desempeño de sus colaboradores, apoyándose en la metodología <strong>EPM (Electronic Performance Monitoring)</strong> y en técnicas efectivas de retroalimentación.<br><br>Para comenzar con el tutor personalizado, <strong>selecciona el puesto del colaborador que vas a evaluar:</strong>`);
    
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

    addMessage('user', `Deseo evaluar al puesto de: ${roleTitle}`);
    
    const role = rolesData[roleId];
    setTimeout(() => {
        let tableRows = role.kpisDetail.map(k => `<tr><td><strong>${k.name}</strong></td><td>${k.metrica}</td><td><strong>${k.meta}</strong></td></tr>`).join('');
        
        let kpiExplanations = role.kpisDetail.map((k, index) => `
            <p style="margin-bottom: 8px;"><strong>${index + 1}. ${k.name}:</strong> ${k.explicacion}</p>
        `).join('');

        let response = `
            <h3 style="margin-top:0; color:#0a66c2;">Paso 1: Definición del Puesto</h3>
            <strong>Puesto: ${role.title}</strong><br>
            <p>${role.desc}</p>

            <h3 style="color:#0a66c2;">Paso 2: Tablero de KPIs e Integración con EPM</h3>
            <p>A continuación se presentan los indicadores de desempeño clave que el sistema extrae para este puesto:</p>
            
            <table>
                <tr><th>KPI</th><th>Métrica de Medición</th><th>Meta Esperada</th></tr>
                ${tableRows}
            </table><br>

            <strong>Análisis Detallado de los KPIs y su Obtención vía EPM:</strong>
            ${kpiExplanations}

            <div style="background-color: #f8f9fa; padding: 12px; border-left: 4px solid #0a66c2; margin-top: 15px; border-radius: 4px;">
                <strong>¿Cómo funciona el Sistema EPM (Electronic Performance Monitoring) en LinkedIn?</strong><br>
                El EPM es una técnica basada en el uso de redes tecnológicas y software interno para monitorear la actividad en las computadoras de los subordinados. Registra marcas de tiempo, avance de tickets, líneas de código, uso de aplicaciones corporativas y tiempos de respuesta.<br><br>
                <strong>Beneficios para el Líder:</strong>
                <ol style="margin-bottom:0; padding-left:20px;">
                    <li><strong>Datos 100% Objetivos:</strong> Elimina el favoritismo. La evaluación se basa en evidencias digitales registradas en el servidor.</li>
                    <li><strong>Detección Oportuna de Cuellos de Botella:</strong> Permite ver si el colaborador está estancado en una aplicación específica o requiere capacitación.</li>
                    <li><strong>Alineación Estratégica:</strong> Demuestra cómo las horas de trabajo activo en la computadora impactan directamente en los objetivos globales de LinkedIn.</li>
                </ol>
            </div>

            <div class="options-container">
                <button class="option-btn" onclick="showPlanning()">Paso 3: Ver cómo planear la entrevista de retroalimentación</button>
            </div>`;
        addMessage('bot', response);
    }, 600);
}

function showPlanning() {
    const oldOptions = document.querySelectorAll('.options-container');
    if(oldOptions.length > 0) oldOptions[oldOptions.length - 1].remove();

    addMessage('user', `¿Cómo debo estructurar y planear la entrevista de retroalimentación?`);
    
    setTimeout(() => {
        addMessage('bot', `
            <h3 style="margin-top:0; color:#0a66c2;">Paso 3: Planeación de la Entrevista de Retroalimentación</h3>
            <p>Una sesión exitosa requiere una preparación minuciosa. Sigue este protocolo estructurado antes de reunirte con el colaborador:</p>
            
            <ol>
                <li><strong>Auditoría Exhaustiva del Tablero EPM:</strong> 
                    <br>Antes de la sesión, revisa las métricas de los últimos 3 meses. Analiza no solo la cifra final, sino la tendencia semanal (ej. picos de productividad, caídas repentinas en tiempos de respuesta). Conoce los datos mejor que el colaborador.
                </li><br>
                <li><strong>Recopilación de Contexto Cualitativo:</strong> 
                    <br>El EPM te da el <em>'qué'</em> (las métricas electrónicas), pero tú como líder debes investigar el <em>'porqué'</em>. Consulta si hubo caídas de servidor, cambios de requerimientos a última hora o problemas de salud que justificaran variaciones en las métricas.
                </li><br>
                <li><strong>Convocatoria Transparente y Anticipada:</strong> 
                    <br>Agenda la junta 1:1 con al menos 1 semana de anticipación. En la invitación, adjunta el reporte EPM que van a revisar. Nunca convoques a una sesión de retroalimentación de sorpresa; eso genera ansiedad y actitud defensiva.
                </li><br>
                <li><strong>Garantía de Seguridad Psicológica y Entorno:</strong> 
                    <br>Reserva una sala privada libre de miradas de terceros o asegura una sesión virtual con cámara encendida sin distracciones. Desactiva las notificaciones de Slack, correo y celular durante toda la hora.
                </li><br>
                <li><strong>Diseño de Preguntas Abiertas de Indagación:</strong> 
                    <br>Prepara al menos 3 preguntas que inviten a la reflexión, por ejemplo: 
                    <em>"¿Qué factores del entorno digital te ayudaron o frenaron para alcanzar la meta del KPI #1?"</em> o 
                    <em>"¿Cómo sientes que el monitoreo electrónico refleja tu esfuerzo diario?"</em>
                </li>
            </ol>

            <div class="options-container">
                <button class="option-btn" onclick="showTips()">Paso 4: Ver tips para una retroalimentación y resolución de conflictos exitosa</button>
            </div>`);
    }, 600);
}

function showTips() {
    const oldOptions = document.querySelectorAll('.options-container');
    if(oldOptions.length > 0) oldOptions[oldOptions.length - 1].remove();

    addMessage('user', `¿Qué tips me das para llevar a cabo la sesión y resolver posibles conflictos?`);
    
    setTimeout(() => {
        addMessage('bot', `
            <h3 style="margin-top:0; color:#0a66c2;">Paso 4: Tips para una Retroalimentación Exitosa y Manejo de Conflictos</h3>
            <p>Durante la conversación, el monitoreo electrónico puede generar tensión si el colaborador siente que es "vigilado". Aplica las siguientes técnicas de liderazgo para convertir el conflicto en un diálogo constructivo:</p>

            <ul>
                <li><strong>Técnica "Conectar antes de Corregir" (Manejo de Conflictos):</strong>
                    <br>Si el colaborador llega a la defensiva cuestionando los datos del EPM, no te enganches en una discusión técnica. Valida sus emociones primero diciendo: <em>"Entiendo que ver estas métricas pueda ser estresante. Mi objetivo no es vigilarte, sino entender qué obstáculos tuviste para ayudarte a superarlos."</em>
                </li><br>
                <li><strong>Aplicación de Radical Candor (Franqueza Radical):</strong>
                    <br>Combina la empatía personal con el desafío directo. Sé transparente sobre las métricas no alcanzadas, pero deja claro que tu intención es apoyarlo en su crecimiento profesional dentro de LinkedIn.
                </li><br>
                <li><strong>Separar la Identidad del Comportamiento:</strong>
                    <br>Nunca uses etiquetas personales ("Eres lento", "Eres descuidado"). Apóyate en el tablero EPM para hablar exclusivamente de hechos objetivos e impersonales: <em>"El registro del sistema muestra que el tiempo de respuesta promedio fue de 45 minutos, cuando la meta es de 30."</em>
                </li><br>
                <li><strong>La Regla de Oro 70/30 (Escucha Activa):</strong>
                    <br>Habla solo el 30% del tiempo (para presentar datos y hacer preguntas) y escucha el 70% restante. Permite que el colaborador explique las causas raíz de sus métricas sin interrumpirlo.
                </li><br>
                <li><strong>Enfoque en 'Feed-forward' y Co-creación de Soluciones:</strong>
                    <br>No dediquen la reunión a culpar al pasado. Dediquen los últimos 15 minutos a acordar un Plan de Acción concreto (IDP) para los próximos 90 días, estableciendo compromisos mutuos (capacitación, nuevas herramientas, ajustes de flujo).
                </li>
            </ul>

            <div style="background-color: #e6f4ea; color: #0d652d; padding: 12px; border-radius: 4px; margin-top: 15px;">
                <strong>¡Felicidades! Has completado el tutorial de capacitación EPM para líderes.</strong><br>
                Ahora cuentas con la estructura completa para evaluar, medir y retroalimentar a tu equipo de manera justa, objetiva e inspiradora.
            </div>

            <div class="options-container">
                <button class="option-btn" onclick="location.reload()">Evaluar a otro colaborador (Reiniciar)</button>
            </div>`);
    }, 600);
}

window.onload = initChat;
