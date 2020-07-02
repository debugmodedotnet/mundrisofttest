import { ExecFileOptionsWithStringEncoding } from "child_process";
import { CourseInfo } from "./courseinfo";

export interface Course {
    title:string; 
    url: string; 
    course_name : string; 
    brief_description: string; 
    course_info:CourseInfo;
    banner_image:any; 
    uid:string; 
    publish_details:any; 

}