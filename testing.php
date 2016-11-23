<?php
  echo "Thanks for that, " .$fname . "!  You'll hear from us within 24 hours.";
?>


// DIDN'T WORK???:
<p>Thanks for that <?php echo $fname; ?>You will hear from us within 24 hours. </p>


//TOOK THIS OUT FOR TESTING
mail($email, $subject, $message, "From:".$from);
