import { IMenuItemsModel } from "src/app/core/models/menu.model";

export const MENU_W_COMUNICATION: IMenuItemsModel[] = [
    {
        name: 'Inicio',
        iconClass: 'home',
        link: '/inicio',
        showChild: true,
        childContent: [
            {
                name: 'Actividad 1',
                iconClass:'',
                link:'actividad1'
            },
            {
                name: 'Actividad 2',
                iconClass:'',
                link:'actividad2'
            }
        ]
    },
    {
        name:'Explicación',
        iconClass:'',
        link: '',
        showChild:false,
        childContent: []
    }
]