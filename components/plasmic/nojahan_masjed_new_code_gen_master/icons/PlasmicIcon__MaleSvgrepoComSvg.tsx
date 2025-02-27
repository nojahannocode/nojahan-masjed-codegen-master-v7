// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaleSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaleSvgrepoComSvgIcon(props: MaleSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-11.5 0 32 32"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7 7.344a2.374 2.374 0 00-2.375-2.375c-1.281 0-2.344 1.063-2.344 2.375s1.063 2.375 2.344 2.375A2.374 2.374 0 007 7.344zM.781 10.5h7.906c.438 0 .781.344.781.781v5.125c0 .438-.344.813-.781.813-.438 0-.781-.375-.781-.813v-2.344c0-.438-.219-.813-.5-.813s-.5.375-.5.813v12.625a.773.773 0 01-.781.781.773.773 0 01-.781-.781v-5.531c0-.438-.281-.781-.594-.781-.344 0-.594.344-.594.781v5.531c0 .438-.375.781-.813.781a.773.773 0 01-.781-.781V14.062c0-.438-.219-.813-.5-.813-.25 0-.469.375-.469.813v2.344a.828.828 0 01-.813.813c-.438 0-.781-.375-.781-.813v-5.125c0-.438.344-.781.781-.781z"
        }
      ></path>
    </svg>
  );
}

export default MaleSvgrepoComSvgIcon;
/* prettier-ignore-end */
