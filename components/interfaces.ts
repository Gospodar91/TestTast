
 export  interface Itext {
    title: string;
    body: string;
  }
 export interface FormProps{
    onAdd(title:string,body:string):void
}
export interface IHome{
   allPostsData:any
   }
export interface IPost{
   postData :any
   }
export interface ILayout{
   children :any
   home:boolean
   }