import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1652118039352',
	root: '1652118039352',
	nodes: {
		geo1: '1652118039352',
		'geo1/COP': '1652118039352',
		'geo1/MAT': '1652118039352',
		perspectiveCamera1: '1652118039352',
		'perspectiveCamera1/events1': '1652118039352',
		ocean: '1652118039352',
	},
};

export const loadSceneData_scene_01 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_01',
		urlPrefix: sceneDataRoot + '/' + 'scene_01',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
