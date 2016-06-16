<?php
$holder= json_decode(file_get_contents('php://input'));

if($holder->uname=="admin" && $holder->password=="admin"){
	session_start();
	$_SESSION['uid'] = uniqid('angul_');
	print $_SESSION['uid'];
}