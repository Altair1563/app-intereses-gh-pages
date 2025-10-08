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
    { mes: 'MARZO', rate: 0.04 },
    { mes: 'ABRIL', rate: 0.04 },
    { mes: 'MAYO', rate: 0.0275 },
    { mes: 'JUNIO', rate: 0.0275 },
    { mes: 'JULIO', rate: 0.0275 },
    { mes: 'AGOSTO', rate: 0.0275 },
    { mes: 'SEPTIEMBRE', rate: 0.0275 },
    { mes: 'OCTUBRE', rate: 0.0275 },
    { mes: 'NOVIEMBRE', rate: 0.0275 }
];

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

// ===================== TABLA DE CUOTAS =====================
function generarTablaCuotas() {
    const tablaContainer = document.getElementById('tablaCuotas');
    let html = `<div class="table-container"><table class="tabla-cuotas">
        <thead><tr>
        <th>Mes</th><th>Vencimiento</th><th>Completo</th><th>Beca 50%</th><th>Beca 25%</th><th>Beca 75%</th><th>Beca 100%</th>
        </tr></thead><tbody>`;
    for (const mes in CUOTAS_BASE) {
        const c = CUOTAS_BASE[mes];
        const venc = getUltimoDiaDelMes(mes);
        const dd = String(venc.getDate()).padStart(2, '0');
        const mm = String(venc.getMonth() + 1).padStart(2, '0');
        const yyyy = venc.getFullYear();
        const vencTxt = `${dd}/${mm}/${yyyy}`;
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

// ===================== CÁLCULO DE INTERESES =====================
function calcularInteresesAcumulados(mesCuota, tipoBeca, fechaPagoStr) {
    const valorBase = CUOTAS_BASE[mesCuota]?.[tipoBeca];
    if (valorBase === undefined) return { error: 'No existe la cuota seleccionada', total: 0, detalle: [] };
    if (valorBase === 0) return { error: null, total: 0, detalle: [] };

    const fechaPago = new Date(fechaPagoStr);
    if (isNaN(fechaPago)) return { error: 'Fecha de pago inválida', total: 0, detalle: [] };

    const vencimientoOriginal = getUltimoDiaDelMes(mesCuota);
    let detalle = [];
    let sumaIntereses = 0;

    // Recorremos los meses posteriores hasta la fecha de pago
    for (let i = INTERESES_PERIODS.findIndex(p => p.mes === mesCuota); i < INTERESES_PERIODS.length; i++) {
        const periodo = INTERESES_PERIODS[i];
        const venc = getUltimoDiaDelMes(periodo.mes);
        const primerDiaSiguiente = new Date(venc.getFullYear(), venc.getMonth(), venc.getDate() + 1); // día siguiente al vencimiento
        if (fechaPago >= primerDiaSiguiente) {
            const montoInteres = valorBase * periodo.rate;
            sumaIntereses += montoInteres;
            detalle.push({
                periodo: periodo.mes,
                tasa: (periodo.rate * 100).toFixed(2) + '%',
                monto: Number(montoInteres.toFixed(2))
            });
        }
    }

    const total = Number((valorBase + sumaIntereses).toFixed(2));
    return { error: null, total, detalle, valorBase: Number(valorBase) };
}

// ===================== MOSTRAR RESULTADO =====================
function mostrarResultadoEnPantalla(resultadoObj, mesCuota, tipoBeca) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    if (resultadoObj.error) {
        resultadoDiv.innerHTML = `<div class="sin-interes"><p style="color:#7a1221">${resultadoObj.error}</p></div>`;
        return;
    }

    const { total, detalle, valorBase } = resultadoObj;

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

    html += `<button class="btn-secundario" onclick="resetearFormulario()">Realizar otro cálculo</button>`;
    resultadoDiv.innerHTML = html;
}

function resetearFormulario() {
    document.getElementById('formCalculo').reset();
    document.getElementById('resultado').style.display = 'none';
}

// ===================== INICIALIZACIÓN =====================
document.addEventListener('DOMContentLoaded', () => {
    generarTablaCuotas();

    // Mostrar fecha de vencimiento automática
    const selectMes = document.getElementById('mesCuota');
    const campoVenc = document.getElementById('fechaVencimiento');
    selectMes.addEventListener('change', (e) => {
        const mes = e.target.value;
        const venc = getUltimoDiaDelMes(mes);
        const dd = String(venc.getDate()).padStart(2, '0');
        const mm = String(venc.getMonth() + 1).padStart(2, '0');
        const yyyy = venc.getFullYear();
        campoVenc.value = `${dd}/${mm}/${yyyy}`;
    });

    // Form submit
    const form = document.getElementById('formCalculo');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const mesCuota = document.getElementById('mesCuota').value;
        const tipoBeca = document.getElementById('tipoBeca').value;
        const fechaPagoStr = document.getElementById('fechaPago').value;
        if (!mesCuota || !tipoBeca || !fechaPagoStr) return alert('Por favor complete todos los campos.');

        const resultado = calcularInteresesAcumulados(mesCuota, tipoBeca, fechaPagoStr);
        mostrarResultadoEnPantalla(resultado, mesCuota, tipoBeca);
    });
});




