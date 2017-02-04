<!DOCTYPE html>

<html>
<head>    
<title>the title</title>
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">

</head>
<body>
<p>Enter your name and click on the button:</p>
<input type="input" id="name" size="40" /><br />
<div id="stage" style="background-color:blue;">
STAGE
</div>
<input type="button" id="driver" value="Show Result" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script>
<script type="text/javascript" language="javascript">
$(document).ready(function() {
$("#driver").click(function(event){
var name = $("#name").val();
$("#stage").load('/jquery/result.php', {"name":name} );
});
});
</script>
</body>
</html>
