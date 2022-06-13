/**
 * get value of queru string parameter
 * @param {string} t url parameter
 * @returns value
 */
export declare const get: (t: string) => string | false;
/**
 * get a specific URL with parameters removed
 * @param {string} t url parameter
 * @returns url
 */
export declare const remove: (t: string) => string | false;
/**
 * get current root directory
 * @returns url
 */
export declare const root: () => string;
/**
 * get current file
 * @returns file name
 */
export declare const file: () => string | undefined;
declare const QueryString: {
    file: () => string | undefined;
    root: () => string;
    get: (t: string) => string | false;
    remove: (t: string) => string | false;
};
export default QueryString;
