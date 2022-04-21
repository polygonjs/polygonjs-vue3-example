
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {CircleSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Circle';
import {CopNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/CopNetwork';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {OceanPlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/OceanPlane';
import {PlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
// cop
import {ImageCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image';
// mat
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';

export class PolySceneWithNodeMap_scene_01 extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/copy1'): CopySopNode;
	node(path: '/geo1/plane1'): PlaneSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/transform1'): TransformSopNode;
	node(path: '/geo1/COP'): CopNetworkSopNode;
	node(path: '/geo1/COP/image_VUE'): ImageCopNode;
	node(path: '/geo1/MAT'): MaterialsNetworkSopNode;
	node(path: '/geo1/MAT/meshStandard1'): MeshStandardMatNode;
	node(path: '/geo1/transform2'): TransformSopNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/ocean'): GeoObjNode;
	node(path: '/ocean/circle1'): CircleSopNode;
	node(path: '/ocean/oceanPlane1'): OceanPlaneSopNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
