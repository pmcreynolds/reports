/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: PropertiesService.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class PropertiesService {
  static getDocumentProperties(): PropertiesService.Properties;
  static getScriptProperties(): PropertiesService.Properties;
  static getUserProperties(): PropertiesService.Properties;
}

declare namespace PropertiesService {

  export interface Properties {

    deleteAllProperties(): PropertiesService.Properties;
    deleteProperty(key: string): PropertiesService.Properties;
    getKeys(): string[];
    getProperties(): any;
    getProperty(key: string): string;
    setProperties(properties: any): PropertiesService.Properties;
    setProperties(properties: any, deleteAllOthers: boolean): PropertiesService.Properties;
    setProperty(key: string, value: string): PropertiesService.Properties;

  }


}