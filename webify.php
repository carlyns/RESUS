<!-- PHP FILES CAN RENDER HTML, BUT NOT THE OTHER WAY AROUND! -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1.0, width=device-width" user-scalable="yes"/>
  <!-- SO THE CSS FILE IS LOADING.  ONLY THE BODY FONT.  WHEN DELETED, THERE WERE NO STYLES, EVEN THOUGH THE FONT BELOW IS LINKED. -->
  <!-- i deleted it and put it back ... and it worked.  ugh.-->
	<link href='http://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
  <link rel="shortcut icon" href="webify/w.ico" type="image/ico" width="16" height="16"><!-- PROBABLY DON'T NEED WEBIFY BEFORE W.ICO FILE PATH -->
  <title>WEBIFY | Thanks!</title>

<?php
// submitting a form in test mode (no internet) means the url is relative.  hitting submit will link to a "local file".  so the .php file that is returned won't render any php in a browser.  needs to either point to an absolute url or submit the form when your html file is already uploaded online.
//

  $fname = $_POST['firstname'];
  // from http://stackoverflow.com/questions/8660608/where-are-webform-data-stored
  $email = $_POST['email'];
  $coll = $_POST['colleague'];
  $org = $_POST['org'];
  $resus = $_POST['resus'];
  $gossip = $_POST['gossip'];
  $other = $_POST['other'];
  $docurl = $_POST['docurl'];

  $data = $fname . "," . $email . "," . $coll . "," . $org . "," . $resus . "," . $gossip . "," . $other . "," . $docurl;

  $file = "webifyrequests.csv";
  file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
  // WAIT, IT DID IT!  IT JUST HAD TO WAIT A COULPLE OF SECONDS!!

  // the mail function broke it all.  see testing.php
  $from="cso@RESUSstudio.com";
  $subject="a new Webify request!";
  $message="Pull the latest .csv file through RESUSstudio FTP.  Please and thank you.";
?>
</head>



<style>
  body {
  	font-size: 2em;
  	font-family: Lato;
  	margin: 0;
  	background-color: #D8CFAF; /* tan */
  	color: #26241f;/* brown */
  	text-align: center;
  }

  .thanks .confirmmsg {
  	background-color: #476A6F; /* blue */
  	border: 3px double #D8CFAF; /* tan */
  	color: #D8CFAF; /* tan */
  	padding: 4%;
  	width: 50%;
  	margin: 3% auto;
  }
  .thanks a {
  	text-decoration: none;
  	color: #26241f; /* brown */
  }
  .thanks a:hover {
  	text-decoration: underline;
  }
</style>


<body>


<div class="thanks">
  <div class="confirmmsg">
    <?php
      echo "Thanks for that, " .$fname . "!";
    ?>
    <p>You'll hear from us soon. </p>
  </div>
    <a href="webify.html">Go back to the Webify page.</a>
</div>



</body>
</html>
