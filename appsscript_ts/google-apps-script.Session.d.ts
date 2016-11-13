/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: Session.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class Session {
  static getActiveUser(): CommonModule.User;
  static getActiveUserLocale(): string;
  static getEffectiveUser(): CommonModule.User;
  static getScriptTimeZone(): string;
  static getTimeZone(): string;
  static getUser(): CommonModule.User;
  static getClientId(): string;
}
