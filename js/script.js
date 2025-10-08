// ===================== DATOS =====================
const CUOTAS_BASE = {
    'MARZO': { 'COMPLETO': 69030, 'BECA 50%': 41385.55, 'BECA 25%': 55207.79, 'BECA 100%': 13741.11, 'BECA 75%': 27563.32 },
    'ABRIL': { 'COMPLETO': 70940, 'BECA 50%': 42506.66, 'BECA 25%': 56723.34, 'BECA 100%': 14073.34, 'BECA 75%': 28290 },
    'MAYO': { 'COMPLETO': 70940, 'BECA 50%': 42506.66, 'BECA 25%': 56723.34, 'BECA 100%': 14073.34, 'BECA 75%': 28290 },
    'JUNIO': { 'COMPLETO': 75410, 'BECA 50%': 45132.24, 'BECA 25%': 60271.11, 'BECA 100%': 14854.46, 'BECA 75%': 29993.35 },
    'JULIO': { 'COMPLETO': 78580, 'BECA 50%': 47035.56, 'BECA 25%': 62807.79, 'BECA 100%': 15491.12, 'BECA 75%': 31263.33 },
    'AGOSTO': { 'COMPLETO': 78580, 'BECA 50%': 47035.56, 'BECA 25%': 62807.79, 'BECA 100%': 15491.12, 'BECA 75%': 31263.33 },
    'SEPTIEMBRE': { 'COMPLETO': 80710, 'BECA 50%': 48287.78, 'BECA 25%': 64498.89, 'BECA 100%': 15865.56, 'BECA 75%': 32076.67 },
    'OCTUBRE': { 'COMPLETO': 82890, 'BECA 50%': 49567.77, 'BECA 25%': 66228.89, 'BECA 100%': 16245.56, 'BECA 75%': 32906.67 },
    'NOVIEMBRE': { 'COMPLETO': 0, 'BECA 50%': 0, 'BECA 25%': 0, 'BECA 100%': 0, 'BECA 75%': 0 }
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

// Parsear fecha yyyy-mm-dd del input type="date" sin problemas de timezone
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

// ===================== TABLA DE CUOTAS =====================
function generarTablaCuotas() {
    const tablaContainer = document.getElementById('tablaCuotas');
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

// ===================== CÁLCULO DE INTERESES ACUMULADOS =====================
function calcularInteresesAcumulados(mesCuota, tipoBeca, fechaPagoStr) {
    const valorBase = CUOTAS_BASE[mesCuota]?.[tipoBeca];
    if (valorBase === undefined) return { error: 'No existe la cuota seleccionada', total: 0, detalle: [] };
    if (valorBase === 0) return { error: null, total: 0, detalle: [] };

    const fechaPago = parseFechaInput(fechaPagoStr);
    if (isNaN(fechaPago)) return { error: 'Fecha de pago inválida', total: 0, detalle: [] };

    const vencimientoOriginal = getUltimoDiaDelMes(mesCuota, 2025);

    // Fecha a partir de la cual aplica interés: primer día del segundo mes siguiente
    const fechaInicioInteres = new Date(vencimientoOriginal.getFullYear(), vencimientoOriginal.getMonth() + 2, 1);

    // Si paga antes de la fecha de inicio de intereses => 0 intereses
    if (fechaPago < fechaInicioInteres) {
        return { error: null, total: Number(valorBase.toFixed(2)), detalle: [], valorBase: Number(valorBase), fechaInicioInteres };
    }

    // Calcular cuántos meses (periodos) aplicar: contar meses completos desde fechaInicioInteres hasta el mes del pago (inclusivo)
    const diffMonths = (fechaPago.getFullYear() - fechaInicioInteres.getFullYear()) * 12 + (fechaPago.getMonth() - fechaInicioInteres.getMonth());
    const mesesAPagar = diffMonths + 1; // inclusive del mes actual de pago
    let detalle = [];
    let sumaIntereses = 0;

    for (let k = 0; k < mesesAPagar; k++) {
        const periodoDate = new Date(fechaInicioInteres.getFullYear(), fechaInicioInteres.getMonth() + k, 1);
        const mesName = MESES_NOMBRES[periodoDate.getMonth()]; // ej "MAYO"

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

// ===================== MOSTRAR RESULTADO =====================
function mostrarResultadoEnPantalla(resultadoObj, mesCuota, tipoBeca) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    if (resultadoObj.error) {
        resultadoDiv.innerHTML = `<div class="sin-interes"><p style="color:#7a1221">${resultadoObj.error}</p></div>`;
        return;
    }

    const { total, detalle, valorBase, fechaInicioInteres, mesesAPagar } = resultadoObj;

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
    generarTablaCuotas();

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

