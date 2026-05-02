export interface AventuraOption {
    label: string;
    checked: boolean;
    tooltip: string;
}

export const aventuraOptions: AventuraOption[] = [
    { label: 'Quads', checked: false, tooltip: 'prueba quad' },
    { label: 'Parapente', checked: false, tooltip: 'prueba parapente' },
    { label: 'Rafting', checked: false, tooltip: 'prueba rafting' },
    { label: 'Explora', checked: false, tooltip: 'prueba exploración' },
    { label: 'Buceo', checked: false, tooltip: 'prueba buceo' },
    { label: 'Paracaídas', checked: false, tooltip: 'prueba paracaídas' },
    { label: 'Snowboard', checked: false, tooltip: 'prueba snowboard' },
    { label: 'Surf', checked: false, tooltip: 'prueba surf' },
];