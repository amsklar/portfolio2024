<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set your email address
    $to = "amsklar@umich.edu";

    // Set the subject of the email
    $subject = "New Contact Form Submission";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_content);

    // Redirect to a thank-you page or display a success message
    header("Location: thank_you.html");
    exit();
}
?>
