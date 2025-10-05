class EmailService {
    constructer(config = {}) {
        this.transporter = config.transporter;
        this.fromEmail = config.fromEmail;
        
    }
}