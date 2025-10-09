// ===================== DATOS POR ESCUELA =====================
// Definí aquí las 4 escuelas. Cambia los valores por los reales de cada escuela.
const CUOTAS_POR_ESCUELA = {
    'Inicial': {
        'MARZO': { 'COMPLETO': 69030, 'BECA 50%': 41385.55, 'BECA 25%': 55207.79, 'BECA 100%': 13741.11, 'BECA 75%': 27563.32 },
        'ABRIL': { 'COMPLETO': 70940, 'BECA 50%': 42506.66, 'BECA 25%': 56723.34, 'BECA 100%': 14073.34, 'BECA 75%': 28290 },
        'MAYO': { 'COMPLETO': 70940, 'BECA 50%': 42506.66, 'BECA 25%': 56723.34, 'BECA 100%': 14073.34, 'BECA 75%': 28290 },
        'JUNIO': { 'COMPLETO': 75410, 'BECA 50%': 45132.24, 'BECA 25%': 60271.11, 'BECA 100%': 14854.46, 'BECA 75%': 29993.35 },
        'JULIO': { 'COMPLETO': 78580, 'BECA 50%': 47035.56, 'BECA 25%': 62807.79, 'BECA 100%': 15491.12, 'BECA 75%': 31263.33 },
        'AGOSTO': { 'COMPLETO': 78580, 'BECA 50%': 47035.56, 'BECA 25%': 62807.79, 'BECA 100%': 15491.12, 'BECA 75%': 31263.33 },
        'SEPTIEMBRE': { 'COMPLETO': 80710, 'BECA 50%': 48287.78, 'BECA 25%': 64498.89, 'BECA 100%': 15865.56, 'BECA 75%': 32076.67 },
        'OCTUBRE': { 'COMPLETO': 82890, 'BECA 50%': 49567.77, 'BECA 25%': 66228.89, 'BECA 100%': 16245.56, 'BECA 75%': 32906.67 },
        'NOVIEMBRE': { 'COMPLETO': 0, 'BECA 50%': 0, 'BECA 25%': 0, 'BECA 100%': 0, 'BECA 75%': 0 }
    },
    'SecundariaMB': {
        'MARZO': { 'COMPLETO': 75890, 'BECA 50%': 45412.23, 'BECA 25%': 60651.12, 'BECA 100%': 14934.46, 'BECA 75%': 30173.34 },
        'ABRIL': { 'COMPLETO': 77970, 'BECA 50%': 46636.66, 'BECA 25%': 62303.34, 'BECA 100%': 15303.34, 'BECA 75%': 30970 },
        'MAYO': { 'COMPLETO': 77970, 'BECA 50%': 46636.66, 'BECA 25%': 62303.34, 'BECA 100%': 15303.34, 'BECA 75%': 30970 },
        'JUNIO': { 'COMPLETO': 82900, 'BECA 50%': 49533.34, 'BECA 25%': 66216.67, 'BECA 100%': 16166.68, 'BECA 75%': 32850.01 },
        'JULIO': { 'COMPLETO': 86390, 'BECA 50%': 51623.34, 'BECA 25%': 69006.67, 'BECA 100%': 16856.68, 'BECA 75%': 34240.01 },
        'AGOSTO': { 'COMPLETO': 86390, 'BECA 50%': 51623.34, 'BECA 25%': 69006.67, 'BECA 100%': 16856.68, 'BECA 75%': 34240.01 },
        'SEPTIEMBRE': { 'COMPLETO': 88730, 'BECA 50%': 52996.66, 'BECA 25%': 70863.34, 'BECA 100%': 17263.34, 'BECA 75%': 35130 },
        'OCTUBRE': { 'COMPLETO': 91160, 'BECA 50%': 54426.66, 'BECA 25%': 72793.34, 'BECA 100%': 17693.34, 'BECA 75%': 36060 },
        'NOVIEMBRE': { 'COMPLETO': 0, 'BECA 50%': 0, 'BECA 25%': 0, 'BECA 100%': 0, 'BECA 75%': 0 }
    },
    'Tecnica': {
        'MARZO': { 'COMPLETO': 78610, 'BECA 50%': 47010.01, 'BECA 25%': 62810, 'BECA 100%': 15410.01, 'BECA 75%': 31210.01 },
        'ABRIL': { 'COMPLETO': 80820, 'BECA 50%': 48309.99, 'BECA 25%': 64565, 'BECA 100%': 15800, 'BECA 75%': 32055 },
        'MAYO': { 'COMPLETO': 80820, 'BECA 50%': 48309.99, 'BECA 25%': 64565, 'BECA 100%': 15800, 'BECA 75%': 32055 },
        'JUNIO': { 'COMPLETO': 85930, 'BECA 50%': 51310.01, 'BECA 25%': 68620.02, 'BECA 100%': 16690.02, 'BECA 75%': 34000.01 },
        'JULIO': { 'COMPLETO': 89550, 'BECA 50%': 53480.01, 'BECA 25%': 71515, 'BECA 100%': 17410.01, 'BECA 75%': 35445.01 },
        'AGOSTO': { 'COMPLETO': 89550, 'BECA 50%': 53480.01, 'BECA 25%': 71515, 'BECA 100%': 17410.01, 'BECA 75%': 35445.01 },
        'SEPTIEMBRE': { 'COMPLETO': 91970, 'BECA 50%': 54900.02, 'BECA 25%': 73435, 'BECA 100%': 17830.02, 'BECA 75%': 36365.02 },
        'OCTUBRE': { 'COMPLETO': 94470, 'BECA 50%': 56370.01, 'BECA 25%': 75420.01, 'BECA 100%': 18270.01, 'BECA 75%': 37320.01 },
        'NOVIEMBRE': { 'COMPLETO': 0, 'BECA 50%': 0, 'BECA 25%': 0, 'BECA 100%': 0, 'BECA 75%': 0 }
    },
    'Superior': {
        'MARZO': { 'COMPLETO': 69570, 'BECA 50%': 41702.23, 'BECA 25%': 55636.11, 'BECA 100%': 13834.45, 'BECA 75%': 27768.34 },
        'ABRIL': { 'COMPLETO': 71490, 'BECA 50%': 42828.89, 'BECA 25%': 57159.45, 'BECA 100%': 14167.78, 'BECA 75%': 28498.33 },
        'MAYO': { 'COMPLETO': 71490, 'BECA 50%': 42828.89, 'BECA 25%': 57159.45, 'BECA 100%': 14167.78, 'BECA 75%': 28498.33 },
        'JUNIO': { 'COMPLETO': 76000, 'BECA 50%': 45480, 'BECA 25%': 60740, 'BECA 100%': 14960, 'BECA 75%': 30220 },
        'JULIO': { 'COMPLETO': 79190, 'BECA 50%': 47394.44, 'BECA 25%': 63292.22, 'BECA 100%': 15598.89, 'BECA 75%': 31496.67 },
        'AGOSTO': { 'COMPLETO': 79190, 'BECA 50%': 47394.44, 'BECA 25%': 63292.22, 'BECA 100%': 15598.89, 'BECA 75%': 31496.67 },
        'SEPTIEMBRE': { 'COMPLETO': 81340, 'BECA 50%': 48657.79, 'BECA 25%': 64998.89, 'BECA 100%': 15975.57, 'BECA 75%': 32316.68 },
        'OCTUBRE': { 'COMPLETO': 83560, 'BECA 50%': 49960.78, 'BECA 25%': 66760.39, 'BECA 100%': 16361.57, 'BECA 75%': 33161.18 },
        'NOVIEMBRE': { 'COMPLETO': 0, 'BECA 50%': 0, 'BECA 25%': 0, 'BECA 100%': 0, 'BECA 75%': 0 }
    }
};

const INTERESES_PERIODS = [
    { mes: 'MARZO', rate: 0 },
    { mes: 'ABRIL', rate: 0 },
    { mes: 'MAYO', rate: 0.04 },
    { mes: 'JUNIO', rate: 0.04 },
    { mes: 'JULIO', rate: 0.0275 },
    { mes: 'AGOSTO', rate: 0.0275 },
    { mes: 'SEPTIEMBRE', rate: 0.0275 },
    { mes: 'OCTUBRE', rate: 0.0275 },
    { mes: 'NOVIEMBRE', rate: 0.0275 }
];

const MESES_NOMBRES = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

// ESCUELA ACTIVA por defecto
let escuelaActiva = 'Inicial';

// ===================== HELPERS =====================
function formatoMoneda(num) {
    return Number(num).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getUltimoDiaDelMes(mesCuota, año = 2025) {
    const mesesMap = {
        'ENERO': 0, 'FEBRERO': 1, 'MARZO': 2, 'ABRIL': 3, 'MAYO': 4, 'JUNIO': 5,
        'JULIO': 6, 'AGOSTO': 7, 'SEPTIEMBRE': 8, 'OCTUBRE': 9, 'NOVIEMBRE': 10, 'DICIEMBRE': 11
    };
    const monthIndex = mesesMap[mesCuota];
    return new Date(año, monthIndex + 1, 0); // último día del mes
}

function parseFechaInput(dateStr) {
    if (!dateStr) return new Date(NaN);
    const parts = dateStr.split('-');
    if (parts.length !== 3) return new Date(dateStr);
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    const d = parseInt(parts[2], 10);
    return new Date(y, m - 1, d);
}

function formatoFechaDDMMYYYY(d) {
    if (!d || isNaN(d)) return '';
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

// ===================== TAB Y SELECCIÓN DE ESCUELA =====================
function inicializarTabs() {
    const tabs = document.querySelectorAll('#tabsEscuelas .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const esc = tab.dataset.escuela;
            setEscuelaActiva(esc);
            // update visual active
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

function setEscuelaActiva(escuelaId) {
    if (!CUOTAS_POR_ESCUELA[escuelaId]) {
        console.warn('Escuela no encontrada:', escuelaId);
        return;
    }
    escuelaActiva = escuelaId;
    // Actualizar títulos y tabla
    const titulo = document.getElementById('tituloEscuela');
    const labelTabla = document.getElementById('labelEscuelaTabla');
    const displayName = escuelaId === 'Inicial' ? 'Inicial / Primaria' :
        escuelaId === 'SecundariaMB' ? 'Secundaria MB' :
            escuelaId === 'Tecnica' ? 'Técnica' : 'Superior';
    titulo.textContent = `Escuela: ${displayName}`;
    labelTabla.textContent = displayName;
    generarTablaCuotas();
    // limpiar resultado y form (opcional)
    resetearFormulario();
}

// ===================== TABLA DE CUOTAS (usa escuelaActiva) =====================
function generarTablaCuotas() {
    const tablaContainer = document.getElementById('tablaCuotas');
    const CUOTAS_BASE = CUOTAS_POR_ESCUELA[escuelaActiva];
    let html = `<div class="table-container"><table class="tabla-cuotas">
        <thead><tr>
        <th>Mes</th><th>Vencimiento</th><th>Completo</th><th>Beca 50%</th><th>Beca 25%</th><th>Beca 75%</th><th>Beca 100%</th>
        </tr></thead><tbody>`;
    for (const mes of Object.keys(CUOTAS_BASE)) {
        const c = CUOTAS_BASE[mes];
        const venc = getUltimoDiaDelMes(mes);
        const vencTxt = formatoFechaDDMMYYYY(venc);
        html += `<tr>
            <td>${mes}</td>
            <td>${vencTxt}</td>
            <td>$${formatoMoneda(c['COMPLETO'])}</td>
            <td>$${formatoMoneda(c['BECA 50%'])}</td>
            <td>$${formatoMoneda(c['BECA 25%'])}</td>
            <td>$${formatoMoneda(c['BECA 75%'])}</td>
            <td>$${formatoMoneda(c['BECA 100%'])}</td>
        </tr>`;
    }
    html += `</tbody></table></div>`;
    tablaContainer.innerHTML = html;
}

// ===================== CÁLCULO DE INTERESES (usa escuelaActiva) =====================
function calcularInteresesAcumulados(mesCuota, tipoBeca, fechaPagoStr) {
    const CUOTAS_BASE = CUOTAS_POR_ESCUELA[escuelaActiva];
    const valorBase = CUOTAS_BASE?.[mesCuota]?.[tipoBeca];
    if (valorBase === undefined) return { error: 'No existe la cuota seleccionada para esta escuela', total: 0, detalle: [] };
    if (valorBase === 0) return { error: null, total: 0, detalle: [] };

    const fechaPago = parseFechaInput(fechaPagoStr);
    if (isNaN(fechaPago)) return { error: 'Fecha de pago inválida', total: 0, detalle: [] };

    const vencimientoOriginal = getUltimoDiaDelMes(mesCuota, 2025);
    const fechaInicioInteres = new Date(vencimientoOriginal.getFullYear(), vencimientoOriginal.getMonth() + 2, 1);

    if (fechaPago < fechaInicioInteres) {
        return { error: null, total: Number(valorBase.toFixed(2)), detalle: [], valorBase: Number(valorBase), fechaInicioInteres };
    }

    const diffMonths = (fechaPago.getFullYear() - fechaInicioInteres.getFullYear()) * 12 + (fechaPago.getMonth() - fechaInicioInteres.getMonth());
    const mesesAPagar = diffMonths + 1;
    let detalle = [];
    let sumaIntereses = 0;

    for (let k = 0; k < mesesAPagar; k++) {
        const periodoDate = new Date(fechaInicioInteres.getFullYear(), fechaInicioInteres.getMonth() + k, 1);
        const mesName = MESES_NOMBRES[periodoDate.getMonth()];

        const periodo = INTERESES_PERIODS.find(p => p.mes === mesName);
        const rate = periodo ? periodo.rate : 0;
        const montoInteres = Number((valorBase * rate).toFixed(2));
        sumaIntereses += montoInteres;
        detalle.push({
            periodo: mesName,
            tasa: (rate * 100).toFixed(2) + '%',
            monto: montoInteres
        });
    }

    const total = Number((valorBase + sumaIntereses).toFixed(2));
    return { error: null, total, detalle, valorBase: Number(valorBase), fechaInicioInteres, mesesAPagar };
}

// ===================== MOSTRAR RESULTADO (incluye TOTAL intereses) =====================
function mostrarResultadoEnPantalla(resultadoObj, mesCuota, tipoBeca) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    if (resultadoObj.error) {
        resultadoDiv.innerHTML = `<div class="sin-interes"><p style="color:#7a1221">${resultadoObj.error}</p></div>`;
        return;
    }

    const { total, detalle, valorBase, fechaInicioInteres } = resultadoObj;
    const totalIntereses = detalle.reduce((acc, d) => acc + Number(d.monto || 0), 0);

    let html = `
        <div class="result-grid">
            <div class="result-card">
                <h4>Valor Original (${mesCuota})</h4>
                <div class="valor">$${formatoMoneda(valorBase)}</div>
            </div>
            <div class="result-card">
                <h4>Intereses Aplicados</h4>
                <div class="valor">${detalle.length}</div>
            </div>
            <div class="result-card total">
                <h4>Total a Pagar</h4>
                <div class="valor">$${formatoMoneda(total)}</div>
            </div>
        </div>
    `;

    if (detalle.length > 0) {
        html += `
        <div class="detalle-calculo">
            <h4>Detalle de Intereses</h4>
            <ul>
                ${detalle.map(d => `<li><strong>${d.periodo}</strong>: ${d.tasa} → $${formatoMoneda(d.monto)}</li>`).join('')}
            </ul>

            <!-- TOTAL DE INTERESES -->
            <div class="total-intereses">
                Total intereses: $${formatoMoneda(totalIntereses)}
            </div>
        </div>`;
    } else {
        html += `<div class="sin-interes"><p>✅ No se aplica interés. La cuota fue abonada dentro del plazo.</p></div>`;
    }

    resultadoDiv.innerHTML = html;
}

function resetearFormulario() {
    document.getElementById('formCalculo').reset();
    document.getElementById('resultado').style.display = 'none';
}

// ===================== INICIALIZACIÓN =====================
document.addEventListener('DOMContentLoaded', () => {
    inicializarTabs();
    setEscuelaActiva(escuelaActiva); // genera tabla y setea UI por defecto

    const selectMes = document.getElementById('mesCuota');
    const campoVenc = document.getElementById('fechaVencimiento');
    const campoInicioInteres = document.getElementById('fechaInicioInteres');

    selectMes.addEventListener('change', (e) => {
        const mes = e.target.value;
        if (!mes) {
            campoVenc.value = '';
            campoInicioInteres.value = '';
            return;
        }

        const venc = getUltimoDiaDelMes(mes, 2025);
        campoVenc.value = formatoFechaDDMMYYYY(venc);

        const primerDiaInteres = new Date(venc.getFullYear(), venc.getMonth() + 2, 1);
        campoInicioInteres.value = formatoFechaDDMMYYYY(primerDiaInteres);
    });

    const form = document.getElementById('formCalculo');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const mesCuota = document.getElementById('mesCuota').value;
        const tipoBeca = document.getElementById('tipoBeca').value;
        const fechaPagoStr = document.getElementById('fechaPago').value;

        if (!mesCuota || !tipoBeca || !fechaPagoStr) {
            return alert('Por favor complete todos los campos.');
        }

        const resultado = calcularInteresesAcumulados(mesCuota, tipoBeca, fechaPagoStr);
        mostrarResultadoEnPantalla(resultado, mesCuota, tipoBeca);
    });
});
