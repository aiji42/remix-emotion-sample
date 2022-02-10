/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useCatch } from "remix";

export const loader = () => {
  throw new Response('', { status: 404 })
}

export default () => {
  return null
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <div css={css`color: red;`}>
      <h1>{caught.statusText}</h1>
    </div>
  )
}
