import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1652118046250',
	root: '1652118046250',
	nodes: {
		perspectiveCamera1: '1652118046250',
		'perspectiveCamera1/events1': '1652118046250',
		floor: '1652118046250',
		COP: '1652118046250',
		geo2: '1652118046250',
		'geo2/MAT': '1652118046250',
		rhino: '1652118046250',
		'rhino/MAT': '1652118046250',
		'rhino/MAT/meshPhysicalBuilder1': '1652118046250',
		'rhino/MAT/meshLambertBuilder_INSTANCES': '1652118046250',
		'rhino/MAT/meshPhysicalBuilder_INSTANCES': '1652118046250',
	},
};

export const loadSceneData_scene_02 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_02',
		urlPrefix: sceneDataRoot + '/' + 'scene_02',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
