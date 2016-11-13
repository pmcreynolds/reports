/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: FormApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class FormApp {
  static create(title: string): FormApp.Form;
  static getActiveForm(): FormApp.Form;
  static getUi(): CommonModule.Ui;
  static openById(id: string): FormApp.Form;
  static openByUrl(url: string): FormApp.Form;
}

declare namespace FormApp {

  export enum Alignment {

    CENTER,
    LEFT,
    RIGHT

  }


  export interface CheckboxItem {

    createChoice(value: string): FormApp.Choice;
    createResponse(responses: string[]): FormApp.ItemResponse;
    duplicate(): FormApp.CheckboxItem;
    getChoices(): FormApp.Choice[];
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    hasOtherOption(): boolean;
    isRequired(): boolean;
    setChoiceValues(values: string[]): FormApp.CheckboxItem;
    setChoices(choices: FormApp.Choice[]): FormApp.CheckboxItem;
    setHelpText(text: string): FormApp.CheckboxItem;
    setRequired(enabled: boolean): FormApp.CheckboxItem;
    setTitle(title: string): FormApp.CheckboxItem;
    showOtherOption(enabled: boolean): FormApp.CheckboxItem;

  }


  export interface Choice {

    getGotoPage(): FormApp.PageBreakItem;
    getPageNavigationType(): FormApp.PageNavigationType;
    getValue(): string;

  }


  export interface DateItem {

    createResponse(response: Date): FormApp.ItemResponse;
    duplicate(): FormApp.DateItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    includesYear(): boolean;
    isRequired(): boolean;
    setHelpText(text: string): FormApp.DateItem;
    setIncludesYear(enableYear: boolean): FormApp.DateItem;
    setRequired(enabled: boolean): FormApp.DateItem;
    setTitle(title: string): FormApp.DateItem;

  }


  export interface DateTimeItem {

    createResponse(response: Date): FormApp.ItemResponse;
    duplicate(): FormApp.DateTimeItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    includesYear(): boolean;
    isRequired(): boolean;
    setHelpText(text: string): FormApp.DateTimeItem;
    setIncludesYear(enableYear: boolean): FormApp.DateTimeItem;
    setRequired(enabled: boolean): FormApp.DateTimeItem;
    setTitle(title: string): FormApp.DateTimeItem;

  }


  export enum DestinationType {

    SPREADSHEET

  }


  export interface DurationItem {

    createResponse(hours: number, minutes: number, seconds: number): FormApp.ItemResponse;
    duplicate(): FormApp.DurationItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    isRequired(): boolean;
    setHelpText(text: string): FormApp.DurationItem;
    setRequired(enabled: boolean): FormApp.DurationItem;
    setTitle(title: string): FormApp.DurationItem;

  }


  export interface Form {

    addCheckboxItem(): FormApp.CheckboxItem;
    addDateItem(): FormApp.DateItem;
    addDateTimeItem(): FormApp.DateTimeItem;
    addDurationItem(): FormApp.DurationItem;
    addEditor(emailAddress: string): FormApp.Form;
    addEditor(user: CommonModule.User): FormApp.Form;
    addEditors(emailAddresses: string[]): FormApp.Form;
    addGridItem(): FormApp.GridItem;
    addImageItem(): FormApp.ImageItem;
    addListItem(): FormApp.ListItem;
    addMultipleChoiceItem(): FormApp.MultipleChoiceItem;
    addPageBreakItem(): FormApp.PageBreakItem;
    addParagraphTextItem(): FormApp.ParagraphTextItem;
    addScaleItem(): FormApp.ScaleItem;
    addSectionHeaderItem(): FormApp.SectionHeaderItem;
    addTextItem(): FormApp.TextItem;
    addTimeItem(): FormApp.TimeItem;
    addVideoItem(): FormApp.VideoItem;
    canEditResponse(): boolean;
    collectsEmail(): boolean;
    createResponse(): FormApp.FormResponse;
    deleteAllResponses(): FormApp.Form;
    deleteItem(item: FormApp.Item): void;
    deleteItem(index: number): void;
    getConfirmationMessage(): string;
    getCustomClosedFormMessage(): string;
    getDescription(): string;
    getDestinationId(): string;
    getDestinationType(): FormApp.DestinationType;
    getEditUrl(): string;
    getEditors(): CommonModule.User[];
    getId(): string;
    getItemById(id: number): FormApp.Item;
    getItems(): FormApp.Item[];
    getItems(itemType: FormApp.ItemType): FormApp.Item[];
    getPublishedUrl(): string;
    getResponse(responseId: string): FormApp.FormResponse;
    getResponses(): FormApp.FormResponse[];
    getResponses(timestamp: Date): FormApp.FormResponse[];
    getShuffleQuestions(): boolean;
    getSummaryUrl(): string;
    getTitle(): string;
    hasLimitOneResponsePerUser(): boolean;
    hasProgressBar(): boolean;
    hasRespondAgainLink(): boolean;
    isAcceptingResponses(): boolean;
    isPublishingSummary(): boolean;
    moveItem(item: FormApp.Item, toIndex: number): FormApp.Item;
    moveItem(from: number, to: number): FormApp.Item;
    removeDestination(): FormApp.Form;
    removeEditor(emailAddress: string): FormApp.Form;
    removeEditor(user: CommonModule.User): FormApp.Form;
    requiresLogin(): boolean;
    setAcceptingResponses(enabled: boolean): FormApp.Form;
    setAllowResponseEdits(enabled: boolean): FormApp.Form;
    setCollectEmail(collect: boolean): FormApp.Form;
    setConfirmationMessage(message: string): FormApp.Form;
    setCustomClosedFormMessage(message: string): FormApp.Form;
    setDescription(description: string): FormApp.Form;
    setDestination(type: FormApp.DestinationType, id: string): FormApp.Form;
    setLimitOneResponsePerUser(enabled: boolean): FormApp.Form;
    setProgressBar(enabled: boolean): FormApp.Form;
    setPublishingSummary(enabled: boolean): FormApp.Form;
    setRequireLogin(requireLogin: boolean): FormApp.Form;
    setShowLinkToRespondAgain(enabled: boolean): FormApp.Form;
    setShuffleQuestions(shuffle: boolean): FormApp.Form;
    setTitle(title: string): FormApp.Form;
    shortenFormUrl(url: string): string;

  }


  export interface FormResponse {

    getEditResponseUrl(): string;
    getId(): string;
    getItemResponses(): FormApp.ItemResponse[];
    getRespondentEmail(): string;
    getResponseForItem(item: FormApp.Item): FormApp.ItemResponse;
    getTimestamp(): Date;
    submit(): FormApp.FormResponse;
    toPrefilledUrl(): string;
    withItemResponse(response: FormApp.ItemResponse): FormApp.FormResponse;

  }


  export interface GridItem {

    createResponse(responses: string[]): FormApp.ItemResponse;
    duplicate(): FormApp.GridItem;
    getColumns(): string[];
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getRows(): string[];
    getTitle(): string;
    getType(): FormApp.ItemType;
    isRequired(): boolean;
    setColumns(columns: string[]): FormApp.GridItem;
    setHelpText(text: string): FormApp.GridItem;
    setRequired(enabled: boolean): FormApp.GridItem;
    setRows(rows: string[]): FormApp.GridItem;
    setTitle(title: string): FormApp.GridItem;

  }


  export interface ImageItem {

    duplicate(): FormApp.ImageItem;
    getAlignment(): FormApp.Alignment;
    getHelpText(): string;
    getId(): number;
    getImage(): CommonModule.Blob;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    getWidth(): number;
    setAlignment(alignment: FormApp.Alignment): FormApp.ImageItem;
    setHelpText(text: string): FormApp.ImageItem;
    setImage(image: CommonModule.BlobSource): FormApp.ImageItem;
    setTitle(title: string): FormApp.ImageItem;
    setWidth(width: number): FormApp.ImageItem;

  }


  export interface Item {

    asCheckboxItem(): FormApp.CheckboxItem;
    asDateItem(): FormApp.DateItem;
    asDateTimeItem(): FormApp.DateTimeItem;
    asDurationItem(): FormApp.DurationItem;
    asGridItem(): FormApp.GridItem;
    asImageItem(): FormApp.ImageItem;
    asListItem(): FormApp.ListItem;
    asMultipleChoiceItem(): FormApp.MultipleChoiceItem;
    asPageBreakItem(): FormApp.PageBreakItem;
    asParagraphTextItem(): FormApp.ParagraphTextItem;
    asScaleItem(): FormApp.ScaleItem;
    asSectionHeaderItem(): FormApp.SectionHeaderItem;
    asTextItem(): FormApp.TextItem;
    asTimeItem(): FormApp.TimeItem;
    asVideoItem(): FormApp.VideoItem;
    duplicate(): FormApp.Item;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    setHelpText(text: string): FormApp.Item;
    setTitle(title: string): FormApp.Item;

  }


  export interface ItemResponse {

    getItem(): FormApp.Item;
    getResponse(): any;

  }


  export enum ItemType {

    CHECKBOX,
    DATE,
    DATETIME,
    DURATION,
    GRID,
    IMAGE,
    LIST,
    MULTIPLE_CHOICE,
    PAGE_BREAK,
    PARAGRAPH_TEXT,
    SCALE,
    SECTION_HEADER,
    TEXT,
    TIME

  }


  export interface ListItem {

    createChoice(value: string): FormApp.Choice;
    createChoice(value: string, navigationItem: FormApp.PageBreakItem): FormApp.Choice;
    createChoice(value: string, navigationType: FormApp.PageNavigationType): FormApp.Choice;
    createResponse(response: string): FormApp.ItemResponse;
    duplicate(): FormApp.ListItem;
    getChoices(): FormApp.Choice[];
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    isRequired(): boolean;
    setChoiceValues(values: string[]): FormApp.ListItem;
    setChoices(choices: FormApp.Choice[]): FormApp.ListItem;
    setHelpText(text: string): FormApp.ListItem;
    setRequired(enabled: boolean): FormApp.ListItem;
    setTitle(title: string): FormApp.ListItem;

  }


  export interface MultipleChoiceItem {

    createChoice(value: string): FormApp.Choice;
    createChoice(value: string, navigationItem: FormApp.PageBreakItem): FormApp.Choice;
    createChoice(value: string, navigationType: FormApp.PageNavigationType): FormApp.Choice;
    createResponse(response: string): FormApp.ItemResponse;
    duplicate(): FormApp.MultipleChoiceItem;
    getChoices(): FormApp.Choice[];
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    hasOtherOption(): boolean;
    isRequired(): boolean;
    setChoiceValues(values: string[]): FormApp.MultipleChoiceItem;
    setChoices(choices: FormApp.Choice[]): FormApp.MultipleChoiceItem;
    setHelpText(text: string): FormApp.MultipleChoiceItem;
    setRequired(enabled: boolean): FormApp.MultipleChoiceItem;
    setTitle(title: string): FormApp.MultipleChoiceItem;
    showOtherOption(enabled: boolean): FormApp.MultipleChoiceItem;

  }


  export interface PageBreakItem {

    duplicate(): FormApp.PageBreakItem;
    getGoToPage(): FormApp.PageBreakItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getPageNavigationType(): FormApp.PageNavigationType;
    getTitle(): string;
    getType(): FormApp.ItemType;
    setGoToPage(goToPageItem: FormApp.PageBreakItem): FormApp.PageBreakItem;
    setGoToPage(navigationType: FormApp.PageNavigationType): FormApp.PageBreakItem;
    setHelpText(text: string): FormApp.PageBreakItem;
    setTitle(title: string): FormApp.PageBreakItem;

  }


  export enum PageNavigationType {

    CONTINUE,
    GO_TO_PAGE,
    RESTART,
    SUBMIT

  }


  export interface ParagraphTextItem {

    createResponse(response: string): FormApp.ItemResponse;
    duplicate(): FormApp.ParagraphTextItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    isRequired(): boolean;
    setHelpText(text: string): FormApp.ParagraphTextItem;
    setRequired(enabled: boolean): FormApp.ParagraphTextItem;
    setTitle(title: string): FormApp.ParagraphTextItem;

  }


  export interface ScaleItem {

    createResponse(response: number): FormApp.ItemResponse;
    duplicate(): FormApp.ScaleItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getLeftLabel(): string;
    getLowerBound(): number;
    getRightLabel(): string;
    getTitle(): string;
    getType(): FormApp.ItemType;
    getUpperBound(): number;
    isRequired(): boolean;
    setBounds(lower: number, upper: number): FormApp.ScaleItem;
    setHelpText(text: string): FormApp.ScaleItem;
    setLabels(lower: string, upper: string): FormApp.ScaleItem;
    setRequired(enabled: boolean): FormApp.ScaleItem;
    setTitle(title: string): FormApp.ScaleItem;

  }


  export interface SectionHeaderItem {

    duplicate(): FormApp.SectionHeaderItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    setHelpText(text: string): FormApp.SectionHeaderItem;
    setTitle(title: string): FormApp.SectionHeaderItem;

  }


  export interface TextItem {

    createResponse(response: string): FormApp.ItemResponse;
    duplicate(): FormApp.TextItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    isRequired(): boolean;
    setHelpText(text: string): FormApp.TextItem;
    setRequired(enabled: boolean): FormApp.TextItem;
    setTitle(title: string): FormApp.TextItem;

  }


  export interface TimeItem {

    createResponse(hour: number, minute: number): FormApp.ItemResponse;
    duplicate(): FormApp.TimeItem;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    isRequired(): boolean;
    setHelpText(text: string): FormApp.TimeItem;
    setRequired(enabled: boolean): FormApp.TimeItem;
    setTitle(title: string): FormApp.TimeItem;

  }


  export interface VideoItem {

    duplicate(): FormApp.VideoItem;
    getAlignment(): FormApp.Alignment;
    getHelpText(): string;
    getId(): number;
    getIndex(): number;
    getTitle(): string;
    getType(): FormApp.ItemType;
    getWidth(): number;
    setAlignment(alignment: FormApp.Alignment): FormApp.VideoItem;
    setHelpText(text: string): FormApp.VideoItem;
    setTitle(title: string): FormApp.VideoItem;
    setVideoUrl(youtubeUrl: string): FormApp.VideoItem;
    setWidth(width: number): FormApp.VideoItem;

  }


}