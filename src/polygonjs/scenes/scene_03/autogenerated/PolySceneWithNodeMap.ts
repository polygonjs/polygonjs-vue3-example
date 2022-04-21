
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {AudioListenerObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/AudioListener';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {PositionalAudioObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PositionalAudio';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {ActorSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor';
import {AudioNotesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AudioNotes';
import {BoxSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
// actor
import {ConstantActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/Constant';
import {FloatToVec3ActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/FloatToVec3';
import {GetObjectAttributeActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetObjectAttribute';
import {OnObjectHoverActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnObjectHover';
import {OnTickActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick';
import {PlayInstrumentNoteActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/PlayInstrumentNote';
import {SetObjectMaterialColorActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectMaterialColor';
import {SetObjectRotationActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectRotation';
import {TriggerTwoWaySwitchActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/TriggerTwoWaySwitch';
import {TwoWaySwitchActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/TwoWaySwitch';
// mat
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// audio
import {AMSynthAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/AMSynth';
import {EnvelopeAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Envelope';
import {NullAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Null';
import {PlayInstrumentAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/PlayInstrument';
import {SamplerAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Sampler';

export class PolySceneWithNodeMap_scene_03 extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/audioListener1'): AudioListenerObjNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/box1'): BoxSopNode;
	node(path: '/geo1/transform1'): TransformSopNode;
	node(path: '/geo1/copy1'): CopySopNode;
	node(path: '/geo1/audioNotes1'): AudioNotesSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/actor1'): ActorSopNode;
	node(path: '/geo1/actor1/onObjectHover1'): OnObjectHoverActorNode;
	node(path: '/geo1/actor1/playInstrumentNote1'): PlayInstrumentNoteActorNode;
	node(path: '/geo1/actor1/getObjectAttribute1'): GetObjectAttributeActorNode;
	node(path: '/geo1/actor1/triggerTwoWaySwitch1'): TriggerTwoWaySwitchActorNode;
	node(path: '/geo1/actor1/twoWaySwitch1'): TwoWaySwitchActorNode;
	node(path: '/geo1/actor1/constant1'): ConstantActorNode;
	node(path: '/geo1/actor1/constant2'): ConstantActorNode;
	node(path: '/geo1/actor1/onTick1'): OnTickActorNode;
	node(path: '/geo1/actor1/setObjectMaterialColor1'): SetObjectMaterialColorActorNode;
	node(path: '/geo1/actor1/twoWaySwitch2'): TwoWaySwitchActorNode;
	node(path: '/geo1/actor1/setObjectRotation1'): SetObjectRotationActorNode;
	node(path: '/geo1/actor1/twoWaySwitch3'): TwoWaySwitchActorNode;
	node(path: '/geo1/actor1/floatToVec3_1'): FloatToVec3ActorNode;
	node(path: '/geo1/actor1/twoWaySwitch4'): TwoWaySwitchActorNode;
	node(path: '/geo1/MAT'): MaterialsNetworkSopNode;
	node(path: '/geo1/MAT/meshStandard1'): MeshStandardMatNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/positionalAudio1'): PositionalAudioObjNode;
	node(path: '/positionalAudio1/envelope1'): EnvelopeAudioNode;
	node(path: '/positionalAudio1/AMSynth1'): AMSynthAudioNode;
	node(path: '/positionalAudio1/playInstrument1'): PlayInstrumentAudioNode;
	node(path: '/positionalAudio1/OUT'): NullAudioNode;
	node(path: '/positionalAudio1/sampler1'): SamplerAudioNode;
	node(path: '/positionalAudio1/envelope2'): EnvelopeAudioNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
