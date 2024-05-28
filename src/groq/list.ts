import groq from "groq";

export const LIST_QUERY = groq`*[_type == "list"][1]{name, items[]{_type == 'reference' => @-> {firstName, lastName, role, _id, image }}}`;
