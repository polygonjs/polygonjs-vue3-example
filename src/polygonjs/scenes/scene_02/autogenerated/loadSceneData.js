import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651080367786',
	root: '1651080367786',
	nodes: {
		perspectiveCamera1: '1651080367786',
		'perspectiveCamera1/events1': '1651080367786',
		floor: '1651080367786',
		COP: '1651080367786',
		geo2: '1651080367786',
		'geo2/MAT': '1651080367786',
		rhino: '1651080367786',
		'rhino/MAT': '1651080367786',
		'rhino/MAT/meshPhysicalBuilder1': '1651080367786',
		'rhino/MAT/meshLambertBuilder_INSTANCES': '1651080367786',
		'rhino/MAT/meshPhysicalBuilder_INSTANCES': '1651080367786',
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
