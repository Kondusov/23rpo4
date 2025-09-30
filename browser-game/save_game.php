<?php
header('Content-Type: application/json');

// Проверка аутентификации и получение player_id из сессии
session_start();
if (!isset($_SESSION['player_id'])) {
    echo json_encode(['success' => false, 'error' => 'Not authenticated']);
    exit;
}

$player_id = $_SESSION['player_id'];
$game_data = json_decode(file_get_contents('php://input'), true);

// Сохранение в базу данных
$conn = new mysqli('localhost', 'username', 'password', 'sponge_bob_game');
$game_data_json = $conn->real_escape_string(json_encode($game_data));

$sql = "INSERT INTO game_states (player_id, game_data) VALUES ($player_id, '$game_data_json') 
        ON DUPLICATE KEY UPDATE game_data = '$game_data_json'";

if ($conn->query($sql)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$conn->close();
?>