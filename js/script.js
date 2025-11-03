// ===================== DATOS POR ESCUELA =====================
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
        'NOVIEMBRE': { 'COMPLETO': 82890, 'BECA 50%': 49567.77, 'BECA 25%': 66228.89, 'BECA 100%': 16245.56, 'BECA 75%': 32906.67 }
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
        'NOVIEMBRE': { 'COMPLETO': 91160, 'BECA 50%': 54426.66, 'BECA 25%': 72793.34, 'BECA 100%': 17693.34, 'BECA 75%': 36060 }
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
        'NOVIEMBRE': { 'COMPLETO': 94470, 'BECA 50%': 56370.01, 'BECA 25%': 75420.01, 'BECA 100%': 18270.01, 'BECA 75%': 37320.01 }
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
        'NOVIEMBRE': { 'COMPLETO': 83560, 'BECA 50%': 49960.78, 'BECA 25%': 66760.39, 'BECA 100%': 16361.57, 'BECA 75%': 33161.18 }
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
let escuelaActiva = 'Inicial';
let valorTemporal = null;

// ===================== HELPERS =====================
function formatoMoneda(num) {
    return Number(num).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getUltimoDiaDelMes(mesCuota, año = 2025) {
    const mesesMap = {
        'ENERO': 0, 'FEBRERO': 1, 'MARZO': 2, 'ABRIL': 3, 'MAYO': 4, 'JUNIO': 5,
        'JULIO': 6, 'AGOSTO': 7, 'SEPTIEMBRE': 8, 'OCTUBRE': 9, 'NOVIEMBRE': 10, 'DICIEMBRE': 11
    };
    return new Date(año, mesesMap[mesCuota] + 1, 0);
}

function parseFechaInput(dateStr) {
    if (!dateStr) return new Date(NaN);
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
}

function formatoFechaDDMMYYYY(d) {
    if (!d || isNaN(d)) return '';
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

// ===================== TABS =====================
function inicializarTabs() {
    document.querySelectorAll('#tabsEscuelas .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            setEscuelaActiva(tab.dataset.escuela);
            document.querySelectorAll('#tabsEscuelas .tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

function setEscuelaActiva(escuelaId) {
    if (!CUOTAS_POR_ESCUELA[escuelaId]) return;
    escuelaActiva = escuelaId;
    document.getElementById('tituloEscuela').textContent = `Escuela: ${escuelaId}`;
    document.getElementById('labelEscuelaTabla').textContent = escuelaId;
    generarTablaCuotas();
    resetearFormulario();
}

// ===================== TABLA =====================
function generarTablaCuotas() {
    const tablaContainer = document.getElementById('tablaCuotas');
    const CUOTAS_BASE = CUOTAS_POR_ESCUELA[escuelaActiva];
    let html = `<div class="table-container"><table class="tabla-cuotas"><thead><tr>
        <th>Mes</th><th>Vencimiento</th><th>Completo</th><th>Beca 50%</th><th>Beca 25%</th><th>Beca 75%</th><th>Beca 100%</th>
    </tr></thead><tbody>`;
    for (const mes in CUOTAS_BASE) {
        const c = CUOTAS_BASE[mes];
        html += `<tr>
            <td>${mes}</td>
            <td>${formatoFechaDDMMYYYY(getUltimoDiaDelMes(mes))}</td>
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
    const base = CUOTAS_POR_ESCUELA[escuelaActiva]?.[mesCuota]?.[tipoBeca] || 0;
    const valorBase = valorTemporal !== null ? valorTemporal : base;
    if (!valorBase) return { error: 'No existe la cuota seleccionada.', total: 0, detalle: [] };

    const fechaPago = parseFechaInput(fechaPagoStr);
    const vencimientoOriginal = getUltimoDiaDelMes(mesCuota, 2025);
    const fechaInicioInteres = new Date(vencimientoOriginal.getFullYear(), vencimientoOriginal.getMonth() + 2, 1);

    if (fechaPago < fechaInicioInteres) return { total: valorBase, detalle: [], valorBase, fechaVenc: vencimientoOriginal, fechaInicioInteres };

    const diffMonths = (fechaPago.getFullYear() - fechaInicioInteres.getFullYear()) * 12 + (fechaPago.getMonth() - fechaInicioInteres.getMonth());
    const mesesAPagar = diffMonths + 1;

    let detalle = [], sumaIntereses = 0;
    for (let k = 0; k < mesesAPagar; k++) {
        const mesName = MESES_NOMBRES[(fechaInicioInteres.getMonth() + k) % 12];
        const periodo = INTERESES_PERIODS.find(p => p.mes === mesName);
        const rate = periodo ? periodo.rate : 0;
        const monto = +(valorBase * rate).toFixed(2);
        sumaIntereses += monto;
        detalle.push({ periodo: mesName, tasa: (rate * 100).toFixed(2) + '%', monto });
    }

    return { total: +(valorBase + sumaIntereses).toFixed(2), detalle, valorBase, fechaVenc: vencimientoOriginal, fechaInicioInteres };
}

// ===================== MOSTRAR RESULTADO =====================
function mostrarResultadoEnPantalla(res, mesCuota) {
    const div = document.getElementById('resultado');
    div.style.display = 'block';
    div.innerHTML = '';

    if (res.error) {
        div.innerHTML = `<p style="color:red">${res.error}</p>`;
        return;
    }

    const totalIntereses = res.detalle.reduce((a, b) => a + b.monto, 0);

    const gridContainer = document.createElement('div');
    gridContainer.className = 'result-grid';
    div.appendChild(gridContainer);

    const cardValor = document.createElement('div');
    cardValor.className = 'result-card';
    cardValor.innerHTML = `<h4>Valor Original (${mesCuota})</h4>
                           <p class="valor">$${formatoMoneda(res.valorBase)}</p>`;
    gridContainer.appendChild(cardValor);

    const cardIntereses = document.createElement('div');
    cardIntereses.className = 'result-card';
    const cantidadIntereses = res.detalle.length;
    cardIntereses.innerHTML = `<h4>Intereses Aplicados</h4>
                               <b style="font-size:25px;">${cantidadIntereses} ${cantidadIntereses > 1 ? '' : ''}</b>`;
    gridContainer.appendChild(cardIntereses);

    const cardTotalPagar = document.createElement('div');
    cardTotalPagar.className = 'result-card total';
    cardTotalPagar.innerHTML = `<h4>Total a Pagar</h4>
                                <p class="valor">$${formatoMoneda(res.total)}</p>`;
    gridContainer.appendChild(cardTotalPagar);

    if (res.detalle.length) {
        const cardDetalle = document.createElement('div');
        cardDetalle.className = 'detalle-calculo';
        cardDetalle.innerHTML = `<h4>Detalle de Intereses</h4>
                                 <ul>${res.detalle.map(d => `<li>${d.periodo}: ${d.tasa} → $${formatoMoneda(d.monto)}</li>`).join('')}</ul>`;
        div.appendChild(cardDetalle);

        const cardTotalIntereses = document.createElement('div');
        cardTotalIntereses.className = 'result-card total';
        cardTotalIntereses.innerHTML = `<h4>Total Interés Acumulado</h4>
                                        <p class="valor">$${formatoMoneda(totalIntereses)}</p>`;
        div.appendChild(cardTotalIntereses);
    } else {
        const cardSinInteres = document.createElement('div');
        cardSinInteres.className = 'sin-interes';
        cardSinInteres.innerHTML = `<p>✅ No se aplica interés.</p>`;
        div.appendChild(cardSinInteres);
    }
}

// ===================== FORMULARIO =====================
function resetearFormulario() {
    document.getElementById('formCalculo').reset();
    document.getElementById('resultado').style.display = 'none';
    valorTemporal = null;
    document.getElementById('valorOriginalContainer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarTabs();
    setEscuelaActiva(escuelaActiva);

    const selectMes = document.getElementById('mesCuota');
    const selectBeca = document.getElementById('tipoBeca');
    const inputPago = document.getElementById('fechaPago');
    const inputValor = document.getElementById('valorOriginalInput');

    // FUNCIÓN COMÚN para actualizar valor y fechas
    function actualizarValorYFechas() {
        const mes = selectMes.value;
        const tipo = selectBeca.value || 'COMPLETO';
        if (!mes) {
            document.getElementById('valorOriginalContainer').style.display = 'none';
            document.getElementById('fechaVencimiento').value = '';
            document.getElementById('fechaInicioInteres').value = '';
            return;
        }

        const valor = CUOTAS_POR_ESCUELA[escuelaActiva]?.[mes]?.[tipo] || 0;
        inputValor.value = valor;
        valorTemporal = valor;

        const venc = getUltimoDiaDelMes(mes);
        document.getElementById('fechaVencimiento').value = formatoFechaDDMMYYYY(venc);
        const inicioInteres = new Date(venc.getFullYear(), venc.getMonth() + 2, 1);
        document.getElementById('fechaInicioInteres').value = formatoFechaDDMMYYYY(inicioInteres);

        document.getElementById('valorOriginalContainer').style.display = 'block';
    }

    selectMes.addEventListener('change', actualizarValorYFechas);
    selectBeca.addEventListener('change', actualizarValorYFechas);

    inputValor.addEventListener('input', e => {
        valorTemporal = parseFloat(e.target.value) || 0;
    });

    document.getElementById('formCalculo').addEventListener('submit', e => {
        e.preventDefault();
        const mes = selectMes.value;
        const tipo = selectBeca.value;
        const fecha = inputPago.value;
        if (!mes || !tipo || !fecha) return alert('Complete todos los campos.');

        const res = calcularInteresesAcumulados(mes, tipo, fecha);
        mostrarResultadoEnPantalla(res, mes);
    });
});