"use client"

import SecondaryNavBar from "app/components/shared/SecondaryNavBar"
import SideBar from "app/components/shared/SideBar"
import { usePathname } from "next/navigation"

export default function Navigation({
  mode,
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
      <SideBar mode={mode} setOpenSecondayNavBar={setOpenSecondayNavBar} />
      {openSecondayNavBar && (
        <SecondaryNavBar
          setOpenSecondayNavBar={setOpenSecondayNavBar}
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
