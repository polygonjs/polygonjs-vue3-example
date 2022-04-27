import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651080377052',
	root: '1651080377052',
	nodes: {
		geo1: '1651080377052',
		'geo1/COP': '1651080377052',
		'geo1/MAT': '1651080377052',
		perspectiveCamera1: '1651080377052',
		'perspectiveCamera1/events1': '1651080377052',
		ocean: '1651080377052',
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
