
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
// audio
import {AMSynthAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/AMSynth';
import {EnvelopeAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Envelope';
import {NullAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Null';
import {PlayInstrumentAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/PlayInstrument';
import {SamplerAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Sampler';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';
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


export const requiredImports_scene_03 = {
	nodes: [
		ConstantActorNode,
		FloatToVec3ActorNode,
		GetObjectAttributeActorNode,
		OnObjectHoverActorNode,
		OnTickActorNode,
		PlayInstrumentNoteActorNode,
		SetObjectMaterialColorActorNode,
		SetObjectRotationActorNode,
		TriggerTwoWaySwitchActorNode,
		TwoWaySwitchActorNode,
		AMSynthAudioNode,
		EnvelopeAudioNode,
		NullAudioNode,
		PlayInstrumentAudioNode,
		SamplerAudioNode,
		CameraOrbitControlsEventNode,
		MeshStandardMatNode,
		AudioListenerObjNode,
		GeoObjNode,
		HemisphereLightObjNode,
		PerspectiveCameraObjNode,
		PositionalAudioObjNode,
		SpotLightObjNode,
		ActorSopNode,
		AudioNotesSopNode,
		BoxSopNode,
		CopySopNode,
		EventsNetworkSopNode,
		MaterialSopNode,
		MaterialsNetworkSopNode,
		TransformSopNode
	],
	operations: [
		
	]
}
