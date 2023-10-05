import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

/**
 * cXhzb2pkaG1ic3Nna21sYg==
 * javatest
 */

public class GmailEmailSender {
    public static void main(String[] args) {
        // Set your Mailgun SMTP server credentials
        final String username = "swwyrik@gmail.com";
        final String password = "arsenal!2221";

        // Set the recipient's email address
        String to = "thupiliswyrik@gmail.com";

        // Set the sender's email address
        String from = "swwyrik@gmail.com";

        // Set the SMTP server properties
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
//        props.put("mail.smtp.starttls.required", "true");
//        props.put("mail.smtp.ssl.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        // ssl 465 tls 587
        props.put("mail.smtp.port", "587");
        System.out.println("Trust all the props");
//        props.put("mail.smtp.ssl.trust", "*");
        System.out.println("properties loaded");
        // Create a session with the SMTP server
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });
        
        System.out.println("session object created");

        try {
            // Create a message
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject("Hello from Mailgun TLS SSL TEST");
            message.setText("This is a test email startTLS ssl enabled sent from Mailgun using Java.");
            System.out.println("email about to sent");
            // Send the message
            Transport.send(message);

            System.out.println("Email sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
            System.err.println("Failed to send email: " + e.getMessage());
        }
    }
}
