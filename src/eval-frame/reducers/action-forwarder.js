/*  global IODIDE_BUILD_MODE */
import { postActionToEditor } from '../port-to-editor'

// this function forwards actions to the editor
// FIXME THIS IS CRITICAL
// for securty reasons, the actions must be whitelisted
// and verified against schema on the editor side.

const actionForwarder = (state, action) => {
  // FIXME: this is a terrible hack to make the tests work.
  // it must be stamped out.
  if (IODIDE_BUILD_MODE !== 'test') {
    try {
      postActionToEditor(action)
      console.log('EVAL FRAME ACTION', action)
    } catch (error) {
      console.log('EVAL FRAME ACTION POST TO EDITOR FAILED')
    }
  }
  return state
}

export default actionForwarder