from django.core.mail import send_mail
from smtplib import SMTPException

class EmailService():
    sub = ''
    mess = ''
    fromE = ''
    toE = []
    def emailConstruct(self, subject, message, fromEmail, toEmails):
        global sub, mess, fromE, toE
        sub = subject
        mess = message
        fromE = fromEmail
        toE = toEmails

    def sendEmail(self):
        global sub, mess, fromE, toE
        try:
            send_mail(
                sub,
                mess,
                fromE,
                toE,
                fail_silently=False,
            )
            return True
        except SMTPException as e:
            return False
