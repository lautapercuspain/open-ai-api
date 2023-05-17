"use client"

import { useSignInModal } from "app/components/modals/SignInModal"
import HeaderWrapper from "app/components/shared/HeaderWrapper"

export default function Client() {
  const { SignInModal, setShowSignInModal, showSignInModal } = useSignInModal(
    {},
  )

  return (
    <>
      <div className="flex min-h-screen flex-nowrap">
        <div className="mx-auto max-w-max pb-10">
          <SignInModal />
          <HeaderWrapper
            setShowSignInModal={setShowSignInModal}
            showSignInModal={showSignInModal}
            session={undefined}
            userHasAccount={undefined}
          />
          <div className="mx-auto mt-14 w-[80%]">
            <p className="p-4 text-white">
              1. Terms By accessing this Website, accessible from Kodezi.com,
              you are agreeing to be bound by these Website Terms and Conditions
              of Use and agree that you are responsible for the agreement with
              any applicable local laws. If you disagree with any of these
              terms, you are prohibited from accessing this site. The materials
              contained in this Website are protected by copyright and trade
              mark law. 2. Use License Permission is granted to temporarily
              download one copy of the materials on Code Genius. Website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not: modify or copy the materials; use the
              materials for any commercial purpose or for any public display;
              attempt to reverse engineer any software contained on Code Genius.
              Website; remove any copyright or other proprietary notations from
              the materials; or transferring the materials to another person or
              &quot;mirror&quot; the materials on any other server. This will
              let Code Genius. to terminate upon violations of any of these
              restrictions. Upon termination, your viewing right will also be
              terminated and you should destroy any downloaded materials in your
              possession whether it is printed or electronic format. 3.
              Disclaimer All the materials on Code Genius. Website are provided
              &quot;as is&quot;. Code Genius. makes no warranties, may it be
              expressed or implied, therefore negates all other warranties.
              Furthermore, Kodezi Inc. does not make any representations
              concerning the accuracy or reliability of the use of the materials
              on its Website or otherwise relating to such materials or any
              sites linked to this Website. 4. Limitations Code Genius. or its
              suppliers will not be hold accountable for any damages that will
              arise with the use or inability to use the materials on Code
              Genius. Website, even if Code Genius. or an authorize
              representative of this Website has been notified, orally or
              written, of the possibility of such damage. Some jurisdiction does
              not allow limitations on implied warranties or limitations of
              liability for incidental damages, these limitations may not apply
              to you. 5. Revisions and Errata The materials appearing on Code
              Genius. Website may include technical, typographical, or
              photographic errors. Code Genius. will not promise that any of the
              materials in this Website are accurate, complete, or current. Code
              Genius. may change the materials contained on its Website at any
              time without notice. Code Genius. does not make any commitment to
              update the materials. 6. Links Code Genius. has not reviewed all
              of the sites linked to its Website and is not responsible for the
              contents of any such linked site. The presence of any link does
              not imply endorsement by Code Genius. of the site. The use of any
              linked website is at the user’s own risk. 7. Site Terms of Use
              Modifications Code Genius. may revise these Terms of Use for its
              Website at any time without prior notice. By using this Website,
              you are agreeing to be bound by the current version of these Terms
              and Conditions of Use. 8. Your Privacy Please read our Privacy
              Policy. 9. Governing Law Any claim related to Code Genius. Website
              shall be governed by the laws of Delaware without regards to its
              conflict of law provisions.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
