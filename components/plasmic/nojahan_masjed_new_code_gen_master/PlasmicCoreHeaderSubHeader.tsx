// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x5n9pjkHvzguzBipVWhAiz
// Component: Hsif2_wuRX1g

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

import { AntdDrawer } from "@plasmicpkgs/antd5/skinny/registerDrawer";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import AuthLoginComponent from "../../AuthLoginComponent"; // plasmic-import: Tm95Yqly1EMg/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x5n9pjkHvzguzBipVWhAiz/projectcss
import sty from "./PlasmicCoreHeaderSubHeader.module.css"; // plasmic-import: Hsif2_wuRX1g/css

import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: pvRfclCatxOV/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: ELgPVVGypR9T/icon
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: 1XX1FqE2P08x/icon
import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: wumpzot6JlJS/icon
import LogoNoSvgIcon from "./icons/PlasmicIcon__LogoNoSvg"; // plasmic-import: Bi9ZoqrIWUrr/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: 6qMjah-m2ZUu/icon

createPlasmicElementProxy;

export type PlasmicCoreHeaderSubHeader__VariantMembers = {};
export type PlasmicCoreHeaderSubHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicCoreHeaderSubHeader__VariantsArgs;
export const PlasmicCoreHeaderSubHeader__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCoreHeaderSubHeader__ArgsType = {};
type ArgPropType = keyof PlasmicCoreHeaderSubHeader__ArgsType;
export const PlasmicCoreHeaderSubHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicCoreHeaderSubHeader__OverridesType = {
  root?: Flex__<"div">;
  drawer?: Flex__<typeof AntdDrawer>;
  hr?: Flex__<"div">;
  loginModalDrawer?: Flex__<typeof AntdModal>;
  loginComponent2?: Flex__<typeof AuthLoginComponent>;
  button?: Flex__<typeof AntdButton>;
};

export interface DefaultCoreHeaderSubHeaderProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCoreHeaderSubHeader__RenderFunc(props: {
  variants: PlasmicCoreHeaderSubHeader__VariantsArgs;
  args: PlasmicCoreHeaderSubHeader__ArgsType;
  overrides: PlasmicCoreHeaderSubHeader__OverridesType;
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
        path: "drawer.open",
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
      },
      {
        path: "loginModalDrawer.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "loginComponent2.loginDetail",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
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
      <div className={classNames(projectcss.all, sty.freeBox___5Es8Z)}>
        <Icon11Icon
          className={classNames(projectcss.all, sty.svg__a2NO)}
          onClick={async event => {
            const $steps = {};

            $steps["updateDrawerOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["drawer", "open"]
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
              $steps["updateDrawerOpen"] != null &&
              typeof $steps["updateDrawerOpen"] === "object" &&
              typeof $steps["updateDrawerOpen"].then === "function"
            ) {
              $steps["updateDrawerOpen"] = await $steps["updateDrawerOpen"];
            }
          }}
          role={"img"}
        />

        <AntdDrawer
          data-plasmic-name={"drawer"}
          data-plasmic-override={overrides.drawer}
          className={classNames("__wab_instance", sty.drawer)}
          defaultStylesClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens
          )}
          drawerScopeClassName={sty["drawer__drawer"]}
          footer={null}
          onOpenChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["drawer", "open"]).apply(
              null,
              eventArgs
            );
          }}
          open={generateStateValueProp($state, ["drawer", "open"])}
          title={""}
        >
          <div className={classNames(projectcss.all, sty.freeBox__wHi2O)}>
            <div
              className={classNames(projectcss.all, sty.freeBox___2Q581)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHome"] = true
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
                  $steps["goToHome"] != null &&
                  typeof $steps["goToHome"] === "object" &&
                  typeof $steps["goToHome"].then === "function"
                ) {
                  $steps["goToHome"] = await $steps["goToHome"];
                }

                $steps["updateDrawerOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["drawer", "open"]
                        },
                        operation: 0,
                        value: false
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
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
                  $steps["updateDrawerOpen"] != null &&
                  typeof $steps["updateDrawerOpen"] === "object" &&
                  typeof $steps["updateDrawerOpen"].then === "function"
                ) {
                  $steps["updateDrawerOpen"] = await $steps["updateDrawerOpen"];
                }
              }}
            >
              <Icon12Icon
                className={classNames(projectcss.all, sty.svg__oheFa)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__g5I9U
                )}
              >
                {"\u062e\u0627\u0646\u0647"}
              </div>
            </div>
            <div
              className={classNames(projectcss.all, sty.freeBox__py1Ua)}
              onClick={async event => {
                const $steps = {};

                $steps["goToChat"] = true
                  ? (() => {
                      const actionArgs = { destination: `/chat` };
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
                  $steps["goToChat"] != null &&
                  typeof $steps["goToChat"] === "object" &&
                  typeof $steps["goToChat"].then === "function"
                ) {
                  $steps["goToChat"] = await $steps["goToChat"];
                }

                $steps["updateDrawerOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["drawer", "open"]
                        },
                        operation: 0,
                        value: false
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
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
                  $steps["updateDrawerOpen"] != null &&
                  typeof $steps["updateDrawerOpen"] === "object" &&
                  typeof $steps["updateDrawerOpen"].then === "function"
                ) {
                  $steps["updateDrawerOpen"] = await $steps["updateDrawerOpen"];
                }
              }}
            >
              <Icon14Icon
                className={classNames(projectcss.all, sty.svg__wFq1Z)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mxbee
                )}
              >
                {
                  "\u06af\u0641\u062a\u200c\u0648\u06af\u0648 \u0628\u0627 \u0627\u0645\u0627\u0645 \u062c\u0645\u0627\u0639\u062a"
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__sQrDx)}>
              <div
                data-plasmic-name={"hr"}
                data-plasmic-override={overrides.hr}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.hr
                )}
              >
                {""}
              </div>
            </div>
            {(() => {
              try {
                return !!$state?.auth?.token;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(projectcss.all, sty.freeBox__wSmh4)}
                onClick={async event => {
                  const $steps = {};

                  $steps["logOut"] = true
                    ? (() => {
                        const actionArgs = { args: [] };
                        return $globalActions[
                          "AuthGlobalContext.logout"
                        ]?.apply(null, [...actionArgs.args]);
                      })()
                    : undefined;
                  if (
                    $steps["logOut"] != null &&
                    typeof $steps["logOut"] === "object" &&
                    typeof $steps["logOut"].then === "function"
                  ) {
                    $steps["logOut"] = await $steps["logOut"];
                  }

                  $steps["deleteLocalStorage"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return localStorage.removeItem(
                              "AuthorizationDetail"
                            );
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["deleteLocalStorage"] != null &&
                    typeof $steps["deleteLocalStorage"] === "object" &&
                    typeof $steps["deleteLocalStorage"].then === "function"
                  ) {
                    $steps["deleteLocalStorage"] = await $steps[
                      "deleteLocalStorage"
                    ];
                  }

                  $steps["successNotification"] = true
                    ? (() => {
                        const actionArgs = {
                          args: [
                            "success",
                            "\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f."
                          ]
                        };
                        return $globalActions[
                          "plasmic-antd5-config-provider.showNotification"
                        ]?.apply(null, [...actionArgs.args]);
                      })()
                    : undefined;
                  if (
                    $steps["successNotification"] != null &&
                    typeof $steps["successNotification"] === "object" &&
                    typeof $steps["successNotification"].then === "function"
                  ) {
                    $steps["successNotification"] = await $steps[
                      "successNotification"
                    ];
                  }

                  $steps["updateDrawerOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["drawer", "open"]
                          },
                          operation: 0,
                          value: false
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
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
                    $steps["updateDrawerOpen"] != null &&
                    typeof $steps["updateDrawerOpen"] === "object" &&
                    typeof $steps["updateDrawerOpen"].then === "function"
                  ) {
                    $steps["updateDrawerOpen"] = await $steps[
                      "updateDrawerOpen"
                    ];
                  }
                }}
              >
                <Icon13Icon
                  className={classNames(projectcss.all, sty.svg__jmeJq)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wWxLx
                  )}
                >
                  {
                    "\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc\n"
                  }
                </div>
              </div>
            ) : null}
            {(() => {
              try {
                return !$state?.auth?.token;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div className={classNames(projectcss.all, sty.freeBox__nkk4V)}>
                <AntdModal
                  data-plasmic-name={"loginModalDrawer"}
                  data-plasmic-override={overrides.loginModalDrawer}
                  className={classNames("__wab_instance", sty.loginModalDrawer)}
                  defaultStylesClassName={classNames(
                    projectcss.root_reset,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens,
                    plasmic_plasmic_rich_components_css.plasmic_tokens
                  )}
                  footer={
                    <div
                      className={classNames(projectcss.all, sty.freeBox__yiDbe)}
                    />
                  }
                  modalScopeClassName={sty["loginModalDrawer__modal"]}
                  onCancel={async () => {
                    const $steps = {};

                    $steps["updateLoginModalOpen"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["loginModalDrawer", "open"]
                            },
                            operation: 0,
                            value: false
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
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
                    generateStateOnChangeProp($state, [
                      "loginModalDrawer",
                      "open"
                    ]).apply(null, eventArgs);

                    (async open => {
                      const $steps = {};
                    }).apply(null, eventArgs);
                  }}
                  open={generateStateValueProp($state, [
                    "loginModalDrawer",
                    "open"
                  ])}
                  title={null}
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
                          sty.text__xIPoP
                        )}
                      >
                        {
                          "\u0648\u0631\u0648\u062f \u0628\u0647 \u0646\u0648\u062c\u0647\u0627\u0646"
                        }
                      </div>
                    </AntdButton>
                  }
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__musq6)}
                  >
                    <AuthLoginComponent
                      data-plasmic-name={"loginComponent2"}
                      data-plasmic-override={overrides.loginComponent2}
                      className={classNames(
                        "__wab_instance",
                        sty.loginComponent2
                      )}
                      loginDetail={generateStateValueProp($state, [
                        "loginComponent2",
                        "loginDetail"
                      ])}
                      onLoginDetailChange={async (...eventArgs: any) => {
                        generateStateOnChangeProp($state, [
                          "loginComponent2",
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
              </div>
            ) : null}
          </div>
        </AntdDrawer>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__bd52C)}>
        <LogoNoSvgIcon
          className={classNames(projectcss.all, sty.svg__rnTtm)}
          role={"img"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__tDhPr)}>
        <Icon15Icon
          className={classNames(projectcss.all, sty.svg__wXn7C)}
          onClick={async event => {
            const $steps = {};

            $steps["runCode"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return (() => {
                        if (typeof window !== "undefined") {
                          return window.history.back();
                        }
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
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "drawer",
    "hr",
    "loginModalDrawer",
    "loginComponent2",
    "button"
  ],
  drawer: ["drawer", "hr", "loginModalDrawer", "loginComponent2", "button"],
  hr: ["hr"],
  loginModalDrawer: ["loginModalDrawer", "loginComponent2", "button"],
  loginComponent2: ["loginComponent2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  drawer: typeof AntdDrawer;
  hr: "div";
  loginModalDrawer: typeof AntdModal;
  loginComponent2: typeof AuthLoginComponent;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCoreHeaderSubHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCoreHeaderSubHeader__VariantsArgs;
    args?: PlasmicCoreHeaderSubHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCoreHeaderSubHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCoreHeaderSubHeader__ArgsType,
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
          internalArgPropNames: PlasmicCoreHeaderSubHeader__ArgProps,
          internalVariantPropNames: PlasmicCoreHeaderSubHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCoreHeaderSubHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCoreHeaderSubHeader";
  } else {
    func.displayName = `PlasmicCoreHeaderSubHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicCoreHeaderSubHeader = Object.assign(
  // Top-level PlasmicCoreHeaderSubHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    drawer: makeNodeComponent("drawer"),
    hr: makeNodeComponent("hr"),
    loginModalDrawer: makeNodeComponent("loginModalDrawer"),
    loginComponent2: makeNodeComponent("loginComponent2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCoreHeaderSubHeader
    internalVariantProps: PlasmicCoreHeaderSubHeader__VariantProps,
    internalArgProps: PlasmicCoreHeaderSubHeader__ArgProps
  }
);

export default PlasmicCoreHeaderSubHeader;
/* prettier-ignore-end */
