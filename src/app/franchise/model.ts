export class Image {
 
        public uid: string = '';
        public created_at: Date;
        public updated_at: Date;
        public created_by: string = '';
        public updated_by: string = '';
        public content_type: string = '';
        public file_size: number = undefined;
        public tags: any[] = [];
        public filename: string = '';
        public url: string = '';
        public ACL: any[] = [];
        public is_dir: boolean = false;
        public parent_uid: string = '';
        public _version: number = undefined;
        public title: string = '';
        public publish_details:Publish_details;//=publish_details.clone()
   
}

export class Publish_details {
     
        public environment: string = '';
        public locale: string = '';
        public user: string = '';
   
}
export class Banner_section {
  
        public image: Image;
        public heading: string = '';
        public description: string = '';
        public cta_button_url: string = '';
   
}
export class Contact_details {
    public address: string = '';
    public phone_number: string = '';
    public email_address: string = '';
}
export class Event_section {
    public heading: string = '';
    public description: string = '';
    public email_address: string = '';
    public reference:any;
}
export class Group {
    public background_image: Background_image;
}
export class Background_image {
    public uid: string = '';
    public created_at: Date=undefined;
    public updated_at:Date=undefined;
    public created_by:string = '';
    public updated_by:string = '';
    public content_type:string = '';
    public file_size:string = '';
    public tags:any;
    public filename:string = '';
    public url:string = '';
    public ACL:any;
    public is_dir:false;
    public _version:number;
    public title:string = '';
    public publish_details:any;
}
export class Marketing_section3 {
    public heading: string='';
    public sub_heading: string='';
    public description: string='';
      
    public image:Image;
}
export class Marketing_section1 {
    public heading: string='';
    public image:Image; 
    public description: string='';
}
export class Marketing_section2 {
    public heading: string='';
    public sub_heading: string='';
    public description: string='';
  
    public image:Image;
}
export class Block {
    public heading: string='';
    public image:Image;
    public description:string='';
    
    public cta_button_text: string='';
    public cta_button_url: string='';
}
export class Current_location_information {
    public uid: string='';
    public created_at: Date=undefined;
    public updated_at:Date=undefined;
    public created_by:string = '';
    public updated_by:string = '';
    
    public content_type: string='';
    public file_size: string='';
    public tags: any;
    public filename: string='';
    public url: string='';
    public ACL: any;
    public is_dir:boolean=false;
    public _version:number;
    public title: string='';
    public publish_details:any;
}
export class Block2 {
    public current_location_information:Current_location_information;     
}
export class Testimonial{
    public created_at: Date=undefined;
  
    public created_by:string = '';
    public updated_by:string = '';
    public _version:number = undefined;
    public locale:string = '';
    public uid:string = '';
    public ACL:any;
    public _in_progress:boolean= false;
    public feedback_given_by:string = '';
    public feedback_text:string = '';
    public heading:string = '';
    public image:Image ;
    public tags:any;
    public title:string = '';
    public url:string = '';
    public updated_at: Date=undefined;
    public publish_details:Publish_details;
    public _content_type_uid:string = '';
}
export class Entry {   
       public _version: number=undefined ;
        public locale: string = '';
        public uid: string = '';
        public ACL: any = {};
        public _in_progress:boolean=false;
        public  banner_section:Banner_section; 
       
     
        public marketing_section_1:Marketing_section1
        public contact_details:Contact_details ;
        public event_section:Event_section;
        public group:Group;
        public marketing_section_2:Marketing_section2;
        public marketing_section_2_modular_blocks:[
            {'block_1':Block},
            {'block_2':Block},
            {'block_3':Block}
        ];   
        public marketing_section_3:Marketing_section3;
        public marketing_section_3_modular_blocks:[
            {'block_1':Block},
            {'block_2':Block},
            {'block_3':Block}
            
        ];
        public modular_blocks:Block2[];
        public testimonial_section:Testimonial[];
        public publish_details:Publish_details;
}

export class Franchise { 
    public entry:Entry;
}