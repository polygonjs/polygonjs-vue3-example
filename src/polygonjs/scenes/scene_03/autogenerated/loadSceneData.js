import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1652118053214',
	root: '1652118053214',
	nodes: {
		geo1: '1652118053214',
		'geo1/actor1': '1652118053214',
		'geo1/MAT': '1652118053214',
		perspectiveCamera1: '1652118053214',
		'perspectiveCamera1/events1': '1652118053214',
		positionalAudio1: '1652118053214',
	},
};

export const loadSceneData_scene_03 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_03',
		urlPrefix: sceneDataRoot + '/' + 'scene_03',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
