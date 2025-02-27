// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaleSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaleSvgrepoCom2SvgIcon(props: MaleSvgrepoCom2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-15.14 0 47.753 47.753"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        data-name={"20"}
        d={
          "M17.48 29.803h-3.194V16.554h-.718v31.2H9.063V29.829h-.646v17.924h-4.5v-31.2h-.718v13.249H.005V15.269h.016v-.908c0-2.962 5.78-4.388 8.724-4.388s8.724 1.426 8.724 4.388v.908h.016zM8.902 7.956a3.978 3.978 0 114.038-3.978 4.02 4.02 0 01-4.038 3.978z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default MaleSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
