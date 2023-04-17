"use client"

import SecondaryNavBar from "app/components/shared/SecondaryNavBar"
import SideBar from "app/components/shared/SideBar"

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
  return (
    <>
      <SideBar setOpenSecondayNavBar={setOpenSecondayNavBar} />
      {openSecondayNavBar && (
        <SecondaryNavBar
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
