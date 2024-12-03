interface MenuItem{
    _id:string,
    type:string;
    category:string;
    subCategory: MenuItemSubItem[];
}

interface MenuItemSubItem{
    name : string;
    icon:string;
    _id:string;
    link:string;
}