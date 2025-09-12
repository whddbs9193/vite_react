import * as React from "react";

export default function User( {
       title,
       children,
      }: {
        title : string;
        children: React.ReactNode;
        })
{
    return (

        <>
            <h1>{title}</h1>
            {children}
        </>
    );
}


