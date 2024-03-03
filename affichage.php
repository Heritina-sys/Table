<?php
	session_start();
	$tab = $_SESSION['tableau'];
	$_SESSION['tableau'] = $tab;
	$taille = count($tab);
        echo "<HEAD>";
                echo '<meta charset="UTF-8">';
                echo '<link rel="stylesheet" href="style.css">';
        echo "</HEAD>";
	echo "<BODY bgcolor = #DCD0FF>";
        	echo '<TABLE align = center style="text-align: center;font-weight: bold;">';
        	        echo "<TR height = 40 bgcolor = #E6E6FA>";
        	                echo "<TD width = 500>";
        	                        echo "<p align = center>A x B = C</p>";
        	                echo "</TD>";
        	        echo "</TR>";
		echo "</TABLE>";
		echo "<br>";
		echo "<TABLE align = center border = 1>";
			for($i = 0;$i < $taille;$i=$i+1){
				if($i%2 == 0){
					$color = "#E6E6FA";
				}
				else{
					$color = "#FFC0CB";
				}
				printline($tab,$i,$color);
			}
	        echo "</TABLE>";
	echo "</BODY>";
	function printline($tab,$i,$color){
        	$width = 150;
		$taille = count($tab);
		echo "<TR height = 50 bgcolor=".$color."><TD width =".$width."> ";
			echo $tab[$i][0]."</TD> <TD width =".$width."> ";
			echo $tab[$i][1]."</TD> <TD width =".$width."> ";
			echo $tab[$i][2]."</TD>";
			echo "<TD width =".$width.">";
				echo "<P align = center><a href = modifier.php?varA=".$tab[$i][0]."&varB=$taille&varI=$i><BUTTON class = button href=modifier.php>Modifier</BUTTON></a></P>";
			echo "</TD> <TD width =".$width.">";
				echo "<P align = center><a style=\"color: red; text-decoration: none;\" href = traitement.php?varA=".$tab[$i][0]."&varB=$taille&varI=$i> X </a></P>";
			echo "</TD>";
		echo "</TR>";
	}
?>
