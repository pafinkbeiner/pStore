export default interface Storage{

    get: () => any ;
    getById: (key: string) => any;
    set: (key:string, value: any) => any;
    wipe: () => any;
}