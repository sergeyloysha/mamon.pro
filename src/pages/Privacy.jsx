import React from 'react'
import { App, Container, Section, Footer, Heading1, Heading3, Paragraph, Link } from '../styles'
import { Header } from '../components'
import constants from '../constants/'

const { globals } = constants

export default (props) => {
  return (
    <App>

      <Header />

      <App.Content>

        <Section top bottom>
          <Container>
            <Heading1>Privacy Policy</Heading1>
            <Paragraph>Mamon Pro, LLC ("Mamon" or "we" or "us" or "our") respects the privacy of our users ("user" or "you"). This privacy policy explains how we collect, use, process and safeguard your information when you visit our website www.mamon.pro including mobile website or related landing pages (collectively, the "Site"). Please read this Privacy Policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.</Paragraph>
            <Paragraph>We reserve the right to make changes to this Privacy Policy at any time and for any reason. Any modifications will be effective immediately upon posting the updated Privacy Policy on the Site. We will alert you about any changes by updating the “Revised” date of this Privacy Policy.</Paragraph>

            <Heading3>Information Collection</Heading3>
            <Paragraph>We collect information about you where the processing is in our legitimate interests and not overridden by your data-protection interests or fundamental rights and freedoms. Typically, our legitimate interests include improving, maintaining, providing, and enhancing our technology, products, and services; ensuring the security of the Services and our Site; and for our sales and marketing activities.</Paragraph>

            <Heading3>What personal information do we collect from the visitors of the Site?</Heading3>
            <Paragraph>When filling the contact form on the Site, as appropriate, you may be asked to enter your name, email address, phone or skype to help you with your experience. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site. We, along with third-party vendors, such as Google use first-party cookies (such as the Google Analytics cookies) or other third-party identifiers together to compile data regarding user interactions on the Site, to determine the popularity of certain content and better understand online activity. This information does not include your name, email address, your IP address or other high-precision data about your location.</Paragraph>

            <Heading3>When do we collect information?</Heading3>
            <Paragraph>We collect personal information from you only when you fill any contact forms on the Site. By accessing the Site, you consent to the collection and use of your information by third-party vendors mentioned in the previous paragraph. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer collected information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can use tools as <Link href='http://www.aboutads.info/choices'>Digital Advertising Alliance Opt-Out Tool</Link> or <Link href='https://tools.google.com/dlpage/gaoptout'>Google Analytics Opt Out Browser add on</Link>.</Paragraph>
            <Paragraph>We are not responsible for the content or privacy and security practices and policies of other sites, services or applications that may be linked to or from the Site. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.</Paragraph>

            <Heading3>Use of Data</Heading3>
            <Paragraph>We may use the information we collect through our Site for a range of reasons, including:</Paragraph>
            <Paragraph>&mdash; To provide, operate, optimize, and maintain the Site;</Paragraph>
            <Paragraph>&mdash; To detect, prevent and address technical issues;</Paragraph>
            <Paragraph>&mdash; To respond to your online inquiries and requests;</Paragraph>
            <Paragraph>&mdash; To provide you with news, special offers and general information about our services unless you have opted not to receive such information;</Paragraph>
            <Paragraph>&mdash; To improve the navigation and content of the Site;</Paragraph>
            <Paragraph>&mdash; To personalize your experience and to allow us to deliver the type of content in which you are most interested;</Paragraph>
            <Paragraph>&mdash; To carry out other legitimate business purposes, as well as other lawful purposes.</Paragraph>

            <Heading3>Retention of Data</Heading3>
            <Paragraph>We retain information where we have an ongoing legitimate business or legal need to do so. We refer to these criteria in order to determine retention period:</Paragraph>
            <Paragraph>&mdash; Whether we have a legal or contractual need to retain the data.</Paragraph>
            <Paragraph>&mdash; Whether the data is necessary to provide our services.</Paragraph>
            <Paragraph>When we have no ongoing legitimate business need to process your personal information, we will delete it or, if this is not possible (for example, because your the data has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing.</Paragraph>

            <Heading3>Protection of Data</Heading3>
            <Paragraph>We protect the Site visitors and our clients from unauthorized attempts to access, modifying, disclosure or destroying the data we store by the following:</Paragraph>
            <Paragraph>&mdash; We constantly improve the ways of collecting, storing and processing data, including physical security measures, to counter unauthorized access to our systems.</Paragraph>
            <Paragraph>&mdash; All sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology.</Paragraph>
            <Paragraph>&mdash; Your personal information is contained behind secured networks.</Paragraph>
            <Paragraph>&mdash; We limit our employees access to personal data, and impose strict contractual obligations on them, for violation of which there are serious responsibilities and penalties.</Paragraph>

            <Heading3>Data Protection Rights</Heading3>
            <Paragraph>You have the following data protection rights:</Paragraph>
            <Paragraph>&mdash; To request correction of inaccurate or incomplete personal information;</Paragraph>
            <Paragraph>&mdash; To request deletion of your personal information;</Paragraph>
            <Paragraph>&mdash; To opt-out or object to processing of your personal information where our processing is based on your consent or our legitimate interests. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your personal information conducted in reliance on lawful processing grounds other than consent.</Paragraph>

            <Paragraph>You may contact us directly at any time about updating or deleting your personal information, or altering your data or marketing preferences by emailing us at <Link href={'mailto:' + globals.email}>{globals.email}</Link>. We may ask you to verify your identity in order to help us respond efficiently to your request.</Paragraph>
          </Container>
        </Section>

        <Section top>
          <Footer>
            <Container>
              <Footer.Inner>
                <Footer.Heading>Want to work with us?</Footer.Heading>
                <Footer.List>
                  <Footer.List.Item>
                      /&nbsp;<Footer.List.Link href={'mailto:' + globals.email}>{globals.email}</Footer.List.Link>
                  </Footer.List.Item>
                </Footer.List>
                <Footer.Contacts>
                  {globals.address}
                </Footer.Contacts>
              </Footer.Inner>
            </Container>
          </Footer>
        </Section>
      </App.Content>
    </App>
  )
}
