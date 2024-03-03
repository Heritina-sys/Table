<?php
	$a = $_GET['varA'];
        $b = $_GET['varB'];
        $i = $_GET['varI'];
 ?>
<!DOCTYPE html>
<HTML>
	<HEAD>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css">
	</HEAD>
	<BODY>
		<DIV class="container">
			<FORM action="traitement.php" method="post">
				<FIELDSET>
					<?php
                			        echo '<input type="hidden" name="a" value='.$a.'>';
                			        echo '<input type="hidden" name="b" value='.$b.'>';
                			        echo '<input type="hidden" name="i" value='.$i.'>';
                			?>
					<LEGEND>Modification</LEGEND>
					<DIV class="group">
						<LABEL for="a" class="label">Nouveau A :</LABEL>
						<INPUT type="text" id="a" name="aM" class="input" value= <?php echo $a?> required>
					</DIV>
					<DIV class="group">
						<LABEL for="b" class="label">Nouveau B :</LABEL>
						<INPUT type="text" id="b" name="iM" class="input" value= <?php echo $i?> required>
					</DIV>
					<DIV class="group">
						<BUTTON type="submit" class="button">MODIFIER</BUTTON>
					</DIV>
				</FIELDSET>
			</FORM>
		</DIV>
	</BODY>
</HTML>
