// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x5n9pjkHvzguzBipVWhAiz
// Component: MvAqwlqnyI4K

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import AuthLoginComponent from "../../AuthLoginComponent"; // plasmic-import: Tm95Yqly1EMg/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x5n9pjkHvzguzBipVWhAiz/projectcss
import sty from "./PlasmicTaskTaskCard.module.css"; // plasmic-import: MvAqwlqnyI4K/css

import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 9Lt6zWi16J6E/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: 6hb4tqLW60jH/icon
import TimeSvgrepoComSvgIcon from "./icons/PlasmicIcon__TimeSvgrepoComSvg"; // plasmic-import: uoZWmXgx_k0s/icon

import { me as __fn_me } from "@/angel/me"; // plasmic-import: me/customFunction

createPlasmicElementProxy;

export type PlasmicTaskTaskCard__VariantMembers = {};
export type PlasmicTaskTaskCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicTaskTaskCard__VariantsArgs;
export const PlasmicTaskTaskCard__VariantProps = new Array<VariantPropType>();

export type PlasmicTaskTaskCard__ArgsType = {
  title?: string;
  description?: string;
  id?: number;
  time?: string;
  detail?: string;
};
type ArgPropType = keyof PlasmicTaskTaskCard__ArgsType;
export const PlasmicTaskTaskCard__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "id",
  "time",
  "detail"
);

export type PlasmicTaskTaskCard__OverridesType = {
  root?: Flex__<"div">;
  loginModal?: Flex__<typeof AntdModal>;
  loginComponent?: Flex__<typeof AuthLoginComponent>;
  taskDetail?: Flex__<typeof AntdModal>;
  button?: Flex__<typeof AntdButton>;
};

export interface DefaultTaskTaskCardProps {
  title?: string;
  description?: string;
  id?: number;
  time?: string;
  detail?: string;
  className?: string;
}

const $$ = {
  me: __fn_me
};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTaskTaskCard__RenderFunc(props: {
  variants: PlasmicTaskTaskCard__VariantsArgs;
  args: PlasmicTaskTaskCard__ArgsType;
  overrides: PlasmicTaskTaskCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "loginModal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "loginComponent.loginDetail",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "taskDetail.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "auth",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return JSON.parse(localStorage.getItem("AuthorizationDetail"));
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      dir={"rtl"}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__dy4Ky)}
      >
        <Icon6Icon
          className={classNames(projectcss.all, sty.svg__kgd0Y)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__dCoR
          )}
          dir={"rtl"}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.title;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__i2J5H)}
      >
        <Icon5Icon
          className={classNames(projectcss.all, sty.svg__iuHr)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__h5RIp
          )}
          dir={"rtl"}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.description;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__pCayc)}>
        <AntdModal
          data-plasmic-name={"loginModal"}
          data-plasmic-override={overrides.loginModal}
          className={classNames("__wab_instance", sty.loginModal)}
          defaultStylesClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens
          )}
          footer={
            <div className={classNames(projectcss.all, sty.freeBox__k0622)} />
          }
          modalScopeClassName={sty["loginModal__modal"]}
          onCancel={async () => {
            const $steps = {};

            $steps["updateLoginModalOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["loginModal", "open"]
                    },
                    operation: 0,
                    value: false
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateLoginModalOpen"] != null &&
              typeof $steps["updateLoginModalOpen"] === "object" &&
              typeof $steps["updateLoginModalOpen"].then === "function"
            ) {
              $steps["updateLoginModalOpen"] = await $steps[
                "updateLoginModalOpen"
              ];
            }
          }}
          onOk={async () => {
            const $steps = {};
          }}
          onOpenChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["loginModal", "open"]).apply(
              null,
              eventArgs
            );

            (async open => {
              const $steps = {};
            }).apply(null, eventArgs);
          }}
          open={generateStateValueProp($state, ["loginModal", "open"])}
          title={null}
          trigger={null}
        >
          <div className={classNames(projectcss.all, sty.freeBox__yx3Vd)}>
            <AuthLoginComponent
              data-plasmic-name={"loginComponent"}
              data-plasmic-override={overrides.loginComponent}
              className={classNames("__wab_instance", sty.loginComponent)}
              loginDetail={generateStateValueProp($state, [
                "loginComponent",
                "loginDetail"
              ])}
              onLoginDetailChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "loginComponent",
                  "loginDetail"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
            />
          </div>
        </AntdModal>
        <div className={classNames(projectcss.all, sty.freeBox__aCzHl)}>
          <TimeSvgrepoComSvgIcon
            className={classNames(projectcss.all, sty.svg__hbGvK)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jyxou
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.time;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <AntdModal
            data-plasmic-name={"taskDetail"}
            data-plasmic-override={overrides.taskDetail}
            cancelText={"\u0627\u0646\u0635\u0631\u0627\u0641"}
            className={classNames("__wab_instance", sty.taskDetail)}
            defaultStylesClassName={classNames(
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens,
              plasmic_plasmic_rich_components_css.plasmic_tokens
            )}
            modalScopeClassName={sty["taskDetail__modal"]}
            okText={
              "\u0627\u0646\u062c\u0627\u0645\u0634 \u0645\u06cc\u062f\u0645"
            }
            onOk={async () => {
              const $steps = {};

              $steps["loginModal"] = !$$.me()?.token
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["loginModal", "open"]
                      },
                      operation: 0,
                      value: true
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["loginModal"] != null &&
                typeof $steps["loginModal"] === "object" &&
                typeof $steps["loginModal"].then === "function"
              ) {
                $steps["loginModal"] = await $steps["loginModal"];
              }

              $steps["taskModal"] = !$$.me()?.token
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["taskDetail", "open"]
                      },
                      operation: 0,
                      value: false
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["taskModal"] != null &&
                typeof $steps["taskModal"] === "object" &&
                typeof $steps["taskModal"].then === "function"
              ) {
                $steps["taskModal"] = await $steps["taskModal"];
              }

              $steps["useTask"] = !!$$.me()?.token
                ? (() => {
                    const actionArgs = {
                      args: [
                        "POST",
                        "https://noapi.darkube.app/webhook/start_task",
                        (() => {
                          try {
                            return {
                              task_id: $props.id
                            };
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })(),
                        undefined,
                        (() => {
                          try {
                            return { headers: { "x-token": $$.me()?.token } };
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()
                      ]
                    };
                    return $globalActions["Angel.apiRequest"]?.apply(null, [
                      ...actionArgs.args
                    ]);
                  })()
                : undefined;
              if (
                $steps["useTask"] != null &&
                typeof $steps["useTask"] === "object" &&
                typeof $steps["useTask"].then === "function"
              ) {
                $steps["useTask"] = await $steps["useTask"];
              }

              $steps["goToTask"] = !!$$.me()?.token
                ? (() => {
                    const actionArgs = { destination: `/` };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToTask"] != null &&
                typeof $steps["goToTask"] === "object" &&
                typeof $steps["goToTask"].then === "function"
              ) {
                $steps["goToTask"] = await $steps["goToTask"];
              }

              $steps["runCode"] = !!$$.me()?.token
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          return (window.location.href = window.location.href);
                        })();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode"] != null &&
                typeof $steps["runCode"] === "object" &&
                typeof $steps["runCode"].then === "function"
              ) {
                $steps["runCode"] = await $steps["runCode"];
              }
            }}
            onOpenChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["taskDetail", "open"]).apply(
                null,
                eventArgs
              );
            }}
            open={generateStateValueProp($state, ["taskDetail", "open"])}
            title={
              <div className={classNames(projectcss.all, sty.freeBox__nCZc8)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fScYb
                  )}
                >
                  {"\u0645\u0639\u0631\u0641\u06cc:"}
                </div>
              </div>
            }
            trigger={
              <AntdButton
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4CdP8
                  )}
                >
                  {"\u0645\u0634\u0627\u0647\u062f\u0647"}
                </div>
              </AntdButton>
            }
          >
            <div className={classNames(projectcss.all, sty.freeBox__ji7DX)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5ZTuV
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props?.description;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Modal content";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
          </AntdModal>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loginModal", "loginComponent", "taskDetail", "button"],
  loginModal: ["loginModal", "loginComponent"],
  loginComponent: ["loginComponent"],
  taskDetail: ["taskDetail", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginModal: typeof AntdModal;
  loginComponent: typeof AuthLoginComponent;
  taskDetail: typeof AntdModal;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTaskTaskCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTaskTaskCard__VariantsArgs;
    args?: PlasmicTaskTaskCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTaskTaskCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTaskTaskCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTaskTaskCard__ArgProps,
          internalVariantPropNames: PlasmicTaskTaskCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTaskTaskCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTaskTaskCard";
  } else {
    func.displayName = `PlasmicTaskTaskCard.${nodeName}`;
  }
  return func;
}

export const PlasmicTaskTaskCard = Object.assign(
  // Top-level PlasmicTaskTaskCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginModal: makeNodeComponent("loginModal"),
    loginComponent: makeNodeComponent("loginComponent"),
    taskDetail: makeNodeComponent("taskDetail"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicTaskTaskCard
    internalVariantProps: PlasmicTaskTaskCard__VariantProps,
    internalArgProps: PlasmicTaskTaskCard__ArgProps
  }
);

export default PlasmicTaskTaskCard;
/* prettier-ignore-end */
