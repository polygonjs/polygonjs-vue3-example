import { LoadedData } from "./loadScene";

interface LoadSceneAndMountOptions {
  domElement?: string | undefined;
  publicPath: string;
  onProgress: (progress: number) => void;
}

type LoadSceneAndMount_scene_03 = (
  options: LoadSceneAndMountOptions
) => Promise<LoadedData>;

export const loadSceneAndMount_scene_03: LoadSceneAndMount_scene_03;
