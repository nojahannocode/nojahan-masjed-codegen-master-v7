// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 184 152"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"none"} fillRule={"evenodd"}>
        <g transform={"translate(24 31.67)"}>
          <ellipse
            fillOpacity={".8"}
            fill={"#F5F5F7"}
            cx={"67.797"}
            cy={"106.89"}
            rx={"67.797"}
            ry={"12.668"}
          ></ellipse>

          <path
            d={
              "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            }
            fill={"#AEB8C2"}
          ></path>

          <path
            d={
              "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            }
            fill={"url(#linearGradient-1)"}
            transform={"translate(13.56)"}
          ></path>

          <path
            d={
              "M33.83 0h67.933a4 4 0 014 4v93.344a4 4 0 01-4 4H33.83a4 4 0 01-4-4V4a4 4 0 014-4z"
            }
            fill={"#F5F5F7"}
          ></path>

          <path
            d={
              "M42.678 9.953h50.237a2 2 0 012 2V36.91a2 2 0 01-2 2H42.678a2 2 0 01-2-2V11.953a2 2 0 012-2zm.262 39.814h49.713a2.262 2.262 0 110 4.524H42.94a2.262 2.262 0 010-4.524zm0 11.763h49.713a2.262 2.262 0 110 4.525H42.94a2.262 2.262 0 010-4.525zm78.873 43.502c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 01-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569a7.33 7.33 0 01-.221 1.789z"
            }
            fill={"#DCE0E6"}
          ></path>
        </g>

        <path
          d={
            "M149.121 33.292l-6.83 2.65a1 1 0 01-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          }
          fill={"#DCE0E6"}
        ></path>

        <g transform={"translate(149.65 15.383)"} fill={"#FFF"}>
          <ellipse
            cx={"20.654"}
            cy={"3.167"}
            rx={"2.849"}
            ry={"2.815"}
          ></ellipse>

          <path
            d={"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
