import { LoadedData } from "./loadScene";

interface LoadSceneAndMountOptions {
  domElement?: string | undefined;
  publicPath: string;
  onProgress: (progress: number) => void;
}

type LoadSceneAndMount_scene_02 = (
  options: LoadSceneAndMountOptions
) => Promise<LoadedData>;

export const loadSceneAndMount_scene_02: LoadSceneAndMount_scene_02;
