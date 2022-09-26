import { expect, it } from "vitest"
import { word_hello } from "./hello"

it("Hello should be 5 characters", async () => {
  expect(word_hello.length).toBe(5)
})
