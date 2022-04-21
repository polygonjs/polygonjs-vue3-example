import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
import manifest from './manifest.json';

export const loadSceneData_scene_02 = async (options) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes'
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_02',
		urlPrefix: sceneDataRoot + '/' + 'scene_02',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
