<?php
header('Content-Type: application/json');

// Проверка аутентификации
session_start();
if (!isset($_SESSION['player_id'])) {
    echo json_encode(['success' => false, 'error' => 'Not authenticated']);
    exit;
}

$player_id = $_SESSION['player_id'];

// Загрузка из базы данных
$conn = new mysqli('localhost', 'username', 'password', 'sponge_bob_game');
$sql = "SELECT game_data FROM game_states WHERE player_id = $player_id ORDER BY saved_at DESC LIMIT 1";

$result = $conn->query($sql);
if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(['success' => true, 'game_data' => json_decode($row['game_data'])]);
} else {
    echo json_encode(['success' => false, 'error' => 'No saved game found']);
}

$