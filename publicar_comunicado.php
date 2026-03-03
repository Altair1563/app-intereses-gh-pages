<?php
ob_start();//⬅️ CLAVE ABSOLUTA
header('Content-Type: application/json; charset=utf-8');

date_default_timezone_set('America/Argentina/Buenos_Aires');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['ok' => false, 'error' => 'No es POST']);
    ob_end_flush();
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=127.0.0.1;port=3306;dbname=u207063327_contactos_db;charset=utf8mb4",
        "u207063327_Elias2",
        "Alina468+",
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    );
} catch (Exception $e) {
    echo json_encode(['ok' => false, 'error' => 'Error conexión BD']);
    ob_end_flush();
    exit;
}

$titulo = trim($_POST['titulo'] ?? '');
$contenido = trim($_POST['contenido'] ?? '');

if ($titulo === '' || $contenido === '') {
    echo json_encode(['ok' => false, 'error' => 'Datos incompletos']);
    ob_end_flush();
    exit;
}

$pdo->prepare("
    INSERT INTO comunicados (titulo, contenido)
    VALUES (?, ?)
")->execute([$titulo, $contenido]);

$mensaje = "📢 Nuevo comunicado: $titulo";

$fams = $pdo->query("
    SELECT DISTINCT nro_familia FROM registro_padres
")->fetchAll(PDO::FETCH_COLUMN);

$stmt = $pdo->prepare("
    INSERT INTO notificaciones (nro_familia, mensaje)
    VALUES (?, ?)
");

foreach ($fams as $fam) {
    $stmt->execute([$fam, $mensaje]);
}

echo json_encode(['ok' => true]);
ob_end_flush();
exit;