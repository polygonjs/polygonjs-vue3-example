
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {CopNetworkObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {PointLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PointLight';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PolarTransform';
// sop
import {AttribDeleteSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribDelete';
import {CircleSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Circle';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {FileGLTFSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/FileGLTF';
import {FuseSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Fuse';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {InstanceSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {NullSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Null';
import {ObjectPropertiesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/ObjectProperties';
import {PointSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Point';
import {ReflectorSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Reflector';
import {RoundedBoxSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/RoundedBox';
import {ScatterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter';
import {SphereSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// cop
import {EnvMapCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap';
import {ImageEXRCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR';
// mat
import {MeshBasicMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasic';
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder';
import {MeshPhysicalBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshPhysicalBuilder';

export class PolySceneWithNodeMap_scene_02 extends PolyScene {
	node(path: '/polarTransform1'): PolarTransformObjNode;
	node(path: '/pointLight1'): PointLightObjNode;
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/floor'): GeoObjNode;
	node(path: '/floor/circle1'): CircleSopNode;
	node(path: '/floor/reflector1'): ReflectorSopNode;
	node(path: '/COP'): CopNetworkObjNode;
	node(path: '/COP/image1'): ImageEXRCopNode;
	node(path: '/COP/envMap1'): EnvMapCopNode;
	node(path: '/geo2'): GeoObjNode;
	node(path: '/geo2/sphere1'): SphereSopNode;
	node(path: '/geo2/material1'): MaterialSopNode;
	node(path: '/geo2/objectProperties1'): ObjectPropertiesSopNode;
	node(path: '/geo2/MAT'): MaterialsNetworkSopNode;
	node(path: '/geo2/MAT/meshBasic1'): MeshBasicMatNode;
	node(path: '/rhino'): GeoObjNode;
	node(path: '/rhino/material1'): MaterialSopNode;
	node(path: '/rhino/fileGLTF1'): FileGLTFSopNode;
	node(path: '/rhino/hierarchy1'): HierarchySopNode;
	node(path: '/rhino/scatter1'): ScatterSopNode;
	node(path: '/rhino/point1'): PointSopNode;
	node(path: '/rhino/fuse1'): FuseSopNode;
	node(path: '/rhino/instance1'): InstanceSopNode;
	node(path: '/rhino/attribDelete1'): AttribDeleteSopNode;
	node(path: '/rhino/roundedBox1'): RoundedBoxSopNode;
	node(path: '/rhino/transform1'): TransformSopNode;
	node(path: '/rhino/merge1'): MergeSopNode;
	node(path: '/rhino/OUT'): NullSopNode;
	node(path: '/rhino/MAT'): MaterialsNetworkSopNode;
	node(path: '/rhino/MAT/meshPhysicalBuilder1'): MeshPhysicalBuilderMatNode;
	node(path: '/rhino/MAT/meshLambertBuilder_INSTANCES'): MeshLambertBuilderMatNode;
	node(path: '/rhino/MAT/meshPhysicalBuilder_INSTANCES'): MeshPhysicalBuilderMatNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
