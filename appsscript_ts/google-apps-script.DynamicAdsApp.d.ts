/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: DynamicAdsApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class DynamicAdsApp {
  static getFeedInfo(feedId: string): DynamicAdsApp.Feed;
  static updateFeed(spreadsheetKey: string, useCaseName: string, elementName: string, customerId: number): DynamicAdsApp.Feed;
}

declare namespace DynamicAdsApp {

  export enum ErrorType {

    GEO_ERROR,
    IMAGE_ERROR,
    MISSING_ID

  }


  export interface Feed {

    getFeedId(): string;
    getFeedSummary(): DynamicAdsApp.FeedSummary;

  }


  export enum FeedStatus {

    QUEUED_FOR_UPDATE,
    UPDATE_FAILED,
    UPDATE_SUCCESSFUL,
    UPDATING

  }


  export interface FeedSummary {

    getRowLogBundles(): DynamicAdsApp.RowLogBundle[];
    getStatus(): DynamicAdsApp.FeedStatus;

  }


  export interface RowLog {

    getColumnName(): string;
    getErrorType(): DynamicAdsApp.ErrorType;
    getErrorValue(): string;

  }


  export interface RowLogBundle {

    getRowId(): string;
    getRowLogs(): DynamicAdsApp.RowLog[];

  }


}