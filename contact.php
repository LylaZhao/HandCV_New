<?php

// configure
$from = 'handcv@imgnb.com'; 
$sendTo = 'handcv@imgnb.com';
$subject = 'HandCV 网站留言';
$fields = array('name' => 'Name', 'org'=> 'Org', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in email
$okMessage = '恭喜！您的留言已收到，Hand CV 会尽快与您取得联系。Contact form successfully submitted. Thank you! We will get back to you soon!';
$errorMessage = '呀！出错了。别慌张，稍后再试试。Sorry! There was an error while submitting the form. Please try again later';

// let's do the sending

try
{
    $emailText = "HandCV.com 网站留言";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}


/*http://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form*/