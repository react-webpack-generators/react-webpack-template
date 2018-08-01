/**
 * Function to get the shallow output for a given component
 * As we are using phantom.js, we also need to include the fn.proto.bind shim!
 *
 * @see http://simonsmith.io/unit-testing-react-components-without-a-dom/
 * @author somonsmith
 */
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow'

/**
 * Get the shallow rendered component
 *
 * @param  {Object} component The component to return the output for
 * @param  {Object} props [optional] The components properties
 * @param  {Mixed} ...children [optional] List of children
 * @return {Object} Shallow rendered output
 */
console.log(ShallowRenderer.render)
export default function createComponent(component, props = {}, ...children) {
  const renderer = new ShallowRenderer();
  // const shallowRenderer = TestUtils.createRenderer();
  renderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return renderer.getRenderOutput();
}
