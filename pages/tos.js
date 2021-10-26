import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { WEB_BASE_URL } from "../utils/config";
import { META_TITLE, META_DESCRIPTION } from "../utils/constants";

export default function TermsOfService() {
  return (
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/images/Logo.png" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:image" content="/images/og_image.svg" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${WEB_BASE_URL}/tos`} />
      </Head>

      <NavBar />

      <div className="gutter-root">
        <div className="gutter">
          <h1 className="page-header">Terms of Service</h1>

          <p className="answer-text">
            These terms of service govern your use of our website and the
            services we provide; by using our website and services, you accept
            these terms and conditions in full. If you disagree with these terms
            of service or any part of these terms and service, you must not use
            our website. You must be 13 years of age or older to use Cheersly
            and it’s services. If you are under 13 years old please do not use
            Cheersly. By using our website and services and by agreeing to these
            terms of service you warrant and represent that you are at least 13
            years of age. If you are accepting these Terms and using Cheersly on
            behalf of a company, organization, or other legal entity, you
            represent and warrant that you are authorized to do so.
          </p>

          <p className="questions-text">The Service</p>

          <p className="answer-text">
            The Cheersly Service offers a third party integration to messenger
            service platform - Slack.
          </p>

          <p className="questions-text">
            Relationship with Slack Technologies Inc.
          </p>

          <p className="answer-text">
            Cheersly and Slack Technologies Inc, the provider of the Slack
            communication service, (“Slack”) are different entities. There is no
            relationship between Cheersly and Slack, other than Cheersly being a
            licensee and use of the Slack API for the purpose of providing the
            Cheersly Service. Slack is not responsible for the Cheersly Service
            and will not provide support for the Cheersly Service. This
            Agreement does not apply to your use of the Slack services.
          </p>

          {/* <p className="questions-text">Payments</p>

          <p className="answer-text">
            Our billing and payments processing infrastructure is on PayPal{" "}
            <a href="https://www.paypal.com">(https://www.paypal.com)</a>.
          </p> */}

          <p className="questions-text">Refund policy</p>

          <p className="answer-text">
            We have a 15 day money back guarantee if you are not satisfied with
            our services.
          </p>

          <p className="questions-text">License to use website</p>

          <p className="answer-text">
            Unless otherwise stated, Cheersly and/or its licensors own the
            intellectual property rights in the website and material on the
            website. Subject to the license below, all these intellectual
            property rights are reserved.
          </p>

          <p className="answer-text">
            You may view, download for caching purposes only, and print pages or
            other content from our website for your own personal use, subject to
            the restrictions set out below and elsewhere in these terms of
            service.
          </p>

          <p className="questions-text">You must not:</p>

          <p className="answer-text">
            Republish material from this website (including republication on
            another website). Sell, rent or sub-license material from the
            website. Reproduce, duplicate, copy or otherwise exploit material on
            this website for a commercial purpose.
          </p>

          <p className="answer-text">
            Where content is specifically made available for redistribution, it
            may only be redistributed.
          </p>

          <p className="questions-text">Acceptable use</p>

          <p className="answer-text">
            You must not use our website in any way that causes, or may cause,
            damage to the website or impairment of the availability or
            accessibility of the website; or in any way which is unlawful,
            illegal, fraudulent or harmful, or in connection with any unlawful,
            illegal, fraudulent or harmful purpose or activity.
          </p>

          <p className="answer-text">
            You must not use this website to copy, store, host, transmit, send,
            use, publish or distribute any material which consists of (or is
            linked to) any spyware, computer virus, Trojan horse, worm,
            keystroke logger, rootkit or other malicious computer software.
          </p>

          <p className="answer-text">
            You must not conduct any systematic or automated data collection
            activities (including without limitation scraping, data mining, data
            extraction and data harvesting) on or in relation to this website
            without our express written consent.
          </p>

          <p className="answer-text">
            You must not use this website to transmit or send unsolicited
            commercial communications. You must not use this website for any
            purposes related to marketing without our express written consent.
          </p>

          <p className="questions-text">Using Service</p>

          <p className="answer-text">
            You may only use the Cheersly Service as permitted by law. We may
            investigate and/or suspend or terminate our Service to you at any
            time if we find your use of our Service violates the Agreement
            and/or any policies.
          </p>

          <p className="answer-text">
            You must not abuse and/or misuse our Service, including but not
            limited to, doing the following: - Using the Service for any
            unlawful purposes or activities; - uploading any content to the
            Service in violation of any applicable law, including but not
            limited to, intellectual property laws and publicity laws; -
            accessing or tampering with the Service’s server systems; -
            interfering with or disrupting the access of any user, host, or
            network; - abusing or submitting excessively frequent requests to
            the Service via the API or via the Slack Messenger.
          </p>

          <p className="answer-text">
            Cheersly, in its sole discretion, will determine abuse and/or misuse
            of our Service.
          </p>

          <p className="questions-text">Changes to services</p>

          <p className="answer-text">
            We reserve the right to modify and discontinue offering or updating
            the Service at any time without notice. We will not be liable to you
            or to any third party for any modification, suspension or
            discontinuance of the Service.
          </p>

          <p className="questions-text">Amendments</p>

          <p className="answer-text">
            We may amend, modify, change, add or remove portions of this
            Agreement at any time without notice to you by posting a revised
            version on the Service and/or by emailing you. The revised version
            will be effective at the time we post it to the website or otherwise
            notify you. Your continued use of the Service after such posting or
            notification of the changes constitutes your binding acceptance of
            such changes.
          </p>

          <p className="questions-text">Termination</p>

          <p className="answer-text">
            You may terminate your account and end your use of the Service at
            any time and for any or no reason. Cheersly has the right (at its
            sole discretion) for any reason to (i) delete, disable or deactivate
            your account, block your email or IP address, or otherwise terminate
            your access to or use of the web site or (ii) shut down an account,
            with or without notice, and with no liability of any kind to you.
          </p>

          <p className="answer-text">
            On termination of the Agreement by any party and for any reason all
            rights granted to you under the Agreement shall cease and you must
            immediately cease all activities authorized by the Agreement,
            including your use of the Cheersly Service. Cheersly&apos;s rights
            survive the termination of this Agreement.
          </p>

          <p className="questions-text">Limited Liability for our Service</p>

          <p className="answer-text">
            To the maximum extent permitted by law, the Cheersly Service is
            provided “as is” and “as available”. You expressly understand and
            agree that when permitted by law, Cheersly and its service partners,
            licensors, employees, agents will not be responsible for any lost
            profits, revenues, or data, financial losses or indirect, special,
            consequential, exemplary, or punitive damages under any
            circumstances.
          </p>

          <p className="answer-text">
            Your use and/or purchase of Service are all at your sole risk.
          </p>

          <p className="answer-text">
            Cheersly does not warrant that:
            <ul>
              <li>
                The Service will meet all of your requirements at all times;
              </li>
              <li>
                the Service will be error-free and all errors in the service
                will be corrected;
              </li>
              <li>the Service will be uninterrupted.</li>
            </ul>
          </p>

          <p className="answer-text">
            All content downloaded, uploaded and/or otherwise obtained through
            the use of the service is done at your own discretion and risk and
            you are solely responsible for any damage to your computer equipment
            or devices, including but not limited to, laptop computers, desktop
            computers, tablets, smartphones and smartwatches, or any data loss
            resulting from download or use of any such above mentioned material.
          </p>

          <div>
            <p className="questions-text">
              General Representation and Warranty
            </p>

            <p className="answer-text">
              You represent and warrant that your use of the Cheersly Service
              will be in strict accordance with the Agreement. In particular,
              you represent and warrant that:
              <ul>
                <li>
                  you will comply with the Slack Terms of Service at all times;
                </li>
                <li>
                  you will provide us with accurate information (where
                  required);
                </li>
                <li>
                  you will not use the Service in the event of an emergency;
                </li>
                <li>
                  you will not use the Service in any unlawful manner, for any
                  unlawful purpose, or in any manner inconsistent with the
                  Agreement, or act fraudulently or maliciously, for example, by
                  hacking into or inserting malicious code, including viruses,
                  or harmful data, into the Service;
                </li>
                <li>
                  you will not infringe our intellectual property rights or
                  those of any third party in relation to your use of the
                  Service;
                </li>
                <li>
                  you will not do any of the following in relation to your use
                  of the Service:
                  <ul>
                    <li>be obscene, offensive, hateful or inflammatory,</li>
                    <li>defame any person,</li>
                    <li>
                      promote discrimination based on race, sex, religion,
                      nationality, disability, sexual orientation or age,
                    </li>
                    <li>promote violence,</li>
                    <li>promote any illegal activity,</li>
                    <li>promote sexually explicit material,</li>
                    <li>
                      disclose the name, address, telephone number, e-mail
                      address or any other personal data in respect of any
                      individual without their consent,
                    </li>

                    <li>
                      harass, upset, embarrass, threaten, alarm or annoy any
                      other person,
                    </li>
                    <li>be likely to mislead or deceive any person,</li>
                    <li>
                      impersonate any person, or misrepresent your identity or
                      affiliation with any person,
                    </li>
                    <li>
                      contain any advertising or promote any services or web
                      links to other sites;
                    </li>
                  </ul>
                </li>

                <li>
                  you will not use the Service in a way that could damage,
                  disable, overburden, impair or compromise our systems or
                  security or interfere with other users; and
                </li>
                <li>
                  you will not collect or harvest any information or data from
                  any content or our systems or attempt to decipher any
                  transmissions to or from the servers running the Service.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
