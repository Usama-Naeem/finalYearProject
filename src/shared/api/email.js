import {
  SESClient,
  CreateTemplateCommand,
  //   SendTemplatedEmailCommand,
  //   UpdateTemplateCommand,
  //   SendBulkTemplatedEmailCommand,
} from "@aws-sdk/client-ses";
import {
  AMPLIFY_CONFIG,
  //   SES_DEFAULT_EMAIL,
} from "../utils/amplifyConfig";

const client = new SESClient(AMPLIFY_CONFIG);

// Stripe payment email command
export const createSubscriptionTemplate = async () => {
  const TEMPLATE_NAME = "BANQUET_MANAGEMENT_ACCOUNT_SUSBSCRIPTION_TEMPLATE";

  const createSubscriptionTemplateCommand = () =>
    new CreateTemplateCommand({
      Template: {
        TemplateName: TEMPLATE_NAME,
        HtmlPart: `
          <p>Dear,<strong>{{name}}!</strong></p>
          </br>
          <p>I hope this email finds you well. We are excited to inform you that your requested ticket for the upcoming event is ready for payment. To make the process convenient and secure, we have generated a payment link for you.</p>
          <p>Please click on the following link to proceed with the payment: <a href="{{hostedInvoiceUrl}}">Payment Link</a> </p>
          <p>We appreciate your prompt attention to this matter. Kindly complete the payment at your earliest convenience to secure your spot at the event.</p>
          </br>
          <p>Best regards,</p>
        `,
        SubjectPart: "Secure Payment Link for Ticket Purchase",
      },
    });

  const createTemplateCommand = createSubscriptionTemplateCommand();
  try {
    await client.send(createTemplateCommand);
  } catch (err) {
    throw Error(err);
  }
};
