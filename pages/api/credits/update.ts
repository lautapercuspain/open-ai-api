import { harperClient } from "lib/harperdb"

export default async function handler(req, res) {
  const bodyRequest = req.body
  console.log("bodyRequest:", bodyRequest)

  const existingUser = await harperClient({
    operation: "sql",
    sql: `SELECT * FROM Auth.Users WHERE id = "${bodyRequest.userId}"`,
  })

  console.log("type of apiCalls ", typeof existingUser[0]?.apiCalls)
  console.log("apiCalls ", existingUser[0]?.apiCalls)

  const updatedUser = {
    ...existingUser[0],
    apiCalls: existingUser[0]?.apiCalls
      ? Number(existingUser[0]?.apiCalls) + 1
      : 1,
    tokensCount: existingUser[0]?.tokensCount
      ? Number(existingUser[0]?.tokensCount) + bodyRequest.tokensCount
      : bodyRequest.tokensCount,
  }
  if (existingUser && existingUser[0]) {
    //Update the user API calls
    //UPDATE USER WITH TOTAL CREDITS
    try {
      const updatedOp = await harperClient({
        operation: "update",
        schema: "Auth",
        table: "Users",
        hash_values: [
          {
            id: existingUser[0]?.id,
          },
        ],
        records: [updatedUser],
      })
      console.log("updatedOp:", updatedOp)
      if (updatedOp.update_hashes[0] !== "") {
        console.log("Wallaaa")
        console.log("updated payload", updatedUser)
        res.status(200).json(updatedUser)
      }
    } catch (error) {
      console.log("error updating user credits", error)
    }
  }

  res.status(400).json({ ok: false })
}
