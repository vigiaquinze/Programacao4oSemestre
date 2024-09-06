import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function middleware (request) {
    const token = request.headers.get('Authorization')?.split('')[1];

    if(!token){
        return NextResponse.redirect(newURL('/login', request.url));
    }
    try {
        const decoded = jwt.verify
    } catch (error) {
        
    }
}