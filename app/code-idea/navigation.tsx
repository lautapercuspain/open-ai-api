"use client"

import SecondaryNavBar from "app/components/shared/SecondaryNavBar"
import SideBar from "app/components/shared/SideBar"
import { usePathname } from "next/navigation"

export default function Navigation({
  mode,
  smartSelected,
  setMode,
  setOpenSecondaryNavBar,
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

  return (
    <>
      <SideBar
        pathname={pathname}
        setMode={setMode}
        mode={mode}
        setSmartSelected={setSmartSelected}
        setImproveSelected={setImproveSelected}
        setDocSelected={setDocSelected}
        setTestSelected={setTestSelected}
        setOpenSecondaryNavBar={setOpenSecondaryNavBar}
      />
      {openSecondayNavBar && (
        <SecondaryNavBar
          setOpenSecondayNavBar={setOpenSecondaryNavBar}
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
