import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAutN38C_OWG_gvTzancb7KILeZzcWl2Y0");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export { model }