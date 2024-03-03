<?php
	session_start();
// Si les donnés viens de premiere page ,on le traite et fais le resultat dans une tableau
	if ( $_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['a']) && isset($_POST['b']) ){
		$a = $_POST['a'];
		$b = $_POST['b'];
		echo $b;
		$tab = array(array());
		for($i = 0;$i <= $b;$i=$i+1){
                	$tab[$i][0] = $a;
                	$tab[$i][1] = $i;
                	$tab[$i][2] = $tab[$i][0]*$tab[$i][1];
		}
	}
//si le donne vient d'une suppression
	if ( $_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['varA']) && isset($_GET['varB']) && isset($_GET['varI']) ){
		$a = $_GET['varA'];
		$b = $_GET['varB'];
		$i = $_GET['varI'];
		$tab = $_SESSION['tableau'];
		$tabtmp = array(array());
		for($j = 0;$j < $i;$j=$j+1){
	 		$tabtmp[$j][0] = $tab[$j][0];
			$tabtmp[$j][1] = $tab[$j][1];
			$tabtmp[$j][2] = $tab[$j][2];
		}
		for($j = $i+1;$j < $b;$j=$j+1){
                        $tabtmp[$j-1][0] = $tab[$j][0];
                        $tabtmp[$j-1][1] = $tab[$j][1];
                        $tabtmp[$j-1][2] = $tab[$j][2];
		}
		$tab = $tabtmp;
	}
//si le donne vient d'une modification
        if ( $_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['aM']) && isset($_POST['iM']) && isset($_POST['a']) && isset($_POST['b']) && isset($_POST['i']) ){
                $aM = $_POST['aM'];
                $iM = $_POST['iM'];
                $a = $_POST['a'];
                $b = $_POST['b'];
                $i = $_POST['i'];
                $tab = $_SESSION['tableau'];
                for($j = 0;$j < $b;$j=$j+1){
                        if($i == $j){
                                $tab[$j][0] = $aM;
                                $tab[$j][1] = $iM;
                                $tab[$j][2] = $aM * $iM;
                        }
                }
        }
// on envoye le donne et redirige la page
	$_SESSION['tableau'] = $tab;
	header("Location: affichage.php");
?>
