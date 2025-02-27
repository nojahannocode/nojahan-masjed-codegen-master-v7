// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditStreamlineTablerSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditStreamlineTablerSvgIcon(
  props: EditStreamlineTablerSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-0.5 -0.5 16 16"}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.375 4.375H3.75a1.25 1.25 0 00-1.25 1.25v5.625a1.25 1.25 0 001.25 1.25h5.625a1.25 1.25 0 001.25-1.25v-.625"
        }
        strokeWidth={"1"}
      ></path>

      <path
        d={
          "M12.74 4.116a1.313 1.313 0 00-1.856-1.857L5.625 7.5v1.875H7.5l5.24-5.26zM10 3.125L11.875 5"
        }
        strokeWidth={"1"}
      ></path>
    </svg>
  );
}

export default EditStreamlineTablerSvgIcon;
/* prettier-ignore-end */
