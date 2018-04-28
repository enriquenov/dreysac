<?php

    $name2       = $_POST['name'];
    $email2      = $_POST['email'];
    $subject2     = $_POST['subject'];
    $message2    = $_POST['message'];

    // Your email
    $EmailTo = "luisenriquenovoa@gmail.com";

    // prepare email body text
    $Body = "Name: ";
    $Body .= $name2;
    $Body .= "<br>";

    $Body .= "Email: ";
    $Body .= $email2;
    $Body .= "<br>";

    $Body .= "Subject: ";
    $Body .= $subject2;
    $Body .= "<br>";

    $Body .= "Message: ";
    $Body .= $message2;
    $Body .= "<br>";

    // send email
   $success = mail($EmailTo, $subject, $Body, 'From:'. $email);

    // redirect to success ajax
    if ($success == true){
       echo "success";
    }else{
        echo "failed";
    }
