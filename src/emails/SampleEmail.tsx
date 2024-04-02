import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AirbnbReviewEmailProps {
  reviewText?: string;
  email?: string;
}

export const SampleEmail = ({
  reviewText,
  email
}: AirbnbReviewEmailProps) => {
  const previewText = `💡 Tienes un nuevo mensaje de ${email}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src="https://th.bing.com/th/id/R.dad855ded5bd1f30ad1c082677d51ff5?rik=yytBm%2b6R5yk60w&pid=ImgRaw&r=0"
              width="70"
              height="70"
              alt="Logo"
              className="rounded-full"
            />
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>{email} quiere contactarse con nosotros 👋</Text>
              <Text style={review}>{reviewText}</Text>
              <Text style={paragraph}>
                Ahora que hemos recibido el mensaje de {email}, podemos ponernos en contacto y empezar con las cotizaciones de publicidad.
              </Text>
              <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                Email : {email}
              </Text>

              <Button style={button} href={`mailto:${email}`}>
                Contestar Mensaje!
              </Button>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={footer}>
                &copy; 2024 Piero Sarmiento. Todos los derechos reservados.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SampleEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#f7ed2e",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
