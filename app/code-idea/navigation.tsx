"use client"

import SecondaryNavBar from "app/components/shared/SecondaryNavBar"
import SideBar from "app/components/shared/SideBar"
import { usePathname } from "next/navigation"

export default function Navigation({
  smartSelected,
  setOpenSecondayNavBar,
  openSecondayNavBar,
  improveSelected,
  setImproveSelected,
  testSelected,
  setTestSelected,
  bugSelected,
  setBugSelected,
  docSelected,
  setDocSelected,
  setSmartSelected,
}) {
  const pathname = usePathname()
  const isCodeModeSelected =
    smartSelected | improveSelected | testSelected | bugSelected | docSelected
  console.log("isCodeModeSelected", isCodeModeSelected)

  return (
    <>
      <SideBar setOpenSecondayNavBar={setOpenSecondayNavBar} />
      {openSecondayNavBar && (
        <SecondaryNavBar
          isCodeModeSelected={isCodeModeSelected}
          openSecondayNavBar={openSecondayNavBar}
          improveSelected={improveSelected}
          setImproveSelected={setImproveSelected}
          smartSelected={smartSelected}
          setSmartSelected={setSmartSelected}
          testSelected={testSelected}
          setTestSelected={setTestSelected}
          bugSelected={bugSelected}
          setBugSelected={setBugSelected}
          docSelected={docSelected}
          setDocSelected={setDocSelected}
        />
      )}
    </>
  )
}