import * as React from 'react'
import renderer from 'react-test-renderer'

import { ExternalLink } from '../ExternalLink'

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <ExternalLink href="https://www.example.com/">
        Snapshot test!
      </ExternalLink>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
