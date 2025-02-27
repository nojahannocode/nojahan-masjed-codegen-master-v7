import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import {ApiRequest, apiRequestMeta} from "@/angel/ApiRequest";
import {Angel, angelMeta} from "@/angel/Angel";
import {registerFunction, registerGlobalContext} from "@plasmicapp/host";
import {getLocalStorageValue, getLocalStorageValueMeta} from "@/angel/getLocalStorageValue";
import {me, meMeta} from "@/angel/me";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)
registerGlobalContext(Angel, angelMeta);
registerComponent(ApiRequest, apiRequestMeta);
registerFunction(getLocalStorageValue, getLocalStorageValueMeta)
registerFunction(me, meMeta)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
