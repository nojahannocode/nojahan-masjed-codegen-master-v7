// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FemaleSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FemaleSvgrepoComSvgIcon(props: FemaleSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 85.376c23.579 0 42.693-19.114 42.693-42.7C298.693 19.105 279.579 0 256 0c-23.579 0-42.684 19.105-42.684 42.675 0 23.587 19.105 42.701 42.684 42.701zM370.667 257.78l-31.432-111.518c-8.654-29.213-28.043-48.577-49.858-48.577h-66.736c-21.815 0-41.222 19.364-49.875 48.577L141.333 257.78c-2.305 9.393 3.424 18.985 12.808 21.282 9.402 2.323 18.822-3.174 21.136-12.568l31.33-111.174h9.247l-54.512 193.385h51.398v143.449c0 10.96 8.886 19.846 19.845 19.846 10.976 0 19.854-8.886 19.854-19.846V348.705h10.942v143.449c0 10.96 8.895 19.846 19.862 19.846s19.845-8.886 19.845-19.846V348.705h47.586l-54.52-193.385h9.238l31.33 111.174c2.322 9.394 11.733 14.89 21.127 12.568 9.394-2.297 15.123-11.888 12.818-21.282z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FemaleSvgrepoComSvgIcon;
/* prettier-ignore-end */
