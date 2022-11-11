import {SendMessageProps} from "../types";
import {baseTemplateEmail} from "./base";
import {templateLesson} from "./templateLesson";

export const getHTML = (template: SendMessageProps['template']) => {
    switch (template) {
        case "lesson":
            return templateLesson
        case "base":
        default:
            return baseTemplateEmail
    }
}
