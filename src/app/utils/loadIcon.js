// utils/loadIcon.js
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";

// Mapping of available libraries
const libraries = {
  ri: RiIcons,
  io5: IoIcons,
};

/**
 * Load an icon safely by name + library.
 * @param {string} iconName - Exact icon export name (e.g. "RiFacebookLine", "IoHomeOutline").
 * @param {string} [library="ri"] - Library key ("ri", "io5", "fa").
 * @returns {React.Component} Icon component or empty component if not found.
 */
export const loadIcon = (iconName, library = "ri") => {
  const lib = libraries[library] || {};
  return lib[iconName] || (() => <></>);
};
