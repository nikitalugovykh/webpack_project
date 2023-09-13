declare module '*.scss' {
    const content: Record<string, string>
    export default content
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
