import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
import manifest from './manifest.json';

export const loadSceneData_scene_03 = async (options) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes'
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_03',
		urlPrefix: sceneDataRoot + '/' + 'scene_03',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
