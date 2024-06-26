import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nft-drop',

  projectId: 'z2ddtj1j',
  dataset: 'production',

  plugins: [structureTool()],
  // plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
