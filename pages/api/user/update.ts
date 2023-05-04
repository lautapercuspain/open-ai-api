import { harperClient } from "lib/harperdb"

export default async function handler(req, res) {
  const bodyRequest = req.body
  console.log("bodyRequest:", bodyRequest)

  const existingUser = await harperClient({
    operation: "sql",
    sql: `SELECT * FROM Auth.Users WHERE id = "${bodyRequest.userId}"`,
  })

  if (existingUser && existingUser[0]) {
    //Update the user Object
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
        records: [bodyRequest.updatedUser],
      })
      console.log("updatedOp:", updatedOp)
      if (updatedOp.update_hashes[0] !== "") {
        return res
          .status(200)
          .json({ creditsLeft: bodyRequest.updatedUser.credits, ok: true })
      }
    } catch (error) {
      console.log("error updating user credits", error)
    }
  }

  res.status(400).json({ ok: false })
}
