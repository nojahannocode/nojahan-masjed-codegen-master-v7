// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x5n9pjkHvzguzBipVWhAiz
// Component: VlMYCqzuHxtq

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import CoreHeaderAdminHeader from "../../CoreHeaderAdminHeader"; // plasmic-import: ZTGMlsvVVp1c/component
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import TaskCardActivitie from "../../TaskCardActivitie"; // plasmic-import: 8x-tDBj79ns0/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x5n9pjkHvzguzBipVWhAiz/projectcss
import sty from "./PlasmicAdminActivityActivitesListest.module.css"; // plasmic-import: VlMYCqzuHxtq/css

import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: XASChn-p69Is/icon

createPlasmicElementProxy;

export type PlasmicAdminActivityActivitesListest__VariantMembers = {};
export type PlasmicAdminActivityActivitesListest__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdminActivityActivitesListest__VariantsArgs;
export const PlasmicAdminActivityActivitesListest__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAdminActivityActivitesListest__ArgsType = {};
type ArgPropType = keyof PlasmicAdminActivityActivitesListest__ArgsType;
export const PlasmicAdminActivityActivitesListest__ArgProps =
  new Array<ArgPropType>();

export type PlasmicAdminActivityActivitesListest__OverridesType = {
  root?: Flex__<"div">;
  coreHeaderAdminHeader?: Flex__<typeof CoreHeaderAdminHeader>;
  modal?: Flex__<typeof AntdModal>;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  svg?: Flex__<"svg">;
};

export interface DefaultAdminActivityActivitesListestProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAdminActivityActivitesListest__RenderFunc(props: {
  variants: PlasmicAdminActivityActivitesListest__VariantsArgs;
  args: PlasmicAdminActivityActivitesListest__ArgsType;
  overrides: PlasmicAdminActivityActivitesListest__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
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
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    admingetLIstActiveActivities: usePlasmicDataOp(() => {
      return {
        sourceId: "hfKFoF6NHFakDLEE3BFPLz",
        opId: "3f11b462-3eb2-4a08-8032-3a636e6e7df7",
        userArgs: {
          params: ["active"],
          headers: [$state?.auth?.token]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getLIstActiveActivities";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.3f11b462-3eb2-4a08-8032-3a636e6e7df7.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    admingetListInActiveActivities: usePlasmicDataOp(() => {
      return {
        sourceId: "hfKFoF6NHFakDLEE3BFPLz",
        opId: "3f11b462-3eb2-4a08-8032-3a636e6e7df7",
        userArgs: {
          params: ["inactive"],
          headers: [$state?.auth?.token]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getListInActiveActivities";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.3f11b462-3eb2-4a08-8032-3a636e6e7df7.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <CoreHeaderAdminHeader
            data-plasmic-name={"coreHeaderAdminHeader"}
            data-plasmic-override={overrides.coreHeaderAdminHeader}
            className={classNames("__wab_instance", sty.coreHeaderAdminHeader)}
          />

          <AntdModal
            data-plasmic-name={"modal"}
            data-plasmic-override={overrides.modal}
            className={classNames("__wab_instance", sty.modal)}
            defaultStylesClassName={classNames(
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens,
              plasmic_plasmic_rich_components_css.plasmic_tokens
            )}
            footer={
              <div className={classNames(projectcss.all, sty.freeBox__yWtKh)} />
            }
            modalScopeClassName={sty["modal__modal"]}
            onOpenChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["modal", "open"]).apply(
                null,
                eventArgs
              );
            }}
            open={generateStateValueProp($state, ["modal", "open"])}
            title={null}
            trigger={
              <AntdButton
                className={classNames("__wab_instance", sty.button__fDt0X)}
              >
                <Icon16Icon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </AntdButton>
            }
          >
            <div className={classNames(projectcss.all, sty.freeBox__uDctu)}>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.form),
                  extendedOnValuesChange: async (...eventArgs: any) => {
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["form", "value"],
                      FormWrapper_Helpers
                    ).apply(null, eventArgs);

                    (async (changedValues, allValues) => {
                      const $steps = {};
                    }).apply(null, eventArgs);
                  },
                  formItems: undefined,
                  labelCol: { span: 8, horizontalOnly: true },
                  layout: "vertical",
                  mode: undefined,
                  onFinish: async values => {
                    const $steps = {};

                    $steps["httpPost"] = true
                      ? (() => {
                          const actionArgs = {
                            dataOp: {
                              sourceId: "hfKFoF6NHFakDLEE3BFPLz",
                              opId: "6b1c5dae-2868-4769-806a-20d3e4368470",
                              userArgs: {
                                headers: [$state?.auth?.token],
                                body: [
                                  $state.form.value.name,
                                  $state.form.value.status,
                                  $state.form.value.gender
                                ]
                              },
                              cacheKey: null,
                              invalidatedKeys: [
                                "3f11b462-3eb2-4a08-8032-3a636e6e7df7",
                                "3f11b462-3eb2-4a08-8032-3a636e6e7df7"
                              ],
                              roleId: null
                            }
                          };
                          return (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                {
                                  userAuthToken: dataSourcesCtx?.userAuthToken,
                                  user: dataSourcesCtx?.user
                                }
                              );
                              await plasmicInvalidate(dataOp.invalidatedKeys);
                              return response;
                            } catch (e) {
                              if (!continueOnError) {
                                throw e;
                              }
                              return e;
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["httpPost"] != null &&
                      typeof $steps["httpPost"] === "object" &&
                      typeof $steps["httpPost"].then === "function"
                    ) {
                      $steps["httpPost"] = await $steps["httpPost"];
                    }

                    $steps["updateModalOpen"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["modal", "open"]
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
                  },
                  onIsSubmittingChange: async (...eventArgs: any) => {
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "isSubmitting",
                      ["form", "isSubmitting"],
                      FormWrapper_Helpers
                    ).apply(null, eventArgs);
                  },
                  ref: ref => {
                    $refs["form"] = ref;
                  },
                  wrapperCol: { span: 16, horizontalOnly: true }
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "form.value"
                    },
                    {
                      name: "isSubmitting",
                      plasmicStateName: "form.isSubmitting"
                    }
                  ],
                  [],
                  FormWrapper_Helpers ?? {},
                  child$Props
                );

                return (
                  <FormWrapper
                    data-plasmic-name={"form"}
                    data-plasmic-override={overrides.form}
                    {...child$Props}
                  >
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__t1Sg4
                      )}
                      label={
                        "\u0646\u0627\u0645 \u0641\u0639\u0627\u0644\u06cc\u062a"
                      }
                      name={"name"}
                      rules={[
                        {
                          ruleType: "required",
                          message:
                            "\u0641\u06cc\u0644\u062f \u0636\u0631\u0648\u0631\u06cc"
                        }
                      ]}
                    >
                      <AntdInput
                        className={classNames("__wab_instance", sty.input)}
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__vfnDf
                      )}
                      initialValue={"male"}
                      label={"\u062c\u0646\u0633\u06cc\u062a"}
                      name={"gender"}
                    >
                      <AntdSelect
                        className={classNames(
                          "__wab_instance",
                          sty.select__km76S
                        )}
                        defaultStylesClassName={classNames(
                          projectcss.root_reset,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens,
                          plasmic_plasmic_rich_components_css.plasmic_tokens
                        )}
                        options={(() => {
                          const __composite = [
                            { type: "option", label: null, value: null },
                            { type: "option", label: null, value: null },
                            { type: "option", label: null, value: null }
                          ];
                          __composite["0"]["label"] = "\u0645\u0631\u062f";
                          __composite["0"]["value"] = "male";
                          __composite["1"]["label"] = "\u0632\u0646";
                          __composite["1"]["value"] = "female";
                          __composite["2"]["label"] =
                            "\u0647\u0631 \u062f\u0648";
                          __composite["2"]["value"] = "both";
                          return __composite;
                        })()}
                        placeholder={"Select..."}
                        popupScopeClassName={sty["select__km76S__popup"]}
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__lt9Z
                      )}
                      initialValue={"active"}
                      label={"\u0648\u0636\u0639\u06cc\u062a"}
                      name={"status"}
                    >
                      <AntdSelect
                        className={classNames(
                          "__wab_instance",
                          sty.select___9G5Xq
                        )}
                        defaultStylesClassName={classNames(
                          projectcss.root_reset,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens,
                          plasmic_plasmic_rich_components_css.plasmic_tokens
                        )}
                        options={(() => {
                          const __composite = [
                            { type: "option", label: null, value: null },
                            { type: "option", label: null, value: null }
                          ];
                          __composite["0"]["label"] =
                            "\u0627\u0646\u062a\u0634\u0627\u0631";
                          __composite["0"]["value"] = "active";
                          __composite["1"]["label"] =
                            "\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633";
                          __composite["1"]["value"] = "inactive";
                          return __composite;
                        })()}
                        placeholder={"Select..."}
                        popupScopeClassName={sty["select___9G5Xq__popup"]}
                      />
                    </FormItemWrapper>
                    <AntdButton
                      className={classNames(
                        "__wab_instance",
                        sty.button__eZbZu
                      )}
                      submitsForm={true}
                      type={"primary"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__whdSy
                        )}
                      >
                        {
                          "\u062b\u0628\u062a \u0641\u0639\u0627\u0644\u06cc\u062a"
                        }
                      </div>
                    </AntdButton>
                  </FormWrapper>
                );
              })()}
            </div>
          </AntdModal>
          <div className={classNames(projectcss.all, sty.freeBox__xUbXw)}>
            {(() => {
              try {
                return (
                  !!$queries?.admingetLIstActiveActivities &&
                  !$queries?.admingetLIstActiveActivities?.data?.response
                    ?.message
                );
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
              <div className={classNames(projectcss.all, sty.freeBox__eceOp)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___2OI8Z)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aP3Ko
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {
                          "\u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u200c\u0647\u0627\u06cc \u062f\u0631 \u062c\u0631\u06cc\u0627\u0646"
                        }
                      </span>
                    </React.Fragment>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__td3Ff)}>
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $queries.admingetLIstActiveActivities.data
                          .response;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <TaskCardActivitie
                        className={classNames(
                          "__wab_instance",
                          sty.taskCardActivitie__qdJYz
                        )}
                        gender={(() => {
                          try {
                            return currentItem.gender;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        id={(() => {
                          try {
                            return currentItem?.id;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        key={currentIndex}
                        name={(() => {
                          try {
                            return currentItem.name;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        status={(() => {
                          try {
                            return currentItem.status;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                      />
                    );
                  })}
                </div>
              </div>
            ) : null}
            {(() => {
              try {
                return (
                  !!$queries?.admingetListInActiveActivities &&
                  !$queries?.admingetListInActiveActivities?.data?.response
                    ?.message
                );
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
              <div className={classNames(projectcss.all, sty.freeBox___98ZcV)}>
                <div className={classNames(projectcss.all, sty.freeBox__x2Yyz)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__v1BP8
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {
                          "\u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u200c\u0647\u0627\u06cc \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633"
                        }
                      </span>
                    </React.Fragment>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__rGLi)}>
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $queries.admingetListInActiveActivities.data
                          .response;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <TaskCardActivitie
                        className={classNames(
                          "__wab_instance",
                          sty.taskCardActivitie__ein3U
                        )}
                        gender={(() => {
                          try {
                            return currentItem.gender;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        id={(() => {
                          try {
                            return currentItem?.id;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        key={currentIndex}
                        name={(() => {
                          try {
                            return currentItem.name;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        status={(() => {
                          try {
                            return currentItem.status;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                      />
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "coreHeaderAdminHeader", "modal", "form", "input", "svg"],
  coreHeaderAdminHeader: ["coreHeaderAdminHeader"],
  modal: ["modal", "form", "input", "svg"],
  form: ["form", "input"],
  input: ["input"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  coreHeaderAdminHeader: typeof CoreHeaderAdminHeader;
  modal: typeof AntdModal;
  form: typeof FormWrapper;
  input: typeof AntdInput;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdminActivityActivitesListest__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdminActivityActivitesListest__VariantsArgs;
    args?: PlasmicAdminActivityActivitesListest__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicAdminActivityActivitesListest__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicAdminActivityActivitesListest__ArgsType,
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
          internalArgPropNames: PlasmicAdminActivityActivitesListest__ArgProps,
          internalVariantPropNames:
            PlasmicAdminActivityActivitesListest__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAdminActivityActivitesListest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdminActivityActivitesListest";
  } else {
    func.displayName = `PlasmicAdminActivityActivitesListest.${nodeName}`;
  }
  return func;
}

export const PlasmicAdminActivityActivitesListest = Object.assign(
  // Top-level PlasmicAdminActivityActivitesListest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    coreHeaderAdminHeader: makeNodeComponent("coreHeaderAdminHeader"),
    modal: makeNodeComponent("modal"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAdminActivityActivitesListest
    internalVariantProps: PlasmicAdminActivityActivitesListest__VariantProps,
    internalArgProps: PlasmicAdminActivityActivitesListest__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAdminActivityActivitesListest;
/* prettier-ignore-end */
