import React from "react";
import HookApp from "./hook/Hook.App";
import NoneHookApp from "./hook/NoneHook.App";
import HookInput from "./hook/Hook.Input";
import HookTab from "./hook/Hook.Tab";
import HookEffect from "./hook/Hook.Effect";
import HookTitle from "./hook/Hook.Title";
import HookRef from "./hook/Hook.Ref";
import Confirm from "./hook/Confirm";
import PreventLeave from "./hook/PreventLeave";
import LeaveDocument from "./hook/Hook.Leave.document";
import FadeIn from "./hook/Hook.FadeIn";
import HookNetwork from "./hook/Hook.Network";
import HookScroll from "./hook/Hook.Scroll";
import HookFullScreen from "./hook/Hook.FullScreen";
import Notification from "./hook/Notification";
import UseAxios from "./hook/Hook.Axios";

export default function App() {
  return (
    <div className="App">
      <h1> Hook Axios </h1>
      <UseAxios />

      <h1> Notification </h1>
      <Notification />

      <h1> Full Screen </h1>
      <HookFullScreen />

      <h1> Hook Scroll </h1>
      <HookScroll />

      <h1> Hook Network </h1>
      <HookNetwork />

      <h1> FadeIn </h1>
      <FadeIn />

      <h1> Leave Document </h1>
      <LeaveDocument />

      <h1> Project / Unprotect </h1>
      <PreventLeave />

      <h1> Confim </h1>
      <Confirm />

      <h1>Hook Ref</h1>
      <HookRef />

      <h1>Hook Title</h1>
      <HookTitle />

      <h1>Hook Effect</h1>
      <HookEffect />

      <h1>Hook Tabs</h1>
      <HookTab />

      <h1>Hook Input</h1>
      <HookInput />

      <h1>Hook Use</h1>
      <HookApp />

      <h1>Hook None Use</h1>
      <NoneHookApp />
    </div>
  );
}
