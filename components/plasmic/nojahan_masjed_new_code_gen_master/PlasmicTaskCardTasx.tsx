// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x5n9pjkHvzguzBipVWhAiz
// Component: pNWA3CgjmfOy

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

import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import { useScreenVariants as useScreenVariantslyy4ZuIrWoht } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: lyy4ZUIrWoht/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x5n9pjkHvzguzBipVWhAiz/projectcss
import sty from "./PlasmicTaskCardTasx.module.css"; // plasmic-import: pNWA3CgjmfOy/css

import DangerSvgrepoComSvgIcon from "./icons/PlasmicIcon__DangerSvgrepoComSvg"; // plasmic-import: DFqhlB_acJTj/icon
import EditStreamlineTablerSvgIcon from "./icons/PlasmicIcon__EditStreamlineTablerSvg"; // plasmic-import: JHjItL2k5LM6/icon
import FemaleSvgrepoComSvgIcon from "./icons/PlasmicIcon__FemaleSvgrepoComSvg"; // plasmic-import: rCOHyDWJuOrd/icon
import MaleSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__MaleSvgrepoCom2Svg"; // plasmic-import: 5hZD53HT3wtA/icon
import TimeSvgrepoComSvgIcon from "./icons/PlasmicIcon__TimeSvgrepoComSvg"; // plasmic-import: uoZWmXgx_k0s/icon

createPlasmicElementProxy;

export type PlasmicTaskCardTasx__VariantMembers = {
  activeS: "activeS";
  disabledS: "disabledS";
  doneS: "doneS";
  draftS: "draftS";
};
export type PlasmicTaskCardTasx__VariantsArgs = {
  activeS?: SingleBooleanChoiceArg<"activeS">;
  disabledS?: SingleBooleanChoiceArg<"disabledS">;
  doneS?: SingleBooleanChoiceArg<"doneS">;
  draftS?: SingleBooleanChoiceArg<"draftS">;
};
type VariantPropType = keyof PlasmicTaskCardTasx__VariantsArgs;
export const PlasmicTaskCardTasx__VariantProps = new Array<VariantPropType>(
  "activeS",
  "disabledS",
  "doneS",
  "draftS"
);

export type PlasmicTaskCardTasx__ArgsType = {
  titel2?: string;
  description2?: string;
  time?: string;
  gender?: string;
  userId?: string;
  detail?: string;
  age?: string;
  taskId?: number;
  status?: string;
  firstName?: string;
  lastName?: string;
};
type ArgPropType = keyof PlasmicTaskCardTasx__ArgsType;
export const PlasmicTaskCardTasx__ArgProps = new Array<ArgPropType>(
  "titel2",
  "description2",
  "time",
  "gender",
  "userId",
  "detail",
  "age",
  "taskId",
  "status",
  "firstName",
  "lastName"
);

export type PlasmicTaskCardTasx__OverridesType = {
  root?: Flex__<"div">;
  user?: Flex__<"div">;
  doText?: Flex__<"div">;
  task?: Flex__<"div">;
  detailModal?: Flex__<typeof AntdModal>;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultTaskCardTasxProps {
  titel2?: string;
  description2?: string;
  time?: string;
  gender?: string;
  userId?: string;
  detail?: string;
  age?: string;
  taskId?: number;
  status?: string;
  firstName?: string;
  lastName?: string;
  activeS?: SingleBooleanChoiceArg<"activeS">;
  disabledS?: SingleBooleanChoiceArg<"disabledS">;
  doneS?: SingleBooleanChoiceArg<"doneS">;
  draftS?: SingleBooleanChoiceArg<"draftS">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTaskCardTasx__RenderFunc(props: {
  variants: PlasmicTaskCardTasx__VariantsArgs;
  args: PlasmicTaskCardTasx__ArgsType;
  overrides: PlasmicTaskCardTasx__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          titel2: "\u0627\u0633\u0645 \u06a9\u0627\u0631",
          description2:
            "\u062c\u0632\u0626\u06cc\u0627\u062a \u0622\u0646 \u06a9\u0627\u0631"
        },
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "detailModal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "activeS",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.activeS
      },
      {
        path: "disabledS",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disabledS
      },
      {
        path: "doneS",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.doneS
      },
      {
        path: "draftS",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.draftS
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantslyy4ZuIrWoht()
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
    >
      <div className={classNames(projectcss.all, sty.freeBox__eeEpj)}>
        <div className={classNames(projectcss.all, sty.freeBox__r0AiG)}>
          <div
            data-plasmic-name={"user"}
            data-plasmic-override={overrides.user}
            className={classNames(projectcss.all, sty.user)}
            dir={"rtl"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4QX0D
              )}
            >
              {"\u0645\u0633\u0626\u0648\u0644 \u0627\u0646\u062c\u0627\u0645:"}
            </div>
            <div
              data-plasmic-name={"doText"}
              data-plasmic-override={overrides.doText}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.doText
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return !!$props?.firstName
                      ? $props?.firstName + " " + $props?.lastName
                      : "بدون مسئول";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\u0628\u062f\u0648\u0646 \u0645\u0633\u0626\u0648\u0644";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            {(() => {
              try {
                return !$props?.firstName && !$props?.lastName;
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
              <DangerSvgrepoComSvgIcon
                className={classNames(projectcss.all, sty.svg___62BoP)}
                role={"img"}
              />
            ) : null}
          </div>
          <div
            data-plasmic-name={"task"}
            data-plasmic-override={overrides.task}
            className={classNames(projectcss.all, sty.task)}
            dir={"rtl"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mwhB8)}>
              <div className={classNames(projectcss.all, sty.freeBox__znQru)}>
                <div className={classNames(projectcss.all, sty.freeBox__k4XxF)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xRq7L
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $props.titel2;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u06a9\u0627\u0631";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox___2Ff9)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__m5KE0,
                      {
                        [sty.textactiveS__m5KE0728WG]: hasVariant(
                          $state,
                          "activeS",
                          "activeS"
                        ),
                        [sty.textdisabledS__m5KE0XkuPx]: hasVariant(
                          $state,
                          "disabledS",
                          "disabledS"
                        ),
                        [sty.textdoneS__m5KE0Te58F]: hasVariant(
                          $state,
                          "doneS",
                          "doneS"
                        ),
                        [sty.textdraftS__m5KE0CV0W]: hasVariant(
                          $state,
                          "draftS",
                          "draftS"
                        )
                      }
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $props.status === "active"
                            ? "منتشر شده"
                            : $props.status === "done"
                            ? "انجام شده"
                            : $props.status === "disabled"
                            ? "بایگانی شده"
                            : "پیش‌نویس";
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
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___2GBw8)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uhOj6
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.description2;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "\u062c\u0632\u0626\u06cc\u0627\u062a \u06a9\u0627\u0631";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__is0FD)}>
          <div className={classNames(projectcss.all, sty.freeBox__zxa1C)}>
            <AntdButton
              className={classNames("__wab_instance", sty.button__qvCux)}
              onClick={async () => {
                const $steps = {};

                $steps["goToAdminEditTask"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/task/${(() => {
                          try {
                            return $ctx.params.activityId;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}/${(() => {
                          try {
                            return $props.taskId;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}/edit`
                      };
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
                  $steps["goToAdminEditTask"] != null &&
                  typeof $steps["goToAdminEditTask"] === "object" &&
                  typeof $steps["goToAdminEditTask"].then === "function"
                ) {
                  $steps["goToAdminEditTask"] = await $steps[
                    "goToAdminEditTask"
                  ];
                }
              }}
            >
              <div className={classNames(projectcss.all, sty.freeBox__eTpMn)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oYaab
                  )}
                >
                  {"\u0648\u06cc\u0631\u0627\u06cc\u0634"}
                </div>
                <EditStreamlineTablerSvgIcon
                  className={classNames(projectcss.all, sty.svg__ejMLc)}
                  role={"img"}
                />
              </div>
            </AntdButton>
            {(() => {
              try {
                return !!$props?.detail;
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
              <AntdModal
                data-plasmic-name={"detailModal"}
                data-plasmic-override={overrides.detailModal}
                className={classNames("__wab_instance", sty.detailModal)}
                closeButtonClassName={classNames({
                  [sty["pcls_1fyVcDgzdf26"]]: true
                })}
                defaultStylesClassName={classNames(
                  projectcss.root_reset,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens,
                  plasmic_plasmic_rich_components_css.plasmic_tokens
                )}
                footer={
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__hXzx6)}
                    onClick={async () => {
                      const $steps = {};

                      $steps["updateModalOpen"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["detailModal", "open"]
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
                        $steps["updateModalOpen"] != null &&
                        typeof $steps["updateModalOpen"] === "object" &&
                        typeof $steps["updateModalOpen"].then === "function"
                      ) {
                        $steps["updateModalOpen"] = await $steps[
                          "updateModalOpen"
                        ];
                      }
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__c0FeO
                      )}
                    >
                      {"\u0641\u0647\u0645\u06cc\u062f\u0645"}
                    </div>
                  </AntdButton>
                }
                modalContentClassName={classNames({
                  [sty["pcls_zoLM3nPXN47G"]]: true
                })}
                modalScopeClassName={sty["detailModal__modal"]}
                onOpenChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "detailModal",
                    "open"
                  ]).apply(null, eventArgs);
                }}
                open={generateStateValueProp($state, ["detailModal", "open"])}
                title={
                  <div
                    className={classNames(projectcss.all, sty.freeBox__quIq4)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__q2FHu
                      )}
                    >
                      {"\u062c\u0632\u0626\u06cc\u0627\u062a"}
                    </div>
                  </div>
                }
                trigger={
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__kjh6N)}
                    danger={false}
                    onClick={async () => {
                      const $steps = {};
                    }}
                    shape={"default"}
                    type={"default"}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__un38G)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ujXcU
                        )}
                      >
                        {"\u062c\u0632\u0626\u06cc\u0627\u062a"}
                      </div>
                    </div>
                  </AntdButton>
                }
                wrapClassName={classNames({ [sty["pcls_vqGpc8fnNq48"]]: true })}
              >
                <div className={classNames(projectcss.all, sty.freeBox__zayQu)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cuIc6
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $props.detail;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u062c\u0632\u0626\u06cc\u0627\u062a \u0645\u0633\u0626\u0648\u0644\u06cc\u062a";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={(() => {
                      try {
                        return $props.detail;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "...";
                        }
                        throw e;
                      }
                    })()}
                  />
                </div>
              </AntdModal>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__gtBdb)}>
            <FemaleSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__dmYxn)}
              role={"img"}
            />

            <MaleSvgrepoCom2SvgIcon
              className={classNames(projectcss.all, sty.svg___9FjJj)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sf9Tt
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.age === "1"
                      ? "نونهال"
                      : $props.age === "2"
                      ? "نوجوان"
                      : $props.age === "3"
                      ? "جوان"
                      : $props.age === "4"
                      ? "بزرگسال"
                      : "";
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
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ybG6)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uAOlS
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
                      return "\u0632\u0645\u0627\u0646 \u0627\u0646\u062c\u0627\u0645";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <TimeSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg___1Dy0Q)}
              role={"img"}
            />
          </Stack__>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "user", "doText", "task", "detailModal", "embedHtml"],
  user: ["user", "doText"],
  doText: ["doText"],
  task: ["task"],
  detailModal: ["detailModal", "embedHtml"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  user: "div";
  doText: "div";
  task: "div";
  detailModal: typeof AntdModal;
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTaskCardTasx__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTaskCardTasx__VariantsArgs;
    args?: PlasmicTaskCardTasx__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTaskCardTasx__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTaskCardTasx__ArgsType,
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
          internalArgPropNames: PlasmicTaskCardTasx__ArgProps,
          internalVariantPropNames: PlasmicTaskCardTasx__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTaskCardTasx__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTaskCardTasx";
  } else {
    func.displayName = `PlasmicTaskCardTasx.${nodeName}`;
  }
  return func;
}

export const PlasmicTaskCardTasx = Object.assign(
  // Top-level PlasmicTaskCardTasx renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    user: makeNodeComponent("user"),
    doText: makeNodeComponent("doText"),
    task: makeNodeComponent("task"),
    detailModal: makeNodeComponent("detailModal"),
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicTaskCardTasx
    internalVariantProps: PlasmicTaskCardTasx__VariantProps,
    internalArgProps: PlasmicTaskCardTasx__ArgProps
  }
);

export default PlasmicTaskCardTasx;
/* prettier-ignore-end */
