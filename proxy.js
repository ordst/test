import { NextResponse } from "next/server";

export function proxy(request){
    console.log("No permissioni")
    return NextResponse.redirect(new URL('/',request.url))

}

export const config={
    matcher:'/blog',
}