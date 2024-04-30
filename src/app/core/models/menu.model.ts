export interface IMenuItemsModel {
    name: string;
    link?: string;
    iconClass?: string;
    showChild: boolean; 
    childContent:IChildContent[];
}

export interface IChildContent {
    name: string;
    link: string;
    iconClass?: string;
}