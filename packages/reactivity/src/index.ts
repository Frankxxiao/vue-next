/**
 * 整个响应式的思路如下：
 *  1. 通过 ref / reactive 方法来构造 proxy 模式的响应式变量
 *  2. 并搭建一个庞大的 targetMap (响应式的变量 key 与 副作用 effect 的关系)
 *  3. 通过 effectWatch / computed，并立即执行副作用函数(effect)，触发 proxy 的get方法
 *  4. 触发 track，将副作用函数(effect)与对应的响应式变量关联，即放入到 targetMap 中
 *  5. 当响应式变量发生变化的时候，触发 trigger，执行 targetMap 中存储的所有副作用函数(effect)
 */
export {
  ref,
  shallowRef,
  isRef,
  toRef,
  toRefs,
  unref,
  proxyRefs,
  customRef,
  triggerRef,
  Ref,
  ToRefs,
  UnwrapRef,
  ShallowUnwrapRef,
  RefUnwrapBailTypes
} from './ref'
export {
  reactive,
  readonly,
  isReactive,
  isReadonly,
  isProxy,
  shallowReactive,
  shallowReadonly,
  markRaw,
  toRaw,
  ReactiveFlags,
  DeepReadonly
} from './reactive'
export {
  computed,
  ComputedRef,
  WritableComputedRef,
  WritableComputedOptions,
  ComputedGetter,
  ComputedSetter
} from './computed'
export {
  effect,
  stop,
  trigger,
  track,
  enableTracking,
  pauseTracking,
  resetTracking,
  ITERATE_KEY,
  ReactiveEffect,
  ReactiveEffectOptions,
  DebuggerEvent
} from './effect'
export { TrackOpTypes, TriggerOpTypes } from './operations'
