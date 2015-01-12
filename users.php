<?php

//echo $_POST["userCode"];

$aUsersCode = array(0 => 'pepito', 1 => 'pep12345', 2 => 'Turing51', 3 => 'Wittgentein');

$searchUserCode = array_search($_POST["userCode"], $aUsersCode);

echo $searchUserCode;

//echo json_encode($aUsersCode);

?>
