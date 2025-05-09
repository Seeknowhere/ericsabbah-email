import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Font,
} from '@react-email/components';
import * as React from 'react';

interface EricsSabbahNewsletterEmailProps {
  userName?: string;
  emailSubject?: string;
  mainContent?: {
    title: string;
    text: string;
    ctaLink?: string;
    ctaText?: string;
  }[];
  firmName?: string;
  firmAddress?: string;
  firmPhone?: string;
  firmEmail?: string;
  firmWebsiteUrl?: string;
  logoUrl?: string; // Optional: URL to your firm's logo
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'; // Adjust if you have a different base URL for assets

// --- Default Props ---
const defaultProps: EricsSabbahNewsletterEmailProps = {
  userName: 'Valued Client',
  emailSubject: 'An Update from Eric M. Sabbah PLL',
  mainContent: [
    {
      title: 'Protecting Your Rights: Recent Insights',
      text: 'Welcome to our latest update. At Eric M. Sabbah PLL, we are committed to practicing with integrity and civility, offering expert legal assistance in areas such as consumer fraud, credit report issues, and more. This month, we highlight the importance of vigilance against emerging online scams...',
      ctaLink: 'https://www.ericsabbah.com/contact-us.html',
      ctaText: 'Contact Us for a Consultation',
    },
  ],
  firmName: 'Eric M. Sabbah PLL',
  firmAddress: '100 King Street West, Suite 5600, Toronto, ON M5X 1C9',
  firmPhone: '833-529-7463',
  firmEmail: 'eric@ericsabbah.com',
  firmWebsiteUrl: 'https://www.ericsabbah.com',
  // logoUrl: `${baseUrl}/static/ericsabbah-logo.png`, // Example: if you have a logo in your public/static folder
};

// --- Styles ---
const main = {
  backgroundColor: '#f4f4f7', // A light grey background for the email body
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px', // Standard email width
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
};

const headerSection = {
  padding: '24px',
  textAlign: 'center' as const, // Type assertion for textAlign
  backgroundColor: '#003366', // A professional dark blue
  color: '#ffffff',
};

const firmNameText = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0 0 10px 0',
};

const firmSloganText = {
  fontSize: '14px',
  color: '#b0c4de', // Lighter blue for slogan
  margin: '0',
};

const logo = {
  margin: '0 auto 20px auto',
  maxWidth: '200px', // Adjust as needed
};

const contentSection = {
  padding: '20px 30px',
};

const heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333333',
  lineHeight: '1.3',
  margin: '16px 0 16px',
};

const text = {
  fontSize: '15px',
  color: '#555555',
  lineHeight: '1.5',
  textAlign: 'left' as const,
};

const button = {
  backgroundColor: '#4A90E2', // A professional blue for CTA
  borderRadius: '5px',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 20px',
  margin: '20px 0',
};

const hr = {
  borderColor: '#e0e0e0',
  margin: '20px 0',
};

const footer = {
  color: '#7F8C8D', // A muted grey for footer text
  fontSize: '12px',
  lineHeight: '1.4',
  textAlign: 'center' as const,
  padding: '0 20px',
};

const footerLink = {
  color: '#003366', // Dark blue for links in footer
  textDecoration: 'underline',
};

// --- Email Component ---
export const EricsSabbahNewsletterEmail = ({
  userName = defaultProps.userName,
  emailSubject = defaultProps.emailSubject,
  mainContent = defaultProps.mainContent,
  firmName = defaultProps.firmName,
  firmAddress = defaultProps.firmAddress,
  firmPhone = defaultProps.firmPhone,
  firmEmail = defaultProps.firmEmail,
  firmWebsiteUrl = defaultProps.firmWebsiteUrl,
  logoUrl = defaultProps.logoUrl,
}: EricsSabbahNewsletterEmailProps) => {
  const previewText = mainContent && mainContent.length > 0 ? mainContent[0].title : 'Important Update from Eric M. Sabbah PLL';

  return (
    <Html>
      <Head>
        <title>{emailSubject}</title>
        <Font
          fontFamily="Helvetica Neue"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.gstatic.com/s/helveticaneue/v1/Cm_s3p33tZHr7M-cMjc0gA.woff2', // Example, ensure you have rights or use system fonts
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            {logoUrl && <Img src={logoUrl} alt={`${firmName} Logo`} style={logo} />}
            <Heading as="h1" style={firmNameText}>{firmName}</Heading>
            <Text style={firmSloganText}>Practicing with Integrity and Civility</Text>
          </Section>

          <Section style={contentSection}>
            <Heading as="h2" style={heading}>Dear {userName},</Heading>
            {mainContent?.map((item, index) => (
              <React.Fragment key={index}>
                <Heading as="h3" style={{ ...heading, fontSize: '18px', marginTop: index > 0 ? '25px' : '10px' }}>{item.title}</Heading>
                <Text style={text}>{item.text}</Text>
                {item.ctaLink && item.ctaText && (
                  <Button style={button} href={item.ctaLink}>
                    {item.ctaText}
                  </Button>
                )}
                {index < (mainContent?.length || 0) - 1 && <Hr style={hr} />}
              </React.Fragment>
            ))}
          </Section>

          <Hr style={hr} />

          <Section style={{ ...contentSection, paddingTop: '0px', textAlign: 'center' as const }}>
            <Text style={text}>
              If you have any questions or require legal assistance, please do not hesitate to reach out.
            </Text>
            <Button style={{...button, margin: '15px auto'}} href={firmWebsiteUrl}>
              Visit Our Website
            </Button>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footer}>
              <strong>{firmName}</strong><br />
              {firmAddress}<br />
              Phone: {firmPhone} | Email: <Link style={footerLink} href={`mailto:${firmEmail}`}>{firmEmail}</Link>
            </Text>
            <Text style={footer}>
              <Link style={footerLink} href={firmWebsiteUrl}>{firmWebsiteUrl}</Link>
            </Text>
            <Hr style={{...hr, margin: '15px auto', width: '50%'}} />
            <Text style={footer}>
              This email is for informational purposes only and does not constitute legal advice.
              Communicating with Eric M. Sabbah PLL via this email does not create an attorney-client relationship.
              If you believe you have received this email in error, please notify us immediately and delete it from your system.
            </Text>
            <Text style={footer}>
              © {new Date().getFullYear()} {firmName}. All rights reserved.
            </Text>
            {/* Optional: Unsubscribe link */}
            {/* <Text style={footer}>
              <Link style={footerLink} href={`${baseUrl}/unsubscribe?email=${userName}`}>Unsubscribe</Link>
            </Text> */}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EricsSabbahNewsletterEmail;

// --- To render this email (example usage) ---
// import { render } from '@react-email/render';
// const html = render(<EricsSabbahNewsletterEmail userName="John Doe" />);
// console.log(html);