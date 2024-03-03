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
					<LEGEND>Table de Multiplication</LEGEND>
					<DIV class="group">
						<LABEL for="a" class="label">Nombre A :</LABEL>
						<INPUT type="text" id="a" name="a" class="input" required>
					</DIV>
					<DIV class="group">
						<LABEL for="b" class="label">Nombre B :</LABEL>
						<INPUT type="text" id="b" name="b" class="input" required>
					</DIV>
					<DIV class="group">
						<BUTTON type="submit" class="button">ENVOYER</BUTTON>
					</DIV>
				</FIELDSET>
			</FORM>
		</DIV>
	</BODY>
</HTML>


