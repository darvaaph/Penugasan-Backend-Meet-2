import { Context } from "hono";
import { ContentfulStatusCode } from "hono/utils/http-status";

export const successResponse = (c: Context, code: number, message: string, data: any) => {
    return c.json({
        metadata: {
            code: code,
            status: "success",
            message: message
        },
        data: data
    }, code as ContentfulStatusCode);
}

export const errorResponse = (c: Context, code: number, message: string) => {
    return c.json({
        metadata: {
            code: code,
            status: "error",
            message: message
        },
        data: null
    }, code as ContentfulStatusCode);
}