// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserSingleNeutralMaleStreamlineCoreSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function UserSingleNeutralMaleStreamlineCoreSvgIcon(
  props: UserSingleNeutralMaleStreamlineCoreSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#fff"}
        d={"M7 9A4.232 4.232 0 107 .536 4.232 4.232 0 007 9z"}
      ></path>

      <path
        fill={"#d7e0ff"}
        d={"M13.18 13.5a6.49 6.49 0 00-12.36 0h12.36z"}
      ></path>

      <path
        stroke={"#4147d5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M13.18 13.5a6.49 6.49 0 00-12.36 0h12.36z"}
        strokeWidth={"1"}
      ></path>

      <path
        stroke={"#4147d5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M7 9A4.232 4.232 0 107 .536 4.232 4.232 0 007 9z"}
        strokeWidth={"1"}
      ></path>

      <path
        stroke={"#4147d5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={"M8.382 6.405S8.03 7.096 7 7.096c-1.03 0-1.382-.69-1.382-.69"}
        strokeWidth={"1"}
      ></path>

      <path
        fill={"#d7e0ff"}
        d={
          "M11.155 3.962h-.028a4.117 4.117 0 01-3.09-1.392 4.117 4.117 0 01-3.091 1.392 4.109 4.109 0 01-1.973-.5 4.234 4.234 0 018.182.5z"
        }
      ></path>

      <path
        stroke={"#4147d5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={
          "M11.155 3.962h-.028a4.117 4.117 0 01-3.09-1.392 4.117 4.117 0 01-3.091 1.392 4.109 4.109 0 01-1.973-.5 4.234 4.234 0 018.182.5z"
        }
        strokeWidth={"1"}
      ></path>
    </svg>
  );
}

export default UserSingleNeutralMaleStreamlineCoreSvgIcon;
/* prettier-ignore-end */
