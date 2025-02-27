// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x5n9pjkHvzguzBipVWhAiz
// Component: Tm95Yqly1EMg

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

import CoreLabel from "../../CoreLabel"; // plasmic-import: ToRnt6m7Pbw7/component
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x5n9pjkHvzguzBipVWhAiz/projectcss
import sty from "./PlasmicAuthLoginComponent.module.css"; // plasmic-import: Tm95Yqly1EMg/css

import LogoNoSvgIcon from "./icons/PlasmicIcon__LogoNoSvg"; // plasmic-import: Bi9ZoqrIWUrr/icon

createPlasmicElementProxy;

export type PlasmicAuthLoginComponent__VariantMembers = {};
export type PlasmicAuthLoginComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicAuthLoginComponent__VariantsArgs;
export const PlasmicAuthLoginComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAuthLoginComponent__ArgsType = {
  loginDetail?: any;
  onLoginDetailChange?: (val: string) => void;
  roleProp?: string;
  isLoginSuccessFn?: (isLogin: number) => void;
};
type ArgPropType = keyof PlasmicAuthLoginComponent__ArgsType;
export const PlasmicAuthLoginComponent__ArgProps = new Array<ArgPropType>(
  "loginDetail",
  "onLoginDetailChange",
  "roleProp",
  "isLoginSuccessFn"
);

export type PlasmicAuthLoginComponent__OverridesType = {
  login?: Flex__<"div">;
  boxSendOtp?: Flex__<"div">;
  coreLabel?: Flex__<typeof CoreLabel>;
  mobile?: Flex__<typeof AntdInput>;
  sendOtpBtn?: Flex__<typeof AntdButton>;
  boxVerifyOtp?: Flex__<"div">;
  title?: Flex__<"div">;
  otpLable?: Flex__<typeof CoreLabel>;
  otp?: Flex__<typeof AntdInput>;
  signupField?: Flex__<"div">;
  firstNameLable?: Flex__<typeof CoreLabel>;
  firstName?: Flex__<typeof AntdInput>;
  lastNameLable?: Flex__<typeof CoreLabel>;
  lastName?: Flex__<typeof AntdInput>;
  genderLable?: Flex__<typeof CoreLabel>;
  gender?: Flex__<typeof AntdSelect>;
  birthYearLable?: Flex__<typeof CoreLabel>;
  birthYear?: Flex__<typeof AntdSelect>;
  checkOtpBtn?: Flex__<typeof AntdButton>;
};

export interface DefaultAuthLoginComponentProps {
  loginDetail?: any;
  onLoginDetailChange?: (val: string) => void;
  roleProp?: string;
  isLoginSuccessFn?: (isLogin: number) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuthLoginComponent__RenderFunc(props: {
  variants: PlasmicAuthLoginComponent__VariantsArgs;
  args: PlasmicAuthLoginComponent__ArgsType;
  overrides: PlasmicAuthLoginComponent__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          roleProp: "user"
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

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "mobile.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "otp.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "stepVerify",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "loginDetail",
        type: "writable",
        variableType: "object",

        valueProp: "loginDetail",
        onChangeProp: "onLoginDetailChange"
      },
      {
        path: "firstName.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "lastName.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "gender.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "birthYear.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "httpOtpDetailVar",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
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
      data-plasmic-name={"login"}
      data-plasmic-override={overrides.login}
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
        sty.login
      )}
      dir={"rtl"}
    >
      {(() => {
        try {
          return !$state.stepVerify;
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
          data-plasmic-name={"boxSendOtp"}
          data-plasmic-override={overrides.boxSendOtp}
          className={classNames(projectcss.all, sty.boxSendOtp)}
        >
          <LogoNoSvgIcon
            className={classNames(projectcss.all, sty.svg___4UhF)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qQiZt
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__jqCmL
                  )}
                >
                  {
                    "\u0628\u0647 \u0646\u0648\u062c\u0647\u0627\u0646 \u062e\u0648\u0634\u200c \u0627\u0648\u0645\u062f\u06cc!"
                  }
                </h4>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
          <CoreLabel
            data-plasmic-name={"coreLabel"}
            data-plasmic-override={overrides.coreLabel}
            className={classNames("__wab_instance", sty.coreLabel)}
          >
            {
              "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u062a \u0631\u0648 \u0648\u0627\u0631\u062f \u06a9\u0646:\r\n"
            }
          </CoreLabel>
          {(() => {
            const child$Props = {
              allowClear: true,
              autoFocus: true,
              className: classNames("__wab_instance", sty.mobile),
              maxLength: 15,
              onChange: async (...eventArgs: any) => {
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["mobile", "value"],
                  AntdInput_Helpers
                ).apply(null, eventArgs);
              },
              placeholder: "09xx-xxx-xxxx",
              size: "large",
              type: "tel",
              value: generateStateValueProp($state, ["mobile", "value"])
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "mobile.value"
                }
              ],
              [],
              AntdInput_Helpers ?? {},
              child$Props
            );

            return (
              <AntdInput
                data-plasmic-name={"mobile"}
                data-plasmic-override={overrides.mobile}
                {...child$Props}
              />
            );
          })()}
          <AntdButton
            data-plasmic-name={"sendOtpBtn"}
            data-plasmic-override={overrides.sendOtpBtn}
            className={classNames("__wab_instance", sty.sendOtpBtn)}
            onClick={async () => {
              const $steps = {};

              $steps["sendOtp"] = true
                ? (() => {
                    const actionArgs = {
                      args: [
                        "POST",
                        "https://nojapi.darkube.app/webhook/auth/otp",
                        undefined,
                        (() => {
                          try {
                            return {
                              mobile: $state.mobile.value,
                              role: $props.roleProp
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
                        })()
                      ]
                    };
                    return $globalActions["Angel.apiRequest"]?.apply(null, [
                      ...actionArgs.args
                    ]);
                  })()
                : undefined;
              if (
                $steps["sendOtp"] != null &&
                typeof $steps["sendOtp"] === "object" &&
                typeof $steps["sendOtp"].then === "function"
              ) {
                $steps["sendOtp"] = await $steps["sendOtp"];
              }

              $steps["updateMobileValue"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["mobile", "value"]
                      },
                      operation: 0,
                      value: 2222222
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
                $steps["updateMobileValue"] != null &&
                typeof $steps["updateMobileValue"] === "object" &&
                typeof $steps["updateMobileValue"].then === "function"
              ) {
                $steps["updateMobileValue"] = await $steps["updateMobileValue"];
              }
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__o8HWq
              )}
            >
              {"\u0627\u062f\u0627\u0645\u0647"}
            </div>
          </AntdButton>
        </div>
      ) : null}
      {(() => {
        try {
          return $state.stepVerify;
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
          data-plasmic-name={"boxVerifyOtp"}
          data-plasmic-override={overrides.boxVerifyOtp}
          className={classNames(projectcss.all, sty.boxVerifyOtp)}
        >
          <LogoNoSvgIcon
            className={classNames(projectcss.all, sty.svg___63ESa)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__e3T6H
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4___5DCge
                  )}
                >
                  {
                    "\u0628\u0647 \u0646\u0648\u062c\u0647\u0627\u0646 \u062e\u0648\u0634\u200c \u0627\u0648\u0645\u062f\u06cc!"
                  }
                </h4>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
          <div
            data-plasmic-name={"title"}
            data-plasmic-override={overrides.title}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.title
            )}
          >
            {""}
          </div>
          <CoreLabel
            data-plasmic-name={"otpLable"}
            data-plasmic-override={overrides.otpLable}
            className={classNames("__wab_instance", sty.otpLable)}
            requirementIndicator={"required"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xYb5Q
              )}
            >
              {
                "\u0644\u0637\u0641\u0627 \u06a9\u062f \u067e\u06cc\u0627\u0645\u06a9 \u0634\u062f\u0647 \u0631\u0648 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f:\r\n"
              }
            </div>
          </CoreLabel>
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.otp),
              maxLength: 4,
              onChange: async (...eventArgs: any) => {
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["otp", "value"],
                  AntdInput_Helpers
                ).apply(null, eventArgs);
              },
              placeholder: ``,
              prefix: null,
              size: "large",
              type: "number",
              value: generateStateValueProp($state, ["otp", "value"])
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "otp.value"
                }
              ],
              [],
              AntdInput_Helpers ?? {},
              child$Props
            );

            return (
              <AntdInput
                data-plasmic-name={"otp"}
                data-plasmic-override={overrides.otp}
                {...child$Props}
              />
            );
          })()}
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nxoYz,
              "cursor-pointer"
            )}
            onClick={async event => {
              const $steps = {};

              $steps["updateStepVerify"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["stepVerify"]
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
                $steps["updateStepVerify"] != null &&
                typeof $steps["updateStepVerify"] === "object" &&
                typeof $steps["updateStepVerify"].then === "function"
              ) {
                $steps["updateStepVerify"] = await $steps["updateStepVerify"];
              }
            }}
          >
            <React.Fragment>
              {(() => {
                try {
                  return (() => {
                    function toFarsiNumber(n) {
                      const farsiDigits = [
                        "۰",
                        "۱",
                        "۲",
                        "۳",
                        "۴",
                        "۵",
                        "۶",
                        "۷",
                        "۸",
                        "۹"
                      ];

                      return n.toString().replace(/\d/g, x => farsiDigits[x]);
                    }
                    return (
                      " شماره من نیست  " + toFarsiNumber($state.mobile.value)
                    );
                  })();
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "\u0634\u0645\u0627\u0631\u0647 \u0645\u0646 \u0646\u06cc\u0633\u062a ";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          {(() => {
            try {
              return !$state.loginDetail.userexist;
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
              data-plasmic-name={"signupField"}
              data-plasmic-override={overrides.signupField}
              className={classNames(projectcss.all, sty.signupField)}
            >
              <CoreLabel
                data-plasmic-name={"firstNameLable"}
                data-plasmic-override={overrides.firstNameLable}
                className={classNames("__wab_instance", sty.firstNameLable)}
                requirementIndicator={"required"}
              >
                {"\u0646\u0627\u0645"}
              </CoreLabel>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.firstName),
                  maxLength: 200,
                  onChange: async (...eventArgs: any) => {
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["firstName", "value"],
                      AntdInput_Helpers
                    ).apply(null, eventArgs);
                  },
                  placeholder: "\u0646\u0627\u0645",
                  size: "large",
                  type: "text",
                  value: generateStateValueProp($state, ["firstName", "value"])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "firstName.value"
                    }
                  ],
                  [],
                  AntdInput_Helpers ?? {},
                  child$Props
                );

                return (
                  <AntdInput
                    data-plasmic-name={"firstName"}
                    data-plasmic-override={overrides.firstName}
                    {...child$Props}
                  />
                );
              })()}
              <CoreLabel
                data-plasmic-name={"lastNameLable"}
                data-plasmic-override={overrides.lastNameLable}
                className={classNames("__wab_instance", sty.lastNameLable)}
                requirementIndicator={"required"}
              >
                {
                  "\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc"
                }
              </CoreLabel>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.lastName),
                  maxLength: 200,
                  onChange: async (...eventArgs: any) => {
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["lastName", "value"],
                      AntdInput_Helpers
                    ).apply(null, eventArgs);
                  },
                  placeholder:
                    "\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",
                  size: "large",
                  type: "text",
                  value: generateStateValueProp($state, ["lastName", "value"])
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "lastName.value"
                    }
                  ],
                  [],
                  AntdInput_Helpers ?? {},
                  child$Props
                );

                return (
                  <AntdInput
                    data-plasmic-name={"lastName"}
                    data-plasmic-override={overrides.lastName}
                    {...child$Props}
                  />
                );
              })()}
              <CoreLabel
                data-plasmic-name={"genderLable"}
                data-plasmic-override={overrides.genderLable}
                className={classNames("__wab_instance", sty.genderLable)}
                requirementIndicator={"required"}
              >
                {"\u062c\u0646\u0633\u06cc\u062a"}
              </CoreLabel>
              <AntdSelect
                data-plasmic-name={"gender"}
                data-plasmic-override={overrides.gender}
                className={classNames("__wab_instance", sty.gender)}
                defaultStylesClassName={classNames(
                  projectcss.root_reset,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens,
                  plasmic_plasmic_rich_components_css.plasmic_tokens
                )}
                onChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, ["gender", "value"]).apply(
                    null,
                    eventArgs
                  );
                }}
                options={(() => {
                  const __composite = [
                    { value: null, label: null, type: "option" },
                    { value: null, label: null, type: "option" }
                  ];
                  __composite["0"]["value"] = "male";
                  __composite["0"]["label"] =
                    "\u0622\u0642\u0627 \u0647\u0633\u062a\u0645";
                  __composite["1"]["value"] = "female";
                  __composite["1"]["label"] =
                    "\u062e\u0627\u0646\u0645 \u0647\u0633\u062a\u0645";
                  return __composite;
                })()}
                placeholder={"Select..."}
                popupScopeClassName={sty["gender__popup"]}
                size={"large"}
                value={generateStateValueProp($state, ["gender", "value"])}
              />

              <CoreLabel
                data-plasmic-name={"birthYearLable"}
                data-plasmic-override={overrides.birthYearLable}
                className={classNames("__wab_instance", sty.birthYearLable)}
              >
                {"\u0633\u0627\u0644 \u062a\u0648\u0644\u062f"}
              </CoreLabel>
              <AntdSelect
                data-plasmic-name={"birthYear"}
                data-plasmic-override={overrides.birthYear}
                className={classNames("__wab_instance", sty.birthYear)}
                defaultStylesClassName={classNames(
                  projectcss.root_reset,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens,
                  plasmic_plasmic_rich_components_css.plasmic_tokens
                )}
                onChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "birthYear",
                    "value"
                  ]).apply(null, eventArgs);
                }}
                options={(() => {
                  try {
                    return (() => {
                      let yearList = [];
                      for (let i = 1358; i < 1404; i++) {
                        yearList.push({
                          title: i,
                          value: i
                        });
                      }
                      return yearList;
                    })();
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [{ type: "option" }];
                    }
                    throw e;
                  }
                })()}
                placeholder={"Select..."}
                popupScopeClassName={sty["birthYear__popup"]}
                size={"large"}
                value={generateStateValueProp($state, ["birthYear", "value"])}
              />
            </div>
          ) : null}
          <AntdButton
            data-plasmic-name={"checkOtpBtn"}
            data-plasmic-override={overrides.checkOtpBtn}
            className={classNames("__wab_instance", sty.checkOtpBtn)}
            onClick={async () => {
              const $steps = {};
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ovdLc
              )}
            >
              {"\u0627\u062f\u0627\u0645\u0647"}
            </div>
          </AntdButton>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  login: [
    "login",
    "boxSendOtp",
    "coreLabel",
    "mobile",
    "sendOtpBtn",
    "boxVerifyOtp",
    "title",
    "otpLable",
    "otp",
    "signupField",
    "firstNameLable",
    "firstName",
    "lastNameLable",
    "lastName",
    "genderLable",
    "gender",
    "birthYearLable",
    "birthYear",
    "checkOtpBtn"
  ],
  boxSendOtp: ["boxSendOtp", "coreLabel", "mobile", "sendOtpBtn"],
  coreLabel: ["coreLabel"],
  mobile: ["mobile"],
  sendOtpBtn: ["sendOtpBtn"],
  boxVerifyOtp: [
    "boxVerifyOtp",
    "title",
    "otpLable",
    "otp",
    "signupField",
    "firstNameLable",
    "firstName",
    "lastNameLable",
    "lastName",
    "genderLable",
    "gender",
    "birthYearLable",
    "birthYear",
    "checkOtpBtn"
  ],
  title: ["title"],
  otpLable: ["otpLable"],
  otp: ["otp"],
  signupField: [
    "signupField",
    "firstNameLable",
    "firstName",
    "lastNameLable",
    "lastName",
    "genderLable",
    "gender",
    "birthYearLable",
    "birthYear"
  ],
  firstNameLable: ["firstNameLable"],
  firstName: ["firstName"],
  lastNameLable: ["lastNameLable"],
  lastName: ["lastName"],
  genderLable: ["genderLable"],
  gender: ["gender"],
  birthYearLable: ["birthYearLable"],
  birthYear: ["birthYear"],
  checkOtpBtn: ["checkOtpBtn"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  login: "div";
  boxSendOtp: "div";
  coreLabel: typeof CoreLabel;
  mobile: typeof AntdInput;
  sendOtpBtn: typeof AntdButton;
  boxVerifyOtp: "div";
  title: "div";
  otpLable: typeof CoreLabel;
  otp: typeof AntdInput;
  signupField: "div";
  firstNameLable: typeof CoreLabel;
  firstName: typeof AntdInput;
  lastNameLable: typeof CoreLabel;
  lastName: typeof AntdInput;
  genderLable: typeof CoreLabel;
  gender: typeof AntdSelect;
  birthYearLable: typeof CoreLabel;
  birthYear: typeof AntdSelect;
  checkOtpBtn: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthLoginComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthLoginComponent__VariantsArgs;
    args?: PlasmicAuthLoginComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuthLoginComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuthLoginComponent__ArgsType,
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
          internalArgPropNames: PlasmicAuthLoginComponent__ArgProps,
          internalVariantPropNames: PlasmicAuthLoginComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuthLoginComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "login") {
    func.displayName = "PlasmicAuthLoginComponent";
  } else {
    func.displayName = `PlasmicAuthLoginComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthLoginComponent = Object.assign(
  // Top-level PlasmicAuthLoginComponent renders the root element
  makeNodeComponent("login"),
  {
    // Helper components rendering sub-elements
    boxSendOtp: makeNodeComponent("boxSendOtp"),
    coreLabel: makeNodeComponent("coreLabel"),
    mobile: makeNodeComponent("mobile"),
    sendOtpBtn: makeNodeComponent("sendOtpBtn"),
    boxVerifyOtp: makeNodeComponent("boxVerifyOtp"),
    title: makeNodeComponent("title"),
    otpLable: makeNodeComponent("otpLable"),
    otp: makeNodeComponent("otp"),
    signupField: makeNodeComponent("signupField"),
    firstNameLable: makeNodeComponent("firstNameLable"),
    firstName: makeNodeComponent("firstName"),
    lastNameLable: makeNodeComponent("lastNameLable"),
    lastName: makeNodeComponent("lastName"),
    genderLable: makeNodeComponent("genderLable"),
    gender: makeNodeComponent("gender"),
    birthYearLable: makeNodeComponent("birthYearLable"),
    birthYear: makeNodeComponent("birthYear"),
    checkOtpBtn: makeNodeComponent("checkOtpBtn"),

    // Metadata about props expected for PlasmicAuthLoginComponent
    internalVariantProps: PlasmicAuthLoginComponent__VariantProps,
    internalArgProps: PlasmicAuthLoginComponent__ArgProps
  }
);

export default PlasmicAuthLoginComponent;
/* prettier-ignore-end */
