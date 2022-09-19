// cop
import { ImageCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { HemisphereLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
import { SpotLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight";
// sop
import { CircleSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Circle";
import { CopNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CopNetwork";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { OceanPlaneSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/OceanPlane";
import { PlaneSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_scene_01 = {
  nodes: [
    ImageCopNode,
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    GeoObjNode,
    HemisphereLightObjNode,
    PerspectiveCameraObjNode,
    SpotLightObjNode,
    CircleSopNode,
    CopNetworkSopNode,
    CopySopNode,
    EventsNetworkSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    OceanPlaneSopNode,
    PlaneSopNode,
    TransformSopNode,
  ],
  operations: [],
};
