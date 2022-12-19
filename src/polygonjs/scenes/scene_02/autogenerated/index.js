import { fetchSceneAndMount_scene_02 } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_scene_02(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-scene_02";
  const loadedData = await fetchSceneAndMount_scene_02({
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
