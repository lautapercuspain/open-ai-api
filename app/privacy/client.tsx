"use client"

import { useSignInModal } from "app/components/modals/SignInModal"
import HeaderWrapper from "app/components/shared/HeaderWrapper"

export default function Client() {
  const { SignInModal, setShowSignInModal, showSignInModal } = useSignInModal(
    {},
  )

  return (
    <>
      <div className="flex min-h-screen flex-nowrap font-sans">
        <div className="mx-auto max-w-max pb-10">
          <SignInModal />
          <HeaderWrapper
            setShowSignInModal={setShowSignInModal}
            showSignInModal={showSignInModal}
            session={undefined}
            userHasAccount={undefined}
          />
          <div className="mx-auto mt-28 w-[80%]">
            <h1 className="my-3 ml-4 text-3xl text-white">Privacy Policy</h1>
            <p className="p-4 text-white">
              We, at Code Genius, accessible from https://code-genius.dev, one
              of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Code Genius and how we use it. If you
              have additional questions or require more information about our
              Privacy Policy, do not hesitate to contact us. This Privacy Policy
              applies only to our online activities and is valid for visitors to
              our website with regards to the information that they shared
              and/or collect in Code Genius. This policy is not applicable to
              any information collected offline or via channels other than this
              website. Content By using our website, you hereby consent to our
              Privacy Policy and agree to its terms. Information we collect The
              personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information. If
              you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide. When you register
              for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and
              telephone number. How we use your information We use the
              information we collect in various ways, including to: Provide,
              operate, and maintain our website Improve, personalise, and expand
              our website Understand and analyze how you use our website Develop
              new products, services, features, and functionality Communicate
              with you, either directly or through one of our partners,
              including for customer service, to provide you with updates and
              other information relating to the website, and for marketing and
              promotional purposes Send you emails Find and prevent fraud Log
              Files Code Genius follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services&apos; analytics.
              The information collected by log files include internet protocol
              (IP) addresses, browser type, Internet Service Provider (ISP),
              date and time stamp, referring/exit pages, and possibly the number
              of clicks. These are not linked to any information that is
              personally identifiable. The purpose of the information is for
              analyzing trends, administering the site, tracking users&apos;
              movement on the website, and gathering demographic information.
              Advertising Partners Privacy Policies You may consult this list to
              find the Privacy Policy for each of the advertising partners of
              Code Genius. Third-party ad servers or ad networks uses
              technologies like cookies, JavaScript, or Web Beacons that are
              used in their respective advertisements and links that appear on
              Code Genius, which are sent directly to users&apos; browser. They
              automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their
              advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit. Note that Code
              Genius has no access to or control over these cookies that are
              used by third-party advertisers. Third Party Privacy Policies Code
              Genius&apos;s Privacy Policy does not apply to other advertisers
              or websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options. You can choose to disable
              cookies through your individual browser options. To know more
              detailed information about cookie management with specific web
              browsers, it can be found at the browsers&apos; respective
              websites. CCPA Privacy Rights Under the CCPA, among other rights,
              California consumers have the right to: Request that a business
              that collects a consumer&apos;s personal data disclose the
              categories and specific pieces of personal data that a business
              has collected about consumers. Request that a business delete any
              personal data about the consumer that a business has collected.
              Request that a business that sells a consumer&apos;s personal
              data, not sell the consumer&apos;s personal data. If you make a
              request, we have one month to respond to you. If you would like to
              exercise any of these rights, please contact us. GDPR Data
              Protection Rights We would like to make sure you are fully aware
              of all of your data protection rights. Every user is entitled to
              the following: The right to access – You have the right to request
              copies of your personal data. We may charge you a small fee for
              this service. The right to rectification – You have the right to
              request that we correct any information you believe is inaccurate.
              You also have the right to request that we complete the
              information you believe is incomplete. The right to erasure – You
              have the right to request that we erase your personal data, under
              certain conditions. The right to restrict processing – You have
              the right to request that we restrict the processing of your
              personal data, under certain conditions. The right to object to
              processing – You have the right to object to our processing of
              your personal data, under certain conditions. The right to data
              portability – You have the right to request that we transfer the
              data that we have collected to another organization, or directly
              to you, under certain conditions. If you make a request, we have
              one month to respond to you. If you would like to exercise any of
              these rights, please contact us Changes to the privacy policy Code
              Genius may make changes to this privacy policy at any time by
              giving a notice on the website and/or by other applicable means.
              The data subjects are highly recommended to review the privacy
              policy on our website every now and then. If the data subject
              objects to any of the changes to this privacy policy, the data
              subject should cease using the services, where applicable, and
              they can request that we remove the personal data, unless
              applicable laws require us to retain such personal data. Unless
              stated otherwise, the then-current privacy policy applies to all
              personal data we process at the time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
