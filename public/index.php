<?php

require __DIR__ . "/../includes.php";

$page = isset($_GET['c']) ? $_GET['c'] : 'base';


require __DIR__ . "/../View/". $page .".php";

