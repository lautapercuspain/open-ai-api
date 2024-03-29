import { OpenAITurboPayload, OpenAITurboStream } from "../../utils/OpenAIStream"

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI")
}

export const config = {
  runtime: "edge",
}

const handler = async (req: Request): Promise<any> => {
  const { messages } = (await req.json()) as {
    messages?: []
  }

  const payload: OpenAITurboPayload = {
    model: "gpt-3.5-turbo-0125",
    messages,
    stream: true,
  }

  const openAIStream = await OpenAITurboStream(payload)
  return new Response(openAIStream)
}

export default handler
