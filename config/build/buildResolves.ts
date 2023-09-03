import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolves = ({paths}: BuildOptions):webpack.ResolveOptions => {
    return {
        extensions: [ '.tsx', '.ts', '.js' ],
    }
}