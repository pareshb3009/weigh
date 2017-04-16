

<%
'Step 1: create an object of CDO.Message
dim objMail 
Set objMail = Server.CreateObject("CDO.Message")
 
'Step 2: set the smtp server, user name and password for authentication
dim smtpServer, yourEmail, yourPassword
smtpServer = "smtp.gmail.com"
yourEmail = "pareshb30@gmail.com"     'replace with a valid gmail account
yourPassword = "rashmib30P@"           'replace with a valid password for the gmail account set in yourEmail

'Step 4: set the email address to which email will be sent
sendEmailTo = Request.Form("email")


'Step 5: set the configuration properties of objMail object 
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = smtpServer
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 465 
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = true
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = yourEmail
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = yourPassword
objMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 60

'Step 6: update the configuration after setting all the required items
objMail.Configuration.Fields.Update
 

'Step 7: prepare your email like set subject, body, from, to etc.
objMail.From = pareshb30@gmail.com
objMail.To = Request.Form("email")
 
objMail.Subject="New Enquire from" & "(" & Request.Form("name") & ")" & Request.Form("email")
objMail.htmlBody = Request.Form("name") & Request.Form("phone") & Request.Form("message")

'Step 8: send the email
objMail.Send 

'Step 9: release the object
Set objMail = Nothing 

response.write("mail send successfully!")
%>

