module Manifesto {
    export interface ICanvas {
        id: string;
        jsonld: any;
        manifest: IManifest;
        ranges: Range[];
        type: CanvasType;
        getHeight(): number;
        getLabel(): string;
        getRange(): IRange;
        getThumbUri(width:number, height:number): string;
        getWidth(): number;
    }
}