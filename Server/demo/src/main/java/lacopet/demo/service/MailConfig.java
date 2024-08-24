package lacopet.demo.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class MailConfig {

    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(465);
        
        mailSender.setUsername("diasemterapia@gmail.com");  // Altere para seu email
        mailSender.setPassword("jqzq jool jevu kexn");  // Altere para sua senha

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "false"); // Habilitar TLS
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.debug", "true");
        

        return mailSender;
    }

    public void sendRegistrationEmail(JavaMailSender mailSender, String email, String name) {
        try {
            SimpleMailMessage message = new SimpleMailMessage(); 
            message.setTo(email); 
            message.setSubject("Registro bem-sucedido"); 
            message.setText("Olá " + name + ", obrigado por se registrar e fazer parte deste projeto! Sua participação "); 
            mailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao enviar e-mail de registro", e);
        }
    }
}
