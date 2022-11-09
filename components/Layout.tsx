import React from "react";

export interface Layout extends React.FunctionComponent<Layout> {
    children: React.ReactNode;

}

export const Button: React.FC<Layout> = ({children}) => {
    return <div style={{padding:"24px 16px"}} >{children}</div>
  }