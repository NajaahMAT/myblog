import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) =>{
   console.log("req method: ", req.method)
    if (req.method == "POST"){
        const data = req.body;
        if (!data.name || !data.email || !data.subject || !data.message){
            return res.status(400).json({ message: "Bad Request - contact service"});
        }

        try {
            console.log("sending mail...");
            console.log("request data:", data);
            transporter.sendMail({
                    ...mailOptions,
                    subject: data.subject,
                    text:"This is a test message",
                    html:data.message,
                },
                function (error, info) {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log("Email sent: " + info.response);
                    }
                }
            );
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Bad Request'});
        }
    }else{
        console.log("Not supported", req.method)
        res.status(400).json({message: 'Not Supported'})
    }
};

export default  handler;
