export type IpcInvokeMap = Record<
  string,
  {
    args: readonly unknown[];
    return: unknown;
  }
>;
