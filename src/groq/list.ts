import groq from "groq";

export const listGroq = groq`*[_type == "list"][1]`;
