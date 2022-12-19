import { fetchSceneAndMount_scene_03 } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_scene_03(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-scene_03";
  const loadedData = await fetchSceneAndMount_scene_03({
    domElement,
    autoPlay: true,
    onProgress,
    moduleImportSuffix: ".js",
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
