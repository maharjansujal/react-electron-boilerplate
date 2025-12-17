// src/main/preload.ts
import { contextBridge, ipcRenderer } from "electron";
import type { IpcInvokeMap } from "../shared/ipc";

type Invoke = <K extends keyof IpcInvokeMap>(
  channel: K,
  ...args: IpcInvokeMap[K]["args"]
) => Promise<IpcInvokeMap[K]["return"]>;

const api: { invoke: Invoke } = {
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
};

contextBridge.exposeInMainWorld("api", api);
